import React, {Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header({navigation,title}){
    const openMenu = () =>
    {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <FontAwesome5 name={'bars'} size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>{title}
                </Text>
                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    logout:{
        color:'white',
        fontSize:20,
        alignSelf:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:25,
        color:'white',
        letterSpacing: 1,
    },
    icon:{
        position:'absolute',
        left:10,
        color:'white'
    }
});