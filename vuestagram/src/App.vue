<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :posts="posts" :step="step" />

  <button class="btn" @click="more" v-if="step === 0">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="tabNum === 0">내용0</div>
  <div v-if="tabNum === 1">내용1</div>
  <div v-if="tabNum === 2">내용2</div>
  <button class="btn" @click="tabNum = 0">버튼0</button>
  <button class="btn" @click="tabNum = 1">버튼1</button>
  <button class="btn" @click="tabNum = 2">버튼2</button> -->
</template>

<script>
import Container from "./components/Container.vue";
import posts from "./assets/posts";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      posts: posts,
      moreCnt: 0,
      // tabNum: 0,
      step: 0,
    };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreCnt}.json`)
        .then((result) => {
          // console.log(result.data);
          this.posts.push(result.data);
          this.moreCnt++;
        })
        .catch(() => {
          console.log("GET 요청을 실패했습니다.");
        });
    },
  },
  components: {
    Container: Container,
  },
};
</script>

<style>
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.btn {
  background: #eee;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  font-weight: bold;
  margin: 5px 10px;
  transition: all 0.5s;
}

.btn:hover {
  cursor: pointer;
  color: white;
  background: rgb(187, 187, 187);
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}
</style>
