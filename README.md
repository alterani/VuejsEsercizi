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

### v-bind

la direttiva v-bind viene usata per modificare dinamicamente gli attributi degli elementi html.

`<div v-bind:id="dynamicId"></div> `

### {{ }}

nelle doppie parentesi graffe è possibile inserire anche dei comandi javascript.

```
<!-- this is a statement, not an expression: -->
{{ var a = 1 }}

<!-- flow control won't work either, use ternary expressions -->
{{ if (ok) { return message } }}
```
