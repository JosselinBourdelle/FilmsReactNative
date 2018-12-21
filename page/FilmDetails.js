import React, {Component} from 'react';
import {Image, StyleSheet, Text, ScrollView,View} from 'react-native';



export default class FilmDetails extends Component{
    constructor(props){
        super(props)

        const { navigation } = this.props;
        this.film = navigation.getParam('item', {title: 'nothing'})
    }

    static navigationOptions = {
        title: 'Details',
        headerStyle: {
            backgroundColor: '#CBF3F0',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '500',
        },
    };

    render() {
        console.log(this.film.poster);
        let listActor = []
        if(this.film.actors){
            listActor = this.film.actors.map((actorName) => {
                return <Text style={styles.actorText}>{actorName}</Text>
            })
        }
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.textTitle}>{this.film.title}</Text>
                <View style={styles.containerPostInfo}>
                    <Image style={styles.image} source={{uri:this.film.poster}}></Image>
                    <View style={styles.containerInfo}>
                        {subtitleItem('Release Date', this.film.releasedate)}
                        {subtitleItem('Genre', this.film.genre)}
                        {subtitleItem('Directors', this.film.directors)}
                    </View>
                </View>
                <View style={styles.actorView}>
                    <Text style={styles.actorSubtitle}> Actors </Text>
                    {listActor}
                </View>
            </ScrollView>
        );
    }
}

function subtitleItem(subtitle, value){
    return (
        <View 
        style={styles.subtitleItem}>
            <Text style={styles.textSubtitle}>{subtitle}</Text>
            <Text style={styles.textcontent}>{value}</Text>
        </View>
    );
}
// bleu 2EC4B6
// clair CBF3F0

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF9F1C',
    },
    containerPostInfo: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        width: '100%',
        alignItems: 'center'
    },
    containerInfo: {
        flex: 1,
        flexDirection: 'column',
        margin: 5 ,
    },
    textTitle: {
        width: '95%',
        overflow: 'hidden',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40,
        margin: 10,
        padding: 10,
        color: 'white',
        backgroundColor: '#FFBF69',
        borderRadius: 20,
    },
    image: {
        width: 150,
        height: 225,
        borderRadius: 10
    },
    subtitleItem: {
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#CBF3F0',
        width: 200,
    },
    textSubtitle: {
        fontSize: 20,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: '#2EC4B6',
        padding: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    textcontent: {
        padding: 5,
        textAlign: 'center'
    },
    actorView: {
        flex: 1,
        alignItems: 'center',
        width: '95%'
    },
    actorSubtitle: {
        fontSize: 20,
        backgroundColor: '#2EC4B6',
        borderRadius: 20,
        overflow: 'hidden',
        width: '90%',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        margin: 5,
        padding: 5
    },
    actorText: {
        width: '80%',
        backgroundColor: '#CBF3F0',
        borderRadius: 30,
        overflow: 'hidden',
        height: 30,
        textAlign: 'center',
        margin: 5,
        padding: 5
    }
  });