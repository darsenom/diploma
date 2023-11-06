<script setup>
import NavbarComponent from '@/components/layouts/NavbarComponent.vue'
import DogTable from '@/components/DogTable.vue'
import CatTable from '@/components/CatTable.vue'
import AdditionalServicesTable from '@/components/AdditionalServicesTable.vue'
</script>

<template>
    <NavbarComponent />
    <h1>УСЛУГИ И ЦЕНЫ</h1>
    <DogTable />
    <CatTable />
    <AdditionalServicesTable />
</template>

<style scoped>
h1{
    font-size: 65px;
    font-weight: 500;
    margin: 0px 390px 45px 0;
    text-align: center;
}
</style>