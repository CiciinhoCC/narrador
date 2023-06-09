import React, {Component} from "react";
import {Text, View} from "react-native";

export default class Historia extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <Text>Era duas vezes...</Text>
            </View>
        )
    }
}