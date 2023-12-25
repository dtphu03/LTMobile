import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Search = () => {
    const navigation = useNavigation();

    const images = [
        { image: require('../assets/img/search2.png'), name: 'Football(Soccer)', date: '20>', screenName: 'Menkits' },
        { image: require('../assets/img/search3.png'), name: 'Basketball', date: '26>', screenName: 'Basketball' },
        { image: require('../assets/img/search5.png'), name: 'Badminton', date: '23>', screenName: 'Badminton' },
        { image: require('../assets/img/search1.png'), name: 'Women', date: '23>', screenName: 'Womenkits' },
        { image: require('../assets/img/search1.png'), name: 'Men', date: '23>', screenName: 'Menkits' },
    ];

    const handleImagePress = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View>
            
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/img/icon/backIcon.png')}
                    style={styles.homeIcon}
                />
            </TouchableOpacity>

            {/* Header */}
            <View style={styles.header}>
                <Image
                    source={require('../assets/img/search_icon.png')}
                    resizeMode='cover'
                    style={styles.header_icon}
                />
                <TextInput
                    placeholder='What are you looking for?'
                    placeholderTextColor="#979797"
                    style={styles.header_textinput}
                />
            </View>
            <View style={styles.divider} />
           
            {/* Body */}
            <View style={styles.body}>
                {images.map((item, index) => (
                    <TouchableOpacity
                        style={styles.body_item}
                        key={index}
                        onPress={() => handleImagePress(item.screenName)}
                    >
                        <Image
                            source={item.image}
                            resizeMode='cover'
                        />
                        <View style={styles.body_item_info}>
                            <Text style={styles.body_item_info_name}>
                                {item.name}
                            </Text>
                            <Text style={styles.body_item_info_date}>
                                {item.date}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    homeButton: {
        margin: 10,
    },
    homeIcon: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 26,
        marginTop: 10,
    },
    header: {
        flexDirection: 'row',
        height: 35,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
    },
    header_icon: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    header_textinput: {
        flex: 1,
        color: 'black',
        fontSize: 20,
        marginVertical: -5,
    },
    divider: {
        height: 1,
        backgroundColor: '#E1DEDE',
        marginTop: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    button: {
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 16,
        color: 'black',
    },
    body: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    body_item: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    body_item_info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    body_item_info_name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    body_item_info_date: {
        fontSize: 13,
        color: '#4A4A4A',
    },
});

export default Search;
