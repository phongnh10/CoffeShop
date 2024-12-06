import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Settings = () => {
  return (
    <View style={myStyle.body}>
      <View style={{height: 457}}>
        <Image
          style={myStyle.image}
          source={require('../../media/almod.png')}></Image>
        <View style={myStyle.information}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                margin: 10,
              }}>
              <Text style={myStyle.text1}>Cappppppp</Text>
              <Text style={myStyle.text2}>Cappppppp</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={require('../../icon/icon_star.png')}
                  style={{width: 20, height: 20}}></Image>
                <Text style={[myStyle.text1, {marginRight: 10}]}>4.5</Text>
                <Text style={myStyle.text2}>(45444)</Text>
              </View>
            </View>
            <View style={myStyle.midContent}>
              <CoffeeDetail></CoffeeDetail>
            </View>

            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
              }}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const CoffeeDetail = () => {
  return (
    <View style={myStyle.content}>
      <View style={myStyle.content2}>
        <View style={myStyle.iconMid}>
          {/* <Image source={require('../../icon/detail/coffee1.png')}></Image> */}
          <Text style={myStyle.size}>Coffee</Text>
        </View>
        <View style={myStyle.iconMid}>
          {/* <Image source={require('../../icon/detail/milk1.png')}></Image> */}
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
          {/* <Image source={require('../../icon/detail/coffee1.png')}></Image> */}
          <Text style={myStyle.size}>Bean</Text>
        </View>
        <View style={myStyle.iconMid}>
          {/* <Image source={require('../../icon/detail/milk1.png')}></Image> */}
          <Text style={myStyle.size}>Africa</Text>
        </View>
      </View>
      <View style={myStyle.iconMid2}>
        <Text style={myStyle.size}>Medium Roasted</Text>
      </View>
    </View>
  );
};

export default Settings;
const myStyle = StyleSheet.create({
  body: {
    width: 350,
    height: 575,
    backgroundColor: '#262B33',
    borderRadius: 30,
  },
  image: {
    width: 350,
    height: 457,
    start: 0,
    top: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  information: {
    zIndex: 1,
    position: 'absolute',
    height: 133,
    width: 350,
    backgroundColor: 'black',
    opacity: 0.6,
    bottom: 0,
    end: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
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
  iconMid: {
    height: 55,
    width: 55,
    backgroundColor: '#141921',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    color: 'white',
    fontWeight: 'bold',
  },
  midContent: {
    margin: 20,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
