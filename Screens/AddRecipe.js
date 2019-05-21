import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, H1, H2, H3 } from 'native-base';
import { Avatar, Rating } from 'react-native-elements';
import * as firebase from 'firebase';

export default class AddRecipeScreen extends Component {

  static navigationOptions = {
    header: null //used for removing blank space from top
    };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="close" style={{ color: "#2E3131" }}/>
            </Button>
          </Left>
          <Body>
            <Title>Add Recipe</Title>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content>
        
        <Button block style={{ margin: 10 }}><Text>Select Photo</Text></Button>
        <Button block style={{ margin: 10, marginTop: 5 }}><Text>Open Camera</Text></Button>

        </Content>

      </Container>
    );
  }
}