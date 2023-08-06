"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// index.js
var exchangeRateMap = require("../../utils/exchange-rate.js");
var app = getApp();
Page({
  data: {
    item: {
      key: "CNY"
    },
    exchangeList: [],
    baseExchangeItem: {
      key: "CNY",
      baseNum: 100,
      name: "人民币 ￥"
    }
  },
  onShow: function onShow() {
    if (app.baseMoneyKey === this.data.baseExchangeItem.key) {
      return;
    }
    var baseExchangeItem = this.data.exchangeList.find(function (item) {
      return item.key === app.baseMoneyKey;
    });
    this.setData({
      baseExchangeItem: baseExchangeItem
    });
    console.log('onshow', this.data);
  },
  onLoad: function onLoad() {
    // 初始化列表数据
    var exchangeRateList = [];
    for (var _i = 0, _Object$keys = Object.keys(exchangeRateMap); _i < _Object$keys.length; _i++) {
      var moneyKey = _Object$keys[_i];
      exchangeRateList.push(_objectSpread({
        key: moneyKey
      }, exchangeRateMap[moneyKey]));
    }
    this.setData({
      moneyNum: 100,
      exchangeList: exchangeRateList
    });
  },
  onBaseNumChange: function onBaseNumChange(event) {
    this.setData({
      moneyNum: event.detail.value
    });
  },
  onClickSwitchBaseMoney: function onClickSwitchBaseMoney() {
    wx.navigateTo({
      url: '/pages/choose-base-money/index?curMoneyKey=' + this.data.baseExchangeItem.key
    });
  }
});