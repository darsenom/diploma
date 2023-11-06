<template>
    <div class="works" id="works">
        <h1>РАБОТЫ</h1>
        <div class="card flex justify-content-center">
            <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 35%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 70%; display: block" />
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </template>
            </Galleria>
    
            <Button label="Смотреть фото ДО/ПОСЛЕ" @click="displayBasic = true" />
        </div>
        <div class="card">
            <Galleria :value="PhotoService" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 2560px; backgraund:wi">
                <!-- <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                </template> -->
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; border-radius: 170px; padding: 0 10px;" />
                </template>
            </Galleria>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from "vue";
import Galleria from 'primevue/galleria';
import Button from 'primevue/button'

const images =[
{
    itemImageSrc: 'https://static.tildacdn.com/tild3634-3466-4134-b830-333830393138/7.jpeg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3634-3466-4134-b830-333830393138/7.jpeg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild6465-3237-4165-b732-363966316138/1.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild6465-3237-4165-b732-363966316138/1.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3061-6535-4566-b733-666163383962/2.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3061-6535-4566-b733-666163383962/2.png',
    alt: 'Description for Image 3',
    title: 'Title 3'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild6433-3363-4534-b464-343765363431/3.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild6433-3363-4534-b464-343765363431/3.png',
    alt: 'Description for Image 4',
    title: 'Title 4'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild6565-6564-4230-b633-323766356132/4.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild6565-6564-4230-b633-323766356132/4.png',
    alt: 'Description for Image 5',
    title: 'Title 5'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild6434-3730-4637-b835-376539363538/6.jpeg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild6434-3730-4637-b835-376539363538/6.jpeg',
    alt: 'Description for Image 6',
    title: 'Title 6'
},
]

const displayBasic = ref(false);

const PhotoService = [
{
    itemImageSrc: 'https://static.tildacdn.com/tild3561-3861-4232-b834-656533313333/noroot.jpg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3561-3861-4232-b834-656533313333/noroot.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3761-6634-4731-b739-633632626334/62f78eff-0bc5-4f4a-a.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3761-6634-4731-b739-633632626334/62f78eff-0bc5-4f4a-a.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild6630-6639-4839-a131-386635383861/noroot.jpg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild6630-6639-4839-a131-386635383861/noroot.jpg',
    alt: 'Description for Image 3',
    title: 'Title 3'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3262-6131-4566-a266-323531653864/noroot.jpg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3262-6131-4566-a266-323531653864/noroot.jpg',
    alt: 'Description for Image 4',
    title: 'Title 4'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3034-3333-4439-b936-343063636261/noroot.jpg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3034-3333-4439-b936-343063636261/noroot.jpg',
    alt: 'Description for Image 5',
    title: 'Title 5'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3834-6662-4130-b039-343034383165/c73cfdfd-dacc-4696-9.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3834-6662-4130-b039-343034383165/c73cfdfd-dacc-4696-9.png',
    alt: 'Description for Image 6',
    title: 'Title 6'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3531-3232-4331-b033-363266333662/e3a7b1b7-bfe2-44f1-8.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3531-3232-4331-b033-363266333662/e3a7b1b7-bfe2-44f1-8.png',
    alt: 'Description for Image 7',
    title: 'Title 7'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3932-6537-4736-b537-303337616437/noroot.jpg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3932-6537-4736-b537-303337616437/noroot.jpg',
    alt: 'Description for Image 8',
    title: 'Title 8'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3239-6264-4137-b364-326337323335/5db4dcab-f36e-48f0-9.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3239-6264-4137-b364-326337323335/5db4dcab-f36e-48f0-9.png',
    alt: 'Description for Image 9',
    title: 'Title 9'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3239-3939-4863-b365-386333303231/bb88059b-a67f-4e9e-9.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3239-3939-4863-b365-386333303231/bb88059b-a67f-4e9e-9.png',
    alt: 'Description for Image 10',
    title: 'Title 10'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild3630-3032-4965-a636-313664376638/noroot.jpg',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild3630-3032-4965-a636-313664376638/noroot.jpg',
    alt: 'Description for Image 11',
    title: 'Title 11'
},
{
    itemImageSrc: 'https://static.tildacdn.com/tild6162-6435-4237-b235-633439663837/3b9d5162-58f5-4086-9.png',
    thumbnailImageSrc: 'https://static.tildacdn.com/tild6162-6435-4237-b235-633439663837/3b9d5162-58f5-4086-9.png',
    alt: 'Description for Image 12',
    title: 'Title 12'
},
]


const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>

<style scoped>
.works {
    background: white;
    padding: 75px 0;
}

h1{
    font-size: 65px;
    font-weight: 500;
    margin: 0px 0 45px 210px;
}
Button{
    position: absolute;
    top: 70px;
    left: 345px;
    transform: rotate(15deg);
}
.works {
    position: relative;
}
</style>