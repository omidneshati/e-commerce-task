import instance from "../lib/axios/instance";
import axios, { AxiosError } from "axios";

interface PropsType {
  id?: number;
  limit?: number;
  categories?: boolean;
  category?: string;
  sort?: "desc" | "asc";
}

const getProduct = async ({
  id,
  categories,
  category,
  limit,
  sort,
}: PropsType) => {
  try {
    let url: string = "products";
    if (id) {
      url = `products/${id}`;
    } else if (categories) {
      url = `products/categories`;
    } else if (category) {
      url = `products/category/${category}`;
    }
    const response = await instance.get(url, {
      params: { limit, sort },
    });
    const data = await response.data;
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios specific error handling
      const axiosError: AxiosError = err;
      if (axiosError.response) {
        throw new Error(axiosError.response?.status.toString());
      }
    }
    return undefined;
  }
};

export default getProduct;
