(this.webpackJsonpCountr=this.webpackJsonpCountr||[]).push([[25],{112:function(n,i,e){"use strict";e.r(i),e.d(i,"ion_infinite_scroll",(function(){return h})),e.d(i,"ion_infinite_scroll_content",(function(){return u}));var t=e(15),r=e(2),o=e.n(r),s=e(4),l=e(6),c=e(7),a=e(17),d=e(14),f=e(168),h=function(){function n(i){var e=this;Object(l.a)(this,n),Object(a.l)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var n=e.scrollEl;if(!n||!e.canStart())return 1;var i=e.el.offsetHeight;if(0===i)return 2;var t=n.scrollTop,r=n.scrollHeight,o=n.offsetHeight,s=0!==e.thrPc?o*e.thrPc:e.thrPx;if(("bottom"===e.position?r-i-t-s-o:t-i-s)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4},this.ionInfinite=Object(a.f)(this,"ionInfinite",7)}return Object(c.a)(n,[{key:"thresholdChanged",value:function(){var n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)}},{key:"disabledChanged",value:function(){var n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)}},{key:"connectedCallback",value:function(){var n=Object(s.a)(o.a.mark((function n(){var i,e=this;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=this.el.closest("ion-content")){n.next=4;break}return console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),n.abrupt("return");case 4:return n.next=6,i.getScrollElement();case 6:this.scrollEl=n.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(a.n)((function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)}));case 10:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:function(){var n=Object(s.a)(o.a.mark((function n(){var i,e,t=this;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=this.scrollEl,this.isLoading&&i){n.next=3;break}return n.abrupt("return");case 3:this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,e=i.scrollHeight-i.scrollTop,requestAnimationFrame((function(){Object(a.h)((function(){var n=i.scrollHeight-e;requestAnimationFrame((function(){Object(a.n)((function(){i.scrollTop=n,t.isBusy=!1}))}))}))})));case 5:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"canStart",value:function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading}},{key:"enableScrollEvents",value:function(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var n,i=Object(d.b)(this),e=this.disabled;return Object(a.j)(a.b,{class:(n={},Object(t.a)(n,i,!0),Object(t.a)(n,"infinite-scroll-loading",this.isLoading),Object(t.a)(n,"infinite-scroll-enabled",!e),n)})}},{key:"el",get:function(){return Object(a.g)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}}]),n}();h.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var u=function(){function n(i){Object(l.a)(this,n),Object(a.l)(this,i)}return Object(c.a)(n,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var n=Object(d.b)(this);this.loadingSpinner=d.c.get("infiniteLoadingSpinner",d.c.get("spinner","ios"===n?"lines":"crescent"))}}},{key:"render",value:function(){var n,i=Object(d.b)(this);return Object(a.j)(a.b,{class:(n={},Object(t.a)(n,i,!0),Object(t.a)(n,"infinite-scroll-content-".concat(i),!0),n)},Object(a.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(a.j)("div",{class:"infinite-loading-spinner"},Object(a.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(a.j)("div",{class:"infinite-loading-text",innerHTML:Object(f.a)(this.loadingText)})))}}]),n}();u.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}},168:function(n,i,e){"use strict";e.d(i,"a",(function(){return t}));var t=function(n){try{if("string"!==typeof n||""===n)return n;var i=document.createDocumentFragment(),e=document.createElement("div");i.appendChild(e),e.innerHTML=n,l.forEach((function(n){for(var e=i.querySelectorAll(n),t=e.length-1;t>=0;t--){var s=e[t];s.parentNode?s.parentNode.removeChild(s):i.removeChild(s);for(var l=o(s),c=0;c<l.length;c++)r(l[c])}}));for(var t=o(i),s=0;s<t.length;s++)r(t[s]);var c=document.createElement("div");c.appendChild(i);var a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(d){return console.error(d),""}},r=function n(i){if(!i.nodeType||1===i.nodeType){for(var e=i.attributes.length-1;e>=0;e--){var t=i.attributes.item(e),r=t.name;if(s.includes(r.toLowerCase())){var l=t.value;null!=l&&l.toLowerCase().includes("javascript:")&&i.removeAttribute(r)}else i.removeAttribute(r)}for(var c=o(i),a=0;a<c.length;a++)n(c[a])}},o=function(n){return null!=n.children?n.children:n.childNodes},s=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=stencil-ion-infinite-scroll_2-md-entry-js.0547b61f.chunk.js.map