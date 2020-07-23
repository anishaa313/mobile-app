import React from 'react';
import {StyleSheet,View,Text,FlatList,Image,TouchableOpacity,Modal,TouchableWithoutFeedback} from 'react-native';
import {globalStyles} from '../styles/global';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const numColumns=2;
export default class Gallery extends React.Component
{  
    constructor(props)
    {
        super(props);
        this.state={
            gallery:[],
            modalVisible:true
        }
    }
    
    retrieveimg = async()=>{
        await firebase.database().ref('gallery').once('value', (snapshot)=> {
            var gallery = [];
            snapshot.forEach(function(snap) {
                var item= snap.val();
                item.key = snap.key;
                gallery.push(item);
            }
            )
            //console.log(gallery);
            this.setState({ gallery },()=>console.log("state updated")) 
        });
    }
    componentDidMount=()=>
    {
        this.retrieveimg();
    }
    
    render()
    {
        return(
            <View style={globalStyles.container}>
                     
                         <FlatList
                         keyExtractor={(item)=>item.id}
                         numColumns={numColumns}
                         data={this.state.gallery}
                         renderItem={({ item }) => {
                         return(
                            <View style={styles.bg}>
                            <View style={styles.images}>
                                <TouchableOpacity>
                            <Image 
                                style={{width:175,height:130}}
                                source={{uri:item.img}}
                            />
                            </TouchableOpacity>
                    </View>
                   </View>
                    )
                    }}
                     />
            
                    </View>
                    );
}
setModalVisible(visible) {
    this.setState({
        modalVisible: visible,
    })
}
}
const styles=StyleSheet.create(
    {
        images: {
            flex:1,
            padding:2,
            margin:2
          },
    }
)
