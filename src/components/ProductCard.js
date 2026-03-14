import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text>Desconto: {product.discountPercentage}%</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
  },
  price: {
    color: "green",
  },
});