(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3068)}])},3068:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return k}});var d=c(5893),e=c(7568),f=c(621),g=c(7294),h=c(3299);function i(a){var b=a.value,c=a.title,e=a.change;return(0,d.jsxs)("div",{className:"flex flex-col m-2 items-center justify-center h-full",children:[(0,d.jsx)("div",{className:"text-slate-300 uppercase",children:c}),(0,d.jsx)("div",{className:"text-slate-50 text-5xl",children:b}),(0,d.jsxs)("div",{className:e>0?"text-green-300":"text-red-300",children:[e,"%"]})]})}function j(){return(0,d.jsxs)("div",{className:"flex flex-row m-2 p-2 bg-slate-500 rounded-xl",children:[(0,d.jsx)(i,{value:3016,title:"Total Spent",change:15}),(0,d.jsx)(i,{value:200,title:"Expensive",change:23})]})}var k=function(){(0,h.useSession)({required:!0}).data;var a=(0,g.useState)([]),b=a[0],c=a[1],i=(0,g.useState)(!0),k=i[0],l=i[1];return((0,g.useEffect)(function(){l(!0),fetch("https://pro-expense-manager.herokuapp.com/expense/recent/").then(function(a){return a.json()}).then(function(a){c(a),l(!1)})},[]),k)?(0,d.jsx)(e.A,{metadata:void 0,children:(0,d.jsx)("div",{className:"text-xl",children:"Loading..."})}):(0,d.jsx)(e.A,{metadata:(0,d.jsx)(j,{}),children:(0,d.jsx)(f.R,{title:"Recent Expenses",expenses:b})})}}},function(a){a.O(0,[874,176,250,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])