// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],      //当前页内容
    pageIdex:0,   //当前页码
    hasMore:true, //是否有下一页
    pageSize:2    //页大小
  },
  loadMore:function(){
    //1如果已经没有下一页停止函数执行
    if(this.data.hasMore==false){return;}
    //2获取二个参数 pno pageSize
    var pno=this.data.pageIdex+1;
    var ps=this.data.pageSize;
    //3创建ajax请求
    wx.request({
      //4接收返回数据
      url: 'http://127.0.0.1:3000/getMessage',
      data:{pno:pno,pageSize:ps},
      success:(res)=>{
        
        //5拼接数组
        var rows=this.data.list.concat(res.data.data);
         //6获得总页数判断是否有下一页
        var pageCount=res.data.pageCount;
        var flag=pno<pageCount;
        //7将返回数据保存data属性
        this.setData({
          list:rows,
          hasMore:flag,
          pageIdex:pno
        });
        wx.showLoading({
          title: '正在加载数据...',
        });
        setTimeout(function(){
          wx.hideLoading();
        },500);
      }
    })
    
    
    
    
    //8添加动态效果 添加加载动画
    //9 加载动画隐藏
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