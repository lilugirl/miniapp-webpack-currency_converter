// app.js
const settingUtil=require("./utils/setting-util.js")
App({
 
  baseMoneyKey:"CNY",
  onLaunch() {
    this.baseMoneyKey=settingUtil.getBaseMoneyKey()
  }
})
