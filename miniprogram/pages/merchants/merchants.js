// pages/merchants/merchants.js
//获取应用实例
const app = getApp();
var startX, endX;
var moveFlag = true;// 判断执行滑动事件
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        getuserinfo(res) {
            console.log(res);
        }
    }
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content:"可以试试左右滑动了",
        imgarr:"https://www.yinghua233.cn/img/18.jpg",
        categoryList:[
            {
                src:"../../images/img/home.png",
                name: "a",
            },
            {
                src:"../../images/img/home.png",
                name: "b",
            },{
                src:"../../images/img/home.png",
                name: "c",
            },{
                src:"../../images/img/home.png",
                name: "d",
            },{
                src:"../../images/img/home.png",
                name: "e",
            },{
                src:"../../images/img/home.png",
                name: "f",
            },{
                src:"../../images/img/home.png",
                name: "g",
            },{
                src:"../../images/img/home.png",
                name: "h",
            },{
                src:"../../images/img/home.png",
                name: "i",
            },{
                src:"../../images/img/home.png",
                name: "j",
            }
        ]
    },
    touchStart: function (e) {
        startX = e.touches[0].pageX; // 获取触摸时的原点
        moveFlag = true;
      },
      // 触摸移动事件
      touchMove: function (e) {
        endX = e.touches[0].pageX; // 获取触摸时的原点
        if (moveFlag) {
          if (endX - startX > 50) {
            console.log("move right");
            this.move2right();
            moveFlag = false;
          }
          if (startX - endX > 50) {
            console.log("move left");
            this.move2left();
            moveFlag = false;
          }
        }
    
      },
      // 触摸结束事件
      touchEnd: function (e) {
        moveFlag = true; // 回复滑动事件
        
      },
    
      move2left() {
        var that = this;
        
        that.setData({
          content: "move2left"
        });
      },
      move2right() {
        var that = this;
        that.setData({
          content: "move2right"
        });
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