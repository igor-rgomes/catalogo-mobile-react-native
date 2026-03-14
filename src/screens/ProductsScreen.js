import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import { getProductsByCategories } from "../services/productService";

export default function ProductsScreen({ categories, navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const data = await getProductsByCategories(categories);

        console.log("Produtos carregados:", data.length);

        setProducts(data);
      } catch (err) {
        console.log(err);
        setError("Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [categories]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                productId: item.id,
              })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum produto encontrado</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  empty: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
});