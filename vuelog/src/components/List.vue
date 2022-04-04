<template>
<div class="container mt-4" id="posts">
  <div class="post" v-for="(post,i) in posts" :key="i" @click="$router.push(`/detail/${i}`)">
      <span class="post-title">{{post.title}}</span>
      <span class="post-date">{{post.date}}</span>
  </div>
</div>
</template>

<script>
export default {
    name: 'List',
    data(){
        return {

        }
    },
    props: {
        posts : Array,
    },
}
</script>

<style>
#posts {
    border: 5px solid #eee;
    border-radius: 10px;
    width: 80%;
}

.post {
    border-bottom: 2px dashed #eee;
    padding: 10px;
    text-align: left;
    cursor: pointer;
}

.post-title {
    font-size: 16px;
    font-weight: bold;
    margin: 5px 5px;
}

.post-date {
    font-size: 14px;
    margin: 5px 5px;
}

</style>