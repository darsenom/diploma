<script setup>
import Button from 'primevue/button'
import InputMask from 'primevue/inputmask';
import { ref } from 'vue'

import Dialog from 'primevue/dialog'

import { useContent } from '@/composable/useContent'



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

<template>
    <div class="advantage">
        <h1 id="advantages">ПРЕИМУЩЕСТВА</h1>
        <div class="advantages">
            <div class="left-side">
                <img src="https://static.tildacdn.com/tild3866-3131-4435-b233-643534643662/3f381742-6ca6-45c8-9.png">
            </div>
            <div class="center">
                <h4 class="advantages-list">Профессиональная косметика и инструменты</h4>
                <h4 class="advantages-list">Доступные цены</h4>
                <h4 class="advantages-list">Индивидуальный подход</h4>
                <h4 class="advantages-list">Возможность хозяину присутствовать на процедуре</h4>
                <h4 class="advantages-list">Скидка для щенков 50%</h4>
                <h4 class="advantages-list">Услуги для кошек и собак</h4>
    
                <div class="sign-up">
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
                        <img class="spinning-dog" src="https://static.tildacdn.com/tild3832-6539-4233-b331-366364353763/72026204-f148-47fa-8.png">
                </div>
            </div>
            <div class="right-side">
                <img class="right-side" src="https://static.tildacdn.com/tild3163-3761-4631-a139-643236653261/20df679f-c4d1-436d-b.png">
            </div>
        </div>
    </div>
    
</template>

<style scoped>
.advantage {
    padding: 75px 0;
}
.advantages {
    display: flex;
    justify-content: center;
}

.right-side {
    flex-basis: 25%;
    text-align: center;
    margin: 70px 0;
}

.right-side img{
    width: 60%;
}

.left-side img{
    width: 60%;
}

.center img{
    width: 25%;
}

.center{
    flex-basis: 25%;
}

.left-side {
    flex-basis: 25%;
    text-align: center;
    margin: 70px 0;
}

.advantages-list{
    background: #A5B4FC;
    border-radius: 40px;
    padding: 10px 65px;
    text-align: center;
    margin: 10px 0;
}

button.p-button.p-component {
    height: 10%;
}

.sign-up{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.spinning-dog{
    animation: sbs-559015147-1678007824954 10s infinite linear;
}

@keyframes sbs-559015147-1678007824954{
    0% {
        transform: rotate(0deg);
        animation-timing-function: linear;
    }
    100% {
        transform: rotate(360deg);
    }
}

h1{
    font-size: 65px;
    font-weight: 500;
    margin: 0px 0 45px 210px;
}
</style>
