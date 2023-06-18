"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4387:function(t,n,e){e.r(n),e.d(n,{default:function(){return j}});var r,a,c,u=e(5861),o=e(9439),s=e(7757),i=e.n(s),p=e(2791),f=e(7689),l=e(7596),h=(e(5462),e(82)),v=e(7116),d=e(168),m=e(6444),x=m.ZP.ul(r||(r=(0,d.Z)(["\n  list-style-type: none;\n  padding: 0;\n"]))),g=m.ZP.li(a||(a=(0,d.Z)(["\n  margin-bottom: 35px;\n"]))),w=m.ZP.p(c||(c=(0,d.Z)(["\n  font-weight: bold;\n"]))),Z=e(184),j=function(){var t=(0,f.UO)().movieId,n=(0,p.useState)([]),e=(0,o.Z)(n,2),r=e[0],a=e[1],c=(0,p.useState)(!0),s=(0,o.Z)(c,2),d=s[0],m=s[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.tx)(t);case 3:e=n.sent,r=e.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),a(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),l.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(n.t0.message));case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.Ix,{autoClose:2e3}),d?(0,Z.jsx)(v.a,{}):(0,Z.jsx)(Z.Fragment,{children:r.length>0?(0,Z.jsx)(x,{children:r.map((function(t){return(0,Z.jsxs)(g,{children:[(0,Z.jsxs)(w,{children:["Author: ",t.author]}),(0,Z.jsx)("p",{children:t.content})]},t.id)}))}):(0,Z.jsx)("p",{children:"We don't have any reviews for this movie."})})]})}},82:function(t,n,e){e.d(n,{Pg:function(){return f},XT:function(){return p},tx:function(){return h},z1:function(){return v},zv:function(){return l}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),o="en-US",s=u.Z.create({baseURL:"https://api.themoviedb.org/3",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTIwYzliZWMwOWE4MTJiYzM2YzNiNTNlOWU5ZjNlNSIsInN1YiI6IjY0ODM3NmJmYzlkYmY5MDBjNTcxMWJkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8YvYBh5kr88uuL-CjfWLbM4Y1pFnOV1o1eMa5ZNh3Q4"}}),i=function(t){throw console.error(t),new Error(t.message)},p=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("/trending/all/day?language=".concat(o));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),i(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("/movie/".concat(n,"?language=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),i(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("/movie/".concat(n,"/credits?language=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),i(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("/movie/".concat(n,"/reviews?language=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),i(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.get("/search/movie?query=".concat(n,"&language=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),i(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.1e31aea9.chunk.js.map