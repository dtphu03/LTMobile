import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { basketball, women } from './product_data';
import { men } from './product_data';
import { badminton } from './product_data';
import { trending } from './product_data';
import { useCart } from './cartcontext';

const Product_Description = ({ route }) => {
  const [isSizeModalVisible, setSizeModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Choose Size');
  const sizes = ['S', 'M', 'L', 'XL'];
  const { dispatch } = useCart();
  const { cartState } = useCart();

  const [ name, idx ] = route.params;

  let loaiqa;
  if (name == 'women') {
    loaiqa = women;
  } else if (name == 'men') {
    loaiqa = men;
  } else if (name == 'badminton') {
    loaiqa = badminton;
  } else if (name == 'basketball') {
    loaiqa = basketball;
  } else if(name == 'trending'){
    loaiqa = trending;
  }
  const quanao = loaiqa.find((qa) => qa.id === idx);

  const toggleSizeModal = () => {
    setSizeModalVisible(!isSizeModalVisible);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    toggleSizeModal();
  };

  const navigation = useNavigation();

  const handleAddToCart = () => {
    Alert.alert('Thêm vào giỏ hàng thành công!');
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: quanao.id,
        name: quanao.name,
        price: quanao.price,
        size: selectedSize,
        image: quanao.imgqa,
        
      },
    });
    
  };

  return (
    <View style={styles.container} key={quanao.id}>
      <Image source={quanao.imgqa} style={styles.Image} />

      <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/img/icon/backIcon.png')} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconBag}
        onPress={() => navigation.navigate('Cart', { quanao })}
      >
        <Image source={require('../assets/img/icon/cartIcon.png')} />
      </TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity style={styles.iconLove}>
          <Image source={require('../assets/img/icon/like.png')} />
        </TouchableOpacity>
        <Text style={styles.cost}>${quanao.price.toFixed(2)}</Text>
        <Text style={styles.product}>{quanao.name}</Text>
        <Text style={styles.type}>{quanao.type}</Text>
        <Text style={styles.description}>{quanao.des}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.chooseSizeButton} onPress={toggleSizeModal}>
            <Text style={{ textAlign: 'center', fontSize: 18, justifyContent: 'center', paddingTop: 5 }}>
              {selectedSize}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnAdd} onPress={handleAddToCart}>
            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}>Add To Bag</Text>
            
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={isSizeModalVisible}>
        <View style={styles.modalContainer}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={styles.sizeOption}
              onPress={() => handleSizeSelect(size)}
            >
              <Text>{size}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  type: {
    fontSize: 20,
    paddingLeft: 15,
  },
  Image: {
    width: 414,
    height: 417,
    paddingBottom: 350,
    paddingTop: 320,
  },
  iconBack: {
    position: 'absolute',
    left: 5,
    margin: 25,
  },
  iconBag: {
    position: 'absolute',
    right: 5,
    margin: 25,
  },
  iconLove: {
    position: 'absolute',
    right: 25,
    top: -25,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 414,
    height: 280,
  },
  cost: {
    color: '#b02b2b',
    fontSize: 25,
    lineHeight: 25,
    height: 30,
    paddingLeft: 15,
    paddingTop: 10,
  },
  product: {
    width: 400,
    color: 'black',
    fontSize: 25,
    lineHeight: 28,
    paddingLeft: 15,
    paddingTop: 15,
  },
  description: {
    width: 400,
    color: 'black',
    fontSize: 18,
    lineHeight: 20,
    paddingLeft: 15,
    paddingTop: 15,
  },
  chooseSizeButton: {
    backgroundColor: 'white',
    width: 160,
    height: 60,
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    margin: 10,
    left: 23,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  sizeOption: {
    padding: 10,
    fontSize: 50,
    textAlign: 'center',
  },
  btnAdd: {
    backgroundColor: '#000',
    width: 160,
    height: 60,
    alignSelf: 'center',
    padding: 15,
    right: 35,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Product_Description;
