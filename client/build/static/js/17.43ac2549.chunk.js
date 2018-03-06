webpackJsonp([17],{1255:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n.n(o),c=n(1458),l=(n.n(c),n(11)),u=n(1279),p=n(321),m=n(320),f=n(179),d=n(14),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y={from_name:"string",from_email:"string",parsed_start_displaying_at:"string",n_type:"string"},b=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),h(t,[{key:"componentWillMount",value:function(){this.props.dispatch(Object(d._57)(this.props.currentPage.notifications))}},{key:"render",value:function(){var e=this.props,t=e.notifications,n=e.isFetching;return i.a.createElement("div",{className:"main-content"},i.a.createElement("div",{className:"page-content"},i.a.createElement("div",null,i.a.createElement("h1",{className:"section-heading larger"},"Notifications"),i.a.createElement(p.a,{content:this.props.successContent}),i.a.createElement(m.a,{content:this.props.errorContent}),i.a.createElement("span",{className:"helper"}),n&&0===t.items.length&&i.a.createElement("h1",{className:"section-heading larger"},"Loading..."),0===t.items.length&&i.a.createElement("h1",{className:"section-heading larger"},"No notifications found!"),t.items.length>0&&i.a.createElement(u.a,{items:t.items,headers:y,itemIndex:"notifications"}),t.items.length>0&&t.totalPages>1&&i.a.createElement(f.a,{items:t,itemIndex:"notifications"}))))}}]),t}(o.Component),E=function(e){return{notifications:e.notifications,isFetching:e.posts.isFetching,successContent:e.successMessages.items,errorContent:e.errorMessages.items,currentPage:e.currentPage}};t.default=Object(l.connect)(E)(b)},1279:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),i=n.n(o),c=n(1280),l=(n.n(c),n(11)),u=n(324),p=n(16),m=n(20),f=n.n(m),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),d(t,[{key:"linkClass",value:function(e,t,n){return"posts"===n?t.author_id===this.props.currentUser.id?"button":this.props.currentUser.role["pf_"+n].includes(e)?"button":"button disabled":"media"===n?t.user_id===this.props.currentUser.id?"button":this.props.currentUser.role["pf_"+n].includes(e)?"button":"button disabled":"button"+(this.props.currentUser.role["pf_"+n].includes(e)?"":" disabled")}},{key:"isDisabled",value:function(e,t){return"posts"===t?e.author_id!==this.props.currentUser.id&&!this.props.currentUser.role["pf_"+t].includes("d"):"media"===t?e.user_id!==this.props.currentUser.id&&!this.props.currentUser.role["pf_"+t].includes("d"):!this.props.currentUser.role["pf_"+t].includes("d")}},{key:"renderRows",value:function(e,t,n){var r=this;return e.map(function(e){return i.a.createElement("tr",{key:e.id},r.renderItemFromHeader(e,t),i.a.createElement("td",null,i.a.createElement(p.b,{className:r.linkClass("r",e,n),to:r.renderLink(n,e.id)},i.a.createElement("i",{className:"icon-eye"}),"Show")),i.a.createElement("td",null,i.a.createElement(p.b,{className:r.linkClass("u",e,n),to:r.renderLink(n,e.id)+"/edit"},i.a.createElement("i",{className:"icon-pencil"}),"Edit")),i.a.createElement("td",null,i.a.createElement(u.a,{item:e,disabled:r.isDisabled(e,n)},"Destroy")))})}},{key:"renderLink",value:function(e,t){return"/"+e+"/"+t}},{key:"renderItemFromHeader",value:function(e,t){var n=0;return Object.keys(t).map(function(r){switch(n++,t[r]){case"string":case"custom":return i.a.createElement("td",{key:n},e[r]);case"array":return i.a.createElement("td",{key:n},e[r].filter(function(e){return"All Categories"!==e}).join(", "));case"categories":return i.a.createElement("td",{key:n},e[r].filter(function(e){return"All Categories"!==e.name}).map(function(e){return e.name}).join(", "));case"boolean":case"custom_boolean":return e[r]?i.a.createElement("td",{className:"centered",key:n},i.a.createElement("i",{className:"icon-check"})):i.a.createElement("td",{className:"centered",key:n},i.a.createElement("i",{className:"icon-cancel"}));default:return null}})}},{key:"renderHeaders",value:function(e){var t=0;return Object.entries(e).map(function(n){switch(t++,n[1]){case"custom":case"custom_boolean":return i.a.createElement("th",{key:t},e.display[n[0]]);case"string":case"boolean":case"array":case"categories":var r=n[0].replace(/pf_/gi,"");return i.a.createElement("th",{key:t},r.charAt(0).toUpperCase()+r.slice(1));default:return null}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"box-dark"},i.a.createElement("table",null,i.a.createElement(f.a,{component:"tbody",transitionName:"group-fade-wait",transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500,transitionAppear:!0},i.a.createElement("tr",null,this.renderHeaders(this.props.headers),i.a.createElement("th",null,i.a.createElement("i",{className:"icon-eye"})),i.a.createElement("th",null,i.a.createElement("i",{className:"icon-pencil"})),i.a.createElement("th",null,i.a.createElement("i",{className:"icon-trash"}))),this.renderRows(this.props.items,this.props.headers,this.props.itemIndex))))}}]),t}(o.Component),y=function(e){return{currentUser:e.currentUser}};t.a=Object(l.connect)(y)(h)},1280:function(e,t,n){var r=n(1281);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(1247)(r,a);r.locals&&(e.exports=r.locals)},1281:function(e,t,n){t=e.exports=n(1246)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"style.css",sourceRoot:""}])},1458:function(e,t,n){var r=n(1459);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;n(1247)(r,a);r.locals&&(e.exports=r.locals)},1459:function(e,t,n){t=e.exports=n(1246)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"style.css",sourceRoot:""}])}});
//# sourceMappingURL=17.43ac2549.chunk.js.map