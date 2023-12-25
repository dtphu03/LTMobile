import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgotPass from './screens/ForgotPass';

import HomeScreen from './screens/HomeScreen';
import Womenkits from './screens/Womenkits';
import Menkits from './screens/Menkits';
import Trending from './screens/Trending';
import Settings from './screens/Settings';
import Search from './screens/Search'; 
import Badminton from './screens/Badminton';
import Basketball from './screens/Basketball';
import Cart from './screens/Cart'; 
import Checkout from './screens/Checkout';
import ChangePassword from './screens/ChangePassword';





import Support from './screens/Support';
import CustomDrawer from './components/CustomDrawer';

import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Product_Description from './screens/Product_Description';
import { CartProvider } from './screens/cartcontext';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeDrawer = () => {
  return(
    <Drawer.Navigator initialRouteName='HomeScreen' drawerContent={props => <CustomDrawer {...props}/>} 
      screenOptions={{headerShown: false, 
        drawerActiveBackgroundColor: '#89CFF3',
        drawerActiveTintColor: '#000',
        drawerLabelStyle: {
          marginLeft: -24, 
          fontSize: 16,
          },
        }}>
        <Drawer.Screen name='Home' component={HomeScreen}
          options={{
            title: 'Home',
            drawerIcon: () => (
              <Ionicons name="home-outline" size={24} color="black" style={styles.drawerIcons} />
            )
          }}
        />
        <Drawer.Screen name='Settings' component={Settings}
          options={{
            title: 'Settings',
            drawerIcon: () => (
              <Ionicons name="md-settings-outline" size={24} color="black" style={styles.drawerIcons} />
            )
          }}
        />
        
        <Drawer.Screen name='Orders' component={Cart}
          options={{
            title: 'Orders',
            drawerIcon: () => (
              <Feather name="shopping-cart" size={24} color="black" style={styles.drawerIcons} />
            )
          }}
        />
        <Drawer.Screen name='Support' component={Support}
          options={{
            title: 'Support',
            drawerIcon: () => (
              <Feather name="message-circle" size={24} color="black" style={styles.drawerIcons} />
            )
          }}
        />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='ForgotPass' component={ForgotPass} />
        <Stack.Screen name='HomeDrawer' component={HomeDrawer} />
        <Stack.Screen name='Womenkits' component={Womenkits} />
        <Stack.Screen name='Menkits' component={Menkits} />
        <Stack.Screen name='Trending' component={Trending} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Badminton' component={Badminton} />
        <Stack.Screen name='Basketball' component={Basketball} />
        <Stack.Screen name='Product_Description' component={Product_Description} />
        <Stack.Screen name='Cart' component={Cart} />
        <Stack.Screen name='Checkout' component={Checkout} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  drawerIcons: {
    marginStart: 4,
  }
})

