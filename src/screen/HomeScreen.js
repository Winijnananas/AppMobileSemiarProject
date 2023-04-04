import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Keyboard, Modal, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView, SafeAreaView, Image, Alert, Dimensions, Button, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useRef } from 'react'
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../../css/styletwo';
import axios from 'axios';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

// import "react-datepicker/dist/react-datepicker.css";

const HomeScreen = ({ navigation }) => {

    const [roundNumber, setRoundNumber] = useState('');
    const [cost, setCost] = useState('');
    const [investment, setInvestment] = React.useState('');
    const [type, setType] = useState();
    const [status, setStatus] = useState();
    const pickerRef = useRef();

    console.disableYellowBox = true;

    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() +1), 'DD/MM/YYYY')
    // const endDate = getFormatedDate(today.getDate() + 7, 'DD/MM/YYYY');
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState('')

    function handleOnPress() {
        setOpen(!open);
    }
    function handleChange(newDate) {
        console.log(newDate)
        setDate(newDate)
    }
    //wifiหอ
    // const API_Invest = "http://172.20.10.5:3000/investments"
    const API_Invest ="http://192.168.1.31:3000/investments"
    //wifi wu
    // const API_Invest = "http://172.20.10.5:3000/investments"
    // const API_Regis = process.env.API_REGIS;
    // const API = "http://127.0.0.1:3000/users";
    const InputInvest = () => {
        
        if (!roundNumber || !cost || !investment || !type || !status || !date) {
            // alert('Complete your information');
            
            return;
        }
        
        //axios.post(`${MYAPP_API}}/users`,
        axios.post(API_Invest,

            {
                roundNumber: roundNumber,
                cost: cost,
                investment: investment,
                type: type,
                status: status,
                date: date.toString().substring(0, 10),


            })
            .then((response) => {
                Alert.alert("บันทึกข้อมูลเเล้ว");
                if (response.data.status === 'Done Submit Data') {
                    // navigation.navigate('Login');
                }
            })
            .catch((error) => {
                console.log('Can not submit', error.message);
            })
    };





    return (
        <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View
                style={styles.container}
                behavior="padding"
            >



                <View style={{ display: 'flex',
                 justifyContent: 'flex-start'
                 , height: '100%' }}>
                    <Text style={styles.titlefirst}>กรอกสิ่งที่ต้องการลงทุน</Text>

<TextInput
                            style={{
                                height: 40,
                                width: "100%",
                                borderWidth: 1,
                                borderColor: "#3D3D3D",
                                borderRadius: 7,
                                backgroundColor: "#FFFF",
                                padding: 5,
                                color: "#A9A9A9",
                                fontWeight: "700",
                                fontSize: 15,
                                marginTop: 5,
                                marginBottom: 5,
                            }}
                            onChangeText={setType}

                            value={type}
                            placeholderTextColor="#A9A9A9"
                            // secureTextEntry={true}
                            autoCapitalize='none'
                            placeholder="กำหนดประเภทเอง"
                            clearButtonMode="always"

                        />
                        <Text style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: 15,
                            fontWeight: "800",
                            color: "#606A74",
                        }}>เลือกประเภทการลงทุน</Text>
                        <Picker
                            ref={pickerRef}
                            selectedValue={type}
                            onValueChange={(itemValue, itemIndex) =>
                                setType(itemValue)}
                                style={{ marginTop: 10, fontSize: 18,color: '#D93D04' }}
                        >
                            <Picker.Item label="ไม่มีประเภท" value="none" />
                            <Picker.Item label="เกษตรกรรม" value="เกษตรกรรม" />
                            <Picker.Item label="การประมง" value="ประมง" />
                            <Picker.Item label="ขายออก" value="ขายออก" />
                            <Picker.Item label="ได้รับเงิน" value="ได้รับเงิน" />
                            <Picker.Item label="จ่ายเงิน" value="จ่ายเงิน" />
                            <Picker.Item label="ถอนเงิน" value="ถอนเงิน" />
                            <Picker.Item label="ไม่ระบุ" value="ไม่ระบุ" />
                        </Picker>
                    <View>
                        <View style={{ justifyContent: 'center',
                         alignContent: 'center',
                          alignContent: 'center' }}>
                            <Text>รอบการลงทุน:</Text>
                            <TextInput
                                style={{
                                    marginBottom: 5,
                                    borderWidth: 0,
                                    height: 35,
                                    padding: 5,
                                    width: '80%'


                                }}
                                placeholder="ระบุรอบการลงทุน -> ตัวอย่างเช่น 1"
                                value={roundNumber}
                                onChangeText={setRoundNumber}
                                keyboardType="numeric"
                            />
                            <TextInput
                            style={styles.textInputHome}
                            onChangeText={setInvestment}
                            value={investment}
                            placeholderTextColor="#A9A9A9"
                            autoCapitalize='none'
                            placeholder="สิ่งที่ต้องการลงทุน"
                            clearButtonMode="always"


                        />


                            <TextInput
                                style={styles.textInputHome}
                                placeholder="เงินลงทุน"
                                value={cost}
                                onChangeText={setCost}
                                keyboardType="numeric"
                            />
                        </View>

                        


                        
                        <Text style={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            fontSize: 15,
                            fontWeight: "800",
                            color: "#606A74",
                        }}>สถานะ</Text>
                        <Picker
                            ref={pickerRef}
                            selectedValue={status}
                            onValueChange={(itemValue, itemIndex) =>
                                setStatus(itemValue)}
                                style={{ marginTop: 10, fontSize: 18,color: '#2E9AE9'}}
                        >
                            <Picker.Item label="ระบุสถานะ" value="ระบุสถานะ" />
                            <Picker.Item label="Active" value="active" />
                            <Picker.Item label="Unactive" value="unactive" />

                        </Picker>
                        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        <TouchableOpacity
                            onPress={handleOnPress}
                        >
                            <Text style={styles.OpenDate}>กำหนดวันเปิดรอบ</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={open}
                        >
                            <View style={{ flex:1,justifyContent:'center',alignItems:'center',marginTop:22}}>
                                <View style={{margin:20,
                                    backgroundColor:'#FFF',
                                    borderRadius:20,width:'90%',
                                    padding:35,alignItems:'center',
                                    shadowColor:'#000',
                                    shadowOffset:{width:0,
                                    height:2}}}>
                                    <DatePicker
                                    mode='calendar'
                                    minimumDate={startDate}
                                    // maximumDate={endDate}
                                    selected={date}
                                    onDateChange={handleChange}
                                    />
                                    <TouchableOpacity
                                        onPress={handleOnPress}
                                    >
                                        <Text style={{fontSize:15,fontWeight:'bold',}}>ปิดหน้าต่างนี้</Text>
                                    </TouchableOpacity>
                                    {/* <TouchableOpacity
                                        onPress={InputInvest}
                                    >
                                        <Text style={{fontSize:15,fontWeight:'bold',}}>บันทึกวัน</Text>
                                    </TouchableOpacity> */}
                                </View>
                            </View>

                        </Modal>




                        <TouchableOpacity
                            style={styles.loginButtonHome}
                            //  onPress={() =>navigation.navigate('Tab')}

                            onPress={() => {
                                InputInvest('');
                                setCost('');
                                setInvestment('');
                                setType('');
                                setRoundNumber('');
                                setStatus('');
                                setDate('');
                                

                            }}

                        >


                            <Text style={styles.buttonLabel}
                            >บันทึกข้อมูล</Text>
                        </TouchableOpacity>




                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback></ScrollView>

    )
}

export default HomeScreen
