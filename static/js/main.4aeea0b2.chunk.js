(this["webpackJsonpautocomplete-input"]=this["webpackJsonpautocomplete-input"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),r=n.n(o),u=n(5),i=n.n(u),s=(n(13),n(14),n(4)),a=n.n(s),l=n(6),f=n(2),h=n(7),p=(n(18),function(e){var t=e.suggestions,n=e.handleSelection,r=e.highlightedSuggestion,u=e.closeDropdown,i=Object(o.useRef)();Object(o.useEffect)((function(){return document.addEventListener("mousedown",s,!1),function(){document.removeEventListener("mousedown",s,!1)}}),[]);var s=function(e){i.current.contains(e.target)||u()};return Object(c.jsx)("ul",{ref:i,className:"dropdown-menu dropdown-menu-end ".concat(t.length>0?"show":"hide"),children:t.map((function(e,t){return Object(c.jsx)("li",{className:"dropdown-item ".concat(r===t&&"highlight"),onClick:function(){return n(e)},children:e},e)}))})});function d(e){var t=1e3;return e>t&&(e=t),Math.floor(Math.random()*t)%e===0}var g=function(e){var t="post",n=[];return d(2)&&n.push("pre"+e),d(2)&&n.push(e),d(2)&&n.push(e+t),d(2)&&n.push("pre"+e+t),new Promise((function(e,t){var c=200*Math.random();setTimeout((function(){d(10)?t():e(n)}),c)}))},j=13,b=38,v=40,m=function(){var e=Object(o.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],u=Object(o.useState)([]),i=Object(f.a)(u,2),s=i[0],d=i[1],m=Object(o.useState)(0),O=Object(f.a)(m,2),w=O[0],x=O[1],S=Object(o.useRef)(),k=Object(o.useCallback)(Object(h.debounce)((function(e){return N(e)}),400),[]),C=function(e){var t=n.split(" ").slice(0,-1).join(" ");console.log(t),t.length>1?r("".concat(t," ").concat(e," ")):r("".concat(e," ")),F(),S.current.focus()},F=function(){d([]),x(0)},N=function(){var e=Object(l.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:n=e.sent,d(n),x(0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("input",{type:"text",ref:S,value:n,autoFocus:!0,onChange:function(e){return function(e){var t=n.split(" ").slice(-1)[0],c=e.target.value.split(" ").slice(-1)[0];r(e.target.value),c&&t!==c?k(c):F()}(e)},onKeyDown:function(e){return function(e){if(0!==s.length){var t=e.which;t===b?x(0===w?s.length-1:w-1):t===v?x(w===s.length-1?0:w+1):t===j&&C(s[w])}}(e)},className:"form-control"}),Object(c.jsx)(p,{suggestions:s,handleSelection:C,highlightedSuggestion:w,closeDropdown:F})]})};var O=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(m,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),c(e),o(e),r(e),u(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),w()}},[[19,1,2]]]);
//# sourceMappingURL=main.4aeea0b2.chunk.js.map