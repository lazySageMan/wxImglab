//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgArr : ["../../image/1.jpg","../../image/2.jpg","../../image/3.jpg","../../image/5.jpg"]
  },
  // //事件处理函数

  deleteImg: function() {
    let arr = this.data.imgArr.slice(1)
    this.setData({
      imgArr : arr
    })
    console.log(this.data.imgArr)
  },
  onLoad: function () {
    
  },
})
