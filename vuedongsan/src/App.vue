<template>

	<div class="navbar">
		<a v-for="(menu, i) in navbar" :key="i">{{ menu }}</a>
	</div>

	<!-- <div v-for="(room, i) in rooms" :key="i">
		<h4>{{ room }}</h4>
		<p>만원</p>
	</div> -->

	<div>
		<h4>{{rooms[0]}}</h4>
		<p>{{ prices[0] }}만원</p>
		<button @click="increase(0)">허위매물신고</button> <span>신고 수: {{ report[0] }}</span>
	</div>
	<div>
		<h4>{{rooms[1]}}</h4>
		<p>{{ prices[1] }}만원</p>
		<button @click="increase(1)">허위매물신고</button> <span>신고 수: {{ report[1] }}</span>
	</div>
	<div>
		<h4>{{rooms[2]}}</h4>
		<p>{{ prices[2] }}만원</p>
		<button @click="increase(2)">허위매물신고</button> <span>신고 수: {{ report[2] }}</span>
	</div>


</template>

<script>

export default {
	name: "App",
	data(){
		return {
			navbar : ['Home', 'Rooms', 'About'],
			rooms : ['둔산동 원룸', '갈마동 원룸', '괴정동 원룸'],
			prices : [55, 43, 38],
			report : [0, 0, 0],
		}
	},
	methods: {
		increase(i){
			this.report[i]++;
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
