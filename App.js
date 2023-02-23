import {
  StyleSheet,
  View,
  StatusBar as Bar,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  Platform,
  Button,
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import Card from "./components/Card";
import BottomNav from "./components/BottomNav";
import { StatusBar } from "expo-status-bar";
import Contributors from "./components/Contributors";
import { useState, useRef } from "react";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

const { width, height } = Dimensions.get("screen");
export default function App() {
  const [loaded] = useFonts({
    poppins: require("./assets/fonts/Poppins.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(!isVisible);
  };
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "#131313",
        padding: 16,
        height: 500,
      }}
    >
      <View
        style={{
          width: 100,
          height: 5,
          borderRadius: 5,
          backgroundColor: "#eaeaea",
          alignSelf: "center",
        }}
      ></View>
      <View
        style={{
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://www.ie.edu/insights/wp-content/uploads/2022/01/San-Jose-Feature.jpg",
          }}
          style={styles.img}
        />
        <View style={{ width: "60%", paddingHorizontal: 15 }}>
          <Text style={[styles.text, { fontSize: 20 }]}>Unleashed</Text>
          <Text style={[styles.text, { fontSize: 12, opacity: 0.8 }]}>
            By Pysavant
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 13,
                opacity: 0.7,
                paddingVertical: 10,
                paddingBottom: 5,
              },
            ]}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
            veritatis tempora. Ea iure laudantium alias doloribus, quos
            exercitationem? Cumque, sunt error hic beatae
          </Text>
          <Text style={[styles.text, { fontSize: 14, color: "green" }]}>
            Price: 4ETH
          </Text>
          <View>
            <TouchableOpacity style={styles.btn}>
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
              <Text
                style={[
                  styles.text,
                  { color: "white", textAlign: "center", fontSize: 13 },
                ]}
              >
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text
        style={[styles.text, { color: "white", fontSize: 20, marginTop: 10 }]}
      >
        More Description
      </Text>
      <Text
        style={[
          styles.text,
          { color: "white", fontSize: 12, opacity: 0.7, marginTop: 10 },
        ]}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        consequuntur quisquam vitae, labore facere quas enim molestias autem id
        corrupti praesentium, dolorem impedit distinctio ullam cupiditate!
        Architecto repudiandae, ea soluta animi cumque, error accusamus magnam
        odit, officia harum reprehenderit similique. Lorem ipsum dolor
      </Text>
    </View>
  );

  const sheetRef = useRef(null);
  if (!loaded) {
    return null;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="#f8f8f8" />
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.left}>
            <View style={styles.eth}>
              <FontAwesome5
                style={styles.ethIc}
                name="ethereum"
                size={13}
                color="white"
              />
            </View>
            <Text style={styles.text}>10.85 ETH</Text>
          </View>
          <TouchableOpacity style={styles.right}>
            <Image
              source={{
                uri: "https://searchfm923.com/wp-content/uploads/2019/03/portrait-square-05.jpg",
              }}
              style={{
                width: 35,
                height: 35,
                borderRadius: 50,
                borderColor: "#eaeaea",
                borderWidth: 2,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.second}>
          <Text style={[styles.text, { fontSize: 22 }]}>
            Browse The Best Collections{"\n"}Of Art & NFTs
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categories}>
              <Text style={[styles.text, styles.textSelected]}>Trending</Text>
              <Text style={[styles.text, styles.textBorder]}>Art</Text>
              <Text style={[styles.text, styles.textBorder]}>3D Videos</Text>
              <Text style={[styles.text, styles.textBorder]}>Gaming</Text>
              <Text style={[styles.text, styles.textBorder]}>Nature</Text>
              <Text style={[styles.text, styles.textBorder]}>Retro</Text>
              <Text style={[styles.text, styles.textBorder]}>Animated</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.view}>
          <View style={styles.viewHead}>
            <Text style={[styles.text, { fontSize: 15 }]}>Featured NFTs</Text>
            <TouchableOpacity>
              <Text style={[styles.text, { fontSize: 12, opacity: 0.7 }]}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.cardScroll}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <Card
              image="https://www.ie.edu/insights/wp-content/uploads/2022/01/San-Jose-Feature.jpg"
              showDetails={() => sheetRef.current.snapTo(0)}
            />
            <Card image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg" />
            <Card image="https://i.computer-bild.de/imgs/1/4/0/2/7/3/1/5/digitale-Kunstwerke-bd6d7d7201a80cec.jpg?impolicy=full_content" />
          </ScrollView>
        </View>
        <View style={styles.contributors}>
          <Text style={[styles.text, { fontSize: 15 }]}>Top Contributors</Text>
          <Contributors
            name="Pysavant"
            image="https://searchfm923.com/wp-content/uploads/2019/03/portrait-square-05.jpg"
          />
          <Contributors
            name="Sikes Joe"
            image="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
          />
          <Contributors
            name="Bored Ape"
            image="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
          />
          <Contributors
            name="Neular"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
          />
        </View>
      </View>

      {Platform.OS === "ios" && (
        <BottomSheet
          ref={sheetRef}
          snapPoints={[500, 0, 0]}
          borderRadius={20}
          renderContent={renderContent}
          enabledBottomClamp={true}
          enabledManualSnapping
        />
      )}
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop:
      Platform.OS === "ios" ? Bar.currentHeight + 40 : Bar.currentHeight + 5,
  },
  head: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  ethIc: {
    backgroundColor: "#298bff",
    padding: 8,
    borderRadius: 50,
    width: 30,
    height: 30,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  text: {
    fontFamily: "poppins",
    color: "white",
  },
  second: {
    paddingHorizontal: 20,
    paddingRight: 0,
  },
  categories: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  textSelected: {
    color: "white",
    backgroundColor: "#298bff",
    fontSize: 13,
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 2,
    marginRight: 7,

    textAlign: "center",
  },
  textBorder: {
    borderWidth: 0.8,
    color: "white",
    borderColor: "white",
    fontSize: 13,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 2,
    marginRight: 7,
    opacity: 0.6,

    textAlign: "center",
  },
  viewHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 20,
  },
  cardScroll: {
    paddingLeft: 20,
  },
  contributors: {
    padding: 20,
    paddingTop: 26,
  },
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  img: {
    width: "40%",
    height: width * 0.6 * 1.0,
    resizeMode: "cover",
    borderRadius: 8,
  },
  btn: {
    padding: 10,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#298bff",
    borderRadius: 4,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  btnBorder: {
    textAlign: "center",
    padding: 10,
    borderWidth: 1,
    width: "100%",
    borderRadius: 4,
    opacity: 0.4,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
});
