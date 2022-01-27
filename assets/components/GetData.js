import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackHandler, Pressable, ScrollView, Text, View } from "react-native";
import colors from "../config/colors";
import { StackActions, useFocusEffect } from "@react-navigation/native";

function GetData({ route, navigation }) {
  {
    /*Handle back button*/
  }
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.replace("API");
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const [beers, setBeers] = useState([]);
  const [beerb, setBeerb] = useState({});
  const [one, setOne] = useState(false);

  if (route.params.id === "") {
    useEffect(() => {
      axios
        .get("https://api.sampleapis.com/beers/ale")
        .then((res) => {
          setBeers(res.data);
          console.log("get completed");
        })
        .catch((err) => {
          setBeers({ id: 1, name: "NO SUCH DATA" });
        });
    }, []);
  } else {
    useEffect(() => {
      axios
        .get(`https://api.sampleapis.com/beers/ale/${route.params.id}`)
        .then((res) => {
          setOne(true);
          setBeerb(res.data);
          console.log(res.data);
        })
        .catch((res) => {
          setBeerb({ id: route.params.id, name: "NO SUCH DATA" });
        });
    }, []);
  }

  return (
    <View
      style={{
        backgroundColor: colors.priorityMedium,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 5000,
          height: 5000,
          backgroundColor: colors.pink,
          borderRadius: 1000,
          position: "absolute",
          left: "-1120%",
          top: "-40%",
          zIndex: 9,
        }}
      ></View>
      <View
        style={{
          width: 5000,
          height: 5000,
          backgroundColor: colors.lightPink,
          borderRadius: 1000,
          position: "absolute",
          left: "-25%",
          zIndex: 10,
        }}
      ></View>
      <View
        style={{
          width: 5000,
          height: 5000,
          backgroundColor: colors.lighterPink,
          borderRadius: 1000,
          position: "absolute",
          left: "-1100%",
          top: "10%",
          zIndex: 11,
        }}
      ></View>
      {one ? (
        <ScrollView style={{ zIndex: 12 }}>
          <View
            key={beerb.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
            }}
          >
            <Pressable
              style={{
                paddingTop: 25,
                paddingBottom: 25,
                width: "90%",
                marginTop: 5,
                marginBottom: 5,
              }}
              onPress={() => {
                navigation.navigate("deleteAPI", { id: beerb.id });
              }}
            >
              <Text
                style={{
                  fontFamily: "GothamMedium",
                }}
              >
                {beerb.name}
              </Text>
            </Pressable>
            <Text
              style={{
                paddingTop: 25,
                paddingBottom: 25,
                textAlign: "center",
                fontFamily: "GothamMedium",
                width: "6%",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              {beerb.id}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: "5%",
              }}
            ></View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={{ zIndex: 12 }}>
          {beers.map((beer) => {
            return (
              <View
                key={beer.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Pressable
                  style={{
                    paddingTop: 25,
                    paddingBottom: 25,
                    width: "85%",
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                  onPress={() => {
                    navigation.navigate("deleteAPI", { id: beer.id });
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "GothamMedium",
                    }}
                  >
                    {beer.name}
                  </Text>
                </Pressable>
                <Text
                  style={{
                    paddingTop: 25,
                    paddingBottom: 25,
                    textAlign: "center",
                    fontFamily: "GothamMedium",
                    width: "11%",
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                >
                  {beer.id}
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#000",
                    width: "5%",
                  }}
                ></View>
              </View>
            );
          })}
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              textAlignVertical: "center",
              fontSize: 20,
              paddingTop: 20,
              paddingBottom: 20,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            getting of data completed.
          </Text>
        </ScrollView>
      )}
    </View>
  );
}

export default GetData;
