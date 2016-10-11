(function(m,C){function u(){}function D(a){var b=Object.prototype.toString;return"[object Array]"===b.call(a)||"[object NodeList]"===b.call(a)}function M(a,b,c,d){if(d)for(;a=a[b]();)if(f.isTag(a,d))return a;return(a=a[c])&&3==a.nodeType?a[b](d):a}function p(a,b){var c=typeof a,d=b.split("|"),e=d.length;if(1>=e)return d[0]===c;if(1<e){for(var f=[],g=0;g<e;g++)f.push(d[g]===c);return f.has(!0)}}function E(a,b){return b?(a._endStack=b,a):a._endStack||document.body}function F(){var a=arguments[0]||{},b=1,c=arguments.length,d=!1,e;"boolean"===typeof a&&(d=a,a=arguments[1]||{},b=2);"object"!==typeof a&&"function"!=typeof a&&(a={});c==b&&(a=this,--b);for(;b<c;b++)if(null!=(e=arguments[b]))for(var f in e){var g=a[f],h=e[f];a!==h&&(d&&h&&"object"===typeof h&&!h.nodeType?a[f]=this(d,g||(null!=h.length?[]:{}),h):h!==C&&(a[f]=h))}return a}function N(a){a.preventDefault()}function O(){var a=[];this.append=function(b){a.push(b);return this};this.clear=function(){a.length=0;return this};this.toString=function(){return a.join(j)}}function P(a,b,c,d,e){var i=!e&&"function"!==typeof d,g=i?d:e,g=F({ease:"easeOut",before:null,after:null,coverStyle:!1,toggle:!1,callback:i?null:d,queue:!0},g),d=i?g.callback:d;if(g.toggle)for(var h in b)b[h]=g[h+b[h]].call(a);"function"===typeof g.before&&g.before.call(a);var s=f.Tween[g.ease],k=j,e=function(b,c){this.property=b;a.currentStyle||m.getComputedStyle(a,null);var d=a.css(b);this.beginValue=parseFloat(d.replace("px",k),0);this.endValue=parseFloat((k+c).replace("px",k),0);this.unitchar=(this.isnumber="opacity"==b)?k:"px"},l=[];a._$isStop_=!1;for(var n in b)l.push(new e(n,b[n]));var z=new f.animate(function(){f.each(l,function(b){var c=z.easeValue(b.beginValue,b.endValue,s),c=b.isnumber?c:Math.ceil(c);a._$isStop_=!z.isAnimation();B.has(b.property)?a[b.property]=c:a.style[b.property]=c+b.unitchar})});z.duration=w[c]||c||w["default"];z.onend=function(){l.clear();"function"===typeof g.after&&g.after.call(a);g.queue&&"function"!==typeof d&&a.dequeue();"function"===typeof d&&d.call(a)};z.execute()}function Q(a,b,c,d,e,f){"object"==typeof b&&(f=e,e=d,d=c,c=b,b=null);"function"==typeof c&&(f=e,e=d,d=c,c=null);return new R({method:a,url:b,param:c,done:d,fail:e,complete:f})}function v(a,b,c,d,e,i,g){if(!a)return this;if(f.touchAble&&f.browser.mobile){var h,s,j=!1,l=-1,n=0,m,p=-1;this.bind("touchstart",function(i){b==k.slide&&e&&i.preventDefault();s=h=0;j=!0;pageX=i.touches[0].pageX;pageY=i.touches[0].pageY;if(b==k.sequenceTap)n=0,l=setInterval(function(){if(j&&Math.abs(h)<c&&Math.abs(s)<c){var b=a.call(this,i);n++;if(!0!=b)return}clearInterval(l)},d);else if(b==k.doubleTap){var U=m;m=f.timestamp();if(n>=g||0>n||m-U>d)n=0;n++}else b==k.longTap&&(p=setTimeout(function(){j&&(Math.abs(h)<c&&Math.abs(s)<c)&&(a.call(this,i),i.preventDefault())},d))}).bind("touchmove",function(a){h=a.touches[0].pageX-pageX;s=a.touches[0].pageY-pageY}).bind("touchend",function(e){clearInterval(l);clearTimeout(p);j=!1;if(b==k.slide)Math.abs(h)>c?(a.call(this,e,0<h?0:2),e.preventDefault()):Math.abs(s)>c&&(a.call(this,e,0<s?1:3),e.preventDefault()),m=f.timestamp();else if((b==k.tap||b==k.sequenceTap&&0==n||b==k.doubleTap&&f.timestamp()-m<d&&n==g)&&Math.abs(h)<c&&Math.abs(s)<c)!0!==i&&(e.preventDefault(),e.stopPropagation()),a.call(this,e)})}else b==k.tap||b==k.sequenceTap?this.bind("click",a):b==k.doubleTap&&this.bind("dblclick",a);return this}function R(a){var b=this,c=!1,d=f.extend({url:"",param:{},method:"GET",done:u,fail:u,complete:u,async:!0},a),e=b.request=new XMLHttpRequest;b.done=b.onSuccess=function(a){d.done=a||u;return b};b.fail=b.onFail=function(a){d.fail=a||u;return b};b.complete=b.onFinish=function(a){d.complete=a||u;return b};b.abort=function(){e.abort();c=!0;return b};this.isComplete=function(){return c};e.onreadystatechange=function(){if(4==this.readyState){if(200<=this.status&&400>this.status){var a,b=this.responseText||"";if(b&&(b.startWith("{")&&b.endWith("}")||b.startWith("[")&&b.endWith("]")))try{a=JSON.parse(b)}catch(e){a=b}else a=b;d.done.call(this,a)}else d.fail&&d.fail.call(this,this);c=!0;d.complete.call(this,this)}};var a=d.url||"",i=null;if("GET"==d.method)d.param&&(!a.endWith(q)&&!a.contains(q)&&(a+=q),a+=f.url(d.param));else var i=f.url(f.extend(!0,f.reverseUrl(a),d.param)),g=-1,a=(a=1<a.length&&-1!=(g=a.indexOf(q))?a.substring(0,g):a)?a:q;e.open(d.method,a,d.async);e.setRequestHeader("not-redirect","true");e.setRequestHeader("ajaxRequest","true");e.setRequestHeader("Not-Accepts","Accept-Encoding");i&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded");e.send(i)}function S(a,b,c,d){var e=a.hasClass("_ourlinc_window_ani")?50:0;a.showView();b.showView();d&&d();0<e&&(a.delay(e),b.delay(e));a.queue(function(){c&&c.css("opacity","1");this.addClass("_ourlinc_window_show");this.css("top",(f.clientXY().y-this.offsetHeight)/2+"px").dequeue()});b.queue(function(){this.css("opacity",1).dequeue()})}function G(a,b,c,d){var e=a.hasClass("_ourlinc_window_ani")?500:0;a.removeClass("_ourlinc_window_show").delay(e).queue(function(){c&&c.css("opacity","0");this.hideView().dequeue()});b.css("opacity",0).delay(e).queue(function(){this.hideView().dequeue();setTimeout(d,50)})}var x,A,H=[],I=[],j="",J=!1,V="ontouchend"in document,y=navigator.userAgent.toLowerCase(),r=m,K={ie:!!document.all,android:-1<y.indexOf("android")||-1<y.indexOf("linux"),iphone:-1<y.indexOf("iphone"),mobile:-1<y.indexOf("mobile"),ipad:-1<y.indexOf("ipad"),weixin:!1},k={tap:1,slide:2,sequenceTap:3,doubleTap:4,longTap:5},W=r.requestAnimationFrame||r.mozRequestAnimationFrame||r.webkitRequestAnimationFrame||r.msRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},t=K.ie,X=["height","width"],B=["scrollTop"],Y=t?"attachEvent":"addEventListener",Z=t?"detachEvent":"removeEventListener",$="checkbox hidden email hidden number password radio tel text url textarea".split(" "),q="?",aa=RegExp("[`~!@＠%Y#$^&*()=|{}':;',\\[\\].<>/?~！#￥¥……&*（）&;—|{}【】‘；：”“'。，、？]"),w={none:0,"default":600,fast:300,slow:800,slower:1E3},ba="星期天 星期一 星期二 星期三 星期四 星期五 星期六".split(" "),ca=["今天","明天","后天"],da=m.$,f=m.$=m.Query=function(a,b,c){if("function"===typeof a)return f.ready(a),f;b=b?b:document;return(a=b.querySelectorAll(a))&&0<a.length?(c=c?a:1==a.length?a[0]:a,c.end||(c.end=E),c.end(b),c):null};f.Tween={linear:function(a,b,c,d){return c*a/d+b},easeOut:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeIn:function(a,b,c,d){return c*(a/=d)*a+b},easeOutBack:function(a,b,c,d){return(a/=d)<1/2.75?c*7.5625*a*a+b:a<2/2.75?c*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?c*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:c*(7.5625*(a-=2.625/2.75)*a+0.984375)+b}};var r={bind:function(a,b,c){var d=this;d.unbind(a,b);a=D(a)?a:[a];f.each(a,function(a){d[Y]((t?"on":j)+a,b,!!c)});return d},unbind:function(a,b){var c=this,d=D(a)?a:[a];f.each(d,function(a){c[Z]((t?"on":j)+a,b)});return c}},L={end:function(a){E(this,a)},eq:function(a){var b=this.length,a=0>a?b+a:a;return 0<b&&0<=a&&a<b?(a=this[a],a.end(this),a):null},callfn:function(a,b){console.warn("函数callfn不再推荐使用");for(var c="string"==typeof a,d=0;d<this.length;d++)if(c)this[d][a](b);else a(this[d],d);return this}};f.extend=F;try{x=Node,A=localStorage}catch(ea){x=Element}f.extend(HTMLFormElement.prototype,{bindsubmit:function(a){this.onsubmit=function(){return!!a()}},serialize:function(a){return f.url(this.serializeArray(),a)},serializeArray:function(){var a={},b=this.find("input",!0),c=this.find("select",!0),d=this.find("textarea",!0);b&&f.each(b,function(b){$.has(b.type)&&b.name&&(a[b.name]=b.value)});c&&f.each(c,function(b){b.name&&(a[b.name]=b.value)});d&&f.each(d,function(b){b.name&&(a[b.name]=b.value.replaceAll("\n"," "))});return a}});HTMLSelectElement.prototype.sel=function(a){var b=this.options;return p(a,"number")?(b[0>a||a>b.length?0:a].selected=!0,this):p(a,"string")?(f.each(b,function(b){if(b.value==a)return b.selected=!0,!1}),this):this.selectedIndex};f.extend(f,{version:1.7,agent:y,delay:function(a,b){return document.body.delay(a,b)},istype:p,fx:P,round2:function(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)},animate:function(a){function b(){W(function(){e=f.timestamp()-d;e>=c.duration&&(i=2,e=c.duration);a.call(c);if(1==i)b();else if("function"==typeof c.onend)c.onend()})}var c=this,d,e,i=0;c.onend;c.duration=600;this.execute=function(){0==i&&(d=f.timestamp(),i=1,b())};this.stop=function(){1==i&&(i=3)};this.isAnimation=function(){return 1==i};this.easeValue=function(a,b,d){return(d?d:f.Tween.easeOut)(e,a,b-a,c.duration)}},isArray:D,browser:K,ie:t,isempty:function(a){return a==C||null==a||0==a.length},touchAble:V,encode:function(a){return f.isempty(a)?j:encodeURIComponent(a)},decode:function(a){return f.isempty(a)?j:decodeURIComponent(a)},request:R,msgView:function(a){var b=this,c=F({delay:"slower",before:null,after:null,msg:"this a messge view",iswait:!1,top:0,ableBG:!0,duration:"fast"},a),d=c.iswait?0:w[c.delay]||c.delay,a=f.clientXY(),e=c.top||a.y/2-80,i=f.create("div"),g=f.create("div"),e={zIndex:1E7,top:e+30+"px",pointerEvents:"none",width:"100%",position:"fixed",textAlign:"center"};i.css({zIndex:99999,left:0,position:"fixed",top:0,width:a.x+"px",height:a.y+"px",display:c.ableBG?"block":"none"}).appendTo(document.body);g.addClass("_ourlinc_msgbody").css(e).appendTo(document.body);g.html("<table class='ourlinc_outer'><tr><td><div class='ourlinc_loading' /></td><td><div class='ourlinc_msg'></div></td></tr></table>");this.shadow=i;this.view=g;this.msgView=g.find(".ourlinc_msg");this.closed=!1;this.icon=g.find(".ourlinc_loading");g.find(".ourlinc_outer");f.each([g,i],function(){this.bind("touchstart",N)});this.msg=function(a,c){c?b.msgView.html(a):g.delay(200).queue(function(){g.removeClass("_ourlinc_msgbody_show").dequeue()}).delay(500).queue(function(){b.msgView.html(a);g.dequeue()}).queue(function(){g.addClass("_ourlinc_msgbody_show").dequeue()});return this};this.loading=function(a){this.icon.parent().css("display",a?"table-cell":"none");return this};this.delay=function(a){"now"==a?c.duration=500:(a=w[a]||a||0,0<a&&g.delay(a+500));return this};this.hide=function(a,d){this.delay(a);"function"==typeof a&&(d=a);g.queue(function(){g.removeClass("_ourlinc_msgbody_show").dequeue()}).delay(500).queue(function(){"function"==typeof c.after&&c.after.call(c);"function"==typeof d&&d.call(c);this.dequeue().remove();i.remove();b.closed=!0})};this.show=function(a){this.delay(a);(!a||0==a)&&g.delay(10);g.queue(function(){g.addClass("_ourlinc_msgbody_show").dequeue()}).delay(500).queue(function(){"function"==typeof c.before&&c.before.call(c);this.dequeue()});0<d&&g.delay(d).queue(function(){b.hide();this.dequeue()});return this};this.loading(c.iswait);b.msgView.html(c.msg)},noConflict:function(){m.$=da},gotoTop:function(a,b){if(b){var c=document.body.scrollTop,d=new f.animate(function(){scrollTo(0,this.easeValue(c,a))});d.duration=b;d.execute()}else scrollTo(0,a)},clientXY:function(){var a=0,b=0,b=document.documentElement,c=document.body,a=b.clientWidth||c.clientWidth,b=b.clientHeight||c.clientHeight;return{x:a,y:b}},pageXY:function(a){var a=a||document,b=a.documentElement,a=a.body;return{x:b.scrollWidth>a.scrollWidth?b.scrollWidth:a.scrollWidth,y:b.scrollHeight>a.scrollHeight?b.scrollHeight:a.scrollHeight}},get:function(a,b,c,d,e){return Q("GET",a,b,c,d,e)},getJSON:function(a,b,c,d){console.debug("getJSON已废弃，推荐使用get方法");return f.get(a,null,b,c,d)},post:function(a,b,c,d,e){return Q("POST",a,b,c,d,e)},getJSONP:function(a,b,c,d){a+=a.contains(q)?j:q;if("function"==typeof b&&c){var e="JSONP"+f.timestamp(),a=a+(a.contains("&")?"&":j),a=a+(c+"="+f.encode(e));m[e]=b}b=f.create("script").attr("src",a);d&&(b.onerror=d);document.querySelector("head").appendChild(b)},showmsg:function(a,b,c){return(new f.msgView(null!=a&&"object"==typeof a?a:{msg:a,delay:b,after:c,ableBG:!1})).show()},getRanUrl:function(a){return(a?j:"&")+"sign="+f.timestamp()},timestamp:function(){return Date.now()||(new Date).getTime()},ready:function(a){"function"!=!typeof a&&(J?a.call(m):H.push(a))},isTag:function(a,b){return a.tagName.toLowerCase()==b},getScrollTop:function(){var a=0;m.pageYOffset?a=m.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?a=document.documentElement.scrollTop:document.body&&(a=document.body.scrollTop);return a},Cookie:{set:function(a,b,c){a=a+"="+escape(b);b=new Date;c?b.setTime(b.getTime()+c):b.setFullYear(b.getFullYear()+1);a=a+";expires="+b.toGMTString();document.cookie=a},get:function(a){for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var d=b[c].split("=");if(d[0].trim()==a)return unescape(d[1])}return j},remove:function(a){var b=new Date;b.setTime(b.getTime()-1);document.cookie=a+"=v;expires="+b.toGMTString()},clear:function(){var a=new Date;a.setTime(a.getTime()-1);var b=a.toGMTString();f.each(document.cookie.match(/[^ =;]+(?=\=)/g),function(a){document.cookie=a+"=v;expires="+b})}},Storage:{get:function(a){try{var b=A.getItem(a);return b?unescape(b):j}catch(c){return j}},set:function(a,b){try{A.setItem(a,escape(b))}catch(c){}},remove:function(a){try{A.removeItem(a)}catch(b){}},clear:function(){try{A.clear()}catch(a){}}},findLocation:function(a,b,c){if(!navigator.geolocation&&c)c();else if(a)try{navigator.geolocation.getCurrentPosition(function(b){b=b.coords;a(b.longitude+","+b.latitude+","+b.accuracy)},b,{enableHighAcuracy:!1,timeout:1E4})}catch(d){b&&b(d)}},url:function(a,b){var c=new O,d;for(d in a)c.append(d+"="+(b?a[d]:encodeURIComponent(a[d]))+"&");c=c.toString();return 0<c.length?c.substring(0,c.length-1):j},reverseUrl:function(a){var a=a||"",b={};a.contains(q)&&((a=a.split(q)[1].split("&"))&&1<a.length)&&f.each(a,function(a){a=a.split("=");b[a[0]]=decodeURIComponent(a[1])});return b},weixinReady:function(a){"function"==typeof a&&I.push(a)},create:function(a,b){var c=document.createElement(a);b&&c.appendTo(b);return c},getdatedesc:function(a,b){var a=a.replaceAll("-","/"),c=new Date,d=new Date(a);if(c.getDate()==d.getDate()&&0>b)return null;d.setDate(d.getDate()+b);var e=d.getFullYear(),f=d.getMonth()+1,g=d.getDate(),h=c.getHours(),c=Math.round((d-c)/864E5),c=11<h?c+1:c,d=0<=c&&2>=c?ca[c]:ba[d.getDay()];return[e+"-"+(10>f?"0"+f:f)+"-"+(10>g?"0"+g:g),d]},each:function(a,b){if(f.isArray(a)&&"function"==typeof b)for(var c=0;c<a.length&&!1!==b.call(a[c],a[c],c);c++);},filter:function(a,b,c){var d=[];if(!a||0==a.length||!b)return c?null:d;for(var e=0;e<a.length;e++)if(!0==b.call(a[e],e)){if(!0===c)return a[e];d.push(a[e])}return c?null:d},windowPlugin:function(a,b,c){function d(){if(c){var b=f.clientXY(),d=b.y-(a==c?0:l.offsetHeight-c.offsetHeight)-parseInt(c.css("padding-top"))-parseInt(c.css("padding-bottom"))-parseInt(c.css("margin-top"))-parseInt(c.css("margin-bottom"));c.css("max-height",d-(b.y>b.x?60:20)+"px")}}function e(a,b){k=f.create("button",a).tap(function(){h.buttons.enter.handler.call(g)}).addClass("enter").textes(h.buttons.enter.name||"确定");b&&k.addClass(b)}function i(a,b){j=f.create("button",a).tap(function(){h.buttons.cancel.handler.call(g)}).addClass("cancel").textes(h.buttons.cancel.name||"取消");b&&j.addClass(b)}if(!a)return console.error("缺少容器"),null;var g=this;b&&b.tagName&&(c=b,b=null);var h=f.extend({nopadding:!1,css:{},cancelable:!0,animationable:!0,cancelcallback:u,buttons:{enter:{handler:null},cancel:{handler:null}}},b),j,k,l=f.create("div",document.body).addClass("_ourlinc_window"),n=f.create("div").addClass("_ourlinc_modal").bind("touchstart",N);l.parentNode.insertBefore(n,l);a.addClass("_ourlinc_window_content").appendTo(l).showView();a.css(h.css);if(h.buttons.enter&&h.buttons.enter.handler||h.buttons.cancel&&h.buttons.cancel.handler)if(b=f.create("div",a).addClass("_ourlinc_windowbuttons"),h.buttons.enter&&h.buttons.cancel){var p=f.create("div",b).addClass("float_left");i(p);b=f.create("div",b).addClass("float_right");e(b)}else h.buttons.enter?e(b,"one"):i(b,"one");if(c){c.addClass("_ourlinc_windowscroller");var q,r;l.bind("touchstart",function(a){q=0;r=a.touches[0].pageY;parseInt(c.css("max-height"))>c.scrollHeight?a.preventDefault():!a.target.hasClass("_ourlinc_windowscroller")&&!c.has(a.target)&&a.preventDefault()}).bind("touchmove",function(a){q=a.touches[0].pageY-r;(0<q&&0==c.scrollTop||0>q&&c.scrollTop+c.offsetHeight==c.scrollHeight)&&a.preventDefault()})}h.animationable&&(l.addClass("_ourlinc_window_ani"),n.addClass("_ourlinc_modal_ani"));h.cancelable&&(n.tap(function(){G(l,n,c,h.cancelcallback)}),l.tap(function(a){a.target.hasClass("_ourlinc_window")&&G(l,n,c,h.cancelcallback)}));m.bind("resize",function(){l.isVisible()&&(S(l,n,c,h.callback),d())});this.show=function(){S(l,n,c,d);return this};this.hide=function(a){G(l,n,c,a);return this}},trim:function(a){return null==a||C==a?"":a.trim()}});f.extend(m,r,{StringBuffer:O,slide:function(a,b,c){return v.call(this,a,k.slide,b||75,200,c)}});f.extend(document,r);Date.prototype.format=function(a){var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+j).substr(4-RegExp.$1.length)));for(var c in b)RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((j+b[c]).length)));return a};f.extend(Array.prototype,L,{has:function(a){return-1!=this.idxof(a)},clear:function(){this.length=0;return this},insert:function(a,b){this.splice(a,0,b)},removeByIndex:function(a){if(0>a||a>=this.length)return this;this.splice(a,1);return this},remove:function(a){return this.removeByIndex(this.idxof(a))},idxof:function(a){var b=-1;f.each(this,function(c,d){if(a==c)return b=d,!1});return b}});f.extend(HTMLCollection.prototype,L);f.extend(NodeList.prototype,L);f.extend(String.prototype,{toArrays:function(){return this.split(SPLIT)},replaceAll:function(a,b,c){return RegExp.prototype.isPrototypeOf(a)?this.replace(a,b):this.replace(RegExp(a,c?"gi":"g"),b)},hasSymbol:function(){return this.replace(aa,j)!=this},endWith:function(a){return!f.isempty(a)&&a.length<=this.length&&this.substring(this.length-a.length)==a},startWith:function(a){return!f.isempty(a)&&a.length<=this.length&&this.substr(0,a.length)==a},contains:function(a){return-1!=this.indexOf(a)},trim:function(){return this.replace(/(^\s*)|(\s*$)/g,j)},realLength:function(){var a=this.match(/[^\x00-\xff]/ig);return this.length+(null==a?0:a.length)}});f.extend(x.prototype,r,{loadObj:function(a,b,c){return this.queue(function(){var d=this,e=f.create(c?"link":"script");e.attr("type",c?"text/css":"text/javascript");c&&e.attr("rel","stylesheet");b&&(t?e.onreadystatechange=function(){"loaded"==this.readyState&&(e.onreadystatechange=null,b.call(d))}:e.onload=function(){b.call(d)});e.appendTo(document.querySelector("head")).attr(c?"href":"src",a);b||d.dequeue();return d})},loadCSS:function(a,b){return this.loadObj(a,b,"css")},loadJS:function(a,b){return this.loadObj(a,b)},tap:function(a,b){return v.call(this,a,k.tap,5,!1,!1,b)},sequenceTap:function(a,b){return v.call(this,a,k.sequenceTap,5,b||200)},doubleTap:function(a){return v.call(this,a,k.doubleTap,5,300,!1,!1,2)},manyTap:function(a,b){return v.call(this,a,k.doubleTap,5,300,!1,!1,b?b:2)},longTap:function(a){return v.call(this,a,k.longTap,5,300)},slide:function(a,b,c){return v.call(this,a,k.slide,b||75,200,c)},css:function(a,b){var c=typeof a,d=typeof b;if("object"==c)for(var e in a)B.has(a)?this[e]=a[e]:this.style[e]=a[e];else if("string"==c&&"undefined"==d){if(B.has(a))return this[a]+"";c=(this.currentStyle||m.getComputedStyle(this,null))[a];if("zIndex"!=a&&(!c||"auto"==c)){if(X.has(a))return this["client"+a.charAt(0).toUpperCase()+a.substring(1,a.length)]+"px";if(a.contains("margin")&&"auto"==c)return"0px"}else return c}else if("string"==c&&p(b,"string|number"))B.has(a)?this[a]=b:this.style[a]=b;else if(!0===a&&!0===b)return{"class":this.attr("class"),style:this.attr("style")};return this},distanceTop:function(){for(var a=this.offsetTop,b=this;b=b.offsetParent;)a+=b.distanceTop();return a},distanceLeft:function(){for(var a=this.offsetLeft,b=this;b=b.offsetParent;)a+=b.distanceLeft();return a},distance:function(){return{top:this.distanceTop(),left:this.distanceLeft()}},hasClass:function(a){return!!this.className.match(RegExp("(\\s|^)"+a+"(\\s|$)"))},addClass:function(a){this.hasClass(a)||(this.className=this.className.trim()+" "+a);return this},removeClass:function(a){this.hasClass(a)&&this.attr("class",this.attr("class").replace(RegExp("(\\s|^)"+a+"(\\s|$)")," "));return this},toggleClass:function(a){return this.hasClass(a)?this.removeClass(a):this.addClass(a)},has:function(a){return this.contains?this.contains(a):!!(this.compareDocumentPosition(a)&16)},end:function(a){return E(this,a)},textes:function(a){var b=t?"innerText":"textContent";return p(a,"string|number|boolean")?(this[b]=a,this):t?this.innerText:this.textContent},previous:function(a){return M(this,"previous","previousSibling",a)},next:function(a){return M(this,"next","nextSibling",a)},find:function(a,b){return f(a,this,b)},val:function(a){return p(a,"string|number|boolean")?(this.value=a,this):this.value},html:function(a){return p(a,"string|number|boolean")?(this.innerHTML=a,this):this.innerHTML},attr:function(a,b){if(2==arguments.length&&p(a,"string|number|boolean")&&p(b,"string|number|boolean"))this.setAttribute(a,b);else if(1==arguments.length)if(p(a,"object"))for(var c in a)this.setAttribute(c,a[c]);else return c=this.getAttribute(a),null==c?"":c;return this},removeAttr:function(a){this.removeAttribute(a);return this},toggle:function(a){return this.css("display","block"==a||"none"==a?a:this.isHidden()?"block":"none")},showView:function(){return this.toggle("block")},hideView:function(){return this.toggle("none")},isHidden:function(){return"none"===this.css("display")},isVisible:function(){return!this.isHidden()},fadeOut:function(a,b){return this.animation({opacity:0},a,{callback:b,before:function(){this.css("opacity",1).showView()},after:function(){this.hideView()}})},fadeIn:function(a,b){return this.animation({opacity:1},a,{callback:b,before:function(){this.css("opacity",0).showView()}})},fadeToggle:function(a,b){return this.animation({opacity:"toggle"},a,{callback:b,toggle:!0,opacitytoggle:function(){return this.isHidden()?1:0},before:function(){this.showView()},after:function(){this["1"==this.css("opacity")?"showView":"hideView"]()}})},remove:function(){this.parent().removeChild(this)},empty:function(){for(var a=this.children,b=[],c=0;c<a.length;c++)b.push(a[c]);f.each(b,function(){this.remove()});return this},clone:function(a){return this.cloneNode(a).end(this)},appendTo:function(a){a.appendChild(this);return this},data:function(){var a=arguments,b=a.length;this._datas_=this._datas_||{};if(0==b||"string"!=typeof a[0])return this._datas_;if(1==b)return this._datas_[a[0]];if(2==b)return this._datas_[a[0]]=a[1],this},delay:function(a,b){var c=this,a=w[a]||a||w.fast;if("number"===typeof a)if("function"==typeof b)0<a?setTimeout(b,a):c.dequeue();else return this.queue(function(){c.delay(a,function(){c.dequeue()})});return this},childs:function(a){var b=this.children||[],c,d=b.length,a=a||j,e=a.startWith("."),i=a&&!e,a=a.replace(".",j);if(!e&&!i)return b.end(this),b;0<d&&(c=[],c.end(this),f.each(b,function(b){(f.isTag(b,a)&&i||b.hasClass(a)&&e)&&c.push(b)}));return c},parent:function(){return this.parentNode},inScreen:function(){return this.getBoundingClientRect().top<=document.documentElement.clientHeight},animation:function(a,b,c,d){return this.queue(function(){new P(this,a,b,c,d)})},isAnimation:function(){return!this._$isStop_&&"boolean"===typeof this._$isStop_},stop:function(){this._$isStop_=!0;return this},queue:function(a){this._queue=this._queue||[];return"function"===typeof a?(this._queue.push(a),this.nextHander()):"number"===typeof a&&0<=a&&a<this._queue.length?this._queue[0]:this._queue},nextHander:function(){!this.isExecute&&0<this.queue().length&&(this.isExecute=!0,this.queue().shift().call(this));return this},dequeue:function(){this.isExecute=!1;return this.nextHander()},removeQueue:function(){this.queue().clear();return this}});x=function(a){if(!(J||a.type===T&&"interactive"!==document.readyState&&"complete"!==document.readyState)){for(;0<H.length;)H.shift()();J=!0}};var T="readystatechange";document.bind(["DOMContentLoaded",T],x);m.bind("load",x);document.bind("WeixinJSBridgeReady",function(){for(K.weixin=!0;0<I.length;)I.shift()()})})(window);