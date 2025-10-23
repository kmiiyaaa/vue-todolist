<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.content }}
    </li>
    <button class="delete" @click="$emit('delete-todo', todo.id)">삭제</button>
    <!-- delete-todo 부모한테 생성후 호출해서 쓰겠다 -->
  </ul>
</template>

<script>
export default {
  props: ["todos"], // todos라는 이름으로 배열을 받아오겠다
};
</script>

<style></style>
