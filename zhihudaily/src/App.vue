<template>
    <div class='daily'>
        <div class="daily-menu">
            <div class="daily-menu-item"
                :class="{ on: type === 'recommend' }">每日推荐</div>
            <div class="daily-menu-item"
                :class="{ on: type === 'daily' }"
                @click="showThemes = !showThemes">主题日报</div>
            <ul v-show="showThemes">
                <li v-for="item in themes">
                    <a :class="{ on: item.id === themeId && type === 'daily' }"
                        @click="handleToTheme(item.id)">{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class="daily-list">
            <Item></Item>
        </div>
        <daily-article></daily-article>
    </div>
</template>
<script>
import $ from './assets/util';
export default {
    data () {
        return {
            themes: [],
            showThemes: false,
            type: 'recommend',
            list: [],
            themeId: 0
        }
    },
    methods: {
        getThemes () {
            // axios发起get请求
            $.ajax.get('themes').then( res=> {
                this.themes = res.others;
            })
        },
        handleToTheme(id) {
            // 改变菜单分类
            this.type = 'daily';
            // 设置当前点击子类的主题日报id
            this.themeId = id;
            // 清空中间栏数据
            this.list = [];
            $.ajax.get('theme/' + id).then(res => {
                // 过滤掉类型为1的文章，该类型下的文章为空
                this.list = res.stories
                    .filter(item => item.type !== 1);
            })
        }
    },
    mounted() {
        // 初始化时调用
        this.getThemes();
    },
}
</script>