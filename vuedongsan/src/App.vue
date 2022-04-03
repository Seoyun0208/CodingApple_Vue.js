<template>
	<!-- <div class="start" :class="{ end : openModal }">
		<Modal @closeModal="openModal = close($event)" :openModal="openModal" :clickedRoom="clickedRoom" :rooms="rooms"/>
	</div> -->

	<transition name="fade">
		<Modal @closeModal="openModal = close($event)" :openModal="openModal" :clickedRoom="clickedRoom" :rooms="rooms"/>
	</transition>
	<div class="navbar">
		<a v-for="(menu, i) in navbar" :key="i">{{ menu }}</a>
	</div>

	<Discount/>

	<Card @openModal="openModal = true; clickedRoom = $event" :room="rooms[i]" :report="report"  v-for="(room, i) in rooms" :key="i"/>
	
</template>

<script>
import roomData from './assets/data'
import Modal from './components/Modal.vue'
import Discount from './components/Discount.vue'
import Card from './components/Card.vue'

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
			let target = event.target.classList.value;
			if (target === 'black-bg' || target === 'close') {
				return false;
			} else {
				return true;
			}
		}
	},
	components: {
		Modal: Modal,
		Discount: Discount,
		Card: Card,
	},
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


/* .start {
	opacity: 0;
	transition: all 1s;
}

.end {
	opacity: 1;
} */

.fade-enter-from {
	opacity: 0;
	transform: translateY(-100vh);
}

.fade-enter-active {
	transition: all 0.5s;
}

.fade-enter-to {
	transform: translateY(0vh);
	opacity: 1;
}

.fade-leave-from {
	transform: translateY(0vh);
	opacity: 1;
}

.fade-leave-active {
	transition: all 0.5s;
}

.fade-leave-to {
	transform: translateY(100vh);
	opacity: 0;
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

</style>
