import { Image, StyleSheet, Text, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const Contributors = ({ image, name }) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 50,
            borderColor: "#eaeaea",
            borderWidth: 2,
            marginRight: 5,
          }}
        />
        <View style={styles.text}>
          <Text style={[styles.text, { fontSize: 14 }]}>{name}</Text>
          <Text style={[styles.text, { fontSize: 12, opacity: 0.6 }]}>
            Weekly
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.flex}>
          <FontAwesome5 name="ethereum" size={13} color="white" />
          <Text style={[styles.text, { fontSize: 13, marginLeft: 5 }]}>
            7,580
          </Text>
        </View>
        <Text style={[styles.text, { color: "green", fontSize: 12 }]}>
          +23.005%
        </Text>
      </View>
    </View>
  );
};

export default Contributors;

const styles = StyleSheet.create({
  text: {
    fontFamily: "poppins",
    color: "white",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderWidth: 0.7,
    borderColor: "rgba(255,255,255,0.2)",
    marginVertical: 10,
    marginBottom: 0,
    borderRadius: 4,
  },
  left: {
    flexDirection: "row",
  },
  flex: {
    flexDirection: "row",
  },
});
