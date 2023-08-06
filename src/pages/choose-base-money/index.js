const exchangeRateMap = require("../../utils/exchange-rate.js");
const settingUtil=require("../../utils/setting-util.js")
const app = getApp()
Page({
    data:{
        exchangeList:[]
    },
    onLoad(){
        // 初始化列表数据
        const exchangeRateList=[];
        for(let moneyKey of Object.keys(exchangeRateMap)){
            exchangeRateList.push({
                key:moneyKey,
                ...exchangeRateMap[moneyKey]
            })
        }
        this.setData({
            exchangeList:exchangeRateList
        })

    },
    onChooseBaseMoney(event){
       // 从 event 中获取当前点击货币的key，并更新到app中
       const baseMoneyKey=event.currentTarget.dataset['moneyKey']   
       app.baseMoneyKey=baseMoneyKey
       // 保存设置
       settingUtil.saveBaseMoneyKey(baseMoneyKey)
       wx.navigateBack() 
    }
})