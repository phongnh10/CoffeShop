import {
    TextInput,
    StyleSheet,
    Dimensions,
    SafeAreaView,
  } from 'react-native';
  import React from 'react';
  import colors from '../src/colors';
  
  const { width, height } = Dimensions.get('window');
  
  const InputText = ({ placeholder, secureTextEntry = false, style }) => {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={[styles.input, style]} 
          placeholder={placeholder} 
          placeholderTextColor={colors.textSecondary}
          secureTextEntry={secureTextEntry} // Áp dụng secureTextEntry nếu cần bảo mật
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      width: width - 40,
      marginHorizontal: 20,
    },
    input: {
      padding: 20,
      borderRadius: 10,
      borderColor: colors.secondary,
      borderWidth: 1,
      marginVertical:5,
      color:colors.background,
      fontWeight:'bold',
    },
  });
  
  export default InputText;