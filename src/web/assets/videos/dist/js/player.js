(function(e){function t(t){for(var r,i,u=t[0],l=t[1],s=t[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={player:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://localhost:8090/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;a.push([3,"chunk-vendors"]),n()})({"08a6":function(e,t,n){},3:function(e,t,n){e.exports=n("a8a2")},"3c24":function(e,t,n){"use strict";n("08a6")},6955:function(e,t,n){"use strict";var r=n("cebe"),o=n.n(r);t["a"]={getGateways:function(){return o.a.get(Craft.getActionUrl("videos/vue/get-gateways"),{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})},getVideos:function(e,t,n){var r={gateway:e,method:t};return n&&(r.options=n),o.a.post(Craft.getActionUrl("videos/vue/get-videos"),r,{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})},getVideo:function(e){var t={url:e};return o.a.post(Craft.getActionUrl("videos/vue/get-video"),t,{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})},getVideoEmbedHtml:function(e){var t={gateway:e.gatewayHandle,videoId:e.id};return o.a.post(Craft.getActionUrl("videos/vue/get-video-embed-html"),t,{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})}}},"8bbf":function(e,t){e.exports=Vue},a8a2:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),o=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"modal",staticClass:"videos-player-modal modal"},[n("div",{staticClass:"videos-player bg-black h-full"},[n("div",{domProps:{innerHTML:e._s(e.embed)}})])])},i=[],u=n("6955"),l={data:function(){return{modal:null,embed:null}},mounted:function(){var e=this,t=this.$root.video;u["a"].getVideoEmbedHtml(t).then((function(t){e.embed=t.data.html})),this.modal=new Garnish.Modal(this.$refs.modal,{resizable:!1,onHide:function(){this.$emit("hide")}.bind(this)})},destroyed:function(){this.modal.$shade[0].remove(),this.$el.remove()}},s=l,c=(n("3c24"),n("2877")),d=Object(c["a"])(s,a,i,!1,null,null,null),f=d.exports;o.a.config.productionTip=!1,window.VideoPlayerConstructor=o.a.extend({render:function(e){return e(f)}})},cebe:function(e,t){e.exports=axios}});
//# sourceMappingURL=player.js.map