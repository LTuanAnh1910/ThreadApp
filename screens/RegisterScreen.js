import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert("Registration failed", "An occured during registration");
        console.log("error", error);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 17, marginTop: 25, fontWeight: "bold" }}>
            Register to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Ionicons
              style={{ marginLeft: 8 }}
              name="person"
              size={24}
              color="gray"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="Enter your Name"
              placeholderTextColor={"gray"}
            />
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#d0d0d0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your Email"
              placeholderTextColor={"gray"}
            />
          </View>
          <View style={{ marginTop: 40 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#d0d0d0",
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
              }}
            >
              <AntDesign
                style={{ marginLeft: 8 }}
                name="lock"
                size={24}
                color="gray"
              />
              <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="Enter your PassWord"
                placeholderTextColor={"gray"}
              />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 45 }} />
        <Pressable
          onPress={handleRegister}
          style={{
            width: 200,
            backgroundColor: "black",
            padding: 15,
            marginTop: 40,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: 16,
            }}
          >
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10 }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});