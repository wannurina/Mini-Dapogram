import React, { Component } from 'react';
import { View, Image, TextInput } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, H1, H2, H3 } from 'native-base';
import { Permissions, ImagePicker } from 'expo';
import * as firebase from 'firebase';
import uuid from 'uuid';

export default class AddRecipeScreen extends Component {

  state = {
    image: null,
    text: '',
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }

  static navigationOptions = {
    header: null //used for removing blank space from top
    };

  _pickImage = async () => {
   
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    this._handleImagePicked(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      }
    };

    _handleImagePicked = async result => {
      try {

          uploadUrl = await uploadImageAsync(result.uri);
          this.setState({ image: uploadUrl });
          alert('Upload successful')
        
      } catch (e) {
        console.log(e);
        alert('Upload failed');
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
            <Button transparent onPress={this._handleImagePicked}>
              <Text>Post</Text>
            </Button>
          </Right>
        </Header>

        <Content>
        <View style={{height:350, backgroundColor: '#f2f2f2'}}>{image && <Image source={{ uri: image }} style={{height: 350, width: null, flex: 1}} />}</View>
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

async function uploadImageAsync(uri) {
 
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(uuid.v4());
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}