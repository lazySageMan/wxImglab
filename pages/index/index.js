//index.js
//获取应用实例
var  wxDraw= require("../../utils/wxdraw.min.js").wxDraw;
var Shape = require("../../utils/wxdraw.min.js").Shape;

const app = getApp()

Page({
  data: {
    imgArr : ["../../image/1.jpg","../../image/2.jpg","../../image/3.jpg","../../image/5.jpg"],
    wxCanvas : null,
    imgHeight : '',
    imgWidth : ''
  },
  // //事件处理函数

  deleteImg: function() {
    let arr = this.data.imgArr.slice(1)
    this.setData({
      imgArr : arr
    })
  },
  onLoad: function () {
    var context = wx.createCanvasContext('first');//还记得 在wxml里面canvas的id叫first吗
    this.wxCanvas = new wxDraw(context,0,0,400,500);
  },
  imageLoad: function(e){
    console.log(e)
    var that = this;
    var $imgWidth = e.detail.width,
        $imgHeight = e.detail.height;
        // ratio = $imgWidth/$imgHeight,
        // viewHeight = 1000,
        // viewWidth = 1000*ratio;

    this.setData({
      imgHeight : $imgHeight+'rpx',
      imgWidth : $imgWidth+'rpx'
    })

  },
  //画框从此开始
  bindtouchstart:function(e){
    // 检测手指点击开始事件
    this.wxCanvas.touchstartDetect(e);
    var rect = new Shape('rect', {x: 60, y: 60, w: 40, h: 40, lineWidth: 2, lineCap: 'round', rotate: Math.PI/2 },'stroke', true);
    this.wxCanvas.add(rect)
  },
  bindtouchmove:function(e){
    // 检测手指点击 之后的移动事件
    this.wxCanvas.touchmoveDetect(e);
  },
  bindtouchend:function(){
     //检测手指点击 移出事件
    this.wxCanvas.touchendDetect();
  },
  bindtap:function(e){
    // 检测tap事件
    this.wxCanvas.tapDetect(e);
  },
  bindlongpress:function(e){
       // 检测longpress事件
    this.wxCanvas.longpressDetect(e);
  },
})
