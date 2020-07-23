import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import {globalStyles} from '../styles/global';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Location extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            locations:[],
        }
    }
    locationfunc = async()=>{
        await firebase.database().ref('locations').once('value', (snapshot)=> {
            var locations = [];
            snapshot.forEach(function(snap) {
                var item= snap.val();
                item.key = snap.key;
                locations.push(item);
            }
            )
            //console.log(locations)
            this.setState({ locations },()=>console.log("state updated")) 
        });
    }
    componentDidMount=()=>
        {
        this.locationfunc();
    }
    render()
    {
        return(
        <View style={globalStyles.container}>
            
         <Text style={styles.titletext}>JK Lakshmi Cement ltd.- Locations</Text>
         
             <FlatList
             keyExtractor={(item)=>item.id}
                data={this.state.locations}
                    renderItem={({ item }) => {
                        return(
                            <View>
                                <Text></Text>
                                <View style={styles.locationbg}>
                                <FontAwesome5 style={styles.locationicon} name="map-marker-alt" size={20} />
                                <Text style={styles.locationtext}>{item.address}</Text>
                                <Text style={styles.locationstate}>{item.state}</Text>
                                <Text style={styles.locationstate}>{item.type}</Text>
                                </View>
                            </View>
                        )
                    }}
                />

        </View>
        );
}
}
const styles=StyleSheet.create(
    {
        titletext:{
            fontSize:23,
            color:'white',
            fontWeight:'bold',
            alignSelf:'center',
        },
        locationtext:{
            fontSize:18,
            color:'black'
        },
        locationstate:{
            fontSize:18,
            color:'black',
            fontWeight:'bold'
        },
        locationbg:{
            backgroundColor:'white',
            padding:10,
            borderRadius:5,
        },
        locationicon:{
            color:'black'
        }
    }
)
