import React, { Component } from 'react';
import { Image } from 'react-native';
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
        
          <Card transparent>
            <CardItem>
              <Left>
              <Avatar size="small" rounded title="FA" activeOpacity={0.7}/>
                <Body>
                  <Text>fatihahadnan_</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={{uri: 'https://d3cizcpymoenau.cloudfront.net/images/20213/SFS_thai_chicken_curry-22_202.jpg'}} style={{height: 400, width: null, flex: 1}}/>              
            </CardItem>

            <CardItem>
              <H2>Chicken Curry</H2>
            </CardItem>
            <CardItem>
              <Left>
                <Rating imageSize={25}></Rating>
              </Left>
              <Right>
              <Button transparent>
                  <Icon name="bookmark" style={{ fontSize: 30, color: "#2E3131" }}/>
                </Button>
              </Right>
            </CardItem>
            <CardItem cardBody>
            <Body>
              <Button block light>
              <Text>View Recipe</Text>
              </Button>
            </Body>
            </CardItem>
          </Card>

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