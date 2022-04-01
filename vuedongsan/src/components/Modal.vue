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
</template>

<script>
export default {
    name: 'Modal',
    props: {
        openModal:Boolean,
        clickedRoom: Number,
        rooms: Array,
    },
    methods: {
        increase: function(i){
            this.$parent.increase(i);
        },
        close: function(event){
            this.$parent.close(event);
        }
    }
}
</script>

<style>
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
</style>