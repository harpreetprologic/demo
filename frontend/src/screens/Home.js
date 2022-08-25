import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("users")
      .then((data) => {
        if (data != null) {
          setUserList(JSON.parse(data));
        }
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userList}
        renderItem={({ item }) => (
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderBottomWidth: 1,
              paddingTop: 10,
              paddingBottom: 10,
              justifyContent: "space-evenly",
            }}
          >
            <Text>{"First Name : " + item.firstName}</Text>
            <Text>{"Last Name  : " + item.lastName}</Text>
            <Text>{"Gender     : " + item.gender}</Text>
            <Text>{"Date of Birth  : " + item.lastName}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Login;