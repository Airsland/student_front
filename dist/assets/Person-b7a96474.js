/* empty css             *//* empty css                  */import{r as V}from"./request-b7977999.js";/* empty css              *//* empty css              *//* empty css                  *//* empty css               */import{l as b,o as c,c as g,a as w,b as e,w as a,C as x,j as E,y as n,I as Y,m as U,B as y,F as k,G as B,H as D,n as M}from"./index-ee5ec25e.js";const v={class:"card",style:{width:"50%",padding:"40px",margin:"auto"}},j={__name:"Person",setup(I){const o=b({form:JSON.parse(localStorage.getItem("student-user")||"{}")}),s=()=>{V.put("/student/update",o.form).then(d=>{d.code==="200"?(n.success("操作成功"),Y.push("/login")):n.error(d.msg)})};return(d,l)=>{const r=U,m=y,u=k,p=B,f=D,i=M,_=x;return c(),g("div",null,[w("div",v,[e(_,{model:o.form,ref:"formRef","label-width":"100px","label-position":"right",style:{"padding-right":"40px"}},{default:a(()=>[e(m,{label:"学生账号",prop:"username"},{default:a(()=>[e(r,{modelValue:o.form.username,"onUpdate:modelValue":l[0]||(l[0]=t=>o.form.username=t),autocomplete:"off",disabled:""},null,8,["modelValue"])]),_:1}),e(m,{label:"学生密码",prop:"password"},{default:a(()=>[e(r,{"show-password":"",modelValue:o.form.password,"onUpdate:modelValue":l[1]||(l[1]=t=>o.form.password=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(m,{label:"学生名称"},{default:a(()=>[e(r,{modelValue:o.form.name,"onUpdate:modelValue":l[2]||(l[2]=t=>o.form.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(m,{label:"手机号"},{default:a(()=>[e(r,{modelValue:o.form.phone,"onUpdate:modelValue":l[3]||(l[3]=t=>o.form.phone=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(m,{label:"邮箱"},{default:a(()=>[e(r,{modelValue:o.form.email,"onUpdate:modelValue":l[4]||(l[4]=t=>o.form.email=t),autocomplete:"off"},null,8,["modelValue"])]),_:1}),e(m,{label:"性别"},{default:a(()=>[e(p,{modelValue:o.form.sex,"onUpdate:modelValue":l[5]||(l[5]=t=>o.form.sex=t)},{default:a(()=>[e(u,{label:"男"}),e(u,{label:"女"})]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"生日"},{default:a(()=>[e(f,{style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",modelValue:o.form.birth,"onUpdate:modelValue":l[6]||(l[6]=t=>o.form.birth=t)},null,8,["modelValue"])]),_:1}),e(m,null,{default:a(()=>[e(i,{type:"primary",onClick:s},{default:a(()=>[E("保 存")]),_:1})]),_:1})]),_:1},8,["model"])])])}}};export{j as default};
