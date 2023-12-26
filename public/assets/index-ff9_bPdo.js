(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Jc(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pe={},Sr=[],jt=()=>{},q_=()=>!1,Do=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xc=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},H_=Object.prototype.hasOwnProperty,ce=(t,e)=>H_.call(t,e),K=Array.isArray,Pr=t=>Vo(t)==="[object Map]",ad=t=>Vo(t)==="[object Set]",J=t=>typeof t=="function",Le=t=>typeof t=="string",Jr=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",cd=t=>(Se(t)||J(t))&&J(t.then)&&J(t.catch),ld=Object.prototype.toString,Vo=t=>ld.call(t),z_=t=>Vo(t).slice(8,-1),ud=t=>Vo(t)==="[object Object]",el=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zi=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},K_=/-(\w)/g,Gt=xo(t=>t.replace(K_,(e,n)=>n?n.toUpperCase():"")),W_=/\B([A-Z])/g,Xr=xo(t=>t.replace(W_,"-$1").toLowerCase()),Mo=xo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Sa=xo(t=>t?`on${Mo(t)}`:""),nr=(t,e)=>!Object.is(t,e),Pa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},no=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},G_=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ju;const sc=()=>ju||(ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?X_(r):tl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||Se(t))return t}const Q_=/;(?![^(]*\))/g,Y_=/:([^]+)/,J_=/\/\*[^]*?\*\//g;function X_(t){const e={};return t.replace(J_,"").split(Q_).forEach(n=>{if(n){const r=n.split(Y_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Nn(t){let e="";if(Le(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=Nn(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ey=Jc(Z_);function hd(t){return!!t||t===""}const tt=t=>Le(t)?t:t==null?"":K(t)||Se(t)&&(t.toString===ld||!J(t.toString))?JSON.stringify(t,fd,2):String(t),fd=(t,e)=>e&&e.__v_isRef?fd(t,e.value):Pr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ca(r,i)+" =>"]=s,n),{})}:ad(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ca(n))}:Jr(e)?Ca(e):Se(e)&&!K(e)&&!ud(e)?String(e):e,Ca=(t,e="")=>{var n;return Jr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let _t;class dd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function pd(t){return new dd(t)}function ty(t,e=_t){e&&e.active&&e.effects.push(t)}function gd(){return _t}function ny(t){_t&&_t.cleanups.push(t)}const nl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},md=t=>(t.w&Dn)>0,_d=t=>(t.n&Dn)>0,ry=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},sy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];md(s)&&!_d(s)?s.delete(t):e[n++]=s,s.w&=~Dn,s.n&=~Dn}e.length=n}},ro=new WeakMap;let _s=0,Dn=1;const ic=30;let St;const Xn=Symbol(""),oc=Symbol("");class rl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ty(this,r)}run(){if(!this.active)return this.fn();let e=St,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=St,St=this,Sn=!0,Dn=1<<++_s,_s<=ic?ry(this):qu(this),this.fn()}finally{_s<=ic&&sy(this),Dn=1<<--_s,St=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(qu(this),this.onStop&&this.onStop(),this.active=!1)}}function qu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const yd=[];function Zr(){yd.push(Sn),Sn=!1}function es(){const t=yd.pop();Sn=t===void 0?!0:t}function dt(t,e,n){if(Sn&&St){let r=ro.get(t);r||ro.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=nl()),vd(s)}}function vd(t,e){let n=!1;_s<=ic?_d(t)||(t.n|=Dn,n=!md(t)):n=!t.has(St),n&&(t.add(St),St.deps.push(t))}function sn(t,e,n,r,s,i){const o=ro.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Jr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?el(n)&&a.push(o.get("length")):(a.push(o.get(Xn)),Pr(t)&&a.push(o.get(oc)));break;case"delete":K(t)||(a.push(o.get(Xn)),Pr(t)&&a.push(o.get(oc)));break;case"set":Pr(t)&&a.push(o.get(Xn));break}if(a.length===1)a[0]&&ac(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ac(nl(c))}}function ac(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&Hu(r);for(const r of n)r.computed||Hu(r)}function Hu(t,e){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function iy(t,e){var n;return(n=ro.get(t))==null?void 0:n.get(e)}const oy=Jc("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jr)),zu=ay();function ay(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ae(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zr();const r=ae(this)[e].apply(this,n);return es(),r}}),t}function cy(t){const e=ae(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Id{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Iy:Rd:i?Ad:wd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=K(e);if(!s){if(o&&ce(zu,n))return Reflect.get(zu,n,r);if(n==="hasOwnProperty")return cy}const a=Reflect.get(e,n,r);return(Jr(n)?Ed.has(n):oy(n))||(s||dt(e,"get",n),i)?a:ke(a)?o&&el(n)?a:a.value:Se(a)?s?Pd(a):ci(a):a}}class Td extends Id{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=xr(i);if(!so(r)&&!xr(r)&&(i=ae(i),r=ae(r)),!K(e)&&ke(i)&&!ke(r))return c?!1:(i.value=r,!0)}const o=K(e)&&el(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===ae(s)&&(o?nr(r,i)&&sn(e,"set",n,r):sn(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&sn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jr(n)||!Ed.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",K(e)?"length":Xn),Reflect.ownKeys(e)}}class ly extends Id{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const uy=new Td,hy=new ly,fy=new Td(!0),sl=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function bi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ae(t),i=ae(e);n||(nr(e,i)&&dt(s,"get",e),dt(s,"get",i));const{has:o}=Lo(s),a=r?sl:n?al:Ms;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ki(t,e=!1){const n=this.__v_raw,r=ae(n),s=ae(t);return e||(nr(t,s)&&dt(r,"has",t),dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oi(t,e=!1){return t=t.__v_raw,!e&&dt(ae(t),"iterate",Xn),Reflect.get(t,"size",t)}function Ku(t){t=ae(t);const e=ae(this);return Lo(e).has.call(e,t)||(e.add(t),sn(e,"add",t,t)),this}function Wu(t,e){e=ae(e);const n=ae(this),{has:r,get:s}=Lo(n);let i=r.call(n,t);i||(t=ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?nr(e,o)&&sn(n,"set",t,e):sn(n,"add",t,e),this}function Gu(t){const e=ae(this),{has:n,get:r}=Lo(e);let s=n.call(e,t);s||(t=ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&sn(e,"delete",t,void 0),i}function Qu(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&sn(t,"clear",void 0,void 0),n}function Ni(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ae(o),c=e?sl:t?al:Ms;return!t&&dt(a,"iterate",Xn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Di(t,e,n){return function(...r){const s=this.__v_raw,i=ae(s),o=Pr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?sl:e?al:Ms;return!e&&dt(i,"iterate",c?oc:Xn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dy(){const t={get(i){return bi(this,i)},get size(){return Oi(this)},has:ki,add:Ku,set:Wu,delete:Gu,clear:Qu,forEach:Ni(!1,!1)},e={get(i){return bi(this,i,!1,!0)},get size(){return Oi(this)},has:ki,add:Ku,set:Wu,delete:Gu,clear:Qu,forEach:Ni(!1,!0)},n={get(i){return bi(this,i,!0)},get size(){return Oi(this,!0)},has(i){return ki.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Ni(!0,!1)},r={get(i){return bi(this,i,!0,!0)},get size(){return Oi(this,!0)},has(i){return ki.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Di(i,!1,!1),n[i]=Di(i,!0,!1),e[i]=Di(i,!1,!0),r[i]=Di(i,!0,!0)}),[t,n,e,r]}const[py,gy,my,_y]=dy();function il(t,e){const n=e?t?_y:my:t?gy:py;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const yy={get:il(!1,!1)},vy={get:il(!1,!0)},Ey={get:il(!0,!1)},wd=new WeakMap,Ad=new WeakMap,Rd=new WeakMap,Iy=new WeakMap;function Ty(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ty(z_(t))}function ci(t){return xr(t)?t:ol(t,!1,uy,yy,wd)}function Sd(t){return ol(t,!1,fy,vy,Ad)}function Pd(t){return ol(t,!0,hy,Ey,Rd)}function ol(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function on(t){return xr(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function xr(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function Cd(t){return on(t)||xr(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Fo(t){return no(t,"__v_skip",!0),t}const Ms=t=>Se(t)?ci(t):t,al=t=>Se(t)?Pd(t):t;function bd(t){Sn&&St&&(t=ae(t),vd(t.dep||(t.dep=nl())))}function kd(t,e){t=ae(t);const n=t.dep;n&&ac(n)}function ke(t){return!!(t&&t.__v_isRef===!0)}function yt(t){return Od(t,!1)}function Ay(t){return Od(t,!0)}function Od(t,e){return ke(t)?t:new Ry(t,e)}class Ry{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Ms(e)}get value(){return bd(this),this._value}set value(e){const n=this.__v_isShallow||so(e)||xr(e);e=n?e:ae(e),nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ms(e),kd(this))}}function ct(t){return ke(t)?t.value:t}const Sy={get:(t,e,n)=>ct(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Nd(t){return on(t)?t:new Proxy(t,Sy)}function cl(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=Dd(t,n);return e}class Py{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return iy(ae(this._object),this._key)}}class Cy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function by(t,e,n){return ke(t)?t:J(t)?new Cy(t):Se(t)&&arguments.length>1?Dd(t,e,n):yt(t)}function Dd(t,e,n){const r=t[e];return ke(r)?r:new Py(t,e,n)}class ky{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new rl(e,()=>{this._dirty||(this._dirty=!0,kd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ae(this);return bd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Oy(t,e,n=!1){let r,s;const i=J(t);return i?(r=t,s=jt):(r=t.get,s=t.set),new ky(r,s,i||!s,n)}function Pn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Uo(i,e,n)}return s}function bt(t,e,n,r){if(J(t)){const i=Pn(t,e,n,r);return i&&cd(i)&&i.catch(o=>{Uo(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(bt(t[i],e,n,r));return s}function Uo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Pn(c,null,10,[t,o,a]);return}}Ny(t,n,s,r)}function Ny(t,e,n,r=!0){console.error(t)}let Ls=!1,cc=!1;const nt=[];let Lt=0;const Cr=[];let Zt=null,Kn=0;const Vd=Promise.resolve();let ll=null;function ul(t){const e=ll||Vd;return t?e.then(this?t.bind(this):t):e}function Dy(t){let e=Lt+1,n=nt.length;for(;e<n;){const r=e+n>>>1,s=nt[r],i=Fs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function hl(t){(!nt.length||!nt.includes(t,Ls&&t.allowRecurse?Lt+1:Lt))&&(t.id==null?nt.push(t):nt.splice(Dy(t.id),0,t),xd())}function xd(){!Ls&&!cc&&(cc=!0,ll=Vd.then(Ld))}function Vy(t){const e=nt.indexOf(t);e>Lt&&nt.splice(e,1)}function xy(t){K(t)?Cr.push(...t):(!Zt||!Zt.includes(t,t.allowRecurse?Kn+1:Kn))&&Cr.push(t),xd()}function Yu(t,e,n=Ls?Lt+1:0){for(;n<nt.length;n++){const r=nt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;nt.splice(n,1),n--,r()}}}function Md(t){if(Cr.length){const e=[...new Set(Cr)];if(Cr.length=0,Zt){Zt.push(...e);return}for(Zt=e,Zt.sort((n,r)=>Fs(n)-Fs(r)),Kn=0;Kn<Zt.length;Kn++)Zt[Kn]();Zt=null,Kn=0}}const Fs=t=>t.id==null?1/0:t.id,My=(t,e)=>{const n=Fs(t)-Fs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ld(t){cc=!1,Ls=!0,nt.sort(My);try{for(Lt=0;Lt<nt.length;Lt++){const e=nt[Lt];e&&e.active!==!1&&Pn(e,null,14)}}finally{Lt=0,nt.length=0,Md(),Ls=!1,ll=null,(nt.length||Cr.length)&&Ld()}}function Ly(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Pe;f&&(s=n.map(p=>Le(p)?p.trim():p)),h&&(s=n.map(G_))}let a,c=r[a=Sa(e)]||r[a=Sa(Gt(e))];!c&&i&&(c=r[a=Sa(Xr(e))]),c&&bt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(l,t,6,s)}}function Fd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Fd(l,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Se(t)&&r.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Qe(o,i),Se(t)&&r.set(t,o),o)}function $o(t,e){return!t||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Xr(e))||ce(t,e))}let Ke=null,Bo=null;function io(t){const e=Ke;return Ke=t,Bo=t&&t.type.__scopeId||null,e}function Ud(t){Bo=t}function $d(){Bo=null}function Ft(t,e=Ke,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ah(-1);const i=io(e);let o;try{o=t(...s)}finally{io(i),r._d&&ah(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ba(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:_,inheritAttrs:v}=t;let w,C;const k=io(t);try{if(n.shapeFlag&4){const M=s||r,ee=M;w=Mt(u.call(ee,M,h,i,p,f,_)),C=c}else{const M=e;w=Mt(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),C=e.props?c:Fy(c)}}catch(M){Ss.length=0,Uo(M,t,1),w=Ie(Vn)}let q=w;if(C&&v!==!1){const M=Object.keys(C),{shapeFlag:ee}=q;M.length&&ee&7&&(o&&M.some(Xc)&&(C=Uy(C,o)),q=Lr(q,C))}return n.dirs&&(q=Lr(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),w=q,io(k),w}const Fy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Do(n))&&((e||(e={}))[n]=t[n]);return e},Uy=(t,e)=>{const n={};for(const r in t)(!Xc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $y(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ju(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!$o(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ju(r,o,l):!0:!!o;return!1}function Ju(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$o(n,i))return!0}return!1}function By({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bd="components";function jy(t,e){return Hy(Bd,t,!0,e)||t}const qy=Symbol.for("v-ndc");function Hy(t,e,n=!0,r=!1){const s=Ke||xe;if(s){const i=s.type;if(t===Bd){const a=Lv(i,!1);if(a&&(a===e||a===Gt(e)||a===Mo(Gt(e))))return i}const o=Xu(s[t]||i[t],e)||Xu(s.appContext[t],e);return!o&&r?i:o}}function Xu(t,e){return t&&(t[e]||t[Gt(e)]||t[Mo(Gt(e))])}const zy=t=>t.__isSuspense;function Ky(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):xy(t)}const Vi={};function br(t,e,n){return jd(t,e,n)}function jd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Pe){var a;const c=gd()===((a=xe)==null?void 0:a.scope)?xe:null;let l,u=!1,h=!1;if(ke(t)?(l=()=>t.value,u=so(t)):on(t)?(l=()=>t,r=!0):K(t)?(h=!0,u=t.some(M=>on(M)||so(M)),l=()=>t.map(M=>{if(ke(M))return M.value;if(on(M))return wr(M);if(J(M))return Pn(M,c,2)})):J(t)?e?l=()=>Pn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),bt(t,c,3,[p])}:l=jt,e&&r){const M=l;l=()=>wr(M())}let f,p=M=>{f=k.onStop=()=>{Pn(M,c,4),f=k.onStop=void 0}},_;if(js)if(p=jt,e?n&&bt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const M=$v();_=M.__watcherHandles||(M.__watcherHandles=[])}else return jt;let v=h?new Array(t.length).fill(Vi):Vi;const w=()=>{if(k.active)if(e){const M=k.run();(r||u||(h?M.some((ee,me)=>nr(ee,v[me])):nr(M,v)))&&(f&&f(),bt(e,c,3,[M,v===Vi?void 0:h&&v[0]===Vi?[]:v,p]),v=M)}else k.run()};w.allowRecurse=!!e;let C;s==="sync"?C=w:s==="post"?C=()=>ht(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),C=()=>hl(w));const k=new rl(l,C);e?n?w():v=k.run():s==="post"?ht(k.run.bind(k),c&&c.suspense):k.run();const q=()=>{k.stop(),c&&c.scope&&Zc(c.scope.effects,k)};return _&&_.push(q),q}function Wy(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?qd(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=xe;Fr(this);const a=jd(s,i.bind(r),n);return o?Fr(o):Zn(),a}function qd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function wr(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))wr(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)wr(t[n],e);else if(ad(t)||Pr(t))t.forEach(n=>{wr(n,e)});else if(ud(t))for(const n in t)wr(t[n],e);return t}function qn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Zr(),bt(c,n,8,[t.el,a,t,e]),es())}}/*! #__NO_SIDE_EFFECTS__ */function Hd(t,e){return J(t)?Qe({name:t.name},e,{setup:t}):t}const As=t=>!!t.type.__asyncLoader,zd=t=>t.type.__isKeepAlive;function Gy(t,e){Kd(t,"a",e)}function Qy(t,e){Kd(t,"da",e)}function Kd(t,e,n=xe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(jo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zd(s.parent.vnode)&&Yy(r,e,n,s),s=s.parent}}function Yy(t,e,n,r){const s=jo(e,t,r,!0);Wd(()=>{Zc(r[e],s)},n)}function jo(t,e,n=xe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zr(),Fr(n);const a=bt(e,n,t,o);return Zn(),es(),a});return r?s.unshift(i):s.push(i),i}}const dn=t=>(e,n=xe)=>(!js||t==="sp")&&jo(t,(...r)=>e(...r),n),Jy=dn("bm"),fl=dn("m"),Xy=dn("bu"),Zy=dn("u"),ev=dn("bum"),Wd=dn("um"),tv=dn("sp"),nv=dn("rtg"),rv=dn("rtc");function sv(t,e=xe){jo("ec",t,e)}function Mr(t,e,n,r){let s;const i=n&&n[r];if(K(t)||Le(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Ar(t,e,n={},r,s){if(Ke.isCE||Ke.parent&&As(Ke.parent)&&Ke.parent.isCE)return e!=="default"&&(n.name=e),Ie("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),te();const o=i&&Gd(i(n)),a=ts(Ue,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Gd(t){return t.some(e=>ao(e)?!(e.type===Vn||e.type===Ue&&!Gd(e.children)):!0)?t:null}const lc=t=>t?ip(t)?_l(t)||t.proxy:lc(t.parent):null,Rs=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lc(t.parent),$root:t=>lc(t.root),$emit:t=>t.emit,$options:t=>dl(t),$forceUpdate:t=>t.f||(t.f=()=>hl(t.update)),$nextTick:t=>t.n||(t.n=ul.bind(t.proxy)),$watch:t=>Wy.bind(t)}),ka=(t,e)=>t!==Pe&&!t.__isScriptSetup&&ce(t,e),iv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ka(r,e))return o[e]=1,r[e];if(s!==Pe&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==Pe&&ce(n,e))return o[e]=4,n[e];uc&&(o[e]=0)}}const u=Rs[e];let h,f;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&ce(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ce(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ka(s,e)?(s[e]=n,!0):r!==Pe&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Pe&&ce(t,o)||ka(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Rs,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ov(){return av().slots}function av(){const t=Dv();return t.setupContext||(t.setupContext=ap(t))}function Zu(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uc=!0;function cv(t){const e=dl(t),n=t.proxy,r=t.ctx;uc=!1,e.beforeCreate&&eh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:v,deactivated:w,beforeDestroy:C,beforeUnmount:k,destroyed:q,unmounted:M,render:ee,renderTracked:me,renderTriggered:we,errorCaptured:ne,serverPrefetch:Z,expose:ve,inheritAttrs:Ye,components:gt,directives:Et,filters:jn}=e;if(l&&lv(l,r,null),o)for(const ye in o){const fe=o[ye];J(fe)&&(r[ye]=fe.bind(n))}if(s){const ye=s.call(n,n);Se(ye)&&(t.data=ci(ye))}if(uc=!0,i)for(const ye in i){const fe=i[ye],Jt=J(fe)?fe.bind(n,n):J(fe.get)?fe.get.bind(n,n):jt,gn=!J(fe)&&J(fe.set)?fe.set.bind(n):jt,Dt=He({get:Jt,set:gn});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:ut=>Dt.value=ut})}if(a)for(const ye in a)Qd(a[ye],r,n,ye);if(c){const ye=J(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(fe=>{Ki(fe,ye[fe])})}u&&eh(u,t,"c");function le(ye,fe){K(fe)?fe.forEach(Jt=>ye(Jt.bind(n))):fe&&ye(fe.bind(n))}if(le(Jy,h),le(fl,f),le(Xy,p),le(Zy,_),le(Gy,v),le(Qy,w),le(sv,ne),le(rv,me),le(nv,we),le(ev,k),le(Wd,M),le(tv,Z),K(ve))if(ve.length){const ye=t.exposed||(t.exposed={});ve.forEach(fe=>{Object.defineProperty(ye,fe,{get:()=>n[fe],set:Jt=>n[fe]=Jt})})}else t.exposed||(t.exposed={});ee&&t.render===jt&&(t.render=ee),Ye!=null&&(t.inheritAttrs=Ye),gt&&(t.components=gt),Et&&(t.directives=Et)}function lv(t,e,n=jt){K(t)&&(t=hc(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=qt(s.from||r,s.default,!0):i=qt(s.from||r):i=qt(s),ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function eh(t,e,n){bt(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qd(t,e,n,r){const s=r.includes(".")?qd(n,r):()=>n[r];if(Le(t)){const i=e[t];J(i)&&br(s,i)}else if(J(t))br(s,t.bind(n));else if(Se(t))if(K(t))t.forEach(i=>Qd(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&br(s,i,t)}}function dl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>oo(c,l,o,!0)),oo(c,e,o)),Se(e)&&i.set(e,c),c}function oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oo(t,i,n,!0),s&&s.forEach(o=>oo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uv={data:th,props:nh,emits:nh,methods:ys,computed:ys,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:ys,directives:ys,watch:fv,provide:th,inject:hv};function th(t,e){return e?t?function(){return Qe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function hv(t,e){return ys(hc(t),hc(e))}function hc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function ys(t,e){return t?Qe(Object.create(null),t,e):e}function nh(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Qe(Object.create(null),Zu(t),Zu(e??{})):e}function fv(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=at(t[r],e[r]);return n}function Yd(){return{app:null,config:{isNativeTag:q_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dv=0;function pv(t,e){return function(r,s=null){J(r)||(r=Qe({},r)),s!=null&&!Se(s)&&(s=null);const i=Yd(),o=new WeakSet;let a=!1;const c=i.app={_uid:dv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Bv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Ie(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,_l(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Us=c;try{return l()}finally{Us=null}}};return c}}let Us=null;function Ki(t,e){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[t]=e}}function qt(t,e,n=!1){const r=xe||Ke;if(r||Us){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Us._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r&&r.proxy):e}}function gv(){return!!(xe||Ke||Us)}function mv(t,e,n,r=!1){const s={},i={};no(i,Ho,1),t.propsDefaults=Object.create(null),Jd(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _v(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ae(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if($o(t.emitsOptions,f))continue;const p=e[f];if(c)if(ce(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const _=Gt(f);s[_]=fc(c,a,_,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{Jd(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=Xr(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=fc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&sn(t,"set","$attrs")}function Jd(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(zi(c))continue;const l=e[c];let u;s&&ce(s,u=Gt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:$o(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ae(n),l=a||Pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=fc(s,c,h,l[h],t,!ce(l,h))}}return o}function fc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Fr(s),r=l[n]=c.call(null,e),Zn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xr(n))&&(r=!0))}return r}function Xd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,p]=Xd(h,e,!0);Qe(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Se(t)&&r.set(t,Sr),Sr;if(K(i))for(let u=0;u<i.length;u++){const h=Gt(i[u]);rh(h)&&(o[h]=Pe)}else if(i)for(const u in i){const h=Gt(u);if(rh(h)){const f=i[u],p=o[h]=K(f)||J(f)?{type:f}:Qe({},f);if(p){const _=oh(Boolean,p.type),v=oh(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||ce(p,"default"))&&a.push(h)}}}const l=[o,a];return Se(t)&&r.set(t,l),l}function rh(t){return t[0]!=="$"}function sh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ih(t,e){return sh(t)===sh(e)}function oh(t,e){return K(e)?e.findIndex(n=>ih(n,t)):J(e)&&ih(e,t)?0:-1}const Zd=t=>t[0]==="_"||t==="$stable",pl=t=>K(t)?t.map(Mt):[Mt(t)],yv=(t,e,n)=>{if(e._n)return e;const r=Ft((...s)=>pl(e(...s)),n);return r._c=!1,r},ep=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Zd(s))continue;const i=t[s];if(J(i))e[s]=yv(s,i,r);else if(i!=null){const o=pl(i);e[s]=()=>o}}},tp=(t,e)=>{const n=pl(e);t.slots.default=()=>n},vv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),no(e,"_",n)):ep(e,t.slots={})}else t.slots={},e&&tp(t,e);no(t.slots,Ho,1)},Ev=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ep(e,s)),o=e}else e&&(tp(t,e),o={default:1});if(i)for(const a in s)!Zd(a)&&o[a]==null&&delete s[a]};function dc(t,e,n,r,s=!1){if(K(t)){t.forEach((f,p)=>dc(f,e&&(K(e)?e[p]:e),n,r,s));return}if(As(r)&&!s)return;const i=r.shapeFlag&4?_l(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Le(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):ke(l)&&(l.value=null)),J(c))Pn(c,a,12,[o,u]);else{const f=Le(c),p=ke(c);if(f||p){const _=()=>{if(t.f){const v=f?ce(h,c)?h[c]:u[c]:c.value;s?K(v)&&Zc(v,i):K(v)?v.includes(i)||v.push(i):f?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ce(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,ht(_,n)):_()}}}const ht=Ky;function Iv(t){return Tv(t)}function Tv(t,e){const n=sc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=jt,insertStaticContent:_}=t,v=(d,g,m,y=null,T=null,A=null,D=!1,P=null,b=!!g.dynamicChildren)=>{if(d===g)return;d&&!fs(d,g)&&(y=E(d),ut(d,T,A,!0),d=null),g.patchFlag===-2&&(b=!1,g.dynamicChildren=null);const{type:S,ref:B,shapeFlag:F}=g;switch(S){case qo:w(d,g,m,y);break;case Vn:C(d,g,m,y);break;case Oa:d==null&&k(g,m,y,D);break;case Ue:gt(d,g,m,y,T,A,D,P,b);break;default:F&1?ee(d,g,m,y,T,A,D,P,b):F&6?Et(d,g,m,y,T,A,D,P,b):(F&64||F&128)&&S.process(d,g,m,y,T,A,D,P,b,O)}B!=null&&T&&dc(B,d&&d.ref,A,g||d,!g)},w=(d,g,m,y)=>{if(d==null)r(g.el=a(g.children),m,y);else{const T=g.el=d.el;g.children!==d.children&&l(T,g.children)}},C=(d,g,m,y)=>{d==null?r(g.el=c(g.children||""),m,y):g.el=d.el},k=(d,g,m,y)=>{[d.el,d.anchor]=_(d.children,g,m,y,d.el,d.anchor)},q=({el:d,anchor:g},m,y)=>{let T;for(;d&&d!==g;)T=f(d),r(d,m,y),d=T;r(g,m,y)},M=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),s(d),d=m;s(g)},ee=(d,g,m,y,T,A,D,P,b)=>{D=D||g.type==="svg",d==null?me(g,m,y,T,A,D,P,b):Z(d,g,T,A,D,P,b)},me=(d,g,m,y,T,A,D,P)=>{let b,S;const{type:B,props:F,shapeFlag:j,transition:Y,dirs:re}=d;if(b=d.el=o(d.type,A,F&&F.is,F),j&8?u(b,d.children):j&16&&ne(d.children,b,null,y,T,A&&B!=="foreignObject",D,P),re&&qn(d,null,y,"created"),we(b,d,d.scopeId,D,y),F){for(const _e in F)_e!=="value"&&!zi(_e)&&i(b,_e,null,F[_e],A,d.children,y,T,Je);"value"in F&&i(b,"value",null,F.value),(S=F.onVnodeBeforeMount)&&xt(S,y,d)}re&&qn(d,null,y,"beforeMount");const Ee=wv(T,Y);Ee&&Y.beforeEnter(b),r(b,g,m),((S=F&&F.onVnodeMounted)||Ee||re)&&ht(()=>{S&&xt(S,y,d),Ee&&Y.enter(b),re&&qn(d,null,y,"mounted")},T)},we=(d,g,m,y,T)=>{if(m&&p(d,m),y)for(let A=0;A<y.length;A++)p(d,y[A]);if(T){let A=T.subTree;if(g===A){const D=T.vnode;we(d,D,D.scopeId,D.slotScopeIds,T.parent)}}},ne=(d,g,m,y,T,A,D,P,b=0)=>{for(let S=b;S<d.length;S++){const B=d[S]=P?En(d[S]):Mt(d[S]);v(null,B,g,m,y,T,A,D,P)}},Z=(d,g,m,y,T,A,D)=>{const P=g.el=d.el;let{patchFlag:b,dynamicChildren:S,dirs:B}=g;b|=d.patchFlag&16;const F=d.props||Pe,j=g.props||Pe;let Y;m&&Hn(m,!1),(Y=j.onVnodeBeforeUpdate)&&xt(Y,m,g,d),B&&qn(g,d,m,"beforeUpdate"),m&&Hn(m,!0);const re=T&&g.type!=="foreignObject";if(S?ve(d.dynamicChildren,S,P,m,y,re,A):D||fe(d,g,P,null,m,y,re,A,!1),b>0){if(b&16)Ye(P,g,F,j,m,y,T);else if(b&2&&F.class!==j.class&&i(P,"class",null,j.class,T),b&4&&i(P,"style",F.style,j.style,T),b&8){const Ee=g.dynamicProps;for(let _e=0;_e<Ee.length;_e++){const Oe=Ee[_e],Rt=F[Oe],gr=j[Oe];(gr!==Rt||Oe==="value")&&i(P,Oe,Rt,gr,T,d.children,m,y,Je)}}b&1&&d.children!==g.children&&u(P,g.children)}else!D&&S==null&&Ye(P,g,F,j,m,y,T);((Y=j.onVnodeUpdated)||B)&&ht(()=>{Y&&xt(Y,m,g,d),B&&qn(g,d,m,"updated")},y)},ve=(d,g,m,y,T,A,D)=>{for(let P=0;P<g.length;P++){const b=d[P],S=g[P],B=b.el&&(b.type===Ue||!fs(b,S)||b.shapeFlag&70)?h(b.el):m;v(b,S,B,null,y,T,A,D,!0)}},Ye=(d,g,m,y,T,A,D)=>{if(m!==y){if(m!==Pe)for(const P in m)!zi(P)&&!(P in y)&&i(d,P,m[P],null,D,g.children,T,A,Je);for(const P in y){if(zi(P))continue;const b=y[P],S=m[P];b!==S&&P!=="value"&&i(d,P,S,b,D,g.children,T,A,Je)}"value"in y&&i(d,"value",m.value,y.value)}},gt=(d,g,m,y,T,A,D,P,b)=>{const S=g.el=d?d.el:a(""),B=g.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:Y}=g;Y&&(P=P?P.concat(Y):Y),d==null?(r(S,m,y),r(B,m,y),ne(g.children,m,B,T,A,D,P,b)):F>0&&F&64&&j&&d.dynamicChildren?(ve(d.dynamicChildren,j,m,T,A,D,P),(g.key!=null||T&&g===T.subTree)&&np(d,g,!0)):fe(d,g,m,B,T,A,D,P,b)},Et=(d,g,m,y,T,A,D,P,b)=>{g.slotScopeIds=P,d==null?g.shapeFlag&512?T.ctx.activate(g,m,y,D,b):jn(g,m,y,T,A,D,b):It(d,g,b)},jn=(d,g,m,y,T,A,D)=>{const P=d.component=Nv(d,y,T);if(zd(d)&&(P.ctx.renderer=O),Vv(P),P.asyncDep){if(T&&T.registerDep(P,le),!d.el){const b=P.subTree=Ie(Vn);C(null,b,g,m)}return}le(P,d,g,m,T,A,D)},It=(d,g,m)=>{const y=g.component=d.component;if($y(d,g,m))if(y.asyncDep&&!y.asyncResolved){ye(y,g,m);return}else y.next=g,Vy(y.update),y.update();else g.el=d.el,y.vnode=g},le=(d,g,m,y,T,A,D)=>{const P=()=>{if(d.isMounted){let{next:B,bu:F,u:j,parent:Y,vnode:re}=d,Ee=B,_e;Hn(d,!1),B?(B.el=re.el,ye(d,B,D)):B=re,F&&Pa(F),(_e=B.props&&B.props.onVnodeBeforeUpdate)&&xt(_e,Y,B,re),Hn(d,!0);const Oe=ba(d),Rt=d.subTree;d.subTree=Oe,v(Rt,Oe,h(Rt.el),E(Rt),d,T,A),B.el=Oe.el,Ee===null&&By(d,Oe.el),j&&ht(j,T),(_e=B.props&&B.props.onVnodeUpdated)&&ht(()=>xt(_e,Y,B,re),T)}else{let B;const{el:F,props:j}=g,{bm:Y,m:re,parent:Ee}=d,_e=As(g);if(Hn(d,!1),Y&&Pa(Y),!_e&&(B=j&&j.onVnodeBeforeMount)&&xt(B,Ee,g),Hn(d,!0),F&&de){const Oe=()=>{d.subTree=ba(d),de(F,d.subTree,d,T,null)};_e?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Oe()):Oe()}else{const Oe=d.subTree=ba(d);v(null,Oe,m,y,d,T,A),g.el=Oe.el}if(re&&ht(re,T),!_e&&(B=j&&j.onVnodeMounted)){const Oe=g;ht(()=>xt(B,Ee,Oe),T)}(g.shapeFlag&256||Ee&&As(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&ht(d.a,T),d.isMounted=!0,g=m=y=null}},b=d.effect=new rl(P,()=>hl(S),d.scope),S=d.update=()=>b.run();S.id=d.uid,Hn(d,!0),S()},ye=(d,g,m)=>{g.component=d;const y=d.vnode.props;d.vnode=g,d.next=null,_v(d,g.props,y,m),Ev(d,g.children,m),Zr(),Yu(d),es()},fe=(d,g,m,y,T,A,D,P,b=!1)=>{const S=d&&d.children,B=d?d.shapeFlag:0,F=g.children,{patchFlag:j,shapeFlag:Y}=g;if(j>0){if(j&128){gn(S,F,m,y,T,A,D,P,b);return}else if(j&256){Jt(S,F,m,y,T,A,D,P,b);return}}Y&8?(B&16&&Je(S,T,A),F!==S&&u(m,F)):B&16?Y&16?gn(S,F,m,y,T,A,D,P,b):Je(S,T,A,!0):(B&8&&u(m,""),Y&16&&ne(F,m,y,T,A,D,P,b))},Jt=(d,g,m,y,T,A,D,P,b)=>{d=d||Sr,g=g||Sr;const S=d.length,B=g.length,F=Math.min(S,B);let j;for(j=0;j<F;j++){const Y=g[j]=b?En(g[j]):Mt(g[j]);v(d[j],Y,m,null,T,A,D,P,b)}S>B?Je(d,T,A,!0,!1,F):ne(g,m,y,T,A,D,P,b,F)},gn=(d,g,m,y,T,A,D,P,b)=>{let S=0;const B=g.length;let F=d.length-1,j=B-1;for(;S<=F&&S<=j;){const Y=d[S],re=g[S]=b?En(g[S]):Mt(g[S]);if(fs(Y,re))v(Y,re,m,null,T,A,D,P,b);else break;S++}for(;S<=F&&S<=j;){const Y=d[F],re=g[j]=b?En(g[j]):Mt(g[j]);if(fs(Y,re))v(Y,re,m,null,T,A,D,P,b);else break;F--,j--}if(S>F){if(S<=j){const Y=j+1,re=Y<B?g[Y].el:y;for(;S<=j;)v(null,g[S]=b?En(g[S]):Mt(g[S]),m,re,T,A,D,P,b),S++}}else if(S>j)for(;S<=F;)ut(d[S],T,A,!0),S++;else{const Y=S,re=S,Ee=new Map;for(S=re;S<=j;S++){const mt=g[S]=b?En(g[S]):Mt(g[S]);mt.key!=null&&Ee.set(mt.key,S)}let _e,Oe=0;const Rt=j-re+1;let gr=!1,Uu=0;const hs=new Array(Rt);for(S=0;S<Rt;S++)hs[S]=0;for(S=Y;S<=F;S++){const mt=d[S];if(Oe>=Rt){ut(mt,T,A,!0);continue}let Vt;if(mt.key!=null)Vt=Ee.get(mt.key);else for(_e=re;_e<=j;_e++)if(hs[_e-re]===0&&fs(mt,g[_e])){Vt=_e;break}Vt===void 0?ut(mt,T,A,!0):(hs[Vt-re]=S+1,Vt>=Uu?Uu=Vt:gr=!0,v(mt,g[Vt],m,null,T,A,D,P,b),Oe++)}const $u=gr?Av(hs):Sr;for(_e=$u.length-1,S=Rt-1;S>=0;S--){const mt=re+S,Vt=g[mt],Bu=mt+1<B?g[mt+1].el:y;hs[S]===0?v(null,Vt,m,Bu,T,A,D,P,b):gr&&(_e<0||S!==$u[_e]?Dt(Vt,m,Bu,2):_e--)}}},Dt=(d,g,m,y,T=null)=>{const{el:A,type:D,transition:P,children:b,shapeFlag:S}=d;if(S&6){Dt(d.component.subTree,g,m,y);return}if(S&128){d.suspense.move(g,m,y);return}if(S&64){D.move(d,g,m,O);return}if(D===Ue){r(A,g,m);for(let F=0;F<b.length;F++)Dt(b[F],g,m,y);r(d.anchor,g,m);return}if(D===Oa){q(d,g,m);return}if(y!==2&&S&1&&P)if(y===0)P.beforeEnter(A),r(A,g,m),ht(()=>P.enter(A),T);else{const{leave:F,delayLeave:j,afterLeave:Y}=P,re=()=>r(A,g,m),Ee=()=>{F(A,()=>{re(),Y&&Y()})};j?j(A,re,Ee):Ee()}else r(A,g,m)},ut=(d,g,m,y=!1,T=!1)=>{const{type:A,props:D,ref:P,children:b,dynamicChildren:S,shapeFlag:B,patchFlag:F,dirs:j}=d;if(P!=null&&dc(P,null,m,d,!0),B&256){g.ctx.deactivate(d);return}const Y=B&1&&j,re=!As(d);let Ee;if(re&&(Ee=D&&D.onVnodeBeforeUnmount)&&xt(Ee,g,d),B&6)Ci(d.component,m,y);else{if(B&128){d.suspense.unmount(m,y);return}Y&&qn(d,null,g,"beforeUnmount"),B&64?d.type.remove(d,g,m,T,O,y):S&&(A!==Ue||F>0&&F&64)?Je(S,g,m,!1,!0):(A===Ue&&F&384||!T&&B&16)&&Je(b,g,m),y&&dr(d)}(re&&(Ee=D&&D.onVnodeUnmounted)||Y)&&ht(()=>{Ee&&xt(Ee,g,d),Y&&qn(d,null,g,"unmounted")},m)},dr=d=>{const{type:g,el:m,anchor:y,transition:T}=d;if(g===Ue){pr(m,y);return}if(g===Oa){M(d);return}const A=()=>{s(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:D,delayLeave:P}=T,b=()=>D(m,A);P?P(d.el,A,b):b()}else A()},pr=(d,g)=>{let m;for(;d!==g;)m=f(d),s(d),d=m;s(g)},Ci=(d,g,m)=>{const{bum:y,scope:T,update:A,subTree:D,um:P}=d;y&&Pa(y),T.stop(),A&&(A.active=!1,ut(D,d,g,m)),P&&ht(P,g),ht(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Je=(d,g,m,y=!1,T=!1,A=0)=>{for(let D=A;D<d.length;D++)ut(d[D],g,m,y,T)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),x=(d,g,m)=>{d==null?g._vnode&&ut(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,m),Yu(),Md(),g._vnode=d},O={p:v,um:ut,m:Dt,r:dr,mt:jn,mc:ne,pc:fe,pbc:ve,n:E,o:t};let U,de;return e&&([U,de]=e(O)),{render:x,hydrate:U,createApp:pv(x,U)}}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function np(t,e,n=!1){const r=t.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=En(s[i]),a.el=o.el),n||np(o,a)),a.type===qo&&(a.el=o.el)}}function Av(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Rv=t=>t.__isTeleport,Ue=Symbol.for("v-fgt"),qo=Symbol.for("v-txt"),Vn=Symbol.for("v-cmt"),Oa=Symbol.for("v-stc"),Ss=[];let Pt=null;function te(t=!1){Ss.push(Pt=t?null:[])}function Sv(){Ss.pop(),Pt=Ss[Ss.length-1]||null}let $s=1;function ah(t){$s+=t}function rp(t){return t.dynamicChildren=$s>0?Pt||Sr:null,Sv(),$s>0&&Pt&&Pt.push(t),t}function he(t,e,n,r,s,i){return rp(H(t,e,n,r,s,i,!0))}function ts(t,e,n,r,s){return rp(Ie(t,e,n,r,s,!0))}function ao(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const Ho="__vInternal",sp=({key:t})=>t??null,Wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||ke(t)||J(t)?{i:Ke,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sp(e),ref:e&&Wi(e),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ke};return a?(gl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),$s>0&&!o&&Pt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Pt.push(c),c}const Ie=Pv;function Pv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===qy)&&(t=Vn),ao(t)){const a=Lr(t,e,!0);return n&&gl(a,n),$s>0&&!i&&Pt&&(a.shapeFlag&6?Pt[Pt.indexOf(t)]=a:Pt.push(a)),a.patchFlag|=-2,a}if(Fv(t)&&(t=t.__vccOpts),e){e=Cv(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=Nn(a)),Se(c)&&(Cd(c)&&!K(c)&&(c=Qe({},c)),e.style=tl(c))}const o=Le(t)?1:zy(t)?128:Rv(t)?64:Se(t)?4:J(t)?2:0;return H(t,e,n,r,s,o,i,!0)}function Cv(t){return t?Cd(t)||Ho in t?Qe({},t):t:null}function Lr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?bv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sp(a),ref:e&&e.ref?n&&s?K(s)?s.concat(Wi(e)):[s,Wi(e)]:Wi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lr(t.ssContent),ssFallback:t.ssFallback&&Lr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Bs(t=" ",e=0){return Ie(qo,null,t,e)}function pc(t="",e=!1){return e?(te(),ts(Vn,null,t)):Ie(Vn,null,t)}function Mt(t){return t==null||typeof t=="boolean"?Ie(Vn):K(t)?Ie(Ue,null,t.slice()):typeof t=="object"?En(t):Ie(qo,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lr(t)}function gl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ho in e)?e._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Ke},n=32):(e=String(e),r&64?(n=16,e=[Bs(e)]):n=8);t.children=e,t.shapeFlag|=n}function bv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Nn([e.class,r.class]));else if(s==="style")e.style=tl([e.style,r.style]);else if(Do(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xt(t,e,n,r=null){bt(t,e,7,[n,r])}const kv=Yd();let Ov=0;function Nv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||kv,i={uid:Ov++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(r,s),emitsOptions:Fd(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ly.bind(null,i),t.ce&&t.ce(i),i}let xe=null;const Dv=()=>xe||Ke;let ml,mr,ch="__VUE_INSTANCE_SETTERS__";(mr=sc()[ch])||(mr=sc()[ch]=[]),mr.push(t=>xe=t),ml=t=>{mr.length>1?mr.forEach(e=>e(t)):mr[0](t)};const Fr=t=>{ml(t),t.scope.on()},Zn=()=>{xe&&xe.scope.off(),ml(null)};function ip(t){return t.vnode.shapeFlag&4}let js=!1;function Vv(t,e=!1){js=e;const{props:n,children:r}=t.vnode,s=ip(t);mv(t,n,s,e),vv(t,r);const i=s?xv(t,e):void 0;return js=!1,i}function xv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Fo(new Proxy(t.ctx,iv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ap(t):null;Fr(t),Zr();const i=Pn(r,t,0,[t.props,s]);if(es(),Zn(),cd(i)){if(i.then(Zn,Zn),e)return i.then(o=>{lh(t,o,e)}).catch(o=>{Uo(o,t,0)});t.asyncDep=i}else lh(t,i,e)}else op(t,e)}function lh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Nd(e)),op(t,n)}let uh;function op(t,e,n){const r=t.type;if(!t.render){if(!e&&uh&&!r.render){const s=r.template||dl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Qe(Qe({isCustomElement:i,delimiters:a},o),c);r.render=uh(s,l)}}t.render=r.render||jt}{Fr(t),Zr();try{cv(t)}finally{es(),Zn()}}}function Mv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function ap(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Mv(t)},slots:t.slots,emit:t.emit,expose:e}}function _l(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nd(Fo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rs)return Rs[n](t)},has(e,n){return n in e||n in Rs}}))}function Lv(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function Fv(t){return J(t)&&"__vccOpts"in t}const He=(t,e)=>Oy(t,e,js);function cp(t,e,n){const r=arguments.length;return r===2?Se(e)&&!K(e)?ao(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ao(n)&&(n=[n]),Ie(t,e,n))}const Uv=Symbol.for("v-scx"),$v=()=>qt(Uv),Bv="3.3.12",jv="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,hh=Wn&&Wn.createElement("template"),qv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wn.createElementNS(jv,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hh.innerHTML=r?`<svg>${t}</svg>`:t;const a=hh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hv=Symbol("_vtc");function zv(t,e,n){const r=t[Hv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kv=Symbol("_vod"),Wv=Symbol("");function Gv(t,e,n){const r=t.style,s=Le(n);if(n&&!s){if(e&&!Le(e))for(const i in e)n[i]==null&&gc(r,i,"");for(const i in n)gc(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[Wv];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Kv in t&&(r.display=i)}}const fh=/\s*!important$/;function gc(t,e,n){if(K(n))n.forEach(r=>gc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Qv(t,e);fh.test(n)?t.setProperty(Xr(r),n.replace(fh,""),"important"):t[r]=n}}const dh=["Webkit","Moz","ms"],Na={};function Qv(t,e){const n=Na[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Na[e]=r;r=Mo(r);for(let s=0;s<dh.length;s++){const i=dh[s]+r;if(i in t)return Na[e]=i}return e}const ph="http://www.w3.org/1999/xlink";function Yv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ph,e.slice(6,e.length)):t.setAttributeNS(ph,e,n);else{const i=ey(e);n==null||i&&!hd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Jv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=hd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Xv(t,e,n,r){t.addEventListener(e,n,r)}function Zv(t,e,n,r){t.removeEventListener(e,n,r)}const gh=Symbol("_vei");function eE(t,e,n,r,s=null){const i=t[gh]||(t[gh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=tE(e);if(r){const l=i[e]=sE(r,s);Xv(t,a,l,c)}else o&&(Zv(t,a,o,c),i[e]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function tE(t){let e;if(mh.test(t)){e={};let r;for(;r=t.match(mh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xr(t.slice(2)),e]}let Da=0;const nE=Promise.resolve(),rE=()=>Da||(nE.then(()=>Da=0),Da=Date.now());function sE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bt(iE(r,n.value),e,5,[r])};return n.value=t,n.attached=rE(),n}function iE(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _h=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,oE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?zv(t,r,s):e==="style"?Gv(t,n,r):Do(e)?Xc(e)||eE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aE(t,e,r,s))?Jv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yv(t,e,r,s))};function aE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_h(e)&&J(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _h(e)&&Le(n)?!1:e in t}const cE=Qe({patchProp:oE},qv);let yh;function lE(){return yh||(yh=Iv(cE))}const uE=(...t)=>{const e=lE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=hE(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hE(t){return Le(t)?document.querySelector(t):t}var fE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let lp;const zo=t=>lp=t,up=Symbol();function mc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ps;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ps||(Ps={}));function dE(){const t=pd(!0),e=t.run(()=>yt({}));let n=[],r=[];const s=Fo({install(i){zo(s),s._a=i,i.provide(up,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!fE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const hp=()=>{};function vh(t,e,n,r=hp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&gd()&&ny(s),s}function _r(t,...e){t.slice().forEach(n=>{n(...e)})}const pE=t=>t();function _c(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];mc(s)&&mc(r)&&t.hasOwnProperty(n)&&!ke(r)&&!on(r)?t[n]=_c(s,r):t[n]=r}return t}const gE=Symbol();function mE(t){return!mc(t)||!t.hasOwnProperty(gE)}const{assign:vn}=Object;function _E(t){return!!(ke(t)&&t.effect)}function yE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=cl(n.state.value[t]);return vn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Fo(He(()=>{zo(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=fp(t,l,e,n,r,!0),c}function fp(t,e,n={},r,s,i){let o;const a=vn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],p;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),yt({});let v;function w(ne){let Z;l=u=!1,typeof ne=="function"?(ne(r.state.value[t]),Z={type:Ps.patchFunction,storeId:t,events:p}):(_c(r.state.value[t],ne),Z={type:Ps.patchObject,payload:ne,storeId:t,events:p});const ve=v=Symbol();ul().then(()=>{v===ve&&(l=!0)}),u=!0,_r(h,Z,r.state.value[t])}const C=i?function(){const{state:Z}=n,ve=Z?Z():{};this.$patch(Ye=>{vn(Ye,ve)})}:hp;function k(){o.stop(),h=[],f=[],r._s.delete(t)}function q(ne,Z){return function(){zo(r);const ve=Array.from(arguments),Ye=[],gt=[];function Et(le){Ye.push(le)}function jn(le){gt.push(le)}_r(f,{args:ve,name:ne,store:ee,after:Et,onError:jn});let It;try{It=Z.apply(this&&this.$id===t?this:ee,ve)}catch(le){throw _r(gt,le),le}return It instanceof Promise?It.then(le=>(_r(Ye,le),le)).catch(le=>(_r(gt,le),Promise.reject(le))):(_r(Ye,It),It)}}const M={_p:r,$id:t,$onAction:vh.bind(null,f),$patch:w,$reset:C,$subscribe(ne,Z={}){const ve=vh(h,ne,Z.detached,()=>Ye()),Ye=o.run(()=>br(()=>r.state.value[t],gt=>{(Z.flush==="sync"?u:l)&&ne({storeId:t,type:Ps.direct,events:p},gt)},vn({},c,Z)));return ve},$dispose:k},ee=ci(M);r._s.set(t,ee);const we=(r._a&&r._a.runWithContext||pE)(()=>r._e.run(()=>(o=pd()).run(e)));for(const ne in we){const Z=we[ne];if(ke(Z)&&!_E(Z)||on(Z))i||(_&&mE(Z)&&(ke(Z)?Z.value=_[ne]:_c(Z,_[ne])),r.state.value[t][ne]=Z);else if(typeof Z=="function"){const ve=q(ne,Z);we[ne]=ve,a.actions[ne]=Z}}return vn(ee,we),vn(ae(ee),we),Object.defineProperty(ee,"$state",{get:()=>r.state.value[t],set:ne=>{w(Z=>{vn(Z,ne)})}}),r._p.forEach(ne=>{vn(ee,o.run(()=>ne({store:ee,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(ee.$state,_),l=!0,u=!0,ee}function dp(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=gv();return a=a||(l?qt(up,null):null),a&&zo(a),a=lp,a._s.has(r)||(i?fp(r,e,s,a):yE(r,s,a)),a._s.get(r)}return o.$id=r,o}function Ko(t){{t=ae(t);const e={};for(const n in t){const r=t[n];(ke(r)||on(r))&&(e[n]=by(t,n))}return e}}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof window<"u";function vE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Va(t,e){const n={};for(const r in e){const s=e[r];n[r]=kt(s)?s.map(t):t(s)}return n}const Cs=()=>{},kt=Array.isArray,EE=/\/$/,IE=t=>t.replace(EE,"");function xa(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=RE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function TE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Eh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ur(e.matched[r],n.matched[s])&&pp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!AE(t[n],e[n]))return!1;return!0}function AE(t,e){return kt(t)?Ih(t,e):kt(e)?Ih(e,t):t===e}function Ih(t,e){return kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function RE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var qs;(function(t){t.pop="pop",t.push="push"})(qs||(qs={}));var bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bs||(bs={}));function SE(t){if(!t)if(vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IE(t)}const PE=/^[^#]+#/;function CE(t,e){return t.replace(PE,"#")+e}function bE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wo=()=>({left:window.pageXOffset,top:window.pageYOffset});function kE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Th(t,e){return(history.state?history.state.position-e:-1)+t}const yc=new Map;function OE(t,e){yc.set(t,e)}function NE(t){const e=yc.get(t);return yc.delete(t),e}let DE=()=>location.protocol+"//"+location.host;function gp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Eh(c,"")}return Eh(n,t)+r+s}function VE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=gp(t,location),_=n.value,v=e.value;let w=0;if(f){if(n.value=p,e.value=f,o&&o===_){o=null;return}w=v?f.position-v.position:0}else r(p);s.forEach(C=>{C(n.value,_,{delta:w,type:qs.pop,direction:w?w>0?bs.forward:bs.back:bs.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:Wo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function wh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wo():null}}function xE(t){const{history:e,location:n}=window,r={value:gp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:DE()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,wh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=pe({},s.value,e.state,{forward:c,scroll:Wo()});i(u.current,u,!0);const h=pe({},wh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ME(t){t=SE(t);const e=xE(t),n=VE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=pe({location:"",base:t,go:r,createHref:CE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function LE(t){return typeof t=="string"||t&&typeof t=="object"}function mp(t){return typeof t=="string"||typeof t=="symbol"}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_p=Symbol("");var Ah;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ah||(Ah={}));function $r(t,e){return pe(new Error,{type:t,[_p]:!0},e)}function Xt(t,e){return t instanceof Error&&_p in t&&(e==null||!!(t.type&e))}const Rh="[^/]+?",FE={sensitive:!1,strict:!1,start:!0,end:!0},UE=/[.+*?^${}()[\]/\\]/g;function $E(t,e){const n=pe({},FE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(UE,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:v,optional:w,regexp:C}=f;i.push({name:_,repeatable:v,optional:w});const k=C||Rh;if(k!==Rh){p+=10;try{new RegExp(`(${k})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+M.message)}}let q=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(q=w&&l.length<2?`(?:/${q})`:"/"+q),w&&(q+="?"),s+=q,p+=20,w&&(p+=-8),v&&(p+=-20),k===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=i[f-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:w}=p,C=_ in l?l[_]:"";if(kt(C)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=kt(C)?C.join("/"):C;if(!k)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function BE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=BE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Sh(r))return 1;if(Sh(s))return-1}return s.length-r.length}function Sh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qE={type:0,value:""},HE=/[a-zA-Z0-9_]/;function zE(t){if(!t)return[[]];if(t==="/")return[[qE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:HE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function KE(t,e,n){const r=$E(zE(t.path),n),s=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function WE(t,e){const n=[],r=new Map;e=bh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,_=GE(u);_.aliasOf=f&&f.record;const v=bh(e,u),w=[_];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of q)w.push(pe({},_,{components:f?f.record.components:_.components,path:M,aliasOf:f?f.record:_}))}let C,k;for(const q of w){const{path:M}=q;if(h&&M[0]!=="/"){const ee=h.record.path,me=ee[ee.length-1]==="/"?"":"/";q.path=h.record.path+(M&&me+M)}if(C=KE(q,h,v),f?f.alias.push(C):(k=k||C,k!==C&&k.alias.push(C),p&&u.name&&!Ch(C)&&o(u.name)),_.children){const ee=_.children;for(let me=0;me<ee.length;me++)i(ee[me],C,f&&f.children[me])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return k?()=>{o(k)}:Cs}function o(u){if(mp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&jE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!yp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ch(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},_,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw $r(1,{location:u});v=f.record.name,p=pe(Ph(h.params,f.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Ph(u.params,f.keys.map(k=>k.name))),_=f.stringify(p)}else if("path"in u)_=u.path,f=n.find(k=>k.re.test(_)),f&&(p=f.parse(_),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!f)throw $r(1,{location:u,currentLocation:h});v=f.record.name,p=pe({},h.params,u.params),_=f.stringify(p)}const w=[];let C=f;for(;C;)w.unshift(C.record),C=C.parent;return{name:v,path:_,params:p,matched:w,meta:YE(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ph(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function GE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:QE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function QE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ch(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function YE(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function bh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yp(t,e){return e.children.some(n=>n===t||yp(t,n))}const vp=/#/g,JE=/&/g,XE=/\//g,ZE=/=/g,eI=/\?/g,Ep=/\+/g,tI=/%5B/g,nI=/%5D/g,Ip=/%5E/g,rI=/%60/g,Tp=/%7B/g,sI=/%7C/g,wp=/%7D/g,iI=/%20/g;function yl(t){return encodeURI(""+t).replace(sI,"|").replace(tI,"[").replace(nI,"]")}function oI(t){return yl(t).replace(Tp,"{").replace(wp,"}").replace(Ip,"^")}function vc(t){return yl(t).replace(Ep,"%2B").replace(iI,"+").replace(vp,"%23").replace(JE,"%26").replace(rI,"`").replace(Tp,"{").replace(wp,"}").replace(Ip,"^")}function aI(t){return vc(t).replace(ZE,"%3D")}function cI(t){return yl(t).replace(vp,"%23").replace(eI,"%3F")}function lI(t){return t==null?"":cI(t).replace(XE,"%2F")}function co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ep," "),o=i.indexOf("="),a=co(o<0?i:i.slice(0,o)),c=o<0?null:co(i.slice(o+1));if(a in e){let l=e[a];kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function kh(t){let e="";for(let n in t){const r=t[n];if(n=aI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(r)?r.map(i=>i&&vc(i)):[r&&vc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fI=Symbol(""),Oh=Symbol(""),vl=Symbol(""),Ap=Symbol(""),Ec=Symbol("");function ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function In(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($r(4,{from:n,to:e})):h instanceof Error?a(h):LE(h)?a($r(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ma(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(In(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=vE(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&In(f,n,r,i,o)()}))}}return s}function dI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nh(t){const e=qt(vl),n=qt(Ap),r=He(()=>e.resolve(ct(t.to))),s=He(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ur.bind(null,u));if(f>-1)return f;const p=Dh(c[l-2]);return l>1&&Dh(u)===p&&h[h.length-1].path!==p?h.findIndex(Ur.bind(null,c[l-2])):f}),i=He(()=>s.value>-1&&_I(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&pp(n.params,r.value.params));function a(c={}){return mI(c)?e[ct(t.replace)?"replace":"push"](ct(t.to)).catch(Cs):Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const pI=Hd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nh,setup(t,{slots:e}){const n=ci(Nh(t)),{options:r}=qt(vl),s=He(()=>({[Vh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gI=pI;function mI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _I(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!kt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vh=(t,e,n)=>t??e??n,yI=Hd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qt(Ec),s=He(()=>t.route||r.value),i=qt(Oh,0),o=He(()=>{let l=ct(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=He(()=>s.value.matched[o.value]);Ki(Oh,He(()=>o.value+1)),Ki(fI,a),Ki(Ec,s);const c=yt();return br(()=>[c.value,a.value,t.name],([l,u,h],[f,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Ur(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return xh(n.default,{Component:f,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=cp(f,pe({},_,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return xh(n.default,{Component:w,route:l})||w}}});function xh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rp=yI;function vI(t){const e=WE(t.routes,t),n=t.parseQuery||uI,r=t.stringifyQuery||kh,s=t.history,i=ds(),o=ds(),a=ds(),c=Ay(_n);let l=_n;vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Va.bind(null,E=>""+E),h=Va.bind(null,lI),f=Va.bind(null,co);function p(E,x){let O,U;return mp(E)?(O=e.getRecordMatcher(E),U=x):U=E,e.addRoute(U,O)}function _(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function v(){return e.getRoutes().map(E=>E.record)}function w(E){return!!e.getRecordMatcher(E)}function C(E,x){if(x=pe({},x||c.value),typeof E=="string"){const m=xa(n,E,x.path),y=e.resolve({path:m.path},x),T=s.createHref(m.fullPath);return pe(m,y,{params:f(y.params),hash:co(m.hash),redirectedFrom:void 0,href:T})}let O;if("path"in E)O=pe({},E,{path:xa(n,E.path,x.path).path});else{const m=pe({},E.params);for(const y in m)m[y]==null&&delete m[y];O=pe({},E,{params:h(m)}),x.params=h(x.params)}const U=e.resolve(O,x),de=E.hash||"";U.params=u(f(U.params));const d=TE(r,pe({},E,{hash:oI(de),path:U.path})),g=s.createHref(d);return pe({fullPath:d,hash:de,query:r===kh?hI(E.query):E.query||{}},U,{redirectedFrom:void 0,href:g})}function k(E){return typeof E=="string"?xa(n,E,c.value.path):pe({},E)}function q(E,x){if(l!==E)return $r(8,{from:x,to:E})}function M(E){return we(E)}function ee(E){return M(pe(k(E),{replace:!0}))}function me(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:O}=x;let U=typeof O=="function"?O(E):O;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=k(U):{path:U},U.params={}),pe({query:E.query,hash:E.hash,params:"path"in U?{}:E.params},U)}}function we(E,x){const O=l=C(E),U=c.value,de=E.state,d=E.force,g=E.replace===!0,m=me(O);if(m)return we(pe(k(m),{state:typeof m=="object"?pe({},de,m.state):de,force:d,replace:g}),x||O);const y=O;y.redirectedFrom=x;let T;return!d&&wE(r,U,O)&&(T=$r(16,{to:y,from:U}),Dt(U,U,!0,!1)),(T?Promise.resolve(T):ve(y,U)).catch(A=>Xt(A)?Xt(A,2)?A:gn(A):fe(A,y,U)).then(A=>{if(A){if(Xt(A,2))return we(pe({replace:g},k(A.to),{state:typeof A.to=="object"?pe({},de,A.to.state):de,force:d}),x||y)}else A=gt(y,U,!0,g,de);return Ye(y,U,A),A})}function ne(E,x){const O=q(E,x);return O?Promise.reject(O):Promise.resolve()}function Z(E){const x=pr.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function ve(E,x){let O;const[U,de,d]=EI(E,x);O=Ma(U.reverse(),"beforeRouteLeave",E,x);for(const m of U)m.leaveGuards.forEach(y=>{O.push(In(y,E,x))});const g=ne.bind(null,E,x);return O.push(g),Je(O).then(()=>{O=[];for(const m of i.list())O.push(In(m,E,x));return O.push(g),Je(O)}).then(()=>{O=Ma(de,"beforeRouteUpdate",E,x);for(const m of de)m.updateGuards.forEach(y=>{O.push(In(y,E,x))});return O.push(g),Je(O)}).then(()=>{O=[];for(const m of d)if(m.beforeEnter)if(kt(m.beforeEnter))for(const y of m.beforeEnter)O.push(In(y,E,x));else O.push(In(m.beforeEnter,E,x));return O.push(g),Je(O)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),O=Ma(d,"beforeRouteEnter",E,x),O.push(g),Je(O))).then(()=>{O=[];for(const m of o.list())O.push(In(m,E,x));return O.push(g),Je(O)}).catch(m=>Xt(m,8)?m:Promise.reject(m))}function Ye(E,x,O){a.list().forEach(U=>Z(()=>U(E,x,O)))}function gt(E,x,O,U,de){const d=q(E,x);if(d)return d;const g=x===_n,m=vr?history.state:{};O&&(U||g?s.replace(E.fullPath,pe({scroll:g&&m&&m.scroll},de)):s.push(E.fullPath,de)),c.value=E,Dt(E,x,O,g),gn()}let Et;function jn(){Et||(Et=s.listen((E,x,O)=>{if(!Ci.listening)return;const U=C(E),de=me(U);if(de){we(pe(de,{replace:!0}),U).catch(Cs);return}l=U;const d=c.value;vr&&OE(Th(d.fullPath,O.delta),Wo()),ve(U,d).catch(g=>Xt(g,12)?g:Xt(g,2)?(we(g.to,U).then(m=>{Xt(m,20)&&!O.delta&&O.type===qs.pop&&s.go(-1,!1)}).catch(Cs),Promise.reject()):(O.delta&&s.go(-O.delta,!1),fe(g,U,d))).then(g=>{g=g||gt(U,d,!1),g&&(O.delta&&!Xt(g,8)?s.go(-O.delta,!1):O.type===qs.pop&&Xt(g,20)&&s.go(-1,!1)),Ye(U,d,g)}).catch(Cs)}))}let It=ds(),le=ds(),ye;function fe(E,x,O){gn(E);const U=le.list();return U.length?U.forEach(de=>de(E,x,O)):console.error(E),Promise.reject(E)}function Jt(){return ye&&c.value!==_n?Promise.resolve():new Promise((E,x)=>{It.add([E,x])})}function gn(E){return ye||(ye=!E,jn(),It.list().forEach(([x,O])=>E?O(E):x()),It.reset()),E}function Dt(E,x,O,U){const{scrollBehavior:de}=t;if(!vr||!de)return Promise.resolve();const d=!O&&NE(Th(E.fullPath,0))||(U||!O)&&history.state&&history.state.scroll||null;return ul().then(()=>de(E,x,d)).then(g=>g&&kE(g)).catch(g=>fe(g,E,x))}const ut=E=>s.go(E);let dr;const pr=new Set,Ci={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:w,getRoutes:v,resolve:C,options:t,push:M,replace:ee,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:Jt,install(E){const x=this;E.component("RouterLink",gI),E.component("RouterView",Rp),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(c)}),vr&&!dr&&c.value===_n&&(dr=!0,M(s.location).catch(de=>{}));const O={};for(const de in _n)Object.defineProperty(O,de,{get:()=>c.value[de],enumerable:!0});E.provide(vl,x),E.provide(Ap,Sd(O)),E.provide(Ec,c);const U=E.unmount;pr.add(E),E.unmount=function(){pr.delete(E),pr.size<1&&(l=_n,Et&&Et(),Et=null,c.value=_n,dr=!1,ye=!1),U()}}};function Je(E){return E.reduce((x,O)=>x.then(()=>Z(O)),Promise.resolve())}return Ci}function EI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ur(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ur(l,c))||s.push(c))}return[n,r,s]}const II={__name:"App",setup(t){return(e,n)=>(te(),ts(ct(Rp)))}},El=dp("user",()=>{let t;const e=yt(new Promise(r=>t=r));br(e,n);function n(r){t(r)}return{user:e}});var Mh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},TI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new wI;const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AI=function(t){const e=Sp(t);return Pp.encodeByteArray(e,!0)},lo=function(t){return AI(t).replace(/\./g,"")},Cp=function(t){try{return Pp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=()=>RI().__FIREBASE_DEFAULTS__,PI=()=>{if(typeof process>"u"||typeof Mh>"u")return;const t=Mh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cp(t[1]);return e&&JSON.parse(e)},Il=()=>{try{return SI()||PI()||CI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bp=t=>{var e,n;return(n=(e=Il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bI=t=>{const e=bp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kp=()=>{var t;return(t=Il())===null||t===void 0?void 0:t.config},Op=t=>{var e;return(e=Il())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lo(JSON.stringify(n)),lo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function DI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xI(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function MI(){try{return typeof indexedDB=="object"}catch{return!1}}function LI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FI,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?UI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pn(s,a,r)}}function UI(t,e){return t.replace($I,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $I=/\{\$([^}]+)}/g;function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lh(i)&&Lh(o)){if(!uo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jI(t,e){const n=new qI(t,e);return n.subscribe.bind(n)}class qI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=La),s.error===void 0&&(s.error=La),s.complete===void 0&&(s.complete=La);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WI(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===zn?void 0:t}function WI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const QI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},YI=ie.INFO,JI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},XI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=JI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=YI,this._logHandler=XI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const ZI=(t,e)=>e.some(n=>t instanceof n);let Fh,Uh;function eT(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tT(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Np=new WeakMap,Ic=new WeakMap,Dp=new WeakMap,Fa=new WeakMap,wl=new WeakMap;function nT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Np.set(n,t)}).catch(()=>{}),wl.set(e,t),e}function rT(t){if(Ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sT(t){Tc=t(Tc)}function iT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ua(this),e,...n);return Dp.set(r,e.sort?e.sort():[e]),Cn(r)}:tT().includes(t)?function(...e){return t.apply(Ua(this),e),Cn(Np.get(this))}:function(...e){return Cn(t.apply(Ua(this),e))}}function oT(t){return typeof t=="function"?iT(t):(t instanceof IDBTransaction&&rT(t),ZI(t,eT())?new Proxy(t,Tc):t)}function Cn(t){if(t instanceof IDBRequest)return nT(t);if(Fa.has(t))return Fa.get(t);const e=oT(t);return e!==t&&(Fa.set(t,e),wl.set(e,t)),e}const Ua=t=>wl.get(t);function aT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Cn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Cn(o.result),c.oldVersion,c.newVersion,Cn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const cT=["get","getKey","getAll","getAllKeys","count"],lT=["put","add","delete","clear"],$a=new Map;function $h(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=lT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return $a.set(e,i),i}sT(t=>({...t,get:(e,n,r)=>$h(e,n)||t.get(e,n,r),has:(e,n)=>!!$h(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wc="@firebase/app",Bh="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Tl("@firebase/app"),fT="@firebase/app-compat",dT="@firebase/analytics-compat",pT="@firebase/analytics",gT="@firebase/app-check-compat",mT="@firebase/app-check",_T="@firebase/auth",yT="@firebase/auth-compat",vT="@firebase/database",ET="@firebase/database-compat",IT="@firebase/functions",TT="@firebase/functions-compat",wT="@firebase/installations",AT="@firebase/installations-compat",RT="@firebase/messaging",ST="@firebase/messaging-compat",PT="@firebase/performance",CT="@firebase/performance-compat",bT="@firebase/remote-config",kT="@firebase/remote-config-compat",OT="@firebase/storage",NT="@firebase/storage-compat",DT="@firebase/firestore",VT="@firebase/firestore-compat",xT="firebase",MT="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="[DEFAULT]",LT={[wc]:"fire-core",[fT]:"fire-core-compat",[pT]:"fire-analytics",[dT]:"fire-analytics-compat",[mT]:"fire-app-check",[gT]:"fire-app-check-compat",[_T]:"fire-auth",[yT]:"fire-auth-compat",[vT]:"fire-rtdb",[ET]:"fire-rtdb-compat",[IT]:"fire-fn",[TT]:"fire-fn-compat",[wT]:"fire-iid",[AT]:"fire-iid-compat",[RT]:"fire-fcm",[ST]:"fire-fcm-compat",[PT]:"fire-perf",[CT]:"fire-perf-compat",[bT]:"fire-rc",[kT]:"fire-rc-compat",[OT]:"fire-gcs",[NT]:"fire-gcs-compat",[DT]:"fire-fst",[VT]:"fire-fst-compat","fire-js":"fire-js",[xT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map,Rc=new Map;function FT(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(Rc.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Rc.set(e,t);for(const n of ho.values())FT(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new li("app","Firebase",UT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=MT;function Vp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ac,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(n||(n=kp()),!n)throw bn.create("no-options");const i=ho.get(s);if(i){if(uo(n,i.options)&&uo(r,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const o=new GI(s);for(const c of Rc.values())o.addComponent(c);const a=new $T(n,r,o);return ho.set(s,a),a}function xp(t=Ac){const e=ho.get(t);if(!e&&t===Ac&&kp())return Vp();if(!e)throw bn.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let s=(r=LT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}Br(new rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="firebase-heartbeat-database",jT=1,Hs="firebase-heartbeat-store";let Ba=null;function Mp(){return Ba||(Ba=aT(BT,jT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hs)}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Ba}async function qT(t){try{return await(await Mp()).transaction(Hs).objectStore(Hs).get(Lp(t))}catch(e){if(e instanceof pn)sr.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function jh(t,e){try{const r=(await Mp()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(e,Lp(t)),await r.done}catch(n){if(n instanceof pn)sr.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=1024,zT=30*24*60*60*1e3;class KT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qh(),{heartbeatsToSend:r,unsentEntries:s}=WT(this._heartbeatsCache.heartbeats),i=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qh(){return new Date().toISOString().substring(0,10)}function WT(t,e=HT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MI()?LI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hh(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){Br(new rr("platform-logger",e=>new uT(e),"PRIVATE")),Br(new rr("heartbeat",e=>new KT(e),"PRIVATE")),kn(wc,Bh,t),kn(wc,Bh,"esm2017"),kn("fire-js","")}QT("");var YT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,Rl=Rl||{},W=YT||self;function Go(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function hi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function JT(t){return Object.prototype.hasOwnProperty.call(t,ja)&&t[ja]||(t[ja]=++XT)}var ja="closure_uid_"+(1e9*Math.random()>>>0),XT=0;function ZT(t,e,n){return t.call.apply(t.bind,arguments)}function ew(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=ZT:rt=ew,rt.apply(null,arguments)}function xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Fn(){this.s=this.s,this.o=this.o}var tw=0;Fn.prototype.s=!1;Fn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),tw!=0)&&JT(this)};Fn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function zh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Go(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var nw=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};W.addEventListener("test",n,e),W.removeEventListener("test",n,e)}catch{}return t}();function zs(t){return/^[\s\xa0]*$/.test(t)}function Qo(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return Qo().indexOf(t)!=-1}function Pl(t){return Pl[" "](t),t}Pl[" "]=function(){};function rw(t,e){var n=Qw;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var sw=Ut("Opera"),jr=Ut("Trident")||Ut("MSIE"),Up=Ut("Edge"),Sc=Up||jr,$p=Ut("Gecko")&&!(Qo().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),iw=Qo().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function Bp(){var t=W.document;return t?t.documentMode:void 0}var Pc;e:{var qa="",Ha=function(){var t=Qo();if($p)return/rv:([^\);]+)(\)|;)/.exec(t);if(Up)return/Edge\/([\d\.]+)/.exec(t);if(jr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(iw)return/WebKit\/(\S+)/.exec(t);if(sw)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ha&&(qa=Ha?Ha[1]:""),jr){var za=Bp();if(za!=null&&za>parseFloat(qa)){Pc=String(za);break e}}Pc=qa}var Cc;if(W.document&&jr){var Kh=Bp();Cc=Kh||parseInt(Pc,10)||void 0}else Cc=void 0;var ow=Cc;function Ks(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($p){e:{try{Pl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:aw[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ks.$.h.call(this)}}Be(Ks,st);var aw={2:"touch",3:"pen",4:"mouse"};Ks.prototype.h=function(){Ks.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fi="closure_listenable_"+(1e6*Math.random()|0),cw=0;function lw(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++cw,this.fa=this.ia=!1}function Yo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Cl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function uw(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function jp(t){const e={};for(const n in t)e[n]=t[n];return e}const Wh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Wh.length;i++)n=Wh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Jo(t){this.src=t,this.g={},this.h=0}Jo.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=kc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new lw(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function bc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Fp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Yo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function kc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var bl="closure_lm_"+(1e6*Math.random()|0),Ka={};function Hp(t,e,n,r,s){if(r&&r.once)return Kp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hp(t,e[i],n,r,s);return null}return n=Nl(n),t&&t[fi]?t.O(e,n,hi(r)?!!r.capture:!!r,s):zp(t,e,n,!1,r,s)}function zp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=hi(s)?!!s.capture:!!s,a=Ol(t);if(a||(t[bl]=a=new Jo(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=hw(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nw||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Gp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function hw(){function t(n){return e.call(t.src,t.listener,n)}const e=fw;return t}function Kp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Kp(t,e[i],n,r,s);return null}return n=Nl(n),t&&t[fi]?t.P(e,n,hi(r)?!!r.capture:!!r,s):zp(t,e,n,!0,r,s)}function Wp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Wp(t,e[i],n,r,s);else r=hi(r)?!!r.capture:!!r,n=Nl(n),t&&t[fi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=kc(i,n,r,s),-1<n&&(Yo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ol(t))&&(e=t.g[e.toString()],t=-1,e&&(t=kc(e,n,r,s)),(n=-1<t?e[t]:null)&&kl(n))}function kl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[fi])bc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Gp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ol(e))?(bc(n,t),n.h==0&&(n.src=null,e[bl]=null)):Yo(t)}}}function Gp(t){return t in Ka?Ka[t]:Ka[t]="on"+t}function fw(t,e){if(t.fa)t=!0;else{e=new Ks(e,this);var n=t.listener,r=t.la||t.src;t.ia&&kl(t),t=n.call(r,e)}return t}function Ol(t){return t=t[bl],t instanceof Jo?t:null}var Wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nl(t){return typeof t=="function"?t:(t[Wa]||(t[Wa]=function(e){return t.handleEvent(e)}),t[Wa])}function $e(){Fn.call(this),this.i=new Jo(this),this.S=this,this.J=null}Be($e,Fn);$e.prototype[fi]=!0;$e.prototype.removeEventListener=function(t,e,n,r){Wp(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),qp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Mi(o,r,!0,e)&&s}if(o=e.g=t,s=Mi(o,r,!0,e)&&s,s=Mi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Mi(o,r,!1,e)&&s}$e.prototype.N=function(){if($e.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Yo(n[r]);delete t.g[e],t.h--}}this.J=null};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Mi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&bc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Dl=W.JSON.stringify;class dw{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function pw(){var t=Vl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class gw{constructor(){this.h=this.g=null}add(e,n){const r=Qp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Qp=new dw(()=>new mw,t=>t.reset());class mw{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _w(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function yw(t){W.setTimeout(()=>{throw t},0)}let Ws,Gs=!1,Vl=new gw,Yp=()=>{const t=W.Promise.resolve(void 0);Ws=()=>{t.then(vw)}};var vw=()=>{for(var t;t=pw();){try{t.h.call(t.g)}catch(n){yw(n)}var e=Qp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gs=!1};function Xo(t,e){$e.call(this),this.h=t||1,this.g=e||W,this.j=rt(this.qb,this),this.l=Date.now()}Be(Xo,$e);N=Xo.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(xl(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Xo.$.N.call(this),xl(this),delete this.g};function Ml(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Jp(t){t.g=Ml(()=>{t.g=null,t.i&&(t.i=!1,Jp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ew extends Fn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Jp(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qs(t){Fn.call(this),this.h=t,this.g={}}Be(Qs,Fn);var Gh=[];function Xp(t,e,n,r){Array.isArray(n)||(n&&(Gh[0]=n.toString()),n=Gh);for(var s=0;s<n.length;s++){var i=Hp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zp(t){Cl(t.g,function(e,n){this.g.hasOwnProperty(n)&&kl(e)},t),t.g={}}Qs.prototype.N=function(){Qs.$.N.call(this),Zp(this)};Qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Zo(){this.g=!0}Zo.prototype.Ea=function(){this.g=!1};function Iw(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Tw(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Rr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Aw(t,n)+(r?" "+r:"")})}function ww(t,e){t.info(function(){return"TIMEOUT: "+e})}Zo.prototype.info=function(){};function Aw(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Dl(n)}catch{return e}}var ur={},Qh=null;function ea(){return Qh=Qh||new $e}ur.Ta="serverreachability";function eg(t){st.call(this,ur.Ta,t)}Be(eg,st);function Ys(t){const e=ea();We(e,new eg(e))}ur.STAT_EVENT="statevent";function tg(t,e){st.call(this,ur.STAT_EVENT,t),this.stat=e}Be(tg,st);function lt(t){const e=ea();We(e,new tg(e,t))}ur.Ua="timingevent";function ng(t,e){st.call(this,ur.Ua,t),this.size=e}Be(ng,st);function di(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var ta={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ll(){}Ll.prototype.h=null;function Yh(t){return t.h||(t.h=t.i())}function sg(){}var pi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fl(){st.call(this,"d")}Be(Fl,st);function Ul(){st.call(this,"c")}Be(Ul,st);var Oc;function na(){}Be(na,Ll);na.prototype.g=function(){return new XMLHttpRequest};na.prototype.i=function(){return{}};Oc=new na;function gi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qs(this),this.P=Rw,t=Sc?125:void 0,this.V=new Xo(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ig}function ig(){this.i=null,this.g="",this.h=!1}var Rw=45e3,og={},Nc={};N=gi.prototype;N.setTimeout=function(t){this.P=t};function Dc(t,e,n){t.L=1,t.A=sa(ln(e)),t.u=n,t.S=!0,ag(t,null)}function ag(t,e){t.G=Date.now(),mi(t),t.B=ln(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),gg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new ig,t.g=Mg(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Ew(rt(t.Pa,t,t.g),t.O)),Xp(t.U,t.g,"readystatechange",t.nb),e=t.I?jp(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ys(),Iw(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&$t(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=$t(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sc||this.g&&(this.h.h||this.g.ja()||ef(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ys(3):Ys(2)),ra(this);var n=this.g.da();this.ca=n;t:if(cg(this)){var r=ef(this.g);t="";var s=r.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),ks(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Tw(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zs(a)){var l=a;break t}}l=null}if(n=l)Rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vc(this,n);else{this.i=!1,this.s=3,lt(12),Gn(this),ks(this);break e}}this.S?(lg(this,u,o),Sc&&this.i&&u==3&&(Xp(this.U,this.V,"tick",this.mb),this.V.start())):(Rr(this.j,this.m,o,null),Vc(this,o)),u==4&&Gn(this),this.i&&!this.J&&(u==4?Ng(this.l,this):(this.i=!1,mi(this)))}else Kw(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Gn(this),ks(this)}}}catch{}finally{}};function cg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function lg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=Sw(t,n),s==Nc){e==4&&(t.s=4,lt(14),r=!1),Rr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==og){t.s=4,lt(15),Rr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rr(t.j,t.m,s,null),Vc(t,s);cg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zl(e),e.M=!0,lt(11))):(Rr(t.j,t.m,n,"[Invalid Chunked Response]"),Gn(t),ks(t))}N.mb=function(){if(this.g){var t=$t(this.g),e=this.g.ja();this.o<e.length&&(ra(this),lg(this,t,e),this.i&&t!=4&&mi(this))}};function Sw(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Nc:(n=Number(e.substring(n,r)),isNaN(n)?og:(r+=1,r+n>e.length?Nc:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,Gn(this)};function mi(t){t.Y=Date.now()+t.P,ug(t,t.P)}function ug(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=di(rt(t.lb,t),e)}function ra(t){t.C&&(W.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(ww(this.j,this.B),this.L!=2&&(Ys(),lt(17)),Gn(this),this.s=2,ks(this)):ug(this,this.Y-t)};function ks(t){t.l.H==0||t.J||Ng(t.l,t)}function Gn(t){ra(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,xl(t.V),Zp(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Vc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xc(n.i,t))){if(!t.K&&xc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)go(n),ca(n);else break e;Hl(n),lt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=di(rt(n.ib,n),6e3));if(1>=yg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qn(n,11)}else if((t.K||n.g==t)&&go(n),!zs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const _=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&($l(i,i.h),i.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Ae(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=xg(r,r.J?r.pa:null,r.Y),o.K){vg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(ra(a),mi(a)),r.g=o}else kg(r);0<n.j.length&&la(n)}else l[0]!="stop"&&l[0]!="close"||Qn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Qn(n,7):ql(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ys(4)}catch{}}function Pw(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Go(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Cw(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Go(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function hg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Go(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Cw(t),r=Pw(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var fg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bw(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function er(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof er){this.h=t.h,fo(this,t.j),this.s=t.s,this.g=t.g,po(this,t.m),this.l=t.l;var e=t.i,n=new Js;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Jh(this,n),this.o=t.o}else t&&(e=String(t).match(fg))?(this.h=!1,fo(this,e[1]||"",!0),this.s=vs(e[2]||""),this.g=vs(e[3]||"",!0),po(this,e[4]),this.l=vs(e[5]||"",!0),Jh(this,e[6]||"",!0),this.o=vs(e[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Es(e,Xh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Es(e,Xh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Es(n,n.charAt(0)=="/"?Nw:Ow,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Es(n,Vw)),t.join("")};function ln(t){return new er(t)}function fo(t,e,n){t.j=n?vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function po(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jh(t,e,n){e instanceof Js?(t.i=e,xw(t.i,t.h)):(n||(e=Es(e,Dw)),t.i=new Js(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function sa(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Es(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kw),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kw(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xh=/[#\/\?@]/g,Ow=/[#\?:]/g,Nw=/[#\?]/g,Dw=/[#\?@]/g,Vw=/#/g;function Js(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Map,t.h=0,t.i&&bw(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Js.prototype;N.add=function(t,e){Un(this),this.i=null,t=rs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dg(t,e){Un(t),e=rs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function pg(t,e){return Un(t),e=rs(t,e),t.g.has(e)}N.forEach=function(t,e){Un(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){Un(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){Un(this);let e=[];if(typeof t=="string")pg(this,t)&&(e=e.concat(this.g.get(rs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Un(this),this.i=null,t=rs(this,t),pg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function gg(t,e,n){dg(t,e),0<n.length&&(t.i=null,t.g.set(rs(t,e),Sl(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function rs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xw(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(dg(this,r),gg(this,s,n))},t)),t.j=e}var Mw=class{constructor(t,e){this.g=t,this.map=e}};function mg(t){this.l=t||Lw,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Lw=10;function _g(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function yg(t){return t.h?1:t.g?t.g.size:0}function xc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $l(t,e){t.g?t.g.add(e):t.h=e}function vg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mg.prototype.cancel=function(){if(this.i=Eg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Eg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Sl(t.i)}var Fw=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function Uw(){this.g=new Fw}function $w(t,e,n){const r=n||"";try{hg(t,function(s,i){let o=s;hi(s)&&(o=Dl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Bw(t,e){const n=new Zo;if(W.Image){const r=new Image;r.onload=xi(Li,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xi(Li,n,r,"TestLoadImage: error",!1,e),r.onabort=xi(Li,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xi(Li,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Li(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ia(t){this.l=t.ec||null,this.j=t.ob||!1}Be(ia,Ll);ia.prototype.g=function(){return new oa(this.l,this.j)};ia.prototype.i=function(t){return function(){return t}}({});function oa(t,e){$e.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Bl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(oa,$e);var Bl=0;N=oa.prototype;N.open=function(t,e){if(this.readyState!=Bl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xs(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=Bl};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ig(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ig(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?_i(this):Xs(this),this.readyState==3&&Ig(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,_i(this))};N.Ya=function(t){this.g&&(this.response=t,_i(this))};N.ka=function(){this.g&&_i(this)};function _i(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xs(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var jw=W.JSON.parse;function be(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tg,this.L=this.M=!1}Be(be,$e);var Tg="",qw=/^https?$/i,Hw=["POST","PUT"];N=be.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Oc.g(),this.C=this.u?Yh(this.u):Yh(Oc),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Zh(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=Fp(Hw,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rg(this),0<this.B&&((this.L=zw(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Ml(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Zh(this,i)}};function zw(t){return jr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof Rl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function Zh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wg(t),aa(t)}function wg(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),aa(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),aa(this,!0)),be.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Ag(this):this.kb())};N.kb=function(){Ag(this)};function Ag(t){if(t.h&&typeof Rl<"u"&&(!t.C[1]||$t(t)!=4||t.da()!=2)){if(t.v&&$t(t)==4)Ml(t.La,0,t);else if(We(t,"readystatechange"),$t(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(fg)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),r=!qw.test(s?s.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var i=2<$t(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",wg(t)}}finally{aa(t)}}}}function aa(t,e){if(t.g){Rg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function Rg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function $t(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),jw(e)}};function ef(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Tg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Kw(t){const e={};t=(t.g&&2<=$t(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(zs(t[r]))continue;var n=_w(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}uw(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Sg(t){let e="";return Cl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function jl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Sg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pg(t){this.Ga=0,this.j=[],this.l=new Zo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ps("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ps("baseRetryDelayMs",5e3,t),this.hb=ps("retryDelaySeedMs",1e4,t),this.eb=ps("forwardChannelMaxRetries",2,t),this.xa=ps("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new mg(t&&t.concurrentRequestLimit),this.Ja=new Uw,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Pg.prototype;N.ra=8;N.H=1;function ql(t){if(Cg(t),t.H==3){var e=t.W++,n=ln(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),yi(t,n),e=new gi(t,t.l,e),e.L=2,e.A=sa(ln(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.A,n=!0),n||(e.g=Mg(e.l,null),e.g.ha(e.A)),e.G=Date.now(),mi(e)}Vg(t)}function ca(t){t.g&&(zl(t),t.g.cancel(),t.g=null)}function Cg(t){ca(t),t.u&&(W.clearTimeout(t.u),t.u=null),go(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function la(t){if(!_g(t.i)&&!t.m){t.m=!0;var e=t.Na;Ws||Yp(),Gs||(Ws(),Gs=!0),Vl.add(e,t),t.C=0}}function Ww(t,e){return yg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=di(rt(t.Na,t,e),Dg(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new gi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=jp(i),qp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=bg(this,s,e),n=ln(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),yi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Sg(i)))+"&"+e:this.o&&jl(n,this.o,i)),$l(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,Dc(s,n,null)):Dc(s,n,e),this.H=2}}else this.H==3&&(t?tf(this,t):this.j.length==0||_g(this.i)||tf(this))};function tf(t,e){var n;e?n=e.m:n=t.W++;const r=ln(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),yi(t,r),t.o&&t.s&&jl(r,t.o,t.s),n=new gi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=bg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),$l(t.i,n),Dc(n,r,e)}function yi(t,e){t.na&&Cl(t.na,function(n,r){Ae(e,r,n)}),t.h&&hg({},function(n,r){Ae(e,r,n)})}function bg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{$w(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function kg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ws||Yp(),Gs||(Ws(),Gs=!0),Vl.add(e,t),t.A=0}}function Hl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=di(rt(t.Ma,t),Dg(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,Og(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=di(rt(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),ca(this),Og(this))};function zl(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Og(t){t.g=new gi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ln(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),yi(t,e),t.o&&t.s&&jl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=sa(ln(e)),n.u=null,n.S=!0,ag(n,t)}N.ib=function(){this.v!=null&&(this.v=null,ca(this),Hl(this),lt(19))};function go(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Ng(t,e){var n=null;if(t.g==e){go(t),zl(t),t.g=null;var r=2}else if(xc(t.i,e))n=e.F,vg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=ea(),We(r,new ng(r,n)),la(t)}else kg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&Ww(t,e)||r==2&&Hl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function Dg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new er("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||fo(n,"https"),sa(n)),Bw(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),Vg(t),Cg(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function Vg(t){if(t.H=0,t.ma=[],t.h){const e=Eg(t.i);(e.length!=0||t.j.length!=0)&&(zh(t.ma,e),zh(t.ma,t.j),t.i.i.length=0,Sl(t.j),t.j.length=0),t.h.ya()}}function xg(t,e,n){var r=n instanceof er?ln(n):new er(n);if(r.g!="")e&&(r.g=e+"."+r.g),po(r,r.m);else{var s=W.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new er(null);r&&fo(i,r),e&&(i.g=e),s&&po(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),yi(t,r),r}function Mg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new be(new ia({ob:n})):new be(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Lg(){}N=Lg.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function mo(){if(jr&&!(10<=Number(ow)))throw Error("Environmental error: no available transport.")}mo.prototype.g=function(t,e){return new vt(t,e)};function vt(t,e){$e.call(this),this.g=new Pg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!zs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!zs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ss(this)}Be(vt,$e);vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=xg(t,null,t.Y),la(t)};vt.prototype.close=function(){ql(this.g)};vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dl(t),t=n);e.j.push(new Mw(e.fb++,t)),e.H==3&&la(e)};vt.prototype.N=function(){this.g.h=null,delete this.j,ql(this.g),delete this.g,vt.$.N.call(this)};function Fg(t){Fl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(Fg,Fl);function Ug(){Ul.call(this),this.status=1}Be(Ug,Ul);function ss(t){this.g=t}Be(ss,Lg);ss.prototype.Ba=function(){We(this.g,"a")};ss.prototype.Aa=function(t){We(this.g,new Fg(t))};ss.prototype.za=function(t){We(this.g,new Ug)};ss.prototype.ya=function(){We(this.g,"b")};function Gw(){this.blockSize=-1}function Ot(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(Ot,Gw);Ot.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ga(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ot.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ga(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ga(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ga(this,r),s=0;break}}this.h=s,this.i+=e};Ot.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Qw={};function Kl(t){return-128<=t&&128>t?rw(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return kr;if(0>t)return qe(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Mc;return new ge(e,0)}function $g(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qe($g(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=kr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var Mc=4294967296,kr=Kl(0),Lc=Kl(1),nf=Kl(16777216);N=ge.prototype;N.ea=function(){if(Tt(this))return-qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Mc+r)*e,e*=Mc}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(tn(this))return"0";if(Tt(this))return"-"+qe(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=yo(n,e).g;n=_o(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,tn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function tn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}N.X=function(t){return t=_o(this,t),Tt(t)?-1:tn(t)?0:1};function qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Lc)}N.abs=function(){return Tt(this)?qe(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function _o(t,e){return t.add(qe(e))}N.R=function(t){if(tn(this)||tn(t))return kr;if(Tt(this))return Tt(t)?qe(this).R(qe(t)):qe(qe(this).R(t));if(Tt(t))return qe(this.R(qe(t)));if(0>this.X(nf)&&0>t.X(nf))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Fi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Fi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Fi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Fi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function Fi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function gs(t,e){this.g=t,this.h=e}function yo(t,e){if(tn(e))throw Error("division by zero");if(tn(t))return new gs(kr,kr);if(Tt(t))return e=yo(qe(t),e),new gs(qe(e.g),qe(e.h));if(Tt(e))return e=yo(t,qe(e)),new gs(qe(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Lc,r=e;0>=r.X(t);)n=rf(n),r=rf(r);var s=yr(n,1),i=yr(r,1);for(r=yr(r,2),n=yr(n,2);!tn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=yr(r,1),n=yr(n,1)}return e=_o(t,s.R(e)),new gs(s,e)}for(s=kr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);Tt(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);tn(i)&&(i=Lc),s=s.add(i),t=_o(t,o)}return new gs(s,t)}N.gb=function(t){return yo(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function rf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ge(s,t.h)}mo.prototype.createWebChannel=mo.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;ta.NO_ERROR=0;ta.TIMEOUT=8;ta.HTTP_ERROR=6;rg.COMPLETE="complete";sg.EventType=pi;pi.OPEN="a";pi.CLOSE="b";pi.ERROR="c";pi.MESSAGE="d";$e.prototype.listen=$e.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;Ot.prototype.digest=Ot.prototype.l;Ot.prototype.reset=Ot.prototype.reset;Ot.prototype.update=Ot.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=Bt;ge.fromString=$g;var Yw=function(){return new mo},Jw=function(){return ea()},Qa=ta,Xw=rg,Zw=ur,sf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ui=sg,eA=be,tA=Ot,Or=ge;const of="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new Tl("@firebase/firestore");function ms(){return ir.logLevel}function L(t,...e){if(ir.logLevel<=ie.DEBUG){const n=e.map(Wl);ir.debug(`Firestore (${is}): ${t}`,...n)}}function un(t,...e){if(ir.logLevel<=ie.ERROR){const n=e.map(Wl);ir.error(`Firestore (${is}): ${t}`,...n)}}function qr(t,...e){if(ir.logLevel<=ie.WARN){const n=e.map(Wl);ir.warn(`Firestore (${is}): ${t}`,...n)}}function Wl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function Te(t,e){t||z()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class rA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sA{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new an;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new an,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new an)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new Bg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Ze(e)}}class iA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new iA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class aA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new aA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=lA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Me(0,0))}static max(){return new G(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Zs{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const uA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Zs{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return uA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new V(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new V(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Re.fromString(e))}static fromName(e){return new $(Re.fromString(e).popFirst(5))}static empty(){return new $(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Re(e.slice()))}}function hA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new xn(s,$.empty(),e)}function fA(t){return new xn(t.readTime,t.key,-1)}class xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xn(G.min(),$.empty(),-1)}static max(){return new xn(G.max(),$.empty(),-1)}}function dA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==pA)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ei(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Gl._e=-1;function ua(t){return t==null}function vo(t){return t===0&&1/t==-1/0}function mA(t){return typeof t=="number"&&Number.isInteger(t)&&!vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cf(this.data.getIterator())}getIteratorFrom(e){return new cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new Ge(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hg("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const _A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=_A.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yl(t){const e=t.mapValue.fields.__previous_value__;return Ql(e)?Yl(e):e}function ei(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ql(t)?4:vA(t)?9007199254740991:10:z()}function Qt(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ei(t).isEqual(ei(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Mn(s.timestampValue),a=Mn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return or(s.bytesValue).isEqual(or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),a=De(i.doubleValue);return o===a?vo(o)===vo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(af(o)!==af(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qt(o[c],a[c])))return!1;return!0}(t,e);default:return z()}}function ni(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function zr(t,e){if(t===e)return 0;const n=ar(t),r=ar(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=De(i.integerValue||i.doubleValue),c=De(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return lf(t.timestampValue,e.timestampValue);case 4:return lf(ei(t),ei(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=or(i),c=or(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ue(a[l],c[l]);if(u!==0)return u}return ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(De(i.latitude),De(o.latitude));return a!==0?a:ue(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=zr(a[l],c[l]);if(u)return u}return ue(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Bi.mapValue&&o===Bi.mapValue)return 0;if(i===Bi.mapValue)return 1;if(o===Bi.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ue(c[h],u[h]);if(f!==0)return f;const p=zr(a[c[h]],l[u[h]]);if(p!==0)return p}return ue(c.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function lf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Mn(t),r=Mn(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function Kr(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Mn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return $.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"}(t.mapValue):z()}function uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function Jl(t){return!!t&&"arrayValue"in t}function hf(t){return!!t&&"nullValue"in t}function ff(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gi(t){return!!t&&"mapValue"in t}function Os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Os(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(n)}setAll(e){let n=ze.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Os(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(Os(this.value))}}function zg(t){const e=[];return os(t.fields,(n,r)=>{const s=new ze([n]);if(Gi(r)){const i=zg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,G.min(),G.min(),G.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,G.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,G.min(),G.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,G.min(),G.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n){this.position=e,this.inclusive=n}}function df(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),n.key):r=zr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function EA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{}class Ve extends Kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TA(e,n,r):n==="array-contains"?new RA(e,r):n==="in"?new SA(e,r):n==="not-in"?new PA(e,r):n==="array-contains-any"?new CA(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wA(e,r):new AA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zr(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(zr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends Kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Nt(e,n)}matches(e){return Wg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Wg(t){return t.op==="and"}function Gg(t){return IA(t)&&Wg(t)}function IA(t){for(const e of t.filters)if(e instanceof Nt)return!1;return!0}function $c(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Kr(t.value);if(Gg(t))return t.filters.map(e=>$c(e)).join(",");{const e=t.filters.map(n=>$c(n)).join(",");return`${t.op}(${e})`}}function Qg(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(t,e):t instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Qg(o,s.filters[a]),!0):!1}(t,e):void z()}function Yg(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Kr(n.value)}`}(t):t instanceof Nt?function(n){return n.op.toString()+" {"+n.getFilters().map(Yg).join(" ,")+"}"}(t):"Filter"}class TA extends Ve{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class wA extends Ve{constructor(e,n){super(e,"in",n),this.keys=Jg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AA extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Jg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class RA extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jl(n)&&ni(n.arrayValue,this.value)}}class SA extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ni(this.value.arrayValue,n)}}class PA extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ni(this.value.arrayValue,n)}}class CA extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ni(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function gf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new bA(t,e,n,r,s,i,o)}function Xl(t){const e=X(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$c(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Kr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Kr(r)).join(",")),e.ce=n}return e.ce}function Zl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pf(t.startAt,e.startAt)&&pf(t.endAt,e.endAt)}function Bc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function kA(t,e,n,r,s,i,o,a){return new as(t,e,n,r,s,i,o,a)}function eu(t){return new as(t)}function mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xg(t){return t.collectionGroup!==null}function Ns(t){const e=X(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ri(i,r))}),n.has(ze.keyField().canonicalString())||e.le.push(new ri(ze.keyField(),r))}return e.le}function Ht(t){const e=X(t);return e.he||(e.he=OA(e,Ns(t))),e.he}function OA(t,e){if(t.limitType==="F")return gf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ri(s.field,i)});const n=t.endAt?new Eo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Eo(t.startAt.position,t.startAt.inclusive):null;return gf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jc(t,e){const n=t.filters.concat([e]);return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Io(t,e,n){return new as(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ha(t,e){return Zl(Ht(t),Ht(e))&&t.limitType===e.limitType}function Zg(t){return`${Xl(Ht(t))}|lt:${t.limitType}`}function Er(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Yg(s)).join(", ")}]`),ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Kr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Kr(s)).join(",")),`Target(${r})`}(Ht(t))}; limitType=${t.limitType})`}function fa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ns(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=df(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ns(r),s)||r.endAt&&!function(o,a,c){const l=df(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ns(r),s))}(t,e)}function NA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function em(t){return(e,n)=>{let r=!1;for(const s of Ns(t)){const i=DA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DA(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?zr(c,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return qg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new Ce($.comparator);function hn(){return VA}const tm=new Ce($.comparator);function Is(...t){let e=tm;for(const n of t)e=e.insert(n.key,n);return e}function nm(t){let e=tm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yn(){return Ds()}function rm(){return Ds()}function Ds(){return new cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const xA=new Ce($.comparator),MA=new Ge($.comparator);function se(...t){let e=MA;for(const n of t)e=e.add(n);return e}const LA=new Ge(ue);function FA(){return LA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vo(e)?"-0":e}}function im(t){return{integerValue:""+t}}function UA(t,e){return mA(e)?im(e):sm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this._=void 0}}function $A(t,e,n){return t instanceof To?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ql(i)&&(i=Yl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof si?am(t,e):t instanceof ii?cm(t,e):function(s,i){const o=om(s,i),a=_f(o)+_f(s.Ie);return Uc(o)&&Uc(s.Ie)?im(a):sm(s.serializer,a)}(t,e)}function BA(t,e,n){return t instanceof si?am(t,e):t instanceof ii?cm(t,e):n}function om(t,e){return t instanceof wo?function(r){return Uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class To extends da{}class si extends da{constructor(e){super(),this.elements=e}}function am(t,e){const n=lm(e);for(const r of t.elements)n.some(s=>Qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ii extends da{constructor(e){super(),this.elements=e}}function cm(t,e){let n=lm(e);for(const r of t.elements)n=n.filter(s=>!Qt(s,r));return{arrayValue:{values:n}}}class wo extends da{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function _f(t){return De(t.integerValue||t.doubleValue)}function lm(t){return Jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof si&&s instanceof si||r instanceof ii&&s instanceof ii?Hr(r.elements,s.elements,Qt):r instanceof wo&&s instanceof wo?Qt(r.Ie,s.Ie):r instanceof To&&s instanceof To}(t.transform,e.transform)}class qA{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pa{}function um(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fm(t.key,cn.none()):new Ii(t.key,t.data,cn.none());{const n=t.data,r=wt.empty();let s=new Ge(ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hr(t.key,r,new Ct(s.toArray()),cn.none())}}function HA(t,e,n){t instanceof Ii?function(s,i,o){const a=s.value.clone(),c=vf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(s,i,o){if(!Qi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=vf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(hm(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,r){return t instanceof Ii?function(i,o,a,c){if(!Qi(i.precondition,o))return a;const l=i.value.clone(),u=Ef(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,o,a,c){if(!Qi(i.precondition,o))return a;const l=Ef(i.fieldTransforms,c,o),u=o.data;return u.setAll(hm(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Qi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=om(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function yf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,o)=>jA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ii extends pa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hr extends pa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vf(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,BA(o,a,n[s]))}return r}function Ef(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$A(i,o,e))}return r}class fm extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KA extends pa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=rm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=um(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,r)=>yf(n,r))&&Hr(this.baseMutations,e.baseMutations,(n,r)=>yf(n,r))}}class tu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return xA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new tu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,oe;function YA(t){switch(t){default:return z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function dm(t){if(t===void 0)return un("GRPC error has no .code"),I.UNKNOWN;switch(t){case Ne.OK:return I.OK;case Ne.CANCELLED:return I.CANCELLED;case Ne.UNKNOWN:return I.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return I.INTERNAL;case Ne.UNAVAILABLE:return I.UNAVAILABLE;case Ne.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Ne.NOT_FOUND:return I.NOT_FOUND;case Ne.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Ne.ABORTED:return I.ABORTED;case Ne.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Ne.DATA_LOSS:return I.DATA_LOSS;default:return z()}}(oe=Ne||(Ne={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Or([4294967295,4294967295],0);function If(t){const e=JA().encode(t),n=new tA;return n.update(e),new Uint8Array(n.digest())}function Tf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Or([n,r],0),new Or([s,i],0)]}class nu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ts(`Invalid padding: ${n}`);if(r<0)throw new Ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Or.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Or.fromNumber(r)));return s.compare(XA)===1&&(s=new Or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=If(e),[r,s]=Tf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=If(e),[r,s]=Tf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ga(G.min(),s,new Ce(ue),hn(),se())}}class Ti{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ti(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class pm{constructor(e,n){this.targetId=e,this.fe=n}}class gm{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wf{constructor(){this.ge=0,this.pe=Rf(),this.ye=ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=se(),n=se(),r=se();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Ti(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Rf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Te(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class ZA{constructor(e){this.Le=e,this.ke=new Map,this.qe=hn(),this.Qe=Af(),this.Ke=new Ce(ue)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Bc(i))if(r===0){const o=new $(i.path);this.We(n,o,et.newNoDocument(o,G.min()))}else Te(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=or(r).toUint8Array()}catch(c){if(c instanceof Hg)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new nu(o,s,i)}catch(c){return qr(c instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Bc(a.target)){const c=new $(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,et.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=se();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new ga(e,n,this.Ke,this.qe,r);return this.qe=hn(),this.Qe=Af(),this.Ke=new Ce(ue),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new wf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ge(ue),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new wf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Af(){return new Ce($.comparator)}function Rf(){return new Ce($.comparator)}const e0={asc:"ASCENDING",desc:"DESCENDING"},t0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n0={and:"AND",or:"OR"};class r0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qc(t,e){return t.useProto3Json||ua(e)?e:{value:e}}function Ao(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function s0(t,e){return Ao(t,e.toTimestamp())}function zt(t){return Te(!!t),G.fromTimestamp(function(n){const r=Mn(n);return new Me(r.seconds,r.nanos)}(t))}function ru(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function _m(t){const e=Re.fromString(t);return Te(Im(e)),e}function Hc(t,e){return ru(t.databaseId,e.path)}function Ya(t,e){const n=_m(e);if(n.get(1)!==t.databaseId.projectId)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(ym(n))}function zc(t,e){return ru(t.databaseId,e)}function i0(t){const e=_m(t);return e.length===4?Re.emptyPath():ym(e)}function Kc(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ym(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Sf(t,e,n){return{name:Hc(t,e),fields:n.value.mapValue.fields}}function o0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Te(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:dm(l.code);return new V(u,l.message||"")}(o);n=new gm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ya(t,r.document.name),i=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):G.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Yi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ya(t,r.document),i=r.readTime?zt(r.readTime):G.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Yi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ya(t,r.document),i=r.removedTargetIds||[];n=new Yi([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new QA(s,i),a=r.targetId;n=new pm(a,o)}}return n}function a0(t,e){let n;if(e instanceof Ii)n={update:Sf(t,e.key,e.value)};else if(e instanceof fm)n={delete:Hc(t,e.key)};else if(e instanceof hr)n={update:Sf(t,e.key,e.data),updateMask:m0(e.fieldMask)};else{if(!(e instanceof KA))return z();n={verify:Hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof si)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ii)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:s0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function c0(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?zt(s.updateTime):zt(i);return o.isEqual(G.min())&&(o=zt(i)),new qA(o,s.transformResults||[])}(n,e))):[]}function l0(t,e){return{documents:[zc(t,e.path)]}}function u0(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Em(Nt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Ir(h.field),direction:d0(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=qc(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function h0(t){let e=i0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=vm(h);return f instanceof Nt&&Gg(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new ri(Tr(_.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,ua(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,p=h.values||[];return new Eo(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new Eo(p,f)}(n.endAt)),kA(e,s,o,i,a,"F",c,l)}function f0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Tr(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tr(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tr(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Tr(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Tr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nt.create(n.compositeFilter.filters.map(r=>vm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function d0(t){return e0[t]}function p0(t){return t0[t]}function g0(t){return n0[t]}function Ir(t){return{fieldPath:t.canonicalString()}}function Tr(t){return ze.fromServerFormat(t.fieldPath)}function Em(t){return t instanceof Ve?function(n){if(n.op==="=="){if(ff(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NAN"}};if(hf(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ff(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NAN"}};if(hf(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(n.field),op:p0(n.op),value:n.value}}}(t):t instanceof Nt?function(n){const r=n.getFilters().map(s=>Em(s));return r.length===1?r[0]:{compositeFilter:{op:g0(n.op),filters:r}}}(t):z()}function m0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Im(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,r,s,i=G.min(),o=G.min(),a=ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e){this.ut=e}}function y0(t){const e=h0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Io(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.on=new E0}addToCollectionParentIndex(e,n){return this.on.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(xn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class E0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Wr(0)}static Nn(){return new Wr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.changes=new cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Vs(r.mutation,s,Ct.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=Yn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Is();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hn();const o=Ds(),a=function(){return Ds()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof hr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Vs(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new T0(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ds();let s=new Ce((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ct.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=rm();u.forEach(f=>{if(!i.has(f)){const p=um(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return $.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Xg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Yn());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:nm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let s=Is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Is();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,f){return new as(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,et.newInvalidDocument(u)))});let a=Is();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Vs(u.mutation,l,Ct.empty(),Me.now()),fa(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:y0(s.bundledQuery),readTime:zt(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(){this.overlays=new Ce($.comparator),this.lr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yn();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Yn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Yn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GA(n,r));let i=this.lr.get(n);i===void 0&&(i=se(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(){this.hr=new Ge(Fe.Pr),this.Ir=new Ge(Fe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Fe(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new $(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new $(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=se();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return $.comparator(e.key,n.key)||ue(e.gr,n.gr)}static Tr(e,n){return ue(e.gr,n.gr)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ge(Fe.Pr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WA(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ue);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new $(i),0);let a=new Ge(ue);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),R.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Fe(n,0),s=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.Cr=e,this.docs=function(){return new Ce($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hn();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||dA(fA(u),r)<=0||(s.has(u.key)||fa(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){z()}vr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new C0(this)}getSize(e){return R.resolve(this.size)}}class C0 extends I0{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.persistence=e,this.Fr=new cs(n=>Xl(n),Zl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Mr=0,this.Or=new su,this.targetCount=0,this.Nr=Wr.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Wr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.kn(n),R.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Gl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new b0(this),this.indexManager=new v0,this.remoteDocumentCache=function(s){return new P0(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new _0(n),this.Kr=new A0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new R0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new S0(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new O0(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class O0 extends gA{constructor(e){super(),this.currentSequenceNumber=e}}class iu{constructor(e){this.persistence=e,this.Gr=new su,this.zr=null}static jr(e){return new iu(e)}get Hr(){if(this.zr)return this.zr;throw z()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const s=$.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,G.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ou(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new N0;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(ms()<=ie.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Er(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):(ms()<=ie.DEBUG&&L("QueryEngine","Query:",Er(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(ms()<=ie.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Er(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):R.resolve())}zi(e,n){if(mf(n))return R.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Io(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Io(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return mf(n)||s.isEqual(G.min())?R.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?R.resolve(null):(ms()<=ie.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Er(n)),this.Xi(e,o,n,hA(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ge(em(e));return n.forEach((s,i)=>{fa(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return ms()<=ie.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Er(n)),this.Gi.getDocumentsMatchingQuery(e,n,xn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ce(ue),this.ns=new cs(i=>Xl(i),Zl),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w0(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function x0(t,e,n,r){return new V0(t,e,n,r)}async function Tm(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function M0(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let p=R.resolve();return f.forEach(_=>{p=p.next(()=>u.getEntry(c,_)).next(v=>{const w=l.docVersions.get(_);Te(w!==null),v.version.compareTo(w)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=se();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wm(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function L0(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ot.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(v,w,C){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=hn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(F0(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(G.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function F0(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function U0(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $0(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Wc(t,e,n){const r=X(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ei(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Pf(t,e,n){const r=X(t);let s=G.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=X(c),f=h.ns.get(u);return f!==void 0?R.resolve(h.ts.get(f)):h.qr.getTargetData(l,u)}(r,o,Ht(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:G.min(),n?i:se())).next(a=>(B0(r,NA(e),a),{documents:a,ls:i})))}function B0(t,e,n){let r=t.rs.get(e)||G.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class Cf{constructor(){this.activeTargetIds=FA()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j0{constructor(){this.eo=new Cf,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji=null;function Ja(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class K0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Ja(),c=this.So(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=H0[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Ja();return new Promise((o,a)=>{const c=new eA;c.setWithCredentials(!0),c.listenOnce(Xw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qa.NO_ERROR:const u=c.getResponseJson();L(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Qa.TIMEOUT:L(Xe,`RPC '${e}' ${i} timed out`),a(new V(I.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const h=c.getStatus();if(L(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const _=function(w){const C=w.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(C)>=0?C:I.UNKNOWN}(p.status);a(new V(_,p.message))}else a(new V(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new V(I.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{L(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);L(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=Ja(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yw(),a=Jw(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");L(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const _=new z0({co:w=>{p?L(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(f||(L(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),L(Xe,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},lo:()=>h.close()}),v=(w,C,k)=>{w.listen(C,q=>{try{k(q)}catch(M){setTimeout(()=>{throw M},0)}})};return v(h,Ui.EventType.OPEN,()=>{p||L(Xe,`RPC '${e}' stream ${s} transport opened.`)}),v(h,Ui.EventType.CLOSE,()=>{p||(p=!0,L(Xe,`RPC '${e}' stream ${s} transport closed`),_.Ro())}),v(h,Ui.EventType.ERROR,w=>{p||(p=!0,qr(Xe,`RPC '${e}' stream ${s} transport errored:`,w),_.Ro(new V(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,Ui.EventType.MESSAGE,w=>{var C;if(!p){const k=w.data[0];Te(!!k);const q=k,M=q.error||((C=q[0])===null||C===void 0?void 0:C.error);if(M){L(Xe,`RPC '${e}' stream ${s} received error:`,M);const ee=M.status;let me=function(Z){const ve=Ne[Z];if(ve!==void 0)return dm(ve)}(ee),we=M.message;me===void 0&&(me=I.INTERNAL,we="Unknown error status: "+ee+" with message "+M.message),p=!0,_.Ro(new V(me,we)),h.close()}else L(Xe,`RPC '${e}' stream ${s} received:`,k),_.Vo(k)}}),v(a,Zw.STAT_EVENT,w=>{w.stat===sf.PROXY?L(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===sf.NOPROXY&&L(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function Xa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){return new r0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Am(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new V(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W0 extends Rm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=o0(this.serializer,e),r=function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?zt(o.readTime):G.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Kc(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Bc(c)?{documents:l0(i,c)}:{query:u0(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=mm(i,o.resumeToken);const l=qc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=Ao(i,o.snapshotVersion.toTimestamp());const l=qc(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=f0(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Kc(this.serializer),n.removeTarget=e,this.e_(n)}}class G0 extends Rm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=c0(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.I_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Kc(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>a0(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(I.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(I.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class Y0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(un(n),this.f_=!1):L("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{fr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=X(c);l.C_.add(4),await wi(l),l.M_.set("Unknown"),l.C_.delete(4),await _a(l)}(this))})}),this.M_=new Y0(r,s)}}async function _a(t){if(fr(t))for(const e of t.v_)await e(!0)}async function wi(t){for(const e of t.v_)await e(!1)}function Sm(t,e){const n=X(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),lu(n)?cu(n):ls(n).Ho()&&au(n,e))}function Pm(t,e){const n=X(t),r=ls(n);n.D_.delete(e),r.Ho()&&Cm(n,e),n.D_.size===0&&(r.Ho()?r.Zo():fr(n)&&n.M_.set("Unknown"))}function au(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ls(t).u_(e)}function Cm(t,e){t.x_.Oe(e),ls(t).c_(e)}function cu(t){t.x_=new ZA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ls(t).start(),t.M_.g_()}function lu(t){return fr(t)&&!ls(t).jo()&&t.D_.size>0}function fr(t){return X(t).C_.size===0}function bm(t){t.x_=void 0}async function X0(t){t.D_.forEach((e,n)=>{au(t,e)})}async function Z0(t,e){bm(t),lu(t)?(t.M_.w_(e),cu(t)):t.M_.set("Unknown")}async function eR(t,e,n){if(t.M_.set("Online"),e instanceof gm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ro(t,r)}else if(e instanceof Yi?t.x_.$e(e):e instanceof pm?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(G.min()))try{const r=await wm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),Cm(i,c);const h=new Rn(u.target,c,l,u.sequenceNumber);au(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Ro(t,r)}}async function Ro(t,e,n){if(!Ei(e))throw e;t.C_.add(1),await wi(t),t.M_.set("Offline"),n||(n=()=>wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await _a(t)})}function km(t,e){return e().catch(n=>Ro(t,n,e))}async function ya(t){const e=X(t),n=Ln(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;tR(e);)try{const s=await U0(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,nR(e,s)}catch(s){await Ro(e,s)}Om(e)&&Nm(e)}function tR(t){return fr(t)&&t.b_.length<10}function nR(t,e){t.b_.push(e);const n=Ln(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Om(t){return fr(t)&&!Ln(t).jo()&&t.b_.length>0}function Nm(t){Ln(t).start()}async function rR(t){Ln(t).E_()}async function sR(t){const e=Ln(t);for(const n of t.b_)e.P_(n.mutations)}async function iR(t,e,n){const r=t.b_.shift(),s=tu.from(r,e,n);await km(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ya(t)}async function oR(t,e){e&&Ln(t).h_&&await async function(r,s){if(function(o){return YA(o)&&o!==I.ABORTED}(s.code)){const i=r.b_.shift();Ln(r).Yo(),await km(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ya(r)}}(t,e),Om(t)&&Nm(t)}async function kf(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=fr(n);n.C_.add(3),await wi(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await _a(n)}async function aR(t,e){const n=X(t);e?(n.C_.delete(2),await _a(n)):e||(n.C_.add(2),await wi(n),n.M_.set("Unknown"))}function ls(t){return t.O_||(t.O_=function(n,r,s){const i=X(n);return i.A_(),new W0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:X0.bind(null,t),Io:Z0.bind(null,t),a_:eR.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),lu(t)?cu(t):t.M_.set("Unknown")):(await t.O_.stop(),bm(t))})),t.O_}function Ln(t){return t.N_||(t.N_=function(n,r,s){const i=X(n);return i.A_(),new G0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:rR.bind(null,t),Io:oR.bind(null,t),T_:sR.bind(null,t),I_:iR.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await ya(t)):(await t.N_.stop(),t.b_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new an,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new uu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hu(t,e){if(un("AsyncQueue",`${e}: ${t}`),Ei(t))return new V(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=Is(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.B_=new Ce($.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):z():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Gr(e,n,Nr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.k_=void 0,this.listeners=[]}}class lR{constructor(){this.queries=new cs(e=>Zg(e),ha),this.onlineState="Unknown",this.q_=new Set}}async function Dm(t,e){const n=X(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new cR),s)try{i.k_=await n.onListen(r)}catch(o){const a=hu(o,`Initialization of query '${Er(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&fu(n)}async function Vm(t,e){const n=X(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function uR(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&fu(n)}function hR(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function fu(t){t.q_.forEach(e=>{e.next()})}class xm{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.key=e}}class Lm{constructor(e){this.key=e}}class fR{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=se(),this.mutatedKeys=se(),this._a=em(e),this.aa=new Nr(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Of,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=fa(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?_!==v&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,_){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return v(p)-v(_)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Gr(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Of,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=se(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new Lm(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Mm(r))}),n}da(e){this.ia=e.ls,this.oa=se();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Gr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class dR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pR{constructor(e){this.key=e,this.Ra=!1}}class gR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new cs(a=>Zg(a),ha),this.fa=new Map,this.ga=new Set,this.pa=new Ce($.comparator),this.ya=new Map,this.wa=new su,this.Sa={},this.ba=new Map,this.Da=Wr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function mR(t,e){const n=SR(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await $0(n.localStore,Ht(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await _R(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Sm(n.remoteStore,o)}return s}async function _R(t,e,n,r,s){t.va=(h,f,p)=>async function(v,w,C,k){let q=w.view.ca(C);q.Zi&&(q=await Pf(v.localStore,w.query,!1).then(({documents:we})=>w.view.ca(we,q)));const M=k&&k.targetChanges.get(w.targetId),ee=k&&k.targetMismatches.get(w.targetId)!=null,me=w.view.applyChanges(q,v.isPrimaryClient,M,ee);return Df(v,w.targetId,me.Ta),me.snapshot}(t,h,f,p);const i=await Pf(t.localStore,e,!0),o=new fR(e,i.ls),a=o.ca(i.documents),c=Ti.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Df(t,n,l.Ta);const u=new dR(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function yR(t,e){const n=X(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!ha(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Pm(n.remoteStore,r.targetId),Gc(n,r.targetId)}).catch(vi)):(Gc(n,r.targetId),await Wc(n.localStore,r.targetId,!0))}async function vR(t,e,n){const r=PR(t);try{const s=await function(o,a){const c=X(o),l=Me.now(),u=a.reduce((p,_)=>p.add(_.key),se());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let _=hn(),v=se();return c.ss.getEntries(p,u).next(w=>{_=w,_.forEach((C,k)=>{k.isValidDocument()||(v=v.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,_)).next(w=>{h=w;const C=[];for(const k of a){const q=zA(k,h.get(k.key).overlayedDocument);q!=null&&C.push(new hr(k.key,q,zg(q.value.mapValue),cn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,C,a)}).next(w=>{f=w;const C=w.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(p,w.batchId,C)})}).then(()=>({batchId:f.batchId,changes:nm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Ce(ue)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ai(r,s.changes),await ya(r.remoteStore)}catch(s){const i=hu(s,"Failed to persist write");n.reject(i)}}async function Fm(t,e){const n=X(t);try{const r=await L0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Te(o.Ra):s.removedDocuments.size>0&&(Te(o.Ra),o.Ra=!1))}),await Ai(n,r,e)}catch(r){await vi(r)}}function Nf(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=X(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(l=!0)}),l&&fu(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ER(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Ce($.comparator);o=o.insert(i,et.newNoDocument(i,G.min()));const a=se().add(i),c=new ga(G.min(),new Map,new Ce(ue),o,a);await Fm(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),du(r)}else await Wc(r.localStore,e,!1).then(()=>Gc(r,e,n)).catch(vi)}async function IR(t,e){const n=X(t),r=e.batch.batchId;try{const s=await M0(n.localStore,e);$m(n,r,null),Um(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ai(n,s)}catch(s){await vi(s)}}async function TR(t,e,n){const r=X(t);try{const s=await function(o,a){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Te(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);$m(r,e,n),Um(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ai(r,s)}catch(s){await vi(s)}}function Um(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function $m(t,e,n){const r=X(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function Gc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||Bm(t,r)})}function Bm(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Pm(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),du(t))}function Df(t,e,n){for(const r of n)r instanceof Mm?(t.wa.addReference(r.key,e),wR(t,r)):r instanceof Lm?(L("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Bm(t,r.key)):z()}function wR(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ga.add(r),du(t))}function du(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new $(Re.fromString(e)),r=t.Da.next();t.ya.set(r,new pR(n)),t.pa=t.pa.insert(n,r),Sm(t.remoteStore,new Rn(Ht(eu(n.path)),r,"TargetPurposeLimboResolution",Gl._e))}}async function Ai(t,e,n){const r=X(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=ou.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=X(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,f=>R.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>R.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Ei(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=u.ts.get(f),_=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(f,v)}}}(r.localStore,i))}async function AR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await Tm(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new V(I.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ai(n,r._s)}}function RR(t,e){const n=X(t),r=n.ya.get(e);if(r&&r.Ra)return se().add(r.key);{let s=se();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function SR(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ER.bind(null,e),e.Va.a_=uR.bind(null,e.eventManager),e.Va.Fa=hR.bind(null,e.eventManager),e}function PR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TR.bind(null,e),e}class Vf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ma(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return x0(this.persistence,new D0,e.initialUser,this.serializer)}createPersistence(e){return new k0(iu.jr,this.serializer)}createSharedClientState(e){return new j0}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AR.bind(null,this.syncEngine),await aR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lR}()}createDatastore(e){const n=ma(e.databaseInfo.databaseId),r=function(i){return new K0(i)}(e.databaseInfo);return function(i,o,a,c){return new Q0(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new J0(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Nf(this.syncEngine,n,0),function(){return bf.D()?new bf:new q0}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new gR(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=X(n);L("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await wi(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=jg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new an;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Za(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OR(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>kf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>kf(e.remoteStore,i)),t._onlineComponents=e}function kR(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function OR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Za(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kR(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await Za(t,new Vf)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Za(t,new Vf);return t._offlineComponents}async function qm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await xf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await xf(t,new CR))),t._onlineComponents}function NR(t){return qm(t).then(e=>e.syncEngine)}async function Hm(t){const e=await qm(t),n=e.eventManager;return n.onListen=mR.bind(null,e.syncEngine),n.onUnlisten=yR.bind(null,e.syncEngine),n}function DR(t,e,n={}){const r=new an;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new jm({next:f=>{o.enqueueAndForget(()=>Vm(i,h));const p=f.docs.has(a);!p&&f.fromCache?l.reject(new V(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&c&&c.source==="server"?l.reject(new V(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new xm(eu(a.path),u,{includeMetadataChanges:!0,J_:!0});return Dm(i,h)}(await Hm(t),t.asyncQueue,e,n,r)),r.promise}function VR(t,e,n={}){const r=new an;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new jm({next:f=>{o.enqueueAndForget(()=>Vm(i,h)),f.fromCache&&c.source==="server"?l.reject(new V(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new xm(a,u,{includeMetadataChanges:!0,J_:!0});return Dm(i,h)}(await Hm(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e,n){if(!n)throw new V(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xR(t,e,n,r){if(e===!0&&r===!0)throw new V(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lf(t){if(!$.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ff(t){if($.isDocumentKey(t))throw new V(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function va(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function cr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=va(t);throw new V(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function MR(t,e){if(e<=0)throw new V(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nA;switch(r.type){case"firstParty":return new oA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mf.get(n);r&&(L("ComponentProvider","Removing Datastore"),Mf.delete(n),r.terminate())}(this),Promise.resolve()}}function LR(t,e,n,r={}){var s;const i=(t=cr(t,Ea))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=OI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new V(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new rA(new Bg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $n(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new On(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class On extends $n{constructor(e,n,r){super(e,n,eu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new $(e))}withConverter(e){return new On(this.firestore,e,this._path)}}function FR(t,e,...n){if(t=pt(t),Km("collection","path",e),t instanceof Ea){const r=Re.fromString(e,...n);return Ff(r),new On(t,null,r)}{if(!(t instanceof ft||t instanceof On))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Ff(r),new On(t.firestore,null,r)}}function Wm(t,e,...n){if(t=pt(t),arguments.length===1&&(e=jg.newId()),Km("doc","path",e),t instanceof Ea){const r=Re.fromString(e,...n);return Lf(r),new ft(t,null,new $(r))}{if(!(t instanceof ft||t instanceof On))throw new V(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Lf(r),new ft(t.firestore,t instanceof On?t.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Am(this,"async_queue_retry"),this.iu=()=>{const n=Xa();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Xa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Xa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new an;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ei(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=uu.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&z()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Ia extends Ea{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new UR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gm(this),this._firestoreClient.terminate()}}function $R(t,e){const n=typeof t=="object"?t:xp(),r=typeof t=="string"?t:e||"(default)",s=Al(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bI("firestore");i&&LR(s,...i)}return s}function pu(t){return t._firestoreClient||Gm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gm(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new yA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,zm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new bR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qr(ot.fromBase64String(e))}catch(n){throw new V(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qr(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=/^__.*__$/;class jR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ii(e,this.data,n,this.fieldTransforms)}}function Ym(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class _u{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new _u(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return So(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Ym(this.Iu)&&BR.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class qR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ma(e)}pu(e,n,r,s=!1){return new _u({Iu:e,methodName:n,gu:r,path:ze.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jm(t){const e=t._freezeSettings(),n=ma(t._databaseId);return new qR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HR(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);e_("Data must be an object, but it was:",o,r);const a=Xm(r,o);let c,l;if(i.merge)c=new Ct(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=KR(e,h,n);if(!o.contains(f))throw new V(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);GR(u,f)||u.push(f)}c=new Ct(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jR(new wt(a),c,l)}function zR(t,e,n,r=!1){return yu(n,t.pu(r?4:3,e))}function yu(t,e){if(Zm(t=pt(t)))return e_("Unsupported field value:",e,t),Xm(t,e);if(t instanceof Qm)return function(r,s){if(!Ym(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=yu(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Ao(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ao(s.serializer,i)}}if(r instanceof mu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qr)return{bytesValue:mm(s.serializer,r._byteString)};if(r instanceof ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ru(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${va(r)}`)}(t,e)}function Xm(t,e){const n={};return qg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=yu(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Zm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof mu||t instanceof Qr||t instanceof ft||t instanceof Qm)}function e_(t,e,n){if(!Zm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=va(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function KR(t,e,n){if((e=pt(e))instanceof gu)return e._internalPath;if(typeof e=="string")return t_(t,e);throw So("Field path arguments must be of type string or ",t,!1,void 0,n)}const WR=new RegExp("[~\\*/\\[\\]]");function t_(t,e,n){if(e.search(WR)>=0)throw So(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gu(...e.split("."))._internalPath}catch{throw So(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function So(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new V(I.INVALID_ARGUMENT,a+t+c)}function GR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QR extends n_{data(){return super.data()}}function vu(t,e){return typeof e=="string"?t_(t,e):e instanceof gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eu{}class Iu extends Eu{}function ec(t,e,...n){let r=[];e instanceof Eu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof wu).length,a=i.filter(c=>c instanceof Tu).length;if(o>1||o>0&&a>0)throw new V(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Tu extends Iu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Tu(e,n,r)}_apply(e){const n=this._parse(e);return r_(e._query,n),new $n(e.firestore,e.converter,jc(e._query,n))}_parse(e){const n=Jm(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new V(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Bf(h,u);const p=[];for(const _ of h)p.push($f(c,i,_));f={arrayValue:{values:p}}}else f=$f(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Bf(h,u),f=zR(a,o,h,u==="in"||u==="not-in");return Ve.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class wu extends Eu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)r_(o,c),o=jc(o,c)}(e._query,n),new $n(e.firestore,e.converter,jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Au extends Iu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Au(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new V(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ri(i,o)}(e._query,this._field,this._direction);return new $n(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new as(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function JR(t,e="asc"){const n=e,r=vu("orderBy",t);return Au._create(r,n)}class Ru extends Iu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ru(e,n,r)}_apply(e){return new $n(e.firestore,e.converter,Io(e._query,this._limit,this._limitType))}}function XR(t){return MR("limit",t),Ru._create("limit",t,"F")}function $f(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new V(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xg(e)&&n.indexOf("/")!==-1)throw new V(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!$.isDocumentKey(r))throw new V(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uf(t,new $(r))}if(n instanceof ft)return uf(t,n._key);throw new V(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${va(n)}.`)}function Bf(t,e){if(!Array.isArray(t)||t.length===0)throw new V(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function r_(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ZR{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new mu(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ei(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Te(Im(r));const s=new ti(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s_ extends n_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ji extends s_{data(e={}){return super.data(e)}}class tS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ji(this._firestore,this._userDataWriter,r.key,r,new ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ji(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ws(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ji(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ws(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:nS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t){t=cr(t,ft);const e=cr(t.firestore,Ia);return DR(pu(e),t._key).then(n=>aS(e,t,n))}class i_ extends ZR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function sS(t){t=cr(t,$n);const e=cr(t.firestore,Ia),n=pu(e),r=new i_(e);return YR(t._query),VR(n,t._query).then(s=>new tS(e,r,t,s))}function iS(t,e,n){t=cr(t,ft);const r=cr(t.firestore,Ia),s=eS(t.converter,e,n);return oS(r,[HR(Jm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,cn.none())])}function oS(t,e){return function(r,s){const i=new an;return r.asyncQueue.enqueueAndForget(async()=>vR(await NR(r),s,i)),i.promise}(pu(t),e)}function aS(t,e,n){const r=n.docs.get(e._key),s=new i_(t);return new s_(t,s,e._key,r,new ws(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){is=s})(ns),Br(new rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ia(new sA(r.getProvider("auth-internal")),new cA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new V(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),kn(of,"4.4.0",e),kn(of,"4.4.0","esm2017")})();var cS="firebase",lS="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(cS,lS,"app");const uS={apiKey:"AIzaSyAkh0L7wM4gHeKPUcJsVoEUA6LM15YmAMg",authDomain:"whales-in-space.firebaseapp.com",databaseURL:"https://whales-in-space-default-rtdb.europe-west1.firebasedatabase.app",projectId:"whales-in-space",storageBucket:"whales-in-space.appspot.com",messagingSenderId:"179235874964",appId:"1:179235874964:web:f8f60a1d6571b46be4ec81"},o_=Vp(uS);function a_(t){return localStorage.getItem(t)}function c_(t,e){localStorage.setItem(t,e)}function jf(t){localStorage.removeItem(t)}const Su=$R(o_);async function hS(t,e,n={}){const{cache:r=!0}=n,s=t+"-"+e,i=a_(s);if(i)return JSON.parse(i);const o=Wm(Su,t,e),c=(await rS(o)).data();return r&&c_(s,JSON.stringify(c)),c}async function qf(t,e={}){const{cache:n=!0,order:r=[],limitTo:s}=e,i=a_(t);if(i)return JSON.parse(i);const o=FR(Su,t);let a=ec(o);r.length&&(a=ec(a,JR(...r))),s&&(a=ec(a,XR(s)));const c=await fS(a);return n&&c_(t,JSON.stringify(c)),c}async function fS(t){const e=await sS(t),n=[];return e.forEach(r=>{n.push({docid:r.id,...r.data()})}),console.log("loaded ",new TextEncoder().encode(JSON.stringify(n)).length/1e3," kb"),n}async function qi(t,e,n){const r=await iS(Wm(Su,t,e),n);console.log(r)}const Hf="Pokemoncards",Pu=dp("pokemonTCG",()=>{const t=yt(null),e=yt({});async function n(){const s=["releaseDate","desc"];return t.value=await qf(Hf,{order:s}),t}async function r(s){if(!e.value[s]){const i=Hf+"/"+s+"/cards";e.value[s]=await qf(i)}return e.value[s]}return{series:t,cards:e,loadSeries:n,loadCardsForSeries:r}}),At=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},dS={};function pS(t,e){const n=jy("RouterLink");return te(),he("main",null,[Ie(n,{to:"/"},{default:Ft(()=>[Bs("Home")]),_:1}),Ie(n,{to:"/challenges"},{default:Ft(()=>[Bs("Challenge")]),_:1})])}const gS=At(dS,[["render",pS],["__scopeId","data-v-3ff8f825"]]);function Cu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function l_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mS=l_,u_=new li("auth","Firebase",l_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Tl("@firebase/auth");function _S(t,...e){Po.logLevel<=ie.WARN&&Po.warn(`Auth (${ns}): ${t}`,...e)}function Xi(t,...e){Po.logLevel<=ie.ERROR&&Po.error(`Auth (${ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw bu(t,...e)}function Kt(t,...e){return bu(t,...e)}function h_(t,e,n){const r=Object.assign(Object.assign({},mS()),{[e]:n});return new li("auth","Firebase",r).create(e,{appName:t.name})}function yS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),h_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u_.create(t,...e)}function Q(t,e,...n){if(!t)throw bu(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xi(e),new Error(e)}function fn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vS(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vS()||DI()||"connection"in navigator)?navigator.onLine:!0}function IS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=NI()||VI()}get(){return ES()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=new Ri(3e4,6e4);function Ou(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function us(t,e,n,r,s={}){return d_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ui(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),f_.fetch()(p_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function d_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TS),e);try{const s=new RS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw h_(t,u,l);Yt(t,u)}}catch(s){if(s instanceof pn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function AS(t,e,n,r,s={}){const i=await us(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function p_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ku(t.config,s):`${t.config.apiScheme}://${s}`}class RS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),wS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Kt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function PS(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CS(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=Nu(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xs(tc(s.auth_time)),issuedAtTime:xs(tc(s.iat)),expirationTime:xs(tc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function Nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cp(n);return s?JSON.parse(s):(Xi("Failed to decode base64 JWT payload"),null)}catch(s){return Xi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bS(t){const e=Nu(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&kS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oi(t,PS(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?VS(i.providerUserInfo):[],a=DS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new g_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function NS(t){const e=pt(t);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function VS(t){return t.map(e=>{var{providerId:n}=e,r=Cu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){const n=await d_(t,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=p_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",f_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MS(t,e){return us(t,"POST","/v2/accounts:revokeToken",Ou(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ai;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new g_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CS(this,e)}reload(){return NS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oi(this,SS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:M,isAnonymous:ee,providerData:me,stsTokenManager:we}=n;Q(q&&we,e,"internal-error");const ne=ai.fromJSON(this.name,we);Q(typeof q=="string",e,"internal-error"),yn(h,e.name),yn(f,e.name),Q(typeof M=="boolean",e,"internal-error"),Q(typeof ee=="boolean",e,"internal-error"),yn(p,e.name),yn(_,e.name),yn(v,e.name),yn(w,e.name),yn(C,e.name),yn(k,e.name);const Z=new tr({uid:q,auth:e,email:f,emailVerified:M,displayName:h,isAnonymous:ee,photoURL:_,phoneNumber:p,tenantId:v,stsTokenManager:ne,createdAt:C,lastLoginAt:k});return me&&Array.isArray(me)&&(Z.providerData=me.map(ve=>Object.assign({},ve))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(e,n,r=!1){const s=new ai;s.updateFromServerResponse(n);const i=new tr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Co(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Map;function rn(t){fn(t instanceof Function,"Expected a class definition");let e=Kf.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m_.type="NONE";const Wf=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dr(rn(Wf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rn(Wf);const o=Zi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=tr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Dr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Dr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(__(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I_(e))return"Blackberry";if(T_(e))return"Webos";if(Du(e))return"Safari";if((e.includes("chrome/")||y_(e))&&!e.includes("edge/"))return"Chrome";if(E_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function __(t=it()){return/firefox\//i.test(t)}function Du(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y_(t=it()){return/crios\//i.test(t)}function v_(t=it()){return/iemobile/i.test(t)}function E_(t=it()){return/android/i.test(t)}function I_(t=it()){return/blackberry/i.test(t)}function T_(t=it()){return/webos/i.test(t)}function Ta(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LS(t=it()){var e;return Ta(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FS(){return xI()&&document.documentMode===10}function w_(t=it()){return Ta(t)||E_(t)||T_(t)||I_(t)||/windows phone/i.test(t)||v_(t)}function US(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e=[]){let n;switch(t){case"Browser":n=Gf(it());break;case"Worker":n=`${Gf(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t,e={}){return us(t,"GET","/v2/passwordPolicy",Ou(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=6;class qS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qf(this),this.idTokenSubscription=new Qf(this),this.beforeStateQueue=new $S(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BS(this),n=new qS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_S(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wa(t){return pt(t)}class Qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function KS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zS().appendChild(r)})}function WS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t,e){const n=Al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(uo(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function QS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YS(t,e,n){const r=wa(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=R_(e),{host:o,port:a}=JS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||XS()}function R_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JS(t){const e=R_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yf(o)}}}function Yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e){return AS(t,"POST","/v1/accounts:signInWithIdp",Ou(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="http://localhost";class lr extends S_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new lr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vr(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends Vu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Si{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Si{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Si{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return An.credential(n,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tr._fromIdTokenResponse(e,r,s),o=Jf(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jf(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bo(e,n,r,s)}}function P_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(t,i,e,r):i})}async function eP(t,e,n=!1){const r=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await oi(t,P_(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=Nu(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e,n=!1){const r="signIn",s=await P_(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function rP(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function sP(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function iP(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}function oP(t){return pt(t).signOut()}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(){const t=it();return Du(t)||Ta(t)}const cP=1e3,lP=10;class b_ extends C_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aP()&&US(),this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);FS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}b_.type="LOCAL";const uP=b_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends C_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k_.type="SESSION";const O_=k_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await hP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=xu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function dP(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function pP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mP(){return N_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="firebaseLocalStorageDb",_P=1,Oo="firebaseLocalStorage",V_="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ra(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function yP(){const t=indexedDB.deleteDatabase(D_);return new Pi(t).toPromise()}function Yc(){const t=indexedDB.open(D_,_P);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Oo,{keyPath:V_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await yP(),e(await Yc()))})})}async function Xf(t,e,n){const r=Ra(t,!0).put({[V_]:e,value:n});return new Pi(r).toPromise()}async function vP(t,e){const n=Ra(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function Zf(t,e){const n=Ra(t,!0).delete(e);return new Pi(n).toPromise()}const EP=800,IP=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>IP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(mP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pP(),!this.activeServiceWorker)return;this.sender=new fP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await Xf(e,ko,"1"),await Zf(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const TP=x_;new Ri(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t,e){return e?rn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends S_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wP(t){return nP(t.auth,new Mu(t),t.bypassAuthState)}function AP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tP(n,new Mu(t),t.bypassAuthState)}async function RP(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),eP(n,new Mu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wP;case"linkViaPopup":case"linkViaRedirect":return RP;case"reauthViaPopup":case"reauthViaRedirect":return AP;default:Yt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=new Ri(2e3,1e4);async function PP(t,e,n){const r=wa(t);yS(t,e,Vu);const s=M_(r,n);return new Jn(r,"signInViaPopup",e,s).executeNotNull()}class Jn extends L_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SP.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="pendingRedirect",eo=new Map;class bP extends L_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=eo.get(this.auth._key());if(!e){try{const r=await kP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}eo.set(this.auth._key(),e)}return this.bypassAuthState||eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kP(t,e){const n=DP(e),r=NP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OP(t,e){eo.set(t._key(),e)}function NP(t){return rn(t._redirectPersistence)}function DP(t){return Zi(CP,t.config.apiKey,t.name)}async function VP(t,e,n=!1){const r=wa(t),s=M_(r,e),o=await new bP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=10*60*1e3;class MP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(e))}saveEventToCache(e){this.cachedEventUids.add(ed(e)),this.lastProcessedEventTime=Date.now()}}function ed(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e={}){return us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$P=/^https?/;async function BP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FP(t);for(const n of e)try{if(jP(n))return}catch{}Yt(t,"unauthorized-domain")}function jP(t){const e=Qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$P.test(n))return!1;if(UP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=new Ri(3e4,6e4);function td(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HP(t){return new Promise((e,n)=>{var r,s,i;function o(){td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{td(),n(Kt(t,"network-request-failed"))},timeout:qP.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=WS("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},KS(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw to=null,e})}let to=null;function zP(t){return to=to||HP(t),to}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=new Ri(5e3,15e3),WP="__/auth/iframe",GP="emulator/auth/iframe",QP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JP(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ku(e,GP):`https://${t.config.authDomain}/${WP}`,r={apiKey:e.apiKey,appName:t.name,v:ns},s=YP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ui(r).slice(1)}`}async function XP(t){const e=await zP(t),n=Wt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:JP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},KP.get());function c(){Wt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eC=500,tC=600,nC="_blank",rC="http://localhost";class nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sC(t,e,n,r=eC,s=tC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ZP),{width:r.toString(),height:s.toString(),top:i,left:o}),l=it().toLowerCase();n&&(a=y_(l)?nC:n),__(l)&&(e=e||rC,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(LS(l)&&a!=="_self")return iC(e||"",a),new nd(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new nd(h)}function iC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="__/auth/handler",aC="emulator/auth/handler",cC=encodeURIComponent("fac");async function rd(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:s};if(e instanceof Vu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Si){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${cC}=${encodeURIComponent(c)}`:"";return`${lC(t)}?${ui(a).slice(1)}${l}`}function lC({config:t}){return t.emulator?ku(t,aC):`https://${t.authDomain}/${oC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="webStorageSupport";class uC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O_,this._completeRedirectFn=VP,this._overrideRedirectResult=OP}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rd(e,n,r,Qc(),s);return sC(e,o,xu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rd(e,n,r,Qc(),s);return dP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XP(e),r=new MP(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nc,{type:nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nc];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return w_()||Du()||Ta()}}const hC=uC;var sd="@firebase/auth",id="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pC(t){Br(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(t)},l=new HS(r,s,i,c);return QS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new rr("auth-internal",e=>{const n=wa(e.getProvider("auth").getImmediate());return(r=>new fC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(sd,id,dC(t)),kn(sd,id,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=5*60,mC=Op("authIdTokenMaxAge")||gC;let od=null;const _C=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mC)return;const s=n==null?void 0:n.token;od!==s&&(od=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yC(t=xp()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GS(t,{popupRedirectResolver:hC,persistence:[TP,uP,O_]}),r=Op("authTokenSyncURL");if(r){const i=_C(r);sP(n,i,()=>i(n.currentUser)),rP(n,o=>i(o))}const s=bp("auth");return s&&YS(n,`http://${s}`),n}pC("Browser");const Lu=yC(o_),vC=[];iP(Lu,t=>{let{user:e}=Ko(El());t?e.value=t:e.value=null,vC.forEach(n=>n(t))});function EC(){const t=new en;PP(Lu,t).catch(e=>console.warn(e))}function IC(){oP(Lu)}const TC={class:"login"},wC={key:0},AC={key:1},RC={__name:"Login",setup(t){const{user:e}=Ko(El());function n(){e.value?IC():EC()}return(r,s)=>(te(),he("main",TC,[H("button",{onClick:n},[ct(e)?(te(),he("span",AC,"Logout")):(te(),he("span",wC,"Login"))])]))}},SC=At(RC,[["__scopeId","data-v-d9744377"]]),PC={class:"details"},CC={class:"title"},bC={key:0,class:"title-wrapper"},kC={key:1},OC={__name:"Details",props:{title:{type:String,default:""}},setup(t){const e=ov();return(n,r)=>(te(),he("details",PC,[H("summary",CC,[ct(e).title?(te(),he("div",bC,[Ar(n.$slots,"title",{},void 0,!0)])):(te(),he("span",kC,tt(t.title),1))]),Ar(n.$slots,"default",{},void 0,!0)]))}},U_=At(OC,[["__scopeId","data-v-2762098a"]]),Bn=t=>(Ud("data-v-92d385b5"),t=t(),$d(),t),NC={key:0,class:"lds-ellipsis"},DC=Bn(()=>H("div",null,null,-1)),VC=Bn(()=>H("div",null,null,-1)),xC=Bn(()=>H("div",null,null,-1)),MC=Bn(()=>H("div",null,null,-1)),LC=[DC,VC,xC,MC],FC={key:1,class:"lds-ring"},UC=Bn(()=>H("div",null,null,-1)),$C=Bn(()=>H("div",null,null,-1)),BC=Bn(()=>H("div",null,null,-1)),jC=Bn(()=>H("div",null,null,-1)),qC=[UC,$C,BC,jC],HC={__name:"Loader",props:{variant:{type:String,default:"ellipsis"}},setup(t){return(e,n)=>t.variant=="ellipsis"?(te(),he("div",NC,LC)):t.variant=="ring"?(te(),he("div",FC,qC)):pc("",!0)}},zC=At(HC,[["__scopeId","data-v-92d385b5"]]),KC={},WC={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1rem"},GC=H("title",null,"home",-1),QC=H("path",{d:"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"},null,-1),YC=[GC,QC];function JC(t,e){return te(),he("svg",WC,YC)}const XC=At(KC,[["render",JC]]),ZC={},eb={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1rem"},tb=H("title",null,"sync",-1),nb=H("path",{d:"M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z"},null,-1),rb=[tb,nb];function sb(t,e){return te(),he("svg",eb,rb)}const rc=At(ZC,[["render",sb]]),ib={},ob={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1rem"},ab=H("title",null,"close",-1),cb=H("path",{d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"},null,-1),lb=[ab,cb];function ub(t,e){return te(),he("svg",ob,lb)}const hb=At(ib,[["render",ub]]),fb={class:"title"},db={method:"dialog"},pb={__name:"Dialog",setup(t){const e=yt(null);function n(){e.value.showModal()}return(r,s)=>(te(),he(Ue,null,[H("button",{onClick:n},[Ar(r.$slots,"activator",{},void 0,!0)]),H("dialog",{ref_key:"dialog",ref:e},[H("header",null,[H("div",fb,[Ar(r.$slots,"title",{},void 0,!0)]),H("form",db,[H("button",null,[Ie(hb,{width:"24px"})])])]),H("main",null,[Ar(r.$slots,"default",{},void 0,!0)]),H("footer",null,[Ar(r.$slots,"footer",{},void 0,!0)])],512)],64))}},gb=At(pb,[["__scopeId","data-v-b0b93a63"]]),mb={class:"date"},_b={__name:"Date",props:{value:{type:[Date,String],default:null},time:{type:Boolean,default:!1},datetime:{type:Boolean,default:!1},includeseconds:{type:Boolean,default:!1}},setup(t){const e=t,{value:n,time:r,datetime:s,includeseconds:i}=cl(e);function o(u){return u instanceof Date&&!isNaN(u)}const a=He(()=>{const u=new Date(n.value);let h="";return!n.value||!o(u)||(r.value?h=l(u):s.value?h=c(u)+" "+l(u):h=c(u)),h});function c(u){const h=u.getFullYear().toString(),f=(u.getMonth()+1).toString().padStart(2,"0");return`${u.getDate().toString().padStart(2,"0")}.${f}.${h}`}function l(u){const h=u.getHours().toString().padStart(2,"0"),f=u.getMinutes().toString().padStart(2,"0");if(i.value){let p=u.getSeconds().toString().padStart(2,"0");return`${h}:${f}:${p}`}return`${h}:${f}`}return(u,h)=>(te(),he("span",mb,tt(a.value),1))}},yb={class:"sidebar list series"},vb=["onClick"],Eb={class:"list sets"},Ib=["onClick"],Tb={__name:"Sidebar",props:{selectedSerie:{type:Object},selectedSet:{type:Object},series:{type:Array,default:()=>[]}},emits:["update:selectedSerie","update:selectedSet"],setup(t,{emit:e}){const n=Pu(),{loadCardsForSeries:r}=n,s=e;function i(a){console.log("selectSerie ",a),s("update:selectedSerie",a),r(a.name),o(null)}function o(a){console.log("selectSet ",a),s("update:selectedSet",a)}return(a,c)=>(te(),he("aside",yb,[(te(!0),he(Ue,null,Mr(t.series,(l,u)=>(te(),ts(U_,{key:"serie_"+u,class:Nn(["list-item","serie",{selected:l==t.selectedSerie}])},{title:Ft(()=>[H("span",{role:"button",onClick:h=>i(l),class:"text"},tt(l.name),9,vb)]),default:Ft(()=>[H("div",Eb,[(te(!0),he(Ue,null,Mr(l.sets,(h,f)=>(te(),he("button",{key:"set_"+f,onClick:p=>o(h),class:Nn(["text","set",{selected:h==t.selectedSet}])},tt(h.name),11,Ib))),128))])]),_:2},1032,["class"]))),128))]))}},wb=At(Tb,[["__scopeId","data-v-e94a393a"]]);let No;async function Ab(){return No=(await hS("Settings","POKEMON_TCG_API_KEY",{cache:!1})).value,No}const Rb="https://api.pokemontcg.io/v2";async function Sb(){let t=[],e=1,n;const r=["id","name","total","series","printedTotal","releaseDate"].join(",");do{const s="https://api.pokemontcg.io/v2/sets?page="+e+"&select="+r+"&orderBy=releaseDate";n=await B_(s),t=t.concat(n.data),e++}while(n.count>0);return t}async function Pb(t){const e="set.series:"+t;return $_(e)}async function Cb(t){const e="set.id:"+t;return $_(e)}async function $_(t){let n=Rb+"/cards"+"?";t&&(n+="q="+t+"&");let r=[],s=1,i;const o=["id","name","set","number","rarity","nationalPokedexNumbers","images","artist"].join(",");do{let a=n+"page="+s+"&select="+o;i=await B_(a),r=r.concat(i.data),s++}while(i.count>0);return r}async function B_(t){No||await Ab();const e=new Headers;return e.append("X-Api-Key",No),await(await fetch(t,{headers:e})).json()}const bb={class:"content"},kb={class:"series"},Ob=["onClick","disabled"],Nb={class:"sets"},Db=["onClick","disabled"],Vb={__name:"SyncDialog",setup(t){const e=Pu(),{series:n}=Ko(e),r=He(()=>{console.log(n.value);const u=Object.values(n.value).reduce((h,f)=>(h[f.name]=f.sets.reduce((p,_)=>({...p,[_.id]:_}),{}),h),{});return console.log(u),u}),s=yt(null),i=yt({});fl(async()=>{const u=await Sb();s.value=o(u)});function o(u){const h={};for(const f of u)h[f.series]=h[f.series]||{name:f.series,sets:[]},h[f.series].sets.push(f);return Object.values(h).reverse()}async function a(u){i.value[u.name]=!0,jf("Pokemoncards"),console.log("syncSeries ",u),u.sets.forEach(f=>f.lastUpdated=new Date),qi("Pokemoncards",u.name,u);const h=await Pb(u.name);for(let f of h)f=l(f),qi(`Pokemoncards/${u.name}/cards`,f.id,f);i.value[u.name]=!1}async function c(u){i.value[u.name]=!0,jf("Pokemoncards"),console.log("syncSet ",u);const h=await Cb(u.id);for(let p of h)p=l(p),qi(`Pokemoncards/${u.series}/cards`,p.id,p);u.lastUpdated=new Date;const f=s.value.find(p=>p.name==u.series);qi("Pokemoncards",f.name,f),i.value[u.name]=!1}function l(u){var f;const h=u.set;return u.set={id:h.id,name:h.name,series:h.series},u.pokedexNr=((f=u.nationalPokedexNumbers)==null?void 0:f[0])||"",delete u.nationalPokedexNumbers,u}return(u,h)=>(te(),ts(gb,null,{activator:Ft(()=>[Ie(rc,{style:{width:"32px"}})]),title:Ft(()=>[Bs("Sync")]),default:Ft(()=>[H("div",bb,[H("div",kb,[(te(!0),he(Ue,null,Mr(s.value,(f,p)=>(te(),he("div",{class:Nn(["serie",[{syncing:i.value[f.name]}]]),key:"syncSerie_"+p},[Ie(U_,null,{title:Ft(()=>[H("h2",null,[Bs(tt(f.name)+" ",1),H("button",{onClick:_=>a(f),disabled:i.value[f.name]},[Ie(rc)],8,Ob)])]),default:Ft(()=>[H("div",Nb,[(te(!0),he(Ue,null,Mr(f.sets,(_,v)=>{var w,C,k;return te(),he("div",{key:"syncSet_"+v,class:Nn(["set",{syncing:i.value[_.name]}])},[H("span",null,tt(_.name)+" "+tt(_.id),1),H("div",null,[Ie(_b,{value:new Date(((k=(C=(w=r.value[f.name])==null?void 0:w[_.id])==null?void 0:C.lastUpdated)==null?void 0:k.seconds)*1e3),datetime:""},null,8,["value"]),H("button",{onClick:q=>c(_),disabled:i.value[_.name]||i.value[f.name]},[Ie(rc)],8,Db)])],2)}),128))])]),_:2},1024)],2))),128))])])]),_:1}))}},xb=At(Vb,[["__scopeId","data-v-899953c1"]]),Mb={class:"card"},Lb=["src"],Fb={class:"name"},Ub={class:"set"},$b={__name:"TCGCard",props:{card:{type:Object,default:()=>({})},series:{type:Object,default:()=>({})}},setup(t){const e=t,{series:n,card:r}=cl(e),s=He(()=>n.value.sets.find(o=>o.id==r.value.set.id));return(i,o)=>{var a;return te(),he("div",Mb,[H("img",{src:ct(r).images.small,alt:""},null,8,Lb),H("div",Fb,"#"+tt((a=ct(r))==null?void 0:a.pokedexNr)+" "+tt(ct(r).name),1),H("div",Ub,[H("span",null,tt(ct(r).number)+"/"+tt(s.value.printedTotal),1),H("span",null,tt(ct(r).set.name),1)])])}}},Bb=At($b,[["__scopeId","data-v-95a1a822"]]),jb=t=>(Ud("data-v-47ca40b7"),t=t(),$d(),t),qb={class:"page"},Hb={class:"button",href:"/"},zb=jb(()=>H("h1",null,"Challenges",-1)),Kb={key:0},Wb={key:0,class:"text-center"},Gb={key:1,class:"text-center"},Qb={key:2},Yb={key:0},Jb={class:"challenges"},Xb=["keys","onClick"],Zb={class:"cards"},ek={__name:"Challenges",setup(t){const e=Pu(),{loadSeries:n}=e,{series:r,cards:s}=Ko(e),i=yt(null),o=yt(null),a=[{name:"all"},{name:"151",filter:f=>f.pokedexNr&&f.pokedexNr<151,sort:u},{name:"Eeveelutions",filter:f=>[133,134,135,136,196,197,470,471,700].includes(f.pokedexNr),sort:u},{name:"Starters",filter:f=>[1,4,7,152,155,158,252,255,258,387,390,393,495,498,501,650,653,656,722,725,728,810,813,816,906,909,912].includes(f.pokedexNr),sort:u},{name:"Pikachus",filter:f=>[25].includes(f.pokedexNr)}],c=yt(a[0]);function l(f){c.value=f}function u(f,p){return f.pokedexNr-p.pokedexNr}fl(async()=>{n()});const h=He(()=>{let f=s.value[i.value.name];return f?(o.value&&(f=f.filter(p=>p.set.id==o.value.id).sort((p,_)=>p.number-_.number)),c.value.filter&&(f=f.filter(c.value.filter)),c.value.sort&&f.sort(c.value.sort),f):null});return He(()=>{const f={};for(const _ in s.value){const v=s.value[_][0];f[v.set.name]=f[v.set.name]||new Set,f[v.set.name].add(v.nationalPokedexNumbers[0])}return Object.entries(f).reduce((_,[v,w])=>(v&&(_[v]=w.size),_),{})}),(f,p)=>(te(),he("div",qb,[H("header",null,[H("a",Hb,[Ie(XC,{style:{width:"32px"}})]),Ie(xb),zb]),Ie(wb,{selectedSerie:i.value,"onUpdate:selectedSerie":p[0]||(p[0]=_=>i.value=_),selectedSet:o.value,"onUpdate:selectedSet":p[1]||(p[1]=_=>o.value=_),series:ct(r),class:"sidebar"},null,8,["selectedSerie","selectedSet","series"]),i.value?(te(),he("main",Kb,[H("h2",null,tt(i.value.name),1),h.value?Object.keys(h.value).length===0?(te(),he("div",Gb," no cards found ")):(te(),he("div",Qb,[o.value?(te(),he("div",Yb,[H("h3",null,tt(o.value.name),1)])):pc("",!0),H("h3",null,"cards ("+tt(h.value.length)+")",1),H("div",Jb,[(te(),he(Ue,null,Mr(a,(_,v)=>H("button",{keys:"challenge_"+v,class:Nn(["challenge",{selected:c.value.name==_.name}]),onClick:w=>l(_)},tt(_.name),11,Xb)),64))]),H("div",Zb,[(te(!0),he(Ue,null,Mr(h.value,(_,v)=>(te(),ts(Bb,{key:"card_"+v,card:_,series:i.value},null,8,["card","series"]))),128))])])):(te(),he("div",Wb,[Ie(zC)]))])):pc("",!0)]))}},tk=At(ek,[["__scopeId","data-v-47ca40b7"]]),j_=vI({history:ME("/"),routes:[{path:"/",name:"home",component:gS},{path:"/login",name:"Login",component:SC},{path:"/challenges",name:"Challenges",component:tk}]});j_.beforeEach(async t=>{const n=!["/login"].includes(t.path),{user:r}=El();if(await r,n&&!r)return"/login"});const Fu=uE(II);Fu.use(dE());Fu.use(j_);Fu.mount("#app");
