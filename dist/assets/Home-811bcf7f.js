/* empty css             */import"./request-b7977999.js";import{o as r,c as d,a as e,j as o,t as u,d as c,b as p,k as _}from"./index-ee5ec25e.js";const i={class:"card",style:{"line-height":"30px"}},m={style:{color:"dodgerblue"}},g={data(){return{value:new Date}}},N=Object.assign(g,{__name:"Home",setup(v){const s=JSON.parse(localStorage.getItem("student-user")||"{}");return(a,t)=>{const l=_;return r(),d("div",null,[e("div",i,[e("div",null,[o("欢迎"),e("span",m,u(c(s).name),1),o("登录教务系统")]),p(l,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n)},null,8,["modelValue"])])])}}});export{N as default};
