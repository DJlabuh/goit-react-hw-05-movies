"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{780:function(A,n,e){e.d(n,{O:function(){return m}});e(791);var t,r,i,a,o=e(689),c=e(168),s=e(444),d=e(87),x=s.ZP.ul(t||(t=(0,c.Z)(["\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),p=s.ZP.li(r||(r=(0,c.Z)(["\n  width: 250px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  padding: 10px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-right: 0;\n  }\n"]))),l=(0,s.ZP)(d.rU)(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n  color: #333;\n  transition: transform 0.2s ease-in-out;\n\n  &:hover {\n    transform: scale(1.05);\n    color: #f16f6f;\n  }\n"]))),u=s.ZP.img(a||(a=(0,c.Z)(["\n  object-fit: cover;\n  margin-bottom: 10px;\n\n  @media (max-width: 768px) {\n    width: 300px;\n    height: auto;\n  }\n"]))),g=e(184),m=function(A){var n=A.movies,e=(0,o.TH)();return(0,g.jsx)(x,{children:n.map((function(A){return(0,g.jsx)(p,{children:(0,g.jsxs)(l,{to:"/movies/".concat(A.id),state:{from:e},children:[(0,g.jsx)(u,{src:A.img?"https://image.tmdb.org/t/p/w200".concat(A.img):"data:image/jpeg;base64,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",alt:A.title}),A.title]})},A.id)}))})}},703:function(A,n,e){e.r(n),e.d(n,{default:function(){return I}});var t,r,i,a,o=e(861),c=e(439),s=e(757),d=e.n(s),x=e(791),p=e(87),l=e(596),u=(e(462),e(116)),g=e(168),m=e(444),f=m.ZP.div(t||(t=(0,g.Z)(["\n  width: 85%;\n  background-color: #fcfcfc;\n  padding: 20px;\n  margin: 0 auto;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n"]))),h=e(802),w=m.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: stretch;\n  }\n"]))),E=m.ZP.input(i||(i=(0,g.Z)(["\n  padding: 10px 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n  width: 400px;\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 10px;\n    width: 90%;\n  }\n"]))),b=m.ZP.button(a||(a=(0,g.Z)(["\n  padding: 10px 20px;\n  background-color: #f16f6f;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  margin-left: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #e94b4b;\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-left: 0;\n    width: 100%;\n  }\n"]))),Z=e(184),v=function(A){var n,e=A.handleSubmit,t=(0,p.lr)(),r=(0,c.Z)(t,1)[0],i=(0,x.useState)(null!==(n=r.get("movie"))&&void 0!==n?n:""),a=(0,c.Z)(i,2),o=a[0],s=a[1];return(0,Z.jsxs)(w,{onSubmit:function(A){A.preventDefault(),""!==o.trim()?(e(o.trim()),s("")):l.Am.error("Empty search query. Please enter a valid search term in the search field.")},children:[(0,Z.jsx)(E,{type:"text",value:o,onChange:function(A){s(A.target.value)},placeholder:"Enter movie"}),(0,Z.jsx)(b,{type:"submit",children:"Search"})]})},j=e(780),I=function(){var A=(0,x.useState)([]),n=(0,c.Z)(A,2),e=n[0],t=n[1],r=(0,x.useState)(!1),i=(0,c.Z)(r,2),a=i[0],s=i[1],g=(0,p.lr)(),m=(0,c.Z)(g,2),w=m[0],E=m[1],b=w.get("movie");(0,x.useEffect)((function(){var A=function(){var A=(0,o.Z)(d().mark((function A(n){var e,r;return d().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,s(!0),A.next=4,(0,h.z1)(n);case 4:0===(e=A.sent).results.length?l.Am.error("No results found"):(r=e.results.map((function(A){return{id:A.id,img:A.poster_path,title:A.title}})),t(r)),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),l.Am.error("Error: ".concat(A.t0.message));case 11:return A.prev=11,s(!1),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[0,8,11,14]])})));return function(n){return A.apply(this,arguments)}}();b&&A(b)}),[b,E]);return(0,Z.jsxs)(f,{children:[(0,Z.jsx)(l.Ix,{autoClose:2e3}),(0,Z.jsx)(v,{handleSubmit:function(A){E({movie:A})}}),a?(0,Z.jsx)(u.a,{}):(0,Z.jsx)(j.O,{movies:e})]})}}}]);
//# sourceMappingURL=703.f7d285f0.chunk.js.map