<template>
    <div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Todo</th>
            <th scope="col">State</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(todo, indice) in todos" :key="indice">
            <td>{{ todo.id }}</td>
            <td>{{ todo.name }}</td>
            <td>{{ todo.isComplete === true ? 'Completed' : 'Incomplete'  }}<span class="span-config"><checkbox @click="completar(todo.id, todo)"
             v-model="todo.isComplete" :binary="true"></checkbox>
             </span> 
             </td>
            <ConfirmPopup></ConfirmPopup>
            <td><Button @click="deletar($event)" label="Delete" icon="pi pi-trash"></Button></td>
        </tr>
        </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios"
import Button from 'primevue/button';
import ConfirmPopup from 'primevue/confirmpopup';
import Checkbox from 'primevue/checkbox';
export default {
    components: {
        Button,
        ConfirmPopup,
        Checkbox
    },
    data() {
        return {
            todos: [],
            erros: [],
        }
    },
    mounted() {
    axios.get("https://localhost:7282/api/todoitems")
    .then(response => this.todos = response.data)
    .catch(e => this.erros = e)
    },
    methods: {
        deletar(event){
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to DELETE this Todo ?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    //implementar a callback para executar quando confirmar a ação
                    alert('Confirmado')
                },
                reject: () => {
                    alert('Recusado')
                    //implementar a callback para executar quando rejeitar a ação
                }
            });
        },
        async completar(id, todo){
            //Vou precisar do id e do nome pra poder atualizar o estado
            if (!todo.isComplete){
                await axios.put(`https://localhost:7282/api/todoitems/${id}`, {
                    id: id,
                    name: todo.name,
                    isComplete: true
                })
            }
            console.log(`https://localhost:7282/api/todoitems/${id}`)
        }
    },
}
</script>
<style>

.span-config {
    margin-inline-start: 1rem;
}
</style>