import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import localbase from 'localbase';
let db = new localbase('db')

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      Recipes: [
        {
          id: 0,
          author: "john Doe",
          title: "Artichoke Pasta",
          src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
          src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png',
          Ingredients:[
            {
              ref:9,
              name: "tablespoons butter",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "2"
              },
            {
              ref:1,
              name: "cloves garlic, minced",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "2"
              },
            {
              ref:2,
              name: "cup heavy cream",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "1"
              },
            {
              ref:3,
              name: "teaspoon salt",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "3/4"
              },
            {
              ref:4,
              name: "teaspoon fresh-ground black pepper",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "1"
              },
            {
              ref:5,
              name: "cups canned, drained artichoke hearts (two 14-ounce cans), rinsed and cut into halves or quarters",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "2 1/2"
              },
            {
              ref:6,
              name: "pound fusilli",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "3/4"
              },
            {
              ref:7,
              name: "cup grated Parmesan cheese",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "1/2"
              },
            {
              ref:8,
              name: "tablespoons chopped chives, scallion tops, or parsley",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              quantity: "2"
              },
            ],
          directions:[
            {
              ref:2,
              name:"In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.",
              time:"3",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',

            },
            {
              ref:1,
              name:"In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives.",
              time:"13",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',

            },
          ]
        },
        {
          id: 1,
          author: "john Doe",
          title: "Garlic Chicken",
          src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
          src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png',
          Ingredients:[
            {
              ref:4,
              name: "tablespoons butter",
              quantity: "3",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
            {
              ref:1,
              name: "teaspoon seasoning salt",
              quantity: "1",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
            {
              ref:2,
              name: "teaspoon onion powder",
              quantity: "1",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
            {
              ref:3,
              name: "teaspoons garlic powder",
              quantity: "2",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
            ],
          directions:[
             {
              ref:3,
              name:"Melt butter in a large skillet over medium high heat.",
              time:"5",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
            },
            {
              ref:1,
              name:"Add chicken and sprinkle with garlic powder, seasoning salt and onion powder.",
              time:"3",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
            },
            {
              ref:2,
              name:"Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear.",
              time:"8",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
            },
          ]
        },
        {
          id: 2,
          author: "john Doe",
          title: "Easy Chocolate Pie",
          src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
          src_arrow: 'https://cdn0.iconfinder.com/data/icons/huge-black-icons/512/Forward.png',
          Ingredients:[
            {
              ref:1,
              name: "can evaporated milk",
              quantity: "1 (12 ounce)",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
            {
              ref:2,
              name: "package chocolate instant pudding mix",
              quantity: "1 (5.9 ounce)",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
            {
              ref:3,
              name: "can whipped cream",
              quantity: "1 (6.5 ounce)",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
            {
              ref:4,
              name: "cup miniature semi-sweet chocolate chips (optional)",
              quantity: "1/2",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              },
              {
                ref:5,
                name: "graham cracker pie crust",
                quantity: "1 (9 inch) ",
                src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                },
                {
                  ref:6,
                  name: "Another can of whipped cream for garnish (optional)",
                  quantity: "1",
                  src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                  },
            ],
          directions:[
             {
              ref:1,
              name:"Pour milk into medium bowl. Add dry pudding mix; beat with wire whisk until well blended and mixture just begins to thicken. Stir in half of the chocolate chips.",
              time:"5",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
            },
            {
              ref:2,
              name:"Add contents of whipped cream can; stir gently but quickly until well blended. Pour into crust; cover.",
              time:"3",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
            },
            {
              ref:3,
              name:"Refrigerate 6 hours, or until set. Cut into 8 slices to serve. Garnish with additional whipped cream and remaining chocolate chips, if desired.",
              time:"8",
              src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fGZvb2R8ZW58MHwwfHx8MTY2MjA0Njc0OQ&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
            },
          ]
        },
      ],
    },
    getters: {
      //retrieve all data
      getRecipes: (state) => {
        console.log("you",state.Recipes );
        return state.Recipes;
      },
      //retrieve by ID
      getRecipeById: (state) => (id) => {
          return state.Recipes.find(recipe => recipe.id === id);
        }
    },
    mutations: {
      ModifyIngredient(state, payload) {
        state.Recipes[payload.idRecipe].Ingredients[payload.idIngredient].name=payload.name;
        state.Recipes[payload.idRecipe].Ingredients[payload.idIngredient].quantity=payload.quantity;
      },
      DeleteIngredient(state, payload) {
        state.Recipes[payload.idRecipe].Ingredients[payload.idIngredient];
      }
    },
    actions: {
      updateIngredient({state, commit}, payload){
         commit("ModifyIngredient", payload)
      },
      deleteIngredient({state, commit}, payload){
        commit("DeleteIngredient", payload)
     }
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
