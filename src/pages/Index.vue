<template>
  <q-page class="q-px-md">
      <q-toolbar class="q-pa-md" elevated>
        <q-btn
          flat
          dense
          icon="arrow_back"
          aria-label="Back"
          class="bg-white"
          color="black"
          style="height: 56.43px; width:75px; border-radius: 15px;"
        />
        <q-space />
        <q-toolbar-title class="text-black" style=" font-family: 'EB Garamond';">Recipes Box</q-toolbar-title>
        <q-space />
        <q-btn
        class="bg-white"
          to="/addrecipe"
          flat
          dense
          round
          icon="add_circle_outline"
          aria-label="Add"
          color="black"
          style="height: 56.43px; width:75px; border-radius: 15px;"
        />
      </q-toolbar>
      <q-input
        v-model="search"
        rounded
        outlined
        label="Search"
        class="q-pa-md"
        bg-color="grey-3"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <div class=" q-px-md q-gutter-xl justify-center row">
        <q-btn rounded color="secondary" text-color="black"  label="BreakFast" />
        <q-btn rounded color="white" text-color="black" label="Lunch" />
        <q-btn rounded color="white" text-color="black" label="Diner" />
      </div>
      <div class="row q-px-md q-pt-xl q-pb-md">
        <div style="font-size: 24px; font-weight: 700; line-height: 100%; color: rgb(0, 0, 0);  font-family: 'EB Garamond';" class="col-10 ">Popular Recipe</div> <q-space/>
        <div style="font-size: 16px; font-weight: 600; line-height: 100%; color: rgba(100.19, 195.50, 189.78, 1);" class="col-2 q-pt-sm">View All</div>
      </div>
    <div class="q-px-md q-pb-sm">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        :autoplay="autoplay"
        ref="carousel"
        transition-next= "slide-down"
        infinite
        height="124px"
        style="border-radius: 30px;"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap ">
            <div style=" border-radius: 20px; height:118px;" class="rounded-borders bg-white col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px; height:96.68px;"  :src="items[0].src" /> <br>
              <div class=" text-subtitle1 text-center" >
              {{items[0].name}}
              </div>
            </div>>
            <div style=" border-radius: 20px; height:118px;" class="rounded-borders bg-white col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px; height:96.68px;"  :src="items[1].src" /> <br>
              <div class=" text-subtitle1 text-center" >
              {{items[1].name}}
              </div>
            </div>
            <div style=" border-radius: 20px;height:118px;" class="rounded-borders bg-white col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px; height:96.68px;"  :src="items[0].src" /> <br>
              <div class=" text-subtitle1 text-center" >
              {{items[0].name}}
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap ">
            <div style=" border-radius: 20px; height:118px;" class="rounded-borders  col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px; height:96.68px;"  :src="items[0].src" /> <br>
              <div class=" text-subtitle1 text-center" >
              {{items[0].name}}
              </div>
            </div>
            <div style=" border-radius: 20px; height:118px;" class="rounded-borders bg-white col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px; height:96.68px;"  :src="items[1].src" /> <br>
              <div class=" text-subtitle1 text-center" >
              {{items[1].name}}
              </div>
            </div>
            <div style=" border-radius: 20px;height:118px;" class="rounded-borders bg-white col-4  q-pa-xs ">
              <q-img style=" border-radius: 20px; height:96.68px;"  :src="items[0].src" /> <br>
              <div class=" text-subtitle1 text-center" >
              {{items[0].name}}
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="row q-px-md q-pt-lg">
      <div style="font-size: 24px; font-weight: 700; line-height: 100%; color: rgb(0, 0, 0);  font-family: 'EB Garamond';" class="col-10">Editor's Recipe</div> <q-space/>
      <div style="font-size: 16px; font-weight: 600; line-height: 100%; color: rgba(100.19, 195.50, 189.78, 1);" class="col-2 q-pt-sm">View All</div>
    </div>
    <div class="items-start q-gutter-md q-pa-md ">
      <q-card v-for="(item, index) in list" :key="index" dark bordered class=" my-card row  " style=" border-radius: 20px; height:90px; background:white;">
        <div class="col-4 q-pl-xs q-pt-xs">
          <q-img style="width: 106.98px; height: 80.07px;  border-radius: 15px;" rounded class="rounded-borders" :src="item.src" />
        </div>
        <q-separator vertical dark inset />

        <div class="col-6 q-py-xs  ">
          <div class="row">
            <router-link :to="'/detailsinstructions/:'+ item.id">
              <div style="height: 47px; font-size: 20px; font-weight: 700; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);">{{item.title}} </div>
            </router-link>
          </div>
          <div class="row ">
            <img style="width: 18.42px; height: 18px; border-radius: 30px;" :src="item.src"/>
            <div style="width: 83.91px; font-size: 16px; font-weight: 600; line-height: 21px; font-family: 'EB Garamond'; color: rgba(152, 161, 167, 1);">{{item.author}}</div>
          </div>
        </div>
        <div class="col q-pt-md">
          <img style="  width: 30.70px; height: 30px; border-radius: 8px;" :src="item.src_arrow"/>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'
import { mapGetters } from "vuex";
import localbase from 'localbase';
let db = new localbase('db')

export default defineComponent({
  name: "PageIndex",
  data(){
    return {
      search: ref(""),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slide: ref(1),
      list:[],
      autoplay: ref(false),
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

  computed: {
    ...mapGetters(
      {
        listRecipes: "getRecipes",
      }
    ),

   },
   mounted(){
    this.lista()
   },
   methods:{
    lista(){
      db.collection('Recipes').get().then(len =>{
      if(len.length > 2){
          this.list = len
      }
      else{
        this.list = this.listRecipes
        this.addData()
      }
      })
    },
     addData(){
       db.collection('Recipes').get().then(len =>{
        if( len.length == 0 ) {
          console.log("you", len);
          this.listRecipes.forEach(el=>{
            db.collection('Recipes').add({
              id: el.id,
              author: el.author,
              title: el.title,
              src: el.src,
              src_arrow: el.src_arrow,
            })
          })
          this.listRecipes.forEach(element => {
            element.Ingredients.forEach(el => {
              db.collection('Ingredients').add({
                ref: el.ref,
                id: element.id,
                name: el.name,
                quantity: el.quantity,
                src: el.src
              })
            })
          })
          this.listRecipes.forEach(element => {
            element.directions.forEach(el => {
              db.collection('Directives').add({
                ref: el.ref,
                id: element.id,
                name: el.name,
                time: el.time,
                src: el.src
              })
            })
          })
        }
       })

     }
   }
});
</script>

<style scoped>
#my-font{

  font-family: 'EB Garamond';

}
#img{
  width: 104.55px; height: 96.68px; border-radius: 15px;
}
#img1{
  width: 34.55px; height: 31.68px; border-radius: 15px;
}
#my-card{
  width: 100%; height: 100%;
}
</style>
