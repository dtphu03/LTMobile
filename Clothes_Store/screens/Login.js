import React, { useState } from 'react';
import { Text, View, Dimensions, ImageBackground, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Login({ navigation }) {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Kiểm tra trường rỗng
      if (!username || !password) {
        Alert.alert('Error', 'Sai tên tài khoản hoặc mật khẩu');
        return;
      }

      // Lấy thông tin người dùng từ AsyncStorage
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      // Kiểm tra đăng nhập
      const user = users.find((user) => user.email === username && user.password === password);

      if (user) {
        // Đăng nhập thành công
        Alert.alert('Đăng nhập thành công!', 'Welcome back!');
        navigation.navigate('HomeDrawer')
        
      } else {
        // Đăng nhập thất bại
        Alert.alert('Thất bại', 'Sai tên tài khoản hoặc mật khẩu');
      }
    } catch (error) {
      console.error('Error during login:', error);
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
          <Text style={styles.signTitle}>Sign in</Text>
          <Text style={styles.signSubTitle}>Please log in into your account</Text>
        </View>
        <View style={{ width: '100%', height: '20%', marginTop: 0.3 * windowHeight, alignItems: 'center' }}>
          <View style={[styles.textInputBox, styles.shadow]}>
            <Text style={[styles.txtInputTitle, { paddingRight: 41 }]}>Email</Text>
            <TextInput
              keyboardType='email-address'
              style={styles.txtInput}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={[styles.textInputBox, styles.shadow, { marginTop: 16 }]}>
            <Text style={styles.txtInputTitle}>Password</Text>
            <TextInput
              secureTextEntry={!getPasswordVisible}
              style={styles.txtInput}
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
          <View style={{ width: '80%' }}>
            <TouchableOpacity style={{ right: 10, bottom: -28, position: 'absolute' }} onPress={() => navigation.navigate('ForgotPass')}>
              <Text style={{ color: '#686868' }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.SignButton, styles.shadow, { marginTop: 50 }]} onPress={handleLogin}>
            <Text style={styles.SignTxt}>Sign in</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
            <View style={styles.line}></View>
            <Text style={{ color: '#fff', marginHorizontal: 10 }}>Or</Text>
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity style={[styles.SignButton, styles.shadow, { marginTop: 20, flexDirection: 'row', backgroundColor: '#5383EC' }]}>
            <Image style={{ left: 30, position: 'absolute' }} source={require('../assets/img/icon/gg.png')} />
            <Text style={[styles.SignTxt]}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.SignButton, styles.shadow, { marginTop: 20, flexDirection: 'row', backgroundColor: '#4A66AC' }]}>
            <Image style={{ left: 30, position: 'absolute' }} source={require('../assets/img/icon/fb.png')} />
            <Text style={[styles.SignTxt]}>Sign in with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

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
  line: {
    width: 120,
    height: 1,
    backgroundColor: '#fff',
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
    shadowColor: '#000',
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

export default Login;
