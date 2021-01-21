(this["webpackJsonpreact-typescript-generic-search-and-filter"]=this["webpackJsonpreact-typescript-generic-search-and-filter"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(6),i=a.n(o),c=a(7),l=a(1);function d(e){var t=e.object,a=e.onChangeSorter;return r.createElement(r.Fragment,null,r.createElement("label",{htmlFor:"sorters",className:"mt-3"},"Sorters! Try us too! (We also work!)"),r.createElement("select",{id:"sorters",className:"custom-select",onChange:function(e){return a(e.target.value.split(",")[0],"true"===e.target.value.split(",")[1])},defaultValue:["title","true"]},Object.keys(t).map((function(e){return e?r.createElement(r.Fragment,null,r.createElement("option",{key:"".concat(e,"-true"),value:[e,"true"]},"sort by '",e,"' descending"),r.createElement("option",{key:"".concat(e,"-false"),value:[e,"false"]},"sort by '",e,"' ascending")):r.createElement(r.Fragment,null)}))))}function s(e){var t=Object(r.useState)(),a=Object(l.a)(t,2),n=a[0],o=a[1],i=e.onChangeSearchQuery,c=function(e,t){var a=Object(r.useState)(e),n=Object(l.a)(a,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){i(e)}),t);return function(){clearTimeout(a)}})),o}(n,250);return Object(r.useEffect)((function(){void 0!==c&&i(c)}),[c,i]),r.createElement(r.Fragment,null,r.createElement("label",{htmlFor:"search",className:"mt-3"},"Search! Try me! (I work!)"),r.createElement("input",{id:"search",className:"form-control full-width",type:"search",placeholder:"Search...","aria-label":"Search",onChange:function(e){return o(e.target.value)}}))}var u=a(4),m=a.n(u);function p(e){var t=e.title,a=e.description,n=e.rating,o=e.updated,i=e.created,c=e.id,l=e.isSpecialCard;return r.createElement("div",{className:"col-12 p-3"},r.createElement("div",{className:l?"card specialCard":"card"},r.createElement("div",{className:"card-body"},r.createElement("h1",{className:"card-title"},t),r.createElement("p",{className:"card-text"},a),r.createElement("p",{className:"card-text font-italic"},"Rating: ",n,"/10")),r.createElement("div",{className:"card-footer text-muted text-right"},r.createElement("span",{className:"float-left"},"#",c)," created:"," ",r.createElement(m.a,{fromNow:!0,date:i}),", updated:"," ",r.createElement(m.a,{fromNow:!0,date:o}))))}var h=[{title:"I am title 1",description:"cool description 1",id:1,rating:10,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"Title 2",description:"cool description 2",id:2,rating:7,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!0},{title:"Title Three",description:"another description",id:3,rating:4,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"Title 4: I love generics",description:"generics are awesome!",id:4,rating:6,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"We also love TypeScript",description:"Yes, TypeScript is also very cool",id:5,rating:10,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"X",description:"X",id:6,rating:10,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"Y",description:"Y",id:7,rating:9,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"Z",description:"Z",id:8,rating:1,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!0},{title:"A",description:"A",id:9,rating:6,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"B",description:"B",id:10,rating:0,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"C",description:"C",id:11,rating:3,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"",description:"I am the description. This card has an empty, i.e. 'falsy' title :(",id:12,rating:5,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1},{title:"I am the title. This card has an empty, i.e. 'falsy' description :(",description:"",id:13,rating:5,created:new Date(+new Date-Math.floor(1e10*Math.random())),updated:new Date(+new Date-Math.floor(1e10*Math.random())),isSpecialCard:!1}];function f(e){var t=e.object,a=e.filters,n=e.onChangeFilter,o=r.createElement(r.Fragment,null,"is ",r.createElement("b",null,"truthy")),i=r.createElement(r.Fragment,null,"is ",r.createElement("b",null,"falsy"));return r.createElement("div",{className:"p-1 my-2"},r.createElement("label",{className:"mt-3"},"Filters! Try us too! (We also work!)"),Object.keys(t).map((function(e){var t=function(t){var c=t?"radio-defined-".concat(e):"radio-not-defined-".concat(e),l=t?o:i;return r.createElement(r.Fragment,null,r.createElement("input",{type:"radio",id:c,value:e,checked:function(){var r=a.filter((function(t){return t.property===e}));return 1===r.length&&r[0].isTruthyPicked===t}(),onChange:function(a){return n(e,a.target.checked,t)},className:"m-1 ml-3"}),r.createElement("label",{htmlFor:c},"'",e,"' ",l))};return r.createElement("div",{key:e,className:"input-group my-3"},t(!0),t(!1))})))}function w(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)({property:"title",isDescending:!0}),u=Object(l.a)(i,2),m=u[0],w=u[1],g=Object(r.useState)([]),D=Object(l.a)(g,2),y=D[0],M=D[1],E=h.filter((function(e){return function(e,t,a){return""===a||t.some((function(t){var r=e[t];return("string"===typeof r||"number"===typeof r)&&r.toString().toLowerCase().includes(a.toLowerCase())}))}(e,["title","description"],a)})).filter((function(e){return t=e,0===(a=y).length||a.every((function(e){return e.isTruthyPicked?t[e.property]:!t[e.property]}));var t,a})).sort((function(e,t){return function(e,t,a){var r=function(){return e[a.property]>t[a.property]?1:e[a.property]<t[a.property]?-1:0};return a.isDescending?-1*r():r()}(e,t,m)}));return n.a.createElement("div",{className:"container mx-auto my-2"},n.a.createElement("div",{className:"my-3"},n.a.createElement("i",null,"From the blog post"," ",n.a.createElement("a",{href:"https://chrisfrewin.com/blog/react-typescript-generic-search-sort-and-filters/"},'"React and TypeScript: Generic Search, Sorters, and Filters"'),".")),n.a.createElement(s,{onChangeSearchQuery:function(e){return o(e)}}),n.a.createElement(d,{object:h[0],onChangeSorter:function(e,t){w({property:e,isDescending:t})}}),n.a.createElement(f,{object:h[0],filters:y,onChangeFilter:function(e,t,a){M(t?[].concat(Object(c.a)(y.filter((function(t){return t.property!==e}))),[{property:e,isTruthyPicked:a}]):y.filter((function(t){return t.property!==e})))}}),n.a.createElement("h3",null,"Results:"),E.length>0&&n.a.createElement("div",{className:"row"},E.map((function(e){return n.a.createElement(p,Object.assign({key:e.id},e))}))),0===E.length&&n.a.createElement("p",null,"No results found!"))}a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e78deea2.chunk.js.map