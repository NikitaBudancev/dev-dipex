export const useProducts = async () => {
  const config = useRuntimeConfig();

  try {
    const baseURL = `${config.public.apiBase}/products/get/`;
    const defaultProducts = () => [];

    const { pending, data } = await useLazyFetch(baseURL, {
      default: defaultProducts,
      // method: "POST",
      // body: {
      //   category_id: 100380,
      //   language: "ru",
      //   site: "s1",
      // },
    });

    return {
      pending,
      data,
    };
  } catch (error) {
    console.error(error);
  }
};
