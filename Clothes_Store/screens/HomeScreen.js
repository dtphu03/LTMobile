import React from 'react';
import { ImageBackground, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { View, Image, StatusBar, StyleSheet, Text} from 'react-native';
import Search from './Search';
import { useNavigation } from '@react-navigation/native';
export default HomeScreen = ({route, navigation}) => {
    const navi = useNavigation()
    return (
        <View style={{marginBottom: 34, backgroundColor: '#fff'}}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={() => {
                    navigation.openDrawer();
                }}>
                    <Image source={require('../assets/img/icon/menuIcon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Image source={require('../assets/img/icon/searchIcon.png')}></Image>
                </TouchableOpacity>
                <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
            </View>
            <ScrollView style={{marginTop: 10}} showsHorizontalScrollIndicator={false}>
                <View style={styles.bodyHead}>
                    <View>
                        <Text style={{fontSize: 24}}>New Release</Text>
                        <Text style={{color: '#868686'}}>2023/2024</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{fontSize: 16, marginBottom: 10}}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Pressable style={[styles.newR, {marginEnd: 8}]} onPress={() => navigation.navigate('Womenkits')}>
                        <ImageBackground style={styles.imgBackground} source={require('../assets/img/women.png')}>
                            <View style={[styles.nrTitle, styles.shadow]}>
                                <Text style={styles.nrTitle1}>Women's</Text>
                                <Text style={styles.nrTitle2}>Kits & jerseys</Text>
                            </View>
                        </ImageBackground>
                    </Pressable>
                    <Pressable style={styles.newR} onPress={() => navigation.navigate('Menkits')}>
                        <ImageBackground style={styles.imgBackground} source={require('../assets/img/men.png')}>
                            <View style={[styles.nrTitle, styles.shadow]}>
                                <Text style={styles.nrTitle1}>Men's</Text>
                                <Text style={styles.nrTitle2}>Kits & jerseys</Text>
                            </View>
                        </ImageBackground>
                    </Pressable>
                </ScrollView>
                <View style={styles.trendBody}>
                    <Text style={styles.trendTitle}>Trending</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 47])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend1.png')}></Image>
                            <Text>Chelsea F.C 2020/21</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$67.86</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 49])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend3.jpg')}></Image>
                            <Text>Manchester Utd 2023/24</Text>
                            <Text>Pre-Match</Text>
                            <Text style={styles.priceText}>$68.00</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 48])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend2.jpg')}></Image>
                            <Text>Manchester Utd 2023/24</Text>
                            <Text>Away Kit</Text>
                            <Text style={styles.priceText}>$69.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 50])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend4.jpg')}></Image>
                            <Text>Man City 2020/21</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$69.99</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 51])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend5.jpg')}></Image>
                            <Text>FC Barca 2023/24</Text>
                            <Text>Home Men's</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 52])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/vietnam.jpg')}></Image>
                            <Text>Vietnam 2022/23</Text>
                            <Text>Away Men's</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity style={styles.viewAllBut} onPress={() => navigation.navigate('Trending')}>
                        <Text style={{fontSize: 18, fontWeight: '500'}}>View All</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    imgBackground: {
        resizeMode: 'cover',
        width: 250,
        height: 250,
        position: 'absolute',
    },
    nrTitle: {
        position: 'absolute',
        height: 68,
        width: 170,
        backgroundColor: '#fff',
        right: -10,
        bottom: 20,
        paddingStart: 20,
        justifyContent: 'center',
    },
    nrTitle1: {
        fontSize: 20,
        fontWeight: '700',
    },
    nrTitle2: {
        color: '#868686'
    },
    newR: {
        height: 250,
        width: 250,
        marginStart: 26,
        marginEnd: 26,
        marginTop: 26,
    },
    trendTitle: {
        marginTop: 40,
        marginBottom: 6,
        fontSize: 20,
    },
    trendBody: {
        marginStart: 26,
        marginEnd: 26,
    },
    trendImg: {
        width: 160,
        height: 160,
        resizeMode: 'cover',
    },
    priceText: {
        color: '#B02B2B'
    },
    viewAllBut: {
        marginTop: 16,
        flex: 1,
        height: 40,
        borderWidth: 1.4,
        borderRadius: 14,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        shadowColor: "#000",
        backgroundColor: '#fff',
        // borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        elevation: 5,  
    }
})