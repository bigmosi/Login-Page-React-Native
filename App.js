import React, { Component } from "react"; 
import { Alert, Text, View } from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";


export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userName:"",
        password: "",
        isError: false,
        errorMsg: false
      }

  }
  validation() {
    const { userName, password } = this.state;
    if(userName == "") {
      this.setState({ isError: true, errorMsg: "Please enter user name" })
      return false;
    } else if(password == ""){
      this.setState({ isError: true, errorMsg: "Please enter your password" })
      return false;
    }else {
      return true;
    }
  }
  onSignIn = () => {
    if(this.validation()) {
      this.setState({ isError: true, errorMsg: "Successfully logged in" })
    }  
  }
  
  render(){
    
    const {isError, userName, password} = this.state;
    return (
      <View style={{flex: 1 }}>
        {
          isError == true &&
              <Snackbar
                visible={this.state.isError}
                onDismiss={() => this.setState({ isError: false })}
                action={{
                  label: 'cancel',
                  onPress: () => {
                    // Do something
                    
                  },
                }}>
                {this.state.errorMsg}
              </Snackbar>
            
        }
        <View style={{height: "40%", justifyContent: "center", marginTop: 70 }}>
           <Text style={{fontSize: 25, fontWeight: "600", alignSelf: "center"}}>Login</Text>
        </View>
        <View style={{height: "60%", width:"85%", alignSelf: "center"}}>
          <TextInput
            label="user name"
            value={userName}
            onChangeText={text => this.setState({userName:text})}
          />
           <TextInput
             style={{marginTop: 20}}
             label="password"
             value={password}
             onChangeText={text => this.setState({password:text})}
           />
           <Button style={{marginTop: 20}} contentStyle={{height: 50}} icon="camera" mode="contained" onPress={() => this.onSignIn()}>
              Press me
           </Button>
        </View>
      </View>
    );
}

}