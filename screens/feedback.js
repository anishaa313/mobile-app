import React from 'react';
import {StyleSheet,View,Text,ScrollView,TextInput,TouchableOpacity,Alert} from 'react-native';
import {globalStyles} from '../styles/global';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {firebaseConfig} from '../config';
class Feedback extends React.Component
{
    componentDidMount()
    {
        var date= new Date().getDate();
        var month = new Date().getMonth() + 1; 
        var year = new Date().getFullYear(); 
        var hours = new Date().getHours();
        var min = new Date().getMinutes(); 
        var sec = new Date().getSeconds(); 
        this.setState({
          date:
            date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
    }
    constructor(props){
        super(props);
        this.state=({
            name:'',
            feedbacktext:'',
        })
    }
    savefeedback(name,feedbacktext,date)
    {
        if(this.state.name=='' || this.state.feedbacktext=='')
        {
            Alert.alert(
                'Error',
                'Name/Feedback is required',
                [
                    {   text: 'Cancel',  
                        onPress: () => console.log('Cancel Pressed'),  
                        style: 'cancel',  
                    },  
                    {
                        text: 'OK', 
                        onPress: () => console.log('OK Pressed')},  
                ]
            );
        }
        else
        {
        const user=firebase.auth().currentUser.email;
        firebase.database().ref('feedback').push({
            name,
            feedbacktext,
            date,
            user
        }).then((data)=>{
            console.log('data',data)
        }).catch((error)=>{
            console.log('error',error)
        })
        Alert.alert(
            'Success',
            'Your response is recorded',
            [
                {   text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {
                    text: 'OK', 
                    onPress: () => console.log('OK Pressed')},  
            ]
        );
        this.setState({
            name:'',
            feedbacktext:''
        })
    }
    }
    render()
    {
    return(
        <View style={globalStyles.container}>
        <ScrollView style={globalStyles.scroll}>
         <Text style={styles.feedbackheading}>Any Recommendations/Feedback?</Text>
         <Text></Text>
         <View style={styles.wrapper}>
         <Text style={styles.text}> Name : </Text>
        <TextInput
            placeholder="Name"
            style={styles.nameinput}
            value={this.state.name}
            onChangeText={(name)=> this.setState({name})}
            />
            <Text></Text>
        <Text style={styles.text}> Feedback : </Text>
        <TextInput
            placeholder="Feedback"
            style={styles.feedbackinput}
            value={this.state.feedbacktext}
            onChangeText={feedbacktext=>this.setState({feedbacktext})}
            />
            <Text>{'\n'}</Text>
        <TouchableOpacity style={styles.submitbtn}
        onPress={()=>this.savefeedback(this.state.name, this.state.feedbacktext,this.state.date)}>
               <Text style={styles.submitbtntext}>Submit</Text>
            </TouchableOpacity> 
            </View>
            </ScrollView>
        </View>
    );
    }
}
const styles=StyleSheet.create({
    wrapper:{
        backgroundColor:'#424949',
        padding:20,
        borderRadius:7
    },
    feedbackheading:{
        fontSize:22,
        color:"#DCDCDC"
    },
    text:{
        color:'white',
        fontSize:18,
        padding:20
    },
    nameinput:{
        height:50,
        paddingLeft:20,
        paddingBottom:15,
        borderRadius:5,
        backgroundColor:'white',
        fontSize:15,
        width:"90%",
        alignSelf:'center'
    },
    feedbackinput:{
        height:100,
        paddingLeft:20,
        paddingBottom:15,
        borderRadius:5,
        backgroundColor:'white',
        fontSize:15,
        width:"90%",
        alignSelf:'center'
    },
    submitbtn:{
        padding:15,
        borderRadius:10,
        backgroundColor:'#800000',
        width:200,
        alignSelf:'center',
        padding:15
    },
    submitbtntext:{
        color:'white',
        fontWeight:"bold",
        fontSize:18,
       textAlign:'center',
}
})
export default Feedback;