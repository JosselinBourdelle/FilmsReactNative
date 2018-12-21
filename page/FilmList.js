import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, FlatList, NetInfo} from 'react-native';
import FilmItem from '../component/FilmItem'
import { setListFilmInDataBase, getListFilmFromDatabase } from '../services/localdata.service'
import { getDataFromServer } from '../services/server.service'
import { ConnectedContext } from '../Context/ConnectedContext'

export default class FilmList extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            listFilm: null,
            selected: (new Map()),
            status: null
        }
        this.reloadData = this.reloadData.bind(this)
        this.isConnect = null
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#FF9F1C',
          },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: '500',
        },
    };
    reloadData(isConnect){
        console.log('reload data');
        if(isConnect){
            getDataFromServer((getData) => {
                this.setState({listFilm: getData});
                setListFilmInDataBase(getData)
                console.log('get DataFromserver');
            })
            .catch((e) => {console.log(e)}) 
        } 
        else {
            getListFilmFromDatabase((getData) => {
                this.setState({listFilm: getData});
                console.log('get DataFrombase');
            })
            .catch((e) => {console.log(e)}) 
        }
    }

    _keyExtractor = (item) => item.id;
    
    _onPressItem = (id) => {
        console.log(id);
        this.setState((state) => {
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); 
            return {selected};
        });
        this.props.navigation.navigate('Details', {item: id})
    };
    
    _renderItem = ({item}) => (
        <FilmItem
            id={item}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item)}
            titleFilm={item.title}
            posterUrl={item.poster}
        />
    );
    
    render() {
        console.log('RENDER LIST ', this.state.listFilm)
        return (
            <ConnectedContext.Consumer>
                {
                    ({isConnect}) => {
                        console.log('render in consumer');
                        if(isConnect !== this.isConnect){
                            this.isConnect = isConnect
                            this.reloadData(isConnect)
                        }
                        if(this.state.listFilm) {
                            return (
                                <FlatList
                                    style={{backgroundColor: '#2EC4B6'}}
                                    data={this.state.listFilm}
                                    renderItem={this._renderItem}
                                />
                            )
                        }
                        return <Text>{'Liste non récupérée'}</Text>;
                    }
                }
            </ConnectedContext.Consumer>
        );
    }
}