<template>
    <ul class="garr-menu tui2-menu-container" style="position: fixed;top: 80px">
        <li class="tui2-menu-sub toutiao_tab tui2-menu-sub-active">
            <div class="tui2-menu-sub-title tui2-menu-sub-title-active tui2-menu-sub-title-hide">
                <span class="garr-sub-menu">
                    <i class="tui-iconfont tui-menu-icon tui-iconfont-tab_toutiao" prefix="tui-iconfont"></i>
                    今日头条
                </span>
            </div>
            <ul class="tui2-menu-sub-menu tui2-menu-sub-menu-show">
                <li class="tui2-menu-item tui2-menu-item-active">
                    <a class="active" aria-current="page" href="/">主页</a>
                </li>
                <li class="tui2-menu-item">
                    <a class="active" aria-current="page" href="/graphic/publish">发头条</a>
                </li>
                <li class="tui2-menu-item">
                    <a class="active" aria-current="page" href="/graphic/article">内容管理</a>
                </li>
                <li class="tui2-menu-item">
                    <a class="active" aria-current="page" href="/">收益分析</a>
                </li>
                <li class="tui2-menu-item">
                    <a class="active" aria-current="page" href="/">评论管理</a>
                </li>
                <li class="tui2-menu-item">
                    <a class="active" aria-current="page" href="/">数据分析</a>
                </li>
                <li class="tui2-menu-item"></li>
            </ul>
            <!-- <el-menu>
                <el-menu-tiem>
                    <span slot="title">主页</span>
                </el-menu-tiem>
                <el-menu-tiem>
                    <span slot="title">发头条</span>
                </el-menu-tiem>
                <el-menu-tiem>
                    <span slot="title">内容管理</span>
                </el-menu-tiem>
            </el-menu> -->
        </li>
        <li class="tui2-menu-tab xigua_tab tui2-menu-sub-active">
            
        </li>
        <li class="tui2-menu-tab personal_tab tui2-menu-sub-active">
            
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.tui2-menu-container {
    display: inline-block;
    width: 130px;
    font-size: 16px;
    li {
        list-style: none;
        line-height: 42px;
        cursor: pointer;
    }
    .tui2-menu-sub {
        .tui2-menu-sub-menu {
            overflow: hidden;
            display: none;
        }
        .tui2-menu-sub-menu-show {
            display: block;
        }
        .tui2-menu-sub-title {
            min-height: 42px;
            padding-left: 24px;
        }
        .tui2-menu-sub-title.tui2-menu-sub-title-active, .tui2-menu-sub-title:hover {
            background-color: #f85959;
            color: #fff;
        }
    }
}
.garr-menu {
    z-index: 5;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    position: absolute;
    color: #222222;
    width: 180px;
    margin-right: 20px;
    .tui2-menu-sub-active {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
        margin-bottom: 10px;
    }
    .tui2-menu-sub {
        background: #ffffff;
        position: relative;
        .tui2-menu-sub-title.tui2-menu-sub-title-active {
            background-color: white;
            color: #222222;
            tui-menu-icon {
                color: #f85959;
            }
        }
    }
    > .tui2-menu-sub > .tui2-menu-sub-title {
        &::after {
            top: 21px;
        }
    }
    .tui2-menu-sub-title-hide {
        &::after {
            transform: rotate(180deg);
        }
    }
    .tui2-menu-sub-title {
        &::after {
            content: '';
            transform-origin: center 2px;
            border-color: #cccccc transparent transparent;
            border-style: solid;
            border-width: 5px 5px 2.5px;
            display: inline-block;
            height: 0;
            width: 0;
            position: absolute;
            top: 20px;
            right: 20px;
            transition: transform 0.375s;
        }
    }
    > .tui2-menu-sub > .tui2-menu-sub-title, > .tui2-menu-item {
        font-size: 16px;
        font-weight: 400;
        height: 48px;
        line-height: 45px;
        color: #222222;
        padding-left: 18px;
        background-color: white;
        .garr-sub-menu {
            position: relative;
            left: 28px;
            top: 2px;
        }
        .tui-menu-icon {
            font-size: 20px;
            position: absolute;
            top: -14px;
            left: -27px;
            padding-right: 8px;
            color: #cccccc;
        }
    }
    .tui2-menu-sub-menu .tui2-menu-item.tui2-menu-item-active {
        color: #f85959;
        background-color: #ffffff;
        a,span {
            color: #f85959;
        }
    }
    a {
        display: block;
        color: inherit;
        transition: none;
        &:visited, &:hover, &:active {
            color: inherit;
        }
    }
    
}
.garr-menu.tui2-menu-container {
    > .tui2-menu-sub > .tui2-menu-sub-menu {
        padding-left: 0;
        padding-right: 0;
    }
    .tui2-menu-item {
        padding-left: 0 !important;
        div, a {
            padding-left: 45px;
        }
    }
    .tui2-menu-sub-menu {
        .tui2-menu-item {
            &:hover, &:active {
                a, span {
                    color: #FD373C;
                    opacity: 1;
                }
            }
        }
    }
}
.garr-menu.tui2-menu-container .tui2-menu-sub-menu .tui2-menu-item, .garr-menu .tui2-menu-sub .tui2-menu-sub-menu .tui2-menu-sub-title {
    font-size: 14px;
    color: #666;
    padding-left: 45px;
    height: 40px;
}
.tui-iconfont-tab_toutiao:before {
    content: '\ea8f';
}
ul, ol {
    list-style: none;
}
[class^='tui-iconfont-'], [class*=' tui-iconfont-'] {
    font-family: 'tui-iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
