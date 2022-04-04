<template>

  <div class="container mt-4">
    <h4>상세 페이지</h4>
    <h5>{{posts[$route.params.id].title}}</h5>
    <p>{{posts[$route.params.id].content}}</p>
    <p>{{posts[$route.params.id].date}}</p>
  </div>
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

</style>