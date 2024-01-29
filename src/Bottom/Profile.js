import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { useNavigation } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import MyAddress from '../Screens/MyAddress';


const Profile = () => {
  const [name, setName] = useState("");
  const navigation = useNavigation()

useEffect(() => {
getData()

}, [])



// const getData = async () => {
//   const name = await AsyncStorage.getItem("NAME");
  
//   console.log('Name:', name);
// };



const getData = async () => {
  const storedName = await AsyncStorage.getItem("NAME");
  if (storedName) {
    setName(storedName);
  }
};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Profilebody}>
      <Text style={{fontSize : 20}}> PROFILE</Text>
      <TouchableOpacity style={styles.ProfilebodyContent}>
      <Image source={require("../images/settings.png")} style={styles.setting}/>
      </TouchableOpacity>
      </View>
      <Image source={require("../images/man.png")} style={styles.ProfileImage}/>
      <Text style={{fontSize : 30}}>{name}</Text>




      <TouchableOpacity onPress={()=>{navigation.navigate("MyAddress")}} style={{width : "100%" , height : 60 ,  marginTop : 40 , justifyContent : "center", borderBottomColor : "red" , borderWidth : 5 }}>
      
      <Text> ADDRESS </Text>
      
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Order")
      }} style={{width : "100%" , height : 80 ,  marginTop : 40 , justifyContent : "center", borderBottomColor : "red" , borderWidth : 5 }}>
      
      <Text> MY ORDER </Text>
      
      </TouchableOpacity>
      <TouchableOpacity  style={{width : "100%" , height : 80 ,  marginTop : 40 , justifyContent : "center", borderBottomColor : "red" , borderWidth : 5 }}>
      
      <Text> My OFFERS </Text>
      
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
     flex: 1 ,
    //  backgroundColor : "grey"
  },
  Profilebody :{
    width : "100%" ,
    height : 70,
    justifyContent : "space-between" ,
    alignItems : "center",
    backgroundColor : " grey",
    flexDirection : "row"
  },
  ProfilebodyContent : {
    width : 30,
    height : 30,
    marginRight : 20,
    justifyContent : "center" , 
    alignItems : "center"
  }, 
  setting:{
    width : 40 , 
    height : 40
  },
  ProfileImage:{
    width : 70 , 
    height : 80,
    alignSelf : "center",
    marginTop : 30
  }


})