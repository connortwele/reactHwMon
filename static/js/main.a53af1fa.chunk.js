(this["webpackJsonpreact-poke-hw"]=this["webpackJsonpreact-poke-hw"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/pokeball.f10bf078.png"},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),o=a.n(r),l=(a(36),a(9)),s=a(10),i=a(12),m=a(11),u=a(7),p=function(){return c.a.createElement("nav",{className:"nav-wrapper red darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"brand-logo"},"Poke Times"),c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(u.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"/contact"},"Contact")))))},d=a(1),h=a(14),E=a.n(h),v=a(30),f=a.n(v),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={posts:[]},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e.setState({posts:t.data.slice(0,10)})}))}},{key:"render",value:function(){var e=this.state.posts,t=e.length?e.map((function(e){return c.a.createElement("div",{className:"post card",key:e.id},c.a.createElement("img",{src:f.a,alt:"pokeball"}),c.a.createElement("div",{className:"card-content"},c.a.createElement(u.b,{to:"/"+e.id},c.a.createElement("span",{className:"card-title"},e.title)),c.a.createElement("p",null,e.body)))})):c.a.createElement("div",{className:"center"}," No posts yet ");return c.a.createElement("div",{className:"container home"},c.a.createElement("h4",{className:"center"},"Home Page"),c.a.createElement("p",null,t))}}]),a}(n.Component),g=function(e){var t=["red","pink","orange","blue","green","yellow"][Math.floor(6*Math.random())]+"-text";return function(a){return c.a.createElement("div",{className:t},c.a.createElement(e,a))}}((function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"About Page"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id massa ac nisl laoreet viverra. Nam ultrices enim finibus dui."))})),N=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"Contact Page"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id massa ac nisl laoreet viverra. Nam ultrices enim finibus dui."))},y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={post:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.post_id;E.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then((function(t){e.setState({post:t.data})})),this.setState({id:t})}},{key:"render",value:function(){var e=this.state.post?c.a.createElement("div",{className:"post"},c.a.createElement("h4",{className:"center"},this.state.post.title),c.a.createElement("p",null,this.state.post.body)):c.a.createElement("div",{className:"center"}," Loading post...");return c.a.createElement("div",{class:"container"},c.a.createElement("h4",null,e))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/",component:b}),c.a.createElement(d.a,{path:"/about",component:g}),c.a.createElement(d.a,{path:"/contact",component:N}),c.a.createElement(d.a,{path:"/:post_id",component:y}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a53af1fa.chunk.js.map