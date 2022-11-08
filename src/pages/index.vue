<script setup lang="ts">
import { Ref } from 'vue';

const route = useRoute();
const qp = Number(route.query.page);
const page: number = route.query.page == undefined || qp < 1 ? 1 : qp;
const ql = Number(route.query.limit);
const limit: number = route.query.limit == undefined || ql < 5 ? 30 : ql;
//const offset: number = 0;
const q: string = route.query.q == undefined ? "" : route.query.q;
const params: object = { limit: limit, page: page, q: q };

//console.log(limit, page, "q=" +q);
//console.log(route.query);

const { data: articles } = await useFetch('/api/list', { params: params });

// ページ数の計算
const totalCount: number = articles.value.total;
const numPages: number = Math.ceil(articles.value.total / limit);

watch(() => route.query, () => location.reload());
</script>

<template>
	<div>
		<div class="divider">
			<div class="aside">
				<!-- キーワード検索 -->
				<SearchForm :ql="q" />
			</div>
			<div class="container">
				<!-- 記事一覧 -->
				<ArticleList :lists="articles.resd" :total="totalCount" :keyword="q" />
			</div>
		</div>
		<!-- 追加 -->
		<PaginationWithSearch :numPages="numPages" :current="page" :q="q" :limit="limit" />
	</div>
</template> 

<style scoped>
@media (min-width: 906px) {
	.divider {
		/*display: flex;*/
		justify-content: space-between;
		width: 906px;
		margin: 20px auto;
		padding-top: 84px;
	}

	.container {
		width: 906px;
	}

	.aside {
		margin: 20px auto;
		width: 906px;
	}
}

@media (min-width: 820px) and (max-width: 906px) {
	.divider {
		margin: 20px auto 0;
		width: 740px;
		padding-top: 112px;
	}

	.aside {
		margin-top: 60px;
	}
}

@media (max-width: 820px) {
	.divider {
		margin: 20px 0 0;
		padding: 0 20px;
		padding-top: 112px;
		width: 100%;
	}

	.aside {
		margin-top: 60px;
		width: 100%;
	}
}
</style>
