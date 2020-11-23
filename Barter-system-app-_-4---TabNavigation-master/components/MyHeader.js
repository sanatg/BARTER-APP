import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Header} from 'react-native-elements';

const MyHeader = props=>{
    return(
       <Header
          centerComponent={
              {
                  text:'Barter System',

                  style:{
                   color:"#fff",
                    fontSize:20,
                    fontWeight:"bold",
                    width:1200,
                    textAlign:"center"
                  }
              }
          }
            backgroundColor="#ff5722"
       />
    )
}

export default MyHeader
