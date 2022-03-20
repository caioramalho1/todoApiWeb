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
            <Toast></Toast>
            <td><Button style="background: #db5a5a;" @click="deletar($event, todo.id)" label="Delete" icon="pi pi-trash"></Button></td>
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
import Toast from "primevue/toast";
export default {
    components: {
        Button,
        ConfirmPopup,
        Checkbox,
        Toast
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
        deletar(event, id){
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to DELETE this Todo ?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});

                    axios.delete(`https://localhost:7282/api/todoitems/${id}`)
                    .then(() => {
                        let indice = this.todos.indexOf(id);
                        this.todos.splice(indice, 1);
                    });
                    //1º Parametro => A partir de qual elemento vou começar alterar o arr
                    //2º Parametro => DeleteCount => Quantos elementos vou deletar a partir do indice
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});

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
            else{
                await axios.put(`https://localhost:7282/api/todoitems/${id}`, {
                    id: id,
                    name: todo.name,
                    isComplete: false
                })
            }
            
        }
    },
}
</script>
<style>

.span-config {
    margin-inline-start: 1rem;
}
</style>