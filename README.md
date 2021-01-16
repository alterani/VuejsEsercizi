# VuejsEsercizi

Studio della documentazione ufficiale della libreria/framework VueJs

### v-once

questa direttiva assicura il data-binding sono una volta e poi non modifica più l'elemento.
esempio:

`<span v-once>This will never change: {{ msg }}</span>`

### v-html

permette di inserire codice html a differenza delle doppie parentesi graffe {{}} che vendono interpretate come testo.

````<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p> ```
````
