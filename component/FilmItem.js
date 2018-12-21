import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default class FilmItem extends React.PureComponent{
  constructor(props){
      super(props)

      this.state = {
          titleFilm: props.titleFilm,
          posterUrl: props.posterUrl
      }
  }

  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity style={styles.filmItem} onPress={this._onPress}>
        <Image style={styles.image} source={{uri:this.props.posterUrl}}></Image>
        <Text style={styles.textTitle}>
          {this.props.titleFilm}
        </Text>
        <Image style={styles.arrow} source={require('../assets/right_arrow.png')}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  filmItem: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    width: '96%',
    margin: 5,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    backgroundColor: '#FF9F1C'
  },
  image: {
    height: 60,
    width: 40,
    margin: 10,
    borderRadius: 5
  },
  textTitle: {
    fontSize: 20,
    color: 'white',
    width: '60%'
  },
  arrow: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10
  }
});
