"use strict";$(function(){function t(t,a){$.ajax({url:"http://127.0.0.1:9090/api/getbrandtitle?timestamp="+(new Date).getTime(),success:function(a){a=a.result;for(var e='<ul class="category-title">',i=0;i<a.length;i++)e+="<li>",e+='<a href="brand.html?brandtitleid='+a[i].brandTitleId+'" data-title-id="'+a[i].brandTitleId+'" style="background-image:url(http://www.zuyushop.com/wap/images/arrow1.gif);">',e+=a[i].brandTitle,e+="</a>",e+="</li>";e+="</ul>",$(t).html(e)}})}t($("#category > .row"))});