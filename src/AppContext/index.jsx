import React, {useContext, useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tạo AppContext
const AppContext = createContext();

const index = ({children}) => {
  const [user, setUser] = useState(null); // Khởi tạo với null
  const [cart, setCart] = useState([]); // Khởi tạo với mảng rỗng
  const [favorite, setFavorite] = useState(0);
  const [cartAPI, setCartAPI] = useState(0);

  // Hàm đọc dữ liệu từ AsyncStorage
  const readData = async (key, defaultValue) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : defaultValue;
    } catch (e) {
      console.log('Error reading data:', e);
      return defaultValue;
    }
  };

  // Hàm ghi dữ liệu vào AsyncStorage
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log('Error storing data:', e);
    }
  };

  // Hàm tải dữ liệu khi App khởi động
  useEffect(() => {
    const loadData = async () => {
      const _user = await readData('user', null);
      setUser(_user);

      const _cart = await readData('cart', []);
      setCart(_cart);
    };
    loadData();
  }, []);

  // Lưu user vào state và AsyncStorage
  const saveUser = async user => {
    setUser(user);
    await storeData('user', user);
  };

  // Lưu cart vào state và AsyncStorage
  const saveCart = async cart => {
    setCart(cart);
    await storeData('cart', cart);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser: saveUser,
        cart,
        setCart: saveCart,
        favorite,
        setFavorite,
        cartAPI,
        setCartAPI,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export {index, AppContext};
