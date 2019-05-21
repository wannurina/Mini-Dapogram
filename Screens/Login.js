import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Container, Header, Content } from 'native-base';
import * as firebase from 'firebase';

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null //used for removing blank space from top
        };

    constructor(props){
      super(props)

      this.state = ({
        email: '',
        password: ''
      })
    }

    logInUser = (email, password) => {

      try{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user){console.log(user)})

            this.props.navigation.navigate('Home');
        
        }

      catch(error){
        console.log(error.toString())
      }
    }

  render() {

    return (

      <Container>
      <Header transparent></Header>

      <Content>
        <View style={{flex: 1, padding: 50}}>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>Log In</Text>
          
          <View style={{marginTop:50}}>
          <Text>Email</Text>
          <TextInput 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(email) => this.setState({email})} 
          style={{height: 40, borderBottomColor: '#FFCB05', borderBottomWidth: 2}}/>
          </View>

          <View style={{marginTop:30, marginBottom: 50}}>
          <Text>Password</Text>
          <TextInput 
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(password) => this.setState({password})} 
          style={{height: 40, borderBottomColor: '#FFCB05', borderBottomWidth: 2}}/>
          </View>

          
          <TouchableHighlight onPress={() => this.logInUser(this.state.email, this.state.password)}>
          <View style={{ backgroundColor: '#FFCB05', alignItems:'center', borderRadius: 30, height: 50, paddingBottom: 10}}>
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, paddingVertical:20}}>LOG IN</Text>
          </View></TouchableHighlight>

          <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignContent: "center", marginTop: 60}}><Text style={{ textAlign: "center"}}>Does not have any account?</Text>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Signup')}>
          <View><Text style={{color:"#007AFF", textAlign:'center', marginTop:5}}>Sign Up Now!</Text></View></TouchableHighlight>

          </View>
          

        </View>
      </Content>

      </Container>
      
    );
  }
}
