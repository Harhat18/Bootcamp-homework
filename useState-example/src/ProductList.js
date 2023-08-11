import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/products")
      .then((res) => {
        setproducts(res.data);
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
        Alert.alert("İşlem sırasında bir hata meydana geldi");
        seterror(err);
      });
  }, [products]);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Price</Text>
      <Text style={styles.headerText}>Stock</Text>
    </View>
  );
  renderItem = ({ item }) => (
    <View
      style={[
        styles.rowContainer,
        item.stock > 50 ? styles.highlightedRow : null,
      ]}
    >
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.price}</Text>
      <Text style={styles.rowText}> {item.stock}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      {loading == true ? (
        <ActivityIndicator />
      ) : (
        <View>
          {renderHeader()}
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
  },
  headerText: {
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  rowText: {
    flex: 1,
  },
  highlightedRow: {
    backgroundColor: "red",
  },
});
