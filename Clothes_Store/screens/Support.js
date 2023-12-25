import React, {useState} from 'react';
import { ImageBackground, Pressable, ScrollView, TouchableOpacity, TextInput, Modal, Dimensions } from 'react-native';
import { View, Image, StatusBar, StyleSheet, Text} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
 
export default Support = ({route, navigation}) => {
    return (
        <View style={{marginBottom: 100, backgroundColor: '#f3f3f3', height: windowHeight}}>
            <View style={{backgroundColor: '#F3F3F3'}}>
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                        <Image source={require('../assets/img/icon/backIcon.png')}></Image>
                    </TouchableOpacity>
                    <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
                </View>
                    <View style={styles.bodyHead}>
                        <View>
                            <Text style={{fontSize: 24}}>Support</Text>
                        </View>
                    </View>
                    <View style = {{alignItems: 'center'}}>
                        <MaterialIcons name="support-agent" size={120} color="#009" />
                        <Text style={{fontSize: 30, fontWeight: '600', color: '#009'}}>Hello, How can we</Text>
                        <Text style={{fontSize: 30, fontWeight: '600', color: '#009'}}>Help you?</Text>
                    </View>
                <ScrollView style={{marginTop: 10}} showsHorizontalScrollIndicator={false}>
                    <View style={styles.trendBody}>
                        <TouchableOpacity style={styles.supportBut}>
                            <MaterialIcons style={{marginLeft: 8}} name="support-agent" size={24} color="black" />
                            <Text style={styles.suppTxt}>Contact Live Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.supportBut}>
                            <AntDesign style={{marginLeft: 8}} name="mail" size={24} color="black" />
                            <Text style={styles.suppTxt}>Send us an Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.supportBut}>
                            <AntDesign style={{marginLeft: 8}} name="questioncircleo" size={24} color="black" />
                            <Text style={styles.suppTxt}>FAQs</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

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
    supportBut: {
        height: 50,
        backgroundColor: '#fff',
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left'
    },
    suppTxt: {
        marginLeft: 14,
        fontSize: 16,
        fontWeight: '500',
    }
})