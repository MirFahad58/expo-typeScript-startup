import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export interface State {
  name: string;
  enthusiasmLevel: number;
}


class App extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 24
    }
  }
  increment=()=> {
    this.setState({ currentEnthusiasm:this.state.currentEnthusiasm+1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.increment} >This is typeScript plus react-native with class {this.state.currentEnthusiasm}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;