import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
} from "react-native";

{
  /*import owns*/
}
import colors from "../config/colors";

let devicewidth = Dimensions.get("window").width;
let fontSizem = 0.23;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontWelcomeSize = devicewidth * fontSizem;

const colorr = colors.lightPink;

function Update({ navigation }) {
  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const checkTextInput = () => {
    if (!id.trim() && !name.trim() && !price.trim()) {
      alert("Invalid inputs");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle2}></View>
      <View style={styles.circle1}></View>
      <View style={styles.circle2b}></View>
      <Pressable
        style={styles.circle1b}
        onPress={() => {
          if (checkTextInput()) {
            navigation.navigate("updateAPI", {
              id: id,
              name: name,
              price: price,
            });
            setName("");
            setid("");
            setPrice("");
          } else {
            setName("");
            setid("");
            setPrice("");
          }
        }}
      >
        <View style={styles.cont}>
          <Text style={styles.nxtbtntxt}>Update</Text>
        </View>
      </Pressable>

      <TextInput
        placeholder="ID of Beer"
        maxLength={4}
        keyboardType="number-pad"
        style={styles.textinput}
        value={id}
        onChangeText={(id) => setid(id)}
      />
      <View
        style={{
          width: "60%",
          borderBottomColor: colorr,
          borderBottomWidth: 1,
          marginBottom: 20,
        }}
      ></View>
      <TextInput
        placeholder="New name of Beer"
        maxLength={13}
        style={styles.textinput}
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <TextInput
        placeholder="New price of Beer"
        maxLength={4}
        keyboardType="number-pad"
        style={styles.textinput}
        value={price}
        onChangeText={(price) => setPrice(price)}
      />
      {/*Uncomment below element for Sir raimehn's API if will be used*/}
      {/* <TextInput
          placeholder="description"
          maxLength={13}
          style={styles.textinput}
          value={description}
          onChangeText={(desc) => setDescription(desc)}
        /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
  },

  container2: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    zIndex: 1000,
  },

  textinput: {
    height: 50,
    width: "80%",
    borderWidth: 3,
    borderColor: colorr,
    borderRadius: 20,
    backgroundColor: "white",
    paddingLeft: "5%",
    fontFamily: "GothamMedium",
    fontSize: fontWelcomeSize / 4.5,
    color: colors.gray,
    marginBottom: 20,
    zIndex: 99,
  },

  postBtn: {
    textAlign: "center",
    textAlignVertical: "center",
  },

  presseble: {
    borderRadius: 100,
    width: "51%",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 50,
    marginBottom: 10,
    elevation: 5,
    backgroundColor: "#fff",
  },

  circle1: {
    width: "100%",
    height: 410,
    borderRadius: 200,
    backgroundColor: colorr,
    position: "absolute",
    top: -225,
    left: "-50%",
    elevation: 20,
    zIndex: 90,
  },

  circle2: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: colorr,
    position: "absolute",
    left: "30%",
    top: -75,
    zIndex: 90,
  },

  circle1b: {
    width: "100%",
    height: 410,
    borderRadius: 200,
    backgroundColor: colorr,
    position: "absolute",
    bottom: -225,
    right: "-50%",
    elevation: 21,
  },

  circle2b: {
    width: 150,
    height: 150,
    borderRadius: 200,
    backgroundColor: colorr,
    position: "absolute",
    right: "30%",
    bottom: -75,
    zIndex: 90,
  },

  cont: {
    position: "relative",
    top: "20%",
    left: "15%",
  },

  nxtbtntxt: {
    color: "white",
    fontFamily: "GothamMedium",
    fontSize: fontWelcomeSize / 3,
  },
});
export default Update;
