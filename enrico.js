//Iniziamo con i componenti

const appMulticomponent = {
  data() {
    return {
      datoNome: "Enrico",
      groceryList: [
        { id: 0, testo: "Vegetables" },
        { id: 1, testo: "Cheese" },
        { id: 2, testo: "Whatever else humans are supposed to eat" },
      ],
    };
  },
};
// Create Vue application
const app = Vue.createApp(appMulticomponent);

// *** NOTA *** Definisco e aggancio componente todo-item
//*** Importante: il componente va agganciato prima del mount
// Nota ancora che attraverso le props è possibile passare un
//peramentro oggetto al componente

app.component("todo-item", {
  props: ["enricotodo"],
  template: `<li>{{ enricotodo.testo }}</li>`,
});

// Aggancio l'app al div
app.mount("#divenrico");

const ListRendering = {
  data() {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};

Vue.createApp(ListRendering).mount("#list-rendering");

const ConditionalRendering = {
  data() {
    return {
      seen: true,
    };
  },
  methods: {
    switcDiv() {
      this.seen = !this.seen;
    },
  },
};

Vue.createApp(ConditionalRendering).mount("#conditional-rendering");

const HelloVueApp = {
  data() {
    return {
      message: "Hello Vue!!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};

Vue.createApp(HelloVueApp).mount("#hello-vue");

const Counter = {
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};

Vue.createApp(Counter).mount("#counter");

const AttributeBinding = {
  data() {
    return {
      message:
        "Hai caricato questa pagina alle ore " + new Date().toLocaleString(),
    };
  },
};

Vue.createApp(AttributeBinding).mount("#bind-attribute");

const EventHandling = {
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};

Vue.createApp(EventHandling).mount("#event-handling");

const TwoWayBinding = {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};

Vue.createApp(TwoWayBinding).mount("#two-way-binding");
