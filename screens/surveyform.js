import React from 'react';
import {StyleSheet,View,Text,Button,ScrollView,FlatList,Alert,TouchableOpacity, TouchableOpacityBase} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {globalStyles} from '../styles/global';
import RadioForm,{
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';
class SurveyForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            surveyquestions:[],
            answer:[]
        }
    }
    
   submitfunc(answer)
   {
    //console.log(this.state.answer);
    const {navigation}=this.props;
    const codevalue =navigation.getParam("srcode");
    const user=firebase.auth().currentUser.email;
        firebase.database().ref('survey_response').push({
            answer,
            codevalue,
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
            {
                text: 'OK', 
                onPress: () => console.log('OK Pressed')},  
        ]
    );
    {this.props.navigation.navigate('Survey')}
   }
    async componentDidMount(){
        const {navigation}=this.props;
        const codevalue =navigation.getParam("srcode");
        console.log(codevalue);


        await firebase.database().ref('survey').child(codevalue).once('value', (snapshot)=> {
            var surveyquestions = [];
            snapshot.forEach(function(snap) {
                var item= snap.val();
                item.key = snap.key;
                surveyquestions.push(item);
            }
            )
            this.setState({ surveyquestions },()=>console.log("state updated"))
            //console.log(surveyquestions)
             
        });
    }
    render()
    {
    return(
        <View style={globalStyles.container}>
            <ScrollView style={globalStyles.scroll}>
            <Text style={styles.surveyquestext}> Fill all the details correctly</Text>
                <View style={styles.wrapper}>
                    
                    <FlatList
                    keyExtractor={(item)=>item.id}
                    data={this.state.surveyquestions}
                    renderItem={({ item }) => {
                        return(
                            <View>
                                <Text></Text>
                                <Text style={styles.surveyquestext}>Question {item.key}</Text>
                                <Text style={styles.surveytxt}>{item.ques}</Text>
                                {/*<Text style={styles.locationstate}>{item.option1}</Text>
                                <Text style={styles.locationstate}>{item.option2}</Text>
                                <Text style={styles.locationstate}>{item.option3}</Text>
                                <Text style={styles.locationstate}>{item.option4}</Text>
                        */}
                        <Text></Text>
                        
                        <RadioForm
                        radio_props={[{label:item.option1,value:1},
                        {label:item.option2,value:2},
                        {label:item.option3,value:3},
                        {label:item.option4,value:4}]
                        } 
                        onPress={(value)=>{
                            //console.log(value)
                            this.state.answer[item.key-1]={label:'question'+item.key,answer:value};    
                        }}
                        buttonSize={18}
                        buttonOuterSize={22}
                        selectedButtonColor={'lightblue'}
                        buttonColor={'white'}
                        labelStyle={{fontSize:20, color:'white'}}
                        />
                        </View>
                        )
                    }}
                />
                
                <Text></Text>
                <TouchableOpacity style={styles.submitbtn}
                onPress={()=>this.submitfunc(this.state.answer)}>
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
            padding:10,
            borderRadius:7,
            marginTop:20
        },
        surveytxt:{
            fontSize:20,
            color:'black',
            backgroundColor:'white',
            padding:10
        },
        surveyquestext:{
            fontSize:22,
            color:'white',
            
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
    });
export default SurveyForm;