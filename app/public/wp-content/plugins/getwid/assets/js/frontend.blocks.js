window.wp=window.wp||{},window.wp["./assets/js/frontend.blocks"]=function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=530)}({13:function(t,e){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?t.exports=n=function(t){return i(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)},n(e)}t.exports=n},21:function(t,e,i){"use strict";function n(t,e,i){var n=function(t){var e={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(var i in e)if(void 0!==t.style[i])return e[i]}(document.createElement("div")),o=void 0!==e.animation?e.animation:"",a=void 0!==e.duration?e.duration:"1s",d=void 0!==e.delay?e.delay:"0s";return t.css({"animation-duration":a,"animation-delay":d,"-webkit-animation-delay":d}),t.addClass("animated "+o).one(n,function(){jQuery(this).removeClass("animated "+o),"function"==typeof i&&i()}),this}e.a=n},27:function(t,e,i){function n(t){return o(t)||a(t)||d()}var o=i(31),a=i(30),d=i(32);t.exports=n},30:function(t,e){function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}t.exports=i},31:function(t,e){function i(t){if(Array.isArray(t))return t}t.exports=i},32:function(t,e){function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}t.exports=i},530:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i(531)},531:function(t,e,i){"use strict";i(532)},532:function(t,e,i){"use strict";var n=(i(533),i(534)),o=(i.n(n),i(535)),a=(i.n(o),i(536)),d=(i.n(a),i(537)),c=(i.n(d),i(538),i(539),i(540)),s=(i.n(c),i(541),i(542),i(543)),r=(i.n(s),i(544)),l=(i.n(r),i(545)),u=(i.n(l),i(546)),p=(i.n(u),i(547)),w=(i.n(p),i(548)),f=(i.n(w),i(549)),g=(i.n(f),i(550)),m=(i.n(g),i(551),i(552),i(553));i.n(m)},533:function(t,e,i){"use strict";var n=i(21);/*!
 * getwid-icon
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-icon:not(.getwid-init)").each(function(e,i){t(i).addClass("getwid-init"),t(".getwid-animation.wp-block-getwid-icon__wrapper").on("mouseenter",function(){Object(n.a)(t(this),{animation:t(this).attr("data-animation")})})})};i()})}(jQuery)},534:function(t,e){/*!
 * getwid-section
 */
!function(t){t(document).ready(function(e){function i(){var t=document.createElement("script");t.type="text/javascript",t.src="https://www.youtube.com/iframe_api",t.id="youtube_video_api_js";var e=!1;document.getElementsByTagName("head")[0].appendChild(t),t.onload=t.onreadystatechange=function(){e||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e=!0,t.onload=t.onreadystatechange=null)}}function n(t){var e=/(?:https?:\/\/)?(?:www\.)?(?:youtube(?:-nocookie)?\.com\/\S*(?:(?:\/e(?:mbed))?\/v?|(?:watch\?)?(?:\S*?&?vi?\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;return!!t.match(e)&&RegExp.$1}function o(){void 0===window.onYouTubeIframeAPIReady?window.onYouTubeIframeAPIReady=function(){getwidYT.init()}:d=setInterval(function(){void 0!==window.YT&&window.YT.loaded&&(getwidYT.ready||getwidYT.init())})}var a,d=!1,c=t(".wp-block-getwid-section__background-video.source-youtube .wp-block-getwid-section__background-video-youtube");window.getwidYT={data:{ready:!1},init:function(){getwidYT.data.ready=!0,clearInterval(d),c.each(function(e){var i=t(this).attr("id"),n=t(this).parent().attr("youtube-video-autoplay"),o=t(this).parent().attr("youtube-video-loop"),a=t(this).parent().attr("youtube-video-muted"),d=t(this).closest(".wp-block-getwid-section__wrapper").find(".getwid-background-video-controls .getwid-background-video-play"),s=t(this).closest(".wp-block-getwid-section__wrapper").find(".getwid-background-video-controls .getwid-background-video-mute");window.YT.ready(function(){new YT.Player(c[e],{playerVars:{playsinline:1,autoplay:"true"==n?1:0,controls:0,disablekb:1,fs:0,cc_load_policy:0,iv_load_policy:3,loop:"true"==o?1:0,playlist:"true"==o?i:"",modestbranding:1,rel:0,showinfo:0,enablejsapi:1,mute:"true"==a?1:0,autohide:1},height:"100%",width:"100%",videoId:i,events:{onReady:function(e){var i=e.target;"true"==n?d.html('<i class="getwid-icon getwid-icon-pause"></i>'):"false"==n&&d.html('<i class="getwid-icon getwid-icon-play"></i>'),"true"==a?s.html('<i class="getwid-icon getwid-icon-mute"></i>'):"false"==a&&s.html('<i class="getwid-icon getwid-icon-volume-up"></i>'),t(d).on("click",function(t){"true"==n?(i.pauseVideo(),d.html('<i class="getwid-icon getwid-icon-play"></i>'),n="false"):"false"==n&&(i.playVideo(),d.html('<i class="getwid-icon getwid-icon-pause"></i>'),n="true")}),t(s).on("click",function(t){"true"==a?(i.unMute(),s.html('<i class="getwid-icon getwid-icon-volume-up"></i>'),a="false"):"false"==a&&(i.mute(),s.html('<i class="getwid-icon getwid-icon-mute"></i>'),a="true")}),"true"==n&&i.playVideo()},onStateChange:function(t){-1==t.data&&(d.html('<i class="getwid-icon getwid-icon-play"></i>'),n="false"),1==t.data&&(d.html('<i class="getwid-icon getwid-icon-pause"></i>'),n="true"),2==t.data&&(d.html('<i class="getwid-icon getwid-icon-play"></i>'),n="false"),3==t.data&&(d.html('<i class="getwid-icon getwid-icon-pause"></i>'),n="true"),0==t.data&&"false"==o&&(t.target.stopVideo(),d.html('<i class="getwid-icon getwid-icon-play"></i>'),n="false")}}})})})}},t(document.body).on("post-load",function(t){s(),r(),l(),u()});var s=function(){a=t(".wp-block-getwid-section__background-video.source-youtube .wp-block-getwid-section__background-video-youtube:not(.getwid-init)"),a.each(function(e){t(this).addClass("getwid-init");var i=n(t(this).parent().attr("youtube-video-url"));t(this).attr("id",i)}),a.length&&(t("#youtube_video_api_js").length||(i(),o()))},r=function(){var e,i,n,o,a,d,c=t(".wp-block-getwid-section__background-slider:not(.getwid-init)");c.length&&"undefined"!=typeof imagesLoaded&&c.each(function(c){d=t(this),e=1==d.data("autoplay"),i=parseInt(d.data("autoplay-speed")),n="fade"==d.data("slide-effect"),o=parseInt(d.data("slide-speed")),a=1==d.data("infinite"),t(this).addClass("getwid-init"),d.imagesLoaded().done(function(d){t(d.elements[0]).slick({arrows:!1,dots:!1,rows:0,slidesToShow:1,slidesToScroll:1,autoplay:e,autoplaySpeed:i,fade:n,speed:o,infinite:a})})})},l=function(){if("undefined"!=typeof WOW){new WOW({boxClass:"getwid-anim",mobile:!1}).init()}},u=function(){t(".wp-block-getwid-section:not(.getwid-init)").each(function(e){t(this).addClass("getwid-init");var i=t(this),n=i.find(".wp-block-getwid-section__background-video.source-media-library").get(0),o=i.find(".getwid-background-video-play"),a=i.find(".getwid-background-video-mute");i.find(".wp-block-getwid-section__background-video.source-media-library").on("play",function(t){o.html('<i class="getwid-icon getwid-icon-pause"></i>')}).on("pause",function(t){o.html('<i class="getwid-icon getwid-icon-play"></i>')}),i.on("click",".getwid-background-video-play",function(t){t.preventDefault(),n&&(n.paused?n.play():n.pause())}),i.ready(function(){n&&(n.paused?o.html('<i class="getwid-icon getwid-icon-play"></i>'):o.html('<i class="getwid-icon getwid-icon-pause"></i>'),n.muted?a.html('<i class="getwid-icon getwid-icon-mute"></i>'):a.html('<i class="getwid-icon getwid-icon-volume-up"></i>'))}),i.on("click",".getwid-background-video-mute",function(t){t.preventDefault(),n&&(n.muted=!n.muted,n.muted?a.html('<i class="getwid-icon getwid-icon-mute"></i>'):a.html('<i class="getwid-icon getwid-icon-volume-up"></i>'))})})};s(),r(),l(),u()})}(jQuery)},535:function(t,e){/*!
 * getwid-tabs
 */
!function(t){t(document).ready(function(e){function i(t){for(var e="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=i.length,o=0;o<t;o++)e+=i.charAt(Math.floor(Math.random()*n));return e}t(document.body).on("post-load",function(t){n()});var n=function(){var e=t(".wp-block-getwid-tabs:not(.getwid-init)"),n=0;e.each(function(e){var o=i(5);t(this).addClass("getwid-init"),n=t(this).data("active-tab");t(this).find(".wp-block-getwid-tabs__nav-links");t(this).find(".wp-block-getwid-tabs__nav-link").each(function(e,i){t(i).find("a").attr("href","#tab-".concat(o,"-").concat(e))}),t(this).find(".wp-block-getwid-tabs__tab-content-wrapper, > .wp-block-getwid-tabs__tab-content").each(function(e,i){t(i).attr("id","tab-".concat(o,"-").concat(e))}),t(this).find(".wp-block-getwid-tabs__nav-link").each(function(e,i){var n=t(i).closest(".wp-block-getwid-tabs").find(">.wp-block-getwid-tabs__nav-links");t(i).detach(),n.append(i);var o={};t.each(t(i)[0].attributes,function(t,e){o[e.nodeName]=e.nodeValue}),t(i).replaceWith(function(){return t("<li/>",o).append(t(i).contents())})}),t(this).find(".wp-block-getwid-tabs__tab-content-wrapper").eq(n).addClass("is-active-tab"),t(this).tabs({active:n,activate:function(e,i){i.newPanel.closest(".wp-block-getwid-tabs").find(".wp-block-getwid-tabs__tab-content-wrapper").removeClass("is-active-tab"),i.newPanel.addClass("is-active-tab"),t("html, body").add(window,document).stop()}})})};n()})}(jQuery)},536:function(t,e){/*!
 * getwid-accordion
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){var e=t(".wp-block-getwid-accordion:not(.getwid-init)"),i=0;e.each(function(e,n){t(this).addClass("getwid-init"),i="none"!=t(this).data("active-element")&&parseInt(t(this).data("active-element"),10),t(n).accordion({icons:!1,animate:!1,collapsible:!0,active:i,heightStyle:"content",create:function(t,e){},activate:function(e,i){if(i.newPanel.length){var n=i.newPanel.find(".wp-block-getwid-accordion__content").outerHeight(!0);n&&t(i.newPanel).animate({height:n},{queue:!1,duration:500,complete:function(){t(this).css("height","")}})}if(i.oldPanel.length){var o=i.oldPanel.find(".wp-block-getwid-accordion__content").outerHeight(!0);o&&(t(i.oldPanel).css("height",o),t(i.oldPanel).animate({height:0},{queue:!1,duration:500,complete:function(){t(this).css("height","")}}))}}})})};i()})}(jQuery)},537:function(t,e){/*!
 * getwid-toggle
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-toggle:not(.getwid-init)").each(function(e,i){t(this).addClass("getwid-init"),t(i).find(".wp-block-getwid-toggle__row").on("click",".wp-block-getwid-toggle__header-wrapper",function(e){var i=t(this).parent(),n=i.find(".wp-block-getwid-toggle__content-wrapper"),o=i.find(".wp-block-getwid-toggle__content").outerHeight(!0);e.preventDefault(),i.hasClass("is-active")?(i.removeClass("is-active"),n.css("height",o),t(n).animate({height:0},{queue:!1,duration:500,complete:function(){t(this).css("height","")}})):(t(n).animate({height:o},{queue:!1,duration:500,complete:function(){t(this).css("height","")}}),i.addClass("is-active"))})})};i()})}(jQuery)},538:function(t,e,i){"use strict";var n=i(21);/*!
 * getwid-icon-box
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-icon-box:not(.getwid-init)").each(function(e,i){t(i).addClass("getwid-init"),t(".getwid-animation.wp-block-getwid-icon-box").on("mouseenter",function(){Object(n.a)(t(this).find(".wp-block-getwid-icon-box__icon-wrapper"),{animation:t(this).attr("data-animation")})})})};i()})}(jQuery)},539:function(t,e,i){"use strict";var n=i(21);/*!
 * getwid-media-text-slider
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){var e,i,o,a,d,c,s,r,l=t(".wp-block-getwid-media-text-slider:not(.getwid-init) .wp-block-getwid-media-text-slider__content");l.each(function(l){s=t(this),s.closest(".wp-block-getwid-media-text-slider").addClass("getwid-init"),r=void 0!==t(this).closest(".wp-block-getwid-media-text-slider").data("animation"),e=1==s.data("slide-autoplay"),i=1==s.data("slide-pause-on-hover"),o=parseInt(s.data("slide-autoplay-speed")),a="fade"==s.data("slide-effect"),d=parseInt(s.data("slide-speed")),c=1==s.data("infinite"),r&&t(this).find(".wp-block-getwid-media-text-slider-slide .wp-block-getwid-media-text-slider-slide-content__content").css("opacity","0"),s.on("init",function(){if(c)if(1==a)var e=t(this).find(".wp-block-getwid-media-text-slider-slide__content-wrapper").eq(0).find(".wp-block-getwid-media-text-slider-slide-content__content");else var e=t(this).find(".wp-block-getwid-media-text-slider-slide__content-wrapper").eq(1).find(".wp-block-getwid-media-text-slider-slide-content__content");else var e=t(this).find(".wp-block-getwid-media-text-slider-slide__content-wrapper").first().find(".wp-block-getwid-media-text-slider-slide-content__content");r&&e.css("opacity","1")});var u=!1;s.on("beforeChange",function(t,e,i,n){u=i==n}),s.on("afterChange",function(e,i,o){if(!u){r&&t(this).find(".wp-block-getwid-media-text-slider-slide .wp-block-getwid-media-text-slider-slide-content__content").css("opacity","0");var a=t(this).find('.wp-block-getwid-media-text-slider-slide[data-slick-index="'+o+'"]').find(".wp-block-getwid-media-text-slider-slide-content__content");r&&a.length&&Object(n.a)(a,{animation:t(this).closest(".wp-block-getwid-media-text-slider").data("animation"),duration:t(this).closest(".wp-block-getwid-media-text-slider").data("duration"),delay:t(this).closest(".wp-block-getwid-media-text-slider").data("delay")},a.css("opacity","1"))}});var p=t(this).closest(".".concat("wp-block-getwid-media-text-slider")),w=!p.hasClass("has-arrows-none"),f=!p.hasClass("has-dots-none");s.slick({rows:0,slidesToShow:1,slidesToScroll:1,autoplay:e,pauseOnHover:i,autoplaySpeed:o,fade:a,speed:d,infinite:c,arrows:w,dots:f})})};i()})}(jQuery)},540:function(t,e){/*!
 * getwid-images-slider
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){var e,i,n,o,a,d,c,s,r,l,u,p,w,f,g,m,h,_,b,v=t(".wp-block-getwid-images-slider:not(.getwid-init) .wp-block-getwid-images-slider__wrapper");v.length&&"undefined"!=typeof imagesLoaded&&v.each(function(v){e=t(this),e.closest(".wp-block-getwid-images-slider").addClass("getwid-init"),e.imagesLoaded().done(function(e){var v=t(e.elements[0]);i="fade"==v.data("effect"),n=v.data("slides-show")&&"slide"==v.data("effect")?parseInt(v.data("slides-show")):1,o=v.data("slides-show-laptop")?parseInt(v.data("slides-show-laptop")):1,a=v.data("slides-show-tablet")?parseInt(v.data("slides-show-tablet")):1,d=v.data("slides-show-mobile")?parseInt(v.data("slides-show-mobile")):1,c=v.data("slides-scroll")?parseInt(v.data("slides-scroll")):1,s=1==v.data("autoplay"),r=parseInt(v.data("autoplay-speed"))?parseInt(v.data("autoplay-speed")):2e3,l=1==v.data("infinite"),u=parseInt(v.data("animation-speed")),p=1==v.data("center-mode"),w=1==v.data("variable-width"),f=1==v.data("pause-hover"),g="none"!=v.data("arrows"),m="none"!=v.data("dots"),h=v.data("height")?v.data("height"):void 0,_=!!v.data("reset-on-tablet"),b=!!v.data("reset-on-mobile"),t(e.elements[0]).slick({arrows:g,dots:m,rows:0,slidesToShow:n,slidesToScroll:c,autoplay:s,autoplaySpeed:r,fade:i,speed:u,infinite:l,centerMode:p,variableWidth:w,pauseOnHover:f,adaptiveHeight:!0,responsive:[{breakpoint:991,settings:{slidesToShow:o,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:a,slidesToScroll:1}},{breakpoint:468,settings:{slidesToShow:d,slidesToScroll:1}}]})})})};i()})}(jQuery)},541:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__=__webpack_require__(13),__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__);/*!
 * getwid-map
 */
!function($){var _this=this;$(document).ready(function(event){function removeAllAttributes(t){var e=$.map(t[0].attributes,function(t){return t.name});$.each(e,function(e,i){"class"!=i&&t.removeAttr(i)})}function mapStyles(mapData){var mapStyle=mapData.mapStyle,customStyle=mapData.customStyle;if("object"==__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(mapStyle))return null;if("default"!=mapStyle){if("custom"!=mapStyle)return stylesArr[mapStyle];try{return eval(customStyle)}catch(t){if(!(t instanceof SyntaxError))throw t;console.error(t.message)}}}function initMarkers(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t.mapMarkers,o=n[e].coords,a=new google.maps.Marker({position:o,map:i,draggable:!1,animation:google.maps.Animation.DROP});n[e].bounce&&setTimeout(function(){return a.setAnimation(google.maps.Animation.BOUNCE)},2e3);var d="";""!=unescape(n[e].description)&&(d="\n\t\t\t\t\t<div class='getwid-poi-info-window'>\n\t\t\t\t\t\t".concat(_unescape(n[e].description),"\n\t\t\t\t\t</div>\n\t\t\t\t")),attachMessage(a,d,n[e].popUpOpen,n[e].popUpMaxWidth)}function attachMessage(t,e,i,n){var o=new google.maps.InfoWindow({content:e,maxWidth:n});i&&""!=o.content&&o.open(t.get("map"),t),google.maps.event.clearInstanceListeners(t),t.addListener("click",function(){""!=o.content&&o.open(t.get("map"),t)})}$(document.body).on("post-load",function(t){getwid_init_map()});var getwid_init_map=function(){var t=$(".wp-block-getwid-map:not(.getwid-init)");"undefined"!=typeof google?t.each(function(t,e){$(_this).addClass("getwid-init"),$(e).find(".wp-block-getwid-map__points").remove();var i=$(e).find(".wp-block-getwid-map__container")[0],n=$(e).data("map-center"),o=$(e).data("map-markers"),a=$(e).data("map-zoom"),d=$(e).data("map-style"),c=$(e).data("custom-style"),s=$(e).data("zoom-control"),r=$(e).data("type-control"),l=$(e).data("interaction"),u=$(e).data("street-view-control"),p=$(e).data("full-screen-control");removeAllAttributes($(e));var w={mapCenter:n,mapZoom:a,interaction:l,mapStyle:d,customStyle:c,zoomControl:s,mapTypeControl:r,streetViewControl:u,fullscreenControl:p,mapMarkers:o},f=new google.maps.Map(i,{center:n,styles:mapStyles(w),gestureHandling:l,zoomControl:s,mapTypeControl:r,streetViewControl:u,fullscreenControl:p,zoom:a});void 0!==o&&o.length&&$.each(o,function(t,e){initMarkers(w,t,f)})}):t.length&&t.each(function(t,e){var i=$(e);i.find(".wp-block-getwid-map__container").remove(),$(i).prepend('<iframe src="https://www.google.com/maps/embed" style="border:0;" allowfullscreen="" width="100%" height="400px" frameborder="0"></iframe>')})};getwid_init_map()})}(jQuery)},542:function(t,e,i){"use strict";var n=i(21);/*!
 * getwid-image-box
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-image-box:not(.getwid-init)").each(function(e,i){t(i).addClass("getwid-init"),t(".getwid-animation.wp-block-getwid-image-box").on("mouseenter",function(){Object(n.a)(t(this).find(".wp-block-getwid-image-box__image-wrapper"),{animation:t(this).attr("data-animation")})})})};i()})}(jQuery)},543:function(t,e){/*!
 * getwid-progress-bar
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-progress-bar:not(.getwid-init)").each(function(e){function i(e){c.find(t("".concat(d,"__progress"))).css("width","".concat(e,"%")),c.find(t("".concat(d,"__percent"))).text("".concat(e,"%"))}function n(e){var i=c.find(t("".concat(d,"__progress"))),n=function(){return Math.round(i.width()/i.parent().width()*100)};i.animate({width:"".concat(e,"%")},{duration:2e3,progress:function(){c.find(t("".concat(d,"__percent"))).text(n()+"%")}})}t(this).addClass("getwid-init");var o,a,d=".wp-block-getwid-progress-bar",c=t(this);o=c.find("".concat(d,"__wrapper")).data("fill-amount"),a=c.find("".concat(d,"__wrapper")).data("is-animated");var s=c.find(t("".concat(d,"__wrapper"))),r=new Waypoint({element:s.get(0),handler:function(){a?n(o):i(o),r.destroy()},offset:"100%"});t(window).resize(function(){i(o)})})};i()})}(jQuery)},544:function(t,e){/*!
 * getwid-circle-progress-bar
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-circle-progress-bar:not(.getwid-init)").each(function(e){function i(){var t=w.find("".concat(p,"__canvas")).get(0);t.width=parseFloat(r),t.height=parseFloat(r)}function n(t,e){var n=w.find("".concat(p,"__canvas")).get(0).getContext("2d"),o="auto"===l?r/14:l,c=r/2,s=Math.PI/180*-90;i(),n.clearRect(0,0,r,r),n.beginPath(),n.arc(c,c,c-o/2,s,s+2*Math.PI),n.lineWidth=o,n.strokeStyle=a,n.stroke(),n.beginPath(),n.arc(c,c,c-o/2,s,s+2*Math.PI*(t/100)),n.lineWidth=o,n.strokeStyle=d,n.stroke(),n.beginPath(),n.textAlign="center",n.font="16px serif",n.fillText(e||t+"%",c+6.5,c+5),n.stroke()}function o(t){var e=0,i=setInterval(function(){n(e,t),++e>c&&clearInterval(i)},35)}var a,d,c,s,r,l,u,p=".wp-block-getwid-circle-progress-bar",w=t(this);t(this).addClass("getwid-init"),a=w.find("".concat(p,"__wrapper")).data("background-color")?w.find("".concat(p,"__wrapper")).data("background-color"):"#eeeeee",d=w.find("".concat(p,"__wrapper")).data("text-color")?w.find("".concat(p,"__wrapper")).data("text-color"):"#0000ee",c=w.find("".concat(p,"__wrapper")).data("fill-amount"),s=w.find("".concat(p,"__wrapper")).data("is-animated"),r=w.find("".concat(p,"__wrapper")).data("size"),l=w.find("".concat(p,"__wrapper")).data("thickness"),u=w.find("".concat(p,"__wrapper")).data("value");var f=w.find(t("".concat(p,"__wrapper"))),g=new Waypoint({element:f.get(0),handler:function(){s?o(u):n(c,u),g.destroy()},offset:"100%"})})};i()})}(jQuery)},545:function(t,e){/*!
 * getwid-counter
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-counter:not(.getwid-init)").each(function(e){function i(){if(!r)return null;switch(w){case"outExpo":return function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e};case"outQuintic":return function(t,e,i,n){var o=(t/=n)*t,a=o*t;return e+i*(a*o+-5*o*o+10*a+-10*o+5*t)};case"outCubic":return function(t,e,i,n){var o=(t/=n)*t;return e+i*(o*t+-3*o+3*t)}}}function n(){switch(f){case"eastern_arabic":return["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];case"farsi":return["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];default:return null}}function o(){return{startVal:a,decimalPlaces:c,duration:s,useEasing:r,useGrouping:l,separator:u,decimal:p,easingFn:i(),numerals:n()}}t(this).addClass("getwid-init");var a,d,c,s,r,l,u,p,w,f,g=".wp-block-getwid-counter",m=t(this);a=m.find("".concat(g,"__wrapper")).data("start"),d=m.find("".concat(g,"__wrapper")).data("end"),c=m.find("".concat(g,"__wrapper")).data("decimal-places"),s=m.find("".concat(g,"__wrapper")).data("duration"),r=m.find("".concat(g,"__wrapper")).data("use-easing"),l=m.find("".concat(g,"__wrapper")).data("use-grouping"),u=m.find("".concat(g,"__wrapper")).data("separator"),p=m.find("".concat(g,"__wrapper")).data("decimal"),w=m.find("".concat(g,"__wrapper")).data("easing-fn"),f=m.find("".concat(g,"__wrapper")).data("numerals");var h=m.find("".concat(g,"__number")),_=new Waypoint({element:h.get(0),handler:function(){new CountUp(h.get(0),d,o()).start(),_.destroy()},offset:"100%"})})};i()})}(jQuery)},546:function(t,e){/*!
 * getwid-contact-form
 */
!function(t){var e=this;t(document).ready(function(i){t(document.body).on("post-load",function(t){n()});var n=function(){t(".wp-block-getwid-contact-form__form:not(.getwid-init)").each(function(i,n){t(e).addClass("getwid-init");var o,a=t(n).find("p[class$=__result]"),d=t(n).find("button[type='submit']"),c=t(n).find(".wp-block-getwid-captcha");c.length&&function(){if(c.length){var t=c.data("sitekey"),e=c.data("theme");grecaptcha.ready(function(){o=grecaptcha.render(c[0],{sitekey:t,theme:e})})}}(),a.hide(),t(n).submit(function(e){e.preventDefault(),d.prop("disabled",!0);var i={action:"getwid_send_mail",security:Getwid.nonces.recaptcha_v2_contact_form,data:t(n).serialize()};""!=a.text()&&a.hide(300),t.post(Getwid.ajax_url,i,function(e){a.hasClass("success")?a.removeClass("success"):a.hasClass("fail")&&a.removeClass("fail"),d.prop("disabled",!1),c.length&&e.success&&grecaptcha.reset(o),e.success?(t(n)[0].reset(),a.addClass("success")):a.addClass("fail"),a.html(e.data),a.show(300)})})})};n()})}(jQuery)},547:function(t,e){/*!
 * getwid-post-carousel
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){var e=t(".wp-block-getwid-post-carousel:not(.getwid-init) .wp-block-getwid-post-carousel__wrapper");e.length&&"undefined"!=typeof imagesLoaded&&e.each(function(e){getwid_post_carousel=t(this);var i=getwid_post_carousel.data("slider-option"),n=i.sliderSlidesToShowDesktop,o=i.getwid_slidesToShowLaptop,a=i.getwid_slidesToShowTablet,d=i.getwid_slidesToShowMobile,c=i.getwid_slidesToScroll,s=i.getwid_autoplay,r=i.getwid_autoplay_speed,l=i.getwid_infinite,u=i.getwid_animation_speed,p=i.getwid_center_mode,w=i.getwid_pause_on_hover,f=i.getwid_arrows,g=i.getwid_dots;w=!1,c=parseInt(c),n=parseInt(n),o=parseInt(o),d=parseInt(d),a=parseInt(a),f="none"!=f,g="none"!=g,getwid_post_carousel.closest(".wp-block-getwid-post-carousel").addClass("getwid-init"),getwid_post_carousel.imagesLoaded().done(function(e){t(e.elements[0]).slick({arrows:f,dots:g,rows:0,slidesToShow:n,slidesToScroll:c,autoplay:s,autoplaySpeed:r,fade:!1,speed:u,infinite:l,centerMode:p,variableWidth:!1,pauseOnHover:w,adaptiveHeight:!0,responsive:[{breakpoint:991,settings:{slidesToShow:o,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:a,slidesToScroll:1}},{breakpoint:468,settings:{slidesToShow:d,slidesToScroll:1}}]})})})};i()})}(jQuery)},548:function(t,e){/*!
 * getwid-post-slider
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){var e=t(".wp-block-getwid-post-slider:not(.getwid-init) .wp-block-getwid-post-slider__content");e.length&&"undefined"!=typeof imagesLoaded&&e.each(function(e){getwid_post_slider=t(this);var i=getwid_post_slider.data("slider-option"),n=i.getwid_fade_effect,o=i.getwid_autoplay,a=i.getwid_autoplay_speed,d=i.getwid_infinite,c=i.getwid_animation_speed,s=i.getwid_arrows,r=i.getwid_dots;n="fade"==n,getwid_pause_on_hover=!1,s="none"!=s,r="none"!=r,getwid_post_slider.closest(".wp-block-getwid-post-slider").addClass("getwid-init"),getwid_post_slider.imagesLoaded().done(function(e){t(e.elements[0]).slick({arrows:s,dots:r,rows:0,slidesToShow:1,slidesToScroll:1,autoplay:o,autoplaySpeed:a,fade:n,speed:c,infinite:d,centerMode:!1,variableWidth:!1,pauseOnHover:!1,adaptiveHeight:!0})})})};i()})}(jQuery)},549:function(t,e){/*!
 * getwid-video-popup
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-video-popup:not(.getwid-init)").each(function(e){t(this).addClass("getwid-init"),t(this).find(".wp-block-getwid-video-popup__link").magnificPopup({mainClass:"getwid-video-popup",type:"iframe",iframe:{patterns:{youtube:{index:"youtu",id:function(t){var e="";if(-1!=t.indexOf("youtube.com/")){var i=t.match(/v=(.+)(\&|$)/);void 0!==i[1]&&(e=i[1])}if(-1!=t.indexOf("youtu.be/")){var n=t.match(/be\/(.+)(\?|$)/);void 0!==n[1]&&(e=n[1])}return-1!=e.indexOf("?")?e+="&autoplay=1":e+="?autoplay=1",e},src:"//www.youtube.com/embed/%id%"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},dailymotion:{index:"dailymotion.com",id:function(t){var e=t.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);return null!==e?void 0!==e[4]?e[4]:e[2]:null},src:"https://www.dailymotion.com/embed/video/%id%"}}}})})};i()})}(jQuery)},550:function(t,e){/*!
 * getwid-mailchimp
 */
!function(t){var e=this;t(document).ready(function(i){t(document.body).on("post-load",function(t){n()});var n=function(){t(".wp-block-getwid-mailchimp__form:not(.getwid-init)").each(function(i,n){t(e).addClass("getwid-init");var o=t(n).find("p[class$=__result]"),a=t(n).find("button[type='submit']");o.hide(),t(n).submit(function(e){e.preventDefault(),a.prop("disabled",!0);var i={action:"getwid_subscribe",data:t(n).serialize()};""!=o.text()&&o.hide(300),t.post(Getwid.ajax_url,i,function(e){o.hasClass("success")?o.removeClass("success"):o.hasClass("fail")&&o.removeClass("fail"),a.prop("disabled",!1),e.success?(t(n)[0].reset(),o.addClass("success")):o.addClass("fail"),o.html(e.data),o.show(300)})})})};n()})}(jQuery)},551:function(t,e,i){"use strict";var n=i(21);/*!
 * getwid-image-hotspot
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-image-hotspot:not(.getwid-init)").each(function(e,i){t(this).addClass("getwid-init");var o=t(i).data("trigger"),a=t(i).data("theme"),d=t(i).data("tooltip-animation"),c=t(i).data("arrow"),s=t(i).data("image-points");t(".getwid-animation .wp-block-getwid-image-hotspot__dot").on("mouseenter",function(){Object(n.a)(t(this),{animation:t(this).closest(".getwid-animation").attr("data-animation")})}),t(i).find(".wp-block-getwid-image-hotspot__dot").each(function(e,i){var n=t(i),r=n.data("point-id"),l=_unescape(n.find(".wp-block-getwid-image-hotspot__dot-title").html()),u=_unescape(s[r].content),p=s[r].popUpOpen,w=s[r].placement,f=s[r].popUpWidth,g=tippy(i,{maxWidth:parseInt(f,10),hideOnClick:"multiple"!=o||"toggle",theme:a,animation:d,animateFill:!1,interactive:!0,trigger:"hover"==o?"mouseenter":"click",arrow:c,placement:w,allowHTML:!0,content:'<div class="wp-block-getwid-image-hotspot__tooltip"><div class="wp-block-getwid-image-hotspot__tooltip-title">'.concat(l,'</div><div class="wp-block-getwid-image-hotspot__tooltip-content">').concat(u,"</div></div>")});p&&setTimeout(function(){g.show()},1e3),n.find(".wp-block-getwid-image-hotspot__dot-description").remove(),new Waypoint({element:i,handler:function(e){t(this.element).addClass("is-visible")},offset:"100%"})})})};i()})}(jQuery)},552:function(t,e,i){"use strict";var n=i(27),o=i.n(n);/*!
 * getwid-content-timeline
 */
!function(t){var e=this;t(document).ready(function(i){t(document.body).on("post-load",function(t){n()});var n=function(){t(".wp-block-getwid-content-timeline:not(.getwid-init)").each(function(i,n){t(e).addClass("getwid-init");var a=!1,d="wp-block-getwid-content-timeline-item",c=t(n).find(".".concat(d)),s="none"!=t(n).data("animation")?t(n).data("animation"):null,r=t(n).find("div[class$=__point]").data("point-color"),l=t(n).data("filling");t.each(c,function(e,i){s&&(i.getBoundingClientRect().top>.8*window.innerHeight?t(i).addClass("is-hidden"):t(i).addClass(s));var n=t(i).find(".".concat(d,"__content-wrapper"));(0==n.children().length||n.find(".".concat(d,"__mobile-meta")).is(":only-child"))&&n.addClass("has-no-content")});var u=function(e){t.each(c,function(i,n){t(n).hasClass("is-hidden")&&n.getBoundingClientRect().top<=.8*window.innerHeight&&(t(n).removeClass("is-hidden"),t(n).addClass(e))}),a=!1};s&&t(document).scroll(function(){a||(a=!0,window.requestAnimationFrame?window.requestAnimationFrame(function(){return u(s)}):setTimeout(function(){return u(s)},250))});var p=t(window).height()/2,w=function(){var e=t(n).find(".".concat(d,"__point")),i=0;t.each(e,function(t,n){e[t+1]&&(i+=e[t+1].getBoundingClientRect().top-n.getBoundingClientRect().top)});var a=t(n).find("div[class$=__line]"),c=e.get(),s=o()(c),r=s[0],l=(s.slice(1),t(r).position().top+t(r).height()/2);a.css({height:i,top:l})},f=function(){var e=t(n).find(".".concat(d,"__point")),i=e.get(),a=o()(i);a[0],a.slice(1).length&&t.each(e,function(e,i){var n=i.getBoundingClientRect().top,o=t(i).parents(".".concat(d))[0];n<=p?(t(o).hasClass("is-active")||t(o).addClass("is-active"),t(i).find(":first-child").css({borderColor:r||""})):(t(o).hasClass("is-active")&&t(o).removeClass("is-active"),t(i).find(":first-child").css({borderColor:""}))})},g=function(){var e=t(n).find(".".concat(d,"__point")),i=t(n).find("div[class*=__bar]")[0],a=i.getBoundingClientRect().top,c=e.toArray(),s=o()(c),r=s[0],l=s.slice(1),u=p-r.getBoundingClientRect().top;if(l.length){var w=l.slice(-1).pop(),f=w.getBoundingClientRect().top;a<=p&&f>=p&&t(i).css({height:u}),a>=p&&t(i).css({height:0}),f<=p&&t(i).css({height:"100%"})}};t(document).ready(function(){var e=setInterval(function(){"complete"==document.readyState&&(w(),l&&(f(),g()),l&&t(document).scroll(function(){f(),g()}),clearInterval(e))},1e3)}),t(window).resize(function(){w(),l&&(f(),g())})})};n()})}(jQuery)},553:function(t,e){/*!
 * getwid-countdown
 */
!function(t){t(document).ready(function(e){t(document.body).on("post-load",function(t){i()});var i=function(){t(".wp-block-getwid-countdown:not(.getwid-init)").each(function(e,i){t(this).addClass("getwid-init");var n=jQuery(i).find(".wp-block-getwid-countdown__content"),o=n.data("datetime"),a=n.data("years"),d=n.data("months"),c=n.data("weeks"),s=n.data("days"),r=n.data("hours"),l=n.data("minutes"),u=n.data("seconds"),p=n.data("bg-color"),w="negative"==o?"":o,f="";a&&(f+="Y"),d&&(f+="O"),c&&(f+="W"),s&&(f+="D"),r&&(f+="H"),l&&(f+="M"),u&&(f+="S"),n.countdown({until:w,format:f,onTick:function(t){var e=jQuery(".countdown-section",n);p&&e.css("background-color",p)}})})};i()})}(jQuery)}});