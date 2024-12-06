import React from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Image,
} from 'react-native';
import colors from '../src/colors';
import fontSizes from '../src/fontSizes';

const { width } = Dimensions.get('window');

const CustomButton = ({ onPress, title, style, imageSource, }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={imageSource ? styles.viewWithImage : styles.viewNotImage}>
          {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.primaryButton,
  },
  viewNotImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewWithImage: {
    flexDirection: 'row',
    marginLeft:-100,

  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight:80
    
  },
  buttonText: {
    color: '#fff',
    fontSize: fontSizes.button,
    fontWeight: 'bold',
  },
});

export default CustomButton;