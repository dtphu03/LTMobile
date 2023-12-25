import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Dimensions, Image ,Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Checkout = ({ route }) => {
  const navigation = useNavigation();
  const [checkboxValue, setCheckboxValue] = useState([
    { label: 'Cash on Delivery', value: 'cash on delivery', checked: false },
    { label: 'Apple Pay', value: 'apple pay', checked: false },
    { label: 'Debit / Credit Card', value: 'debit/credit card', checked: false },
  ]);
  const { totalAmount } = route.params ;

  const checkboxHandler = (value, index) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      if (i !== index)
        return {
          ...checkbox,
          checked: false,
        };
      if (i === index) {
        const item = {
          ...checkbox,
          checked: !checkbox.checked,
        };
        return item;
      }
      return checkbox;
    });
    setCheckboxValue(newValue);
  };

  const handleCheckout = () => {
    Alert.alert('Đặt hàng thành công!',' Chúc quý khách một ngày tốt lành!! ^^');
    navigation.navigate('HomeDrawer')
  };

  return (
    <View style={{ marginBottom: 100, backgroundColor: '#f3f3f3', height: windowHeight }}>
      <View style={{ backgroundColor: '#F3F3F3' }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={require('../assets/img/icon/backIcon.png')} />
          </TouchableOpacity>
          <StatusBar backgroundColor='#fff' barStyle='dark-content' />
        </View>
        <View style={styles.bodyHead}>
          <View>
            <Text style={{ fontSize: 24}}>Checkout</Text>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10 , height: windowHeight }} showsHorizontalScrollIndicator={false}>
          <View style={styles.trendBody}>
            <View>
              <Text style={{ fontSize: 18 }}>Payment Method</Text>
              {checkboxValue.map((checkbox, i) => (
                <View style={styles.checkboxContainer} key={i}>
                  <Text style={{ margin: 8, flex: 1, fontSize: 16, lineHeight: 34 }}>{checkbox.label}</Text>
                  <Checkbox
                    value={checkbox.checked}
                    onValueChange={(value) => checkboxHandler(value, i)}
                    style={styles.checkbox}
                  />
                </View>
              ))}
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Shipping Address</Text>
              <TextInput placeholder='Enter your address' style={styles.input}></TextInput>
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Coupon</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput placeholder='Enter code' style={styles.input}></TextInput>
                <Image style={{ width: 50, height: 50 }} source={require('../assets/img/icon/couponIcon.png')} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ alignItems: 'center', height: 180, justifyContent: 'center', position: 'absolute', bottom: 15, backgroundColor: '#fff', width: windowWidth }}>
       
        <View style={styles.summary}>
          <Text style={[styles.summaryText, { fontWeight: 'bold' }]}>Total</Text>
          <Text style={[styles.summaryAmount, { fontWeight: 'bold' }]}>${totalAmount}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 26,
    marginRight: 26,
    marginTop: 10,
  },
  bodyHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 26,
    marginRight: 26,
    marginTop: 16,
  },
  trendBody: {
    marginStart: 26,
    marginEnd: 26,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    width: 334,
    height: 50,
  },
  checkbox: {
    alignSelf: 'center',
    marginRight: 8,
    borderRadius: 20,
    width: 30,
    height: 30,
  },
  input: {
    height: 50,
    width: 334,
    backgroundColor: '#fff',
    fontSize: 16,
    padding: 12,
    marginVertical: 10,
  },
  summary: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  summaryText: {
    flex: 1,
    fontSize: 20,
    color: '#444444',
  },
  summaryAmount: {
    fontSize: 20,
    color: '#444444',
  },
  checkoutButton: {
    height: 60,
    width: 360,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Checkout;
