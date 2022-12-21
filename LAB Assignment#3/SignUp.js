import { View,Text,TextInput,StyleSheet,TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from "react";

function SignUp({navigation}) {
    const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setemailpass = async () => {
    try {
      await AsyncStorage.setItem("Name", Name);
      await AsyncStorage.setItem("EMAIL", email);
      await AsyncStorage.setItem("PASSWORD", password);
      navigation.navigate("Login");
    } catch (e) {
      console.log("", e);}};
    return(
        <View>
           <h2 style={styles.heading}>SignUp screen</h2>

<View style={styles.form}>

    <Text style={styles.text}>User Name</Text>
    <TextInput style={styles.textarea} onChangeText={(Name) =>setName(Name)} ></TextInput>
    <Text style={styles.text}>email</Text>
    <TextInput style={styles.textarea} onChangeText={(email) =>setEmail(email)} ></TextInput>
    
    <Text style={styles.text} >Passward</Text>
    <TextInput style={styles.textarea2} onChangeText={(password)=> setPassword(password)}></TextInput>
    <TouchableOpacity style={styles.btn1} onPress={() => {setemailpass()}}><Text>Submit</Text></TouchableOpacity>
    <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Home')}><Text>Back to Home </Text></TouchableOpacity>        </View>
</View>
    )
}
export default SignUp;
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
        backgroundColor: "lightpink",
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