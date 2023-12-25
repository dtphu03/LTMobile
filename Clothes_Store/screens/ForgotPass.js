import React, { useState } from 'react';
import { Text, View, Dimensions, ImageBackground, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalPopup from './ModalPopup'; 
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ForgotPass = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const handleConfirm = (code) => {
    
    if (code === '1234') { 
      Alert.alert('Code Confirmed', 'Your code has been confirmed successfully.');
      setVisible(false);
      
      navigation.navigate('ChangePassword');
    } else {
      Alert.alert('Invalid Code', 'Please enter a valid code.');
    }
  };

  return (
    <ImageBackground source={require('../assets/img/imgBackground1.png')} style={{ width: windowWidth, height: '100%' }} resizeMode='cover'>
      <View style={{ flex: 1 }}>
        
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 30, marginLeft: 10}}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back" size={22} color="black" />
                    <Text style={{fontSize: 16}}>Back</Text>
                </TouchableOpacity>
                <View style={{left: 40, top: 100,position: 'absolute'}}>
                    <Text style={styles.signTitle}>Forgot</Text>
                    <Text style={[styles.signTitle, {marginTop: -14, paddingBottom: 10}]}>password?</Text>
                    <Text style={styles.signSubTitle}>Enter your email for the verification process,</Text>
                    <Text style={styles.signSubTitle}>we will send code to your email</Text>
                </View>
        <View style={{ width: '100%', height: '20%', marginTop: 0.4 * windowHeight, alignItems: 'center' }}>
          <View style={[styles.textInputBox, styles.shadow]}>
            <Text style={[styles.txtInputTitle, { paddingRight: 41 }]}>Email</Text>
            <TextInput keyboardType='email-address' style={styles.txtInput} />
          </View>
          <TouchableOpacity style={[styles.SignButton, styles.shadow, { marginTop: 24 }]}
            onPress={() => setVisible(true)}
          >
            <Text style={styles.SignTxt}>Continue</Text>
          </TouchableOpacity>
        </View>

      
        <ModalPopup visible={visible} onClose={() => setVisible(false)}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Enter 4 digit code</Text>
            <Text style={{ marginVertical: 10 }}>A four-digit code should have come to your email address that you indicated.</Text>
            <TextInput style={{ height: 50, fontSize: 20, marginBottom: 10 }} keyboardType='numeric' textAlign='center' autoFocus={true} maxLength={4} placeholder='- - - -' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={{ width: 110, height: 40, backgroundColor: '#4280EF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => handleConfirm('1234')} // Thay '1234' bằng mã bạn nhận được từ email
              >
                <Text style={{ color: '#fff' }}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 110, height: 40, borderWidth: 1, borderColor: '#4280EF', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setVisible(false)}
              >
                <Text style={{ color: '#4280EF' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ModalPopup>
      </View>
    </ImageBackground>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
    textInputBox: {
        width:'80%', 
        height: 42, 
        flexDirection: 'row', 
        borderWidth: 1, 
        borderColor: '#fff',
        alignItems:'center',
        borderRadius: 30,
        paddingLeft: 10,
        backgroundColor: '#fff'
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
        width:'80%', 
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
        backgroundColor: '#fff'
    },
    signTitle: {
        color: '#4280EF',
        fontSize: 40,
        fontWeight: '700'
    },
    signSubTitle: {
        fontSize: 16
    },
    shadow: {
        shadowColor: "#000",
        // backgroundColor: '#fff',
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,  
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20,
    }
})