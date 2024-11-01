import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ToDoList from './components/ToDoList';

export default function App() {

  const [tasks, setTasks] = useState([
    'Do laundry', 
    'Go to the gym',
    'Walk the dog'
  ]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ToDoList tasks={tasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});