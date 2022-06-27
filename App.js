import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
const App = () => {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-black`}>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
