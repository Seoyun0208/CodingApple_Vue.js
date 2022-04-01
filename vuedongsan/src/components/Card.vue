<template>
	<div class="card">
		<img :src="room.image" class="room-image">
		<h4 class="room-name" @click="$emit('openModal', room.id)">{{ room.title }}</h4>
		<p>{{ room.price }}원</p>
		<span>신고 수: {{ report[room.id] }}</span> <button class="report" @click="increase(room.id)">허위매물신고</button>
	</div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        room: Object,
        report: Array,
    },
    methods: {
        increase: function(i){
            this.$parent.increase(i);
        }
    }
}
</script>

<style>
.card {
	padding: 0 0 40px 0;
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