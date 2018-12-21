import React from 'react';
import FilmList from './page/FilmList'
import FilmDetails from './page/FilmDetails'
import { createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createStackNavigator({
    Home: {
        screen: FilmList
    },
    Details: {
        screen: FilmDetails
    }
  });
  
  export default createAppContainer(AppNavigator);