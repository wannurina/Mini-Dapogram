import React, { Component } from 'react';
import { Image, FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, H1, H2, H3 } from 'native-base';
import { Avatar, Rating } from 'react-native-elements';
import * as firebase from 'firebase';

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null //used for removing blank space from top
    };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "#FFCB05"}}>
          <Left>
          </Left>
          <Body>
            <Title>DAPOGRAM</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
              <Icon name="settings" style={{ color: "#2E3131" }}/>
            </Button>
          </Right>
        </Header>

        <Content>

     

        </Content>

        <Footer>
        <FooterTab>
            <Button onPress={() => this.props.navigation.navigate('Home')} active>
              <Icon name="home" style={{ fontSize: 25, color: "#2E3131"}}/>
            </Button>
            
            <Button onPress={() => this.props.navigation.navigate('AddRecipe')}>
              <Icon name='ios-add-circle-outline' style={{ fontSize: 25, color: "#2E3131"}}/>
            </Button>
            
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}