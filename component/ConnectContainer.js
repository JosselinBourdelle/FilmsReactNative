import React, {Component} from 'react';
import {StyleSheet, NetInfo} from 'react-native';
import {ConnectedContext, isConnect} from '../Context/ConnectedContext'

export default class ConnectContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isConnect
        }
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
    }
    handleConnectionChange = (isConnected) => {
            this.setState({ isConnect: isConnected });
            console.log(`is connected: ${this.state.isConnect}`);
    }
    componentDidMount(){
        NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);
    
        NetInfo.isConnected.fetch().done(
            (isConnected) => { 
                this.setState({ isConnect: isConnected }); 
            }
        );
    }
    render() {
      return (
        <ConnectedContext.Provider style={styles.container} value={this.state}>
            {this.props.children}
        </ConnectedContext.Provider>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      marginTop: 100,
    }
  });
