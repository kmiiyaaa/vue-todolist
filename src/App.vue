<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoInput />
    <TodoList: todos ="todos" @delete-todo="deleteTodo"/>
    <!--TodoList 로 넘겨주는 props 이름, 여기서 @지정한이름=todolist에서 가져다 쓴 이름 -->
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
