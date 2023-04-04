
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { KeyboardAvoidingView,View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity, Image, Pressable ,Alert} from 'react-native';
import styles from '../../styles';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
// import dotenv from 'dotenv';
// dotenv.config();

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [confirm, setConfirm] = React.useState("");
    const [fname,SetfName] = React.useState("");

    const API_Regis ="http://172.20.10.5:3000/users"
    const register = () => {
      if (!fname || !email || !password) {
        alert('กรุณากรอกข้อมูลให้ครบถิวน');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert('ใช้เครื่องหมายของอีเมลล์ไม่ถูกต้อง');
        return;
      }
      if (password.length < 6) {
        Alert.alert('รหัสผ่านอย่างน้อย 6 ตัว');
        return;
      }
      if (password !== confirm) {
        alert('รหัสผ่านไม่ตรงกันกรุณากรอกใหม่');
        return;
      }
    
      axios.post(API_Regis, {
        fname: fname,
        email: email,
        password: password
      })
      .then((response) => {
        alert('สร้างบัญชีสำเร็จ')
        console.log('สร้างบัญชีสำเร็จ')
        if (response.data.status === 'ok') {
          navigation.navigate('Login');
        }
      })
      .catch((error) => {
        console.log('Can not connect', error.message);
      })
    }
    


    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
       
            <View style={{display: 'flex', justifyContent: 'flex-start', height: '100%'}}> 
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10, marginTop: 80,right: 120,left:4 ,color:'#007ACC'}}>ลงทะเบียนเข้าสู่ระบบ  </Text>
            <View>

            <TextInput
                placeholder='อีเมลล์ที่ใช้สมัคร'
                style={styles.textInput}
                onChangeText={setEmail}
                value={email}
                clearButtonMode="always"
            />
            <TextInput
                
                placeholder='ชื่อเเละนามสกุล'
                style={styles.textInput}
                onChangeText={SetfName}
                value={fname}
                clearButtonMode="always"
            />
        
      
            <TextInput
                secureTextEntry={true}
                placeholder='รหัสผ่าน'
                style={styles.textInput}
                onChangeText={setPassword}
                value={password}
                clearButtonMode="always"
            />
            <TextInput
                secureTextEntry={true}
                placeholder='ยืนยันรหัสผ่าน'
                style={styles.textInput}
                onChangeText={setConfirm}
                value={confirm}
                clearButtonMode="always"
            />
            <TouchableOpacity style={styles.RegisBtn}
                onPress={register}>
                <Text style={styles.buttonLabel}>ลงทะเบียน</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 10,flexDirection: 'row'}}
              onPress={() => {navigation.navigate('Login')}}
            >
             <Text style={{color:'black'}}>มีบัญชีอยู่เเล้ว ?</Text>
             <Text style={{color: '#13678A', fontWeight: '700', fontSize: 15, textDecorationLine: 'underline',textAlign: 'left',marginLeft:5}}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
            </View>
            </View>
       
</KeyboardAvoidingView>
        
    )
}