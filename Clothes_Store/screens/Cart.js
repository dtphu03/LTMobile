import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from './cartcontext';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const Cart = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text>Size: {item.size}</Text>
        <Text>Price: ${item.price.toFixed(2)}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </View>
      
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeFromCart(item.id, item.image)}
      >
        <Image source={require('../assets/img/cart_icon.png')} />
      </TouchableOpacity>
    </View>
  );

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    const totalAmount = calculateTotal();
    navigation.navigate('Checkout', { totalAmount });
  };

   return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items:</Text>
      {items.length > 0 ? (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      )}
      <View style={styles.totalContainer}>
        <Text>Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={clearCart}
        >
          <Text>Delete All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  renderItem: {
    // ...
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10, 
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    color: 'red', 
    fontSize: 16,
    padding: 5, 
    borderRadius: 5, 
    backgroundColor: '#ffcccc', 
  },
  emptyCartText: {
    fontSize: 16,
    color: '#666',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#000',
    padding: 15, 
    borderRadius: 5,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  productImage: {
    height: 70, 
    width: 70,
    borderRadius: 5,
  },
});

export default Cart;
