import { createStore } from "vuex" 

const store = createStore({
  state: {
    menu: [
      {
        name: "Услуги",
        url: "uslugi"
      },
      {
        name: "Почему мы?",
        url: "whyus"
      },
      {
        name: "Информация",
        url: "about_expertise"
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
