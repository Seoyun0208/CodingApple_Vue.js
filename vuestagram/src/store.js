import { createStore } from 'vuex'

// ! 저장된 state 는 $store.state.state이름 으로 가져올 수 있음!

const store = createStore({
  state(){
    return {
      name: 'Seoyun',
    }
  },
})

export default store;