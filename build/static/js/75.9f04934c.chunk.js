(this.webpackJsonpCountr=this.webpackJsonpCountr||[]).push([[75],{121:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",(function(){return f})),n.d(e,"ion_menu_button",(function(){return O})),n.d(e,"ion_menu_toggle",(function(){return j}));var i=n(15),o=n(2),a=n.n(o),r=n(4),s=n(6),c=n(7),u=n(17),d=n(14),l=n(20),h=(n(3),n(44)),p=n(43),m=(n(31),n(45)),b=n(167),f=function(){function t(e){Object(s.a)(this,t),Object(u.l)(this,e),this.lastOnEnd=0,this.blocker=p.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(u.f)(this,"ionWillOpen",7),this.ionWillClose=Object(u.f)(this,"ionWillClose",7),this.ionDidOpen=Object(u.f)(this,"ionDidOpen",7),this.ionDidClose=Object(u.f)(this,"ionDidClose",7),this.ionMenuChange=Object(u.f)(this,"ionMenuChange",7)}return Object(c.a)(t,[{key:"typeChanged",value:function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-".concat(e)),n.classList.add("menu-content-".concat(t)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(l.h)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:function(){var t=Object(r.a)(a.a.mark((function t(){var e,i,o,r=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===this.type&&(this.type=d.c.get("menuType","overlay")),e=this.el,i=e.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),(o=void 0!==this.contentId?document.getElementById(this.contentId):i&&i.querySelector&&i.querySelector("[main]"))&&o.tagName){t.next=8;break}return console.error('Menu: must have a "content" element to listen for drag events on.'),t.abrupt("return");case 8:return this.contentEl=o,o.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),m.a._register(this),t.next=15,Promise.resolve().then(n.bind(null,43));case 15:this.gesture=t.sent.createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return r.canStart(t)},onWillStart:function(){return r.onWillStart()},onStart:function(){return r.onStart()},onMove:function(t){return r.onMove(t)},onEnd:function(t){return r.onEnd(t)}}),this.updateState();case 17:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),m.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&(!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close()))}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,t)}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,t)}},{key:"toggle",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,t)}},{key:"setOpen",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return m.a._setOpen(this,t,e)}},{key:"_setOpen",value:function(){var t=Object(r.a)(a.a.mark((function t(e){var n,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],this._isActive()&&!this.isAnimating&&e!==this._isOpen){t.next=3;break}return t.abrupt("return",!1);case 3:return this.beforeAnimation(e),t.next=6,this.loadAnimation();case 6:return t.next=8,this.startAnimation(e,n);case 8:return this.afterAnimation(e),t.abrupt("return",!0);case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"loadAnimation",value:function(){var t=Object(r.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=this.menuInnerEl.offsetWidth)!==this.width||void 0===this.animation){t.next=3;break}return t.abrupt("return");case 3:return this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t.next=7,m.a._createAnimation(this.type,this);case 7:this.animation=t.sent,d.c.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"startAnimation",value:function(){var t=Object(r.a)(a.a.mark((function t(e,n){var i,o,r,s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=!e,o=Object(d.b)(this),r="ios"===o?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",s="ios"===o?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",c=this.animation.direction(i?"reverse":"normal").easing(i?s:r).onFinish((function(){"reverse"===c.getDirection()&&c.direction("normal")})),!n){t.next=10;break}return t.next=8,c.play();case 8:t.next=11;break;case 10:c.play({sync:!0});case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(t){return!(!!document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!m.a._getOpenSync()&&v(window,t.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(l.b)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(t){if(this.isAnimating&&this.animation){var e=g(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}else Object(l.b)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,o=g(t.deltaX,n,i),a=this.width,r=o/a,s=t.velocityX,c=a/2,u=s>=0&&(s>.2||t.deltaX>c),d=s<=0&&(s<-.2||t.deltaX<-c),p=n?i?u:d:i?d:u,m=!n&&p;n&&!p&&(m=!0),this.lastOnEnd=t.currentTime;var b=p?.001:-.001,f=r<0?.01:r;b+=Object(h.a)([0,0],[.4,0],[.6,1],[1,1],Object(l.c)(0,f,.9999))[0]||0;var v=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return e.afterAnimation(m)}),{oneTimeCallback:!0}).progressEnd(v?1:0,this._isOpen?1-b:b,300)}else Object(l.b)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(t){Object(l.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(y),this.backdropEl&&this.backdropEl.classList.add(k),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(t){Object(l.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(x),this.ionDidOpen.emit()):(this.el.classList.remove(y),this.contentEl&&this.contentEl.classList.remove(x),this.backdropEl&&this.backdropEl.classList.remove(k),this.animation&&this.animation.stop(),this.ionDidClose.emit())}},{key:"updateState",value:function(){var t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||m.a._setActiveMenu(this),Object(l.b)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(l.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}},{key:"render",value:function(){var t,e=this,n=this.isEndSide,o=this.type,a=this.disabled,r=this.isPaneVisible,s=Object(d.b)(this);return Object(u.j)(u.b,{role:"navigation",class:(t={},Object(i.a)(t,s,!0),Object(i.a)(t,"menu-type-".concat(o),!0),Object(i.a)(t,"menu-enabled",!a),Object(i.a)(t,"menu-side-end",n),Object(i.a)(t,"menu-side-start",!n),Object(i.a)(t,"menu-pane-visible",r),t)},Object(u.j)("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t}},Object(u.j)("slot",null)),Object(u.j)("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}},{key:"el",get:function(){return Object(u.g)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}}]),t}(),g=function(t,e,n){return Math.max(0,e!==n?-t:t)},v=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},y="show-menu",k="show-backdrop",x="menu-content-open";f.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,  0,  0);transform:translate3d(-9999px,  0,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{-webkit-transform:translate3d(calc(-1 * -9999px),  0,  0);transform:translate3d(calc(-1 * -9999px),  0,  0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};var w=function(){var t=Object(r.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get(e);case 2:if(n=t.sent,t.t0=n,!t.t0){t.next=8;break}return t.next=7,n.isActive();case 7:t.t0=t.sent;case 8:return t.abrupt("return",!!t.t0);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){function t(e){var n=this;Object(s.a)(this,t),Object(u.l)(this,e),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",m.a.toggle(n.menu));case 1:case"end":return t.stop()}}),t)})))}return Object(c.a)(t,[{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.color,e=this.disabled,n=Object(d.b)(this),o=d.c.get("menuIcon","ios"===n?"menu-outline":"menu-sharp"),a=this.autoHide&&!this.visible,r={type:this.type};return Object(u.j)(u.b,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":a?"true":null,class:Object.assign(Object.assign(Object(i.a)({},n,!0),Object(b.a)(t)),{button:!0,"menu-button-hidden":a,"menu-button-disabled":e,"in-toolbar":Object(b.c)("ion-toolbar",this.el),"in-toolbar-color":Object(b.c)("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},Object(u.j)("button",Object.assign({},r,{disabled:e,class:"button-native"}),Object(u.j)("span",{class:"button-inner"},Object(u.j)("slot",null,Object(u.j)("ion-icon",{icon:o,mode:n,lazy:!1}))),"md"===n&&Object(u.j)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function(){return Object(u.g)(this)}}]),t}();O.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};var j=function(){function t(e){var n=this;Object(s.a)(this,t),Object(u.l)(this,e),this.visible=!1,this.autoHide=!0,this.onClick=function(){return m.a.toggle(n.menu)}}return Object(c.a)(t,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(this.menu);case 2:this.visible=t.sent;case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=Object(d.b)(this),n=this.autoHide&&!this.visible;return Object(u.j)(u.b,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},Object(i.a)(t,e,!0),Object(i.a)(t,"menu-toggle-hidden",n),t)},Object(u.j)("slot",null))}}]),t}();j.style=":host(.menu-toggle-hidden){display:none}"},167:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l}));var i=n(2),o=n.n(i),a=n(4),r=n(15),s=function(t,e){return null!==e.closest(t)},c=function(t){return"string"===typeof t&&t.length>0?Object(r.a)({"ion-color":!0},"ion-color-".concat(t),!0):void 0},u=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},d=/^[a-z][a-z0-9+\-.]*:/,l=function(){var t=Object(a.a)(o.a.mark((function t(e,n,i){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||d.test(e)){t.next=5;break}if(!(a=document.querySelector("ion-router"))){t.next=5;break}return null!=n&&n.preventDefault(),t.abrupt("return",a.push(e,i));case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=75.9f04934c.chunk.js.map