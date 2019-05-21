import React, { Component } from "react";
import { Image, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Asset, AppLoading, SplashScreen } from 'expo';
import * as firebase from 'firebase';

//Intialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCR5Fss2fuXErI9U904SikZcht6PrYokks",
  authDomain: "mini-dapogram.firebaseapp.com",
  databaseURL: "https://mini-dapogram.firebaseio.com",
  projectId: "mini-dapogram",
  storageBucket: "mini-dapogram.appspot.com"
};

firebase.initializeApp(firebaseConfig);

import SignupScreen from "./Screens/Signup";
import LoginScreen from "./Screens/Login";
import HomeScreen from "./Screens/Home";
import AddRecipeScreen from "./Screens/AddRecipe";
import SettingsScreen from "./Screens/Settings";

const RootStack = createStackNavigator({

    Signup: SignupScreen,
    Login: LoginScreen,
    Home: HomeScreen,
    AddRecipe: AddRecipeScreen,
    Settings: SettingsScreen
  },{
    initialRouteName: 'Login',
  }
); 

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  
  state = {
    isSplashReady: false,
    isAppReady: false,
  };

  render() {

    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: "#ffcb05"}}>
          <Image source={require('./assets/logodg.png')} onLoad={this._cacheResourcesAsync}/>
        </View>
      );
    }

    return (
       <AppContainer />
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const images = require('./assets/logodg.png');
    return Asset.fromModule(images).downloadAsync()
  }

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    this.setState({ isAppReady: true });
  }
}