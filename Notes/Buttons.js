import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import Group from "./Group";
// useEffect
export default function App() {
  const [groups, setGroups] = useState([]); //let groups = [];
  const [textGroupName, setTextGroupName] = useState("1");
  const [memberCount, setMemberCount] = useState(0);

  const onEnterGroupName = (value) => {
    setTextGroupName(value);
  };

  const onEnterGroupMemberCount = (value) => {
    setMemberCount(value);
  };

  const pressButton = () => {
    let newGroups = [...groups]; // copy groups qua newGroups
    newGroups.push({ name: textGroupName, members: memberCount });
    setGroups(newGroups); // groups = newGroups
  };

  // deleteItem(0); deleteItem(1)
  const deleteItem = (index) => {
    let newGroups = [...groups];
    newGroups.splice(index, 1); // bỏ 1 phần tử ở vị trí index
    setGroups(newGroups);
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <TextInput
        value={textGroupName}
        onChangeText={onEnterGroupName}
        placeholder="enter ur group name"
        style={styles.input}
      />

      <TextInput
        keyboardType="numeric"
        value={memberCount}
        onChangeText={onEnterGroupMemberCount}
        placeholder="how many members in ur group"
        style={styles.input}
      />
      <Text>Results: {textGroupName}</Text>
      {groups.map((g, i) => {
        return <Group index={i} data={g} deleteItem={deleteItem}></Group>;
      })}
      <Button title="Press me" onPress={pressButton}></Button>
    </View>
  );
}

//let i = 0;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
