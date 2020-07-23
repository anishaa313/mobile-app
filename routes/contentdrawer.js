import React from 'react';
import {StyleSheet,View,Text,Button,TouchableOpacity} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class contentdrawer extends React.Component
{
    constructor(props){
        super(props);
    }
    render()
    {
    return(
        <View>
            <Text></Text>
         <FontAwesome5 name="user-circle" size={80} style={styles.icon}/>
        <Text></Text>
         <DrawerNavigatorItems {...this.props} />
         <TouchableOpacity onPress={()=>firebase.auth().signOut()} style={styles.buttonContainer}>
                <Text style={styles.logout}>Logout
         </Text>
         </TouchableOpacity>
        </View>
    );
    }
}
const styles = StyleSheet.create({
    logout:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    buttonContainer:{
        padding:15,
        borderRadius:2,
        backgroundColor:'#C0392B',
    },
    icon:{
        alignSelf:'center'
    }
});
