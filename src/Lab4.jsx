import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useContext, createContext } from 'react';
import Product from '../item/Product';
import ProductDetail from './StackScreens/ProductDetail';
import DataProduct from '../data/DataProduct';

// Tạo 1 context để chia sẻ dữ liệu giữa các component
const MyContext = createContext();

const Component2 = () => {
    const { selectedProduct } = useContext(MyContext); // Lấy sản phẩm đã chọn từ context
    return (
      <View>
        {selectedProduct ? (
          <ProductDetail
            nameProduct={selectedProduct.nameProduct}
            noteProduct={selectedProduct.noteProduct}
            priceProduct={selectedProduct.priceProduct}
            image={selectedProduct.image}
          />
        ) : (
          <Text>Click</Text>
        )}
      </View>
    );
  };

  const Component1 = () => {
    const { setSelectedProduct } = useContext(MyContext); // Hàm để cập nhật sản phẩm đã chọn
  
    const renderProductItem = ({ item }) => {
      return (
        <Product
          nameProduct={item.nameProduct}
          noteProduct={item.noteProduct}
          priceProduct={item.priceProduct}
          image={item.image}
          pointStar={item.pointStar}
          onPress={() => setSelectedProduct(item)} // Khi nhấn, cập nhật sản phẩm đã chọn
        />
      );
    };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={DataProduct}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const Lab4 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <MyContext.Provider value={{ selectedProduct, setSelectedProduct }}>
      <View>
        <Component1 />

        <Component2 />
      </View>
    </MyContext.Provider>
  );
};

export default Lab4;