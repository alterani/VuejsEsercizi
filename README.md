# VuejsEsercizi

Studio della documentazione ufficiale della libreria/framework VueJs

### v-once

questa direttiva assicura il data-binding sono una volta e poi non modifica più l'elemento.
esempio:

`<span v-once>This will never change: {{ msg }}</span>`

### v-html

permette di inserire codice html a differenza delle doppie parentesi graffe {{}} che vendono interpretate come testo.

```
<p> Using mustaches: {{ rawHtml }}</p>


<p>Using v-html directive: <span v-html="rawHtml"></span></p>

```

### v-bind oppure scrivere solo :

la direttiva v-bind viene usata per modificare dinamicamente gli attributi degli elementi html.

`<div v-bind:id="dynamicId"></div> `

è uguale à

`<div :id="dynamicId"></div> `

### {{ }}

nelle doppie parentesi graffe è possibile inserire anche dei comandi javascript.

```
<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}
```

### v-if

esempio

`<p v-if="seen">Now you see me</p> `

### Perticolri usi delle direttive

`<a v-bind:[attributeName]="url"> ... </a>` parametro variabile

`<< v-on:[eventName]="doSomething"> ... </>` parametro variabile

`<form v-on:submit.prevent="onSubmit"> ... </>` event.preventDefault()

### v-on si può scrivere anche con @

`<a v-on:click="doSomething"> ... </a>`

è uguale a

`<a @click="doSomething"> ... </a> `

### Le computed

Sono opzioni del componente simili alle funzioni (methods) ma a differenza dei metodi
non vengono eseguite se il valore non cambia perchè sono salvate nella cache. Sono molto utili nei casi in cui bisogna risparmiare computazioni. es: se dobbiamo scaricare un elenco pesante per una lista, possiamo decidere di associarlo ad una compiuted così l'operazione viene eseguita solo una vole.

```
<div id="computed-basics">
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</div>
```

```
Vue.createApp({
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the vm instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
}).mount('#computed-basics')
```
