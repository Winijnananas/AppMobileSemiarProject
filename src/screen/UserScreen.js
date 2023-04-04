import { View, Text, Button, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Pressable, ScrollView, ActivityIndicator, Alert } from 'react-native';

import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native';

import axios from 'axios';
import DisplayInvest from './DisplayInvest';
import Icon from 'react-native-vector-icons/FontAwesome5';
console.disableYellowBox = true;

// import { API_ENDPOINT } from '@env';

export default function UserScreen({ navigation }) {
  
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('@Token');
      if (token) {
        navigation.navigate('Tab');
      }
    };

    checkToken();
  }, []);
  const clearInputs = () => {
    setToken('');
  }
const logout = async () => {
  try {
    await AsyncStorage.removeItem('@Token');
    // navigate to login screen or any other screen after logout
    clearInputs();
    alert('ออกจากระบบเเล้ว :)')
    console.log('LOGOUT SUCCESS')
    navigation.navigate('Login')
  } catch (err) {
    console.log(err);
  }
}
  const [shown, show] = React.useState(false);
  const onPress = () => show(!shown);
  const API_ENDPOINT = "http://192.168.1.31:3000/user";
  // const API_ENDPOINT = process.env.API_ENDPOINT;
  // const API_ENDPOINT = "http://172.20.10.5:3000/user";
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');


  const getToken = async () => {
    //await AsyncStorage.getItem('@Token');
    setToken(await AsyncStorage.getItem('@Token'));
    // console.log('THIS IS TOKEN:',token)
  };

  getToken();
  //console.log(getToken())
  const isFocused = useIsFocused();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_ENDPOINT, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        });
        const data = response.data;
        setUser(data.user);
        // console.log('this is user',user)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [isFocused]);

  if (!user) {
    return (
      <View style={{justifyContent:'center',
      flex:1,
      alignItems:'center',
      }}>
        <Text style={{
          fontWeight:'bold',
          fontSize:30,
          color:'#FF7043'
        }}>กำลังโหลดข้อมูล....</Text>
      </View>
    );
  }


  return (
    <View style={{justifyContent:'center',
    flex:1,alignItems:'center',
    paddingTop:10}}>
       <Text style={{fontSize:25,fontWeight:'bold'
       ,marginBottom:50,
       color:'#D93D04'}}>หน้าผู้ใช้งาน</Text>
       <View style={{marginBottom:100}}>
       <Image source={{ uri: user.urluser }} style={styles.avatar}/>
       </View>
      
      <Text style={{fontSize:25,
        fontWeight:'500',
        color:'#2C6AB4'}}>{`สวัสดีคุณ : ${user.fname.toUpperCase()}`}</Text>
      <Text style={{fontSize:20,
        fontWeight:'600',
        color:'black'}}>{`อีเมลล์  : ${user.email}`}</Text>
      <TouchableOpacity
    style={{backgroundColor:'#0059E9'
    ,height:40,
    width:'95%',
    alignItems:'center',
    borderRadius:0,marginTop:5}}
    onPress={() => { navigation.navigate('Show') }}
    >
      <Text style={{fontSize:20,color:"#FFF",fontWeight:'800',padding:5}}>
      ดูการลงทุนทั้งหมด
      </Text>
    </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}
              onPress={() => Alert.alert('During develop')}
              >
              <MaterialCommunityIcons name="heart" color={'red'} size={25}
              style={{marginLeft:10}} 
              />
              <Text style={{marginLeft:5}}>Favorite</Text> 
              </TouchableOpacity> 


              <TouchableOpacity style={styles.buttonContainer}
              onPress={() => Alert.alert('During develop')}
              >
              <MaterialCommunityIcons name="cog" color={'red'} size={25}
              style={{marginLeft:10}} 
              />
              <Text style={{marginLeft:5}}>Setting</Text> 
              </TouchableOpacity>   


              <TouchableOpacity style={styles.buttonContainer}
              onPress={() => Alert.alert('During develop')}
              //onPress={() =>navigation.navigate('Favorite')}
              >
              <MaterialCommunityIcons name="alert-circle-outline" color={'grey'} size={25}
              style={{marginLeft:10}} 
              />
              <Text style={{marginLeft:5}}>App V.1.0.0</Text> 
              </TouchableOpacity>   
              
    


      <TouchableOpacity style={{backgroundColor:'#C31807',
      ustifyContent:'center',
      height:50,width:'95%',
      borderRadius:7,
      marginTop:170}}
       onPress={() => logout()}
      >
        <Text style={{alignSelf:'center'
        ,color:'#FFF',
        fontWeight:'bold',
        paddingTop:10,
        fontSize:20}}>ออกจากระบบ</Text>
        { shown ? <Hello /> : null }
      </TouchableOpacity>

      <View>
     
     
    </View>
    </View>
  );
};
          

           
       
      
      





const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.9,
    borderRadius: 0,
    padding: 10,
    backgroundColor: "#D9D9D9",
    width: "40%",
    alignItems: "center",
    marginBottom: 200

  },
  containerflex: {
    justifyContent: 'center'
  },
  loginbtn: {
    borderWidth: 0,
    borderRadius: 25,
    padding: 10,
    margin: 0,
    backgroundColor: "red",
    alignItems: "center",
    height: "5%",
    width: "100%",
  },
  image: {
    marginBottom: 1,
    height: 140,
    width: 140

  },
  logOutBtn: {
    marginBottom: 10,
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#BF1700",
    alignItems: "center",
    color: "white",
    fontWeight: 'bold',

  },
  header: {
    backgroundColor: "#303030",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  nameuser: {
    fontSize: 15,
    color: "black",
    fontWeight: '500',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 4,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 0,
    width: '109%',
    borderRadius: 5,
    backgroundColor: "#3333",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
    position: 'absolute',
    
  },
  buttonContainer: {
    padding:10,
    marginTop:4,
    height:45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:0,
    width:'95%',
    borderRadius:7,
    backgroundColor: "#3333",
  },
});