<template>
  <div id="app">
    <h1>Todo List</h1>
    <TodoInput @add-todo="addTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" />
    <!--TodoList 로 넘겨주는 props 이름, 여기서 @지정한이름=todolist에서 가져다 쓴 이름 -->
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todos: [],
      //nextId: 1,
    };
  },
  methods: {
    addTodo(newTodoText) {
      this.todos.push({
        id: Date.now(), // 중복되지 않는값 - 현재 시간(밀리세컨초) 으로 처리
        //id:this.nextId++,  -> id값에 현재 값을 대입한 이후에 1씩 증가, id값 date 쓰지않으려면 이렇게 처리한다.
        content: newTodoText,
      });
    },
    deleteTodo(id) {
      //id -> todoList에서 넘겨준 todo.id(삭제할 할 일의 id값)
      this.todos = this.todos.filter((todo) => todo.id !== id);
      //새로운 배열을 필터링해서 생성 -> 조건에 해장하지 않는 요소들만 남김
    },
  },
};
</script>

<style>
#app {
  max-width: 400px;
  text-align: center;
  margin: 50px auto;
  border: 1px solid saddlebrown;
  border-radius: 12px;
  background-color: #eee;
}

#app h1 {
  color: rgb(107, 119, 158);
  font-size: 30px;
}
</style>
