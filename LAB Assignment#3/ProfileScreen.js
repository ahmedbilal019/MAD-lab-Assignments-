import {View,Text, TouchableOpacity,StyleSheet} from 'react-native';
import { useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
function Profile({navigation}) {
    const [Name, setName] = useState("");
    const [EmaiL, setEmaiL] = useState("");
    useEffect(() => {
      Getemailpa();
      GetName();
    });
  
    const GetName = async () => {
      const getName = await AsyncStorage.getItem("Name");
      console.log("", getName);
      setName(getName);
    };
  
    const Getemailpa = async () => {
      const getEmail = await AsyncStorage.getItem("EMAIL");
      console.log("", getEmail);
      setEmaiL(getEmail);
    };
    return(
        
    <View >
        <View style={styles.heading}>
            <h1 style={styles.h1}>User info:</h1>
        </View>
        <View style={styles.container}>
        <Text style={styles.txt1}>User name:</Text>
       <Text style={styles.txt}>{Name}</Text>
       <Text style={styles.txt1}>User Email:</Text>
        <Text style={styles.txt}>{EmaiL}</Text>
        </View>
        
     <TouchableOpacity onPress={()=>navigation.popToTop()}><Text>Back</Text></TouchableOpacity>
    </View>
    )
}
export default Profile;
const styles=StyleSheet.create({
  container:{
    textAlign:'center',
    backgroundColor:'lightblue',
    marginLeft:40,
    marginRight:40,
    height:150,
  },
  txt:{
    marginLeft: 124,
  },
txt1:{
    fontWeight:'bold',
},
btn:{
  backgroundColor:'grey',
  
},
heading:{
   textAlign:'center',
}
})