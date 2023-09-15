(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{4723:function(n,t,r){"use strict";r.d(t,{Z:function(){return w}});var e,o,c,u=r(7689),a=r(6429),i=r.n(a),s=r(168),f=r(5706),p=r(1087),h=f.Z.div(e||(e=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  width: 800px;\n  padding: 20px;\n  margin-top: 20px;\n\n  background-color: #332b00;\n  border: 2px solid #f2ab26;\n  border-radius: 20px;\n"]))),l=(0,f.Z)(p.rU)(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 600px;\n  padding: 10px;\n  padding-bottom: 14px;\n\n  background-color: #332b00;\n  border-radius: 16px;\n  border: 2px solid#f2ab26;\n  color: #f2ab26;\n\n  font-size: 20px;\n  text-decoration: none;\n  text-align: center;\n\n  cursor: pointer;\n  transition: 300ms;\n\n  :hover {\n    background-color: #003300;\n    border: 2px solid #00f90f;\n    color: #00f90f;\n  }\n"]))),d=f.Z.h2(c||(c=(0,s.Z)(["\n  margin: 0 auto;\n\n  font-size: 24px;\n  font-weight: bold;\n\n  color: #f2ab26;\n"]))),x=r(184),w=function(n){var t=n.films,r=(0,u.TH)();if(t)return(0,x.jsx)(h,{children:0!==t.length?t.map((function(n){var t;return(0,x.jsx)(l,{to:"/movies/".concat(n.id),state:{from:r},children:null!==(t=n.title)&&void 0!==t?t:n.name},i().generate())})):(0,x.jsx)(d,{children:"Sorry, we don't have any movies with that name."})})}},5168:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var e,o=r(5861),c=r(9439),u=r(4687),a=r.n(u),i=r(2791),s=r(4560),f=r(168),p=r(5706).Z.h1(e||(e=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  margin: 20px auto;\n\n  font-size: 42px;\n\n  color: #f2ab26;\n"]))),h=r(184),l=function(){return(0,h.jsx)(p,{children:"Trending today"})},d=r(4723),x=function(){var n=(0,i.useState)(null),t=(0,c.Z)(n,2),r=t[0],e=t[1];return(0,i.useEffect)((function(){(0,o.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Df)();case 2:t=n.sent,e(t.results);case 4:case"end":return n.stop()}}),n)})))()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{}),(0,h.jsx)(d.Z,{films:r})]})}},4560:function(n,t,r){"use strict";r.d(t,{Df:function(){return i},Pg:function(){return s},tx:function(){return p},zi:function(){return h},zv:function(){return f}});var e=r(5861),o=r(4687),c=r.n(o),u="https://api.themoviedb.org/",a="b7e34aa79f43ff109b0a3786a37e76bf",i=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/trending/all/day?api_key=").concat(a,"&language=en-US"));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",t.json());case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"?api_key=").concat(a));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"/credits?api_key=").concat(a));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/movie/").concat(t,"/reviews?api_key=").concat(a));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"3/search/movie?api_key=").concat(a,"&language=en-US&query=").concat(t));case 2:if((r=n.sent).ok){n.next=5;break}throw new Error("Oops... something went wrong...");case 5:return n.abrupt("return",r.json());case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6429:function(n,t,r){"use strict";n.exports=r(5274)},8857:function(n,t,r){"use strict";var e,o,c,u=r(5408),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){c=!1}function s(n){if(n){if(n!==e){if(n.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+n.length+" characters: "+n);var t=n.split("").filter((function(n,t,r){return t!==r.lastIndexOf(n)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+t.join(", "));e=n,i()}}else e!==a&&(e=a,i())}function f(){return c||(c=function(){e||s(a);for(var n,t=e.split(""),r=[],o=u.nextValue();t.length>0;)o=u.nextValue(),n=Math.floor(o*t.length),r.push(t.splice(n,1)[0]);return r.join("")}())}n.exports={get:function(){return e||a},characters:function(n){return s(n),e},seed:function(n){u.seed(n),o!==n&&(i(),o=n)},lookup:function(n){return f()[n]},shuffled:f}},7098:function(n,t,r){"use strict";var e,o,c=r(2226);r(8857);n.exports=function(n){var t="",r=Math.floor(.001*(Date.now()-1567752802062));return r===o?e++:(e=0,o=r),t+=c(7),t+=c(n),e>0&&(t+=c(e)),t+=c(r)}},2226:function(n,t,r){"use strict";var e=r(8857),o=r(9139),c=r(2483);n.exports=function(n){for(var t,r=0,u="";!t;)u+=c(o,e.get(),1),t=n<Math.pow(16,r+1),r++;return u}},5274:function(n,t,r){"use strict";var e=r(8857),o=r(7098),c=r(6046),u=r(5347)||0;function a(){return o(u)}n.exports=a,n.exports.generate=a,n.exports.seed=function(t){return e.seed(t),n.exports},n.exports.worker=function(t){return u=t,n.exports},n.exports.characters=function(n){return void 0!==n&&e.characters(n),e.shuffled()},n.exports.isValid=c},6046:function(n,t,r){"use strict";var e=r(8857);n.exports=function(n){return!(!n||"string"!==typeof n||n.length<6)&&!new RegExp("[^"+e.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(n)}},9139:function(n){"use strict";var t,r="object"===typeof window&&(window.crypto||window.msCrypto);t=r&&r.getRandomValues?function(n){return r.getRandomValues(new Uint8Array(n))}:function(n){for(var t=[],r=0;r<n;r++)t.push(Math.floor(256*Math.random()));return t},n.exports=t},5408:function(n){"use strict";var t=1;n.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(n){t=n}}},5347:function(n){"use strict";n.exports=0},2483:function(n){n.exports=function(n,t,r){for(var e=(2<<Math.log(t.length-1)/Math.LN2)-1,o=-~(1.6*e*r/t.length),c="";;)for(var u=n(o),a=o;a--;)if((c+=t[u[a]&e]||"").length===+r)return c}},5861:function(n,t,r){"use strict";function e(n,t,r,e,o,c,u){try{var a=n[c](u),i=a.value}catch(s){return void r(s)}a.done?t(i):Promise.resolve(i).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,c){var u=n.apply(t,r);function a(n){e(u,o,c,a,i,"next",n)}function i(n){e(u,o,c,a,i,"throw",n)}a(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=168.e897c44b.chunk.js.map