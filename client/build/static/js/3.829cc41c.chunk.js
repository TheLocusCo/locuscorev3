webpackJsonp([3],{1278:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(320),c=function(e){return o.a.createElement("article",{style:{paddingTop:"22.5%"},className:"portfolio-item"},o.a.createElement(a.a,{content:e.errorContent}))};t.a=c},1511:function(e,t,n){var r=n(1512);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(1247)(r,o);r.locals&&(e.exports=r.locals)},1512:function(e,t,n){t=e.exports=n(1246)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"style.css",sourceRoot:""}])},1513:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1514),c=(n.n(a),function(e){var t=function(e){setTimeout(function(){var t={file:e};window.open(t.file)},100)};return o.a.createElement("article",{className:"portfolio-item"},e.arc_media&&null!==e.arc_media.original&&o.a.createElement("div",{className:"centered"},o.a.createElement("img",{src:e.arc_media.original,alt:""})),null!==e.arc_media_generic&&o.a.createElement("div",{className:"centered",style:{marginTop:"22%"}},o.a.createElement("a",{className:"button",onClick:function(){t(e.arc_media_generic)}},o.a.createElement("i",{className:"icon-download"}),"Download ",e.arc_media_generic_name)))});t.a=c},1514:function(e,t,n){var r=n(1515);"string"===typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(1247)(r,o);r.locals&&(e.exports=r.locals)},1515:function(e,t,n){t=e.exports=n(1246)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"style.css",sourceRoot:""}])},336:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),i=n.n(c),s=n(1511),l=(n.n(s),n(1513)),u=n(1278),p=n(11),m=n(14),f=n(16),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),b(t,[{key:"componentWillMount",value:function(){var e=this.props.location.pathname.split("/").reverse()[1],t=this.props.location.pathname.split("/").reverse()[0];this.props.dispatch(Object(m._69)(e,t))}},{key:"render",value:function(){var e=this.props,t=e.object,n=e.isFetching,r=e.errorContent,o=e.location,a=e.locationToPush;return i.a.createElement(f.c,{render:function(e){var c=e.history;return i.a.createElement("div",{className:"ltbx-wrap",tabIndex:"-1"},i.a.createElement("div",{className:"ltbx-container"},i.a.createElement("div",{className:"ltbx-content"},n&&!t.id&&i.a.createElement("h1",{className:"section-heading larger"},"Loading..."),r.length>0&&i.a.createElement(u.a,{errorContent:r}),t.id&&i.a.createElement(l.a,Object.assign({},t,{location:o})),i.a.createElement("button",{onClick:function(){return c.push(a)},title:"Close (Esc)",type:"button",className:"ltbx-close"},"\xd7"),i.a.createElement("button",{onClick:function(){return c.go(-1)},title:"Close (Esc)",type:"button",className:"ltbx-close ltbx-back"},i.a.createElement("i",{className:"icon-back"})))),i.a.createElement("div",{className:"ltbx-bg",onClick:function(){return c.push(a)}}))}})}}]),t}(c.Component),v=function(e){return{object:e.medium.content,errorContent:e.errorMessages.items,isFetching:e.post.isFetching}};t.default=Object(p.connect)(v)(d)}});
//# sourceMappingURL=3.829cc41c.chunk.js.map