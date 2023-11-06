<template>
  <div class="navbar" id="navbar">
    
    <div class="card">
      <div class="logo">
        <router-link to='/'><img style="width: 20%;" src="https://static.tildacdn.com/tild3263-6664-4636-b037-373630633538/Mask_group.svg" /></router-link>
      </div>

      <div class="pages">
        <router-link :to="{hash: '#advantages'}">ПРЕИМУЩЕСТВА</router-link>
        <!-- <router-link :to="{hash: '#contacts'}">КОНТАКТЫ</router-link> -->
        <router-link :to="{hash: '#works'}">РАБОТЫ</router-link>
        <router-link to='/servicesAndPrices'>УСЛУГИ И ЦЕНЫ</router-link>
        <router-link :to="{hash: '#contact'}">КОНТАКТЫ</router-link>
      </div>
    </div>
      <Button @click="visible2 = true" label="Записаться" />
  
        <Dialog v-model:visible="visible2" modal header="Хотите записаться в студию?" :style="`width: '50vw'`">
          <template #default>
            <p>Оставьте свой номер, и мы свяжемся
              с Вами в ближайшее время</p>
  
              <div class="justify-content-center">
                <InputMask id="phone" v-model.number="newContent.phone" date="phone" mask="(999) 999-99-99" placeholder="(999) 999-99-99" />
                <Button label="Записаться" @click="addAuto" autofocus />
            </div>
            <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
  
            
            <div class="p-fluid">
  
              
  
            </div>
          </template>
        </Dialog>
  </div>







</template>

<script setup>
import Button from 'primevue/button'
import InputMask from 'primevue/inputmask';
import Dialog from 'primevue/dialog'
import { ref } from 'vue'

import { useContent } from '@/composable/useContent'



// new Vue({
//   el:"#app",
//   methods:{
//       scrollToElement(){
//         VueScrollTo.scrollTo("ContactsComponent")
//       }
//     }
// })






const visible2 = ref(false)


const { newContent, addContent } = useContent()


function toggleVisible2() {
  visible2.value = !visible2.value
}

async function addAuto() {
  await addContent()
  toggleVisible2()
}
</script>

<style scoped>
a{
  color: black;
  flex-basis: 25%;
    display: block;
}
.navbar{
  display: flex;
  justify-content: center;
  margin: 45px auto;
}
.card {
  display: flex;
  background: #A5B4FC;
  border-radius: 40px;
  width: 60%;
  justify-content: space-between;
  flex-basis: 65%;
  align-items: center;
  margin: 0 35px;
}

.logo{
  flex-basis: 25%;
  margin-left: 35px;
}

.pages{
  flex-basis: 75%;
  display: flex;
}
</style>