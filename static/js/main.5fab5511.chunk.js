(this["webpackJsonpstreams-client-webapp"]=this["webpackJsonpstreams-client-webapp"]||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(13),s=n.n(r),a=n(15),o=n(9),u=n(11),O=n(3),l=n(1),d=function(){return Object(l.jsx)("div",{children:"StreamCreate"})},j=function(){return Object(l.jsx)("div",{children:"StreamEdit"})},h=function(){return Object(l.jsx)("div",{children:"StreamDelete"})},g=function(){return Object(l.jsx)("div",{children:"StreamList"})},p=function(){return Object(l.jsx)("div",{children:"StreamShow"})},b=n(21),S=n(22),I=n(24),_=n(23),m={SIGN_IN:"SIGN_IN",SIGN_OUT:"SIGN_OUT"};n(33).config();var N={ENVIRONMENT:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS"}).ENVIRONMENT,GOOGLE_OAUTH_CLIENT_ID:"627388651866-c144pihvnlf8qkdk5inkqoaadrr1msum.apps.googleusercontent.com",GOOGLE_OAUTH_CLIENT_SECRET:"UG8Nr3tQg71prnCTQ3aep_rS"},E=function(e){Object(I.a)(n,e);var t=Object(_.a)(n);function n(){var e;Object(b.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onAuthChange=function(t){t?e.props.signIn(e.auth.currentUser.get().getId()):e.props.signOut()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:N.GOOGLE_OAUTH_CLIENT_ID,scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?Object(l.jsxs)("button",{onClick:this.onSignOutClick,className:"ui red google button",children:[Object(l.jsx)("i",{className:"google icon"}),"Sign Out"]}):Object(l.jsxs)("button",{onClick:this.onSignInClick,className:"ui red google button",children:[Object(l.jsx)("i",{className:"google icon"}),"Sign In with Google"]})}},{key:"render",value:function(){return Object(l.jsx)("div",{children:this.renderAuthButton()})}}]),n}(c.a.Component),x=Object(a.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:m.SIGN_IN,payload:e}},signOut:function(){return{type:m.SIGN_OUT}}})(E),T=function(){return Object(l.jsxs)("div",{className:"ui secondary pointing menu",children:[Object(l.jsx)(u.b,{to:"/",className:"item",children:"Streamer"}),Object(l.jsxs)("div",{className:"right menu",children:[Object(l.jsx)(u.b,{to:"/",className:"item",children:"All Streams"}),Object(l.jsx)(x,{})]})]})},f=function(){return Object(l.jsx)("div",{className:"ui container",children:Object(l.jsx)(u.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(T,{}),Object(l.jsx)(O.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(O.a,{path:"/streams/new",exact:!0,component:d}),Object(l.jsx)(O.a,{path:"/streams/edit",exact:!0,component:j}),Object(l.jsx)(O.a,{path:"/streams/delete",exact:!0,component:h}),Object(l.jsx)(O.a,{path:"/streams/show",exact:!0,component:p})]})})})},v=n(12),C={isSignedIn:null,userId:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SIGN_IN:return Object(v.a)(Object(v.a)({},e),{},{isSignedIn:!0,userId:t.payload});case m.SIGN_OUT:return Object(v.a)(Object(v.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}},A=Object(o.b)({auth:G}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,k=Object(o.d)(A,w(Object(o.a)()));s.a.render(Object(l.jsx)(a.a,{store:k,children:Object(l.jsx)(f,{})}),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5fab5511.chunk.js.map