import React, { useEffect } from "react";
import axios from "axios";

function UpdateData({ route, navigation }) {
  useEffect(() => {
    axios
      .delete(`https://api.sampleapis.com/beers/ale/${route.params.id}`)
      .then((res) => {
        navigation.replace("getAPI", { id: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return null;
}

export default UpdateData;
