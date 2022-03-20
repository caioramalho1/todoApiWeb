
<template>
    <div class="container">
        <Toast></Toast>
        <form class="formulario" @submit.prevent="gravar()" >
            <span class="p-float-label">
                <InputText id="inputTodo" type="text" v-model="valor"></InputText>
                <Button type="submit" label="Submit" icon="pi pi-check" iconPos="right" />
                <label for="inputTodo">Create Todo</label>
            </span>
        </form>
    </div>
    
</template>


<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button';
import axios from 'axios';
import Toast from 'primevue/toast';

export default {
    components: {
        InputText,
        Button,
        Toast
    },
    data() {
        return {
            valor: ''
        }
    },
    methods: {
        gravar() {
            axios.post('https://localhost:7282/api/todoitems',{
                name: this.valor
            })
            .then(() => {
                this.$toast.add({severity:'success', summary: 'Success', detail:'Todo registered', life: 3000});
                this.valor =  '';
            }) 
            .catch((err) => {
                this.$toast.add({severity:'error', summary: 'Error', detail:'Error', life: 3000});
                console.log(err)
            }) 
        }
    },
    // mounted() {
    //     this.$$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000})
    // },
}
</script>
<style>
.formulario {
    padding-top: 5rem;
}
</style>