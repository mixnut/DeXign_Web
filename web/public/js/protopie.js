$(function(){function t(t){$(".snb a").each(function(){var e=$(this),n=$(e.attr("href"));n.offset().top<=t&&n.offset().top+n.closest(".section").height()+55>t?($(this).parent().addClass("on").siblings().removeClass("on"),$(this).parent().find("li").removeClass("on")):e.removeClass("on")})}$("._view_movie").on("click",function(t){var e=this.href.split("v=")[1];if(window.matchMedia)return matchMedia("(max-width:760px)").matches?$("#ytplayer").attr("src","https://www.youtube.com/embed/"+e+"?modestbranding=1&amp;autohide=1&amp;showinfo=0"):$("#ytplayer").attr("src","https://www.youtube.com/embed/"+e+"?modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;autoplay=1&amp;enablejsapi=1"),$(".ly_play").show(),$(document.body).on("touchmove",function(t){t.preventDefault(),t.stopPropagation()}),!1}),$("._moveDownloadSection").on("click",function(t){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},800),!1}),$("._close_movie").on("click",function(t){return $("#ytplayer").attr("src",""),$(".ly_play").hide(),$(document.body).unbind("touchmove"),!1}),function(t,e,n,o,a,i,s){t.GoogleAnalyticsObject=a,t[a]=t[a]||function(){(t[a].q=t[a].q||[]).push(arguments)},t[a].l=1*new Date,i=e.createElement(n),s=e.getElementsByTagName(n)[0],i.async=1,i.src=o,s.parentNode.insertBefore(i,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-58691397-3","auto"),ga("send","pageview"),$("._analytics").on("click",function(t){var e=t.currentTarget.dataset.category,n=t.currentTarget.dataset.action,o=t.currentTarget.dataset.label;ga("send","event",e,n,o)});var e=$(".docs .go_to_top"),n=$(".docs #header").height();$(window).scroll(function(){var o=$(window).scrollTop();$("._navigationMove").toggleClass("fill",o>0),$("._snb").toggleClass("fixed",o>n),t(o),e.toggleClass("hide",o<300),$(".lang_select").toggleClass("fixed",o>n)}),$(".lang_select select").on("change",function(){var t=$(this).val(),e=location.href.split("/").filter(function(t){return""!==t}),n=e[e.length-1].match("#")?2:1,o=e[e.length-n];"docs"===o||language.indexOf(o)!==-1?o="":o,window.location="/docs/"+("en"!==t?t+"/":"")+o}),$(".docs").on("click","._anchor",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top;$("html, body").animate({scrollTop:Math.ceil(n)},300),window.location.hash=e}),e.on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:0},300)}),$("._ef").on("mouseenter","li",function(){var t=$(this).find(".graph"),e=$(this).attr("data-easing");t.append('<div class="_preview"></div>'),t.find("._preview").delay(300).animate({bottom:"63px"},800,e)}),$("._vl").on("mouseenter","li",function(){var t=$(this).find(".graph"),e=$(this).data("easing").split(",").map(function(t){return t-0});t.append('<div class="_preview"></div>'),t.find("._preview").delay(300).velocity({bottom:63},{duration:800,easing:e})}),$(".easing_graph").on("mouseleave","li",function(){$(this).find("._preview").remove()}),window._pt_lt=(new Date).getTime(),window._pt_sp_2=[],_pt_sp_2.push("setAccount,1338730f");var o="https:"==document.location.protocol?" https://":" http://",a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=o+"cjs.ptengine.com/pta_en.js";var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=o+"cjs.ptengine.com/pts.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(a,s),s.parentNode.insertBefore(i,s),$(".btGnb").on("click",function(t){t.preventDefault(),t.stopPropagation(),$(this).toggleClass("showGnb"),$("#wrap").toggleClass("dim"),$(document).one("click",function t(e){0===$("#header").has(e.target).length?($(".btGnb").removeClass("showGnb"),$("#wrap").removeClass("dim")):$(document).one("click",t)})}),$(".filter a").on("click",function(t){t.preventDefault();var e=$(this),n=e.closest(".filter"),o=e.data("lang");e.parent().addClass("active").siblings().removeClass("active"),n.siblings(".custom_3col").find("li").hide(),n.siblings(".custom_3col").find("."+o).show()}),$(".question").on("click",function(t){t.preventDefault(),$(this).toggleClass("on"),$(this).parent().next().slideToggle("fast")}),$(".footer_menu li > div").on("click",function(t){t.preventDefault(),$(this).parent().toggleClass("on")})});