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

		<NuxtLink v-if="current > 1" :to="getPath(1)"><button>&lt;&lt;<span class="tooltip">先頭へ</span></button></NuxtLink>
		<NuxtLink v-if="current > 1" :to="getPath(current - 1)"><button>&lt;<span class="tooltip">前へ</span></button>
		</NuxtLink>
		ページ {{ current }}/{{ numPages }}
		<NuxtLink v-if="current < numPages" :to="getPath(current + 1)"><button>&gt;<span class="tooltip">次へ</span></button>
		</NuxtLink>
		<NuxtLink v-if="current < numPages" :to="getPath(numPages)"><button>&gt;&gt;<span
					class="tooltip">最後へ</span></button></NuxtLink>

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

a {
	color: #0f0101ee;
	text-decoration: none;
}

button {
	width: 3rem;
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
	border-radius: 0.5rem;
	background-color: #ffffffee;
}

button:hover {
	border: 1px solid #7f7c7cee;
	background-color: #edf0ecee;
	bottom: 100%;
	visibility: visible;
	opacity: 1;
}

.tooltip {
	/* 補足説明するテキストのスタイル */
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
	