(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),l=a(67),s=(a(86),a(49)),i=a(94);function u(e){var t=e.data,a=e.setData;return Object(n.useEffect)((function(){var e=document.querySelector("#create-todo input");e&&(e.value="")})),o.a.createElement("div",{id:"create-todo"},o.a.createElement(s.a,{size:"large",type:"text",defaultValue:"",placeholder:"What needs to be done?",autoComplete:"off",onPressEnter:function(e){""!==e.target.value&&(t.unshift({id:Date.now(),text:e.target.value,done:!1}),a(Object(i.a)(t)))}}))}a(156);var d=a(93),m=(a(187),a(92));function f(e){var t=e.data;return o.a.createElement("div",{id:"todo-list"},o.a.createElement(m.a,{bordered:!0,dataSource:t,renderItem:function(t){return o.a.createElement(E,Object.assign({},e,{item:t,key:t.id}))}}))}function E(e){console.log("singleList.js");var t=e.data,a=e.setData,r=e.editIndex,c=e.setIndex,l=e.item,i=l.id,u=l.text,m=l.done,f=Object(n.useRef)(null),E=Object(n.useRef)(!0);Object(n.useEffect)((function(){r===i&&f.current.input.focus()}));var v=function(e,a,n){return t.map((function(t){return t.id===e&&(t[a]=n),t}))},p=function(e,t){var n=v(e,"text",t);a(n),c(-1)};return o.a.createElement("li",{className:["todo",m?"done":"",r===i?"editing":""].join(" "),onDoubleClick:function(){return m||c(i),!1}},o.a.createElement("div",{className:"display"},o.a.createElement(d.a,{className:"check",type:"checkbox",checked:m,onChange:function(e){!function(e,t){var n=v(e,"done",t);a(n)}(i,e.target.checked)}}),o.a.createElement("span",{className:"todo-content"},u),o.a.createElement("span",{className:"todo-destroy",onClick:function(){t=t.filter((function(e){return!(e.id===i)})),a(t)}})),o.a.createElement("div",{className:"edit"},o.a.createElement(s.a,{ref:f,size:"large",className:"todo-input",type:"text",key:i,defaultValue:u,onBlur:function(){E.current&&(c(-1),f.current.setValue(u))},onPressEnter:function(e){var t=e.target.value.trim();p(i,t||u),E.current=!1}})))}function v(e){var t=e.data,a=t.filter((function(e){return!e.done})).length,n=t.filter((function(e){return e.done})).length;return o.a.createElement("div",{id:"todo-stats"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("span",{className:"number"},a),o.a.createElement("span",{className:"word"},"\u9879\u5f85\u5b8c\u6210")),o.a.createElement(p,Object.assign({completed:n},e)))}function p(e){var t=e.completed,a=e.data,n=e.setData;return t?o.a.createElement("span",{className:"todo-clear"},o.a.createElement("a",{href:"",onClick:function(){a=a.filter((function(e){return!e.done})),n(a)}},"Clear ",o.a.createElement("span",null,t)," \u5df2\u5b8c\u6210\u4e8b\u9879")):""}a(185);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement((function(){var e=window.localStorage,t=[];e.getItem("todos")&&(t=JSON.parse(e.getItem("todos")).data);var a=Object(n.useState)(t),r=Object(l.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(-1),d=Object(l.a)(i,2),m=d[0],E=d[1];return Object(n.useEffect)((function(){var e=window.localStorage,t={data:c};e.setItem("todos",JSON.stringify(t))}),[c]),console.log("app.js"),o.a.createElement("div",{id:"todolist"},o.a.createElement("h1",null,"todos"),o.a.createElement("div",{className:"content"},o.a.createElement(u,{data:c,setData:s}),c.length?o.a.createElement(f,{data:c,setData:s,editIndex:m,setIndex:E}):"",c.length?o.a.createElement(v,{data:c,setData:s}):""))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(186)}},[[97,1,2]]]);
//# sourceMappingURL=main.0f29f173.chunk.js.map