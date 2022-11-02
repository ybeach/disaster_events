<script setup lang="ts">
const router = useRouter();
const query = ref('');

const route = useRoute();
const props = defineProps({
	ql: String,
});

//console.log(props.ql == "", props.ql.length>0);

const ql:string = props.ql == "" ? getCurrentKeyword() : props.ql;

function getCurrentKeyword(){
	return "キーワード  （例：「雨」、「雷」）";
}

function getPlaceHolder(){
	return "キーワード  （例：「雨」、「雷」）";
}

// 検索できるか判定
// キーワードがある且つ、空白じゃない時にTrueを返す
function canSubmit() {
	return !!query.value && !/^\s+$/.test(query.value)
}

// 検索表示ページに遷移する
function submit() {
	if (canSubmit()) {
		return navigateTo({
			path: '/',
			query: {
				q: query.value
			}
		})
	}
}

</script>
	
<template>
	<div>
		<form class="search-form" @submit.prevent="submit">
			<!--
			<input v-if="props.ql.length >0"  type="text" v-model="query" ref="searchForm" />
			<input v-else type="text" v-model="query" ref="searchForm" v-bind:placeholder=getPlaceHolder() />
			-->
			<input type="text" v-model="query" ref="searchForm" v-bind:placeholder=getPlaceHolder() />
			<button class="search-btn" type="submit">検索</button>
		</form>
	</div>
</template>


<style scoped>
form {
	display: flex;
}

input[type=text] {
	font-size: 14px;
	padding: 4px 8px;
	box-sizing: border-box;
	border-radius: 10px;
	border: solid 1px #ccc;
	background-color: #fff;
	font-family: "Ubuntu", "Noto Sans JP", sans-serif;
	display: inline-block;
	width: 400px;
	height: 30px;
}

input[type=text]:focus {
	outline: 0;
	box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

button {
	font-size: 1.2rem;
	/*-webkit-appearance: none;*/
	padding: 4px 8px;
	border-radius: 4px;
	background-color: #fff;
	border: solid 1px #ccc;
	vertical-align: bottom;
	font-family: "Ubuntu", "Noto Sans JP", sans-serif;
	cursor: pointer;
	color:rgba(9, 20, 37, 0.577);
	width: 48px;
}
</style>
	