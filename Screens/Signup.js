import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, Button } from 'react-native';
import { Container, Header, Content } from 'native-base';
import * as firebase from 'firebase';

export default class SignupScreen extends Component {

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

    signUpUser = (email, password) => {

      try{
        if(this.state.password.length < 6){
          alert("Please enter at least 6 characters")
          return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((authData) => {
            var accountRef = firebase.database().ref("AccountList/");

            accountRef.push ({
              email: email
            });

          })
          
        alert("Your account has been created successfully!");
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
          <Text style={{fontWeight: 'bold', fontSize: 40}}>Sign Up</Text>
          
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

          
          <TouchableHighlight onPress={() => this.signUpUser(this.state.email, this.state.password)}>
          <View style={{ backgroundColor: '#FFCB05', alignItems:'center', borderRadius: 30, height: 50, paddingBottom: 10}}>
          <Text style={{color:'white', fontWeight: 'bold', fontSize: 15, paddingVertical:20}}>CREATE ACCOUNT</Text>
          </View></TouchableHighlight>

          <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignContent: "center", marginTop: 60}}><Text style={{ textAlign: "center"}}>Already have an account?</Text>
          
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
          <View><Text style={{color:"#007AFF", textAlign:'center', marginTop:5}}>Log In Now!</Text></View></TouchableHighlight>

          </View>
          

        </View>
      </Content>

      </Container>
      
    );
  }
}
