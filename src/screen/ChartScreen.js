import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import { PieChart,LineChart,BarChart } from 'react-native-chart-kit';

const data = [
  {
    name: 'เลีัยงปลานิล',
    cost: 9000,
    color: '#007AC7',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'เลี้ยงวัว',
    cost: 5000,
    color: '#8B20BB',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'ปลูกถั่วงอก',
    cost: 850,
    color: '#FF2000',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'ปลูกข้าวไทย',
    cost: 3200,
    color: '#FFFA00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'ปลูกมันฝรั่ง',
    cost: 5000,
    color: '#01B700',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  
];
const chartConfigline = {
  backgroundColor: '#FFFFFF',
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  color: (opacity = 1) => `rgba(0,128,0,${opacity})`,
};

const dataLine = {
  labels: ['ปลูกถั่วงอก','ปลูกข้าวไทย','เลี้ยงวัว','ปลูกมันฝรั่ง','เลี้ยงปลานิล'],
  datasets: [
    {
      data: [850, 3200,5000,5000, 9000],
      color: (opacity = 1) => `rgba(26, 66, 104, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ]
};

const chartConfig = {
  backgroundColor: '#FFFFFF',
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  color: (opacity = 1) => `rgba(26, 66, 104, ${opacity})`,
};

const dataBar = [
  {
    name: 'เลีัยงปลานิล',
    cost: 9000,
    color: '#007AC7',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'เลี้ยงวัว',
    cost: 5000,
    color: '#8B20BB',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'ปลูกถั่วงอก',
    cost: 850,
    color: '#FF2000',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'ปลูกข้าวไทย',
    cost: 3200,
    color: '#FFFA00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'ปลูกมันฝรั่ง',
    cost: 5000,
    color: '#01B700',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];
const chartConfigBar = {
  backgroundColor: '#FFFFFF',
  backgroundGradientFrom: '#FFFFFF',
  backgroundGradientTo: '#FFFFFF',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 0, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};
// Calculate the total cost of all items
const totalCost = data.reduce((acc, item) => acc + item.cost, 0);

// Add a percent property to each data item
const dataWithPercent = data.map(item => ({
  ...item,
  percent: ((item.cost / totalCost) * 100).toFixed(2),
}));


const ChartScreen = () => {
  return (
    <ScrollView style={{

      backgroundColor:'#FFF'
    }}>
    <View style={{
      marginTop:90,
      flex:1,
      justifyContent:'center',
      alignSelf:'center',
      backgroundColor:'#FFFF',
    
    }}>
      <Text style={{
       alignSelf:'center',
       fontSize:20,
       fontWeight:'bold',
       color:'#007AC7'
      }}>กราฟเเสดงเเนวโน้มการลงทุน</Text>
      <View style={{
paddingLeft:50
      }}>
        <PieChart
          data={dataWithPercent}
          width={380}
          height={200}
          chartConfig={chartConfig}
          accessor="cost"
          paddingLeft="15"
          absolute
          // Display the percentage value using formatText
          formatText={(value, name) => `${value} (${name} - ${(value/totalCost * 100).toFixed(2)}%)`}
        />
      </View>
      <View style={{
paddingLeft:50
      }}>
      <LineChart
        data={dataLine}
        width={450}
        height={200}
        chartConfig={chartConfigline}
        bezier
      />
      </View>
      <View style={styles.container}>
      <BarChart
        data={{
          labels: data.map((item) => item.name),
          datasets: [
            {
              data: data.map((item) => item.cost),
            },
          ],
        }}
        width={380}
        height={200}
        chartConfig={chartConfigBar}
      />
    </View>
    </View>
    </ScrollView>
  )
}

export default ChartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },


})