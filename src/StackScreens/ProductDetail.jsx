import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getProduct, addOrderDetail, addFavorite} from '../Helpers/APIHelpers';
import {AppContext} from '../AppContext';

const {width, height} = Dimensions.get('window');

const ProductDetail = ({route}) => {
  const {id} = route.params;
  const [successMessageAdd, setSuccessMessageAdd] = useState(false);
  const [successMessageFavorite, setSuccessMessageFavorite] = useState(false);
  const navigation = useNavigation();
  const [totalPrice, setTotalPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState(null);
  const [sizeAdd, setSizeAdd] = useState('');
  const {user} = useContext(AppContext);

  const {favorite, setFavorite} = useContext(AppContext);
  const {cartAPI, setCartAPI} = useContext(AppContext);

  const ListProduct = async idProduct => {
    try {
      const response = await getProduct(idProduct);
      setProduct([response]);
      setPrice(response.price);
      setTotalPrice(response.price);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchOrderDetail = async () => {
    try {
      const OrderDetail = {
        quantity: 1,
        totalPrice: totalPrice,
        size: sizeAdd,
        idProduct: id,
        idUser: user,
      };
      const response = await addOrderDetail(OrderDetail);
      if (response) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  useEffect(() => {
    ListProduct(id);
  }, [id]);

  // add Orderdetail
  const addProduct = async () => {
    const isSuccess = await fetchOrderDetail();
    if (isSuccess == true) {
      setCartAPI(cartAPI + 1);
      setSuccessMessageAdd(true);
      setTimeout(() => {
        setSuccessMessageAdd(false);
      }, 3000);
    }
  };

  console.log('<>>>>>>>', favorite);

  const fetchAddFavorite = async () => {
    try {
      const favorite = {idProduct: id, idUser: user};
      const response = await addFavorite(favorite);
      if (response) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  };
  const addFavorites = async () => {
    const isSuccess = await fetchAddFavorite();
    if (isSuccess) {
      setFavorite(favorite + 1);
      setSuccessMessageFavorite(true);
      setTimeout(() => {
        setSuccessMessageFavorite(false);
      }, 3000);
    } else {
      ToastAndroid.show('Sản phẩm đã có trong yêu thích', ToastAndroid.SHORT);
    }
  };

  console.log('size', sizeAdd, 'price', totalPrice);

  const renderItem = ({item}) => {
    // if (sizeAdd === '' || sizeAdd === null) {
    //   if (item.category.includes('6706902bc49174bfd85e4304')) {
    //     setSizeAdd('250gm');
    //   } else {
    //     setSizeAdd('S');
    //   }
    // }
    return (
      <View style={myStyle.body}>
        <View style={myStyle.image}>
          <Image style={myStyle.image1} source={{uri: item.image}} />
          <View style={myStyle.mid}>
            <View style={myStyle.midContent}>
              <View style={myStyle.content}>
                <View>
                  <Text style={myStyle.name}>{item.name}</Text>
                  <Text style={myStyle.note}>From Africa</Text>
                </View>
                <View style={myStyle.midContent2}>
                  <View style={myStyle.starContainer}>
                    <Image
                      style={myStyle.imageStar}
                      source={require('../../icon/icon_star.png')}
                    />
                    <Text style={myStyle.textStar}>{item.rating}</Text>
                    <Text style={myStyle.textComment}>
                      {'(' + item.rating_quantity + ')'}
                    </Text>
                  </View>
                </View>
              </View>
              {item.category.includes('6706902bc49174bfd85e4304') ? (
                <BeanDetail />
              ) : (
                <CoffeeDetail />
              )}
            </View>
          </View>
        </View>
        <View style={myStyle.topNavigation}>
          <TouchableOpacity
            style={myStyle.itemNavigation}
            onPress={() => navigation.navigate('TabNavigation')}>
            <Image source={require('../../icon/icon_back.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            style={myStyle.itemNavigation}
            onPress={() => addFavorites()}>
            <Image source={require('../../icon/icon_heath.png')} />
          </TouchableOpacity>
        </View>

        <View style={{margin: 20}}>
          <Text style={myStyle.description}>Description</Text>
          <Text style={myStyle.descriptionDetails}>{item.description}</Text>
          <Text style={myStyle.description}>Size</Text>
          {item.category.includes('6706902bc49174bfd85e4304') ? (
            <Coffee
              setSizeAdd={setSizeAdd}
              setTotalPrice={setTotalPrice}
              price={price}
            />
          ) : (
            <Bean
              setSizeAdd={setSizeAdd}
              setTotalPrice={setTotalPrice}
              price={price}
            />
          )}
          <View style={[myStyle.content2, {marginTop: 40}]}>
            <View
              style={[
                myStyle.content,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Text style={{color: '#AEAEAE', fontSize: 12}}>Price</Text>
              <View style={myStyle.content2}>
                <Text style={{color: '#D17842', fontSize: 20, marginRight: 5}}>
                  $
                </Text>
                <Text style={{color: 'white', fontSize: 20}}>{totalPrice}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={myStyle.button}
              onPress={() => addProduct()}>
              <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {successMessageAdd && (
          <View style={myStyle.successMessage}>
            <Text style={myStyle.successText}>Thêm sản phẩm thành công!</Text>
          </View>
        )}
        {successMessageFavorite && (
          <View style={myStyle.successMessage}>
            <Text style={myStyle.successText}>Đã thêm vào yêu thích!</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={product}
      renderItem={renderItem}
      keyExtractor={item => (item?._id ? item._id : Math.random().toString())}
    />
  );
};

const Bean = ({setTotalPrice, price, setSizeAdd}) => {
  const [size, setSize] = useState('S');
  const handleSizeChange = newSize => {
    setSize(newSize);
    if (newSize === 'M') {
      setTotalPrice(1 + price);
      setSizeAdd('M');
    } else if (newSize === 'L') {
      setTotalPrice(2 + price);
      setSizeAdd('L');
    } else if (newSize === 'S') {
      setTotalPrice(price);
      setSizeAdd('S');
    }
  };
  return (
    <View style={myStyle.item}>
      <TouchableOpacity
        onPress={() => handleSizeChange('S')}
        style={size === 'S' ? myStyle.itemSizeChose : myStyle.itemSize}>
        <Text style={size === 'S' ? myStyle.sizeChose : myStyle.size}>S</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSizeChange('M')}
        style={size === 'M' ? myStyle.itemSizeChose : myStyle.itemSize}>
        <Text style={size === 'M' ? myStyle.sizeChose : myStyle.size}>M</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSizeChange('L')}
        style={size === 'L' ? myStyle.itemSizeChose : myStyle.itemSize}>
        <Text style={size === 'L' ? myStyle.sizeChose : myStyle.size}>L</Text>
      </TouchableOpacity>
    </View>
  );
};

const Coffee = ({setTotalPrice, price, setSizeAdd}) => {
  const [size, setSize] = useState('250gm');
  const handleSizeChange = newSize => {
    setSize(newSize);
    if (newSize === '500gm') {
      setTotalPrice(1 + price);
      setSizeAdd('500gm');
    } else if (newSize === '1000gm') {
      setTotalPrice(2 + price);
      setSizeAdd('1000gm');
    } else if (newSize === '250gm') {
      setTotalPrice(price);
      setSizeAdd('250gm');
    }
  };
  return (
    <View style={myStyle.item}>
      <TouchableOpacity
        onPress={() => handleSizeChange('250gm')}
        style={size === '250gm' ? myStyle.itemSizeChose : myStyle.itemSize}>
        <Text style={size === '250gm' ? myStyle.sizeChose : myStyle.size}>
          250gm
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSizeChange('500gm')}
        style={size === '500gm' ? myStyle.itemSizeChose : myStyle.itemSize}>
        <Text style={size === '500gm' ? myStyle.sizeChose : myStyle.size}>
          500gm
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleSizeChange('1000gm')}
        style={size === '1000gm' ? myStyle.itemSizeChose : myStyle.itemSize}>
        <Text style={size === '1000gm' ? myStyle.sizeChose : myStyle.size}>
          1000gm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const CoffeeDetail = () => {
  return (
    <View style={myStyle.content}>
      <View style={myStyle.content2}>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/coffee1.png')}></Image>
          <Text style={myStyle.size}>Coffee</Text>
        </View>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/milk1.png')}></Image>
          <Text style={myStyle.size}>Milk</Text>
        </View>
      </View>
      <View style={myStyle.iconMid2}>
        <Text style={myStyle.size}>Medium Roasted</Text>
      </View>
    </View>
  );
};

const BeanDetail = () => {
  return (
    <View style={myStyle.content}>
      <View style={myStyle.content2}>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/coffee1.png')}></Image>
          <Text style={myStyle.size}>Bean</Text>
        </View>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/milk1.png')}></Image>
          <Text style={myStyle.size}>Africa</Text>
        </View>
      </View>
      <View style={myStyle.iconMid2}>
        <Text style={myStyle.size}>Medium Roasted</Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const myStyle = StyleSheet.create({
  body: {
    width: width,
    height: height,
    backgroundColor: '#0C0F14',
  },
  image1: {
    resizeMode: 'cover',
    height: 521,
    width: width,
  },
  image: {
    resizeMode: 'cover',
    width: width,
    height: 521,
  },
  topNavigation: {
    flexDirection: 'row',
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 44,
    margin: 22,
  },
  itemNavigation: {
    width: 33,
    height: 33,
    backgroundColor: '#21262E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    height: 148,
    width: width,
    zIndex: 1,
    position: 'absolute',
    opacity: 0.8,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'black',
    bottom: 0,
  },
  midContent: {
    margin: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  name: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  note: {
    color: '#AEAEAE',
    fontSize: 12,
    fontWeight: '900',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  midContent2: {
    width: 53,
    height: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textComment: {
    color: '#AEAEAE',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  imageStar: {
    height: 22,
    width: 22,
    marginRight: 5,
  },
  iconMid: {
    height: 55,
    width: 55,
    backgroundColor: '#141921',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMid2: {
    width: 131,
    height: 44,
    backgroundColor: '#141921',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemSize: {
    width: 100,
    height: 40,
    backgroundColor: '#141921',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSizeChose: {
    width: 100,
    height: 40,
    backgroundColor: '#141921',
    borderRadius: 10,
    borderColor: '#D17842',
    borderWidth: 2, // Thêm độ dày viền
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    color: 'white',
    fontWeight: 'bold',
  },
  sizeChose: {
    color: '#D17842',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#AEAEAE',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  descriptionDetails: {
    fontSize: 12,
    color: 'white',
    lineHeight: 20,
    height: 80,
  },
  button: {
    width: 244,
    height: 60,
    backgroundColor: '#D17842',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successMessage: {
    position: 'absolute',
    top: 180,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    padding: 10,
    zIndex: 1,
  },
  successText: {
    color: 'white',
    textAlign: 'center',
  },
});
