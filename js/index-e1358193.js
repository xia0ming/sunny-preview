import{a as h}from"./index-c01b62ef.js";import{d as m,b as k,$ as s,a5 as _,F as B,a7 as S,u as n,a3 as N,a6 as x,i as T,v as o,a1 as p,a0 as u,a8 as d,J as C}from"./common-9e5ab70c.js";import{_ as v}from"./plugin-vueexport-helper-c27b6911.js";import{_ as L}from"./Icon-b029ef25.js";import{S as V,i as A,I as D,B as O,j as U}from"./ant-design-vue-17541eab.js";import"./vue-router-8fffca14.js";import"//at.alicdn.com/t/c/font_4767179_z4de8w8qiqi.js";const j={class:"tags"},E=m({__name:"Tags",setup(b){const{t:e}=h(),a=k([{label:e("main.official"),class:"yellow"},{label:e("main.noReposting"),class:"pink"},{label:e("main.diy"),class:"green"},{label:e("main.cnAudio"),class:"purple"},{label:e("main.hdr"),class:"pink"},{label:e("main.finished"),class:"gray"},{label:e("main.episodes"),class:"green"},{label:e("main.dolbyVision"),class:"pink"},{label:e("main.specialEffects"),class:"yellow"}]);return(t,f)=>(s(),_("div",j,[(s(!0),_(B,null,S(n(a),i=>(s(),_("div",{key:i.label,class:N(["tag hover_y2",i.class||"gray"])},x(i.label),3))),128))]))}});const F=v(E,[["__scopeId","data-v-d9113816"]]),R={class:"search"},W=m({__name:"Search",setup(b){const e=T("isLessAction"),{t:a}=h(),t=k({scope:"title",keywords:"",relation:"and"}),f=[{label:a("main.title"),value:"title"},{label:a("main.mainTitle"),value:"main_title"},{label:a("main.publisher"),value:"publisher"},{label:a("main.IMDBLink"),value:"imdb"},{label:a("main.doubanID"),value:"douban"}],i=[{label:a("main.and"),value:"and"},{label:a("main.or"),value:"or"},{label:a("main.part"),value:"part"},{label:a("main.exact"),value:"exact"},{label:a("main.endsWith"),value:"endsWith"}];return(r,l)=>{const y=A,w=D,I=L,g=O,$=U;return s(),_("div",R,[o($,{compact:""},{default:p(()=>[n(e)?d("",!0):(s(),u(y,{key:0,value:n(t).scope,"onUpdate:value":l[0]||(l[0]=c=>n(t).scope=c),options:f,"get-popup-container":r.$parNode,"dropdown-match-select-width":!1},null,8,["value","get-popup-container"])),o(w,{value:n(t).keywords,"onUpdate:value":l[1]||(l[1]=c=>n(t).keywords=c)},null,8,["value"]),n(e)?d("",!0):(s(),u(y,{key:1,value:n(t).relation,"onUpdate:value":l[2]||(l[2]=c=>n(t).relation=c),options:i,"get-popup-container":r.$parNode,"dropdown-match-select-width":!1},null,8,["value","get-popup-container"])),n(e)?d("",!0):(s(),u(g,{key:2,class:"search_box"},{default:p(()=>[C(x(r.$t("main.searchBox"))+" ",1),o(I,{class:"arrow",name:"arrow_down_thin"})]),_:1})),o(g,{type:"primary"},{default:p(()=>[o(n(V))]),_:1})]),_:1})])}}});const z=v(W,[["__scopeId","data-v-ada3b1e2"]]),J={class:"actions"},M=m({__name:"index",setup(b){return(e,a)=>(s(),_("div",J,[o(F),o(z)]))}});const Y=v(M,[["__scopeId","data-v-8a6a96d8"]]);export{Y as default};
