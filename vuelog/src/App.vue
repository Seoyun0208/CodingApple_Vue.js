<template>

<!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <p class="logo">[Vuelog] seoyun-is-connecting-the-dots</p>
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Main -->
  <div class="container">
    <p class="title">배움에서 가치를 찾는 예비 개발자입니다.</p>
    <p>- 이 블로그는 Vue 를 사용하여 만들어졌습니다. -</p>
  </div>
</template>

<script>

export default {
  name: 'App',
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
  color: #484848;
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

/* Main */
.title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  margin: 10px 0 0 0;
}
</style>
