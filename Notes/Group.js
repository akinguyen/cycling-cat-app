import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export default function Group({ index, data, deleteItem }) {
  return (
    <View style={{ marginBottom: 20, borderColor: "green", borderWidth: 5 }}>
      <Text>Group Name: {data.name}</Text>
      <Text>Members: {data.members}</Text>
      <Button
        onPress={() => {
          deleteItem(index);
        }}
        title="Delete"
        color="red"
      ></Button>
    </View>
  );
}

//onDelete(0); onDelete(1)
