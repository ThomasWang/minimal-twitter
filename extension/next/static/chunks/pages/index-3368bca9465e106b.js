(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3363)}])},3363:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ne}});var r=n(5893),c=function(e){var t=e.children;return(0,r.jsx)("div",{className:"relative flex justify-center w-full",children:(0,r.jsx)("div",{className:"relative overflow-scroll",children:(0,r.jsx)("div",{className:"relative flex flex-col p-1 font-sans dark:text-white text-black font-normal min-w-[420px] w-full",children:t})})})},s=function(){return(0,r.jsx)("footer",{className:"flex flex-col items-center w-full px-2 pt-4 pb-8",children:(0,r.jsx)("button",{onClick:function(){return window.close()},type:"button",className:"inline-flex items-center px-4 py-2 text-[15px] font-bold text-white border border-transparent rounded-full shadow-sm bg-twitterAccentThree hover:bg-twitterAccentFive focus:outline-none w-fit",children:"Done"})})};function a(e){var t=new URL("https://twitter.com/intent/tweet");return t.searchParams.set("text",e.text),t.searchParams.set("url",e.url),t.toString()}var o={text:"Love this Minimal Theme for Twitter by the @typefully team.",url:"https://typefully.com/minimal-twitter"},i=function(){return(0,r.jsxs)("header",{className:"text-center",children:[(0,r.jsxs)("div",{className:"flex items-center justify-center",children:[(0,r.jsx)("a",{href:a(o),target:"_blank",rel:"noreferrer",className:"absolute text-md font-semibold text-twitterBlue right-4","aria-label":"Share Tweet",title:"Share Tweet",children:"Share"}),(0,r.jsx)("h1",{className:"text-xl font-extrabold",children:(0,r.jsx)("span",{children:"Customize"})})]}),(0,r.jsxs)("p",{className:"pt-3 pb-5 text-sm font-medium leading-5 dark:text-twitterAccentOneDark text-twitterAccentOne",children:["Manage feed width, navigation, and extras. ",(0,r.jsx)("br",{}),"Or go to display settings at"," ",(0,r.jsx)("a",{href:"https://twitter.com/i/display",target:"_blank",rel:"noreferrer",className:"text-twitterBlue hover:underline",children:"twitter.com/i/display"})]})]})},l=n(8520),u=n.n(l),h=n(2469),d=n(869),x=n(7294),f=n(2737),p=n(6744),w=n(3096),v=n.n(w);function m(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,c)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function a(e){m(s,r,c,a,o,"next",e)}function o(e){m(s,r,c,a,o,"throw",e)}a(void 0)}))}}var j=b(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e,n){var r;null===chrome||void 0===chrome||null===(r=chrome.storage)||void 0===r||r.sync.get([t],(function(n){return e(n[t])}))})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)}))),k=v()(b(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e,n){var r;null===chrome||void 0===chrome||null===(r=chrome.storage)||void 0===r||r.sync.set(t,(function(){return e(t)}))})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)}))),500);function g(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,c)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function a(e){g(s,r,c,a,o,"next",e)}function o(e){g(s,r,c,a,o,"throw",e)}a(void 0)}))}}var y=(0,p.zo)(f.fC,{position:"relative","&::after":{content:"",position:"absolute",inset:"min(\n      0px,\n      calc((100% - 2.25rem) / 2)\n    )"},'&[data-state="unchecked"]':{backgroundColor:"transparent",border:"2px solid var(--twitter-accent-one)"}}),C=function(e){var t=e.showVanityCheckboxes,n=e.setShowVanityCheckboxes,c=e.onCheckedChange,s=e.hideAll;return(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsxs)("span",{className:"flex items-center space-x-2 text-base tracking-normal text-black dark:text-white",children:[(0,r.jsx)("label",{htmlFor:"hideVanityCount",children:"Hide Vanity Counts"}),(0,r.jsx)(d.f,{pressed:t,onPressedChange:function(e){n(e)},className:"flex items-center",children:t?(0,r.jsx)(h.g8U,{className:"mt-1"}):(0,r.jsx)(h.v4q,{})})]}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:function(e){return c("all",e)},checked:s,id:"hideVanityCount",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},F=function(e){var t=e.onCheckedChange,n=e.hideReply;return(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1 pl-4",children:[(0,r.jsx)("label",{htmlFor:"hideReplyCount",className:"text-base",children:"Hide reply count"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:function(e){return t("reply",e)},checked:n,id:"hideReplyCount",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},T=function(e){var t=e.onCheckedChange,n=e.hideRetweet;return(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1 pl-4",children:[(0,r.jsx)("label",{htmlFor:"hideRetweetCount",className:"text-base",children:"Hide retweet count"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:function(e){return t("retweet",e)},checked:n,id:"hideRetweetCount",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},S=function(e){var t=e.onCheckedChange,n=e.hideLike;return(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1 pl-4",children:[(0,r.jsx)("label",{htmlFor:"hideLikeCount",className:"text-base",children:"Hide like count"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:function(e){return t("like",e)},checked:n,id:"hideLikeCount",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},A=function(e){var t=e.onCheckedChange,n=e.hideFollow;return(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1 pl-4",children:[(0,r.jsx)("label",{htmlFor:"hideFollowingCount",className:"text-base",children:"Hide follower/following count"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:function(e){return t("follow",e)},checked:n,id:"hideFollowCount",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},z=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){N(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("hideTweetButton");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsx)("label",{htmlFor:"hideTweetButton",className:"text-base tracking-normal",children:"Hide Tweet Button"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:N(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({hideTweetButton:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"hideTweetButton",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},B=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){N(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("hideSearch");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsx)("label",{htmlFor:"hideSearch",className:"text-base tracking-normal",children:"Hide Search Bar"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:N(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({hideSearch:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"hideSearch",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},P=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){N(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("transparentSearch");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsx)("label",{htmlFor:"transparentSearch",className:"text-base tracking-normal",children:"Transparent Search Bar"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:N(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({transparentSearch:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"transparentSearch",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},H=function(){var e=(0,x.useState)(!0),t=e[0],n=e[1];return(0,x.useEffect)((function(){N(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("removePromotedPosts");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsx)("label",{htmlFor:"promotedPosts",className:"text-base tracking-normal",children:"Remove Promoted Posts*"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:N(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({removePromotedPosts:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"removePromotedPosts",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},E=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){N(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("whoToFollow");case 3:(t=e.sent)&&n("off"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsx)("label",{htmlFor:"whoToFollow",className:"text-base tracking-normal",children:"Remove Who to Follow*"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:N(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({whoToFollow:t?"off":"on"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"whoToFollow",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},M=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){N(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("topicsToFollow");case 3:(t=e.sent)&&n("off"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsx)("label",{htmlFor:"topicsToFollow",className:"text-base tracking-normal",children:"Remove Topics to Follow*"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:N(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({topicsToFollow:t?"off":"on"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"topicsToFollow",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},L=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){N(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("latestTweets");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-1",children:[(0,r.jsx)("label",{htmlFor:"latestTweets",className:"text-base tracking-normal",children:"Always Show Latest Tweets*"}),(0,r.jsx)("div",{className:"grid rounded-full cursor-pointer w-9 h-9 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)(y,{onCheckedChange:N(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({latestTweets:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"latestTweets",className:"flex items-center justify-center w-5 h-5 rounded-[4px] bg-twitterAccentThree",children:(0,r.jsx)(f.z$,{className:"text-white",children:(0,r.jsx)(h.nQG,{})})})})]})},R=n(5039);function V(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,c)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function a(e){V(s,r,c,a,o,"next",e)}function o(e){V(s,r,c,a,o,"throw",e)}a(void 0)}))}}var D=(0,p.zo)(R.fC,{all:"unset",width:40,height:14,backgroundColor:"#939393",borderRadius:"9999px",position:"relative",WebkitTapHighlightColor:"#1DA1F2",display:"flex",alignItems:"center",cursor:"pointer",'&[data-state="checked"]':{backgroundColor:"#6bc9fb"}}),G=(0,p.zo)(R.bU,{display:"block",width:20,height:20,backgroundColor:"#fafafa",boxShadow:"rgb(0 0 0 / 50%) 0px 1px 3px",borderRadius:"9999px",transition:"transform 100ms",transform:"translateX(0px)",willChange:"transform",'&[data-state="checked"]':{backgroundColor:"#1d9bf0",transform:"translateX(20px)"}}),Q=function(){var e=(0,x.useState)(!0),t=e[0],n=e[1];return(0,x.useEffect)((function(){_(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("feedBorders");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-4",children:[(0,r.jsx)("label",{htmlFor:"feedBorders",className:"text-[15px] font-bold",children:"Feed Borders"}),(0,r.jsx)(D,{onCheckedChange:_(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({feedBorders:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"feedBorders",children:(0,r.jsx)(G,{})})]})},O=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){_(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("navigationCenter");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-4",children:[(0,r.jsx)("label",{htmlFor:"navigationCenter",className:"text-[15px] font-bold",children:"Center Vertically"}),(0,r.jsx)(D,{onCheckedChange:_(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({navigationCenter:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"navigationCenter",children:(0,r.jsx)(G,{})})]})},$=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){_(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("navigationButtonsLabels");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-0",children:[(0,r.jsx)("label",{htmlFor:"showNavigationLabels",className:"text-[15px] font-bold",children:"Show Labels"}),(0,r.jsx)(D,{onCheckedChange:_(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({navigationButtonsLabels:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"showNavigationLabels",children:(0,r.jsx)(G,{})})]})},W=function(){var e=(0,x.useState)(!0),t=e[0],n=e[1];return(0,x.useEffect)((function(){_(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("navigationButtonsLabelsHover");case 3:(t=e.sent)&&n("off"!==t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-4",children:[(0,r.jsx)("label",{htmlFor:"showNavigationLabelsHover",className:"text-[15px] font-bold",children:"Show Labels on Hover"}),(0,r.jsx)(D,{onCheckedChange:_(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({navigationButtonsLabelsHover:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"showNavigationLabelsHover",children:(0,r.jsx)(G,{})})]})},U=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){_(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("zenMode");case 3:(t=e.sent)&&n("on"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full py-4",children:[(0,r.jsx)("label",{htmlFor:"zenMode",className:"text-[15px] font-bold",children:"Zen Mode"}),(0,r.jsx)(D,{onCheckedChange:_(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(t),e.prev=1,e.next=4,k({zenMode:t?"on":"off"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])}))),checked:t,id:"zenMode",children:(0,r.jsx)(G,{})})]})},X=n(2090),I=(0,p.zo)(X.f,{backgroundColor:"var(--twitter-accent-two)","&[data-orientation=horizontal]":{height:1,width:"100%"},"&[data-orientation=vertical]":{height:"100%",width:1}});function q(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,c)}function Y(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function a(e){q(s,r,c,a,o,"next",e)}function o(e){q(s,r,c,a,o,"throw",e)}a(void 0)}))}}var Z=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1],c=(0,x.useState)(!1),s=c[0],a=c[1],o=(0,x.useState)(!1),i=o[0],l=o[1],f=(0,x.useState)(!1),p=f[0],w=f[1],v=(0,x.useState)(!1),m=v[0],b=v[1],g=(0,x.useState)(!1),N=g[0],y=g[1],R=(0,x.useState)(!1),V=R[0],_=R[1];(0,x.useEffect)((function(){var e=Y(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("allVanity");case 3:(t=e.sent)&&l("hide"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),t=Y(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("replyCount");case 3:(t=e.sent)&&w("hide"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n=Y(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("likeCount");case 3:(t=e.sent)&&y("hide"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),r=Y(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("retweetCount");case 3:(t=e.sent)&&b("hide"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),c=Y(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("followCount");case 3:(t=e.sent)&&_("hide"===t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));e(),t(),n(),r(),c()}),[]);var D=Y(u().mark((function e(t,n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="all"===e.t0?3:"reply"===e.t0?17:"retweet"===e.t0?27:"like"===e.t0?37:"follow"===e.t0?47:57;break;case 3:return l(n),w(n),b(n),y(n),_(n),e.prev=8,e.next=11,k({allVanity:n?"hide":"show",replyCount:n?"hide":"show",retweetCount:n?"hide":"show",likeCount:n?"hide":"show",followCount:n?"hide":"show"});case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(8),console.warn(e.t1);case 16:return e.abrupt("break",57);case 17:return w(n),e.prev=18,e.next=21,k({replyCount:n?"hide":"show"});case 21:e.next=26;break;case 23:e.prev=23,e.t2=e.catch(18),console.warn(e.t2);case 26:return e.abrupt("break",57);case 27:return b(n),e.prev=28,e.next=31,k({retweetCount:n?"hide":"show"});case 31:e.next=36;break;case 33:e.prev=33,e.t3=e.catch(28),console.warn(e.t3);case 36:return e.abrupt("break",57);case 37:return y(n),e.prev=38,e.next=41,k({likeCount:n?"hide":"show"});case 41:e.next=46;break;case 43:e.prev=43,e.t4=e.catch(38),console.warn(e.t4);case 46:return e.abrupt("break",57);case 47:return _(n),e.prev=48,e.next=51,k({followCount:n?"hide":"show"});case 51:e.next=56;break;case 53:e.prev=53,e.t5=e.catch(48),console.warn(e.t5);case 56:return e.abrupt("break",57);case 57:case"end":return e.stop()}}),e,null,[[8,13],[18,23],[28,33],[38,43],[48,53]])})));return(0,r.jsxs)("form",{className:"flex flex-col items-center justify-between px-4 dark:bg-twitterBgTwoDark bg-twitterBgTwo rounded-2xl",children:[(0,r.jsx)(U,{}),(0,r.jsx)(I,{}),t?(0,r.jsxs)("div",{className:"w-full py-3",children:[(0,r.jsx)(C,{showVanityCheckboxes:s,setShowVanityCheckboxes:a,onCheckedChange:D,hideAll:i}),s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{onCheckedChange:D,hideReply:p}),(0,r.jsx)(T,{onCheckedChange:D,hideRetweet:m}),(0,r.jsx)(S,{onCheckedChange:D,hideLike:N}),(0,r.jsx)(A,{onCheckedChange:D,hideFollow:V})]}),(0,r.jsx)(z,{}),(0,r.jsx)(B,{}),(0,r.jsx)(P,{}),(0,r.jsx)(H,{}),(0,r.jsx)(E,{}),(0,r.jsx)(M,{}),(0,r.jsx)(L,{}),(0,r.jsx)("div",{className:"pb-3"}),(0,r.jsx)(I,{}),(0,r.jsx)("div",{className:"flex items-center w-full pt-4 space-x-1 text-sm",children:"* Experimental \u2014 may not always work"}),(0,r.jsxs)("div",{className:"flex items-center w-full pt-3 pb-2 space-x-1 text-sm",children:[(0,r.jsx)(h.YGl,{})," ",(0,r.jsxs)("span",{children:["Power user?"," ",(0,r.jsx)("a",{href:"https://t.wang.sh/twitter-tools",target:"_blank",rel:"noreferrer",className:"text-twitterBlue",children:"t.wang.sh/twitter-tools"})]})]})]}):(0,r.jsx)(d.f,{defaultPressed:!1,onPressedChange:function(){n(!0)},className:"grid w-full px-2 py-4 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)("div",{className:"text-[15px] text-twitterAccentThree font-medium",children:"Show More"})})]})},J=function(){return(0,r.jsxs)("section",{className:"flex flex-col space-y-2",children:[(0,r.jsx)("label",{htmlFor:"user-control-extras",className:"text-sm font-bold dark:text-twitterAccentOneDark text-twitterAccentOne",children:"Extras"}),(0,r.jsx)("div",{id:"user-control-extras",children:(0,r.jsx)(Z,{})})]})},K=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,x.useEffect)((function(){n(!0)}),[]),t},ee=n(7602);function te(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,c)}function ne(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function a(e){te(s,r,c,a,o,"next",e)}function o(e){te(s,r,c,a,o,"throw",e)}a(void 0)}))}}var re=(0,p.zo)(ee.fC,{position:"relative",display:"flex",alignItems:"center",userSelect:"none",touchAction:"none",width:"100%",cursor:"pointer",'&[data-orientation="horizontal"]':{height:20},'&[data-orientation="vertical"]':{flexDirection:"column",width:20,height:100}}),ce=(0,p.zo)(ee.fQ,{backgroundColor:"#8ecdf8",position:"relative",flexGrow:1,borderRadius:"9999px",'&[data-orientation="horizontal"]':{height:4},'&[data-orientation="vertical"]':{width:4}}),se=(0,p.zo)(ee.e6,{position:"absolute",display:"flex",alignItems:"center",backgroundColor:"#1DA1F2",borderRadius:"9999px",height:"100%"}),ae=(0,p.zo)(ee.bU,{all:"unset",display:"block",width:16,height:16,backgroundColor:"#1DA1F2",borderRadius:10,boxShadow:"rgb(101 119 134 / 20%) 0px 0px 7px, rgb(101 119 134 / 15%) 0px 1px 3px 1px","&:hover":{boxShadow:"0 0 0 5px rgba(29, 155, 240, 0.1)"},"&:focus":{boxShadow:"0 0 0 5px rgba(29, 155, 240, 0.1)"}}),oe=function(){var e=(0,x.useState)(700),t=e[0],n=e[1];return(0,x.useEffect)((function(){ne(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("feedWidth");case 3:(t=e.sent)&&n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),(0,r.jsx)("form",{children:(0,r.jsxs)("div",{className:"flex items-center pb-4 space-x-3",children:[(0,r.jsx)("span",{className:"text-xs font-medium",children:"600px"}),(0,r.jsxs)(re,{onValueChange:ne(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t[0]){e.next=10;break}return n(t[0]),e.prev=2,e.next=5,k({feedWidth:t[0]});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),value:[t],min:600,max:800,step:50,"aria-label":"Feed Width Slider",children:[(0,r.jsx)(ce,{children:(0,r.jsx)(se,{})}),(0,r.jsx)(ae,{title:"".concat(t,"px")}),(0,r.jsx)("span",{className:"absolute left-0 right-0 flex items-center justify-center w-[94%] m-auto -translate-x-[6px]",children:[600,650,700,750,800].map((function(e,n){return(0,r.jsx)("span",{title:"".concat(e,"px"),style:{left:"".concat(Math.abs((800-e)/200*100-100),"%"),backgroundColor:e>t?"#8ecdf8":"#1d9bf0"},className:"absolute w-3 h-3 rounded-full"},"track-".concat(n))}))})]}),(0,r.jsx)("span",{className:"text-lg font-medium",children:"800px"})]})})},ie=function(){var e=K();return(0,r.jsxs)("section",{className:"flex flex-col space-y-2",children:[(0,r.jsx)("label",{htmlFor:"user-control-feed-width",className:"text-sm font-bold dark:text-twitterAccentOneDark text-twitterAccentOne",children:"Feed"}),e?(0,r.jsxs)("div",{id:"user-control-feed-width",className:"p-4 pb-0 dark:bg-twitterBgTwoDark bg-twitterBgTwo rounded-2xl",children:[(0,r.jsx)(oe,{}),(0,r.jsx)(I,{}),(0,r.jsx)(Q,{})]}):(0,r.jsx)("div",{className:"dark:bg-twitterBgTwoDark bg-twitterBgTwo rounded-2xl animate-pulse h-[115.5px]"})]})},le=n(70),ue=n.n(le);function he(e,t,n,r,c,s,a){try{var o=e[s](a),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(r,c)}function de(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function a(e){he(s,r,c,a,o,"next",e)}function o(e){he(s,r,c,a,o,"throw",e)}a(void 0)}))}}var xe=(0,p.zo)(d.f,{"&[data-state=off]":{borderColor:"transparent",opacity:"50%"},"&[data-state=off]:hover":{borderColor:"rgba(255, 255, 255, 0.5)"}}),fe=function(e){var t=e.type,n=e.children,c=(0,x.useState)(!0),s=c[0],a=c[1];return(0,x.useEffect)((function(){de(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j(t);case 3:(n=e.sent)&&a("on"===n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),(0,r.jsx)(xe,{onPressedChange:de(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(n),e.prev=1,e.next=4,k((s=n?"on":"off",(c=t)in(r={})?Object.defineProperty(r,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[c]=s,r));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.warn(e.t0);case 9:case"end":return e.stop()}var r,c,s}),e,null,[[1,6]])}))),pressed:s,title:"Toggle ".concat(ue()(t)),"aria-label":"Toggle ".concat(ue()(t)),className:"dark:bg-twitterBgTwoDark bg-twitterBgTwo p-3 w-fit rounded-full border-[3px] border-twitterBlue dark:text-white text-black",children:(0,r.jsx)("svg",{width:25,height:25,"aria-hidden":"true",viewBox:"0 0 24 24",children:n})})},pe=function(){return(0,r.jsx)(fe,{type:"exploreButton",children:(0,r.jsx)("path",{className:"fill-current",d:"M21 7.337h-3.93l.372-4.272a.751.751 0 00-.682-.812.752.752 0 00-.812.683l-.383 4.4h-6.32l.37-4.27a.75.75 0 00-.68-.813.751.751 0 00-.813.683l-.382 4.4H3.782a.75.75 0 000 1.5H7.61l-.55 6.327H3a.75.75 0 000 1.5h3.93l-.372 4.272a.751.751 0 00.682.812l.066.003a.75.75 0 00.746-.686l.383-4.4h6.32l-.37 4.27a.751.751 0 00.682.813l.066.003a.75.75 0 00.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21a.75.75 0 000-1.5zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"})})},we=function(){return(0,r.jsx)(fe,{type:"notificationsButton",children:(0,r.jsx)("path",{className:"fill-current",d:"M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03a.75.75 0 00.447 1.353h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514a.747.747 0 00-.263-.838zM12 20.478a2.84 2.84 0 01-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"})})},ve=function(){return(0,r.jsx)(fe,{type:"messagesButton",children:(0,r.jsx)("path",{className:"fill-current",d:"M19.25 3.018H4.75A2.753 2.753 0 002 5.77v12.495a2.754 2.754 0 002.75 2.753h14.5A2.754 2.754 0 0022 18.265V5.77a2.753 2.753 0 00-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 01-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83a2.265 2.265 0 002.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"})})},me=function(){return(0,r.jsx)(fe,{type:"bookmarksButton",children:(0,r.jsx)("path",{className:"fill-current",d:"M19.9 23.5a.755.755 0 01-.442-.144L12 17.928l-7.458 5.43a.75.75 0 01-1.192-.607V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15a.749.749 0 01-.75.75zM12 16.25a.74.74 0 01.44.144l6.71 4.883V5.6a.752.752 0 00-.75-.75H5.6a.752.752 0 00-.75.75v15.677l6.71-4.883a.74.74 0 01.44-.144z"})})},be=function(){return(0,r.jsx)(fe,{type:"listsButton",children:(0,r.jsxs)("g",{className:"fill-current",children:[(0,r.jsx)("path",{d:"M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"}),(0,r.jsx)("path",{d:"M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"})]})})},je=function(){var e=(0,x.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)("form",{className:"p-3 pb-0 dark:bg-twitterBgTwoDark bg-twitterBgTwo rounded-2xl",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between pb-4",children:[(0,r.jsx)(pe,{}),(0,r.jsx)(we,{}),(0,r.jsx)(ve,{}),(0,r.jsx)(me,{}),(0,r.jsx)(be,{})]}),(0,r.jsx)(I,{}),t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O,{}),(0,r.jsx)($,{}),(0,r.jsx)(W,{})]}):(0,r.jsx)(d.f,{defaultPressed:!1,onPressedChange:function(){n(!0)},className:"grid w-full px-2 py-4 place-items-center hover:bg-twitterAccentFour",children:(0,r.jsx)("div",{className:"text-[15px] text-twitterAccentThree font-medium",children:"Show More"})})]})},ke=function(){return(0,r.jsxs)("section",{className:"flex flex-col space-y-2",children:[(0,r.jsx)("label",{htmlFor:"user-control-navigation",className:"text-sm font-bold dark:text-twitterAccentOneDark text-twitterAccentOne",children:"Navigation"}),(0,r.jsx)("div",{id:"user-control-navigation",children:(0,r.jsx)(je,{})})]})},ge=function(){return(0,r.jsxs)("main",{className:"flex flex-col p-2 space-y-4",children:[(0,r.jsx)(ie,{}),(0,r.jsx)(ke,{}),(0,r.jsx)(J,{})]})},Ne=function(){return(0,r.jsxs)(c,{children:[(0,r.jsx)(i,{}),(0,r.jsx)(ge,{}),(0,r.jsx)(s,{})]})}}},function(e){e.O(0,[409,181,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);