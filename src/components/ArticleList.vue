<script setup lang="ts">
const lists = defineProps({
	lists: Object,
	total: Number,
	keyword: String,
});
</script>

<template>
	<div class="sr"> ヒット：{{lists.total}} 件
		<span v-if="keyword.length > 0">, キーワード:{{keyword}}</span>
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
				<td class="oneline">{{list.id}}</td>
				<td class="oneline">{{list.wareki}}</td>
				<td class="oneline">{{list.gregorian}}</td>
				<td class="oneline">{{list.area}}</td>
				<td>{{list.text}}</td>
				<td>{{list.source}}</td>
				<td>{{list.book}}</td>
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
</style>