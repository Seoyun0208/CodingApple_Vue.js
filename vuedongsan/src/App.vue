<template>

	<div class="black-bg" v-if="openModal == true" @click="close($event)" >
		<div class="white-bg">
			<img :src="rooms[clickedRoom].image" class="detail-room-image">
			<h4>{{ rooms[clickedRoom].title }}</h4>
			<p>{{ rooms[clickedRoom].content }}</p>
			<p>{{ rooms[clickedRoom].price }}원</p>
			<button class="close">닫기</button>
		</div>
	</div>

	<div class="navbar">
		<a v-for="(menu, i) in navbar" :key="i">{{ menu }}</a>
	</div>

	<div class="card" v-for="(room, i) in rooms" :key="i">
		<img :src="room.image" class="room-image">
		<h4  class="room-name" @click="openModal = true; clickedRoom = i">{{ room.title }}</h4>
		<p>{{ room.price }}원</p>
		<span>신고 수: {{ report[room.id] }}</span> <button class="report" @click="increase(room.id)">허위매물신고</button>
	</div>
	
</template>

<script>
import roomData from './assets/data'

export default {
	name: "App",
	data(){
		return {
			openModal : false,
			clickedRoom : 0,
			navbar : ['Home', 'Rooms', 'About'],
			rooms : roomData,
			report : [...roomData].fill(0),
		}
	},
	methods: {
		increase(i){
			this.report[i]++;
		},
		close(event){
			if(event.target.classList.contains('black-bg') || event.target.classList.contains('close')){
				this.openModal = false;
			} else if (event.target.classList.contains('white-bg')){
				this.openModal = true;
			}
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

body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

button:hover {
	cursor: pointer;
}

.black-bg {
	width: 100%; 
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
}

.white-bg {
	width: 90%;
	margin: 80px auto;
	background: white;
	border-radius: 5px;
	padding: 20px 0;
}

.detail-room-image {
	width: 90%;
}

.close {
	border: none;
	background: #6667AB;
	color: white;
	font-weight: bold;
	border-radius: 5px;
	padding: 5px 15px;
}

.close:hover {
	color:white;
	font-weight: bold;
	transform: scale(1.1);
	transition: all 0.5s;
}

.navbar {
	padding: 15px 0;
	background: #6667AB;
	color: white;
	font-size: 20px;
	border-radius: 5px;
	margin-bottom: 10px;
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

.card {
	padding: 20px 0 20px 0;
	margin: 30px;
	border-bottom: 2px dashed #eee;
}

.room-name {
	cursor: pointer;
}

.room-image {
	width: 100%;
}

.report {
	background: red;
	border: none;
	padding: 5px 15px;
	color: white;
	font-weight: bold;
	border-radius: 5px;
	margin: 0 10px;
}

.report:hover {
	background: gold;
	color: red;
	transition: all 0.5s;
	transform: scale(1.05);
}

</style>
