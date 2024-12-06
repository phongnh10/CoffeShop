import React, {useState, useEffect, useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import OrderDetail from '../../item/OrderDetail';
import {getOrderByUser} from '../Helpers/APIHelpers';
import {AppContext} from '../AppContext';

const Shoping = () => {
  const {user} = useContext(AppContext);
  const [list, setList] = useState([]);
  const {cartAPI} = useContext(AppContext);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await getOrderByUser(user, 0);
        if (response) {
          setList(response.orderDetails);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchList();
  }, [user, cartAPI]);

  const renderItem = ({item}) => (
    <OrderDetail
      image={item.product.image}
      name={item.product.name}
      sort_description={item.product.sort_description}
      price={item.totalPrice}
      size={item.size}
    />
  );

  return (
    <View style={styles.container}>
      {list.length > 0 ? (
        <FlatList
          data={list}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.noOrdersText}>No orders found.</Text>
      )}
    </View>
  );
};

export default Shoping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    padding: 16,
  },
  noOrdersText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
