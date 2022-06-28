// pages/main/main.js
const order = ['demo1', 'demo2', 'demo3']
Page({
    onShareAppMessage() {
        return {
            title: 'scroll-view',
            path: 'page/component/pages/scroll-view/scroll-view'
        }
    },
    /**
     * 页面的初始数据
     */
    data: {
        array: [{
            id: 0,
            index: '商家',
            img: '../../images/main/merchant.png',  //绝对路径地址
            url: '../merchants/merchants'
        },{
            id: 0,
            index: '商家',
            img: '../../images/main/merchant.png',  //绝对路径地址
            url: '../merchants/merchants'
        },{
            id: 0,
            index: '商家',
            img: '../../images/main/merchant.png',  //绝对路径地址
            url: '../merchants/merchants'
        },{
            id: 1,
            index: '找工作',
            img: '../../images/main/work.png',
        },{
            id: 1,
            index: '找工作',
            img: '../../images/main/work.png',
        },{
            id: 2,
            index: '临时工',
            img: '../../images/main/t-work.png',
        },{
            id: 2,
            index: '临时工',
            img: '../../images/main/t-work.png',
        }],
        imgUrls: [
            'https://yinghua233.cn/img/img1.jpg',    //图片位置
            'https://yinghua233.cn/img/img2.jpg',
            'https://yinghua233.cn/img/img3.jpg'
        ],
        indicatorDots: false,  //是否显示面板指示点
        autoplay: true,      //是否自动切换
        interval: 10000,       //自动切换时间间隔
        duration: 1000,       //滑动动画时长
        inputShowed: false,
        inputVal: "",
        index_array: [
            {
                text: "委托追寻",  //文本
                img: "#"    //图片位置
            },
            {
                text: "委托状态",
                img: "#"
            },
            {
                text: "委托生成",
                img: "#"
            }
        ],
        toView: 'green'
    },
    scrollToTop() {
        this.setAction({
          scrollTop: 0
        })
      },
    
    tap() {
        for (let i = 0; i < order.length; ++i) {
            if (order[i] === this.data.toView) {
                this.setData({
                    toView: order[i + 1],
                    scrollTop: (i + 1) * 200
                })
                break
            }
        }
    },
    
    tapMove() {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
