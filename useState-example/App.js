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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
