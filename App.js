import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    // return <WebView source={{ uri: 'https://framework7.io/kitchen-sink/core/?theme=md' }} />;
    return <WebView source={{ uri: 'https://frandiox.github.io/OnsenUI-Todo-App/' }} />;
  }
}

export default App;
