import React,{Component,useState} from 'react';
import {StyleSheet,View,Text,Button,Image} from 'react-native';

const Logo = () =>
{
    return(
        <View style={styles.container}>
           <Image source={require('../assets/logo2.png')} style={styles.logoimg}></Image> 
        </View>
    );
}
const styles = StyleSheet.create(
    {
        container:{
            paddingTop:100
        },
        logoimg:{
            height:100,
            width:300,
            resizeMode:'cover',
        }
    }
)
export default Logo;