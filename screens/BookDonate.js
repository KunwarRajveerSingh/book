import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class BookDonate extends Component{
    constructor(){
       super();
       this.state = {
           requestedBookList: []
       }
       this.requestRef = null;
    }
    
    getRequestedBookList = ()=>{
        this.requestRef = db.collection("Book Request").onSnapshot((snapshot)=>{
            var requestedBookList = snapshot.docs.map(document =>document.data());
            this.setState({
                requestedBookList: requestedBookList
            });
        })
    }

    componentDidMount(){
        this.getRequestedBookList()
    }

    keyExtractor = (item, index)=>index.toString()
    renderItem = ({item, i})=>{
        return(
            <ListItem 
            key = {i}
            title = {item.Book_name}
            subTitle = {item.reason_to_request}
            titleStyle = {{color: 'black', fontWeigth: 'bold'}}
            rightElement = {
                <TouchableOpacity 
                style = {StyleSheet.button}
                onPress = {()=>{
                    this.props.navigation.navigate("RecieverDetails",{"details": item})
                }}
                >
                  <Text style = {{color: '#ffff'}}>View</Text>
                </TouchableOpacity>
            }
            buttomDivider
            />

            
        );
    }

    
    
    render(){
        return(
            <View style = {{flex:1}}>
                <MyHeader title = "Donate Books" navigation = {this.props.navigation}/>
                <View style = {{flex:1}}>
                {this.state.requestedBookList.lenght === 0
                  ?(<View style = {styles.subContainer}>
                  <Text>List of all Requested Books</Text>
                   </View>
                  )
                  :(
                      <FlatList 
                       keyExtractor = {this.keyExtractor}
                       data = {this.state.requestedBookList}
                       renderItem = {this.renderItem}
                      />
                  )
                }
            </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({ subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' }, button:{ width:100, height:30, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 } } })