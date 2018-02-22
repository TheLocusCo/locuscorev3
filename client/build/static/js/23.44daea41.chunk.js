webpackJsonp([23],{1248:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r.n(o),c=r(1444),l=(r.n(c),r(11)),u=r(16),p=r(1279),m=r(321),f=r(320),d=r(179),h=r(14),b=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),y={title:"string",categories:"categories",library:"string"},g=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),b(t,[{key:"componentWillMount",value:function(){this.props.dispatch(Object(h._49)(this.props.currentPage.graphics))}},{key:"render",value:function(){var e=this.props,t=e.graphics,r=e.isFetching;return i.a.createElement("div",{className:"main-content"},i.a.createElement("div",{className:"page-content"},i.a.createElement("div",null,i.a.createElement("h1",{className:"section-heading larger"},"Web Graphics"),i.a.createElement("div",{className:"box-dark centered"},i.a.createElement(u.b,{className:"button",to:"/graphics_welcome"},i.a.createElement("i",{className:"icon-window"}),"Graphics")),i.a.createElement(m.a,{content:this.props.successContent}),i.a.createElement(f.a,{content:this.props.errorContent}),i.a.createElement("span",{className:"helper"}),r&&0===t.items.length&&i.a.createElement("h1",{className:"section-heading larger"},"Loading..."),0===t.items.length&&i.a.createElement("h1",{className:"section-heading larger"},"No web graphics found!"),t.items.length>0&&i.a.createElement(p.a,{items:t.items,headers:y,itemIndex:"graphics"}),t.items.length>0&&t.totalPages>1&&i.a.createElement(d.a,{items:t,itemIndex:"graphics"}))))}}]),t}(o.Component),E=function(e){return{graphics:e.graphics,isFetching:e.posts.isFetching,successContent:e.successMessages.items,errorContent:e.errorMessages.items,currentPage:e.currentPage}};t.default=Object(l.connect)(E)(g)},1279:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=r(0),i=r.n(o),c=r(1280),l=(r.n(c),r(11)),u=r(324),p=r(16),m=r(20),f=r.n(m),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),h=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),d(t,[{key:"linkClass",value:function(e,t,r){return"posts"===r?t.author_id===this.props.currentUser.id?"button":this.props.currentUser.role["pf_"+r].includes(e)?"button":"button disabled":"media"===r?t.user_id===this.props.currentUser.id?"button":this.props.currentUser.role["pf_"+r].includes(e)?"button":"button disabled":"button"+(this.props.currentUser.role["pf_"+r].includes(e)?"":" disabled")}},{key:"isDisabled",value:function(e,t){return"posts"===t?e.author_id!==this.props.currentUser.id&&!this.props.currentUser.role["pf_"+t].includes("d"):"media"===t?e.user_id!==this.props.currentUser.id&&!this.props.currentUser.role["pf_"+t].includes("d"):!this.props.currentUser.role["pf_"+t].includes("d")}},{key:"renderRows",value:function(e,t,r){var n=this;return e.map(function(e){return i.a.createElement("tr",{key:e.id},n.renderItemFromHeader(e,t),i.a.createElement("td",null,i.a.createElement(p.b,{className:n.linkClass("r",e,r),to:n.renderLink(r,e.id)},i.a.createElement("i",{className:"icon-eye"}),"Show")),i.a.createElement("td",null,i.a.createElement(p.b,{className:n.linkClass("u",e,r),to:n.renderLink(r,e.id)+"/edit"},i.a.createElement("i",{className:"icon-pencil"}),"Edit")),i.a.createElement("td",null,i.a.createElement(u.a,{item:e,disabled:n.isDisabled(e,r)},"Destroy")))})}},{key:"renderLink",value:function(e,t){return"/"+e+"/"+t}},{key:"renderItemFromHeader",value:function(e,t){var r=0;return Object.keys(t).map(function(n){switch(r++,t[n]){case"string":case"custom":return i.a.createElement("td",{key:r},e[n]);case"array":return i.a.createElement("td",{key:r},e[n].filter(function(e){return"All Categories"!==e}).join(", "));case"categories":return i.a.createElement("td",{key:r},e[n].filter(function(e){return"All Categories"!==e.name}).map(function(e){return e.name}).join(", "));case"boolean":case"custom_boolean":return e[n]?i.a.createElement("td",{className:"centered",key:r},i.a.createElement("i",{className:"icon-check"})):i.a.createElement("td",{className:"centered",key:r},i.a.createElement("i",{className:"icon-cancel"}));default:return null}})}},{key:"renderHeaders",value:function(e){var t=0;return Object.entries(e).map(function(r){switch(t++,r[1]){case"custom":case"custom_boolean":return i.a.createElement("th",{key:t},e.display[r[0]]);case"string":case"boolean":case"array":case"categories":var n=r[0].replace(/pf_/gi,"");return i.a.createElement("th",{key:t},n.charAt(0).toUpperCase()+n.slice(1));default:return null}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"box-dark"},i.a.createElement("table",null,i.a.createElement(f.a,{component:"tbody",transitionName:"group-fade-wait",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500,transitionAppear:!0},i.a.createElement("tr",null,this.renderHeaders(this.props.headers),i.a.createElement("th",null,i.a.createElement("i",{className:"icon-eye"})),i.a.createElement("th",null,i.a.createElement("i",{className:"icon-pencil"})),i.a.createElement("th",null,i.a.createElement("i",{className:"icon-trash"}))),this.renderRows(this.props.items,this.props.headers,this.props.itemIndex))))}}]),t}(o.Component),b=function(e){return{currentUser:e.currentUser}};t.a=Object(l.connect)(b)(h)},1280:function(e,t,r){var n=r(1281);"string"===typeof n&&(n=[[e.i,n,""]]);var a={};a.transform=void 0;r(1247)(n,a);n.locals&&(e.exports=n.locals)},1281:function(e,t,r){t=e.exports=r(1246)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"style.css",sourceRoot:""}])},1444:function(e,t,r){var n=r(1445);"string"===typeof n&&(n=[[e.i,n,""]]);var a={};a.transform=void 0;r(1247)(n,a);n.locals&&(e.exports=n.locals)},1445:function(e,t,r){t=e.exports=r(1246)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"style.css",sourceRoot:""}])}});
//# sourceMappingURL=23.44daea41.chunk.js.map