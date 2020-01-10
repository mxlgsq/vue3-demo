<template>
    <div class="garr-header">
        <div class="shead_wrap">
            <a class="shead_logo" href="/"></a>
            <div class="shead_right">
                <div class="sys-msg">
                    <div>
                        <el-link icon="el-icon-tickets" class="sys-msg-entity" :underline="false"></el-link>
                    </div>
                </div>
                <div class="user-panel"></div>
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.garr-header {
  background-color: #ffffff;
  height: 60px;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 1000;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    .shead_wrap {
        margin: 0 auto;
        height: 100%;
        z-index: 100;
        width: 1180px;
    }
    .shead_logo {
        float: left;
        color: transparent;
        width: 75px;
        height: 100%;
        background-image: url(//sf1-ttcdn-tos.pstatp.com/obj/ttfe/pgcfe/sz/mp-logo-toutiaohao.svg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .shead_right {
        float: right;
        height: 100%;
    }
    .sys-msg {
        position: relative;
        display: inline-block;
        width: 23px;
        height: 100%;
        margin-left: 30px;
        vertical-align: middle;
    }
    .user-panel {
        position: relative;
        display: inline-block;
        margin-left: 50px;
        height: 100%;
        padding-top: 16px;
        vertical-align: middle;
    }
    .sys-msg-entity {
        position: absolute;
        top: 50%;
        height: 18px;
        width: 22px;
        background-repeat: no-repeat;
        background-size: contain;
        cursor: pointer;
        transform: translateY(-50%);
    }
}
</style>
