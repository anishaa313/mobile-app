import {createStackNavigator} from 'react-navigation-stack';
import Feedback from '../screens/feedback';
import Header from '../shared/header';
import React from 'react';
const screens={
    Feedback:{
        screen:Feedback,
        navigationOptions:({navigation}) => {
            return{
                headerTitle:() =><Header navigation={navigation} title='Feedback'/>,
            }
        }
    },
    
}
const FeedbackStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#800000',
            height:70
        }
    }
});
export default FeedbackStack;