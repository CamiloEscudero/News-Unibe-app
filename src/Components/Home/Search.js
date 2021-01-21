import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Dimensions, Platform, StatusBar } from 'react-native';
import { Input } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

  

export default class App extends React.Component ({navigation}) {


  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }

}