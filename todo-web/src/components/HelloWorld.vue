<template>
<div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Tarefa</th>
      <th scope="col">Completa</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(todo, indice) in todos" :key="indice">
      <td>{{ todo.id }}</td>
      <td>{{ todo.name }}</td>
      <td>{{ todo.isComplete }}</td>
    </tr>
  </tbody>
</table>
</div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      todos: [],
      erros: []
    }
  },
  mounted(){
    axios.get("http://localhost:8080/api/todoitems/")
    .then(response => this.todos = response.data)
    .catch(e => this.erros = e)

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
