
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Component/LoginScreen';
import Profile from './Component/ProfileScreen';
import SignUp from './Component/SignUp';
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <h2>Home Screen</h2>
      <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode="cover" 
      style={styles.image}>
     
      
      <TouchableOpacity
        style={styles.button1}
        onPress={()=>navigation.navigate('Login')}
      >
        <Text style={styles.Text}>Login </Text>
      </TouchableOpacity>
          

      <TouchableOpacity
        style={styles.button2}
        
      >
        <Text style={styles.Text}
         onPress={()=>navigation.navigate('SignUp')}
         >SignUp </Text>

      </TouchableOpacity>
          
      
        </ImageBackground>
    </View>
  );
}

const Stack= createNativeStackNavigator();
export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button1:{
    backgroundColor:"lightpink",
    padding:30,
    marginTop:330,
    width:350,
  },

  button2:{
    backgroundColor:"orange",
    padding:30,
    marginTop:3,
    width:350,
  },
  button3: {
    
    backgroundColor: "lightgreen",
    padding:30,
    marginTop:4,
    width:350,
  },
  Text:{
    textAlign:'center',
    fontWeight:'bold',
  }
});
