<template>
  <div class="item" @click="fire">
    <div class="slot">
      <slot></slot>
    </div>
    <div
      class="filter-item"
      :class="filter"
      :style="`background-image: url(${imgUrl})`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  data() {
    return {};
  },
  props: {
    imgUrl: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit("filterName", this.filter);
    },
  },
};
</script>

<style>
.item {
  display: inline-block;
  margin: 10px 10px 10px auto;
  padding: 8px;
  background: #eee;
}

.slot {
  text-align: center;
  padding-bottom: 5px;
  margin: 3px;
}

.filter-item {
  width: 100px;
  height: 100px;
  background-size: cover;
  background-position: center;
}
</style>