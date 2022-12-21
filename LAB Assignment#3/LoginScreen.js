
import { setStatusBarHidden } from "expo-status-bar";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";
function Login({ navigation }) {
    // const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const Getemailpass = async () => {
    //  const getName= await AsyncStorage.getItem("Name");
     const getemail= await AsyncStorage.getItem("EMAIL");
     const getpassword = await AsyncStorage.getItem("PASSWORD");
      if( (Email===getemail )&&(Password===getpassword)){
        navigation.navigate('Profile');
      }else{
        navigation.navigate('Login')
      }
   
    }

    return (
        <View>
            <h2 style={styles.heading}>Login screen</h2>

            <View style={styles.form}>

            <Text style={styles.text}>email</Text>
    <TextInput style={styles.textarea} onChangeText={(email) =>setEmail(email)} ></TextInput>
    
    <Text style={styles.text} >Passward</Text>
    <TextInput style={styles.textarea2} onChangeText={(password)=> setPassword(password)}></TextInput>
    <TouchableOpacity style={styles.btn1} onPress={() => {{Getemailpass()}}}><Text>Submit</Text></TouchableOpacity>
                 
            </View>

        </View>
    )

}
export default Login;
const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 'medium',
    },
    textarea: {
        width: 150,
        marginbottom: 30,
        marginLeft: 50,
        marginTop: 20,
        backgroundColor: "lightblue",
        borderWidth: 2,
        borderRadius: 7,
    },
    textarea2: {
        borderRadius: 7,
        borderWidth: 2,
        width: 150,
        marginbottom: 30,
        marginLeft: 50,
        marginTop: 20,
        backgroundColor: "lightblue",

    },
    form: {

        marginTop: 50,
        padding: 100,
        marginLeft: 170,
        marginRight: 170,
        backgroundColor: "blue",
        borderWidth: 3,

    },
    btn1: {
        textAlign: 'center',
        marginLeft: 50,
        marginTop: 40,
        backgroundColor: 'grey',
        padding: 5,
        borderRadius: 30,
        width: 100,

    },
    btn2: {
        textAlign: 'center',
        marginLeft: 50,
        marginTop: 40,
        backgroundColor: 'grey',
        padding: 5,
        borderRadius: 30,
        width: 100,

    },

});
