import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://bootcamp-homework-ddty-9j7cths1k-harunhatib18-gmailcom.vercel.app/api/products"
      )
      .then((res) => {
        setProducts(res.data);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        Alert.alert("İşlem sırasında bir hata meydana geldi");
        seterror(err);
      });
  }, [setProducts]);

  const deleteProduct = (Id) => {
    axios
      .delete(
        `https://bootcamp-homework-ddty-9j7cths1k-harunhatib18-gmailcom.vercel.app/api/products/${Id}`
      )
      .then((res) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== Id)
        );
        Alert.alert("Product deleted successfully");
      })
      .catch((err) => {
        Alert.alert("Error deleting product");
        console.error(err);
      });
  };

  const RenderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Price</Text>
      <Text style={styles.headerText}>Stock</Text>
    </View>
  );
  renderItem = ({ item }) => (
    <Pressable onPress={() => deleteProduct(item._id)}>
      <View
        style={[
          styles.rowContainer,
          item.stock > 50 ? styles.highlightedRow : null,
        ]}
      >
        <View style={styles.flexContainer}>
          <Text style={styles.rowText}>{item.name}</Text>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.rowText}>{item.price}</Text>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.rowText}> {item.stock}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView>
      {loading == true ? (
        <ActivityIndicator />
      ) : (
        <View>
          <RenderHeader />
          <FlatList data={products} renderItem={renderItem} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f2f2f2",
    marginHorizontal: 20,
  },
  headerText: {
    fontWeight: "bold",
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 20,
  },
  flexContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
  },
  rowText: {
    flex: 1,
  },
  highlightedRow: {
    backgroundColor: "red",
  },
});
