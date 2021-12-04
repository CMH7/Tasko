import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Pressable,
  Modal,
  Text,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from "react-native";

{
  /*Own import*/
}
import colors from "../config/colors";
import Task from "./Task";

let devicewidth = Dimensions.get("window").width;
let fontSizem = 0.23;
{
  /*increasing "fontSizem" means smaller fontsize*/
}
let fontWelcomeSize = devicewidth * fontSizem;

function Taskolist({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [tasko, setTasko] = useState();
  const [taskos, setTaskos] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskos([...taskos, tasko]);
    setTasko(null);
  };

  const completeTasko = (index) => {
    let itemsCopy = [...taskos];
    itemsCopy.splice(index, 1);
    setTaskos(itemsCopy);
  };

  return (
    <View style={styles.container}>
      {/*back circle design*/}
      <View style={styles.bgCircle}></View>

      {/* Sets the status bar properties and styles for this Screen*/}
      <StatusBar
        barStyle={"default"}
        backgroundColor={colors.purple}
        translucent={false}
      />

      {/* Header of the application */}
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../img/TaskoLogo.png")} />
        <Text
          style={[
            styles.headertxt,
            { fontSize: devicewidth / (route.params.namelength + 7) },
          ]}
        >
          {route.params.callname} Taskos
        </Text>
        <View style={styles.profileIcon}></View>
      </View>

      {/* tasko lists */}
      <ScrollView>
        <View style={styles.taskolistCont}>
          {
            /* Map items from the taskItems and show them as tasks */
            taskos.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTasko(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })
          }
        </View>
      </ScrollView>

      {/*
        Section of the Popup add tasko
        use of onDismiss for submitting info.
      */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View>
            <Text style={styles.TaskoLabel}>Tasko name</Text>
            <TextInput
              placeholder={"Tasko name here!"}
              value={tasko}
              onChangeText={(text) => setTasko(text)}
              style={styles.TaskoInput}
              maxLength={13}
            />
          </View>
          <Pressable
            style={styles.addBtn}
            onPress={() => {
              handleAddTask();
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.addBtnTxt}>Add</Text>
          </Pressable>
        </View>
      </Modal>

      <Pressable style={styles.plusIcon} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    padding: "2%",
  },

  bgCircle: {
    width: 5000,
    height: 5000,
    backgroundColor: colors.purple,
    borderRadius: 1000,
    position: "absolute",
    left: "-25%",
  },

  header: {
    width: "100%",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5%",
  },

  logo: {
    width: "15%",
    height: "80%",
    position: "relative",
  },

  profileIcon: {
    width: "18%",
    height: "90%",
    backgroundColor: colors.gray,
    borderRadius: 200,
  },

  headertxt: {
    fontFamily: "GothamBold",
  },

  plusIcon: {
    width: "14.5%",
    height: 55,
    backgroundColor: colors.purple,
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
  },

  textStyle: {
    color: "#fff",
    fontSize: fontWelcomeSize / 2,
    fontFamily: "GothamBook",
    textAlign: "center",
  },

  modalView: {
    backgroundColor: "white",
    position: "absolute",
    left: "15%",
    width: "70%",
    height: 170,
    borderRadius: 10,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    bottom: "35%",
  },

  TaskoLabel: {
    fontFamily: "GothamBold",
    fontSize: 30,
    color: colors.gray,
    marginBottom: 10,
  },

  TaskoInput: {
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: colors.purple,
  },

  addBtn: {
    position: "relative",
    top: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  addBtnTxt: {
    borderRadius: 30,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: "#fff",
    fontFamily: "GothamMedium",
    backgroundColor: colors.purple,
  },

  taskolistCont: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});

export default Taskolist;
