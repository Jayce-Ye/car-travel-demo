(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15a71386"],{"0c94":function(t,e,a){var i=a("7780"),n=a("edff");a("b6a7"),a("bbf1");var r=a("4242");if(!r.isSupported)throw new Error("Sorry your browser not support wordCloud");function o(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),i=e.createImageData(a),n=0,r=0,o=0;o<a.data.length;o+=4){var l=a.data[o+3];if(l>128){var s=a.data[o]+a.data[o+1]+a.data[o+2];n+=s,++r}}var d=n/r;for(o=0;o<a.data.length;o+=4){s=a.data[o]+a.data[o+1]+a.data[o+2],l=a.data[o+3];l<128||s>d?(i.data[o]=0,i.data[o+1]=0,i.data[o+2]=0,i.data[o+3]=0):(i.data[o]=255,i.data[o+1]=255,i.data[o+2]=255,i.data[o+3]=255)}e.putImageData(i,0,0)}i.registerLayout((function(t,e){t.eachSeriesByType("wordCloud",(function(a){var l=n.getLayoutRect(a.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),s=a.getData(),d=document.createElement("canvas");d.width=l.width,d.height=l.height;var u=d.getContext("2d"),c=a.get("maskImage");if(c)try{u.drawImage(c,0,0,d.width,d.height),o(d)}catch(p){console.error("Invalid mask image"),console.error(p.toString())}var h=a.get("sizeRange"),f=a.get("rotationRange"),m=s.getDataExtent("value"),g=Math.PI/180,w=a.get("gridSize");function v(t){var e=t.detail.item;t.detail.drawn&&a.layoutInstance.ondraw&&(t.detail.drawn.gx+=l.x/w,t.detail.drawn.gy+=l.y/w,a.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}r(d,{list:s.mapArray("value",(function(t,e){var a=s.getItemModel(e);return[s.getName(e),a.get("textStyle.normal.textSize",!0)||i.number.linearMap(t,m,h),e]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:a.get("textStyle.normal.fontFamily")||a.get("textStyle.emphasis.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.normal.fontWeight")||a.get("textStyle.emphasis.fontWeight")||t.get("textStyle.fontWeight"),gridSize:w,ellipticity:l.height/l.width,minRotation:f[0]*g,maxRotation:f[1]*g,clearCanvas:!c,rotateRatio:1,rotationStep:a.get("rotationStep")*g,drawOutOfBound:a.get("drawOutOfBound"),shuffle:!1,shape:a.get("shape")}),d.addEventListener("wordclouddrawn",v),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){d.removeEventListener("wordclouddrawn",v),d.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),i.registerPreprocessor((function(t){var e=(t||{}).series;!i.util.isArray(e)&&(e=e?[e]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function n(t){t&&i.util.each(a,(function(e){t.hasOwnProperty(e)&&(t["text"+i.format.capitalFirst(e)]=t[e])}))}i.util.each(e,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};n(e.normal),n(e.emphasis)}}))}))},"41e7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"set_out"},[a("h2",[t._v("出发地")]),a("div",{staticStyle:{width:"100%",height:"425px"},attrs:{id:"worldCloud"}})]),a("div",{staticClass:"destination"},[a("h2",[t._v("目的地")]),a("div",{staticStyle:{width:"100%",height:"425px"},attrs:{id:"worldCloud2"}})])])}],r=(a("54bc"),{data:function(){return{chart:null}},mounted:function(){this.initChart()},methods:{initChart:function(){var t={tooltip:{show:!0},series:[{name:"研发部邮件主题分析",type:"wordCloud",sizeRange:[6,66],rotationRange:[-45,90],textPadding:0,left:"center",top:"center",shape:"circle",autoSize:{enable:!0,minSize:6},textStyle:{normal:{color:function(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}},emphasis:{shadowBlur:10,shadowColor:"#333"}},data:[{name:"Jayfee",value:666},{name:"Nancy",value:520}]}]},e=[];e.push({name:"Jayfee",value:666},{name:"Nancy",value:520},{name:"生活资源",value:"999"},{name:"供热管理",value:"888"},{name:"供气质量",value:"777"},{name:"生活用水管理",value:"688"},{name:"一次供水问题",value:"588"},{name:"交通运输",value:"516"}),t.series[0].data=e,this.chart=this.$echarts.init(document.getElementById("worldCloud")),this.chart=this.$echarts.init(document.getElementById("worldCloud2")),this.chart.setOption(t)}}}),o=r,l=(a("47bb"),a("6691")),s=Object(l["a"])(o,i,n,!1,null,"1a790562",null);e["default"]=s.exports},4242:function(t,e,a){"use strict";var i,n;
/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2013 Tim Chien
 * Released under the MIT license
 */window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message",a=function(a){var i=t.length;return t.push(a),window.postMessage(e+i.toString(36),"*"),i};return window.addEventListener("message",(function(a){if("string"===typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var i=parseInt(a.data.substr(e.length),36);t[i]&&(t[i](),t[i]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},a}()||function(t){window.setTimeout(t,0)}}()),window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}}()),function(a){var r=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!e.getImageData&&(!!e.fillText&&(!!Array.prototype.some&&!!Array.prototype.push))}(),o=function(){if(r){var t,e,a=document.createElement("canvas").getContext("2d"),i=20;while(i){if(a.font=i.toString(10)+"px sans-serif",a.measureText("Ｗ").width===t&&a.measureText("m").width===e)return i+1;t=a.measureText("Ｗ").width,e=a.measureText("m").width,i--}return 0}}(),l=function(t){for(var e,a,i=t.length;i;e=Math.floor(Math.random()*i),a=t[--i],t[i]=t[e],t[e]=a);return t},s=function(t,e){if(r){Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"===typeof e){if(t[a]=document.getElementById(e),!t[a])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."}));var a={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var i in e)i in a&&(a[i]=e[i]);if("function"!==typeof a.weightFactor){var n=a.weightFactor;a.weightFactor=function(t){return t*n}}if("function"!==typeof a.shape)switch(a.shape){case"circle":default:a.shape="circle";break;case"cardioid":a.shape=function(t){return 1-Math.sin(t)};break;case"diamond":case"square":a.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"triangle-forward":a.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":a.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":a.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":a.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))};break}a.gridSize=Math.max(Math.floor(a.gridSize),4);var s,d,u,c,h,f,m,g=a.gridSize,w=g-a.maskGapWidth,v=Math.abs(a.maxRotation-a.minRotation),p=Math.min(a.maxRotation,a.minRotation),x=a.rotationStep;switch(a.color){case"random-dark":m=function(){return _(10,50)};break;case"random-light":m=function(){return _(50,90)};break;default:"function"===typeof a.color&&(m=a.color);break}var y=null;"function"===typeof a.classes&&(y=a.classes);var M,b=!1,S=[],I=function(t){var e,a,i=t.currentTarget,n=i.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var r=e-n.left,o=a-n.top,l=Math.floor(r*(i.width/n.width||1)/g),s=Math.floor(o*(i.height/n.height||1)/g);return S[l][s]},C=function(t){var e=I(t);M!==e&&(M=e,e?a.hover(e.item,e.dimension,t):a.hover(void 0,void 0,t))},T=function(t){var e=I(t);e&&(a.click(e.item,e.dimension,t),t.preventDefault())},k=[],E=function(t){if(k[t])return k[t];var e=8*t,i=e,n=[];0===t&&n.push([c[0],c[1],0]);while(i--){var r=1;"circle"!==a.shape&&(r=a.shape(i/e*2*Math.PI)),n.push([c[0]+t*r*Math.cos(-i/e*2*Math.PI),c[1]+t*r*Math.sin(-i/e*2*Math.PI)*a.ellipticity,i/e*2*Math.PI])}return k[t]=n,n},R=function(){return a.abortThreshold>0&&(new Date).getTime()-f>a.abortThreshold},O=function(){return 0===a.rotateRatio?0:Math.random()>a.rotateRatio?0:0===v?p:p+Math.round(Math.random()*v/x)*x},z=function(t,e,i){var n=!1,r=a.weightFactor(e);if(r<=a.minSize)return!1;var l=1;r<o&&(l=function(){var t=2;while(t*r<o)t+=2;return t}());var s=document.createElement("canvas"),d=s.getContext("2d",{willReadFrequently:!0});d.font=a.fontWeight+" "+(r*l).toString(10)+"px "+a.fontFamily;var u=d.measureText(t).width/l,c=Math.max(r*l,d.measureText("m").width,d.measureText("Ｗ").width)/l,h=u+2*c,f=3*c,m=Math.ceil(h/g),w=Math.ceil(f/g);h=m*g,f=w*g;var v=-u/2,p=.4*-c,x=Math.ceil((h*Math.abs(Math.sin(i))+f*Math.abs(Math.cos(i)))/g),y=Math.ceil((h*Math.abs(Math.cos(i))+f*Math.abs(Math.sin(i)))/g),M=y*g,b=x*g;s.setAttribute("width",M),s.setAttribute("height",b),n&&(document.body.appendChild(s),d.save()),d.scale(1/l,1/l),d.translate(M*l/2,b*l/2),d.rotate(-i),d.font=a.fontWeight+" "+(r*l).toString(10)+"px "+a.fontFamily,d.fillStyle="#000",d.textBaseline="middle",d.fillText(t,v*l,(p+.5*r)*l);var S=d.getImageData(0,0,M,b).data;if(R())return!1;n&&(d.strokeRect(v*l,p,u*l,c*l),d.restore());var I,C,T,k=[],E=y,O=[x/2,y/2,x/2,y/2];while(E--){I=x;while(I--){T=g;t:{while(T--){C=g;while(C--)if(S[4*((I*g+T)*M+(E*g+C))+3]){k.push([E,I]),E<O[3]&&(O[3]=E),E>O[1]&&(O[1]=E),I<O[0]&&(O[0]=I),I>O[2]&&(O[2]=I),n&&(d.fillStyle="rgba(255, 0, 0, 0.5)",d.fillRect(E*g,I*g,g-.5,g-.5));break t}}n&&(d.fillStyle="rgba(0, 0, 255, 0.5)",d.fillRect(E*g,I*g,g-.5,g-.5))}}}return n&&(d.fillStyle="rgba(0, 255, 0, 0.5)",d.fillRect(O[3]*g,O[0]*g,(O[1]-O[3]+1)*g,(O[2]-O[0]+1)*g)),{mu:l,occupied:k,bounds:O,gw:y,gh:x,fillTextOffsetX:v,fillTextOffsetY:p,fillTextWidth:u,fillTextHeight:c,fontSize:r}},P=function(t,e,i,n,r){var o=r.length;while(o--){var l=t+r[o][0],c=e+r[o][1];if(l>=d||c>=u||l<0||c<0){if(!a.drawOutOfBound)return!1}else if(!s[l][c])return!1}return!0},F=function(e,i,n,r,o,l,s,d,u){var c,h,f=n.fontSize;c=m?m(r,o,f,l,s):a.color,h=y?y(r,o,f,l,s):a.classes;var w=n.bounds;w[3],w[0],w[1],w[3],w[2],w[0],t.forEach((function(t){if(t.getContext){var o=t.getContext("2d"),l=n.mu;o.save(),o.scale(1/l,1/l),o.font=a.fontWeight+" "+(f*l).toString(10)+"px "+a.fontFamily,o.fillStyle=c,o.translate((e+n.gw/2)*g*l,(i+n.gh/2)*g*l),0!==d&&o.rotate(-d),o.textBaseline="middle",o.fillText(r,n.fillTextOffsetX*l,(n.fillTextOffsetY+.5*f)*l),o.restore()}else{var s=document.createElement("span"),m="";m="rotate("+-d/Math.PI*180+"deg) ",1!==n.mu&&(m+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var w={position:"absolute",display:"block",font:a.fontWeight+" "+f*n.mu+"px "+a.fontFamily,left:(e+n.gw/2)*g+n.fillTextOffsetX+"px",top:(i+n.gh/2)*g+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:f+"px",whiteSpace:"nowrap",transform:m,webkitTransform:m,msTransform:m,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var v in c&&(w.color=c),s.textContent=r,w)s.style[v]=w[v];if(u)for(var p in u)s.setAttribute(p,u[p]);h&&(s.className+=h),t.appendChild(s)}}))},L=function(e,a,i,n,r){if(!(e>=d||a>=u||e<0||a<0)){if(s[e][a]=!1,i){var o=t[0].getContext("2d");o.fillRect(e*g,a*g,w,w)}b&&(S[e][a]={item:r,dimension:n})}},D=function(e,i,n,r,o,l){var s,c,h=o.occupied,f=a.drawMask;if(f&&(s=t[0].getContext("2d"),s.save(),s.fillStyle=a.maskColor),b){var m=o.bounds;c={x:(e+m[3])*g,y:(i+m[0])*g,w:(m[1]-m[3]+1)*g,h:(m[2]-m[0]+1)*g}}var w=h.length;while(w--){var v=e+h[w][0],p=i+h[w][1];v>=d||p>=u||v<0||p<0||L(v,p,f,c,l)}f&&s.restore()},B=function(t){var e,i,n;Array.isArray(t)?(e=t[0],i=t[1]):(e=t.word,i=t.weight,n=t.attributes);var r=O(),o=z(e,i,r);if(!o)return!1;if(R())return!1;if(!a.drawOutOfBound){var s=o.bounds;if(s[1]-s[3]+1>d||s[2]-s[0]+1>u)return!1}var c=h+1,f=function(a){var l=Math.floor(a[0]-o.gw/2),s=Math.floor(a[1]-o.gh/2),d=o.gw,u=o.gh;return!!P(l,s,d,u,o.occupied)&&(F(l,s,o,e,i,h-c,a[2],r,n),D(l,s,d,u,o,t),{gx:l,gy:s,rot:r,info:o})};while(c--){var m=E(h-c);a.shuffle&&(m=[].concat(m),l(m));for(var g=0;g<m.length;g++){var w=f(m[g]);if(w)return w}}return null},W=function(e,a,i){if(a)return!t.some((function(t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,a,i||{}),!t.dispatchEvent(n)}),this);t.forEach((function(t){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,a,i||{}),t.dispatchEvent(n)}),this)},A=function(){var e=t[0];if(e.getContext)d=Math.ceil(e.width/g),u=Math.ceil(e.height/g);else{var i=e.getBoundingClientRect();d=Math.ceil(i.width/g),u=Math.ceil(i.height/g)}if(W("wordcloudstart",!0)){var n,r,o,l,m;if(c=a.origin?[a.origin[0]/g,a.origin[1]/g]:[d/2,u/2],h=Math.floor(Math.sqrt(d*d+u*u)),s=[],!e.getContext||a.clearCanvas){t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=a.backgroundColor,e.clearRect(0,0,d*(g+1),u*(g+1)),e.fillRect(0,0,d*(g+1),u*(g+1))}else t.textContent="",t.style.backgroundColor=a.backgroundColor,t.style.position="relative"})),n=d;while(n--){s[n]=[],r=u;while(r--)s[n][r]=!0}}else{var w=document.createElement("canvas").getContext("2d");w.fillStyle=a.backgroundColor,w.fillRect(0,0,1,1);var v,p,x=w.getImageData(0,0,1,1).data,y=e.getContext("2d").getImageData(0,0,d*g,u*g).data;n=d;while(n--){s[n]=[],r=u;while(r--){p=g;t:while(p--){v=g;while(v--){o=4;while(o--)if(y[4*((r*g+p)*d*g+(n*g+v))+o]!==x[o]){s[n][r]=!1;break t}}}!1!==s[n][r]&&(s[n][r]=!0)}}y=w=x=void 0}if(a.hover||a.click){b=!0,n=d+1;while(n--)S[n]=[];a.hover&&e.addEventListener("mousemove",C),a.click&&(e.addEventListener("click",T),e.addEventListener("touchstart",T),e.addEventListener("touchend",(function(t){t.preventDefault()})),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",C),e.removeEventListener("click",T),M=void 0}))}o=0,0!==a.wait?(l=window.setTimeout,m=window.clearTimeout):(l=window.setImmediate,m=window.clearImmediate);var I=function(e,a){t.forEach((function(t){t.addEventListener(e,a)}),this)},k=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},E=function t(){k("wordcloudstart",t),m(O)};I("wordcloudstart",E);var O=l((function t(){if(o>=a.list.length)return m(O),W("wordcloudstop",!1),void k("wordcloudstart",E);f=(new Date).getTime();var e=B(a.list[o]),i=!W("wordclouddrawn",!0,{item:a.list[o],drawn:e});if(R()||i)return m(O),a.abort(),W("wordcloudabort",!1),W("wordcloudstop",!1),void k("wordcloudstart",E);o++,O=l(t,a.wait)}),a.wait)}};A()}function _(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}};s.isSupported=r,s.minFontSize=o,i=[],n=function(){return s}.apply(e,i),void 0===n||(t.exports=n)}()},"47bb":function(t,e,a){"use strict";var i=a("b286"),n=a.n(i);n.a},"54bc":function(t,e,a){t.exports=a("0c94")},b286:function(t,e,a){},b6a7:function(t,e,a){var i=a("0f22"),n=a("7780");n.extendSeriesModel({type:"series.wordCloud",visualColorAccessPath:"textStyle.normal.color",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var a=i(["value"],t.data),r=new n.List(a,this);return r.initData(t.data),r},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{normal:{fontWeight:"normal"}}}})},bbf1:function(t,e,a){var i=a("7780");i.extendChartView({type:"wordCloud",render:function(t,e,a){var n=this.group;n.removeAll();var r=t.getData(),o=t.get("gridSize");t.layoutInstance.ondraw=function(t,e,a,l){var s=r.getItemModel(a),d=s.getModel("textStyle.normal"),u=s.getModel("textStyle.emphasis"),c=new i.graphic.Text({style:i.graphic.setTextStyle({},d,{x:l.info.fillTextOffsetX,y:l.info.fillTextOffsetY+.5*e,text:t,textBaseline:"middle",textFill:r.getItemVisual(a,"color"),fontSize:e}),scale:[1/l.info.mu,1/l.info.mu],position:[(l.gx+l.info.gw/2)*o,(l.gy+l.info.gh/2)*o],rotation:l.rot});n.add(c),r.setItemGraphicEl(a,c),i.graphic.setHoverStyle(c,i.graphic.setTextStyle({},u,null,{forMerge:!0},!0))},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}})}}]);
//# sourceMappingURL=chunk-15a71386.f46d70f9.js.map