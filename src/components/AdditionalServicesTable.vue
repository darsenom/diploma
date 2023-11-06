<template>

    <div class="additionalServices">
        <DataTable :value="additionalServices">
            <Column v-for="column in carColumns" :key="column.field" :field="column.field" :header="column.header">
                <template #body="{ data }">
                    <template v-if="column.field === 'criticScore'">
                    </template>
                    <template v-else>{{ data[column.field] }} </template>
                </template>
            </Column>
        </DataTable>

        <img src="https://thumb.tildacdn.com/tild3336-3934-4237-b364-623136643234/-/resize/468x/-/format/webp/spaniel-puppy-playin.png">

    </div>
</template>
  
<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const additionalServices = [
    {
        additionalServices: "Экспресс-линька",
        price: "1 900 Р",
    },
    {
        additionalServices: "Стрижка когтей",
        price: "200 Р",
    },
    {
        additionalServices: "Шлифовка когтей",
        price: "150 Р",
    },
    {
        additionalServices: "Окантовка лап",
        price: "200 Р",
    },
    {
        additionalServices: "Чистка ушей",
        price: "100 Р",
    },
    {
        additionalServices: "Разбор колтунов",
        price: "300 Р / 10 мин",
    },
    {
        additionalServices: "Креативный груминг (стразы, выбривание узора, блеск-тату)",
        price: "от 200 Р",
    },
    {
        additionalServices: "Окрашивание (услуга по предварительному запросу)",
        price: "от 500 Р",
    },
    {
        additionalServices: "Чистка параанальных желез",
        price: "300 Р",
    },
]


const carColumns = [
  { field: 'additionalServices', header: 'Дополнительные услуги' },
  { field: 'price', header: 'Цена' },
]
</script>
  
<style scoped>
.additionalServices{
    display: flex;
    background: white;
    border-radius: 25px;
    width: 50%;
    margin: 20px auto;
}
</style>