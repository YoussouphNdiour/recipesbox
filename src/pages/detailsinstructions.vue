<template>
  <q-page class="q-pa-md" >
      <div class="row">
        <q-toolbar  elevated>
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
          <q-btn
            to="/"
            flat
            dense
            icon="favorite"
            aria-label="Back"
            class="bg-white"
            color="black"
            style="height: 56.43px; width:75px; border-radius: 15px;"
          />
        </q-toolbar>
      </div>
      <q-img class="img" style="width: 100%; max-height: 516px; position: absolute; top:10px; z-index: -1; " src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjcwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"     alt=""/>
      <div style="border-radius: 45px; width:100%; height: 647px; position: absolute; top:280px; " class=" rounded-borders bg-white q-pa-md  q-gutter-xs">
        <div class="row">
          <div class="col" style="height: 47px; font-size: 20px; font-weight: 700; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);">Easy homemade humgerr Beef </div>
          <q-space/>
          <q-icon class="col-2" name="schedule" size="26px" color="#98A1A7" style="top:-18px;">
            <div class="col q-pt-md" style="height: 47px; font-size: 16px; font-weight: 700; line-height: 26px; font-family: 'EB Garamond'; color:rgb(152, 161, 167);">15mn </div>
          </q-icon>
        </div>
        <div class="row">
          <div class="col" style="height: 47px; font-size: 16px; font-weight: 700; line-height: 26px; font-family: 'EB Garamond'; color:rgb(152, 161, 167);">Lorem ipsum dolor sit amet consecteturconsecteturconsectetur, itaque quod veritatis maiores tenetur libero distinctio? </div>
        </div>
        <div class="row q-py-xl ">
          <div class="col">
            <div class="row q-gutter-lg">
              <q-icon class="col" style="background:#D9D9D9; width: 74px; height: 59px; border-radius: 10px;" name="kebab_dining" size="26px" color="#98A1A7"/>
                <div class=" col q-pt-md" style="font-family: 'EB Garamond';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 21px;
                  letter-spacing: -0.02em;">
                      65g carbs
                </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-gutter-lg">
              <q-icon class="col" style="background:#D9D9D9; width: 74px; height: 59px; border-radius: 10px;" name="restaurant" size="26px" color="#98A1A7"/>
                <div class=" col q-pt-md" style="font-family: 'EB Garamond';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 21px;
                  letter-spacing: -0.02em;">
                      27g proteins
                </div>
            </div>
          </div>
        </div>
        <div class="row q-py-xl ">
          <div class="col">
            <div class="row q-gutter-lg">
              <q-icon class="col" style="background:#D9D9D9; width: 74px; height: 59px; border-radius: 10px;" name="local_fire_department" size="26px" color="#98A1A7"/>
                <div class=" col q-pt-md" style="font-family: 'EB Garamond';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 21px;
                  letter-spacing: -0.02em;">
                      120 kcal
                </div>
            </div>
          </div>
          <div class="col">
            <div class="row q-gutter-lg">
              <q-icon class="col" style="background:#D9D9D9; width: 74px; height: 59px; border-radius: 10px;" name="local_pizza" size="26px" color="#98A1A7"/>
                <div class=" col q-pt-md" style="font-family: 'EB Garamond';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 21px;
                  letter-spacing: -0.02em;">
                      91g fats
                </div>
            </div>
          </div>
        </div>
        <q-btn-group class="row full-width" rounded>
            <q-btn color="secondary" class=" col-6 " rounded glossy icon="arrow" label="Ingredients"  />
            <q-btn color="white" class="col-6 text-black" rounded glossy icon="arrow"  label="Directives" :to="'/detailsdirectives/' + $route.params.id" />
          </q-btn-group>
        <div class="row q-px-md q-pt-xl q-pb-md">
          <div style="font-size: 24px; font-weight: 700; line-height: 100%; color: rgb(0, 0, 0);  font-family: 'EB Garamond';" class="col-10 ">
            Popular Recipe
            <div class="row">
          <div class="col" style="height: 47px; font-size: 16px; font-weight: 700; line-height: 26px; font-family: 'EB Garamond'; color:rgb(152, 161, 167);">{{Ingredients.length}} items</div>
        </div>
          </div>
          <q-space/>
          <div style="font-size: 16px; font-weight: 600; line-height: 100%; color: rgba(100.19, 195.50, 189.78, 1);" class="col-2 q-pt-sm">View All</div>
        </div>
        <div class="items-start q-gutter-md q-pa-md">
          <q-card v-for="(item,index) in Ingredients" :key="index" dark bordered class="bg-white my-card row  " style=" border-radius: 20px; height:100%;">
            <div class="col-3 q-pl-xs q-py-xs flex flex-center">
              <q-img style="width: 58.98px; height: 58.07px;  border-radius: 15px;" rounded class="rounded-borders img1  " :src="item.src" />
            </div>
            <q-separator vertical dark inset />
            <div class="col q-pa-xs q-gutter-xs">
              <div class="row q-pt-md">
                <div style="height: 100%; font-size: 16px; font-weight: 400; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);" class="col-8">{{item.name }} </div>
                <div style="height: 100%; font-size: 16px; font-weight: 400; line-height: 26px; font-family: 'EB Garamond'; color: rgb(0, 0, 0);" class="col-4">Quantity: {{item.quantity}}</div>
              </div>
            </div>
            <div class="col-3 q-pt-md">
              <div class="row items-center  relative-position">
                <q-icon name="edit" size="26px" style="color:black;" class="col" @click="alert = true, ref = item.ref, id = item.id" />
                <q-dialog v-model="alert" >
                  <q-card class="bg-secondary text-white" style="width: 300px">
                    <q-card-section>
                      <div class="text-h6">Modificated ingredient</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                      <div class="col">
                        <q-input
                        v-model="valuename"
                        rounded
                        outlined
                        label="Ingredients"
                        class="q-pa-md row"
                        bg-color="grey-3"
                        >
                          <template v-slot:prepend>
                            <q-icon name="camera" />
                          </template>
                          <!-- <template  style="height: 56.43px; width:75px; border-radius: 15px; " v-slot:append>
                            <q-btn
                              flat
                              round
                              label="Add"
                              color="secondary"
                              style="height: 56.43px; width:75px; border-radius: 15px; "
                            />
                          </template> -->
                        </q-input>
                        <q-input
                        v-model="valuequantity"
                        rounded
                        outlined
                        label="Ingredients"
                        class="q-pa-md row"
                        bg-color="grey-3"
                        />
                      </div>
                    </q-card-section>
                    <q-card-actions align="right" class="bg-white text-secondary">
                      <q-btn flat @click="Modify(ref,id)" label="Edit" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
                <q-icon name="delete" @click="Delete(item.ref, item.id)" size="26px" style="color:black;" class="col"/>
              </div>
            </div>
          </q-card>
        </div>
        <div class="row">
          <q-input
          v-model="addvaluename"
          rounded
          outlined
          label="add Ingredients"
          class="q-pa-md col"
          bg-color="grey-3"
          >
            <template v-slot:prepend>
              <q-icon name="camera" />
            </template>
          </q-input>
          <q-input
          v-model="addvaluequantity"
          rounded
          outlined
          label="Add Quantity"
          class="q-pa-md col"
          bg-color="grey-3"
          />
          <q-btn
            flat
            round
            label="Add"
            class="col q-pa-md"
            color="secondary"
            style="height: 86.43px; width:75px; border-radius: 15px; "
            @click="Add(addvaluename,addvaluequantity)"
          />
        </div>
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
    const morphGroupModel = ref('0')
    return {
      id:ref(''),
      Ingredients: [],
      idRecipe: parseInt(this.$route.params.id.replace(":","")),
      ref: ref(''),
      search: ref(""),
      addvaluename: ref(""),
      addvaluequantity: ref(""),
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      step: ref(1),
      slide: ref(1),
      autoplay: ref(false),
      secondModel: ref('one'),
      valuename: ref(''),
      valuequantity:ref(0),
      alert: ref(false),
    }
  },
  // computed:{
  //     len(){
  //     var a
  //      db.collection('Ingredients').get().then(len => {
  //       a = len.length
  //     })
  //     return a
  //   }
  // },
  mounted(){
    this.detail()
   },
  methods:{
    detail(){
      db.collection('Ingredients').get().then(Recipes =>{
        this.Ingredients = Recipes.filter(recipe => recipe.id ==  parseInt(this.$route.params.id.replace(":","")));
      })
    },
    async Modify(ref,id){
      await db.collection('Ingredients')
      .doc({ ref:ref, id:id })
      .update({
      name: this.valuename,
      quantity: this.valuequantity,
      })
      this.detail()
    },
   async Delete(ref,id){
      await db.collection('Ingredients').doc({ ref: ref, id:id }).delete()
      this.detail()
    },
    async Add(name, quantity){
      var a
      await db.collection('Ingredients').get().then(len =>{
        a = len.length
      })
      await db.collection('Ingredients').add({
        ref: a ,
        name: name,
        quantity: quantity,
        id:this.$route.params.id.replace(":",""),
        src:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
      })
      this.detail()
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
#img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
#my-custom-toggle{
  border: 1px solid #64c3be;
}
</style>

