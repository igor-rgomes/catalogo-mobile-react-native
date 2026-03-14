import api from "./api";

export async function getProductsByCategories(categories) {
  const requests = categories.map(async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data.products || [];
  });

  const responses = await Promise.all(requests);

  return responses.flat();
}

export async function getProductById(id) {
  const response = await api.get(`/products/${id}`);
  return response.data;
}