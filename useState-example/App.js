import { SafeAreaView, StyleSheet } from "react-native";
import AddProduct from "./src/AddProduct";
import ProductList from "./src/ProductList";

export default function App() {
  return (
    <SafeAreaView>
      <AddProduct />
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});
