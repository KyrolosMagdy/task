(this["webpackJsonpre-deploy-task"]=this["webpackJsonpre-deploy-task"]||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c),o=(a(120),a(121),a(197)),i=a(200),l=a(202),d=a.p+"static/media/brand.ff937463.jpg",p=a(19),j=a(2),u=Object(o.a)((function(e){return{root:{flexGrow:1,shadow:"none"},aboveNav:{padding:"12px",backgroundColor:"#5c5c5c"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"black"}}})),b=function(){var e=u(),t=Object(p.f)();return Object(j.jsxs)("div",{className:e.root,children:[Object(j.jsx)("div",{className:e.aboveNav}),Object(j.jsx)(i.a,{position:"static",children:Object(j.jsx)(l.a,{children:Object(j.jsx)("img",{src:d,alt:"Logo",onClick:function(){t.push("/")}})})})]})},O=a(18),h=a(105),x=a(31),m=a(6),f=a(207),g=a(209),S=a(204),y=a(208),v=a(206),E=a(210),_=a(218),C=a(205),T=a(109),w=a(203),R=a(81),k=a.n(R),P=a(83),A=a.n(P),N=a(82),U=a.n(N),M=a(80),I=a.n(M),D=a(29),W=a.n(D),L=a(26),F={FETCH_USERS_START:"FETCH_USERS_START",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAILURE:"FETCH_USERS_FAILURE",SET_TOTAL_USERS:"SET_TOTAL_USERS",SET_IS_LOADING:"SET_IS_LOADING",SET_ROWS_PERPAGE:"SET_ROWS_PERPAGE",LOAD_MORE_USERS:"LOAD_MORE_DATA",LOAD_MORE_USERS_SUCCESS:"LOAD_MORE_USERS_SUCCESS",SEARCH_FOR_SPECIFIC_USER:"SEARCH_FOR_SPECIFIC_USER"},H=function(e){return{type:F.FETCH_USERS_SUCCESS,payload:e}},Y=function(e){return{type:F.SET_TOTAL_USERS,payload:e}},G=function(){return{type:F.SET_IS_LOADING}},z=Object(o.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function B(e){var t=z(),a=Object(x.a)(),n=e.count,r=e.page,c=e.rowsPerPage,s=e.onChangePage;return Object(j.jsxs)("div",{className:t.root,children:[Object(j.jsx)(w.a,{onClick:function(e){s(e,0)},disabled:0===r,"aria-label":"first page",children:"rtl"===a.direction?Object(j.jsx)(I.a,{}):Object(j.jsx)(k.a,{})}),Object(j.jsx)(w.a,{onClick:function(e){s(e,r-1)},disabled:0===r,"aria-label":"previous page",children:"rtl"===a.direction?Object(j.jsx)(U.a,{}):Object(j.jsx)(A.a,{})}),Object(j.jsx)(w.a,{onClick:function(e){s(e,r+1)},disabled:r>=Math.ceil(n/c)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(j.jsx)(A.a,{}):Object(j.jsx)(U.a,{})}),Object(j.jsx)(w.a,{onClick:function(e){s(e,Math.max(0,Math.ceil(n/c)-1))},disabled:r>=Math.ceil(n/c)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(j.jsx)(k.a,{}):Object(j.jsx)(I.a,{})})]})}var q=Object(o.a)({table:{minWidth:500,marginTop:"20px"},inactive:{color:"red"},active:{color:"green"}}),J=Object(L.b)((function(e){return{rowsPerPage:e.users.rowsPerPage}}),(function(e){return{setRowsPerPageAction:function(t){return e(function(e){return{type:F.SET_ROWS_PERPAGE,payload:e}}(t))}}}))((function(e){var t=e.data,a=e.totalData,n=e.rowsPerPage,c=e.setRowsPerPageAction,s=e.onMoreDataRequired,o=e.handleOnRowClick,i=e.titles,l=e.currentPage,d=q(),p=r.a.useState(0),u=Object(h.a)(p,2),b=u[0],O=u[1],x=t,w=n-Math.min(n,x.length-b*n),R=function(){var e=n*b,t=Math.floor((e+10)/x.length)+1;console.log("checks: ",n),t>1&&s(t)},k=Object(m.a)((function(e){return{head:{color:e.palette.common.black,fontWeight:"bold"}}}))(S.a),P=Object(m.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(C.a),A=function(e){console.log("rowClicke: ",e),o(e)};return console.log("row: ",x),Object(j.jsx)(v.a,{component:T.a,children:Object(j.jsxs)(f.a,{className:d.table,"aria-label":"custom pagination table",children:[Object(j.jsx)(y.a,{children:Object(j.jsx)(C.a,{children:i.map((function(e){return Object(j.jsxs)(k,{align:"center",children:[" ",e," "]})}))})}),Object(j.jsxs)(g.a,{children:[(n>0?x.slice(b*n,b*n+n):x).map((function(e){return"posts"===l?Object(j.jsxs)(P,{onClick:function(){return A(e)},children:[Object(j.jsx)(k,{align:"center",children:e.id}),Object(j.jsx)(k,{align:"center",children:e.title}),Object(j.jsx)(k,{align:"center",children:e.body})]},e.name):"comments"===l?Object(j.jsxs)(P,{onClick:function(){return A(e)},children:[Object(j.jsx)(k,{align:"center",children:e.id}),Object(j.jsx)(k,{align:"center",children:e.name}),Object(j.jsx)(k,{align:"center",children:e.email}),Object(j.jsx)(k,{align:"center",children:e.body}),Object(j.jsx)(k,{align:"center",children:Object(j.jsx)(W.a,{format:"DD-MM-YYYY hh:mm a",children:e.created_at})}),Object(j.jsx)(k,{align:"center",children:Object(j.jsx)(W.a,{format:"DD-MM-YYYY hh:mm a",children:e.updated_at})})]},e.name):Object(j.jsxs)(P,{onClick:function(){return A(e)},children:[Object(j.jsx)(k,{align:"center",children:e.id}),Object(j.jsx)(k,{align:"center",children:e.name}),Object(j.jsx)(k,{align:"center",children:e.email}),Object(j.jsx)(k,{align:"center",children:e.gender}),Object(j.jsxs)(k,{className:"".concat("Inactive"!==e.status&&d.active),style:{width:160},align:"center",children:["\u2022 ",e.status]}),Object(j.jsx)(k,{align:"center",children:Object(j.jsx)(W.a,{format:"DD-MM-YYYY hh:mm a",children:e.created_at})}),Object(j.jsx)(k,{align:"center",children:Object(j.jsx)(W.a,{format:"DD-MM-YYYY hh:mm a",children:e.updated_at})})]},e.name)})),w>0&&Object(j.jsx)(P,{style:{height:53*w},children:Object(j.jsx)(k,{colSpan:6})})]}),Object(j.jsx)(E.a,{children:Object(j.jsx)(C.a,{children:Object(j.jsx)(_.a,{shape:"rounded",rowsPerPageOptions:[5,10],colSpan:3,count:a,rowsPerPage:n,page:b,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){O(t),R()},onChangeRowsPerPage:function(e){c(parseInt(e.target.value,10)),O(0),R()},ActionsComponent:B})})})]})})})),K=a(102),Q=a.n(K),V=a(219),X=a(17),Z=a(211),$=Object(o.a)((function(e){var t;return{wrapper:Object(O.a)({margin:"3rem"},e.breakpoints.up("sm"),{margin:"15px",marginTop:"4rem"}),headerWrapper:(t={display:"flex"},Object(O.a)(t,e.breakpoints.up("sm"),{justifyContent:"space-between"}),Object(O.a)(t,e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),t),inputInput:Object(O.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width")},e.breakpoints.up("md"),{width:"20ch"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},search:{position:"relative",borderRadius:e.shape.borderRadius,borderColor:e.palette.common.black,backgroundColor:Object(X.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(X.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},searchWrapper:Object(O.a)({display:"flex",padding:0,margin:0,width:"100%"},e.breakpoints.down("md"),{width:"100%"})}})),ee=Object(L.b)((function(e){return{users:e.users,totalUsers:e.users.totalUsers,rowsPerPage:e.users.rowsPerPage}}),(function(e){return console.log("in the component"),{getUsersStartsAction:function(){return e({type:F.FETCH_USERS_START})},loadMoreUsersAction:function(t){return e(function(e){return{type:F.LOAD_MORE_USERS,payload:e}}(t))},SearchForSpecificUserAction:function(t){return e(function(e){return{type:F.SEARCH_FOR_SPECIFIC_USER,payload:e}}(t))}}}))((function(e){var t=e.getUsersStartsAction,a=e.users,r=e.totalUsers,c=e.rowsPerPage,s=e.loadMoreUsersAction,o=e.SearchForSpecificUserAction,i=$(),l=Object(p.f)();Object(n.useEffect)((function(){t()}),[t]);return Object(j.jsxs)("div",{className:i.wrapper,children:[Object(j.jsxs)("div",{className:i.headerWrapper,children:[Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[Object(j.jsx)(Z.a,{variant:"h5",gutterBottom:!0,children:"Users Directory"}),Object(j.jsx)(Z.a,{variant:"body2",gutterBottom:!0,children:"Lorem ipsum dolor sit amet"}),Object(j.jsx)("div",{className:i.searchWrapper,children:Object(j.jsxs)("div",{className:i.search,style:{border:"2px solid silver"},children:[Object(j.jsx)("div",{className:i.searchIcon,children:Object(j.jsx)(Q.a,{})}),Object(j.jsx)(V.a,{placeholder:"Search By Name\u2026",classes:{root:i.inputRoot,input:i.inputInput},onChange:function(e){o(e.target.value)},inputProps:{"aria-label":"search"}})]})})]}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"flex-end"},children:[" ",Object(j.jsxs)(Z.a,{varianr:"h6",children:[" ","Showing ",c," of ",r," "]})," "]})]}),a.users.length>0?Object(j.jsx)(J,{data:a.users,totalData:r,onMoreDataRequired:function(e){s(e)},handleOnRowClick:function(e){l.push({pathname:"/".concat(e.id),state:{row:e}})},titles:["#","Name","Email Address","Gender","Status","Created Date","Updated Date"],currentPage:"users"}):Object(j.jsx)("div",{children:" No Users Yet "})]})})),te=a(220),ae=a(213),ne=a(212),re=Object(o.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),ce=function(e){var t=e.isLoading,a=re();return Object(j.jsxs)("div",{children:[Object(j.jsx)(ne.a,{variant:"outlined",color:"primary",children:"Show backdrop"}),Object(j.jsx)(te.a,{className:a.backdrop,open:t,children:Object(j.jsx)(ae.a,{color:"inherit"})})]})},se={GET_POSTS_STARTS:"GET_POSTS_STARTS",GET_POSTS_SUCCESS:"GET_POSTS_SUCCESS",GET_POSTS_FAILURE:"GET_POSTS_FAILURE",IS_LOADING:"IS_LOADING"},oe=function(){return{type:se.IS_LOADING}},ie=a(214),le=a(221),de=Object(o.a)((function(e){return{title:Object(O.a)({fontSize:18,fontWeight:"bold"},e.breakpoints.down("md"),{fontSize:"14px"}),pos:{marginBottom:12},avatar:Object(O.a)({width:"90px",height:"90px"},e.breakpoints.down("md"),{width:"50px",height:"50px"}),emailWrapper:Object(O.a)({fontSize:16},e.breakpoints.down("md"),{fontSize:"14px"}),greenColor:{color:"green"},statusWrapper:Object(O.a)({fontSize:"16px",display:"flex"},e.breakpoints.down("md"),{fontSize:"12px"})}})),pe=function(e){var t=e.user,a=de();return Object(j.jsx)("div",{children:Object(j.jsxs)(ie.a,{style:{display:"flex",justifyContent:"left",alignItems:"center",padding:"16px 0"},children:[Object(j.jsx)(le.a,{src:"/broken-image.jpg",display:"inline",className:a.avatar}),Object(j.jsxs)("span",{style:{display:"flex",flexDirection:"column",alignItems:"left",marginLeft:"15px"},children:[Object(j.jsx)(Z.a,{className:a.title,variant:"h4",gutterBottom:!0,style:{display:"flex"},children:t.name}),Object(j.jsx)(Z.a,{variant:"h5",display:"inline",className:a.emailWrapper,component:"h2",color:"secondary",children:t.email}),Object(j.jsxs)(Z.a,{variant:"h5",display:"inline",className:"".concat(a.statusWrapper," ").concat("Active"===t.status&&a.greenColor),component:"h2",color:"secondary",children:["\u2022 ",t.status]})]})]})})},je=Object(o.a)((function(e){return{infoWrapper:Object(O.a)({display:"flex",width:"50%",justifyContent:"space-between",margin:"1rem",marginBottom:"5rem"},e.breakpoints.down("md"),{display:"flex",flexDirection:"column"}),textWrapper:Object(O.a)({display:"flex",justifyContent:"left"},e.breakpoints.down("md"),{fontSize:"15px"}),TitleWrapper:Object(O.a)({fontWeight:"bold",display:"flex",justifyContent:"left"},e.breakpoints.down("md"),{fontSize:"16px"})}})),ue=Object(L.b)((function(e){return{posts:e.posts.posts}}),(function(e){return{getPostsStartsAction:function(t){return e(function(e){return{type:se.GET_POSTS_STARTS,payload:e}}(t))}}}))((function(e){var t=e.getPostsStartsAction,a=e.posts,r=e.location,c=je(),s=Object(p.g)().userId,o=r.state.row;Object(n.useEffect)((function(){t(s)}),[s,t]);var i=Object(p.f)();return console.log("posts: ",a.length),Object(j.jsxs)("div",{style:{margin:"3rem"},children:[Object(j.jsxs)("button",{style:{color:"#8f9192",borderRadius:"5px",padding:"3px 13px",display:"flex",alignItems:"center",border:"none",cursor:"pointer",backgroundColor:"whitesmoke"},onClick:function(){return i.push("/")},children:["Back"," ",Object(j.jsxs)(Z.a,{variant:"h5",display:"inline",children:[" ","\u2baa"," "]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:{margin:"1rem"},children:Object(j.jsx)(pe,{user:o})}),Object(j.jsxs)("div",{className:c.infoWrapper,children:[Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"1rem 0"},children:[Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"Total"}),Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"No. of Posts"}),Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,children:a.length})]}),Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"1rem 0"},children:[Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"Current Page"}),Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"No. of Posts"}),Object(j.jsx)(Z.a,{variant:"h5",style:{color:"#521010"},className:c.textWrapper,children:a.length})]}),Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"1rem 0"},children:[Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"User"}),Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"Creation Date"}),Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,style:{color:"secondary"},children:Object(j.jsx)(W.a,{format:"DD-MM-YYYY",style:{color:"#8f9192"},children:o.created_at})})]}),Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",margin:"1rem 0"},children:[Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"Current Page"}),Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,color:"secondary",children:"No. of Posts"}),Object(j.jsx)(Z.a,{variant:"h5",className:c.textWrapper,style:{color:"#521010"},children:Object(j.jsx)(W.a,{format:"DD-MM-YYYY",style:{color:"#8f9192"},children:o.updated_at})})]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{style:{marginTop:"3rem"},children:[Object(j.jsxs)(Z.a,{variant:"h6",className:c.TitleWrapper,children:[" ","User Posts"," "]}),Object(j.jsxs)(Z.a,{variant:"caption",className:c.textWrapper,color:"secondary",children:[" ","Lorem idgdgjdgkg"," "]})]}),Object(j.jsx)("div",{children:a.length>0?Object(j.jsx)(J,{data:a,totalData:a.length,onMoreDataRequired:function(){console.log("More Posts Are Required")},handleOnRowClick:function(e){console.log("supposed to get comments"),i.push({pathname:"/".concat(o.id,"/").concat(e.id),state:{row:e,user:o}})},titles:["Post Id","Post Title","Body"],currentPage:"posts"}):Object(j.jsx)("p",{children:" This User didn't post yet? "})})]})})),be={FETCH_COMMENTS_STATRS:"FETCH_COMMENTS_STARTS",FETCH_COMMENTS_SUCCESS:"FETCH_COMMENTS_SUCCESS",FETCH_COMMENTS_FAILURE:"FETCH_COMMENTS_FAILYRE"},Oe=a(215),he=a(216),xe=a.p+"static/media/card-image.11b5e034.jpg",me=Object(o.a)((function(e){return{root:{width:"100%",backgroundColor:"whitesmoke",padding:"1rem"},mediaWrapper:Object(O.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column"}),media:Object(O.a)({height:200,width:280,display:"flex"},e.breakpoints.down("md"),{height:200,width:"100%"}),TitleWrapper:Object(O.a)({textAlign:"left",fontWeight:"bold",fontSize:"16px",margin:0},e.breakpoints.down("md"),{fontSize:"14px"}),textWrapper:Object(O.a)({display:"flex",justifyContent:"flex-start",marginBottom:"1rem"},e.breakpoints.down("md"),{fontSize:"14px"}),bodyWrapper:{display:"flex",justifyContent:"center",alignItems:"center"},bodyContent:{fontSize:"17px"}}})),fe=function(e){var t=e.post,a=me();return console.log("post: ",t),Object(j.jsx)(Oe.a,{className:a.root,children:Object(j.jsxs)("div",{className:a.mediaWrapper,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:a.TitleWrapper,children:t.title}),Object(j.jsxs)(Z.a,{color:"secondary",className:a.textWrapper,children:[Object(j.jsx)(W.a,{format:" D MMMM ",children:t.updated_at}),Object(j.jsx)("p",{style:{margin:"0 0.25rem"},children:" At "})," ",Object(j.jsx)(W.a,{format:" HH:MM ",children:t.updated_at})]}),Object(j.jsx)(he.a,{className:a.media,image:xe,title:"Contemplative Reptile"})]}),Object(j.jsx)("div",{className:a.bodyWrapper,style:{width:"100%"},children:Object(j.jsx)(Z.a,{variant:"body2",color:"textSecondary",className:a.bodyContent,component:"p",children:t.body})})]})})},ge=Object(o.a)((function(e){return{titleWrapper:{fontSize:"16px",fontWeight:"bold",display:"flex",marginTop:"1.5rem"},textWrapper:{fontSize:"16px",color:"#8f9192",display:"flex"}}})),Se=Object(L.b)((function(e){return{comments:e.comments.comments}}),(function(e){return{fetchCommentsStartsAction:function(t){return e(function(e){return{type:be.FETCH_COMMENTS_STATRS,payload:e}}(t))}}}))((function(e){var t=e.location,a=e.fetchCommentsStartsAction,r=e.comments,c=Object(p.g)().postId,s=ge(),o=Object(p.f)();Object(n.useEffect)((function(){a(c)}),[c,a]);return Object(j.jsxs)("div",{style:{margin:"3rem"},children:[Object(j.jsxs)("button",{style:{color:"#8f9192",borderRadius:"5px",padding:"3px 13px",display:"flex",alignItems:"center",border:"none",cursor:"pointer",backgroundColor:"whitesmoke"},onClick:function(){return o.push({pathname:"/".concat(c),state:{row:t.state.user}})},children:["Back"," ",Object(j.jsxs)(Z.a,{variant:"h5",display:"inline",children:[" ","\u2baa"," "]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(pe,{user:t.state.user}),Object(j.jsx)(fe,{post:t.state.row}),Object(j.jsxs)("div",{children:[Object(j.jsx)(Z.a,{className:s.titleWrapper,children:"Comments"}),Object(j.jsx)(Z.a,{className:s.textWrapper,children:"djhgjkdghjkd ddjgkldsg dgd g"})]}),Object(j.jsx)(J,{data:r,totalData:r.length,onMoreDataRequired:function(){console.log("there is no more data")},handleOnRowClick:function(){console.log("we are supposed to do nothing")},titles:["#","Name","Email Address","Body","Created Date","Updated Date"],currentPage:"comments"})]})}));var ye=Object(L.b)((function(e){return{isLoading:e.users.isLoading}}))((function(e){var t=e.isLoading;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(ce,{isLoading:t}),Object(j.jsx)(b,{}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/:userId/:postId",exact:!0,component:Se}),Object(j.jsx)(p.a,{path:"/:userId",exact:!0,component:ue}),Object(j.jsx)(p.a,{path:"/",exact:!0,component:ee})]})]})})),ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,223)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},Ee=a(217),_e=a(104),Ce=Object(_e.a)({palette:{common:{black:"#000",white:"#fff"},background:{paper:"#fff",default:"#fafafa"},primary:{light:"#c2c3bf",main:"#f6f6f6",dark:"#646562",contrastText:"#fff"},secondary:{main:"#8f9192"}}}),Te=a(44),we=a(103),Re=a.n(we),ke=a(21),Pe={comments:[]},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.FETCH_COMMENTS_SUCCESS:return Object(ke.a)(Object(ke.a)({},e),{},{comments:t.payload});default:return e}},Ne={posts:[],isPostsLoading:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.GET_POSTS_SUCCESS:return Object(ke.a)(Object(ke.a)({},e),{},{posts:t.payload});case se.IS_LOADING:return Object(ke.a)(Object(ke.a)({},e),{},{isPostsLoading:!e.isPostsLoading});default:return e}},Me=a(84),Ie={users:[],totalUsers:0,isLoading:!1,rowsPerPage:5},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.FETCH_USERS_SUCCESS:return Object(ke.a)(Object(ke.a)({},e),{},{users:t.payload});case F.SET_TOTAL_USERS:return Object(ke.a)(Object(ke.a)({},e),{},{totalUsers:t.payload});case F.SET_IS_LOADING:return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:!e.isLoading});case F.SET_ROWS_PERPAGE:return Object(ke.a)(Object(ke.a)({},e),{},{rowsPerPage:t.payload});case F.LOAD_MORE_USERS_SUCCESS:return Object(ke.a)(Object(ke.a)({},e),{},{users:[].concat(Object(Me.a)(e.users),Object(Me.a)(t.payload))});default:return e}},We=Object(Te.b)({users:De,posts:Ue,comments:Ae}),Le=a(106),Fe=a(15),He=a.n(Fe),Ye=a(14),Ge=a(38),ze=a.n(Ge),Be=He.a.mark(Xe),qe=He.a.mark(Ze),Je=He.a.mark($e),Ke=He.a.mark(et),Qe=He.a.mark(tt),Ve=He.a.mark(at);function Xe(){var e;return He.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,console.log("Im here");case 3:return t.next=5,Object(Ye.c)(G());case 5:return t.next=7,ze.a.get("https://gorest.co.in/public-api/users");case 7:return e=t.sent,t.next=10,Object(Ye.c)(H(e.data.data));case 10:return t.next=12,Object(Ye.c)(Y(e.data.meta.pagination.total));case 12:return t.next=14,Object(Ye.c)(G());case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log("err: ",t.t0);case 19:case"end":return t.stop()}}),Be,null,[[0,16]])}function Ze(){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)(F.FETCH_USERS_START,Xe);case 2:case"end":return e.stop()}}),qe)}function $e(e){var t,a;return He.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Ye.c)(G());case 2:return n.prev=2,t=e.payload,n.next=6,ze.a.get("https://gorest.co.in/public-api/users?page=".concat(t));case 6:return a=n.sent,n.next=9,Object(Ye.c)((r=a.data.data,{type:F.LOAD_MORE_USERS_SUCCESS,payload:r}));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),console.log("err: ",n.t0);case 14:return n.next=16,Object(Ye.c)(G());case 16:case"end":return n.stop()}var r}),Je,null,[[2,11]])}function et(){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)(F.LOAD_MORE_USERS,$e);case 2:case"end":return e.stop()}}),Ke)}function tt(e){var t;return He.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Ye.c)(G());case 2:return a.prev=2,a.next=5,ze.a.get("https://gorest.co.in/public-api/users?name=".concat(e.payload));case 5:return t=a.sent,a.next=8,Object(Ye.c)(H(t.data.data));case 8:return a.next=10,Object(Ye.c)(Y(t.data.meta.pagination.total));case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),console.log("err: ",a.t0);case 15:return a.next=17,Object(Ye.c)(G());case 17:case"end":return a.stop()}}),Qe,null,[[2,12]])}function at(){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.e)(F.SEARCH_FOR_SPECIFIC_USER,tt);case 2:case"end":return e.stop()}}),Ve)}var nt=He.a.mark(ct),rt=He.a.mark(st);function ct(e){var t;return He.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Ye.c)(oe());case 2:return a.prev=2,console.log("checking pyaload: ",e.payload),a.next=6,ze.a.get("https://gorest.co.in/public-api/posts?user_id=".concat(e.payload));case 6:return t=a.sent,a.next=9,Object(Ye.c)((n=t.data.data,{type:se.GET_POSTS_SUCCESS,payload:n}));case 9:console.log("resss: ",t.data.data),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(2),console.log("err from here: ",a.t0);case 15:return a.next=17,Object(Ye.c)(oe());case 17:case"end":return a.stop()}var n}),nt,null,[[2,12]])}function st(){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)(se.GET_POSTS_STARTS,ct);case 2:case"end":return e.stop()}}),rt)}var ot=a(55),it=He.a.mark(dt),lt=He.a.mark(pt);function dt(e){var t;return He.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,console.log("a: ",e.payload);case 3:return a.next=5,ze.a.get("https://gorest.co.in/public-api/comments?post_id=".concat(e.payload));case 5:return t=a.sent,console.log("comments: ",t.data.data),a.next=9,Object(ot.c)((n=t.data.data,{type:be.FETCH_COMMENTS_SUCCESS,payload:n}));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),console.log("err: ",a.t0);case 14:case"end":return a.stop()}var n}),it,null,[[0,11]])}function pt(){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ot.d)(be.FETCH_COMMENTS_STATRS,dt);case 2:case"end":return e.stop()}}),lt)}var jt=He.a.mark(ut);function ut(){return He.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.a)([Object(Ye.b)(Ze),Object(Ye.b)(et),Object(Ye.b)(st),Object(Ye.b)(pt),Object(Ye.b)(at)]);case 2:case"end":return e.stop()}}),jt)}var bt=Object(Le.a)(),Ot=[Re.a,bt],ht=Object(Te.d)(We,Te.a.apply(void 0,Ot));bt.run(ut);var xt=ht,mt=a(40);s.a.render(Object(j.jsx)(mt.a,{children:Object(j.jsx)(L.a,{store:xt,children:Object(j.jsx)(Ee.a,{theme:Ce,children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(ye,{})})})})}),document.getElementById("root")),ve()}},[[154,1,2]]]);
//# sourceMappingURL=main.00b21538.chunk.js.map