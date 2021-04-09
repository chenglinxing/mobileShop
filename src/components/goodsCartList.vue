<template>
  <!--购物车中的商品-->
  <div class="goods-cart-list">
    <van-button @click="returnA">返回</van-button>
    <!-- {{ goodsCartList }} -->
    <div class="cart-lsit" v-for="(item, index) in goodsCartList" :key="index">
      <!--按钮 店铺名 -->
      <div class="shop">
        <!--按钮-->
        <div class="shop-btn">
          <van-checkbox v-model="item.shopChecked"></van-checkbox>
        </div>

        <!--店铺名-->
        <div class="shop-name">
          <van-icon name="shop-o" /><span>{{ item.goodsSourceCName }}</span>
        </div>
      </div>

      <!--商品相关信息-->
      <div
        class="goods-info"
        v-for="(infoItem, shopIndex) in item.goodsList"
        :key="shopIndex"
        :class="{ 'handle-info': infoItem.goodsChecked }"
      >
        <!-- {{infoItem}} -->
        <!--商品相关信息按钮-->
        <div class="info-btn">
          <van-checkbox
            v-model="infoItem.goodsChecked"
            @change="handleInfoBtn($event, item, index)"
          ></van-checkbox>
        </div>

        <!--商品信息-->
        <div class="info">
          <!--商品图片-->
          <div class="info-img">
            <van-image fit="fill" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          </div>

          <!--商品描述 价格  规格-->
          <div class="info-other">
            <div class="goods-des-specification">
              <!--商品名称-->
              <div class="des">
                {{ infoItem.goodsName }}
              </div>
              <!-- 商品规格 -->
              <div class="specification"></div>
            </div>

            <!-- 商品价格 数量-->
            <div class="goods-price-num">
              <span class="price"><i>¥</i>{{ infoItem.goodsPrice }}</span>

              <!--商品数量-->

              <span
                class="num"
                v-show="showNum || infoItem.goodsId != goodsId"
                @click="hanldeGoodsNum(infoItem.goodsId, infoItem.goodsNum)"
                ><i>x</i>{{ infoItem.goodsNum }}</span
              >

              <van-stepper
                v-show="showStepper && infoItem.goodsId == goodsId"
                class="num"
                v-model="infoItem.goodsNum"
                min="1"
                max="10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      :price="countPrice"
      button-text="点击结算"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox></van-submit-bar
    >
  </div>
</template>

<script>
import { Toast } from "vant";
import throttle from "lodash.throttle";
export default {
  data() {
    return {
      radioShop: 1, //按钮  店铺名前
      radioInfo: 2,
      goodsCartList: this.$store.state.shoppingCartList,
      shopNameList: [
        { key: 0, label: "京东直营店" },
        { key: 1, label: "少放辣专店" },
        { key: 2, label: "爱吃猫的鱼" },
        { key: 3, label: "别放香菜专店" },
      ],
      showStepper: false, //默认隐藏商品数量步进器
      showNum: true, //默认显示商品数量
      checked: false, //是否全选
      goodsId: 0,
    };
  },
  filters: {
    shopNameDic(val) {
      const target = this.shopNameList.filter((i) => {
        return (i.code = val);
      });
      return target.length ? target[0].label : val;
    },

    myCurrency(val) {
      return "¥" + val;
    },
  },
  computed: {
    /**计算 */
    countPrice() {
      let lastPrice = 0;
      this.goodsCartList.forEach((i) => {
        i.goodsList.forEach((k) => {
          if (k.goodsChecked) {
            lastPrice += Number(k.goodsPrice) * Number(k.goodsNum);
          }
        });
      });
      return lastPrice * 100;
    },
  },
  watch: {
    goodsCartList: {
      handler(newVal) {
        newVal.forEach((i) => {
          console.log(i, "i");
          this.shopNameList.forEach((k) => {
            if (Number(i.goodsSource) == Number(k.key)) {
              this.$set(i, "goodsSourceCName", k.label);
            }
          });
        });
      },
      immediate: true, //watch 在第一次值绑定的时候 不会监听函数，只有值改变才会执。如果最初绑定值就需要监听则添加immeidate:true
    },
  },
  methods: {
    /**点击单选框 */
    handleInfoBtn(e, item, index) {
      console.log(e, item, index);
    },

    returnA() {
      this.$router.go(-1);
    },

    /**点击商品数量 */
    hanldeGoodsNum(id, num) {
      console.log("点击", id, num);
      //显示步进器
      this.showStepper = true;
      //隐藏商品数量
      this.showNum = false;
      this.goodsId = id;
    },

    /**鼠标移出 商品数量 */
    closeStepper() {
      this.showNum = true;
      this.showStepper = false;
    },

    /**点击结算 */
    onSubmit: throttle(function () {
      Toast("需要支付" + (this.countPrice / 100).toFixed(2) + "元");
    }, 1500),
  },
};
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.goods-cart-list {
  box-sizing: border-box;
  width: 95%;
  margin: 0 auto;

  .cart-lsit {
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 0.6rem;

    margin: 20px 0;
    .shop {
      box-sizing: border-box;
      padding: 0.9rem;
      display: flex;
      align-items: center;
      .shop-name {
        margin-left: 1rem;
        font-size: 16px;
        font-weight: 700;
        span {
          margin-left: 0.3rem;
        }
      }
    }

    .goods-info {
      box-sizing: border-box;
      display: flex;
      height: 7.5rem;
      padding: 0.5rem;
      .info-btn {
        padding: 0.5rem;
        margin: auto;
      }
      .info {
        width: 100%;
        height: 6.5rem;
        // border: 1px solid red;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        .info-img {
          @include flex;
          .van-image {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
          }
        }

        .info-other {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding: 0 0.8rem;
          justify-content: space-between;
          .goods-des-specification {
          }

          .goods-price-num {
            display: flex;
            justify-content: space-between;
            .price {
              color: red;
              font-size: 20px;
              font-weight: 700;
              i {
                font-size: 15px;
              }
            }

            .num {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

.van-submit-bar {
  position: absolute;
  bottom: 50px;
}

//当选中某商品时 则背景颜色变灰
.handle-info {
  background-color: rgb(236, 236, 236);
}

.handle-info:last-child {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>