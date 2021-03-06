import React from "react";

import { Button, View, TouchableOpacity, StyleSheet, Text } from "react-native";

function AppButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.btn}>
      <Text style={styles.txt}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#b81c5d",
    height: 50,
    width: 330,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },
});
