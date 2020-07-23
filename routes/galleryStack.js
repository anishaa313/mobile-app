import {createStackNavigator} from 'react-navigation-stack';
import Gallery from '../screens/gallery';
import Header from '../shared/header';
import React from 'react';
const screens={
    Gallery:{
        screen:Gallery,
        navigationOptions:({navigation}) => {
            return{
                headerTitle:() =><Header navigation={navigation} title='Gallery'/>,
            }
        }
    },
    
}
const GalleryStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'#800000',
            height:70
        }
    }
});
export default GalleryStack;