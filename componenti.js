new Vue({
  el: "#v-for-object",
  data: {
    object: {
      title: "How to do lists in Vue",
      author: "Jane Doe",
      publishedAt: "2016-04-10",
    },
  },
});

new Vue({
  el: "#divVmodel",
  data: {
    message: "Messaggio",
    message2: "Messaggio numero 2 - multiline",
    place: "en scrivi qualcosa",
  },
});

Vue.component("todo-item", {
  template:
    "\
    <li>\
      {{ title }}\
      <button v-on:click=\"$emit('remove')\">Remove</button>\
    </li>\
  ",
  props: ["title"],
});

new Vue({
  el: "#todo-list-example",
  data: {
    newTodoText: "",
    todos: [
      {
        id: 1,
        title: "Do the dishes",
      },
      {
        id: 2,
        title: "Take out the trash",
      },
      {
        id: 3,
        title: "Mow the lawn",
      },
    ],
    nextTodoId: 4,
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
});
