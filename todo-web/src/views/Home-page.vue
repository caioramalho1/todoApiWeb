<template>
    <div class="row">
        <div class="col">
            <select v-model="itemSelecionado" name="SelectTeste" id="teste">
                <option v-for="item in itensPrimarios" :key="item.id" v-bind:value="item.id">{{ item.nome }}</option>
            </select>
        </div>
        <div class="col">
            <select name="SelectTeste2" id="teste2">
                <option v-for="item in itensFiltrados" :key="item.id" v-bind:value="item.id">{{ item.nome }}</option>
            </select>
        </div>
        <span>{{ itemSelecionado }}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            itens: [
                {
                    id: 1,
                    nome: 'Nome 1',
                    id_pai: null
                },
                {
                    id: 2,
                    nome: 'Nome 2',
                    id_pai: null
                },
                {
                    id: 3,
                    nome: 'Nome 3',
                    id_pai: 1
                },
                {
                    id: 4,
                    nome: 'Nome 4',
                    id_pai: 2
                },
                {
                    id: 5,
                    nome: 'Nome 5',
                    id_pai: 1
                },
                {
                    id: 6,
                    nome: 'Nome 6',
                    id_pai: 2
                }
            ],
            
        }
    },
    computed: {
        itensPrimarios(){
            return this.itens.filter( (x) => x.id_pai == null)
        },
        itensSecundarios(){
            return this.itens.filter( (x) => x.id_pai != null)
        },
        itensFiltrados(){
            return this.itens.filter( (x) => x.id_pai == this.itemSelecionado)
        },
        itemSelecionado(){
            return this.itens[1].id
        }
    }
}
</script>
<style lang="">
    
</style>