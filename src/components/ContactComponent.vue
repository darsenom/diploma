<script setup>
import Button from 'primevue/button'
import InputMask from 'primevue/inputmask';
import { ref } from 'vue'

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
    <div class="contacts">
        <div class="contacts-info">
            <div class="left-side">
                <h1 id="contact">КОНТАКТЫ</h1>
                <h5>Для записи свяжитесь с нами удобным для вас способом или закажите обратный звонок</h5>
                <div class="justify-content-center">
                    <InputMask id="phone" v-model.number="newContent.phone" date="phone" mask="(999) 999-99-99" placeholder="(999) 999-99-99" />
                </div>
                <Button label="позвоните мне" @click="addAuto" />
                <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
            </div>
            <div class="right-side">
                <img class="dog" src="https://thumb.tildacdn.com/tild3935-3866-4464-b834-313861613164/-/cover/460x634/center/center/-/format/webp/Rectangle_12.png">
            </div>
        </div>
    </div>

</template>

<style scoped>
.contacts {
    background: white;
    padding: 75px 0;
}

.contacts-info {
    background-color: #ffc3e7;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    width: 65%;
    margin: 0 auto;
}

.left-side {
    flex-basis: 39%;
}

input#phone {
    width: 85%;
}

button.p-button.p-component {
    width: 85%;
}

.left-side {
    flex-basis: 39%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

img.dog {
    width: 74%;
}


h1{
    font-size: 65px;
    font-weight: 500;
}

h5{
    font-size: 18px;
}

p{
    font-size: 14px;
    padding-right: 66px;
}

</style>
