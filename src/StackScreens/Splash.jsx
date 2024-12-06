import React, {useCallback, useContext, useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import {AppContext} from '../AppContext';
const {width, height} = Dimensions.get('window');

const Splash = props => {
  const {navigation} = props;
  const {user, readData} = useContext(AppContext);

  setTimeout(() => {
    if (user) {
      console.log('Navigating to TabNavigation');
      navigation.navigate('TabNavigation');
    } else {
      console.log('Navigating to Login');
      navigation.navigate('Login');
    }
  }, 3000);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../media/logo.png')} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C0F14',
    height: height,
    width: width,
  },
  image: {
    width: 189,
    height: 189,
    marginBottom: 100,
    marginLeft: 30,
  },
});

export default Splash;
// const [name, setName] = useState('nguyen van a');
//   const [age, setAge] = useState(20);

//   console.log('Welcome rendering....');
//   // 3 cách sử dụng useeffect
//   // 1. không có tham số thứ 2: useEffect(() => {}, []) chayj 1 laanf duy nhat
//   useEffect(() => {
//     console.log('useEffect 1 running.....');
//   }, []);
//   // 2. không có tham số thứ 2: useEffect(() => {})  khi useState thay doi
//   useEffect(() => {
//     console.log('useEffect 2 running.....');
//   });
//   // 3. có tham số thứ 2: useEffect(() => {}, [name]) khi  fl useState thay doi
//   useEffect(() => {
//     console.log('useEffect 3 running.....');
//   }, [name]);
