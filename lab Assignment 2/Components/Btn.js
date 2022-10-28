import { View, Button,StyleSheet, TouchableOpacity,Text } from "react-native";

const btn=() => {

    return (
        <View >
        <TouchableOpacity
        style={styles.button1}
        
      >
        <Text style={styles.Text}>LogIn with facebook or Email</Text>
      </TouchableOpacity>
          
      <TouchableOpacity
        style={styles.button2}
        
      >
        <Text style={styles.Text}>Sign up with Email </Text>
      </TouchableOpacity>
          
      <TouchableOpacity
        style={styles.button3}
        
      >
        <Text style={styles.Text}>Already Have Account</Text>
      </TouchableOpacity>
          
        </View>

    )
}

    

const styles = StyleSheet.create({
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
})

export default btn;


