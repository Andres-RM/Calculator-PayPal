(this["webpackJsonpcalculator-paypal"]=this["webpackJsonpcalculator-paypal"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(6),r=c.n(s),n=c(0),l=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark mb-4",style:{backgroundColor:"#3b7bbf",fontFamily:"sans-serif",display:"flex",justifyContent:"space-between"},children:[Object(n.jsx)("p",{className:"navbar-brand mt-3",children:"Calculadora PayPal"}),Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)("a",{className:"nav-link",href:"https://github.com/alexanyernas/",rel:"noreferrer",target:"_BLANK",children:Object(n.jsx)("i",{className:"bi bi-github mr-1"})}),Object(n.jsx)("a",{className:"nav-link",href:"https://twitter.com/alexanyernas/",rel:"noreferrer",target:"_BLANK",children:Object(n.jsx)("i",{className:"bi bi-twitter mr-1"})}),Object(n.jsx)("a",{className:"nav-link",href:"https://instagram.com/alexanyernas/",rel:"noreferrer",target:"_BLANK",children:Object(n.jsx)("i",{className:"bi bi-instagram mr-1"})})]})]})},i=c(2),j=c(3),o=c(5),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),c=Object(i.a)(t,2),s=c[0],r=c[1],n=function(){r(e)},l=function(e){var t=e.target;r(Object(o.a)(Object(o.a)({},s),{},Object(j.a)({},t.name,t.value)))};return[s,l,n]},m=function(e){return((-.3-e)/-.946).toFixed(2)},d=function(){var e=b({toReceive:""}),t=Object(i.a)(e,2),c=t[0].toReceive,s=t[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),j=l[0],o=l[1],d=Object(a.useState)(""),O=Object(i.a)(d,2),u=O[0],x=O[1],h=Object(a.useState)(!1),v=Object(i.a)(h,2),p=v[0],N=v[1],f=Object(a.useState)(""),g=Object(i.a)(f,2),y=g[0],S=g[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"Calcular para Recibir"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Para Recibir:"}),Object(n.jsxs)("div",{className:"row container",children:[Object(n.jsx)("input",{type:"text",className:"col-11 form-control ".concat(p&&"border-danger alert-danger"),name:"toReceive",value:c,onChange:s}),Object(n.jsx)("p",{className:"col-1 mt-1",children:"USDs"})]}),p&&Object(n.jsx)("small",{className:"form-text text-muted",children:y})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"btn btn-primary col",type:"submit",onClick:function(){c.trim().length>=1?isNaN(c)?(N(!0),S("Debe ingresar un valor num\xe9rico v\xe1lido"),o(""),x("")):(o(m(c)),x((m(c)-c).toFixed(2)),N(!1)):(N(!0),S("*Campo Obligatorio"))},children:"Calcular"})}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Hay que Enviar:"}),Object(n.jsxs)("div",{className:"row container",children:[Object(n.jsx)("input",{type:"text",className:"col-11 form-control",name:"toReceive",readOnly:!0,value:j}),Object(n.jsx)("p",{className:"col-1 mt-1",children:"USDs"})]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"La Comisi\xf3n es de:"}),Object(n.jsxs)("div",{className:"row container",children:[Object(n.jsx)("input",{type:"text",value:u,className:"col-11 form-control",readOnly:!0}),Object(n.jsx)("p",{className:"col-1 mt-1",children:"USDs"})]})]})]})]})},O=function(e){return.054*e+.3},u=function(){var e=b({toSend:""}),t=Object(i.a)(e,2),c=t[0].toSend,s=t[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),j=l[0],o=l[1],m=Object(a.useState)(""),d=Object(i.a)(m,2),u=d[0],x=d[1],h=Object(a.useState)(!1),v=Object(i.a)(h,2),p=v[0],N=v[1],f=Object(a.useState)(""),g=Object(i.a)(f,2),y=g[0],S=g[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"Calcular para Enviar"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Si se Env\xedan:"}),Object(n.jsxs)("div",{className:"row container",children:[Object(n.jsx)("input",{type:"text",className:"col-11 form-control ".concat(p&&"border-danger alert-danger"),name:"toSend",value:c,onChange:s}),Object(n.jsx)("p",{className:"col-1 mt-1",children:"USDs"})]}),p&&Object(n.jsx)("small",{className:"form-text text-muted",children:y})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"btn btn-primary col",type:"submit",onClick:function(){c.trim().length>=1?isNaN(c)?(N(!0),S("Debe ingresar un valor num\xe9rico v\xe1lido"),o(""),x("")):(o(c-O(c)),x(O(c).toFixed(2)),N(!1)):(N(!0),S("*Campo Obligatorio"))},children:"Calcular"})}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"La Comisi\xf3n es de:"}),Object(n.jsxs)("div",{className:"row container",children:[Object(n.jsx)("input",{type:"text",className:"col-11 form-control",name:"toSend",readOnly:!0,value:u}),Object(n.jsx)("p",{className:"col-1 mt-1",children:"USDs"})]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Se Reciben:"}),Object(n.jsxs)("div",{className:"row container",children:[Object(n.jsx)("input",{type:"text",className:"col-11 form-control",readOnly:!0,value:j}),Object(n.jsx)("p",{className:"col-1 mt-1",children:"USDs"})]})]})]})]})},x=(c(12),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row mt-3 ml-3",children:Object(n.jsx)("div",{className:"calculator col-11 bg-light rounded p-3",children:Object(n.jsx)(d,{})})}),Object(n.jsx)("div",{className:"row mt-3 ml-3",children:Object(n.jsx)("div",{className:"calculator col-11 bg-light rounded p-3",children:Object(n.jsx)(u,{})})})]})]})}),h=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(x,{})})};c(13);r.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2b985e25.chunk.js.map