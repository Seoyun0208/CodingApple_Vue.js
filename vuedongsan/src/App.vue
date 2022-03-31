<template>

	<!-- <div class="navbar">
		<a>Home</a>
		<a>Rooms</a>
		<a>About</a>
	</div> -->

	<div class="navbar">
		<a v-for="(menu, i) in navbar" :key="i">{{ menu }}</a>
	</div>


	<div>
		<h4 :style="blue">{{rooms[0]}}</h4>
		<p style="color: red">{{ price1 }}만원</p>
	</div>
	<div>
		<h4>{{rooms[1]}}</h4>
		<p>{{ price2 }}만원</p>
	</div>
	<div>
		<h4>{{rooms[2]}}</h4>
		<p>{{ price3 }}만원</p>
	</div>

</template>

<script>

export default {
	name: "App",
	data(){
		return {
			navbar : ['Home', 'Rooms', 'About'],
			price1 : 55,
			price2 : 43,
			price3 : 38,
			blue : 'color : blue',
			rooms : ['둔산동 원룸', '갈마동 원룸', '괴정동 원룸'],
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
}

.navbar {
	padding: 15px 0;
	background: #6667AB;
	color: white;
	font-size: 20px;
	border-radius: 5px;
}

.navbar a {
	padding: 5px 10px;
	margin : 0 10px;
}

.navbar a:hover {
	background: white;
	cursor: pointer;
	border-radius: 5px;
	color: #6667AB;
	transition: all 1s;
}

</style>
