
import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([]);  // ref by defaults are states,

 // functions get added to actions

  const fetchTodos = async () => { 
    const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts/1/321');

    
    if (data.value) {
      todos.value = data.value;
    }else {
      console.log('error')
    }
  };

// we must return what we want to use accross the application
  return {
    todos,
    fetchTodos,
  };
});