<template>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
          <p class="logo">[Vuelog] seoyun-is-connecting-the-dots</p>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link">List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <router-link to="/">홈</router-link>
  <router-link to="/list">리스트</router-link> -->

  <router-view :posts="posts"></router-view>

  <!-- Main -->
  <!-- <div class="container">
    <p class="main-title">배움에서 가치를 찾는 예비 개발자입니다.</p>
    <p>- 이 블로그는 Vue 를 사용하여 만들어졌습니다. -</p>
  </div> -->

  <!-- List -->
  <!-- <List :posts="posts" /> -->

</template>

<script>
import blog from './assets/blog'

export default {
  name: 'App',
  data(){
    return {
      posts : blog,
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Nanumsquare, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar */
.logo {
  font-weight: bold;
  font-size: 22px;
  margin: 0;
}

.router-link-active {
  text-decoration: none;
  color: inherit;
}

.router-link-active:hover {
  color: inherit;
}
</style>
