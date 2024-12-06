import {View, Text, StyleSheet, Image} from 'react-native';  // Import Image
import React from 'react';

const HeadrNavigation = ({name}) => {
  return (
    <View style={style.top}>
      <View style={style.topContainer}>
        <Image
          style={style.topImageLeft}
          source={require('../icon/element-3.png')}></Image>
      </View>
      <Text style={style.topText}>{name}</Text>
      <View style={style.topContainer}>
        <Image
          style={style.topImageRight}
          source={require('../icon/Intersect.png')}></Image>
      </View>
    </View>
  );
};

export default HeadrNavigation;

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
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});
