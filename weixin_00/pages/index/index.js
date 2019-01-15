//index.js
//获取应用实例
const app = getApp()
Page({
  handleJump:function(e){
    var id=e.target.dataset.id;
    if(id==1){
    wx:wx.navigateTo({
      url: '/pages/shoplist/shoplist',
      })
    }
    if(id==4){
      wx:wx.navigateTo({
        url: '/pages/fresh/fresh',
      })
    }
  },
  handleMore:function(){
    wx:wx.navigateTo({
      url:'/pages/shoplist/shoplist'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    sclist1: [{ id: 1, img_url:"http://127.0.0.1:3000/image/ai3.png"}],
    sclist2: [{ id: 1, img_url: "http://127.0.0.1:3000/image/ath.png" }],
    sclist3: [{ id: 1, img_url: "http://127.0.0.1:3000/image/ahv.png" }],
    list:[
      { id: 1, img_url:"http://127.0.0.1:3000/image/banner1.png"},
      { id: 2, img_url: "http://127.0.0.1:3000/image/banner2.png"},
      { id: 3, img_url: "http://127.0.0.1:3000/image/banner3.png"},
      { id: 4, img_url: "http://127.0.0.1:3000/image/banner4.png"},
      { id: 5, img_url: "http://127.0.0.1:3000/image/banner5.png"}],
  
    navlist:[
      { id: 1, img_url:"http://127.0.0.1:3000/icons/logo1.png",title:"超市"},
      { id: 2, img_url: "http://127.0.0.1:3000/icons/logo2.png", title: "全球购"},
      { id: 3, img_url: "http://127.0.0.1:3000/icons/logo3.png", title: "服装城" },
      { id: 4, img_url: "http://127.0.0.1:3000/icons/logo4.png", title: "生鲜"},
      { id: 5, img_url: "http://127.0.0.1:3000/icons/logo8.png", title: "物流"},
      { id: 6, img_url: "http://127.0.0.1:3000/icons/logo9.png", title: "领券"}
    ],
    topllist: [{ id: 1, img_url: "http://127.0.0.1:3000/image/bej.png" }],
    toprlist: [{ id: 1, img_url: "http://127.0.0.1:3000/image/arrowright.png"}],
    quicks:[
      { id: 1, img_url: "http://127.0.0.1:3000/image/quick1.jpg",price:"￥110"},
      { id: 2, img_url: "http://127.0.0.1:3000/image/quick2.jpg", price: "￥134" },
      { id: 3, img_url: "http://127.0.0.1:3000/image/quick3.jpg", price: "￥196"},
      { id: 4, img_url: "http://127.0.0.1:3000/image/quick4.jpg", price: "￥255"},
      { id: 5, img_url: "http://127.0.0.1:3000/image/quick5.jpg", price: "￥299"},
      { id: 6, img_url: "http://127.0.0.1:3000/image/quick6.jpg", price: "￥2560" }
    ],
    butlist1:[
      { id: 1, img_url:"http://127.0.0.1:3000/image/ad-0.jpg"},
      { id: 2, img_url: "http://127.0.0.1:3000/image/ad-big.jpg" },
      { id: 3, img_url: "http://127.0.0.1:3000/image/ad-1.jpg" }
    ],
    butlist2: [
      { id: 1, img_url: "http://127.0.0.1:3000/image/ad-left.jpg" },
      { id: 2, img_url: "http://127.0.0.1:3000/image/ad-right.jpg" }
  
    ]
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
