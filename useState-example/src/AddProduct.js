import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
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
    <SafeAreaView>
      <View>
        <Text style={styles.text}>NEW PRODUCT ADD</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>NAME: </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>PRİCE: </Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Price"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>STOCK: </Text>
        <TextInput
          style={styles.input}
          value={stock}
          onChangeText={setStock}
          placeholder="Stock"
        />
      </View>
      <View>
        <Button style={styles.button} title="Add" onPress={add}></Button>
      </View>
    </SafeAreaView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputText: {},
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {},
});
