import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState("");
  const { userId, setUserId } = useContext(UserType);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/profile/${userId}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchProfile();
  });
  console.log(user);

  const logout = () => {
    clearAuthToken();
  };

  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("Cleared auth token");
    navigation.replace("Login");
  };
  return (
    <View style={{ marginTop: 55, padding: 15 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user?.name}</Text>
        <View
          style={{
            paddingHorizontal: 7,
            paddingVertical: 5,
            borderRadius: 8,
            backgroundColor: "#d0d0d0",
          }}
        >
          <Text>Threads.net</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 15,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 20,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
          }}
        />
        <View>
          <Text style={{ fontSize: 15, fontWeight: 400 }}>BTech.</Text>
          <Text style={{ fontSize: 15, fontWeight: 400 }}>
            Movie Buff | Musical Nerd
          </Text>
          <Text style={{ fontSize: 15, fontWeight: 400 }}>Love Yourself</Text>
        </View>
      </View>
      <Text style={{ color: "gray", fontSize: 15, marginTop: 10 }}>
        {user?.followers?.length} followers
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 20,
        }}
      >
        <Pressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderColor: "#d0d0d0",
            borderRadius: 5,
            borderWidth: 1,
          }}
        >
          <Text>Edit profile</Text>
        </Pressable>
        <Pressable
          onPress={logout}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderColor: "#d0d0d0",
            borderRadius: 5,
            borderWidth: 1,
          }}
        >
          <Text>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
