(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{2394:function(e,t,n){Promise.resolve().then(n.bind(n,4364))},4364:function(e,t,n){"use strict";n.r(t);var r=n(7437),a=n(8853),i=n.n(a),o=n(2265),s=n(3383),l=n(6160),u=n(2179),c=n(3226),d=n(1975),m=n(5551),p=n(3584);t.default=()=>{let e="".concat(l.J,"/admin"),[t,n]=(0,o.useState)({numeroDocumento:"",email:"",password:"",privateKey:"",secret:""}),a=e=>{let r=e.target.name,a=e.target.value;n({...t,[r]:a})},h=async n=>{n.preventDefault();let r="".concat(e,"/update"),a={...t,numeroDocumento:parseInt(t.numeroDocumento)};await (0,s.iC)(r,a).then(e=>{console.log(e)}).catch(e=>{console.error(e)})};return(0,r.jsxs)(u.Z,{className:i().registerAdminContainer,children:[(0,r.jsx)(c.Z,{className:i().registerTitle,variant:"h4",gutterBottom:!0,children:"Completar registro de administrador"}),(0,r.jsxs)("form",{className:i().registerAdminForm,onSubmit:h,children:[(0,r.jsx)(d.Z,{type:"number",id:"numeroDocumentoId",name:"numeroDocumento",label:"N\xfamero de c\xe9dula",variant:"outlined",value:t.numeroDocumento,onChange:a,required:!0}),(0,r.jsx)(d.Z,{type:"email",id:"emailId",name:"email",label:"e-mail",variant:"outlined",value:t.email,onChange:a,required:!0}),(0,r.jsx)(d.Z,{type:"password",id:"passwordId",name:"password",label:"Contrase\xf1a",variant:"outlined",value:t.password,onChange:a,required:!0}),(0,r.jsx)(d.Z,{type:"password",id:"privateKeyId",name:"privateKey",label:"Private key",variant:"outlined",value:t.privateKey,onChange:a,required:!0}),(0,r.jsx)(d.Z,{type:"password",id:"secretId",name:"secret",label:"Secret",variant:"outlined",value:t.secret,onChange:a,required:!0}),(0,r.jsx)(m.Z,{type:"submit",variant:"outlined",endIcon:(0,r.jsx)(p.Z,{}),children:"Finalizar registro"})]})]})}},6160:function(e,t,n){"use strict";n.d(t,{J:function(){return r}});let r="http://localhost:8080"},3383:function(e,t,n){"use strict";n.d(t,{Kw:function(){return i},Tk:function(){return a},iC:function(){return o}});var r=n(9222);async function a(e,t){let n={};n=t&&t.length>0?{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}:{"Content-Type":"application/json"};try{let t=await r.Z.get(e,n);return t.data}catch(e){return e}}async function i(e,t,n){try{let a={};a=n&&n.length>0?{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}:{"Content-Type":"application/json"};let i=await r.Z.post(e,t,a);return i.data}catch(e){return e}}async function o(e,t,n){let a={};a=n&&n.length>0?{"Content-Type":"application/json",Origin:"http://localhost:3000",Authorization:"Bearer ".concat(n)}:{"Content-Type":"application/json",Origin:"http://localhost:3000"},r.Z.put(e,t,a).then(e=>e.data).catch(e=>e)}},8853:function(e){e.exports={registerAdminContainer:"registerAdmin-styles_registerAdminContainer__vZVIJ",registerTitle:"registerAdmin-styles_registerTitle__P79o9",registerAdminForm:"registerAdmin-styles_registerAdminForm__yzrSy","input-error":"registerAdmin-styles_input-error__MtYpy",shake:"registerAdmin-styles_shake__GJE52"}}},function(e){e.O(0,[750,219,191,927,971,596,744],function(){return e(e.s=2394)}),_N_E=e.O()}]);