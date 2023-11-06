<template>
    <div class="dogTable">
        <DataTable :value="dog">
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
    </div>
</template>
  
<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dropdown from 'primevue/dropdown'

const dog = [
    {
        species: "Декоративные породы до 5 кг (йоркширский терьер, мальтезе, ши-тцу, пекинес, папильон, шпиц)",
        complex: "2 000 Р",
        washingUp: '1 000 Р',
        hygiene: '800 Р'
    },
    {
        species: "Средние породы до 10 кг (пудель, бишон фризе, спаниель, корги)",
        complex: "2 700 Р",
        washingUp: '1 200 Р',
        hygiene: '800 Р'
    },
    {
        species: "Породы свыше 10 кг",
        complex: "3 300 Р",
        washingUp: '2 000 Р',
        hygiene: '1 000 Р'
    },
    {
        species: "Породы свыше 15 кг",
        complex: "3 600 Р",
        washingUp: '2 200 Р',
        hygiene: '1 000 Р'
    },
    {
        species: "* в комплекс входит мытье, сушка, стрижка, стрижка и шлифовка когтей, окантовка лап, чистка ушей",
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
  { field: 'species', header: 'Порода' },
  { field: 'complex', header: 'Комплекс*' },
  { field: 'washingUp', header: 'Мытье' },
  { field: 'hygiene', header: 'Гигиена' },
]
</script>
  
<style scoped>
.dogTable {
    width: 50%;
    margin: 0 auto;
    border-radius: 82px;
}
</style>