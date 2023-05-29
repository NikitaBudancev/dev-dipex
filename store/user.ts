import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const MyBool = ref<boolean>();

  const isAuthorized = ref(true);

  return { isAuthorized };
});
