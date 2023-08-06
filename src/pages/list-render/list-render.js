// pages/list-render.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList:[
      {name:'Java 编程思想',priceList:[
        {name:'京东',price:42},
        {name:'淘宝',price:41},
        {name:'当当',price:43}
      ]},
      {name:'JavaScript 高级程序设计',priceList:[
        {name:'京东',price:58},
        {name:'淘宝',price:56},
        {name:'当当',price:57}
      ]},
      {name:'JavaScript 权威指南',priceList:[
        {name:'京东',price:51.5},
        {name:'淘宝',price:52},
        {name:'当当',price:51}
      ]}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})