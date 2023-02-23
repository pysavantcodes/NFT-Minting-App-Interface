import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BottomNav = () => {
  return (
    <View style={styles.bottom}>
      <View>
        <AntDesign name="home" size={24} color="#298bff" />
        <Text>Home</Text>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottom: {
    width: "100%",

    backgroundColor: "red",
    position: "absolute",
    bottom: 0,
  },
});
