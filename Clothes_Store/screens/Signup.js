import React, { useState } from 'react';
import { Text, View, Dimensions, ImageBackground, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Signup({ navigation }) {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Kiểm tra xem có thông tin người dùng nào được lưu trữ chưa
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      // Kiểm tra xem email đã được sử dụng chưa
      const userExists = users.some((user) => user.email === email);
      if (userExists) {
        console.log('Email already exists');
        return;
      }

      // Tạo đối tượng chứa thông tin người dùng mới
      const newUser = { name, email, password };

      // Thêm người dùng mới vào mảng người dùng
      users.push(newUser);

      // Lưu mảng người dùng vào AsyncStorage
      await AsyncStorage.setItem('users', JSON.stringify(users));

      
      console.log('Sign up successful');
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <ImageBackground source={require('../assets/img/imgBackground1.png')} style={{ width: windowWidth, height: '100%' }} resizeMode='cover'>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10 }} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="black" />
          <Text style={{ fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <View style={{ left: 40, top: 100, position: 'absolute' }}>
          <Text style={styles.signTitle}>Sign up</Text>
          <Text style={styles.signSubTitle}>Please create a new account</Text>
        </View>
        <View style={{ width: '100%', height: '20%', marginTop: 0.3 * windowHeight, alignItems: 'center' }}>
          <View style={[styles.textInputBox, styles.shadow]}>
            <Text style={[styles.txtInputTitle, { paddingRight: 41 }]}>Name</Text>
            <TextInput
              style={styles.txtInput}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={[styles.textInputBox, styles.shadow, { marginTop: 16 }]}>
            <Text style={[styles.txtInputTitle, { paddingRight: 41 }]}>Email</Text>
            <TextInput
              keyboardType='email-address'
              style={styles.txtInput}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={[styles.textInputBox, styles.shadow, { marginTop: 16 }]}>
            <Text style={styles.txtInputTitle}>Password</Text>
            <TextInput
              secureTextEntry={!getPasswordVisible}
              style={styles.txtInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={{ marginLeft: 8 }}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible);
              }}
            >
              {getPasswordVisible ?
                <Ionicons name="eye-off-outline" size={24} color="black" />
                :
                <Ionicons name="eye-outline" size={24} color="black" />
              }
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={[styles.SignButton, styles.shadow, { marginTop: 50 }]} onPress={handleSignUp}>
            <Text style={styles.SignTxt}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Signup;

const styles = StyleSheet.create({
  textInputBox: {
    width: '80%',
    height: 42,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    borderRadius: 30,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  txtInput: {
    fontSize: 16,
    width: '54%',
    marginStart: 10,
  },
  txtInputTitle: {
    paddingRight: 10,
    color: '#a39c9c',
    fontSize: 16,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  SignButton: {
    width: '80%',
    height: 50,
    borderRadius: 30,
    backgroundColor: '#495867',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignTxt: {
    color: '#fff',
    fontSize: 16,
  },
  signTitle: {
    color: '#4280EF',
    fontSize: 40,
    fontWeight: '700',
  },
  signSubTitle: {
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
});
