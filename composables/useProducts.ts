export const useProducts = async (urlPath: string) => {
  const config = useRuntimeConfig();

  try {
    const baseURL = `${config.public.apiBase}/products/get/`;
    const defaultProducts = () => [];

    const { pending, data } = await useLazyFetch(baseURL, {
      default: defaultProducts,
      // method: "POST",
      // body: {
      //   path: urlPath,
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
