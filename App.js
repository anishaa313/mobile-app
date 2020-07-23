import React,{Component,useState} from 'react';
import {StyleSheet,View,Text,Button,ImageBackground} from 'react-native';
import Navigator from './routes/drawer';
import firebase from 'firebase';
import Loading from './loginpg/loading';
import Login from './loginpg/login';
import BG from './assets/login7.jpg';
export default class App extends Component {

  state={
    loggedIn:null
  }
  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBsWJVf6y7Nayse_qvy6ydlBDOlVhtmTHg",
      authDomain: "jk-cement-d513b.firebaseapp.com",
      databaseURL: "https://jk-cement-d513b.firebaseio.com",
      projectId: "jk-cement-d513b",
      storageBucket: "jk-cement-d513b.appspot.com",
      messagingSenderId: "382137362719",
      appId: "1:382137362719:web:b36bfd3af1fc09f2b8a82a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setState(
          {loggedIn:true}
          )
      }
      else{
        this.setState(
          {loggedIn:false}
          )
      }
    })
  }
  renderContent=()=>
  {
    switch(this.state.loggedIn)
    {
      case true:
        return <Navigator />
      case false:
        return <ImageBackground style={styles.container} source={BG}>
        <Login />
        </ImageBackground>
      default:
        return  <Loading />
    }

  }
  render() {
      return (

        this.renderContent()
    );
  }

}
const styles = StyleSheet.create(
  {
      container:{
          flex:1,
          justifyContent:'center',
          height:"100%",
          width:"100%",
      },
  });