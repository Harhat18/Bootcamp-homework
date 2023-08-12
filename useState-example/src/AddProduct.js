import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const add = () => {
    var newProducts = {
      name,
      price,
      stock,
    };

    axios
      .post(
        "https://bootcamp-homework-ddty-9j7cths1k-harunhatib18-gmailcom.vercel.app/api/products",
        newProducts
      )
      .then((res) => {
        Alert.alert("Yeni bir ürün eklendi!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>NEW PRODUCT ADD</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Price"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={stock}
          onChangeText={setStock}
          placeholder="Stock"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={add}>
          <Text>Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 150,
    margin: 8,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    margin: 20,
    backgroundColor: "#5f9ea0",
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
});
