<template>

  <div class="container mt-4">
    <h4>상세 페이지</h4>
    <h5>{{posts[$route.params.id].title}}</h5>
    <p>{{posts[$route.params.id].content}}</p>
    <p>{{posts[$route.params.id].date}}</p>

    <button class="goback" @click="$router.go(-1)">뒤로가기</button>
  </div>

  <router-view></router-view>
  
</template>

<script>
export default {
    name: 'Detail',
    data(){
        return{
        }
    },
    props: {
        posts: Array,
    },
}
</script>

<style>
.goback {
  border: none;
  background: #eee;
  padding: 5px 15px;
  border-radius: 5px;
  transition: all 0.5s;
}

.goback:hover {
  color: white;
  background: darkgrey;
}
</style>