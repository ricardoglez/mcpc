import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-material-design';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.container}>
        <Text>MCPC</Text>
        </View>
        <View>
            <Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
            <Button value="NORMAL RAISED" raised={true} onPress={()=> console.log("I pressed a raised button")} />
          </View>
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
