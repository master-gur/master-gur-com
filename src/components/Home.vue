<template>
    <div class="home">


        <v-divider class="my-4"></v-divider>

        <v-container fluid class="mx-0 pa-0">
            <v-layout row wrap>
                <v-flex xs4>
                    <v-card>
                        <span v-text="contacts"></span>
                    </v-card>
                </v-flex>
                <v-flex xs8>
                    <div>
                    <v-card>
                        <span v-text="base_text"></span>
                    </v-card>
                    </div>
                </v-flex>
                <v-flex xs6>
                    <v-card xs6>
                    <div>
                    <yandex-map 
                    :coords="[55.841609, 37.650037]"
                    zoom="16"
                    :cluster-options="{
                        1: {clusterDisableClickZoom: true}
                    }"
                    :behaviors="['ruler']"
                    :controls="['trafficControl','zoomControl','typeSelector']"
                    :placemarks="placemarks"
                    map-type="map"
                    @map-was-initialized="initHandler"></yandex-map>   
                    </div>
  
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>


<script>
//import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
 //   Navbar
  },
  data () {
    return {
        contacts: `Гарантия на выполненный ремонт рулевой рейки -
                        6 месяцев, без учета пробега!
                        запись на ремонт, и стоимость работ уточняйте у нашего менеджера
                        Работаем ежедневно с 10:00 до 20:00
                        Телефоны:
                        8-906-056-05-07
                        8-906-056-05-02
                        8-916-883-55-56
                        8-925-777-41-42
                        gur24.ru@mail.ru
                        Skype:
                        master--gur`,
        placemarks: [
            {
                coords: [55.841609, 37.650037],
                properties: {}, // define properties here
                options: {}, // define options here
                clusterName: "1",
                balloonTemplate: '<div>"Your custom template"</div>',
                callbacks: { click: function() {} }
            }
            ],
        base_text:`                        `
        
    }
  }

}
</script>