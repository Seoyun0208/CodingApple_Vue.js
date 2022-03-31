<template>
	<div>
		<h4 :style="blue">{{locations[0]}}</h4>
		<p style="color: red">{{ price1 }}만원</p>
	</div>
	<div>
		<h4>{{locations[1]}}</h4>
		<p>{{ price2 }}만원</p>
	</div>
	<div>
		<h4>{{locations[2]}}</h4>
		<p>{{ price3 }}만원</p>
	</div>
</template>

<script>
export default {
	name: "App",
	data(){
		return {
			price1 : 55,
			price2 : 43,
			price3 : 38,
			blue : 'color : blue',
			locations : ['둔산동 원룸', '갈마동 원룸', '괴정동 원룸'],
		}
	},
	components: {},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
