import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CommonButton = ({title , textColor, onPress ,  bgColor}) => {
  return (
   <TouchableOpacity onPress={()=>{onPress()}} style={{
    width: "80%",
    height: 50,
     borderRadius: 10,
     marginBottom : 10 , 
      borderWidth: 2, 
      borderColor: "black" , 
      marginTop : 40 , 
      marginLeft : 30, 
      flexDirection : "row",
      alignItems : "center",
      backgroundColor : bgColor,
      flexDirection : "row",
      justifyContent : "center"
   }} >
   <Text style={{color : textColor}}> {title}</Text>
   </TouchableOpacity>
  )
}

export default CommonButton

const styles = StyleSheet.create({
  container :{
    
  }
})