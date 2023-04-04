// import { async } from '@firebase/util';
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView, Image, Alert } from 'react-native'
// import { auth } from '../../firbase'
import styles from '../../styles';
import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
// import { API_LOGIN } from "@env";
// const navigation = useNavigation()
console.disableYellowBox = true;


const LoginScreen = ({ navigation }) => {
 
  const API_LOGIN = "http://192.168.1.31:3000/login";
  // const API_LOGIN = "http://172.20.10.5:3000/login";
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const _storeData = async (data) => {
    try {
      await AsyncStorage.setItem('@Token', data);
      //console.log(data);
      setEmail('');
      setPassword('');
      navigation.navigate('Tab');
    } catch (err) {
      console.log(err);
    }
  }

  const Login = ({ }) => {
    //axios.post(`API_login`,
    axios.post(API_LOGIN,
      {
        email: email,
        password: password
      })
      .then((response) => {
        console.log('LOGIN SUCCESS');
        if (response.data.status === 'ok') {
          _storeData(response.data.token);
        } else if (response.data.status === 'user_not_found') {
          alert('ไม่พบผู้ใช้งานในระบบ');
        }
        else if (!password) {
          alert('คุณลืมกรอกรหัสผ่าน');
        }else if (!email) {
          alert('คุณลืมกรอกอีเมลล์');
        }
        else {
          alert('รหัสผ่านหรืออีเมลล์ของท่านผิด');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }




  return (
    <ScrollView
      style={styles.container}
      behavior="padding"
    >

      <View style={{ display: 'flex', justifyContent: 'flex-start', height: '100%' }}>

        <Text style={styles.title}>เข้าสู่ระบบ</Text>

        <View>


          <TextInput
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
            placeholderTextColor="#A9A9A9"
            autoCapitalize='none'
            placeholder="อีเมลล์ผู้ใช้"
            clearButtonMode="always"
          />

          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#A9A9A9"
            // secureTextEntry 
            // right={<TextInput.Icon icon="eye"/>}
            secureTextEntry={true}
            autoCapitalize='none'
            placeholder="รหัสผ่าน"
            clearButtonMode="always"
          />


          <TouchableOpacity
            style={styles.loginButton}
            //onPress={() =>navigation.navigate('App')}
            onPress={Login}

          >
            <Text style={styles.buttonLabel}
            // onPress={login}
            // onPress={() => Alert.alert('Login Complete ')}
            >ล็อคอิน</Text>
          </TouchableOpacity>

          { /* register */}
          <TouchableOpacity style={{ marginVertical: 10, flexDirection: 'row' }}
            onPress={() => { navigation.navigate('Regis') }}
          >
            <Text style={{ color: '#D93D04' }}>ผู้ใช้ใหม่?</Text>
            <Text style={{ color: '#13678A', fontWeight: '700', textDecorationLine: 'underline', fontSize: 15, textAlign: 'left', marginLeft: 5 }}>ลงทะเบียน</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen