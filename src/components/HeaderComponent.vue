<template>
    <div class="header">
        <div class="wrapper">
        
            <img class="box-1" src="https://static.tildacdn.com/tild3135-6662-4538-a365-646635613638/b353ce4e-13fc-4dd3-9.png">
            <img class="box-2" src="https://static.tildacdn.com/tild3266-3731-4561-b337-376666646536/0d8d3ad4-dd75-441c-a.png">
            <img class="box-3" src="https://static.tildacdn.com/tild6132-6163-4564-b365-383134363263/5510afa8-304b-4351-8.png">
            <img class="box-4" src="https://static.tildacdn.com/tild6166-3939-4561-b932-373664303530/cf80afa0-9157-4505-a.png">
            <h2 class="box-8">ПРОФЕССИОНАЛЬНЫЙ ГРУМИНГ <span class="for">ДЛЯ ВАШИХ<span class="anim"> ПИТОМЦЕВ</span></span></h2>
            <img class="box-5" src="https://static.tildacdn.com/tild3362-6563-4836-a637-646363326235/150912ac-5a7d-4d85-b.png">
            <img class="box-6" src="https://static.tildacdn.com/tild3430-6563-4534-b535-663439613333/Group_33.png">
            <img class="box-7" src="https://static.tildacdn.com/tild6637-6263-4339-b664-616133363435/e0453687-c2e1-47af-b.png">
        </div>
    </div>
    
</template>
<script>
</script>

<style scoped>
.wrapper{
    display: grid;
    justify-items: center;
    grid-template-columns: 4fr 1fr 3fr 1fr;
    grid-template-rows: 150px;
}
.box-1{
    width: 30%;
    grid-column: 1;
    grid-row-start: 3;
    grid-row-end: 3;
    animation: sbs-559015147-1678007824954-905234b4 10s infinite linear;
}
.box-2{
    width: 30%;
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-left: 160px;
    margin-top: 85px;
}
.box-3{
    width: 30%;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-left: 435px;
    margin-top: 50px;
    animation: sbs-559015147-1678007824954-905234b4 10s infinite linear;
}
.box-4{
    width: 51%;
    grid-column: 2;
    grid-row: 1/4;
}
.box-5{
    width: 40%;
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-right: 365px;
    margin-top: 50px
}
.box-6{
    width: 45%;
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-left: 85px;
}
.box-7{
    width: 40%;
    grid-column-start: 3;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-top: 105px;
    animation: sbs-559015147-1678007824954-905234b4 10s infinite linear;
}

.box-8{
    grid-column: 2;
    grid-row: 3;
    font-size: 60px;
    position: relative;
    color: #8a9df9;
    font-weight: bold;
}

span {
    font-weight: bold;
    color: #8a9df9;
}

.for{
    position: absolute;
    top: 90px;
    left: 300px;
    font-size: 35px;
}

.anim{
    position: absolute;
    top: 50px;
    right: 19px;
    font-size: 35px;
}
</style>