(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},55:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(25),c=n.n(a),s=n(14),r=(n(34),n(0)),i=n(2),o=(n(35),n(9)),l=n(26),j=n(27),d=n.n(j).a.create({baseURL:"https://search.torre.co/",headers:{"Content-type":"application/json"}}),h={findPeopleApi:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="people/_search/?size=20&";return t&&(n+="after=".concat(t)),d.post(n,{name:{term:"".concat(e)}})}},u=(n(55),n(1)),b=function(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(o.a)(s,2),j=i[0],d=i[1],b=Object(r.useState)(""),p=Object(o.a)(b,2),O=p[0],x=p[1],f=Object(r.useState)(0),m=Object(o.a)(f,2),g=m[0],v=m[1],N=Object(r.useState)(!0),w=Object(o.a)(N,2),y=w[0],S=w[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"headline",children:[Object(u.jsx)("h1",{children:"Discover Torre Genomes"}),Object(u.jsx)("p",{children:"To build the world\u2019s network that automates recruiting we have to provide massive value to candidates."}),Object(u.jsx)("p",{children:"This is, and will always be, our focus, our drive, our passion."})]}),Object(u.jsxs)("div",{className:"bar",children:[Object(u.jsx)("input",{className:"searchbar",type:"text",placeholder:"Search people by name",title:"Search",value:j,onChange:function(e){var t=e.target.value;d(t)},onKeyPress:function(e){"Enter"===e.key&&h.findPeopleApi(j,O).then((function(e){c((function(){return e.data.results})),v((function(){return e.data.total})),x((function(){return e.data.pagination.next}))}))}}),Object(u.jsx)("i",{className:"fas fa-search"})]}),0!==a.length&&Object(u.jsxs)("div",{children:["There are ",Object(u.jsx)("strong",{children:g})," profiles matching"]}),Object(u.jsx)(l.a,{dataLength:a.length,next:function(){a.length>=g&&S((function(){return!1})),h.findPeopleApi(j,O).then((function(e){c(a.concat(e.data.results)),x(e.data.pagination.next)}))},hasMore:y,className:"flex-grid",loader:0!==a.length?Object(u.jsx)("h4",{className:"search",children:"Loading..."}):"",children:a&&a.map((function(e,t){return Object(u.jsx)("div",{className:"flex-grid-item",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsx)("p",{children:e.locationName}),Object(u.jsx)("div",{className:"pic",style:{backgroundImage:"url("+e.picture+")"}}),Object(u.jsx)("div",{className:"bio",children:Object(u.jsx)("span",{children:e.professionalHeadline})}),Object(u.jsxs)("a",{href:"https://torre.co/".concat(e.username),target:"_blank",children:[Object(u.jsx)("button",{}),Object(u.jsx)("i",{className:"fas fa-arrow-right"})]})]},t)})}))})]})})};var p=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(i.c,{children:Object(u.jsx)(i.a,{path:"/",exact:!0,children:Object(u.jsx)(b,{})})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};c.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()}},[[62,1,2]]]);
//# sourceMappingURL=main.7a147a22.chunk.js.map