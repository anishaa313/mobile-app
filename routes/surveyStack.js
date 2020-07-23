import {createStackNavigator} from 'react-navigation-stack';
import Survey from '../screens/survey';
import SurveyForm from '../screens/surveyform'
import Header from '../shared/header';
import React from 'react';
const screens={
    Survey:{
        screen:Survey,
        navigationOptions:({navigation}) => {
            return{
                headerTitle:() =><Header navigation={navigation} title='Survey'/>,
            }
        }
    },
    SurveyForm:{
        screen:SurveyForm,
        

    },
    
}
const SurveyStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#800000',
            height:70
        }
    }
});
export default SurveyStack;