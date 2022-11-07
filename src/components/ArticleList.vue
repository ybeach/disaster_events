<script setup lang="ts">
const lists = defineProps({
	lists: Object,
	total: Number,
	keyword: String,
});
</script>

<template>
	<div class="sr"> ヒット：{{ lists.total }} 件
		<span v-if="keyword.length > 0">, キーワード:{{ keyword }}
			<NuxtLink :to='`/`'><button>×<span class="tooltip">キーワードをクリア</span></button></NuxtLink>
		</span>
	</div>
	<div v-if="lists.total > 0">
		<table>
			<tr>
				<th class="oneline">ID</th>
				<th class="oneline">和暦</th>
				<th class="oneline">グレゴリオ暦</th>
				<th class="oneline">地域</th>
				<th>天変地異などの記事</th>
				<th>原出典</th>
				<th>掲載書誌</th>
			</tr>
			<tr v-for="list in lists.lists" :key="list.id">
				<td class="oneline">{{ list.id }}</td>
				<td class="oneline">{{ list.wareki }}</td>
				<td class="oneline">{{ list.gregorian }}</td>
				<td class="oneline">{{ list.area }}</td>
				<td>{{ list.text }}</td>
				<td>{{ list.source }}</td>
				<td>{{ list.book }}</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
table {
	border-spacing: 10px 10px;
}

th,
td {
	padding: 5px 5px;
	text-align: left;
}

th {
	white-space: nowrap;
}

.sr {
	margin: 15px auto;
}

.oneline {
	white-space: nowrap;
}

tr {
	border-top: 1px #b0a3a3 solid;
	border-bottom: 1px #b0a3a3 solid;
}

a {
	color: #0f0101ee;
	text-decoration: none;
}

button {
	width: 2rem;
	height: 2rem;
	text-align: center;

	font-size: 1.0rem;
	font-weight: 100;
	line-height: 1.5;
	position: relative;
	display: inline-block;

	border: 1px solid #ffffffee;

	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	text-align: center;
	vertical-align: middle;
	text-decoration: none;
	letter-spacing: 0.1em;
	background-color: #ffffff;
	border-radius: 50%;
}

button:hover{
	border: 1px solid #7f7c7cee;
	background-color:#edf0ecee;
	bottom: 100%;
	visibility: visible;
	opacity: 1;
}

.tooltip {
	width: 6rem;
	position: absolute;
	left: 50%;
	bottom: 80%;
	transform: translateX(-50%);
	margin-bottom: 8px;
	padding: 8px;
	border-radius: 10px;
	background-color: #666;
	font-size: 0.7em;
	color: #fff;
	text-align: center;
	visibility: hidden;
	opacity: 0;
	z-index: 1;
	transition: 0.5s all;
}

button:hover .tooltip {
	bottom: 100%;
	visibility: visible;
	opacity: 1;
}
</style>