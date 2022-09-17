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
        <q-toolbar-title class="text-black" style=" font-family: 'EB Garamond';">HOME</q-toolbar-title>
        <q-space />

    </q-toolbar>
    <q-stepper
      v-model="step"
      ref="stepper"
      vertical
      animated
      active-color="purple"
    >
      <q-step
        :name="1"
        prefix="1"
        title="Select title and photo"
      >
      <div  >
        <q-input
        v-model="title"
        rounded
        outlined
        label="title"
        class="q-pa-md"
        bg-color="grey-3"
      >
        <template v-slot:prepend>
          <q-icon name="title" />
        </template>
      </q-input>
        <q-btn
          class="bg-white"
          icon="photo_camera"
          aria-label="Add"
          color="black"
          style="width: 100%; height: 354.47px;"
        />
      </div>
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        title="Add Ingredients"
        caption="Optional"
      >
        <div class="items-start q-gutter-md q-pa-md">
          <q-card v-for="(item, index) in items" :key="index" dark bordered class="bg-white my-card row  " style=" border-radius: 20px; height:78px;">
            <div class="col-3 q-pl-xs q-pt-xs">
              <q-img style="width: 58.98px; height: 58.07px;  border-radius: 15px;" rounded class="rounded-borders img1  " :src="item.src" />
            </div>
            <q-separator vertical dark inset />
            <div class="col q-pa-xs q-gutter-xs">
              <div class="row">
                <div style="height: 47px; font-size: 16px; font-weight: 400; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);">Name: {{item.name}}</div>
              </div>
            </div>
            <div class="col q-pa-xs q-gutter-xs">
              <div class="row">
                <div style="height: 47px; font-size: 16px; font-weight: 400; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);">Quantity: {{item.quantity}}</div>
              </div>
            </div>
            <!-- <div class="col-3">
              <div class="row items-center">
                <div style="background: #FFFFFF; border: 2px solid #9FD0D3; width: 25px; color:black;" class="text-center col">
                  -
                </div>
                <div style="background: #FFFFFF;  width: 25px; color:black;" class="text-center col">
                  0
                </div>
                <div style="background: #FFFFFF; border: 2px solid #9FD0D3; width: 25px; color:black;" class="text-center col">
                  +
                </div>
              </div>
            </div> -->
          </q-card>
        </div>
        <div class="row">
          <q-input
          v-model="ingredientname"
          rounded
          outlined
          label="Ingredients"
          class="q-pa-md col-6"
          bg-color="grey-3"
          >
            <template v-slot:prepend>
              <q-icon name="camera" />
            </template>
          </q-input>
          <q-input
          v-model="ingredientvalue"
          rounded
          outlined
          label="Number"
          class="q-pa-md col-6"
          bg-color="grey-3"
          >
          </q-input>
        </div>

        <q-btn
          @click="AddIngredient(ingredientvalue, ingredientname)"
          class="bg-white q-px-xl row full-with"
          flat
          round
          label="Add Ingredient"
          color="secondary"
          style="border-radius: 15px;"
        />
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        title="Add Instructions"
      >
        <div class="items-start q-gutter-md q-pa-md">
          <q-card v-for="(item, index) in items2" :key="index" dark bordered class="bg-white my-card row  " style=" border-radius: 20px; height:78px;">
            <div class="col-3 q-pl-xs q-pt-xs">
              <q-img style="width: 58.98px; height: 58.07px;  border-radius: 15px;" rounded class="rounded-borders img1  " :src="item.src" />
            </div>
            <q-separator vertical dark inset />
            <div class="col q-pa-xs q-gutter-xs">
              <div class="row">
                <div style="height: 47px; font-size: 16px; font-weight: 400; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);">Name: {{item.name}}</div>
              </div>
            </div>
            <div class="col q-pa-xs q-gutter-xs">
              <div class="row">
                <div style="height: 47px; font-size: 16px; font-weight: 400; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);">Time: {{item.time}}</div>
              </div>
            </div>
            <!-- <div class="col-3">
              <div class="row items-center">
                <div style="background: #FFFFFF; border: 2px solid #9FD0D3; width: 25px; color:black;" class="text-center col">
                  -
                </div>
                <div style="background: #FFFFFF;  width: 25px; color:black;" class="text-center col">
                  0 mns
                </div>
                <div style="background: #FFFFFF; border: 2px solid #9FD0D3; width: 25px; color:black;" class="text-center col">
                  +
                </div>
              </div>
            </div> -->
          </q-card>
          </div>
          <div class="row">
            <q-input
            v-model="instructionname"
            rounded
            outlined
            label="Ingredients"
            class="q-pa-md col-6"
            bg-color="grey-3"
            >
              <template v-slot:prepend>
                <q-icon name="camera" />
              </template>
            </q-input>
            <q-input
            v-model="instructionvalue"
            rounded
            outlined
            label="Number"
            class="q-pa-md col-6"
            bg-color="grey-3"
            >
            </q-input>
          </div>
          <q-btn
            @click="AddInstruction(instructionname, instructionvalue)"
            class="bg-white q-px-xl row full-with"
            flat
            round
            label="Add Instruction"
            color="secondary"
            style="border-radius: 15px;"
          />
      </q-step>
      <q-step
        :name="4"
        prefix="4"
        title="Finish"
      >
        <q-img style="width:286.28px; height: 364.88px" src="../assets/quasar-logo-vertical.svg"/>
      </q-step>
      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next(), AddRecipe()" color="secondary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="secondary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from 'vue'
