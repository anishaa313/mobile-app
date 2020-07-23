import React from 'react';
import {StyleSheet,View,Text,Button,ActivityIndicator} from 'react-native';
export default function Locations()
{
    return(
        <View style={styles.container}>
         <ActivityIndicator size="large" />
        </View>
    );
}
const styles = StyleSheet.create(
    {
        container:
        {
            flex:1,
            backgroundColor:'#2c3e50',
            alignItems:'center',
            justifyContent:'center'
        }
    }
)