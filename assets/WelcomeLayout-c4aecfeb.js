import{c as E,j as i,G as y,a as f,d as L}from"./index-420191c7.js";import{bx as r,bE as S,bP as M,bQ as k,bw as T,bB as X}from"./vendor-7927c036.js";const j=(t,e)=>{const[s,a]=r.useState(""),x=r.useRef(-1),m=r.useRef(-1),d=n=>{var c;(c=e==null?void 0:e.onTouchStart)==null||c.call(e,n),x.current=n.touches[0].clientX,m.current=n.touches[0].clientY},o=n=>{var u;(u=e==null?void 0:e.onTouchMove)==null||u.call(e,n);const c=n.touches[0].clientX,l=n.touches[0].clientY,h=c-x.current,v=l-m.current;Math.abs(h)>Math.abs(v)?Math.abs(h)<3?a(""):h>0?a("right"):a("left"):Math.abs(v)<3?a(""):v>0?a("down"):a("up")},p=n=>{var c;(c=e==null?void 0:e.onTouchEnd)==null||c.call(e,n),a("")};return r.useEffect(()=>{if(t.current)return t.current.addEventListener("touchstart",d),t.current.addEventListener("touchmove",o),t.current.addEventListener("touchend",p),()=>{t.current&&(t.current.removeEventListener("touchmove",o),t.current.removeEventListener("touchstart",d),t.current.removeEventListener("touchend",p))}},[]),{direction:s}},b={"/welcome/1":"/welcome/2","/welcome/2":"/welcome/3","/welcome/3":"/welcome/4","/welcome/4":"/home"},C={"/welcome/2":"/welcome/1","/welcome/3":"/welcome/2","/welcome/4":"/welcome/3"},R=r.memo(()=>{const t=r.useRef(!1),e=r.useRef({}),s=S(),a=M();e.current[s.pathname]=a;const[x,m]=r.useState({position:"relative"}),d=r.useRef(null),{direction:o}=j(d),p=r.useRef({}),n=r.useMemo(()=>{const u=o==="right"?-100:100,w=s.pathname==="/welcome/1"&&o==="";return p.current={from:{opacity:w?1:0,transform:`translateX(${w?0:u}%)`},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:`translateX(${-u/2}%)`},config:{duration:350},onStart:()=>m({position:"absolute"}),onRest:()=>{t.current=!1,m({position:"relative"})}},p.current},[o,s.pathname]),c=k(s.pathname,{...n}),l=T();r.useEffect(()=>{if(o==="left"){if(t.current)return;t.current=!0,l(b[s.pathname],{replace:!0})}if(o==="right"){if(t.current||s.pathname==="/welcome/1")return;t.current=!0,l(C[s.pathname],{replace:!0})}},[o,s.pathname,b]);const{setHasReadWelcomes:h}=E(),v=r.useCallback(()=>{h(!0),l("/home")},[h,l]);return i(y,{children:f("div",{"h-screen":"",flex:"","flex-col":"","items-stretch":"",children:[f("header",{"shrink-0":"","mb-32px":"",children:[i("p",{"align-revert":"",flex:"","justify-end":"","p-32px":"",children:i("span",{fixed:"","top-16px":"","right-16px":"","text-24px":"",onClick:v,children:"跳过"})}),f("div",{"text-center":"",children:[i(L,{name:"logo",className:"w-40px h-40px"}),i("h1",{text:"#f3f3f3",children:"橙子记账"})]})]}),i("main",{"shrink-1":"","grow-1":"",relative:"","w-full":"","overflow-hidden":"",ref:d,children:c((u,w)=>i(X.div,{style:{...u,...x},flex:"","justify-center":"","items-center":"",w:"100%",h:"100%",children:e.current[w]},w))})]})})});export{R as default};