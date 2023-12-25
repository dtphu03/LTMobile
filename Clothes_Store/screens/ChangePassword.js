import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native';;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
    const { params } = route;
    const { username } = params || {};
    const handleChangePassword = async () => {
        
        if (newPassword === confirmNewPassword) {
          try {
            // Lấy thông tin người dùng từ AsyncStorage 
            const existingUsers = await AsyncStorage.getItem('users');
            let users = existingUsers ? JSON.parse(existingUsers) : [];
      
            // Tìm và cập nhật mật khẩu cho người dùng hiện tại
            users = users.map(user => {
              if (user.username === username) {
                return { ...user, password: newPassword };
              }
              return user;
            });
      
            // Lưu mảng người dùng đã cập nhật vào AsyncStorage
            await AsyncStorage.setItem('users', JSON.stringify(users));
      
            
      
            // Chuyển hướng về trang đăng nhập
            navigation.navigate('Login');
          } catch (error) {
            console.error('Error updating password:', error);
          }
        } else {
            Alert.alert('Error', 'Mật khẩu không khớp');
        }
      };

  return (
    <ImageBackground source={require('../assets/img/imgBackground1.png')} style={{ width: windowWidth, height: '100%' }} resizeMode='cover'>
    <View style={styles.container}>
      <View style={styles.label}>
            <Text style={styles.signTitle}>Change Password</Text>
            
            <Text style={styles.signSubTitle}>Enter your new password</Text>
                    
        </View>
        <View style ={styles.input}>
      <TextInput
        
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      </View>

      <View style={styles.input}>
      <TextInput
        
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4280EF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  signTitle: {
    color: '#4280EF',
    fontSize: 40,
    fontWeight: '700'
},
signSubTitle: {
    fontSize: 16
},
label: {
    marginBottom: 50,
    
}
});

export default ChangePassword;