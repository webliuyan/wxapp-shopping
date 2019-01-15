// pages/shoplist/shoplist.js
Page({
  loadMore:function(e){
    //加载下一页的数据
    //获取两个数值pno pagesize
    var pno=this.data.pageIndex+1;
    var ps=this.data.pageSize;
    //发送ajax请求
    wx.request({
      url: 'http://127.0.0.1:3000/findshop',
       data:{pno:pno,pageSize:ps},
      success:(res)=>{
       // console.log(res.data.data)
       var rows=this.data.list.concat(res.data.data);
       //保存返回的数据
       this.setData({
         list:rows,
         pageIndex:pno
       });
       
      //显示加载动画效果
       wx.showLoading({
         title: '正在加载数据...',
       });
       //卸载加载动画的效果
       setTimeout(function(){
         wx.hideLoading();
       },1000)
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],    
    pageIndex:0, 
    pageSize:7  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})