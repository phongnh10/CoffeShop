import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const OrderDetail = ({image, name, sort_description, price, size}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={myStyle.body}>
      <View>
        <Image style={myStyle.image} source={{uri: image}} />
      </View>
      <View style={myStyle.content}>
        <Text style={myStyle.name}>{name}</Text>
        <Text style={myStyle.with}>{sort_description}</Text>
        <View style={myStyle.contentSize}>
          <View style={myStyle.size}>
            <Text style={myStyle.sizeText}>{size}</Text>
          </View>
          <View style={myStyle.size2}>
            <Text style={myStyle.sizeText1}>$</Text>
            <Text style={myStyle.sizeText2}>{price}</Text>
          </View>
        </View>
        <View style={myStyle.controler}>
          <TouchableOpacity style={myStyle.minus} onPress={decreaseQuantity}>
            <Text style={myStyle.textInput}>-</Text>
          </TouchableOpacity>
          <View style={myStyle._input}>
            <Text style={myStyle.textInput}>{quantity}</Text>
          </View>
          <TouchableOpacity style={myStyle.plus} onPress={increaseQuantity}>
            <Text style={myStyle.textInput}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OrderDetail;

const myStyle = StyleSheet.create({
  body: {
    marginVertical: 10,
    marginHorizontal: 20,
    width: 330,
    height: 154,
    backgroundColor: '#262B33',
    borderRadius: 20,
    flexDirection: 'row',
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 20,
    backgroundColor: '#D17842',
    margin: 12,
  },
  content: {
    width: 160,
    height: 126,
    marginVertical: 5,
  },
  name: {
    fontSize: 15,
    lineHeight: 20,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  with: {
    fontSize: 10,
    lineHeight: 20,
    color: 'white',
    fontWeight: '400',
  },
  contentSize: {
    width: 160,
    height: 35,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    width: 72,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C0F14',
    borderRadius: 8,
    marginRight: 22,
  },

  size2: {
    width: 61,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  sizeText: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText1: {
    color: '#D17842',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
    marginRight: 5,
  },
  sizeText2: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 20,
  },
  controler: {
    marginTop: 8,
    width: 160,
    height: 29,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  minus: {
    width: 29,
    height: 29,
    backgroundColor: '#D17842',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 29,
    height: 29,
    backgroundColor: '#D17842',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  _input: {
    width: 50,
    height: 29,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D17842',
    backgroundColor: '#0C0F14',
  },
  textInput: {
    fontWeight: '600',
    color: 'white',
    lineHeight: 20,
    fontSize: 16,
  },
});
