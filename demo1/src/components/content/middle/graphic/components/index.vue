<template>
    <div class="pgc-home">
        <div class="announcement">
            <div class="notice-wrap">
                <span class="intro">公告</span>
                <div class="content">
                    <div class="item">
                        <span class="notice-time">1.3</span>
                        <a href="https://www.toutiao.com/i6777662172353790478/" class="notice-name" target="_blank" rel="noopener noreferrer">头条号平台持续打击违规帐号的公告 | 2020年1月3日</a>
                    </div>
                    <div class="item">
                        <span class="notice-time">12.27</span>
                        <a href="https://www.toutiao.com/i6775066277519032840/" class="notice-name" target="_blank" rel="noopener noreferrer">头条号平台持续打击违规帐号的公告 | 2019年12月27日</a>
                    </div>
                </div>
            </div>
            <a class="home-go-more" href="/profile_v3/index/notice">更多</a>
        </div>
        <div class="home-top-container"></div>
        <div class="entrances"></div>
        <div class="carousel-box"></div>
        <div class="home-content discovery"></div>
    </div>
</template>
<style lang="scss" scoped>
.pgc-home {
    background: #f4f5f6;
    min-height: inherit;
    .announcement {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 44px;
        line-height: 44px;
        padding: 0 24px;
        background-color: #fff;
        border-radius: 2px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
        -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
        -moz-box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
        .notice-wrap {
            display: flex;
            .intro {
                font-size: 16px;
                color: #999;
                &:after {
                    content: "|";
                    margin-left: 5px;
                    margin-right: 7px;
                    color: #f9f9f9;
                }
            }
        }
        .content {
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: start;
            justify-content: flex-start;
            justify-items: center;
            font-size: 14px;
        }
        .item {
            display: -webkit-box;
            display: flex;
            .notice-time {
                color: #999;
                display: -webkit-box;
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                &:after {
                    content: "";
                    display: inline-block;
                    width: 4px;
                    height: 4px;
                    background-color: #d8d8d8;
                    border-radius: 50%;
                    margin-left: 5px;
                    margin-right: 5px;
                }
            }
            .notice-name {
                overflow: hidden;
                display: inline-block;
                max-width: 295px;
                color: #222;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            &:last-child {
                margin-left: 128px;
            }
        }
    }
    .home-go-more {
        top: 17px;
        color: #666;
        font-size: 14px;
        &:after {
            content: "";
            display: inline-block;
            margin-bottom: 1px;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            width: 7px;
            height: 7px;
            border: 1px solid #666;
            border-right: none;
            border-bottom: none;
        }
    }
}
</style>
