import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const isAuthorized = ref(true);
  
  return { isAuthorized };
});
