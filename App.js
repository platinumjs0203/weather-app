import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import Weather from "./Weather";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  render(){
    const {isLoading} = this.state;
    return isLoading ? (<Loading />) : 
    (<Weather />)
  }
}

