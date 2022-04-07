import { createStore } from 'vuex'
import posts from './assets/posts';

// ! 저장된 state 는 $store.state.state이름 으로 가져올 수 있음!

const store = createStore({
  state(){
    return {
      posts: 0,
      likes: posts.map(post => post.likes),
      liked: posts.map(post => post.liked),
    }
  },
  mutations: {
    changeLikes(state, idx){
      if(state.liked[idx] === false){
        state.likes[idx]++;
        state.liked[idx] = true;
      } else if(state.liked[idx] === true){
        state.likes[idx]--;
        state.liked[idx] = false;
      }
    },
    changePosts(state, posts){
      state.posts = posts;
      state.likes = posts.map(post => post.likes);
      state.liked = posts.map(post => post.liked);
    },
  },
})

export default store;