import localbase from 'localbase';
let db = new localbase('db')

export default defineComponent({
  name: "PageIndex",
  data(){
    return {
      title: ref(""),
      ingredientname: ref(""),
      ingredientvalue: ref(""),
      instructionname: ref(""),
      instructionvalue: ref(""),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      step: ref(1),
      slide: ref(1),
      autoplay: ref(false),
      items: [],
      items2: [],
    }
  },


  methods:{
    async AddRecipe(){
      var numberRecipes
      await db.collection('Recipes').get().then(len =>{
        numberRecipes = len.length
      })
      if (this.items.length != 0 && this.items2.length !=0 && this.title != null && this.step ==4 && numberRecipes != null){
        await db.collection('Recipes').add({
          author: "john Doe",
          title: this.title,
          src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
          src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png',
          id: numberRecipes,
          })

      this.items2.forEach(element =>{
        db.collection('Directives').add({
        id: element.id,
        name: element.name,
        time: element.time,
        ref: element.ref,
        src: element.src
      })
      })

      this.items.forEach(element =>{
        db.collection('Ingredients').add({
        id: element.id,
        quantity: element.quantity,
        name: element.name,
        ref: element.ref,
        src: element.src
        })
      })
      }
    },
    async AddInstruction(name,value){
      var numberRecipes
      await db.collection('Recipes').get().then(len =>{
        numberRecipes = len.length
      })
      var numberRef
      await db.collection('Directives').get().then(len =>{
        numberRef = len.length
      })
      this.items2.push({
        id: numberRecipes,
        name: name,
        ref: numberRef + this.items2.length,
        time:value,
        src: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDQzfHxmb29kfGVufDB8MHx8fDE2NjIwMDcxMjQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',})
      },
    async AddIngredient(value, name){
      var numberRecipes
      await db.collection('Recipes').get().then(len =>{
        numberRecipes = len.length
      })
      var numberRef
      await db.collection('Ingredients').get().then(len =>{
        numberRef = len.length
      })
      this.items.push({
        id: numberRecipes,
        ref: numberRef + this.items.length,
        name: name,
        quantity: value,
        src: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDQzfHxmb29kfGVufDB8MHx8fDE2NjIwMDcxMjQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',})
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

