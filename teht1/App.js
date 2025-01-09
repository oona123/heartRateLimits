import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
   const [lower, setLower] = useState('')
  const [upper, setUpper] = useState('')
  const [age, setAge] = useState('')
  
  const calculate = () => {
    const lowerResult = (220-age) * 0.65
    setLower(lowerResult)
    const upperResult = (220-age) * 0.85
    setUpper(upperResult)
  }
  
    return (
      <View style={styles.container}>
        <Text style ={styles.field}>Age</Text>
         <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
        />
        <Text style={styles.field}>Limits</Text>
        <Text style={styles.field}>{lower}-{upper}</Text>
        <Button title='Calculate' onPress={calculate}></Button>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    backgroundColor: '#FFFFFF'
  },
  field: {
    marginBottom: 10
  }
});