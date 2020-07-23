import React from 'react';
import {StyleSheet,View,Text,ScrollView,TouchableOpacity,TextInput,Alert} from 'react-native';
import * as firebase from 'firebase';
import {globalStyles} from '../styles/global';

 class Survey extends React.Component
{
    constructor(props){
        super(props);
        this.state=({
            surveycode:'',
            data:[]
        })
    }
    checkcode(surveycode)
    {
        if(surveycode=='')
        {
            Alert.alert(
                'Error',
                'Survey Code is required',
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
                    var exists;
                    var sr=[];
                    firebase.database().ref('survey').child(surveycode).once('value', (snapshot)=> {
                    exists=(snapshot.val());
                    snapshot.forEach(function(snap) {
                    var item= snap.val();
                    item.key = snap.key;
                    sr.push(item);
                    })
                    if(exists)
                    {
                        console.log('exists');
                        //console.log(exists);
                        console.log(surveycode);
                        console.log(sr);
                        {this.props.navigation.navigate('SurveyForm',{srcode:surveycode})}
                        //{this.props.navigation.navigate('SurveyForm')}
                        //form opens
                        this.setState({
                            surveycode:''
                        })
                    }
                    else
                    {
                        console.log('donot exist');
                        Alert.alert(
                            'Error',
                            'Survey Code is incorrect',
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
                    //console.log('xyz',sr);
                    this.setState({data:sr},()=>{"state updated"})
                }
                );
               
        }
    }
    render()
    {
    return(
        <View style={globalStyles.container}>
            <ScrollView style={globalStyles.scroll}>
            <View style={styles.wrapper}>
                <Text style={styles.surveytxt}>Enter the Survey Code :</Text>
                <Text></Text>
                <TextInput
            placeholder="Enter Code"
            style={styles.surveycodeinput}
            value={this.state.surveycode}
            onChangeText={surveycode=>this.setState({surveycode})}
            />
            <Text></Text>
            <Text></Text>
            <TouchableOpacity style={styles.submitbtn}
            onPress={()=>this.checkcode(this.state.surveycode)}>
               <Text style={styles.submitbtntext}>Submit</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
    }
}
const styles=StyleSheet.create(
    {
        wrapper:{
            backgroundColor:'#424949',
            padding:30,
            borderRadius:7,
            marginTop:50
        },
        surveytxt:{
            color:'white',
            fontSize:20
        },
        surveycodeinput:{
                height:50,
                paddingLeft:20,
                paddingBottom:15,
                borderRadius:5,
                backgroundColor:'white',
                fontSize:15,
                width:"100%",
                
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
    }
    
)
export default Survey;