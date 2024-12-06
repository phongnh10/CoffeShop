import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';

const Product = ({
  rating,
  imageProduct,
  nameProduct,
  sort_descriptionProduct,
  priceProduct,
  onPress,
}) => {
  return (
    <View style={{marginTop: 0, alignItems: 'center'}}>
      <LinearGradient style={myStyle.body} colors={['#252A32', '#262B33']}>
        <View style={myStyle.image}>
          <View style={myStyle.starContainer}>
            <Image
              style={myStyle.imageStar}
              source={require('../icon/icon_star.png')}></Image>
            <Text style={myStyle.textStar}>{rating}</Text>
          </View>
          <Image
            style={myStyle.imageContainer}
            source={{
              uri:
                imageProduct ||
                'https://photo.znews.vn/w960/Uploaded/mdf_eioxrd/2021_07_06/3.jpg',
            }}
          />
        </View>
        <View style={myStyle.heading}>
          <Text style={myStyle.heading1}>{nameProduct}</Text>
          <Text style={myStyle.heading2}>{sort_descriptionProduct}</Text>
        </View>
        <View style={myStyle.bottom}>
          <Text style={myStyle.bottomHeding1}>$</Text>
          <Text style={myStyle.bottomHeding2}>{priceProduct}</Text>
          <TouchableOpacity
            style={myStyle.TouchableOpacityAddProduct}
            onPress={onPress}>
            <Text style={myStyle.add}>+</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Product;

const myStyle = StyleSheet.create({
  body: {
    width: 149,
    height: 245,
    borderRadius: 25,
    alignItems: 'center',
  },
  image: {
    width: 136,
    height: 136,
    alignItems: 'center',
    marginTop: 12,
  },
  imageContainer: {
    borderRadius: 25,
    width: 126,
    height: 126,
  },
  starContainer: {
    zIndex: 1,
    position: 'absolute',
    width: 53,
    height: 22,
    backgroundColor: 'black',
    end: 5,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStar: {
    height: 10,
    width: 10,
    marginRight: 5,
  },
  textStar: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  heading: {
    width: '100%',
    marginLeft: 15,
  },
  heading1: {
    color: 'white',
    fontSize: 13,
    marginTop: 10,
  },
  heading2: {
    color: 'white',
    fontSize: 9,
  },
  bottom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 13,
  },
  bottomHeding1: {
    color: '#D17842',
    fontSize: 15,
    marginRight: 5,
  },
  bottomHeding2: {
    width: 50,
    color: 'white',
    fontSize: 15,
  },
  TouchableOpacityAddProduct: {
    height: 30,
    width: 30,
    backgroundColor: '#D17842',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 33,
  },
  add: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
});
