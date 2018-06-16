/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class Greeting extends Component{
  render(){
    return(
      <Text>Hello {this.props.name}</Text>
    )
  } 
}

export class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

export class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

class Blink extends Component<Props>{
  constructor(props){
    super(props);
    this.state={isShowingText:true}
    //Toggle state after every second
    setInterval(()=>{
      this.setState(previousState=>{
        return {isShowingText:!previousState.isShowingText}
      })
    },1000)
  }
  render(){
    let display=this.state.isShowingText ? this.props.text : ''
    return (<Text>{display}</Text>)
  }
}

export class Basic extends Component{
  myFunction(){
    return "Hello from function"
  }
  constructor(){
    super()
    this.state={}
    this.state.customStyles={
      color: 'red'
    }
    setInterval(()=>{
      if (this.state.customStyles.color==='red'){
        this.setState({
          customStyles:{
            color: 'green'
          }
        })
      }else{
        this.setState({
          customStyles:{
            color: 'red'
          }
        })
      }
    },1000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome,this.state.customStyles]}>
          Welcome to React Native!
        </Text>
        <Text>
          {this.myFunction()}
        </Text>
        <Text style={styles.instructions}>
          Kr Dia Dekh
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Bananas/>
        <LotsOfGreetings/>
        <Blink text="Blinker"/>
      </View>
    );
  }
}

export class Input extends Component{
  constructor(props){
    super(props)
    this.state={text: ''}
    this.handleChangeText=this.handleChangeText.bind(this)
  }

  handleChangeText(newText){
    this.setState({
      text: newText
    })
  }

  render() {
    return (
      <View style={styles.container}>
        Here
        <TextInput style={styles.textinput} placeholder="Insert text here" onChangeText={this.handleChangeText} defaultValue={this.state.text}/>
        <Text style={styles.textdisplay}>
          {this.state.text}
          {this.state.text.split(' ').map((word)=>word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}

export class LoginForm extends Component{
  constructor(){
    super()
    this.state={username: '', password: ""}
    this.handleUsernameChange=this.handleUsernameChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.buttonPressed=this.buttonPressed.bind(this)
  }

  handleUsernameChange(username){
    this.setState({
      username: username
    })
  }
  handlePasswordChange(password){
    this.setState({
      password: password
    })
  }

  buttonPressed(){
    // TODO : Get username and password

    //Uncontrolled component
    // const username=this._username._lastNativeText
    // const password=this._password._lastNativeText
    // console.log(this.username,this.password)

    //Controlled components - React manages the components
    console.log(this.state.username,this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput style={styles.textinput} onChangeText={this.handleUsernameChange} defaultValue={this.state.username} ref={input=>this._username=input}/>
        <Text>Password</Text>
        <TextInput style={styles.textinput} onChangeText={this.handlePasswordChange} defaultValue={this.state.password} ref={input=>this._password=input}/>
        <Button title="Login" onPress={this.buttonPressed}/>
      </View>
    )
  }
}

export default class App extends Component<Props> {
  
  render() {
    return (
      // <Basic/>
      // <Input/>
      <LoginForm/>
    )
  }
}

AppRegistry.registerComponent('First', () => Bananas);
AppRegistry.registerComponent('First', () => LotsOfGreetings);
AppRegistry.registerComponent('First', () => Basic);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textinput: {
    height: 40,
    width: 200, 
    borderColor: "#000000", 
    borderWidth:0.5, 
    borderRadius: 10, 
    padding: 5,
    textAlign: 'center',
  },
  textdisplay: {
    fontSize: 20,
  }
});
