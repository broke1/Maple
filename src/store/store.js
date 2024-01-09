import { createStore } from "vuex" 

const store = createStore({
  state: {
    menu: [
      {
        name: "О нас",
        url: "aboutus"
      },
      {
        name: "Услуги",
        url: "uslugi"
      },
      {
        name: "Работы",
        url: "portfolio"
      },
      {
        name: "Отзывы",
        url: "reviews"
      },
      {
        name: "Контакты",
        url: "contacts"
      },
    ],
    
  },
  mutations: {
  },
  actions: {
  },
  getters: {
      
  }
})

export default store
