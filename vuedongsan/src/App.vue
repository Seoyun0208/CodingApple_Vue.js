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

	<Discount v-if="showDiscount == true" :decreaseDiscount="decreaseDiscount"/>

	<button class="btn" @click="titleSort()">가나다순정렬</button>
	<button class="btn" @click="priceSort()">가격순정렬</button>
	<button class="btn" @click="priceReverseSort()">가격역순정렬</button>
	<button class="btn" @click="under50priceFilter()">50만원이하</button>
	<button class="btn" @click="sortBack()">원래대로</button>

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
			roomsOriginal : roomData,
			report : [...roomData].fill(0),
			rooms : [...roomData],
			showDiscount : true,
			decreaseDiscount : 30,
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
		},
		titleSort(){
			this.rooms = [...this.roomsOriginal].sort((a,b) => {
				if (a.title > b.title) return 1;
				if (a.title < b.title) return -1;
				return 0;
			})
		},
		priceSort(){
			this.rooms = [...this.roomsOriginal].sort((a,b) => a.price - b.price)
		},
		priceReverseSort(){
			this.rooms = [...this.roomsOriginal].sort((a,b) => b.price - a.price)
		},
		under50priceFilter(){
			this.rooms = [...this.roomsOriginal].filter((room) =>  room.price <= 500000)
		},
		sortBack(){
			this.rooms = [...this.roomsOriginal];
		}
	},

	mounted(){
		setInterval(() => {
			if (this.decreaseDiscount > 1){
				this.decreaseDiscount--;
			} else if (this.decreaseDiscount == 1){
				this.showDiscount = false;
				clearInterval();
			}
		}, 1000);
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
	font-family: Nanumsquare, Avenir, Helvetica, Arial, sans-serif;
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

.btn {
	border: none;
	border-radius: 5px;
	padding: 5px 15px;
	margin: 20px 5px 0 5px;
	color: #6667AB;
	background: transparent;	
	font-size: 16px;
	font-weight: bold;
}

.btn:hover {
	background: #6667AB;
	color: white;
}

.btn:focus {
	color: red;
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
