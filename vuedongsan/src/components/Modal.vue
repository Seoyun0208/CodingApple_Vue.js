<template>
	<div class="black-bg" v-if="openModal == true" @click="close($event)" >
		<div class="white-bg">
			<img :src="rooms[clickedRoom].image" class="detail-room-image">
			<h4>{{ rooms[clickedRoom].title }}</h4>
			<p>{{ rooms[clickedRoom].content }}</p>
			<!-- <input @input="months = $event.target.value"> -->
			<!-- <select v-model="months">
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select> -->
			<input @input="changeKeyword" :value="months">
			<p>{{months}}개월 선택: {{ rooms[clickedRoom].price * months }}원</p>
			<button class="close">닫기</button>
		</div>
	</div>
</template>

<script>
export default {
    name: 'Modal',
	data(){
		return {
			months : "",
		}
	},
	watch: {
		months(input){
			if (isNaN(input) === true){
				alert('숫자만 입력하세요.');
				this.months = "";
			}
			if (input > 36){
				alert('최대 36개월까지 선택 가능합니다.');
				this.months = 36;
			} else if (input < 1) {
				alert('최소 1개월부터 선택 가능합니다.');
				this.months = "";
			}
		}
	},
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
        },
		changeKeyword(e){
			this.months = e.target.value;
		},
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