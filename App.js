import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location";
import Loading from "./Loading";
import Weather from "./Weather";
import axios from 'axios';

const API_KEY = "c862c3099b0324626bd7075d12cb7d47"

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
    } catch (error) {
      Alert.alert("위치동의좀 해줘요ㅠㅠ", "제발ㅠㅠ")
    }
  }
  getWeather = async(latitude, longitude) => {
    const {data: {main : {temp}, weather, name}} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading:false,
      condition: weather[0].main,
      temp,
      name
    })
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, name, condition} = this.state;
    return isLoading ? (<Loading />) : (
      <Weather temp={temp} name={name} condition={condition}/>
    );
  }
}

