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
        <div class="home-top-container">
            <div class="common-dashboard common-dashboard-level-3 home-dashboard">
                <div class="common-dashboard-column">
                    <div class="common-dashboard-primary">
                        <a href="/profile_v3/personal/fan/overview">13</a>
                    </div>
                    <div class="common-dashboard-secondary">
                        <div>粉丝数</div>
                    </div>
                </div>
                <div class="common-dashboard-column">
                    <div class="common-dashboard-primary">
                        <a href="/profile_v3/index/content-analysis/overview">1,845</a>
                    </div>
                    <div class="common-dashboard-secondary">
                        <div>累计阅读量</div>
                    </div>
                </div>
                <div class="common-dashboard-column">
                    <div class="common-dashboard-primary">
                        <a href="/profile_v3/personal/checkout-center">0.03</a>
                    </div>
                    <div class="common-dashboard-secondary">
                        <div>累计收入</div>
                    </div>
                </div>
            </div>
            <div class="start-write">
                <button class="byte-btn byte-btn-primary byte-btn-size-default byte-btn-shape-square" type="button" style="margin-bottom: 10px;">
                    <span>开始创作</span>
                </button>
                <span class="greeting">下午好，慢下来跟上去</span>
            </div>
        </div>
        <div class="entrances">
            <a href="/szpgc/page/equity-page/?media_id=1653589233029124&l=MjI%3D" target="_blank" rel="noopener noreferrer" class="service-link">
                <img src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/pgcfe/sz/youzhizuozhe.png" alt="优质作者服务包">
            </a>
            <a href="/profile_v3/index/activity?name=qingyun" target="_blank" rel="noopener noreferrer" class="qingyun-link">
                <img src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/pgcfe/sz/new_qingyunjihua.png" alt="青云计划">
            </a>
        </div>
        <div class="carousel-box">
            <div class="pgc-carousel byte-carousel" autoplay style="width: 100%; height: 134px;">
                <!-- slider -->
                <div class="byte-carousel-slider">
                    <!-- <div class="carousel-slide-page" style="transition-timing-function: ease; transition-duration: 500ms;">
                        <img src="http://p9.pstatp.com/origin/2ea53000815a9110eae63" alt="..." style="width: 100%; cursor: pointer;">
                    </div> -->
                    <el-carousel :interval="5000" arrow="hover" loop autoplay>
                        <el-carousel-item>
                            <img src="http://p9.pstatp.com/origin/2ea53000815a9110eae63" alt="..." style="width: 100%; cursor: pointer;">
                        </el-carousel-item>
                        <el-carousel-item>
                            <img src="http://p9.pstatp.com/origin/2ea510006a1b62865cc78" alt="..." style="width: 100%; cursor: pointer;">
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- 下面的圆点 图片链接 -->
                <!-- 左边和右边的箭头翻页 循环翻页 -->
            </div>
        </div>
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
    .home-top-container {
        display: -webkit-box;
        display: flex;
        height: 150px;
        margin-top: 18px;
        .home-dashboard {
            .common-dashboard-column {
                background: #fff;
                position: relative;
                .common-dashboard-primary {
                    font-size: 30px;
                }
                .common-dashboard-secondary {
                    color: #666;
                    font-size: 16px;
                }
                &:after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    top: 32px;
                    right: 0;
                    width: 1px;
                    height: 85px;
                    background-color: #f9f9f9;
                }
            }
        }
        .common-dashboard {
            background: #fff;
        }
        .start-write {
            flex-basis: 24.4%;
            padding: 48px 42px 0 41px;
            background: #fff;
            margin-left: 20px;
            box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
            border-radius: 2px;
            display: -webkit-box;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            .greeting {
                font-size: 12px;
                color: #666;
                text-align: center;
                line-height: 12px;
            }
        }
    }
    .entrances {
        margin-top: 20px;
        height: 78px;
        .qingyun-link, .service-link {
            overflow: hidden;
            border-radius: 2px;
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
            -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
            -moz-box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
            display: inline-block;
            height: 78px;
            img {
                width: 480px;
                height: 78px;
                display: inline-block;
            }
        }
        a {
            &:last-child {
                margin-left: 20px;
            }
        }
    }
    .carousel-box {
        overflow: hidden;
        border-radius: 2px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.05);
        box-shadow: 0 1px 12px 0 rgba(0,0,0,.05);
        margin-top: 20px;
        min-height: 0;
    }
}
.common-dashboard {
    display: -webkit-box;
    display: flex;
    width: 100%;
    font-size: 14px;
    .common-dashboard-column {
        -webkit-box-flex: 1;
        flex: 1;
        text-align: center;
        background-color: #f8f8f8;
        border-radius: 2px;
        height: 150px;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        &:not(:last-child) {
            margin-right: 20px;
        }
        .common-dashboard-primary {
            color: #222;
            font-size: 36px;
            line-height: 36px;
            margin-bottom: 10px;
            &:first-child {
                margin-bottom: 30px;
            }
            a {
                color: inherit;
            }
        }
        .common-dashboard-secondary {
            color: #222;
            font-size: 18px;
            line-height: 100%;
        }
    }
}
.byte-btn {
    display: inline-block;
    position: relative;
    outline: none;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;
    box-sizing: border-box;
}
.byte-btn-size-default {
    padding: 0 16px;
    font-size: 14px;
    height: 32px;
    line-height: 1.499;
}
.byte-btn-primary {
    &:not(.byte-btn-disabled) {
        border: 1px solid #FF5E5E;
        background-color: #FF5E5E;
    }
}
.byte-carousel {
    position: relative;
}
.byte-carousel-slider, .byte-carousel-slider-vertical {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>
