(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{34:function(n,e,t){n.exports=t.p+"static/media/notFound.5325f9a1.png"},38:function(n,e,t){n.exports=t(83)},43:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(29),i=t.n(o),l=(t(43),t(9)),c=t(1),u=t(14),d=t.n(u),m=t(30),p=t(7),s=t(5),f=t(6);function b(){var n=Object(s.a)(["\n  min-height: 100%;\n  background: radial-gradient(#5c2a9d, #45046a);\n  display: flex;\n  align-items: center;\n  flex: 1;\n  flex-direction: column;\n  padding: 5px 0 30px;\n"]);return b=function(){return n},n}var g=f.a.div(b()),x=t(37),h=t(18);function v(){var n=Object(s.a)(["\n  background: #45046a;\n  width: 100%;\n  padding: 25px 5px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  h1 {\n    color: #b5076b;\n    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',\n      'Helvetica Neue', sans-serif;\n    border-bottom: 1px solid #b5076b;\n  }\n\n  form {\n    width: 50%;\n    margin-top: 25px;\n\n    display: flex;\n    flex-direction: row;\n  }\n\n  form input {\n    width: 100%;\n    height: 32px;\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n    background: linear-gradient(#b5076b, ",");\n\n    color: #fff;\n    font-size: 18px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\n    transition: 0.3s;\n\n    &:hover,\n    &:focus {\n      padding: 18px 15px;\n    }\n\n    &::placeholder {\n      color: #fff;\n      opacity: 0.4;\n    }\n  }\n\n  form button {\n    background: #b5076b;\n    border-radius: 7px;\n    border: none;\n    padding: 6px;\n    margin-left: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.2s;\n    cursor: pointer;\n\n    position: relative;\n    left: 0;\n    bottom: 0;\n\n    &:hover {\n      padding: 9px;\n      left: 3px;\n      bottom: 3px;\n      background: ",";\n    }\n  }\n"]);return v=function(){return n},n}var E=f.a.div(v(),Object(h.a)(.05,"#b5076b"),Object(h.a)(.03,"#b5076b"));var y=function(n){n.onSearch;var e=n.onWordChange,t=n.wordProp,o=void 0===t?"":t,i=Object(c.f)(),l=Object(a.useState)(""),u=Object(p.a)(l,2),d=u[0],m=u[1];return Object(a.useEffect)((function(){m(o)}),[o]),r.a.createElement(E,null,r.a.createElement("h1",null,"Sinonimando"),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),i.push("/".concat(d))}},r.a.createElement("input",{type:"text",onChange:function(n){e(n.target.value),m(n.target.value)},value:d,placeholder:"Procure por um sin\xf4nimo"}),r.a.createElement("button",{type:"submit"},r.a.createElement(x.a,{size:20,color:"#FFF"}))))};function w(){var n=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 75px;\n\n  img {\n    width: 300px;\n    height: 250px;\n  }\n\n  h2 {\n    padding: 0 50px;\n    margin-top: 30px;\n    font-size: 30px;\n    text-align: center;\n    color: rgba(255, 0, 0, 0.8);\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n  }\n"]);return w=function(){return n},n}var O=f.a.div(w()),j=t(34),k=t.n(j);var S=function(){var n=Math.floor(10*Math.random())+1;return r.a.createElement(O,null,n>=5?r.a.createElement("img",{src:k.a,alt:"doubtful emoji"}):r.a.createElement("iframe",{src:"https://giphy.com/embed/a5viI92PAF89q",width:"480",height:"300",frameBorder:"0",allowFullScreen:!0,title:"doubtful batman gif"}),r.a.createElement("h2",null,"Sin\xf4nimo n\xe3o encontrado. ",r.a.createElement("br",null)," Tente novamente com uma palavra semelhante."))},F=t(35),C=t.n(F);function M(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return M=function(){return n},n}function z(){var n=Object(s.a)(["\n  list-style: none;\n  padding-bottom: 30px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.195);\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  & + & {\n    margin-top: 15px;\n  }\n\n  h2 {\n    color: #fff;\n    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',\n      'Helvetica Neue', sans-serif;\n  }\n\n  div {\n    margin-left: 15px;\n    padding: 0 20px;\n    display: inline-block;\n    max-width: 100%;\n    word-break: break-word;\n    overflow-wrap: break-word;\n\n    ul {\n      display: flex;\n      flex-direction: row;\n      max-width: 100%;\n      overflow-wrap: break-word;\n      flex-wrap: wrap;\n    }\n\n    ul li {\n      margin-right: 6px;\n      list-style: none;\n      /* min-width: 80px; */\n\n      button {\n        background: none;\n        border: none;\n        color: rgba(255, 255, 255, 0.85);\n        font-size: 20px;\n        text-decoration: none;\n        border-bottom: 1px dotted rgba(255, 255, 255, 0.85);\n\n        line-height: 1.7;\n\n        cursor: pointer;\n\n        &:hover {\n          color: #3aa5dc;\n          border-bottom: 1px solid rgba(255, 255, 255, 0.85);\n        }\n\n        &.multiple {\n          border-bottom: none;\n          cursor: not-allowed;\n        }\n\n        &.multiple:hover {\n          color: rgba(255, 255, 255, 0.85);\n        }\n      }\n    }\n  }\n"]);return z=function(){return n},n}function I(){var n=Object(s.a)(["\n  min-height: 100%;\n  width: 90%;\n  padding: 20px 30px 30px;\n  border-radius: 8px;\n  background: #b5076b;\n  margin-top: 50px;\n\n  h1 {\n    color: rgba(255, 255, 255, 0.7);\n    font-family: sans-serif;\n    margin: 10px 0 20px;\n\n    span {\n      font-weight: bold;\n      color: #fff;\n      border-bottom: 1px dotted rgba(255, 255, 255, 0.85);\n    }\n  }\n\n  > ul {\n    margin-top: 10px;\n    padding-left: 20px;\n    border-left: 1px solid rgba(255, 255, 255, 0.1);\n  }\n"]);return I=function(){return n},n}var N=f.a.div(I()),P=f.a.li(z()),U=f.a.div(M());var A=function(n){var e=n.synonyms,t=void 0===e?[]:e,a=n.word,o=void 0===a?"":a,i=n.loading,l=void 0!==i&&i,u=(n.didFind,Object(c.f)());return r.a.createElement(N,null,l?r.a.createElement(U,null,l&&r.a.createElement(C.a,{name:"pacman",color:"yellow",fadeIn:"none"})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Sin\xf4nimos de ",r.a.createElement("span",null,o)),r.a.createElement("ul",null,t.map((function(n){return r.a.createElement(P,{key:n.sort},r.a.createElement("h2",null,n.sort),r.a.createElement("div",null,r.a.createElement("ul",null,n.synonyms.map((function(n){return r.a.createElement("li",{key:n.name},r.a.createElement("button",{className:n.isMultiple?"multiple":"",onClick:function(){return n.isMultiple?{}:function(n){var e=n.replace(/(?:\.|,)/,"");u.push("/".concat(e))}(n.name)}},n.name))})))))})))))},G=t(36),R=t.n(G).a.create({baseURL:"https://cors-anywhere.herokuapp.com/https://sinonimosapi.netlify.com/.netlify/functions/api/",method:"GET"});var T=function(n){var e=n.match,t=n.notFound,o=void 0!==t&&t,i=Object(c.f)(),l=e.params.word,u=Object(a.useState)([]),s=Object(p.a)(u,2),f=s[0],b=s[1],x=Object(a.useState)(l),h=Object(p.a)(x,2),v=h[0],E=h[1],w=Object(a.useState)(!0),O=Object(p.a)(w,2),j=O[0],k=O[1],F=Object(a.useState)(!1),C=Object(p.a)(F,2),M=C[0],z=C[1],I=Object(a.useCallback)(Object(m.a)(d.a.mark((function n(){var e,t,a,r,o=arguments;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",z(!0),n.next=4,R({params:{q:e.trim()}});case 4:t=n.sent,a=t.data,r=Object.entries(a).map((function(n){return{sort:n[0],synonyms:n[1].map((function(n,e,t){return{name:e===t.length-1?n.concat("."):n.concat(","),isMultiple:n.includes(" ")}}))}})),b(r),z(!1),k(!!r[0]);case 10:case"end":return n.stop()}}),n)}))),[]);return Object(a.useEffect)((function(){I(l),E(l)}),[l,I]),Object(a.useEffect)((function(){}),[f]),Object(a.useEffect)((function(){j||i.push("/notFound")}),[j,i]),r.a.createElement(g,null,r.a.createElement(y,{onSearch:I,onWordChange:function(){},wordProp:v}),o?r.a.createElement(S,null):r.a.createElement(A,{synonyms:f,didFind:j,word:v,loading:M}))};var q=function(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",exact:!0,component:T}),r.a.createElement(c.a,{path:"/notFound",exact:!0,render:function(n){return r.a.createElement(T,Object.assign({},n,{notFound:!0}))}}),r.a.createElement(c.a,{path:"/:word",exact:!0,component:T})))};var B=function(){return r.a.createElement(q,null)};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.956abc64.chunk.js.map