<script setup>

</script>

<template>
    <div class="footer">
        <div class="address" id="address">
            <h1>Сочи, Лазаревский район, Магнитогорский переулок 2/1 к6</h1>
            <h1>10:00 – 20:00, без выходных</h1>

            <button type="button" class="p-link telegram">
                <a class="pi pi-telegram" href="https://telegram.me/ВашеИмяПользователя" target="_blank"></a>
            </button>

            <button type="button" class="p-link whatsapp">
                <a class="pi pi-whatsapp" href="https://web.whatsapp.com/" target="_blank"></a>
            </button>

        </div>

        <div id="map" class="map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af9131c97a5606175c845bac1f7a4a2b0ef473090eba77433400f1f7dc898e88a&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
        </div>
        

    </div>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: center;
    background: white;
}

.address {
    flex-basis: 30%;
}

.address h1 {
    font-weight: 900;
}

a.pi.pi-telegram {
    font-size: 30px;
    padding: 10px 25px 0 0;
}

a.pi.pi-whatsapp {
    font-size: 30px;
}
</style>
  
