"use strict";

var BASE_MONEY_KEY = "baseMoney";
var DEFAULT_MONEY_KEY = "CNY";
function saveBaseMoneyKey(baseMoneyKey) {
  // 将用户选择的基础货币存储到本地
  wx.setStorageSync(BASE_MONEY_KEY, baseMoneyKey);
}
function getBaseMoneyKey() {
  return wx.getStorageSync(BASE_MONEY_KEY) || DEFAULT_MONEY_KEY;
}
module.exports = {
  saveBaseMoneyKey: saveBaseMoneyKey,
  getBaseMoneyKey: getBaseMoneyKey
};