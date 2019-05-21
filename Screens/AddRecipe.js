import React, { Component } from 'react';
import { Image , TextInput } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, H1, H2, H3 } from 'native-base';
import { Permissions, ImagePicker } from 'expo';

export default class AddRecipeScreen extends Component {

  state = {
    image: null,
    text: '',
  };

  static navigationOptions = {
    header: null //used for removing blank space from top
    };

    _pickImage = async () => {
      const status = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      
      if (status) {
        result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [3, 3],});
      }
      console.log(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };

  render() {

    let { image } = this.state;

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
            <Button transparent>
              <Text>Post</Text>
            </Button>
          </Right>
        </Header>

        <Content>
        {image && <Image source={{ uri: image }} style={{height: 350, width: null, flex: 1}} />}
        <Button block style={{ margin: 10 }} onPress={this._pickImage}><Text>Select Photo</Text></Button>
        
        <TextInput style={{ flex: 1, padding: 10, marginHorizontal:10, fontSize: 15, backgroundColor: '#f2f2f2', height: 150 }}
        placeholder="Add caption..."
        multiline = {true}
        numberOfLines = {4}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>

        </Content>

      </Container>
    );
  }
}