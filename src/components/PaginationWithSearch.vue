<!-- client/components/PaginationWithSearch.vue -->
<script setup lang="ts">

const route = useRoute();
const props = defineProps({
	numPages: Number,
	current: Number,
	q: String,
	limit: Number,
})

function getPath(p: number) {
	const u = "/?" + (props.q.length > 0 ? "q=" + props.q + "&" : "") + "page=" + p + "&limit=" + props.limit;
	return u;
	//return `/?q=${props.q}&page=${p}`;
}

watch(() => route.query, () => location.reload())
</script>
	
<template>
	<div class="paging">
		<!--
		<a :href="`?page=${prevPage}`" class="prev" v-if="current > 1" @click.prevent="onPrev">&lt; 前へ</a>
		-->
		<div class="total">
			<NuxtLink v-if="current > 1" :to="getPath(1)">&lt;&lt;</NuxtLink>
			<NuxtLink v-if="current > 1" :to="getPath(current - 1)">&lt;</NuxtLink>
			ページ {{current}}/{{numPages}}
			<NuxtLink v-if="current < numPages" :to="getPath(current + 1)">&gt;</NuxtLink>
			<NuxtLink v-if="current < numPages" :to="getPath(numPages)">&gt;&gt;</NuxtLink>
		</div>
		<!--
		<a :href="`?page=${nextPage}`" class="next" v-if="current < numPages" @click.prevent="onNext">次へ &gt;</a>
				-->
	</div>

	<!--
	<div class="pagination">
		<NuxtLink v-for="num in numPages" :key="num" :class="[num == current ? 'current' : 'link']" :to="getPath(num)">
			{{ num }}
		</NuxtLink>
		<router-view />
	</div>
-->
</template>
	
<style scoped>
	a{
		margin: 0px 10px auto;
	}
.paging {
	width: 100%;
	margin: 4rem 0 4rem;
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	line-height: 1.1;
	text-align: center;
	display: inline-block;
}

.pagination {
	position: relative;
	width: 100%;
	margin: 4rem 0 4rem;
	font-family: 'Open Sans', sans-serif;
	font-weight: 300;
	line-height: 1.1;
	text-align: center;
	vertical-align: middle;
}

.current,
.link {
	display: inline-block;
	margin: 0 2rem;
	padding: 2px 0;
	text-align: center;
	font-size: 2rem;
	font-weight: lighter;
}

.current {
	color: #000;
}

.link {
	color: #A2A2A6;
}
</style>
	