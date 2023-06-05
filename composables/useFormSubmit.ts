export const useFormSubmit = async (body: object) => {
  const config = useRuntimeConfig();

  try {
    const baseURL = `${config.public.apiBase}/form/`;

    const { data } = await useFetch(baseURL, {
      method: "POST",
      body,
    });

    return {
      data,
    };
  } catch (error) {
    console.error(error);
  }
};
