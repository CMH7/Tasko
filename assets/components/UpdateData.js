import React, { useEffect } from "react";
import axios from "axios";

function UpdateData({ route, navigation }) {
  useEffect(() => {
    axios
      .put(`https://api.sampleapis.com/beers/ale/${route.params.id}`, {
        price: `$${route.params.price}`,
        name: route.params.name,
        rating: {
          average: Math.floor(Math.random() * 10),
          reviews: Math.round(Math.random() * 1000),
        },
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png",
      })
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
