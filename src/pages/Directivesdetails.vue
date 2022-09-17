<template>
  <q-page class="q-px-md" style="overflow-y: scroll; background-image: url(https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDExfHxmb29kfGVufDB8MHx8fDE2NjIwNDY3NDk&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450);">
    <div class="q-gutter-md" >
      <q-toolbar class="q-pa-md"  elevated>
        <q-btn
          to="/"
          flat
          dense
          icon="arrow_back"
          aria-label="Back"
          class="bg-white"
          color="black"
          style="height: 56.43px; width:75px; border-radius: 15px;"
        />
        <q-space />
        <q-toolbar-title class="text-black" style="font-family: 'EB Garamond';">Product</q-toolbar-title>
        <q-space />
      </q-toolbar>
    </div>
    <div class="row">
      <div  class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap ">
            <div style=" border-radius: 20px;" class="rounded-borders full-height full-width bg-white col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px;"  :src="item.src" /> <br>
              <div class=" col text-subtitle1 text-center" >
                <div class="row">
                   {{item.name}}
                </div>
                <q-circular-progress
                show-value
                class="text-white q-ma-md col"
                :value="value"
                size=" 250px"
                :thickness="0.2"
                color="orange"
                center-color="grey-8"
                track-color="transparent"
                >
                5 mn
                </q-circular-progress>
              </div>
              <div class="q-pa-md q-gutter-sm flex-center flex">
                <q-btn style="border-radius: 16px; background: #98A1A7;" color="#98A1A7" text-color="white" label="Standard" />
                <q-btn style="border-radius: 16px;" color="secondary" label="Primary" />
              </div>
            </div>
          </div>

    </div>
    <!-- <div class="q-px-md q-pb-sm">
      <q-carousel
        swipeable
        animated
        arrows
        v-model="slide"
        :autoplay="autoplay"
        ref="carousel"
        transition-next= "slide-down"
        infinite
        class="full-width full-height"
        style="border-radius: 30px; "
      >
        <q-carousel-slide v-bind:v-for="item in Directives"  :name="item.ref" class="column no-wrap">
          <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap ">
            <div style=" border-radius: 20px;" class="rounded-borders full-height full-width bg-white col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px;"  :src="item.src" /> <br>
              <div class=" col text-subtitle1 text-center" >
                <div class="row">
                   {{item.name}}
                </div>
                <q-circular-progress
                show-value
                class="text-white q-ma-md col"
                :value="value"
                size=" 250px"
                :thickness="0.2"
                color="orange"
                center-color="grey-8"
                track-color="transparent"
                >
                5 mn
                </q-circular-progress>
              </div>
              <div class="q-pa-md q-gutter-sm flex-center flex">
                <q-btn style="border-radius: 16px; background: #98A1A7;" color="#98A1A7" text-color="white" label="Standard" />
                <q-btn style="border-radius: 16px;" color="secondary" label="Primary" />
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue';
import localbase from 'localbase';
let db = new localbase('db')

export default defineComponent({
  name: "PageIndex",
  data(){
    return {
      search: ref(""),
      time : ref(300*1000/100),
      value: ref(0),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      step: ref(1),
      slide: ref(1),
      autoplay: ref(false),
      Directives:[],
      items: [
              {
                src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                name: "chutchi",
                src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png'
              },
              {
                src: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDd8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                name:"tacos",
                src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png'
              },
              {
                src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDExfHxmb29kfGVufDB8MHx8fDE2NjIwNDY3NDk&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                name:"pizza",
                src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png'

              },
              {
                src: 'https://images.unsplash.com/photo-1497888329096-51c27beff665?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDI2fHxmb29kfGVufDB8MHx8fDE2NjIwNDY3NDk&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                name:"cake",
                src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png'

              },
              {
                src: 'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDM1fHxmb29kfGVufDB8MHx8fDE2NjIwMDcxMjQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                name:"cheese",
                src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png'

              },
              {
                src: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDQzfHxmb29kfGVufDB8MHx8fDE2NjIwMDcxMjQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                name:"cheese",
                src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png'

              },
              {
                src: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDQzfHxmb29kfGVufDB8MHx8fDE2NjIwMDcxMjQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                name:"cheese",
                src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png'

              }
            ],
    }
  },
  mounted(){
    setInterval(this.addvalue, this.time)
    this.detail()
    },
  methods:{
    detail(){
      db.collection('Directives').get().then(Recipes =>{
        this.Directives = Recipes.filter(recipe => recipe.id ==  parseInt(this.$route.params.id.replace(":","")));
      })
    },
    addvalue(){
      this.value +=1;
    }
   }
});
</script>

<style scoped>
#my-font{

  font-family: 'EB Garamond';

}
#img{
  width: 104.55px; height: 91.68px; border-radius: 15px;
}
#img1{
  width: 34.55px; height: 31.68px; border-radius: 15px;
}
#my-card{
  width: 100%; height: 100%;
}
</style>

