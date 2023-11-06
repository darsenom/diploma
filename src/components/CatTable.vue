<template>
    <div class="catTable">
        <DataTable :value="cat">
            <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
                <template #body="{ data }">
                    <template v-if="column.field === 'criticScore'">
                        <Dropdown :modelValue="data.criticalNumber" :options="numberMarks" optionLabel="mark" optionValue="mark"
                            class="dropdown" @change="setCriticScore(data.criticalNumber, $event)" />
                    </template>
                    <template v-else>{{ data[column.field] }} </template>
                </template>
            </Column>
        </DataTable>
        <div class="cat"><img src="https://static.tildacdn.com/tild3135-6662-4538-a365-646635613638/b353ce4e-13fc-4dd3-9.png"></div>
        
    </div>
</template>
  
<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'

const cat = [
    {
        species: "Кошки (мытье и сушка, бритье/экспресс-линька, стрижка когтей, чистка ушей)",
        complex: "1 800 Р",
    },
]

// const props = defineProps({
//     cars: {
//         type: Array,
//         required: true,
//     },
// })


function setCriticScore(criticalNumber, event) {
    criticalNumber = event.value
    console.log(criticalNumber)
}

// watch(cars, () => {
//     console.log(cars)
// })

const carColumns = [
  { field: 'species', header: '' },
  { field: 'complex', header: '' },
]

</script>
  
<style scoped>
.catTable {
    display: flex;
    background: white;
    width: 50%;
    border-radius: 25px;
    margin: 20px auto;
    align-items: center;
}

.catTable img {
    width: 26%;
    animation: sbs-559015147-1678007824954-905234b4 10s infinite linear;
}
.cat{
    text-align: center;
}
</style>