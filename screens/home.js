import React from 'react';
import {StyleSheet,View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import firebase from 'firebase';
export default class Home extends React.Component
{
    render()
    {
    return(
        <View style={globalStyles.container}>
         <ScrollView style={globalStyles.scroll}>

        <Text style={globalStyles.jktext}>JK LAKSHMI CEMENT</Text>
            <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 3,
             }}
            />
            <Text></Text>
            <Text style={globalStyles.titletext}>
            VISION
            </Text>
            <Text style={globalStyles.visiontext}>
            A dynamic business organisation
            </Text>
            <Text style={globalStyles.visiontext}>
            A socially-valued conglomerate
            </Text>
            <Text style={globalStyles.titletext}>
            {'\n'}
            VALUES
            </Text>
            <Text style={globalStyles.visiontext}>
            Caring for people
            </Text>
            <Text style={globalStyles.visiontext}>
            Integrity, openness, fairness & trust
            </Text>
            <Text style={globalStyles.visiontext}>
            Commitment to excellence
            {'\n'}
            </Text>
            <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
             }}
            />
            <Text>{'\n'}</Text>
            <View style={{flexDirection: "row"}}>
            <Image source={require('../assets/owner.png')} style={styles.ownerimg}></Image>
            <Text style={globalStyles.ownertext}>'Excellence comes not from mere words and procedures.
             It comes from an urge to strive and deliver the best every time. A mindset that says, "When it is
              good enough, improve it." 
            It is a way of thinking that comes only from a drive within.' 
            {'\n'}
            - Late Shri Hari Shankar Singhania
            {'\n'}
            </Text>
            </View>

            <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
             }}
            />

           <Text style={globalStyles.abouttext}>
           JK Lakshmi Cement Limited is a part of over 132 years old JK Organisation. An eminent industrial house,
             with operations in India and abroad and having a leadership presence in the fields of tyre, cement, 
             paper, power transmissions and sealing solutions, dairy products and textiles.
             {'\n'}
           </Text>
           <View
            style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
             }}
            />
            </ScrollView>
        </View>
        
    );
    }
}
const styles=StyleSheet.create(
    {
        imglogo:{
            width:370,
            height:100,
            resizeMode:'cover',
        },
        ownerimg:{
            height:170,
            width:130,
            resizeMode:'cover'
        },
        img:{
            height:150,
            width:200,
            resizeMode:'cover'
        }
    }
)
