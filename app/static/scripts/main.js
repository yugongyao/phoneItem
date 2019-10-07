// 轮播图
$.ajax({
  url: homeBannerApi,
  success: function(data){
    // console.log('请求成功');
    // console.log(data);
    // console.log(data.list);
    var list=data.list;
    list.forEach((item,index,list) => {
      $('.swiper-slide').eq(index).append(`<img src="${item.picUrl}" alt="">`);
    });
  }, 
  fail: function(){
    console.log('请求失败');
  }
});


$.ajax({
  url: goodsDetailApi,
  success: function(data){
    // console.log('请求成功');
    // console.log(data);
  },
  fail: function(){
    console.log('请求失败');
  }
})

// 首页任务列表
$.ajax({
  url: homepageTaskListApi,
  success: function(data){
    // console.log('请求成功');
    // console.log(data);
    // console.log(data.list);
    var list=data.list;
    list.forEach((item,index,list) => {
      $('.list').append(`<li class="item"><div class="left"><img src="${item.picUrl}" alt=""></div><div class="center"><p>${item.mess}</p><p>${item.data}截止</p></div>
      <div class="right"><p>最高<span>${item.num}</span>元</p></div></li>`);
    });
  }, 
  fail: function(){
    console.log('请求失败');
  }
});