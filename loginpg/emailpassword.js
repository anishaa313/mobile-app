import React,{Component,useState} from 'react';
import {StyleSheet,View,Text,Button,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { globalStyles } from '../styles/global';
class emailAndPassword extends Component
{
    state={

        email:'',
        password:'',
        error:'',
        loading:false
        
    }
    onBottomPress= ()=>
    {
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err =>{
            this.setState({
                error:err.message
            })
        })
    }
    onLoginSuccess=()=>
    {
        this.setState({
            error:'',
            loading:false
        })
    }
    render()
    {
    return(
        <ScrollView style={globalStyles.scroll}>
        <View style={styles.container}>
            <TextInput
            placeholder="Email"
            style={styles.input}
            value={this.state.email}
            onChangeText={email=> this.setState({email})}
            />
            <Text>
                {'\n'}
            </Text>
            <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
            value={this.state.password}
            onChangeText={password=> this.setState({password})}
            />
            <Text>
                {'\n'}
            </Text>
            <TouchableOpacity style={styles.buttonContainer}
            onPress={this.onBottomPress}>
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity> 
            <Text style={styles.error}>
                 {this.state.error}
            </Text>
           
        </View>
        </ScrollView>
    );
    }
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            padding:40,
            paddingTop:100
        },
        input:{
            height:50,
            paddingLeft:20,
            borderRadius:5,
            backgroundColor:'white',
            fontSize:15
        },
        error:{
            color:'white',
            fontSize:15,
            alignSelf:'center',
            marginTop:10
        },
        buttonContainer:{
            padding:15,
            borderRadius:10,
            backgroundColor:'#000080',
            width:250,
            alignSelf:'center'
        },
        buttonText:{
            textAlign:'center',
            color:'white',
            fontWeight:'bold',
            fontSize:20
        }
    }
)
export default emailAndPassword;