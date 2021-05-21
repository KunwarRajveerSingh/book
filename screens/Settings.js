import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, SnapshotViewIOS, Alert } from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';

export default class Settings extends Component{
    constructor(){
        super();
          this.state = {
            emailId: '',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            docId:'',
        }
    }

    getUserDetails(){
        var user = firebase.auth().correntUser
        var email = user.email
        db.collection('users').where('email','==',email).get()
        .then(Snapshot=>{
            Snapshop.forEach(doc => {
            var data = doc.data()
            this.setState({
                emailId: data.email,
                firstName: data.name,
                lastName: data.last_name,
                address: data.Address,
                contact: data.Contact,
                docId: doc.id
            })
        })
    });
}

componentDidMount(){
    this.getUserDetails();
}

updateUserDetails = ()=>{
    db.collection('users').doc(this.state.docId).update({
        "name": this.state.firstName,
        "last_name": this.state.lastName,
        "Address": this.state.address,
        "Contact": this.state.contact
    })
    Alert.alert("Profile updated Successfully");
}

    render(){
        return(
            <View style = {styles.container}>
                <MyHeader 
                title = "Settings" navigation = {this.props.navigation}/>
                <View style = {styles.formContainer}>
                    <TextInput
                    style = {styles.formTextInput}
                     placeholder = {"First Name"}
                     maxLength = {8}
                     onChangeText = {(text)=>{
                    this.setState({
                        firstName: text
                    })
                 }}
                 value = {this.name.firstName}
                />

                 <TextInput
                 style = {styles.formTextInput}
                     placeholder = {"Last Name"}
                     maxLength = {8}
                     onChangeText = {(text)=>{
                    this.setState({
                        LastName: text
                    })
                 }}
                 value = {this.name.LastName}
                />

                <TextInput 
                style = {styles.formTextInput}
                placeholder = {"Contact"}
                maxLength = {10}
                keyboardType = {'numeric'}
                onChangeText = {(text)=>{
                    this.setState({
                        Contact: text
                    })
                }}
                value = {this.state.Contact}
              />

                <TextInput
                style = {styles.formTextInput} 
                placeholder = {"Address"}
                multiline = { true }
                onChangeText = {(text)=>{
                    this.setState({
                        Address: text
                    })
                }}
                value = {this.state.address}
              />

              <TouchableOpacity
              style = {styles.button}
              onPress = {()=>{
                  this.updateUserDetails()
              }}>
                  <Text>Save</Text>
              </TouchableOpacity>

                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    container : { 
    flex:1, 
    alignItems: 'center', 
    justifyContent: 'center' 
    }, 
    formContainer:{ 
        flex:1, 
        width:'100%', 
        alignItems: 'center' 
    }, 
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    }, 
    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
    shadowOffset: { 
        width: 0, 
        height: 8, 
    }, 
    shadowOpacity: 0.44, 
    shadowRadius: 10.32, 
    elevation: 16, marginTop:20 }, 
    buttonText:{ 
        fontSize:25, 
        fontWeight:"bold", 
        color:"#fff" 
    },
})