import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";
import Loading from "../components/Loading";
import { getProductById } from "../services/productService";

export default function ProductDetailsScreen({ route }) {
  const { productId } = route.params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        console.log("ID recebido:", productId);

        const data = await getProductById(productId);

        console.log("Produto carregado:", data);

        setProduct(data);
      } catch (error) {
        console.log("Erro ao carregar produto:", error);
      }
    }

    loadProduct();
  }, [productId]);

  if (!product) {
    return <Loading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.price}>Preço: ${product.price}</Text>

      <Text style={styles.discount}>
        Desconto: {product.discountPercentage}%
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
  },
  discount: {
    fontSize: 16,
  },
});