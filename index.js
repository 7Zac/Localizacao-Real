import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Platform } from "react-native";

export default class Search extends Component {
    render(){
        return <GooglePlacesAutocomplete
        placeholder="Qual ponto turístico?"
        placeholderTextColor="#2193b0"
        OnPress={() => {}}
        query={{
            key: 'https://maps.googleapis.com/maps/api/js?callback=__googleMapsCallback&key=foo&libraries=marker,places&language=language&region=region&v=weekly',
            language: 'pt'
        }}
        textInputProps={{
            autoCapitalize: "none",
            autoCorrect: false
        }}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
            container: {
                position: 'absolute',
                top: Platform.select({ ios:35, android: 40 }),
                width: '100%'
            },
            textInputContainer:{
                flex: 1,
                backgroundColor: "transparent",
                height: 54,
                marginHorizontal: 20,
                borderTopWidth: 0,
                borderBottomWidth: 0
            },
            textInput:{
                height: 54,
                margin: 0,
                borderRadius: 10,
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 15,
                paddingRight: 15,
                marginTop: 0,
                marginLeft: 0,
                elevation: 5,
                shadowColor: "#355C7D",
                shadowOpacity: 0.5,
                shadowOffset: { x: 0, y: 0 },
                shadowRadius: 15,
                borderWidth: 2,
                borderColor: "#6dd5ed",
                fontSize: 18,
            },
            listView:{},
            description:{},
            row:{},

        }}
        />;
    }
}