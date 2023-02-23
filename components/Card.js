import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const Card = ({ image, showDetails }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.img}
      />
      <View style={styles.info}>
        <View>
          <Text style={[styles.text, { fontSize: 13, opacity: 0.7 }]}>
            By Pysavant
          </Text>
          <Text style={[styles.text, { fontSize: 13 }]}>Unleashed</Text>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              { fontSize: 13, opacity: 0.7, textAlign: "right" },
            ]}
          >
            Current Price
          </Text>
          <Text style={[styles.text, { fontSize: 13, textAlign: "right" }]}>
            4 ETH
          </Text>
        </View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.btn} onPress={showDetails}>
          <Text
            style={[
              styles.text,
              { color: "white", textAlign: "center", fontSize: 13 },
            ]}
          >
            Place Bid
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBorder}>
          <EvilIcons
            name="heart"
            style={{ textAlign: "center" }}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: width * 0.6 * 1.0,
    resizeMode: "cover",
    borderRadius: 8,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  text: {
    fontFamily: "poppins",
    color: "white",
  },
  card: {
    padding: 14,
    backgroundColor: "#121214",
    borderRadius: 12,
    width: width * 0.57,
    marginRight: 14,
  },
  action: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  btn: {
    padding: 7,
    width: "75%",
    textAlign: "center",
    backgroundColor: "#298bff",
    borderRadius: 4,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  btnBorder: {
    textAlign: "center",
    padding: 7,
    borderWidth: 1,
    width: "22%",
    borderRadius: 4,
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
});
