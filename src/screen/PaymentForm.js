import React, { useEffect, useState } from 'react';
import { View, TextInput, Button ,StyleSheet,Text,TouchableOpacity,FlatList} from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
const PaymentForm = ({ route,onSubmit }) => {
  const API_Invest = 'http://192.168.1.31:3000/investments';
    // const API_Invest = 'http://172.20.10.5:3000/investments';
    const [spendthing, setSpendthing] = useState('');
    const [costvalue, setCostvalue] = useState('');
    const [payments, setPayments] = useState([]); // Add state for payments
    const [investment, setInvestment] = useState(null);
    const [investmentData, setInvestmentData] = useState([]);
    useFocusEffect(
        React.useCallback(() => {
          const { id } = route.params || {};
          if (id) {
            fetchInvestment(id);
          }
        }, [route.params])
      );
    
      const fetchInvestment = async (id) => {
        try {
          const response = await axios.get(`${API_Invest}/${id}`);
          const data = response.data;
    
          if (data.status === 'ok') {
            setInvestment(data.investment);
            console.log(data.investment)
          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error(error);
        }
      };
    const handleSpendthingChange = (text) => {
      setSpendthing(text);
    };
  
    const handleCostvalueChange = (numeric) => {
      setCostvalue(numeric);
    };
  
    const handleSubmit = () => {
      const payment = {
        spendings: [{
          spendthing: spendthing,
          costvalue: Number(costvalue)
        }]
      };
  
      // Call the onSubmit function with the payment object
      onSubmit(payment);
  
      setSpendthing('');
      setCostvalue('');
    };
  
    const submitPayments = () => {
        const payment = {
          spendings: [{
            spendthing: spendthing,
            costvalue: Number(costvalue)
          }]
        };
      
        console.log('submitting payment:', payment);
        if (!payment || !Array.isArray(payment.spendings) || payment.spendings.length === 0) {
          console.log('Invalid payment object');
          return;
        }
      
        const formattedSpendings = payment.spendings.map((spending) => ({
          spendthing: spending.spendthing,
          costvalue: spending.costvalue
        }));
      
        const formattedInvestment = {
          payment: formattedSpendings
        };
      
        axios.post(`${API_Invest}/${investmentData._id}/payment`, formattedInvestment)
          .then((response) => {
            const { status, data } = response.data;
            if (status === 'ok') {
              console.log('Payment submitted successfully');
              setInvestment(data.investment); // Update investment with new payment
              // navigation.navigate('Login');
            }
          })
          .catch((error) => {
            console.log(`Failed to submit payment: ${error.message}`);
          });
      };
  
   
   
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,alignSelf:'center',fontWeight:'800'}}>ค่าใช้จ่ายเพิ่มเติมในรอบนี้</Text>
            <TextInput
            style={styles.input}
                placeholder="สิ่งที่ใช้จ่าย"
                onChangeText={handleSpendthingChange}
                value={spendthing}
            />
            <TextInput
            style={styles.input}
                placeholder="มูลค่า"
                onChangeText={handleCostvalueChange}
                value={costvalue}
            />
            <TouchableOpacity
               style={{backgroundColor:'#42A7D4',
               height:40,justifyContent:'center',
               borderWidth:1
            }}
                onPress={() => {submitPayments()
                setCostvalue('');
                setSpendthing('');
                
                }}
            >
                <Text style={{alignSelf:'center',color:'#FFFF',fontSize:15,fontWeight:'900'}}>บันทึกค่าใช้จ่าย</Text>
                 </TouchableOpacity>
                 
        </View>
    );
};

export default PaymentForm;
const styles = StyleSheet.create({
    container: {
        padding:10,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    input: {
        
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10
    }
});