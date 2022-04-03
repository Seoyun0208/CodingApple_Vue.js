<template>
    <div class="discount">
        <p>지금 결제하면 {{ decreaseDiscount }}% 할인!</p>
    </div>
</template>

<script>
export default {
    name: 'Discount',
	props: {
		decreaseDiscount: Number,
	},
}
</script>

<style>
.discount p {
	background: #eee;
	margin:  0 30px;
	padding: 20px 0;
	border-radius: 5px;
	font-size: 18px;
	font-weight: bold;
}
</style>