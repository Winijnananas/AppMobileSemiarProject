import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    textAlign:'center',
    justifyContent: 'center',
    fontSize: 35,
    marginTop: 250,
    marginBottom: 10,
    fontWeight: "800",
    color: "#D93D04",
  },
  titlefirst: {
    paddingTop:20,
    textAlign:'center',
    justifyContent: 'center',
    fontSize: 35,
    marginTop: 50,
    marginBottom: 10,
    fontWeight: "800",
    color: "#D93D04",
  },
  titleregis: {
    textAlign:'center',
    justifyContent: 'center',
    fontSize: 35,
    marginTop: 250,
    marginBottom: 10,
    fontWeight: "800",
    color: "#0000CD",
  },
  settingTitle: {
    fontSize: 35,
    marginBottom: 25,
    fontWeight: "800",
    color: "#fff",
    padding:20
  },
  warningTitle: {
    fontSize: 50,
    fontWeight: "800",
    color: "#fff",
    
  },
  flex: {
    display: "flex",
  },
  textInput: {
    height: 60,
    width: "100%",
    borderWidth: 1,
    borderColor: "#3D3D3D",
    borderRadius: 5,
    backgroundColor: "#FFFF",
    padding: 10,
    color: "#A9A9A9",
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 15,
  },
  loginButton: {
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#F25C05",
    justifyContent:'center',
    alignContent:'center',
    width:'100%'
  },
  RegisButton: {
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#6495ED",
    justifyContent:'center',
    alignContent:'center',
    width:'100%'
  },
  buttonLabel: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 25,
    textAlign: "center",
  },
  
  RegisBtn: {
    borderWidth: 0.15,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#BF1700",
    width: "100%",
    alignItems: "center",
    color: "white",
    fontWeight: 'bold',
    marginBottom: 10
},
  loginBtn: {
            borderWidth: 0.15,
            borderRadius: 5,
            padding: 10,
            backgroundColor: "#BF1700",
            width: "100%",
            alignItems: "center",
            color: "white",
            fontWeight: 'bold',
            marginBottom: 10
        },
        image: {
          marginTop:200,
          height: 100,
          width: 300,
          
      },
      headerlogin:{
        marginBottom: 1,
    height: 10,
    width: 10,
    
      },
      textInputHome: {
        height: 60,
        width: "100%",
        borderWidth: 1,
        borderColor: "#3D3D3D",
        borderRadius: 7,
        backgroundColor: "#FFFF",
        padding: 10,
        color: "#A9A9A9",
        fontWeight: "700",
        fontSize: 20,
        marginBottom: 15,
      },
      loginButtonHome: {
        borderWidth: 0,
        borderRadius: 7,
        padding: 10,
        backgroundColor: "#1C6AE4",
        justifyContent:'center',
        alignContent:'center',
        width:'100%',
        marginTop:50
      },
      containerfirst:{
        borderRadius:10,
        backgroundColor:'#899499',
        padding:10,
        margin:5,
        marginHorizontal:0,
        color:'#fff',
        fontSize:18,
        fontWeight:'bold'
    },
    containerfirstsub:{
      borderRadius:0,
      backgroundColor:'#16825D',
      padding:10,
      margin:5,
      marginHorizontal:0,
      color:'#fff',
      fontSize:15,
      fontWeight:'bold',
      width:"100%",
      
  },
    innerContainer:{
        alignItems:'center',
        flexDirection:'column',
    },
    conteredView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:22
    },
    modalView:{
      margin:20,
      backgroundColor:'#FFF',
      borderRadius:20,
      width:'90%',
      padding:35,
      alignItems:'center',
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:2,
      },
      
    },OpenDate:{
      fontSize:15,fontWeight:'bold',justifyContent:'center',alignContent:'center',textAlign:'center',padding:10,marginBottom:5,backgroundColor:'#FF6C37',borderRadius:5,color:'#FFF'
    }

});

module.exports = styles;