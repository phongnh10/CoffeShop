import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../colors';
import {register} from '../Helpers/APIHelpers';
const {width, height} = Dimensions.get('window');

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      ToastAndroid.show('Nhập đầy đủ thông tin', ToastAndroid.SHORT);
      return;
    }

    if (password.length < 6) {
      ToastAndroid.show('Mật khẩu phải có ít nhất 6 ký tự', ToastAndroid.SHORT);
      return;
    }
    try {
      const data = {
        email: email,
        password: password,
        name: name,
      };
      const response = await register(data);
      if (response) {
        ToastAndroid.show('Sign Up Success', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } else {
        ToastAndroid.show('Sign Up Fail', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../../media/logo.png')} />
      <Text style={styles.text1}>Welcome to Lungo!!</Text>
      <Text style={styles.text2}>Register to Continue</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor={'#52555A'}
          value={name}
          onChangeText={setName}></TextInput>
        <View style={styles.image_gg}></View>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor={'#52555A'}
          value={email}
          onChangeText={setEmail}></TextInput>
        <View style={styles.image_gg}></View>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor={'#52555A'}
          value={password}
          onChangeText={setPassword}></TextInput>
        <Image
          source={require('../../icon/icons-eye.png')}
          style={styles.image_gg}></Image>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Re-type-password"
          placeholderTextColor={'#52555A'}></TextInput>
        <Image
          source={require('../../icon/icons-eye.png')}
          style={styles.image_gg}></Image>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Register
        </Text>
      </TouchableOpacity>

      <View
        style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text3}>
          You have an account?? Click
          <Text
            style={styles.text4}
            onPress={() => navigation.navigate('Login')}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 20,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
    marginVertical: 5,
  },
  inputText: {
    width: '90%',
    color: colors.background,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  image_gg: {
    width: 20,
    height: 20,
    marginRight: 30,
  },
  button: {
    width: width - 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#D17842',
    marginTop: 20,
  },

  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text2: {
    color: '#52555A',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text3: {
    color: '#52555A',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text4: {
    color: '#D17842',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
