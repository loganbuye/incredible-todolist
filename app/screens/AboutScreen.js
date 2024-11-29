import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.text}>App Name: Incredible To-Do List</Text>
            <Text style={styles.text}>Made By Logan</Text>
            <Text style={styles.text}>Date: {currentDate}</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')} />
        </View>
    </MainLayout>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});