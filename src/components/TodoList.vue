<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.content }}
      <button class="delete" @click="$emit('delete-todo', todo.id)">
        삭제
      </button>
    </li>

    <!-- delete-todo 부모한테 생성후 호출해서 쓰겠다 -->
  </ul>
</template>

<script>
export default {
  props: ["todos"], // todos라는 이름으로 배열을 받아오겠다
};
</script>

<style>
.todo-list {
  list-style: none;
  padding: 12px;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  background-color: bisque;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
}

.delete {
  padding: 8px 12px;
  background-color: rgb(122, 139, 197);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
