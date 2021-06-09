(this["webpackJsonpmultiparty-meeting"]=this["webpackJsonpmultiparty-meeting"]||[]).push([[2],{312:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(19),r=a(133),l=a(158),c=a(55),s=a(11),m=a(7),u=a(136),d=a(344),g=a.n(d),b=a(94),f=a.n(b),p=a(28),y=a(219),h=a(81),E=a(196),w=a(285),v=a(662),j=a(409),I=a.n(j),N=a(290),k=a(71),O=a(287),L=a(289),M=a(683),T=a(143),P=a.n(T),R=a(200),B=a(202),S=a(284),C=new URL(window.location).searchParams,D=(C.get("code"),C.get("produce"),C.get("forceTcp"),C.get("displayName"),C.get("muted"),"true"===C.get("join")),A=function(e){var t;return{root:{display:"flex",width:"100%",height:"100%",backgroundColor:"var(--background-color)",backgroundImage:"url(".concat(window.config?window.config.background:null,")"),backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},dialogTitle:{},dialogPaper:(t={width:"30vw",padding:e.spacing(2)},Object(s.a)(t,e.breakpoints.down("lg"),{width:"40vw"}),Object(s.a)(t,e.breakpoints.down("md"),{width:"50vw"}),Object(s.a)(t,e.breakpoints.down("sm"),{width:"70vw"}),Object(s.a)(t,e.breakpoints.down("xs"),{width:"90vw"}),t),logo:{display:"block",paddingBottom:"1vh"},loginButton:{position:"absolute",right:e.spacing(2),top:e.spacing(2),padding:0},largeIcon:{fontSize:"2em"},largeAvatar:{width:50,height:50},green:{color:"rgba(0, 153, 0, 1)"},red:{color:"rgba(153, 0, 0, 1)"}}},q=Object(m.a)(A)((function(e){var t=Object(o.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1],s=Object(y.a)();Object(o.useEffect)((function(){var e=setTimeout((function(){return r(!0)}),1e3),t=setTimeout((function(){return r(!1)}),4e3);return function(){clearTimeout(e),clearTimeout(t)}}),[]);var m=e.children,u=e.classes,d=e.myPicture,b=e.onLogin,f=e.loggedIn,p=Object(l.a)(e,["children","classes","myPicture","onLogin","loggedIn"]),h=f?s.formatMessage({id:"tooltip.logout",defaultMessage:"Log out"}):s.formatMessage({id:"tooltip.login",defaultMessage:"Log in"});return n.a.createElement(R.a,Object.assign({disableTypography:!0,className:u.dialogTitle},p),window.config.logo&&n.a.createElement("img",{alt:"Logo",className:u.logo,src:window.config.logo_black}),n.a.createElement(k.a,{variant:"h5"},m),window.config.loginEnabled&&n.a.createElement(M.a,{onClose:function(){r(!1)},onOpen:function(){r(!0)},open:i,title:h,placement:"left"},n.a.createElement(v.a,{"aria-label":"Account",className:u.loginButton,color:"inherit",onClick:b},d?n.a.createElement(N.a,{src:d,className:u.largeAvatar}):n.a.createElement(I.a,{className:g()(u.largeIcon,f?u.green:null)}))))})),x=Object(m.a)((function(e){return{root:{padding:e.spacing(2)}}}))(B.a),V=Object(m.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(S.a),W=Object(u.b)(Object(r.b)((function(e){return{room:e.room,displayName:e.settings.displayName,displayNameInProgress:e.me.displayNameInProgress,loginEnabled:e.me.loginEnabled,loggedIn:e.me.loggedIn,myPicture:e.me.picture}}),(function(e){return{changeDisplayName:function(t){e(p.b(t))}}}),null,{areStatesEqual:function(e,t){return t.room.inLobby===e.room.inLobby&&t.room.signInRequired===e.room.signInRequired&&t.room.overRoomLimit===e.room.overRoomLimit&&t.settings.displayName===e.settings.displayName&&t.me.displayNameInProgress===e.me.displayNameInProgress&&t.me.loginEnabled===e.me.loginEnabled&&t.me.loggedIn===e.me.loggedIn&&t.me.picture===e.me.picture}})(Object(m.a)(A)((function(e){var t=e.roomClient,a=e.room,o=e.roomId,i=e.displayName,r=e.displayNameInProgress,l=e.loggedIn,c=e.myPicture,s=e.changeDisplayName,m=e.classes,u=Object(y.a)(),d=(new Date).getTime().toString(36);D&&t.join({roomId:o,joinVideo:!0});return n.a.createElement("div",{className:m.root},n.a.createElement(E.a,{open:!0,classes:{paper:m.dialogPaper}},n.a.createElement(q,{myPicture:c,onLogin:function(){l?t.logout(o):t.login(o)},loggedIn:l},window.config.title?window.config.title:"Multiparty meeting",n.a.createElement("hr",null)),n.a.createElement(x,null,n.a.createElement(w.a,{gutterBottom:!0},n.a.createElement(h.a,{id:"room.aboutToJoin",defaultMessage:"You are about to join a meeting"})),n.a.createElement(w.a,{variant:"h6",gutterBottom:!0,align:"center"},n.a.createElement(h.a,{id:"room.roomId",defaultMessage:"Room ID: {roomName}",values:{roomName:o}})),n.a.createElement(w.a,{gutterBottom:!0},n.a.createElement(h.a,{id:"room.setYourName",defaultMessage:"Set your name for participation, \n\t\t\t\t\t\t\t\tand choose how you want to join:"})),n.a.createElement(L.a,{id:"displayname",label:u.formatMessage({id:"label.yourName",defaultMessage:"Your name"}),value:i,variant:"outlined",margin:"normal",disabled:r,onChange:function(e){var t=e.target.value;s(t)},onKeyDown:function(e){switch(e.key){case"Enter":case"Escape":""===i&&s("Guest "+d),"Guest"==i.toString().trim()&&s("Guest "+d),a.inLobby&&t.changeDisplayName(i)}},onBlur:function(){if(""===i){var e=(new Date).getTime().toString(36);s("Guest "+e)}a.inLobby&&t.changeDisplayName(i)},fullWidth:!0}),!a.inLobby&&a.overRoomLimit&&n.a.createElement(w.a,{className:m.red,variant:"h6",gutterBottom:!0},n.a.createElement(h.a,{id:"room.overRoomLimit",defaultMessage:"The room is full, retry after some time."}))),a.inLobby?n.a.createElement(x,null,n.a.createElement(w.a,{className:m.green,gutterBottom:!0,variant:"h6",style:{fontWeight:"600"},align:"center"},n.a.createElement(h.a,{id:"room.youAreReady",defaultMessage:"Ok, you are ready"})),a.signInRequired?n.a.createElement(w.a,{gutterBottom:!0,variant:"h5",style:{fontWeight:"600"}},n.a.createElement(h.a,{id:"room.emptyRequireLogin",defaultMessage:"The room is empty! You can Log In to start \n\t\t\t\t\t\t\t\t\t\tthe meeting or wait until the host joins"})):n.a.createElement(w.a,{gutterBottom:!0,variant:"h5",style:{fontWeight:"600"}},n.a.createElement(h.a,{id:"room.locketWait",defaultMessage:"The room is locked - hang on until somebody lets you in ..."}))):n.a.createElement(V,null,n.a.createElement(O.a,{onClick:function(e){e.target.disabled=!0,t.join({roomId:o,joinVideo:!1})},variant:"contained",color:"secondary"},n.a.createElement(h.a,{id:"room.audioOnly",defaultMessage:"Audio only"})),n.a.createElement(O.a,{id:"button.audnvid",onClick:function(e){e.target.disabled=!0,t.join({roomId:o,joinVideo:!0})},variant:"contained",color:"secondary"},n.a.createElement(h.a,{id:"room.audioVideo",defaultMessage:"Audio and Video"}))),!f()()&&n.a.createElement(P.a,{buttonText:u.formatMessage({id:"room.consentUnderstand",defaultMessage:"I understand"})},n.a.createElement(h.a,{id:"room.cookieConsent",defaultMessage:"This website uses cookies to enhance the user experience"}))))})))),G=a(121),Y=a(147),J=Object(Y.a)((function(){return Promise.all([a.e(0),a.e(14),a.e(6)]).then(a.bind(null,680))}));t.default=Object(r.b)((function(e){return{room:e.room}}),null,null,{areStatesEqual:function(e,t){return t.room===e.room}})((function(e){var t=e.room,a=Object(i.e)().id.toLowerCase();return Object(o.useEffect)((function(){J.preload()}),[]),t.joined?n.a.createElement(o.Suspense,{fallback:n.a.createElement(G.a,null)},n.a.createElement(J,null)):n.a.createElement(W,{roomId:a})}))}}]);
//# sourceMappingURL=app.30752dfe.chunk.js.map