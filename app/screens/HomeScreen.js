import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import ToDoList from './ToDoList.js';
import ToDoForm from './ToDoForm.js';
import MainLayout from '../layouts/MainLayout.js';

const HomeScreen = ({ navigation }) => {
    const [tasks, setTasks] = useState([
        "Do laundry",
        "Go to gym",
        "Walk dog"
    ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

  return (
    <MainLayout>
        <View style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <Button
                title="Go to About Page"
                onPress={() => navigation.navigate('About')} />
        </View>
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});