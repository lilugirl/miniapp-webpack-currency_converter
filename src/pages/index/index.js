// index.js
const exchangeRateMap = require("../../utils/exchange-rate.js");
const app = getApp();

Page({
  data: {
    item: {
      key: "CNY",
    },

    exchangeList: [
    
    ],
    baseExchangeItem: {
      key: "CNY",
      baseNum: 100,
      name: "人民币 ￥",
    },
  },

  onShow(){
       if(app.baseMoneyKey===this.data.baseExchangeItem.key){
         return;
       }

       const baseExchangeItem=this.data.exchangeList.find(item=>item.key===app.baseMoneyKey)

       this.setData({
        baseExchangeItem:baseExchangeItem
       })

       console.log('onshow',this.data)
  },

  onLoad() {
    // 初始化列表数据
    const exchangeRateList=[];
    for(let moneyKey of Object.keys(exchangeRateMap)){
      exchangeRateList.push({
        key:moneyKey,
        ...exchangeRateMap[moneyKey]
      })
    }

    this.setData({
      moneyNum:100,
      exchangeList: exchangeRateList,
    })

  },

  onBaseNumChange(event) {
    this.setData({
      moneyNum:event.detail.value
    })
  },
  onClickSwitchBaseMoney(){
    wx.navigateTo({
      url: '/pages/choose-base-money/index?curMoneyKey='+this.data.baseExchangeItem.key,
    })
  }
});
