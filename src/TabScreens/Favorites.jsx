import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useEffect, useState, useCallback} from 'react';
import HeadrNavigation from '../../item/HeadrNavigation';
import {getFavoriteUser, deleteFavorite} from '../Helpers/APIHelpers';
import {AppContext} from '../AppContext';

const {width, height} = Dimensions.get('window');

const Favorites = () => {
  const {user} = useContext(AppContext);
  const {favorite} = useContext(AppContext);

  const [Listfavorite, setListFavorite] = useState([]);

  const fetchFavorites = useCallback(async () => {
    try {
      const response = await getFavoriteUser(user);
      setListFavorite(response);
    } catch (error) {
      console.log(error);
    }
  }, [user, favorite]);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    }
  }, [user, fetchFavorites, favorite]);

  const DeleteFavorite = async idCategory => {
    try {
      const response = await deleteFavorite(idCategory);
      if (response) {
        await fetchFavorites();
        ToastAndroid.show(
          'Xoá thành công, tải lại danh sách',
          ToastAndroid.SHORT,
        );
        return true;
      }
    } catch (error) {
      console.log('Error deleting favorite:', error);
    }
    return false;
  };

  const renderItem = ({item}) => (
    <View style={myStyle.body3}>
      <View style={myStyle.image}>
        <Image style={myStyle.image1} source={{uri: item.product.image}} />
        <View style={myStyle.mid}>
          <View style={myStyle.midContent}>
            <View style={myStyle.content}>
              <View>
                <Text style={myStyle.name}>{item.product.name}</Text>
                <Text style={myStyle.note}>From Africa</Text>
              </View>
              <View style={myStyle.midContent2}>
                <View style={myStyle.starContainer}>
                  <Image
                    style={myStyle.imageStar}
                    source={require('../../icon/icon_star.png')}
                  />
                  <Text style={myStyle.textStar}>{item.product.rating}</Text>
                  <Text style={myStyle.textComment}>
                    {item.product.rating_quantity}
                  </Text>
                </View>
              </View>
            </View>
            {item.product.category.includes('6706902bc49174bfd85e4304') ? (
              <BeanDetail />
            ) : (
              <CoffeeDetail />
            )}
          </View>
        </View>
      </View>
      <View>
        <Text style={myStyle.description}>Description</Text>
        <Text style={myStyle.descriptionDetails}>
          {item.product.description}
        </Text>
      </View>
      <View style={myStyle.icon_heath}>
        <TouchableOpacity onPress={() => DeleteFavorite(item._id)}>
          <Image source={require('../../icon/icon_heath.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={myStyle.body}>
      <HeadrNavigation name={'Favorite'} />
      <View style={myStyle.body2}>
        <FlatList
          data={Listfavorite}
          renderItem={renderItem}
          keyExtractor={item => item._id.toString()}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </View>
  );
};

const CoffeeDetail = () => {
  return (
    <View style={myStyle.content}>
      <View style={myStyle.content2}>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/coffee1.png')} />
          <Text style={myStyle.size}>Coffee</Text>
        </View>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/milk1.png')} />
          <Text style={myStyle.size}>Milk</Text>
        </View>
      </View>
      <TouchableOpacity style={myStyle.iconMid2}>
        <Text style={myStyle.size}>Medium Roasted</Text>
      </TouchableOpacity>
    </View>
  );
};

const BeanDetail = () => {
  return (
    <View style={myStyle.content}>
      <View style={myStyle.content2}>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/coffee1.png')} />
          <Text style={myStyle.size}>Bean</Text>
        </View>
        <View style={myStyle.iconMid}>
          <Image source={require('../../icon/detail/milk1.png')} />
          <Text style={myStyle.size}>Africa</Text>
        </View>
      </View>
      <View style={myStyle.iconMid2}>
        <Text style={myStyle.size}>Medium Roasted</Text>
      </View>
    </View>
  );
};

export default Favorites;

const myStyle = StyleSheet.create({
  body: {
    backgroundColor: '#1E1E1E',
    flex: 1,
  },
  body2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  body3: {
    width: width - 40,
    height: 575,
    backgroundColor: '#0C0F14',
    borderRadius: 30,
    marginBottom: 20,
  },
  image1: {
    height: 475,
    width: width - 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    height: 475,
    width: width - 40,
    height: 521,
  },
  mid: {
    height: 153,
    width: width - 40,
    zIndex: 1,
    position: 'absolute',
    opacity: 0.8,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: 'black',
    bottom: 45,
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
  size: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#AEAEAE',
    fontWeight: 'bold',
    width: 330,
    top: -40,
    marginHorizontal: 10,
  },
  descriptionDetails: {
    fontSize: 12,
    color: 'white',
    lineHeight: 20,
    width: 380,
    height: 60,
    top: -40,
    marginHorizontal: 20,
  },
  icon_heath: {
    zIndex: 1,
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#141921',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    end: 20,
    top: 20,
  },
});
