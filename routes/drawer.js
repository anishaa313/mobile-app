import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import SafetyStack from './safetyStack';
import ContactStack from './contactStack';
import FeedbackStack from './feedbackStack';
import GalleryStack from './galleryStack';
import SurveyStack from './surveyStack';
import LocationsStack from './locationsStack';
import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import contentdrawer from './contentdrawer';
const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen: HomeStack,
        navigationOptions: {
            drawerIcon: (
              <FontAwesome5 name="home" size={20}/>
            ),
          
          },
        },
    Instructions:{
        screen: SafetyStack,
        navigationOptions: {
            drawerIcon: (
              <FontAwesome5 name="hard-hat" size={20}/>
            ),
          },
        },
    Feedback:{
        screen: FeedbackStack,
        navigationOptions: {
            drawerIcon: (
                <FontAwesome5 name="comments" size={20}/>
              ),
            },
          },
    Survey:{
          screen: SurveyStack,
          navigationOptions: {
              drawerIcon: (
                <FontAwesome5 name="poll" size={20}/>
                  ),
                },
              },  
    Gallery:{
            screen: GalleryStack,
            navigationOptions: {
                drawerIcon: (
                  <FontAwesome5 name="images" size={20}/>
                    ),
                  },
               },  
    Location:{
           screen: LocationsStack,
           navigationOptions: {
                drawerIcon: (
                <FontAwesome5 name="globe" size={20}/>
                  ),
                },
               },     
    Contact :{
      screen: ContactStack,
        navigationOptions: {
            drawerIcon: (
              <FontAwesome5 name="address-book" size={20}/>
            ),
          },
    },
},{
    drawerBackgroundColor:"white",
    contentComponent:contentdrawer
},

);

export default createAppContainer(RootDrawerNavigator);