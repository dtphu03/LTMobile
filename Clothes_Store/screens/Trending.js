import React, {useState} from 'react';
import { ImageBackground, Pressable, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import Checkbox from 'expo-checkbox';
import { View, Image, StatusBar, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ModalPopup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    React.useEffect(() => { 
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }
    return(
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <View style={[styles.modalContainer]}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

export default Trending = ({route, navigation}) => {
    const [visible, setVisible] = useState(false)
    const [checkboxValue, setCheckboxValue] = useState([
        { label: 'Popular', value: 'popular', checked: false },
        { label: 'Latest', value: 'latest', checked: false },
        { label: 'Top sales', value: 'topsales', checked: false },
    ]);
    const checkboxHandler = (value, index) => {
        const newValue = checkboxValue.map((checkbox, i) => {
         if (i !== index)
           return {
             ...checkbox,
             checked: false,
           }
         if (i === index) {
           const item = {
             ...checkbox,
             checked: !checkbox.checked,
           }
           return item
         }
        return checkbox
      })
      setCheckboxValue(newValue)
      }   

      const navi = useNavigation()
    return (
        <View style={{marginBottom: 100, backgroundColor: '#fff'}}>
            <View style={styles.header}>
                <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('../assets/img/icon/backIcon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/img/icon/cartIcon.png')}></Image>
                </TouchableOpacity>
                <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
            </View>
                <View style={styles.bodyHead}>
                    <View>
                        <Text style={{fontSize: 24}}>Trending</Text>
                        <Text style={{color: '#868686'}}>Soccer/ Jerseys</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image source={require('../assets/img/icon/searchIcon.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVisible(true)}>
                            <Image style={{marginLeft: 24}} source={require('../assets/img/icon/setIcon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            <ScrollView style={{marginTop: 10}} showsHorizontalScrollIndicator={false}>
                <View style={styles.trendBody}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 47])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend1.png')}></Image>
                            <Text>Chelsea F.C 2020/21</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$67.86</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 48])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend2.jpg')}></Image>
                            <Text>Man Utd 2023/24</Text>
                            <Text>Stadium Away</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 49])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend3.jpg')}></Image>
                            <Text>Man Utd 2023/24</Text>
                            <Text>Pre-Match</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 50])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend4.jpg')}></Image>
                            <Text>ManCity 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$69.99</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 51])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/trend5.jpg')}></Image>
                            <Text>Barcelona 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 52])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/vietnam.jpg')}></Image>
                            <Text>Vietnam 2023/24</Text>
                            <Text>Stadium Away</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 53])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer7.jpg')}></Image>
                            <Text>Germany 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 54])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer8.jpg')}></Image>
                            <Text>USA 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 55])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer9.jpg')}></Image>
                            <Text>Argentina 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 56])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer10.jpg')}></Image>
                            <Text>England 2023/24</Text>
                            <Text>Stadium Away</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 57])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer11.jpg')}></Image>
                            <Text>Spain 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 58])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer12.jpg')}></Image>
                            <Text>Uruguay 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 59])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer1.jpg')}></Image>
                            <Text>PSG 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['trending', 60])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/menSoccer4.jpg')}></Image>
                            <Text>Arsenal 2023/24</Text>
                            <Text>Stadium Home</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <ModalPopup visible={visible}>
                    <View style={{}}>
                        <Text style={{fontSize: 16, fontWeight: '600'}}>Sort by</Text>
                        {checkboxValue.map((checkbox, i) => (
                            <View style={styles.checkboxContainer} key={i}>
                                <Checkbox
                                value={checkbox.checked}
                                onValueChange={(value) => checkboxHandler(value, i)}
                                style={styles.checkbox}
                                />
                                <Text style={{margin: 8}}>{checkbox.label}</Text>
                            </View>
                        ))}
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity style={{width: 110, height: 40, backgroundColor: '#4280EF', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: '#fff'}}>Apply</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: 110, height: 40, borderWidth: 1, borderColor: '#4280EF', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}
                                onPress={() => setVisible(false)}
                            >
                                <Text style={{color: '#4280EF'}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ModalPopup>
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
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 80
      },
    checkbox: {
        alignSelf: 'center',
    },
})