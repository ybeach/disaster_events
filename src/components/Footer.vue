<!-- client/components/Footer.vue -->
<template>
	<footer class="footer">
		<div class="wrapper">
			<p class="text">本コンテンツは<a href="https://creativecommons.org/licenses/by/4.0/deed.ja">クリエイティブ・コモンズ　表示 4.0
					国際ライセンス</a>の条件のもとで提供しています。</p>
			<p class="text">東京大学史料編纂所</p>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	background-color: #5ba9f7;
	text-align: center;
	padding: 26px 0;
	width: 100% auto;
	display: flex;
	
}

.wrapper {
	max-width: 1100px;
	margin: 1rem auto;
	padding: 0 4%;
}

.text {
	color: #fff;
	font-size: 1.4rem;
	margin: 0.5rem 0 0.5rem 0;
}
</style>