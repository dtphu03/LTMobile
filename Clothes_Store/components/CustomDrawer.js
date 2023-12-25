import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
function CustomDrawer(props) {
    const navi = useNavigation()
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}
            contentContainerStyle={{backgroundColor: '#A0E9FF'}}>
                <ImageBackground source={require('../assets/img/background.jpg')} style={{flexDirection: 'row', alignItems: 'center', marginTop: -4}}>
                    <Image source={require('../assets/img/user.png')} resizeMode='contain' style={{height: 100, width: 100, marginBottom: 25, marginTop: 25, marginLeft: 26}}/>
                    <View style={{ marginStart: 14}}>
                        <Text style={{fontWeight: '600', fontSize: 16}}>Tolu Arowoselu</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize: 14, color: '#005'}}>View profile</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10,}}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                <TouchableOpacity style={{width: 100}} onPress={() =>navi.navigate('Login')}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialIcons name="logout" size={24} color="black" />
                        <Text style={{paddingLeft: 8, fontWeight: '600'}}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;