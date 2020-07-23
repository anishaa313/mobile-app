import React from 'react';
import {StyleSheet,View,Text,Button,Linking} from 'react-native';
import {globalStyles} from '../styles/global';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
class Contact extends React.Component
{
    handleClickfb = async() => {
        const fburl='https://www.facebook.com/JKLakshmiCementLtd';
        return Linking.openURL(fburl);
      };
    handleClickinstagram = async()=>{
        const insturl='https://www.instagram.com/jklakshmicementofficial/?hl=en';
        return Linking.openURL(insturl);
    };
    handleClickyoutube = async()=>{
        const youtubeurl='https://www.youtube.com/channel/UCgRgQlf9OOFYOu-EFRa7huA';
        return Linking.openURL(youtubeurl);
    };
    handleClicktwitter = async()=>{
        const twitterurl='https://www.linkedin.com/company/jk-lakshmi-cement-ltd/';
        return Linking.openURL(twitterurl);
    };
    handleClicklinkedin = async()=>{
        const linkedinurl='https://twitter.com/JKLCofficial';
        return Linking.openURL(linkedinurl);
    };
      render()
      {
          return(
        <View style={globalStyles.container}>
        <ScrollView>
         <Text style={styles.titletext}> Connect with Us </Text>
         <Text></Text>
         <Text style={styles.text}> Follow us and feel free to connect with us:</Text>
         <Text>{'\n'}</Text>
         <View style={styles.connecticons}>
         <FontAwesome5 style={styles.facebook} onPress={this.handleClickfb} name="facebook" size={30} />
        <FontAwesome5 style={styles.instagram} onPress={this.handleClickinstagram} name="instagram" size={30} />
        <FontAwesome5 style={styles.twitter} onPress={this.handleClicktwitter} name="twitter" size={30} />
        <FontAwesome5 style={styles.youtube} onPress={this.handleClickyoutube} name="youtube" size={30} />
        <FontAwesome5 style={styles.linkedin} onPress={this.handleClicklinkedin} name="linkedin" size={30} />
        </View>
        <View style={styles.contactinfo}>
        <Text style={styles.contacttextheading}>The Office</Text>
        <Text></Text>
        <View style={styles.info}> 
        <FontAwesome5 style={styles.icondetail} name="map-marker-alt" size={20} />
        <Text style={styles.contactdetail}>Address:</Text>
        <Text style={styles.contactdetaildata}>JK Lakshmi Cement Ltd, Nehru House 4,Bahadur Shah Zafar Marg, New Delhi</Text>
        </View>
        <Text></Text>
        <View style={styles.info}> 
        <FontAwesome5 style={styles.icondetail} name="phone" size={20} />
        <Text style={styles.contactdetail}>Phone:</Text>
        <Text style={styles.contactdetaildata}>011-33001142-12</Text>
        </View>

        <Text></Text>
        <View style={styles.info}> 
        <FontAwesome5 style={styles.icondetail} name="envelope" size={20} />
        <Text style={styles.contactdetail}>Email:</Text>
        <Text style={styles.contactdetaildata}>jklc.customercare@jkmail.com</Text>
        </View>
        <Text></Text>
        </View>
        </ScrollView>
        </View>
    );
}
}
const styles=StyleSheet.create({
    info:{
        flexDirection:'row',
    },
    icondetail:{
        paddingLeft:15
    },
    titletext:{
        fontSize:24,
        color:'white',
        fontWeight:'bold'
    },
    text:{
        fontSize:19,
        color:'white'
    },
    icon:{
        color:'white',
        paddingLeft:30
    },
    connecticons:{
        width: 100,
        height: 100,
        flex:1,
        flexDirection:"row",
        padding:5,

    },
    instagram:{
        backgroundColor:'purple',
        color:'white',
        paddingLeft:17,
        paddingRight:17,
        paddingTop:8,
        height:50
    },
    twitter:{
        backgroundColor:'#3BB9FF',
        color:'white',
        paddingLeft:17,
        paddingRight:17,
        paddingTop:8,
        height:50
    },
    youtube:
    {
        backgroundColor:'red',
        color:'white',
        paddingLeft:17,
        paddingRight:17,
        paddingTop:8,
        height:50
    },
    linkedin:
    {
        backgroundColor:'#357EC7',
        color:'white',
        paddingLeft:17,
        paddingRight:17,
        paddingTop:8,
        height:50,
    },
    facebook:{
        backgroundColor:'blue',
        color:'white',
        paddingLeft:17,
        paddingRight:17,
        paddingTop:8,
        height:50,
    },
    contactinfo:{
        backgroundColor:'#ffc40c',
        borderRadius:5
    },
    contacttextheading:{
        paddingLeft:25,
        fontWeight:'bold',
        fontSize:30
    },
    contactdetail:{
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:10
    },
    contactdetaildata:{
        fontSize:17,
        paddingRight:125,
        paddingLeft:10
    }
})
export default Contact;