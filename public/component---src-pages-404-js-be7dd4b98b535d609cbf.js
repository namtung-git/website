(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5YPY":function(e,a,t){e.exports=t.p+"static/khe-logo-90e1fb0f25ad53519a1f4e4f1e1144bb.png"},Bl7J:function(e,a,t){"use strict";var n=t("dI71"),l=t("q1tI"),c=t.n(l),i=(t("wcMv"),t("Wbzz")),s=t("5YPY"),r=t.n(s),m=function(e){return c.a.createElement("header",{id:"header",className:"alt"},c.a.createElement(i.Link,{to:"/",className:"logo"},c.a.createElement("img",{src:r.a})),c.a.createElement("nav",null,c.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},o=function(e){return c.a.createElement("nav",{id:"menu"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"links"},c.a.createElement("li",null,c.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/landing"},"Landing")),c.a.createElement("li",null,c.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/generic"},"Generic")),c.a.createElement("li",null,c.a.createElement(i.Link,{onClick:e.onToggleMenu,to:"/elements"},"Elements"))),c.a.createElement("ul",{className:"actions vertical"},c.a.createElement("li",null,c.a.createElement("a",{href:"#",className:"button special fit"},"Get Started")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",className:"button fit"},"Log In")))),c.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},u=function(e){return c.a.createElement("section",{id:"contact"},c.a.createElement("div",{className:"inner"},c.a.createElement("section",null,c.a.createElement("form",{method:"post",action:"#"},c.a.createElement("div",{className:"field half first"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",name:"name",id:"name"})),c.a.createElement("div",{className:"field half"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"text",name:"email",id:"email"})),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"message"},"Message"),c.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),c.a.createElement("li",null,c.a.createElement("input",{type:"reset",value:"Clear"}))))),c.a.createElement("section",{className:"split"},c.a.createElement("section",null,c.a.createElement("div",{className:"contact-method"},c.a.createElement("span",{className:"icon alt fa-envelope"}),c.a.createElement("h3",null,"Email"),c.a.createElement("a",{href:"#"},"information@untitled.tld"))),c.a.createElement("section",null,c.a.createElement("div",{className:"contact-method"},c.a.createElement("span",{className:"icon alt fa-phone"}),c.a.createElement("h3",null,"Phone"),c.a.createElement("span",null,"(000) 000-0000 x12387"))),c.a.createElement("section",null,c.a.createElement("div",{className:"contact-method"},c.a.createElement("span",{className:"icon alt fa-home"}),c.a.createElement("h3",null,"Address"),c.a.createElement("span",null,"1234 Somewhere Road #5432",c.a.createElement("br",null),"Nashville, TN 00000",c.a.createElement("br",null),"United States of America"))))))},E=function(e){return c.a.createElement("footer",{id:"footer"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},c.a.createElement("span",{className:"label"},"Twitter"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},c.a.createElement("span",{className:"label"},"Facebook"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},c.a.createElement("span",{className:"label"},"Instagram"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",className:"icon alt fa-github"},c.a.createElement("span",{className:"label"},"GitHub"))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},c.a.createElement("span",{className:"label"},"LinkedIn")))),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© Untitled"),c.a.createElement("li",null,"Design: ",c.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(n.a)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},c.a.createElement("div",{id:"wrapper"},c.a.createElement(m,{onToggleMenu:this.handleToggleMenu}),e,c.a.createElement(u,null),c.a.createElement(E,null)),c.a.createElement(o,{onToggleMenu:this.handleToggleMenu}))},a}(c.a.Component);a.a=d},w2l6:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),c=t("Bl7J");a.default=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},wcMv:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-be7dd4b98b535d609cbf.js.map