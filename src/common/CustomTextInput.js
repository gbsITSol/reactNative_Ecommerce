import { Image, StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-gesture-handler'

      
const CustomTextInput = ({icon, placeholder, type,onChangeText , value}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{width : 30 , height : 30, }}/>
      <TextInput value={value} onChangeText={(text)=>onChangeText(text)} placeholder={placeholder} secureTextEntry={type ? true : false} style={{marginLeft : 10}}/>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  container : {
    width: "80%",
     height: 50,
      borderRadius: 10,
       paddingLeft : 20 , 
       paddingRight : 20,
       marginBottom : 10 , 
       borderWidth: 2, 
       borderColor: "black" , 
       marginTop : 40 , 
       marginLeft : 30, 
       flexDirection : "row",
       alignItems : "center"
  }
})