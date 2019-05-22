<template>
    <div class="daily-article">
        <div class="daily-article-title">{{ data.title }}</div>
        <div class="daily-article-content" v-html="data.body"></div>
    </div>
</template>

<script>
import $ from '../assets/util';

export default {
    props: {
        id: {
            type: number,
            default: 0
        }
    },
    data() {
        return {}
    },
    methods: {
        getArticle() {
            $.ajax.get('news/' + this.id).then(res => {
                // 将文章中图片地址替换为代理地址
                res.body = res.body
                    .replace(/src="http"/g, 'src="' + $.imgPath + 'http');
                res.body = res.body
                    .replace(/src="https"/g, 'src="' + $.imgPath + 'https');
                this.data = res;
                // 返回文章顶端
                window.scrollTo(0, 0);
            })
        }
    },
    watch: {
        id(val) {
            if (val) this.getArticle();
        }
    },
}
</script>