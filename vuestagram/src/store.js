// import axios from 'axios';
import { createStore } from 'vuex'
import posts from './assets/posts';

// ! 저장된 state 는 $store.state.state이름 으로 가져올 수 있음!

const store = createStore({
  state(){
    return {
      // name: "Bak Seoyun",
      // age: 30,
      posts: 0,
      likes: posts.map(post => post.likes),
      liked: posts.map(post => post.liked),
      heart: posts.map(post => post.liked ? "💖" : ""),
      more: {},
    }
  },
  mutations: {
    changeLikes(state, idx){
      if(state.liked[idx] === false){
        state.likes[idx]++;
        state.heart[idx] = "💖"
        state.liked[idx] = true;
      } else if(state.liked[idx] === true){
        state.likes[idx]--;
        state.heart[idx] = ""
        state.liked[idx] = false;
      }
    },
    changePosts(state, posts){
      state.posts = posts;
      state.likes = posts.map(post => post.likes);
      state.liked = posts.map(post => post.liked);
      state.heart = posts.map(post => post.liked ? "💖" : "");
    },
    // setMore(state, data){
    //   state.more = data;
    // },
  },
  actions: {
    // getData(context){
    //   axios.get(`https://codingapple1.github.io/vue/more0.json`).then((result)=>{
    //     console.log(result.data);
    //     context.commit('setMore', result.data);
    //   })
    // },
  },
})

export default store;