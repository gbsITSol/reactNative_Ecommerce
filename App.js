// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import AppNavigator from './src/AppNavigator'

// const App = () => {
//   return (
//     <View style={{flex : 1 , backgroundColor : "grey"}}>
//    <AppNavigator/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})



import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import store from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: 'grey' }}>
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
