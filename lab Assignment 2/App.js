import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View,Button,style, ImageBackground, Image } from 'react-native';
import Btn from './Components/Btn';

export default function App() {
  return (

    <View style={styles.container}>

      
      <ImageBackground source={require('./assets/backgroundimg.jpg')} resizeMode="cover" 
      style={styles.image}>
      <Text>By signing up you agree with our terms&Policies</Text>
      <Btn/>
    </ImageBackground>
    
       <StatusBar style="auto" />
      
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
 heading:{
    textAlign:'center',
    fontWeight:'bold',
 }
});
