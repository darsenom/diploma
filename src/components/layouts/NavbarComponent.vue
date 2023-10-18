<template>
  <div class="navbar">
    <router-link to='/'><img src="@/img/logo-tkd.png" /></router-link>
  </div>
  <div class="side">
    <p-button v-if="!user" @click="googleRegister" label="Войти" icon="pi pi-sign-in" />
    <p-button v-else @click="googleLogout" label="Выйти" icon="pi pi-sign-out" />
    <!-- <p-button v-if="user.status === 'admin'" @click="openCreate" label="Выйти" icon="pi pi-sign-out" /> -->
















    <Button @click="visible2 = true" icon="pi pi-plus" label="Добавить соревнование" />

      <Dialog v-model:visible="visible2" modal header="Добавить соревнование" :style="`width: '50vw'`">
        <template #default>
          <div class="p-fluid">
            <div class="p-field">
              <label for="title">Название</label>
              <!-- <Dropdown id="title" v-model="newContent.title" editable :options="titleLabel" option-label="title" option-value="title" placeholder="Название" /> -->
              <InputText id="title" v-model="newContent.title" placeholder="Название" />
            </div>
            <div class="p-field">
              <label for="city">Город</label>
              <Dropdown id="city" v-model="newContent.city" editable :options="carCity" option-label="city" option-value="city" placeholder="Город" />
            </div>
            <div class="p-field">
              <label for="price">Цена</label>
              <InputNumber id="price" v-model="newContent.price" inputId="currency-us" mode="currency" currency="KZT" locale="ru-ru" />
            </div>
            <div class="p-field">
              <label for="year">Год</label>
              <Calendar id="year" v-model="newContent.year" view="year" dateFormat="yy" />
            </div>
            <div class="p-field">
              <label for="volume">Объем</label>
              <InputNumber id="volume" v-model="newContent.volume" :minFractionDigits="1" :maxFractionDigits="1" />
            </div>
            <div class="p-field">
              <label for="color">Цвет</label>
              <ColorPicker id="color" v-model="newContent.color" />
            </div>
            
            <div class="p-field">
              <label for="carcase">Кузов</label>
              <Dropdown id="carcase" v-model="newContent.carcase" editable :options="carCase" option-label="carcase" option-value="carcase" placeholder="Кузов" />
            </div>
            <div class="p-field">
              <label for="gear">Коробка</label>
              <div class="flex flex-wrap gap-3">
                <RadioButton id="mechanic" v-model="newContent.gear" name="gear" value="Механика" />
                <label for="mechanic" class="ml-2">Механика</label>
              </div>
              <div class="flex align-items-center">
                <RadioButton id="auto" v-model="newContent.gear" name="gear" value="Автомат" />
                <label for="auto" class="ml-2">Автомат</label>
              </div>
            </div>
            <div class="p-field">
              <label for="travel">Пробег</label>
              <InputText id="travel" v-model.number="newContent.travel" />
              <Slider v-model="newContent.travel" min="0" max="500000" />
            </div>
            <div class="p-field">
              <label for="travel">Картинка</label>
              <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @input="onUpload($event)" />
            </div>
          </div>
        </template>
        <template #footer>
          <Button label="Сбросить" icon="pi pi-times" @click="clearAuto" text />
          <Button label="Добавить" icon="pi pi-check" @click="addAuto" autofocus />
        </template>
      </Dialog>
  </div>



</template>

<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import ColorPicker from 'primevue/colorpicker'
import RadioButton from 'primevue/radiobutton'
import Slider from 'primevue/slider'
import FileUpload from 'primevue/fileupload'
import PButton from 'primevue/button'
import { useUser } from '@/composable/useUser'
import { ref } from 'vue'

import { useContent } from '@/composable/useContent'


const visible2 = ref(false)

const { user, googleRegister, googleLogout } = useUser()


const { newContent, createContent } = useContent()


function toggleVisible2() {
  visible2.value = !visible2.value
}

async function addAuto() {
  await createContent()
  toggleVisible2()
}




</script>