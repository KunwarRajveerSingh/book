import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, SnapshotViewIOS, Alert } from 'react-native';
import {Card, Header, Icon} from 'react-native-elements';
import darkColors from 'react-native-elements/dist/config/colorsDark';

export default class RecieverDetails extends Component {
    constructor(){
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            RecieverId: this.props.navigation.getParam('details')["user_id"],
            RequestId: this.props.navigation.getParam('details')["request_id"],
            BookName: this.props.navigation.getParam('details')["book_name"],
            reasonForRequesting: this.props.navigation.getParam('details')["reason_to_Request"],
            recieverName: '',
            recieverContact: '',
            recieverAddress: '',
            recieverRequestDocId: '', 
        }
    }
    
    getRecieverDetails(){
        db.collection('users').where('email','==',this.state.RecieverId).get()
        .then(Snapshot=>{
            Snapshot.array.forEach(doc => {
                this.setState({
                  recieverName: doc.data().name,
                  recieverContact: doc.data().Contact,
                  recieverAddress: doc.data().Address
                })
            });
        });

        db.collection('requested_books').where('request_Id','==',this.state.RequestId).get()
        .then(Snapshot=>{
            Snapshot.array.forEach(doc => {
                this.setState({
                   recieverRequestDocId: doc.Id
                })
            })
        })
    }

    updateBookStatus=()=>{ 
        db.collection('all_donations').add({ 
            book_name : this.state.bookName, 
            request_id : this.state.requestId, 
            requested_by : this.state.recieverName, 
            donor_id : this.state.userId, 
            request_status : "Donor Interested" 
        }) 
        }

    componentDidMount(){
        this.getRecieverDetails
    }

    render(){
        return(
            <View>
                <Text>RecieverDetails</Text>
            </View>
        );
    }
}