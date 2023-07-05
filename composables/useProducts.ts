import { Pagination } from "~/types/pagination";
import { Product } from "~/types/product";

export const useProducts = async () => {
  const config = useRuntimeConfig();

  interface Response {
    pending: Ref<boolean>;
    data: Ref<{
      pagination: Pagination;
      data: Product[];
    } | null>;
  }

  try {
    const baseURL = `${config.public.apiBase}/products/get/`;

    const { pending, data } = await useLazyFetch<Response>(baseURL);

    console.log(data);

    return {
      pending,
      data,
    };
  } catch (error) {
    console.error(error);
  }
};
