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
import React, {useState, useEffect} from 'react';
import colors from '../colors';
import Product from '../../item/Product';
import ProductDetail from '../StackScreens/ProductDetail';
import {
  getCategories,
  getProducts,
  getProductsByIdCategory,
} from '../Helpers/APIHelpers';

const Home = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);

  // list category
  const ListCategory = async () => {
    try {
      const response = await getCategories();
      setCategories(response);
    } catch (error) {
      console.error('Lỗi khi xử lý danh mục:', error);
    }
  };

  useEffect(() => {
    ListCategory();
  }, []);
  // Nhấn thư mục
  const [selectId, setSelectId] = useState(null);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectId(categories[0]._id);
    }
  }, [categories]);
  const ClickCategory = async _id => {
    console.log('id truyền vào khi nhấn', _id);
    setSelectId(_id);
  };

  // list product
  const ListProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ListProducts();
    return () => {}; //cleanup
  }, []);

  const ListProductsByCategory = async categoryId => {
    console.log(' Id tìm trên APi:', categoryId);
    try {
      const response = await getProductsByIdCategory(categoryId);
      setProductsByCategory(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectId) {
      ListProductsByCategory(selectId);
      return () => {}; //clearup
    }
  }, [selectId]);

  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={style.category}
        onPress={() => ClickCategory(item._id)}>
        <Text
          style={item._id === selectId ? style.selectCategory : style.itemList}>
          {item.name}
        </Text>
        {item._id === selectId && <View style={style.doc}></View>}
      </TouchableOpacity>
    );
  };

  const renderProducts = ({item}) => {
    return (
      <View style={{marginHorizontal: 11}}>
        <Product
          nameProduct={item.name}
          sort_descriptionProduct={item.sort_description}
          priceProduct={item.price}
          rating={item.rating}
          imageProduct={item.image}
          onPress={() =>
            navigation.navigate('ProductDetail', {id: item._id})
          }></Product>
      </View>
    );
  };
  const renderProductByCategory = ({item}) => {
    return (
      <View style={{marginHorizontal: 11}}>
        <Product
          nameProduct={item.name}
          sort_descriptionProduct={item.sort_description}
          priceProduct={item.price}
          rating={item.rating}
          imageProduct={item.image}
          onPress={() =>
            navigation.navigate('ProductDetail', {id: item._id})
          }></Product>
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
              source={require('../../icon/element-3.png')}></Image>
          </View>
          <View style={style.topContainer}>
            <Image
              style={style.topImageRight}
              source={require('../../icon/Intersect.png')}></Image>
          </View>
        </View>

        <View style={style.textTopContainer}>
          <Text style={style.topText}>Find the best</Text>
          <Text style={style.topText}>coffee for you</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={style.search}>
            <View style={style.itemSearch}>
              <Image source={require('../../icon/icon_search.png')}></Image>
            </View>
            <TextInput
              style={style.search_input}
              placeholder="Find Your Coffee"
              placeholderTextColor={'#52555A'}></TextInput>
          </View>
        </View>
        <View style={style.containerList}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item._id.toString()}
          />
        </View>
        <View style={{marginHorizontal: 12, marginTop: 5}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={productsByCategory}
            renderItem={renderProductByCategory}
            keyExtractor={item => item._id.toString()}
          />
        </View>
        <View>
          <Text style={style.productText}>Coffee beans</Text>
        </View>

        <View style={{marginHorizontal: 12, marginTop: 5}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={products.slice(6, 11)}
            renderItem={renderProducts}
            keyExtractor={item => item._id.toString()}
          />
        </View>
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
