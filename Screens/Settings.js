import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, H1, H2, H3 } from 'native-base';
import * as firebase from 'firebase';

export default class SettingsScreen extends Component {


  static navigationOptions = {
    header: null //used for removing blank space from top
    };

    deleteData = () => {
        var user = firebase.auth().currentUser;

        try {
        // User deleted.
        user.delete().then(function() {})
            alert("Your account has been deleted.");
            this.props.navigation.navigate('Signup');
        }
        catch(error){
            console.log(error.toString())
        }
    }

  render() {

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="arrow-back" style={{ color: "#2E3131" }}/>
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content>
        <Button block danger style={{ margin: 10 }} onPress={this.deleteData}><Text>Delete Account</Text></Button>
        </Content>

      </Container>
    );
  }
}