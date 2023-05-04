export const useProducts = async () => {
  try {
    const baseURL = "https://api.dipex.lv/api/rest/v1/products/get/";
    const defaultProducts = () => [];

    const { pending, data } = await useLazyFetch(baseURL, {
      default: defaultProducts,
    });

    return {
      pending,
      data,
    };
  } catch (error) {
    console.error(error);
  }
};
