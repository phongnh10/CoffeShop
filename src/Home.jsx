import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from './colors';
import Product from '../item/Product';
import {getAllCategories, getProductsByCategory} from './Helpers/APIHelpers';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  //Array list category
  const getCategories = async () => {
    try {
      const response = await getAllCategories();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    return () => {}; //cleanup
  }, []);

  /// Array product
  const getProducts = async () => {
    try {
      const response = await getProductsByCategory();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
    return () => {};
  }, []);

  const [selectId, setSelectId] = useState(1);

  // function
  const ClickCategory = id => {
    setSelectId(id);
  };
  // renderCategory
  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={style.category}
        onPress={() => ClickCategory(item._id)}>
        <Text
          style={item._id === selectId ? style.selectCategory : style.itemList}>
          {item.name}
        </Text>
        {item.id === selectId && <View style={style.doc}></View>}
      </TouchableOpacity>
    );
  };

  // renderProduct1
  const renderProduct = ({item}) => {
    return (
      <View style={{marginHorizontal: 11}}>
        <Product
          pointStar={item.rating}
          image={item.image}
          nameProduct={item.name}
          noteProduct={item.description}
          priceProduct={item.price}></Product>
      </View>
    );
  };
  // renderProduct2
  const renderProduct2 = ({item}) => {
    return (
      <View style={{marginHorizontal: 11}}>
        <Product
          pointStar={item.rating}
          image={item.image}
          nameProduct={item.name}
          noteProduct={item.description}
          priceProduct={item.price}></Product>
      </View>
    );
  };

  return (
    <ScrollView alwaysBounceVertical={true}>
      <View style={style.body}>
        <View style={style.top}>
          <View style={style.topContainer}>
            <Image
              style={style.topImageLeft}
              source={require('../icon/element-3.png')}></Image>
          </View>
          <View style={style.topContainer}>
            <Image
              style={style.topImageRight}
              source={require('../icon/Intersect.png')}></Image>
          </View>
        </View>

        <View style={style.textTopContainer}>
          <Text style={style.topText}>Find the best</Text>
          <Text style={style.topText}>coffee for you</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={style.search}>
            <View style={style.itemSearch}>
              <Image source={require('../icon/icon_search.png')}></Image>
            </View>
            <TextInput
              style={style.search_input}
              placeholder="Find Your Coffee"
              placeholderTextColor={'#52555A'}></TextInput>
          </View>
        </View>

        <View style={style.containerList}>
          <FlatList
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* <View style={{marginHorizontal: 12, marginTop: 5}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => `product-${item.id}`}
          />
        </View>

        <View>
          <Text style={style.productText}>Coffee beans</Text>
        </View>

        <View style={{marginHorizontal: 10}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={products}
            renderItem={renderProduct2}
            keyExtractor={item => `product2-${item.id}`}
          />
        </View> */}
      </View>
      <View style={{height: 30}}></View>
    </ScrollView>
  );
};

export default Home;

const style = StyleSheet.create({
  body: {
    flexDirection: 'column',
    backgroundColor: '#1E1E1E',
    height: '100%',
  },
  top: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 29,
  },
  topContainer: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#21262E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImageLeft: {
    height: 15,
    width: 15,
  },
  topImageRight: {
    height: 30,
    width: 30,
  },
  textTopContainer: {
    marginLeft: 30,
    marginTop: 31,
  },
  topText: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  search: {
    backgroundColor: '#141921',
    width: 330,
    height: 45,
    borderRadius: 15,
    marginTop: 28,
    marginBottom: 28,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemSearch: {
    marginLeft: 18,
    marginRight: 18,
  },
  search_input: {
    width: '80%',
    color: 'white',
  },
  containerList: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  category: {
    alignItems: 'center',
    margin: 10,
  },
  itemList: {
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#52555A',
  },
  doc: {
    width: 10,
    height: 10,
    backgroundColor: colors.primaryButton,
    borderRadius: 5,
    marginTop: 3,
  },
  selectCategory: {
    color: colors.primaryButton,
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 23,
    marginBottom: 19,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
});
