/* empty css             *//* empty css                *//* empty css               */import{_ as k,u as w,r as d,o as a,c as I,a as o,b as e,w as t,d as c,E as S,e as r,f as p,p as N,g as E,h as M,i as B}from"./index-95a72e1c.js";const n=_=>(N("data-v-a8d7db21"),_=_(),E(),_),D=n(()=>o("div",{style:{height:"60px","background-color":"#282c35",display:"flex","align-items":"center","border-bottom":"0px solid #ddd"}},[o("div",{style:{flex:"1"}},[o("div",{style:{"padding-left":"20px",display:"flex","align-items":"center"}},[o("div",{style:{"font-weight":"bold","font-size":"24px","margin-left":"5px",color:"white"}},"教务系统")])])],-1)),U={style:{display:"flex"}},C={style:{width:"200px","border-right":"0px solid #ddd","min-height":"calc(100vh - 60px)","background-color":"#333744"}},F=n(()=>o("span",null,"系统首页",-1)),T=n(()=>o("span",null,"课程信息",-1)),A=n(()=>o("span",null,"选择课程",-1)),V=n(()=>o("span",null,"选课信息",-1)),H=n(()=>o("span",null,"成绩信息",-1)),z=n(()=>o("span",null,"用户信息",-1)),J=n(()=>o("span",null,"个人资料",-1)),L=n(()=>o("span",null,"退出系统",-1)),O={style:{flex:"1",width:"0","background-color":"#f8f8ff",padding:"10px"}},R={__name:"Manager",setup(_){const f=w(),u=JSON.parse(localStorage.getItem("student-user")||"{}"),m=()=>{localStorage.removeItem("student-user")};return($,j)=>{const h=d("HomeFilled"),l=M,s=B,i=d("Document"),x=d("UserFilled"),g=d("User"),v=d("SwitchButton"),y=S,b=d("router-view");return a(),I("div",null,[D,o("div",U,[o("div",C,[e(y,{router:"",style:{border:"none"},"default-active":c(f).path,"default-openeds":["/home","2","3"],"background-color":"#333744","text-color":"#fff","active-text-color":"#11A983"},{default:t(()=>[e(s,{index:"/home"},{default:t(()=>[e(l,null,{default:t(()=>[e(h)]),_:1}),F]),_:1}),c(u).role==="ADMIN"?(a(),r(s,{key:0,index:"/course"},{default:t(()=>[e(l,null,{default:t(()=>[e(i)]),_:1}),T]),_:1})):p("",!0),c(u).role==="STUDENT"?(a(),r(s,{key:1,index:"/courseList"},{default:t(()=>[e(l,null,{default:t(()=>[e(i)]),_:1}),A]),_:1})):p("",!0),e(s,{index:"/studentCourse"},{default:t(()=>[e(l,null,{default:t(()=>[e(i)]),_:1}),V]),_:1}),e(s,{index:"/grade"},{default:t(()=>[e(l,null,{default:t(()=>[e(i)]),_:1}),H]),_:1}),c(u).role==="ADMIN"?(a(),r(s,{key:2,index:"/student"},{default:t(()=>[e(l,null,{default:t(()=>[e(x)]),_:1}),z]),_:1})):p("",!0),c(u).role==="STUDENT"?(a(),r(s,{key:3,index:"/person"},{default:t(()=>[e(l,null,{default:t(()=>[e(g)]),_:1}),J]),_:1})):p("",!0),e(s,{index:"login",onClick:m},{default:t(()=>[e(l,null,{default:t(()=>[e(v)]),_:1}),L]),_:1})]),_:1},8,["default-active"])]),o("div",O,[e(b)])])])}}},Q=k(R,[["__scopeId","data-v-a8d7db21"]]);export{Q as default};
