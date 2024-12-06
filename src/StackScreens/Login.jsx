import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../colors';
import fontSizes from '../fontSizes';
import {AppContext} from '../AppContext';
import {login} from '../Helpers/APIHelpers';
const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [messenger, setMessenger] = useState('');
  const [hasError, setHasError] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('phong@gmail.com');
  const [password, setPassword] = useState('123');
  const {user, setUser} = useContext(AppContext);

  const goLogin = async () => {
    if (!email || !password) {
      setMessenger('Vui lòng nhập email và mật khẩu.');
      setHasError(true);
      return;
    }
    try {
      const data = {email, password};
      const response = await login(data);
      console.log(response);
      if (response.status == true) {
        setMessenger('Đăng nhập thành công!');
        setHasError(false);
        await setUser(response.id);
      } else {
        setMessenger('Thông tin đăng nhập không chính xác. Vui lòng thử lại.');
        setHasError(true);
      }
    } catch (error) {
      setMessenger('Api Đã xảy ra lỗi. Vui lòng thử lại.');
      setHasError(true);
    }
  };
  function passwordVisibility() {
    setHidePass(!hidePass);
  }
  console.log(user);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../media/logo.png')} />
      <Text style={styles.text1}>Welcome to Lungo!!</Text>
      <Text style={styles.text2}>Login to Continue</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={colors.textSecondary}></TextInput>
        <View style={styles.image_hide}></View>
      </View>
      <View style={hasError ? [styles.input, styles.error] : styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor={colors.textSecondary}
          value={password}
          secureTextEntry={hidePass}
          onChangeText={setPassword}></TextInput>
        <TouchableOpacity onPress={passwordVisibility}>
          <Image
            source={require('../../icon/icons-eye.png')}
            style={styles.image_hide}></Image>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          color: colors.error,
          fontWeight: 'bold',
          width: width,
          marginLeft: 30,
        }}>
        {messenger}
      </Text>

      <TouchableOpacity style={[styles.button]} onPress={goLogin}>
        <Text
          style={{
            color: colors.background,
            fontWeight: 'bold',
            fontSize: fontSizes.heading3,
          }}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.background}]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: -80,
          }}>
          <Image
            source={require('../../icon/logo_google.png')}
            style={styles.image_gg}></Image>
          <Text
            style={{
              color: colors.primary,
              fontWeight: 'bold',
              fontSize: fontSizes.heading3,
            }}>
            Sign In with Google
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{marginTop: 30, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text3}>
          Don't have account? Click
          <Text
            style={styles.text4}
            onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </Text>
        <Text style={styles.text3}>
          Forget Password? Click
          <Text style={styles.text4}>Reset</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: width,
    height: height,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 142,
    height: 142,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
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
  image_hide: {
    width: 20,
    height: 20,
    marginRight: 30,
  },
  button: {
    width: width - 20,
    height: 58,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: colors.primaryButton,
    marginTop: 20,
  },
  image_gg: {
    width: 20,
    height: 20,
    marginRight: 80,
  },
  text1: {
    color: colors.background,
    fontSize: fontSizes.heading2,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text2: {
    color: colors.textSecondary,
    fontSize: fontSizes.heading3,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text3: {
    color: colors.textSecondary,
    fontSize: fontSizes.heading3,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text4: {
    color: colors.primaryButton,
    fontSize: fontSizes.heading3,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
  error: {
    borderColor: colors.error,
  },
});
