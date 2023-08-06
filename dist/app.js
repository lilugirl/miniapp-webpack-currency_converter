"use strict";

// app.js
var settingUtil = require("./utils/setting-util.js");
App({
  baseMoneyKey: "CNY",
  onLaunch: function onLaunch() {
    this.baseMoneyKey = settingUtil.getBaseMoneyKey();
  }
});