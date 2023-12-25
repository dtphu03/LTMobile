import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StatusBar, SafeAreaView, Dimensions, ImageBackground, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function Signup(props) {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../assets/img/imgBackground1.png')} style={{width: windowWidth, height: '100%'}} resizeMode='cover'>
            <View style={{flex: 1}}>
                <View style={{left: 40, top: 100,position: 'absolute'}}>
                    <Text style={styles.signTitle}>Welcome</Text>
                    <Text style={styles.signSubTitle}>Lets get started</Text>
                </View>
                <View style={{width: '100%', height: '20%', marginTop: 0.6*windowHeight}}>
                    <View style={{marginStart: 46}}>
                        <Text style={{fontSize: 16}}>Existing customer / Get started</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity style={[styles.SignButton, styles.shadow, {marginVertical: 14}]}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.SignTxt}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', marginStart: 46}}>
                        <Text style={{fontSize: 16, marginRight: 4}}>New customer?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={{fontSize: 16, color: '#4280EF'}}>Create new account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Signup;

const styles = StyleSheet.create({
    SignButton: {
        width:'80%', 
        height: 50, 
        borderRadius: 30,
        backgroundColor: '#4280EF',
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
})