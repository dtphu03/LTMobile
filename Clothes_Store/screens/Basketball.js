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

export default Basketball = ({route, navigation}) => {
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
                        <Text style={{fontSize: 24}}>Basketball</Text>
                        <Text style={{color: '#868686'}}>Jerseys</Text>
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
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball', 39])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas1.jpg')}></Image>
                            <Text>Ladies Retro</Text>
                            <Text>Basketball Women</Text>
                            <Text style={styles.priceText}>$67.86</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball', 40])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas2.jpg')}></Image>
                            <Text>Showtime Basketball</Text>
                            <Text>Women</Text>
                            <Text style={styles.priceText}>$55.25</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball',41])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas3.jpg')}></Image>
                            <Text>Primetime Basketball</Text>
                            <Text>Women</Text>
                            <Text style={styles.priceText}>$67.86</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball',42])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas4.jpg')}></Image>
                            <Text>YBA Basketball Shirt</Text>
                            <Text>Women</Text>
                            <Text style={styles.priceText}>$69.99</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball', 43])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas5.jpg')}></Image>
                            <Text>Nike Dri-FIT Icon</Text>
                            <Text>Men</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball', 44])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas6.jpg')}></Image>
                            <Text>Nike Team USA</Text>
                            <Text>2023 Men</Text>
                            <Text style={styles.priceText}>$69.86</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball', 45])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas7.jpg')}></Image>
                            <Text>Custom Jersey 1</Text>
                            <Text>Men</Text>
                            <Text style={styles.priceText}>$70.99</Text>
                        </Pressable>
                        <Pressable onPress={()=> {navi.navigate('Product_Description', ['basketball', 46])}}>
                            <Image style={styles.trendImg} source={require('../assets/img/bas8.jpg')}></Image>
                            <Text>Custom Jersey 2</Text>
                            <Text>Men</Text>
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