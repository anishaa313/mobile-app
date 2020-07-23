import React,{Component,useState} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import Logo from './logo';
import EmailPassword from './emailpassword';
import { globalStyles } from '../styles/global';
const Login = () =>
{
    return(
        <ScrollView styles={globalStyles.scroll}>
        <View style={styles.container}>
            <View style={styles.logoContainer}>
            <Logo />
            </View> 
            <View>
            <EmailPassword/>
            </View>        
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
        },
        logoContainer:{
            alignItems:'center',
            justifyContent:'center'
        },

    }
)
export default Login;