import"//at.alicdn.com/t/c/font_4767179_z4de8w8qiqi.js";import{d,c as o,$ as c,a5 as i,a2 as u,u as n,a8 as m,a3 as g,ac as h}from"./common-9e5ab70c.js";import{_ as x}from"./plugin-vueexport-helper-c27b6911.js";const y=["xlink:href"],k={key:0,d:"M10,10 A7,7 0 0,1 17,12",fill:"none",stroke:"#D97706","stroke-width":"5",class:"loading"},z=d({__name:"Icon",props:{name:{},class:{default:""},loading:{type:Boolean,default:!1},gap:{type:Boolean,default:!1},left:{default:0},right:{default:0},size:{default:void 0},action:{type:Boolean,default:!1}},setup(r){const e=r,p=o(()=>`#icon-${e.name}`),_=o(()=>({icon:!0,gap:e.gap,[e.class]:!0,action_icon:e.action})),f=o(()=>{var a,s,l;const t={};return e.left&&(t.marginLeft=`${(a=String(e.left))==null?void 0:a.replace("px","")}px`),e.right&&(t.marginRight=`${(s=String(e.right))==null?void 0:s.replace("px","")}px`),e.size&&(t.fontSize=`${(l=String(e.size))==null?void 0:l.replace("px","")}px`),t});return(t,a)=>(c(),i("svg",{class:g(n(_)),style:h(n(f)),"aria-hidden":"true"},[u("use",{"xlink:href":n(p)},null,8,y),e.loading?(c(),i("path",k)):m("",!0)],6))}});const $=x(z,[["__scopeId","data-v-115211fe"]]);export{$ as _};
