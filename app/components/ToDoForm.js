import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = React.useState("");
  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
      <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
    </SafeAreaView>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
  },
});
