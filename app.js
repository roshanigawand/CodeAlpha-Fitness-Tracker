import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [steps, setSteps] = useState('');
  const [water, setWater] = useState('');
  const [records, setRecords] = useState([]);

  const addRecord = () => {
    if (!steps || !water) return;

    setRecords([
      ...records,
      { steps: steps, water: water },
    ]);

    setSteps('');
    setWater('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness Tracker App</Text>

      <TextInput
        placeholder="Steps Walked"
        keyboardType="numeric"
        style={styles.input}
        value={steps}
        onChangeText={setSteps}
      />

      <TextInput
        placeholder="Water Intake (liters)"
        keyboardType="numeric"
        style={styles.input}
        value={water}
        onChangeText={setWater}
      />

      <TouchableOpacity style={styles.button} onPress={addRecord}>
        <Text style={styles.buttonText}>Add Record</Text>
      </TouchableOpacity>

      {records.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text>🚶 Steps: {item.steps}</Text>
          <Text>💧 Water: {item.water} L</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#16a34a',
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f0fdf4',
  },
});
