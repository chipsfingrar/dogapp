(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),u=n.n(c),s=n(1),i=n.n(s),o=n(2),l=n(3),d=n(4),p=n(6),f=n(5),h=n(7),b=function(){var e=Object(o.a)(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then(function(e){return e.json()}).then(function(e){return e},function(e){console.log("An error occurred while fetching data: ".concat(e))}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("https://dog.ceo/api/breeds/list/all");case 2:return t=e.sent,e.abrupt("return",v(t.message));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),v=function(e){return Object.entries(e).reduce(function(e,t){var n=t[0],r=t[1];if(r&&r.length>0){var a=!0,c=!1,u=void 0;try{for(var s,i=r[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var o=s.value;e.push({breed:n,subBreed:o})}}catch(l){c=!0,u=l}finally{try{a||null==i.return||i.return()}finally{if(c)throw u}}}else e.push({breed:n});return e},[])},w=function(){var e=Object(o.a)(i.a.mark(function e(t,n){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://dog.ceo/api/breed/".concat(t,"/").concat(null!=n?n+"/":"","images/random"),e.abrupt("return",fetch(r).then(function(e){return e.json()}).then(function(e){return e.message},function(e){console.log("An error occurred while fetching image: ".concat(e))}));case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b("https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).state={image:"loader.gif"},e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,w(this.props.breed,this.props.subBreed);case 3:return e.t1=e.sent,e.next=6,g();case 6:e.t2=e.sent,e.t3={image:e.t1,text:e.t2},e.t0.setState.call(e.t0,e.t3);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.breed,n=e.subBreed;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("span",{"data-testid":"breed"},t),n&&a.a.createElement("span",{"data-testid":"subBreed"}," - ",n)),a.a.createElement("div",null,a.a.createElement("img",{"data-testid":"image",src:this.state.image,alt:"image of"+t,style:{width:"100%",height:"auto"}})),a.a.createElement("div",null,a.a.createElement("p",{"data-testid":"text"},this.state.text)))}}]),t}(r.Component),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={isLoaded:!1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,this.setState({breeds:t,isLoaded:!0});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.isLoaded?a.a.createElement("div",{style:{width:"200px"}},this.state.breeds.map(function(e){var t=e.breed,n=e.subBreed;return a.a.createElement(y,{key:e.breed+"-"+e.subBreed,breed:t,subBreed:n})})):a.a.createElement("p",null,"Loading..")}}]),t}(r.Component);u.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.d19f9005.chunk.js.map