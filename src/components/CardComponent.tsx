import { Text, View, Image, Button} from 'react-native'
import React, { Component } from 'react'

export class CardComponent extends Component {
  render() {
    return (
      <View style={{ borderWidth:1, borderColor:'gray', width:'auto', height:'auto', top:100, alignSelf:'center', justifyContent: 'center', alignItems: 'center' }}>
        <Image 
            source = {require('../img/image.jpg')}
            style = {{flex:0,maxHeight:200, maxWidth:200, borderRadius:400, borderColor:'black', borderWidth:5}}
            />
        <Text style={{color:'#313131', fontSize:24,fontStyle:'normal',fontWeight:'bold', top:20}}>Rylie Yoon</Text>
        <View style ={{height:40}}/>
        <Text> My name is Rylie Yoon and i love coding.</Text>
        <Button title="Press Me" color={'lightgray'}></Button>
      </View>
    )
  }
}

export default CardComponent