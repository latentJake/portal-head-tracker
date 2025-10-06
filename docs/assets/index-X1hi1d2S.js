var b0=Object.defineProperty;var T0=(t,e,n)=>e in t?b0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ks=(t,e,n)=>T0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();let zn=null;const Ep={"640x480":{width:640,height:480},"1280x720":{width:1280,height:720},"1920x1080":{width:1920,height:1080}};async function Mp(){try{(await navigator.mediaDevices.getUserMedia({video:!0,audio:!1})).getTracks().forEach(n=>n.stop())}catch{}return(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput")}async function A0({deviceId:t,width:e,height:n}){zn&&cu();const i={video:{deviceId:t?{exact:t}:void 0,frameRate:{ideal:60,max:60},...e&&n?{width:{ideal:e},height:{ideal:n}}:{},resizeMode:"none",facingMode:"user"},audio:!1};return zn=await navigator.mediaDevices.getUserMedia(i),zn}async function w0(t,e=zn){t.srcObject=e,await t.play()}function cu(){zn&&(zn.getTracks().forEach(t=>t.stop()),zn=null)}function bo(t){var a,o;const e=(a=zn==null?void 0:zn.getVideoTracks)==null?void 0:a.call(zn)[0],n=((o=e==null?void 0:e.getSettings)==null?void 0:o.call(e))||{},i=n.width||t.videoWidth||0,r=n.height||t.videoHeight||0,s=n.frameRate?Math.round(n.frameRate):"—";return i&&r?`Actual: ${i}×${r} @ ${s}`:"Actual: —"}var Xo=typeof self<"u"?self:{};function yp(t){e:{for(var e=["CLOSURE_FLAGS"],n=Xo,i=0;i<e.length;i++)if((n=n[e[i]])==null){e=null;break e}e=n}return(t=e&&e[t])!=null&&t}function _r(){throw Error("Invalid UTF8")}function Ah(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let wa,wc;const R0=typeof TextDecoder<"u";let C0;const L0=typeof TextEncoder<"u";function Sp(t){if(L0)t=(C0||(C0=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(128>e)i[n++]=e;else{if(2048>e)i[n++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<t.length){const s=t.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var sa,bp=yp(610401301),P0=yp(188588736);const wh=Xo.navigator;function Sl(t){return!!bp&&!!sa&&sa.brands.some(({brand:e})=>e&&e.indexOf(t)!=-1)}function On(t){var e;return(e=Xo.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Zi(){return!!bp&&!!sa&&0<sa.brands.length}function Rc(){return Zi()?Sl("Chromium"):(On("Chrome")||On("CriOS"))&&!(!Zi()&&On("Edge"))||On("Silk")}function lu(t){return lu[" "](t),t}sa=wh&&wh.userAgentData||null,lu[" "]=function(){};var D0=!Zi()&&(On("Trident")||On("MSIE"));!On("Android")||Rc(),Rc(),On("Safari")&&(Rc()||!Zi()&&On("Coast")||!Zi()&&On("Opera")||!Zi()&&On("Edge")||(Zi()?Sl("Microsoft Edge"):On("Edg/"))||Zi()&&Sl("Opera"));var Tp={},Ys=null;function U0(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,a){function o(m){for(;c<s.length;){var g=s.charAt(c++),_=Ys[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return m}Ap();for(var c=0;;){var l=o(-1),u=o(0),d=o(64),f=o(64);if(f===64&&l===-1)break;a(l<<2|u>>4),d!=64&&(a(u<<4&240|d>>2),f!=64&&a(d<<6&192|f))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Ap(){if(!Ys){Ys={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=t.concat(e[n].split(""));Tp[n]=i;for(var r=0;r<i.length;r++){var s=i[r];Ys[s]===void 0&&(Ys[s]=r)}}}}var wp=typeof Uint8Array<"u",Rp=!D0&&typeof btoa=="function";function Rh(t){if(!Rp){var e;e===void 0&&(e=0),Ap(),e=Tp[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let c=0,l=0;for(;c<t.length-2;c+=3){var r=t[c],s=t[c+1],a=t[c+2],o=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|a>>6],a=e[63&a],n[l++]=o+r+s+a}switch(o=0,a=i,t.length-c){case 2:a=e[(15&(o=t[c+1]))<<2]||i;case 1:t=t[c],n[l]=e[t>>2]+e[(3&t)<<4|o>>4]+a+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const Ch=/[-_.]/g,I0={"-":"+",_:"/",".":"="};function N0(t){return I0[t]||""}function Cp(t){if(!Rp)return U0(t);Ch.test(t)&&(t=t.replace(Ch,N0)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function ha(t){return wp&&t!=null&&t instanceof Uint8Array}let F0;function Yo(){return F0||(F0=new Uint8Array(0))}var _s={};let O0;function Lp(t){if(t!==_s)throw Error("illegal external caller")}function Or(){return O0||(O0=new Oi(null,_s))}function uu(t){Lp(_s);var e=t.g;return(e=e==null||ha(e)?e:typeof e=="string"?Cp(e):null)==null?e:t.g=e}var Oi=class{constructor(t,e){if(Lp(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const t=uu(this);return t?new Uint8Array(t):Yo()}};function Pp(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function hu(){return Error("Failed to read varint, encoding is invalid.")}function Dp(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function du(t){if(typeof t=="string")return{buffer:Cp(t),P:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Uint8Array)return{buffer:t,P:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Oi)return{buffer:uu(t)||Yo(),P:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function fu(){return typeof BigInt=="function"}const B0=typeof Uint8Array.prototype.slice=="function";let Up,gt=0,Ot=0;function Rr(t){const e=0>t;let n=(t=Math.abs(t))>>>0;if(t=Math.floor((t-n)/4294967296),e){const[i,r]=gu(n,t);t=r,n=i}gt=n>>>0,Ot=t>>>0}function pu(t){const e=Up||(Up=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),Ot=0,gt=e.getUint32(0,!0)}function bl(t,e){return 4294967296*e+(t>>>0)}function mu(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),t=bl(t,e),n?-t:t}function To(t,e){if(t>>>=0,2097151>=(e>>>=0))var n=""+(4294967296*e+t);else fu()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,1e7<=t&&(n+=Math.floor(t/1e7),t%=1e7),1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),n=e+Lh(n)+Lh(t));return n}function Lh(t){return t=String(t),"0000000".slice(t.length)+t}function Ip(){var t=gt,e=Ot;if(2147483648&e)if(fu())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=gu(t,e);t="-"+To(n,i)}else t=To(t,e);return t}function qo(t){if(16>t.length)Rr(Number(t));else if(fu())t=BigInt(t),gt=Number(t&BigInt(4294967295))>>>0,Ot=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Ot=gt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));Ot*=1e6,gt=1e6*gt+s,4294967296<=gt&&(Ot+=Math.trunc(gt/4294967296),Ot>>>=0,gt>>>=0)}if(e){const[i,r]=gu(gt,Ot);gt=i,Ot=r}}}function gu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function _u(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(32>s&&128&n);for(32<s&&(r|=(127&n)>>4),s=3;32>s&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(Cr(t,o),128>n)return e(i>>>0,r>>>0);throw hu()}function vu(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return Cr(t,n),!!(127&e)}throw hu()}function or(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw hu();return Cr(t,n),r}function cr(t){return or(t)>>>0}function Tl(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],Cr(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function Al(t){var e=Tl(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:1/0*t:n==0?t*Math.pow(2,-149)*e:t*Math.pow(2,n-150)*(e+Math.pow(2,23))}function k0(t){return or(t)}function Cc(t,e,{ca:n=!1}={}){t.ca=n,e&&(e=du(e),t.h=e.buffer,t.m=e.P,t.j=0,t.l=t.h.length,t.g=t.j)}function Cr(t,e){if(t.g=e,e>t.l)throw Dp(t.l,e)}function Np(t,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw Dp(e,t.l-n);return t.g=i,n}function Fp(t,e){if(e==0)return Or();var n=Np(t,e);return t.ca&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?Yo():B0?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Or():new Oi(n,_s)}var Ph=[];function Op(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=cr(t.g);if(e=n>>>3,!(0<=(n&=7)&&5>=n))throw Pp(n,t.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function fo(t){switch(t.h){case 0:t.h!=0?fo(t):vu(t.g);break;case 1:Cr(t=t.g,t.g+8);break;case 2:if(t.h!=2)fo(t);else{var e=cr(t.g);Cr(t=t.g,t.g+e)}break;case 5:Cr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!Op(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}fo(t)}break;default:throw Pp(t.h,t.l)}}function da(t,e,n){const i=t.g.l,r=cr(t.g),s=t.g.g+r;let a=s-i;if(0>=a&&(t.g.l=s,n(e,t,void 0,void 0,void 0),a=s-t.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function xu(t){var e=cr(t.g),n=Np(t=t.g,e);if(t=t.h,R0){var i,r=t;(i=wc)||(i=wc=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(wa===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),wa=!0}catch{wa=!1}}throw!wa&&(wc=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];128>a?n.push(a):224>a?s>=e?_r():(o=t[s++],194>a||(192&o)!=128?(s--,_r()):n.push((31&a)<<6|63&o)):240>a?s>=e-1?_r():(o=t[s++],(192&o)!=128||a===224&&160>o||a===237&&160<=o||(192&(i=t[s++]))!=128?(s--,_r()):n.push((15&a)<<12|(63&o)<<6|63&i)):244>=a?s>=e-2?_r():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,_r()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):_r(),8192<=n.length&&(c=Ah(c,n),n.length=0)}s=Ah(c,n)}return s}function Bp(t){const e=cr(t.g);return Fp(t.g,e)}function jo(t,e,n){var i=cr(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Ra=[];function Dh(t){return t?/^\d+$/.test(t)?(qo(t),new Uh(gt,Ot)):null:G0||(G0=new Uh(0,0))}var Uh=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let G0;function Ih(t){return t?/^-?\d+$/.test(t)?(qo(t),new Nh(gt,Ot)):null:z0||(z0=new Nh(0,0))}var Nh=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let z0;function Ao(t,e,n){for(;0<n||127<e;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function fa(t,e){for(;127<e;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Ko(t,e){if(0<=e)fa(t,e);else{for(let n=0;9>n;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function aa(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function vs(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Yn(t,e,n){fa(t.g,8*e+n)}function Eu(t,e){return Yn(t,e,2),e=t.g.end(),vs(t,e),e.push(t.h),e}function Mu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;127<n;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function $o(t,e,n){Yn(t,e,2),fa(t.g,n.length),vs(t,t.g.end()),vs(t,n)}function wl(t,e,n,i){n!=null&&(e=Eu(t,e),i(n,t),Mu(t,e))}class Ls{constructor(e,n,i,r){this.g=e,this.h=n,this.l=i,this.pa=r}}function Rn(t){return Array.prototype.slice.call(t)}function yu(t){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():t}var xi=yu(),Fh=yu("0di"),Lc=yu("2ex"),Su=xi?(t,e)=>{t[xi]|=e}:(t,e)=>{t.g!==void 0?t.g|=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}})},wo=xi?(t,e)=>{t[xi]&=~e}:(t,e)=>{t.g!==void 0&&(t.g&=~e)};function tn(t,e,n){return n?t|e:t&~e}var Rt=xi?t=>0|t[xi]:t=>0|t.g,ot=xi?t=>t[xi]:t=>t.g,wt=xi?(t,e)=>(t[xi]=e,t):(t,e)=>(t.g!==void 0?t.g=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}}),t);function Ps(t){return Su(t,34),t}function H0(t,e){wt(e,-14591&(0|t))}function Rl(t,e){wt(e,-14557&(34|t))}function kp(t){return(t=t>>14&1023)===0?536870912:t}var bu,pa={},Gp={};function Oh(t){return!(!t||typeof t!="object"||t.Ja!==Gp)}function Tu(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function Au(t,e,n){if(t!=null){if(typeof t=="string")t=t?new Oi(t,_s):Or();else if(t.constructor!==Oi)if(ha(t))t=t.length?new Oi(n?t:new Uint8Array(t),_s):Or();else{if(!e)throw Error();t=void 0}}return t}function Ro(t,e,n){if(!Array.isArray(t)||t.length)return!1;const i=Rt(t);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(n):e.has(n)))&&(wt(t,1|i),!0)}const Bh=[];function Si(t){if(2&t)throw Error()}wt(Bh,55),bu=Object.freeze(Bh);class Co{constructor(e,n,i){this.l=0,this.g=e,this.h=n,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Co(this.g,this.h,this.m)}}let tr,V0,W0;function zp(t,e){(e=tr?e[tr]:void 0)&&(t[tr]=Rn(e))}function Hp(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function X0(){const t=Error();Hp(t,"incident"),function(e){Xo.setTimeout(()=>{throw e},0)}(t)}function Cl(t){return Hp(t=Error(t),"warning"),t}function fr(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Vp(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}Object.freeze(new class{}),Object.freeze(new class{});const Y0=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Zo(t){const e=typeof t;return e==="number"?Number.isFinite(t):e==="string"&&Y0.test(t)}function Ds(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?0|t:void 0}function q0(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?t>>>0:void 0}function kh(t){return t[0]!=="-"&&(20>t.length||t.length===20&&184467>Number(t.substring(0,6)))}function Wp(t){return t[0]==="-"?20>t.length||t.length===20&&-922337<Number(t.substring(0,7)):19>t.length||t.length===19&&922337>Number(t.substring(0,6))}function wu(t){return t=Math.trunc(t),Number.isSafeInteger(t)||(Rr(t),t=mu(gt,Ot)),t}function Ru(t){var e=Math.trunc(Number(t));return Number.isSafeInteger(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Wp(t)||(qo(t),t=Ip()),t)}function Lo(t){return t==null?t:Zo(t)?typeof t=="number"?wu(t):Ru(t):void 0}function ma(t){if(typeof t!="string")throw Error();return t}function Us(t){if(t!=null&&typeof t!="string")throw Error();return t}function Lr(t){return t==null||typeof t=="string"?t:void 0}function Cu(t,e,n,i){if(t!=null&&typeof t=="object"&&t.X===pa)return t;if(!Array.isArray(t))return n?2&i?(t=e[Fh])?e=t:(Ps((t=new e).s),e=e[Fh]=t):e=new e:e=void 0,e;let r=n=Rt(t);return r===0&&(r|=32&i),r|=2&i,r!==n&&wt(t,r),new e(t)}function j0(t,e,n){if(e){var i=!!i;if(!Zo(e=t))throw Cl("int64");typeof e=="string"?i=Ru(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):Wp(e=String(i))?i=e:(Rr(i),i=Ip())):i=wu(e)}else i=Lo(t);return typeof(n=(t=i)==null?n?0:void 0:t)=="string"&&(i=+n,Number.isSafeInteger(i))?i:n}let Po,Lu,K0;function Do(t){switch(typeof t){case"boolean":return Lu||(Lu=[0,void 0,!0]);case"number":return 0<t?void 0:t===0?K0||(K0=[0,void 0]):[-t,void 0];case"string":return[0,t];case"object":return t}}function Pr(t,e){return Xp(t,e[0],e[1])}function Xp(t,e,n){if(t==null&&(t=Po),Po=void 0,t==null){var i=96;n?(t=[n],i|=512):t=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(2048&(i=Rt(t)))throw Error("farr");if(64&i)return t;if(i|=64,n&&(i|=512,n!==t[0]))throw Error("mid");e:{const r=(n=t).length;if(r){const s=r-1;if(Tu(n[s])){if(1024<=(e=s-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,r-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&e)<<14}}}return wt(t,i),t}const $0={};let Z0=function(){try{return lu(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Pc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const J0=Z0?(Object.setPrototypeOf(Pc.prototype,Map.prototype),Object.defineProperties(Pc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Pc):class extends Map{constructor(){super()}};function Gh(t){return t}function Dc(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}var Xn=class extends J0{constructor(t,e,n=Gh,i=Gh){super();let r=Rt(t);r|=64,wt(t,r),this.N=r,this.U=e,this.S=n,this.Z=this.U?Q0:i;for(let s=0;s<t.length;s++){const a=t[s],o=n(a[0],!1,!0);let c=a[1];e?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}oa(t=zh){if(this.size!==0)return this.Y(t)}Y(t=zh){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){Dc(this),super.clear()}delete(t){return Dc(this),super.delete(this.S(t,!0,!1))}entries(){var t=this.na();return new Co(t,e_,this)}keys(){return this.Ia()}values(){var t=this.na();return new Co(t,Xn.prototype.get,this)}forEach(t,e){super.forEach((n,i)=>{t.call(e,this.get(i),i,this)})}set(t,e){return Dc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.Z(e,!0,!0,this.U,!1,this.N))}Oa(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.U?t===void 0?null:t:this.Z(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.U;return n?((n=this.Z(e,!1,!0,n,this.ta,this.N))!==e&&super.set(t,n),n):e}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function Q0(t,e,n,i,r,s){return t=Cu(t,i,n,s),r&&(t=Qo(t)),t}function zh(t){return t}function e_(t){return[t,this.get(t)]}let t_;function Hh(){return t_||(t_=new Xn(Ps([]),void 0,void 0,void 0,$0))}function Pu(t,e,n,i,r){if(t!=null){if(Array.isArray(t))t=Ro(t,void 0,0)?void 0:r&&2&Rt(t)?t:Jo(t,e,n,i!==void 0,r);else if(Tu(t)){const s={};for(let a in t)s[a]=Pu(t[a],e,n,i,r);t=s}else t=e(t,i);return t}}function Jo(t,e,n,i,r){const s=i||n?Rt(t):0;i=i?!!(32&s):void 0;const a=Rn(t);for(let o=0;o<a.length;o++)a[o]=Pu(a[o],e,n,i,r);return n&&(zp(a,t),n(s,a)),a}function n_(t){return Pu(t,Du,void 0,void 0,!1)}function Du(t){return t.X===pa?t.toJSON():t instanceof Xn?t.oa(n_):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(Ro(e,void 0,0))return}else{if(ha(e))return Rh(e);if(e instanceof Oi){const n=e.g;return n==null?"":typeof n=="string"?n:e.g=Rh(n)}if(e instanceof Xn)return e.oa()}}return e}(t)}function Ll(t,e,n=Rl){if(t!=null){if(wp&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=Rt(t);return 2&i?t:(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),e?wt(t,-12293&(34|i)):Jo(t,Ll,4&i?Rl:n,!0,!0))}return t.X===pa?(n=t.s,t=2&(i=ot(n))?t:Uu(t,n,i,!0)):t instanceof Xn&&!(2&t.N)&&(n=Ps(t.Y(Ll)),t=new Xn(n,t.U,t.S,t.Z)),t}}function Uu(t,e,n,i){return t=t.constructor,Po=e=Yp(e,n,i),e=new t(e),Po=void 0,e}function Yp(t,e,n){const i=n||2&e?Rl:H0,r=!!(32&e);return t=function(s,a,o){const c=Rn(s);var l=c.length;const u=256&a?c[l-1]:void 0;for(l+=u?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(u){a=c[a]={};for(const d in u)a[d]=o(u[d])}return zp(c,s),c}(t,e,s=>Ll(s,r,i)),Su(t,32|(n?2:0)),t}function Qo(t){const e=t.s,n=ot(e);return 2&n?Uu(t,e,n,!1):t}function qp(t,e,n,i){return!(4&e)||n!=null}function lr(t,e){return bi(t=t.s,ot(t),e)}function Vh(t,e,n,i){if(!(0>(e=i+(+!!(512&e)-1))||e>=t.length||e>=n))return t[e]}function bi(t,e,n,i){if(n===-1)return null;const r=kp(e);if(!(n>=r)){var s=t.length;return i&&256&e&&(i=t[s-1][n])!=null?(Vh(t,e,r,n)&&Lc!=null&&(4<=(e=(t=W0??(W0={}))[Lc]||0)||(t[Lc]=e+1,X0())),i):Vh(t,e,r,n)}return 256&e?t[t.length-1][n]:void 0}function dt(t,e,n,i){const r=t.s;let s=ot(r);return Si(s),_t(r,s,e,n,i),t}function _t(t,e,n,i,r){const s=kp(e);if(n>=s||r){let a=e;if(256&e)r=t[t.length-1];else{if(i==null)return a;r=t[s+(+!!(512&e)-1)]={},a|=256}return r[n]=i,n<s&&(t[n+(+!!(512&e)-1)]=void 0),a!==e&&wt(t,a),a}return t[n+(+!!(512&e)-1)]=i,256&e&&n in(t=t[t.length-1])&&delete t[n],e}function Is(t,e,n,i,r){var s=2&e;let a=bi(t,e,n,r);Array.isArray(a)||(a=bu);const o=!(2&i);i=!(1&i);const c=!!(32&e);let l=Rt(a);return l!==0||!c||s||o?1&l||(l|=1,wt(a,l)):(l|=33,wt(a,l)),s?(t=!1,2&l||(Ps(a),t=!!(4&l)),(i||t)&&Object.freeze(a)):(s=!!(2&l)||!!(2048&l),i&&s?(a=Rn(a),i=1,c&&!o&&(i|=32),wt(a,i),_t(t,e,n,a,r)):o&&32&l&&!s&&wo(a,32)),a}function po(t,e){t=t.s;let n=ot(t);const i=bi(t,n,e),r=fr(i);return r!=null&&r!==i&&_t(t,n,e,r),r}function jp(t){t=t.s;let e=ot(t);const n=bi(t,e,1),i=Au(n,!0,!!(34&e));return i!=null&&i!==n&&_t(t,e,1,i),i}function ls(t,e,n){const i=t.s;let r=ot(i);const s=2&r?1:2;let a=Kp(i,r,e);var o=Rt(a);if(qp(t,o,void 0)){(4&o||Object.isFrozen(a))&&(a=Rn(a),o=Br(o,r),r=_t(i,r,e,a));let c=t=0;for(;t<a.length;t++){const l=n(a[t]);l!=null&&(a[c++]=l)}c<t&&(a.length=c),o=tn(o=$p(o,r),20,!0),o=tn(o,4096,!1),o=tn(o,8192,!1),wt(a,o),2&o&&Object.freeze(a)}return js(o)||(n=o,(o=(t=s===1||s===4&&!!(32&o))?tn(o,2,!0):xs(o,r,!1))!==n&&wt(a,o),t&&Object.freeze(a)),s===2&&js(o)&&(a=Rn(a),o=xs(o=Br(o,r),r,!1),wt(a,o),_t(i,r,e,a)),a}function Kp(t,e,n){return t=bi(t,e,n),Array.isArray(t)?t:bu}function $p(t,e){return t===0&&(t=Br(t,e)),tn(t,1,!0)}function js(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}function Zp(t){t=Rn(t);for(let e=0;e<t.length;e++){const n=t[e]=Rn(t[e]);Array.isArray(n[1])&&(n[1]=Ps(n[1]))}return t}function Uo(t,e,n){{const o=t.s;let c=ot(o);if(Si(c),n==null)_t(o,c,e);else{var i,r=Rt(n),s=r,a=!!(2&r)||Object.isFrozen(n);if((i=!a)&&(i=!1),qp(t,r))for(r=21,a&&(n=Rn(n),s=0,r=xs(r=Br(r,c),c,!0)),t=0;t<n.length;t++)n[t]=ma(n[t]);i&&(n=Rn(n),s=0,r=xs(r=Br(r,c),c,!0)),r!==s&&wt(n,r),_t(o,c,e,n)}}}function Pl(t,e,n,i){t=t.s;let r=ot(t);Si(r),_t(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ga(t,e,n,i){const r=ot(t);Si(r),t=Is(t,r,e,2),i=n(i,!!(4&(e=Rt(t)))&&!!(4096&e)),t.push(i)}function i_(t){return t}function Uc(t,e){return Iu(t=t.s,ot(t),Nm)===e?e:-1}function Iu(t,e,n){let i=0;for(let r=0;r<n.length;r++){const s=n[r];bi(t,e,s)!=null&&(i!==0&&(e=_t(t,e,i)),i=s)}return i}function Nu(t,e,n,i){let r=ot(t);Si(r);const s=bi(t,r,n,i);let a;if(s!=null&&s.X===pa)return(e=Qo(s))!==s&&_t(t,r,n,e,i),e.s;if(Array.isArray(s)){const o=Rt(s);a=2&o?Yp(s,o,!1):s,a=Pr(a,e)}else a=Pr(void 0,e);return a!==s&&_t(t,r,n,a,i),a}function Jp(t,e,n,i){t=t.s;let r=ot(t);const s=bi(t,r,n,i);return(e=Cu(s,e,!1,r))!==s&&e!=null&&_t(t,r,n,e,i),e}function nt(t,e,n,i=!1){if((e=Jp(t,e,n,i))==null)return e;t=t.s;let r=ot(t);if(!(2&r)){const s=Qo(e);s!==e&&_t(t,r,n,e=s,i)}return e}function Qp(t,e,n,i,r,s){var a=2,o=!!(2&e);a=o?1:a,r=!!r,s&&(s=!o),o=Kp(t,e,i);var c=Rt(o);const l=!!(4&c);if(!l){var u=o,d=e;const f=!!(2&(c=$p(c,e)));f&&(d=tn(d,2,!0));let m=!f,g=!0,_=0,p=0;for(;_<u.length;_++){const h=Cu(u[_],n,!1,d);if(h instanceof n){if(!f){const S=!!(2&Rt(h.s));m&&(m=!S),g&&(g=S)}u[p++]=h}}p<_&&(u.length=p),c=tn(c,4,!0),c=tn(c,16,g),c=tn(c,8,m),wt(u,c),f&&Object.freeze(u)}if(s&&!(8&c||!o.length&&(a===1||a===4&&32&c))){for(js(c)&&(o=Rn(o),c=Br(c,e),e=_t(t,e,i,o)),n=o,s=c,u=0;u<n.length;u++)(c=n[u])!==(d=Qo(c))&&(n[u]=d);s=tn(s,8,!0),s=tn(s,16,!n.length),wt(n,s),c=s}return js(c)||(n=c,(c=(s=a===1||a===4&&!!(32&c))?tn(c,!o.length||16&c&&(!l||32&c)?2:2048,!0):xs(c,e,r))!==n&&wt(o,c),s&&Object.freeze(o)),a===2&&js(c)&&(o=Rn(o),c=xs(c=Br(c,e),e,r),wt(o,c),_t(t,e,i,o)),o}function zi(t,e,n){t=t.s;const i=ot(t);return Qp(t,i,e,n,!1,!(2&i))}function Te(t,e,n,i,r){return i==null&&(i=void 0),dt(t,n,i,r)}function Ks(t,e,n,i){i==null&&(i=void 0),t=t.s;let r=ot(t);Si(r),(n=Iu(t,r,n))&&n!==e&&i!=null&&(r=_t(t,r,n)),_t(t,r,e,i)}function Br(t,e){return t=tn(t,2,!!(2&e)),t=tn(t,32,!0),tn(t,2048,!1)}function xs(t,e,n){return 32&e&&n||(t=tn(t,32,!1)),t}function Io(t,e,n,i){t=t.s;const r=ot(t);Si(r),e=Qp(t,r,n,e,!0),n=i??new n,e.push(n),2&Rt(n.s)?wo(e,8):wo(e,16)}function Vn(t,e){return Ds(lr(t,e))}function ri(t,e){return t??e}function Dt(t,e){return ri(po(t,e),0)}function Ei(t,e){return ri(Lr(lr(t,e)),"")}function oa(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);dt(t,e,n)}function Mi(t,e,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw Cl("int32");n|=0}dt(t,e,n)}function _e(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);dt(t,e,n)}function si(t,e,n){e.g?e.m(t,e.g,e.h,n,!0):e.m(t,e.h,n,!0)}Xn.prototype.toJSON=void 0,Xn.prototype.Ja=Gp;var me=class{constructor(t,e){this.s=Xp(t,e)}toJSON(){return em(this,Jo(this.s,Du,void 0,void 0,!1),!0)}l(){var t=l1;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){const t=this.s;return Uu(this,t,ot(t),!1)}P(){return!!(2&Rt(this.s))}};function em(t,e,n){var i=P0?void 0:t.constructor.B;const r=ot(n?t.s:e);if(!(t=e.length))return e;let s,a;if(Tu(n=e[t-1])){e:{var o=n;let u={},d=!1;for(var c in o){let f=o[c];if(Array.isArray(f)){let m=f;(Ro(f,i,+c)||Oh(f)&&f.size===0)&&(f=null),f!=m&&(d=!0)}f!=null?u[c]=f:d=!0}if(d){for(var l in u){o=u;break e}o=null}}o!=n&&(s=!0),t--}for(c=+!!(512&r)-1;0<t&&(n=e[l=t-1],l-=c,n==null||Ro(n,i,l)||Oh(n)&&n.size===0);t--)a=!0;return(s||a)&&(e=Array.prototype.slice.call(e,0,t),o&&e.push(o)),e}function tm(t){return Array.isArray(t)?t[0]instanceof Ls?t:[p_,t]:[t,void 0]}function Ns(t,e){if(Array.isArray(e)){var n=Rt(e);if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),wt(e,-12289&(5|n)),2&n&&Object.freeze(e),e}}me.prototype.X=pa,me.prototype.toString=function(){return em(this,this.s,!1).toString()};const Wh=Symbol();function Fu(t){let e=t[Wh];if(!e){const n=im(t),i=Bu(t),r=i.l;e=r?(s,a)=>r(s,a,i):(s,a)=>{for(;Op(a)&&a.h!=4;){var o=a.m,c=i[o];if(!c){var l=i.ea;l&&(l=l[o])&&(c=i[o]=r_(l))}c&&c(a,s,o)||(o=(c=a).l,fo(c),c.ia?c=void 0:(l=c.g.g-o,c.g.g=o,c=Fp(c.g,l)),o=s,c&&(tr||(tr=Symbol()),(l=o[tr])?l.push(c):o[tr]=[c]))}n===nm||n===mo||n.j||(s[V0||(V0=Symbol())]=n)},t[Wh]=e}return e}function r_(t){const e=(t=tm(t))[0].g;if(t=t[1]){const n=Fu(t),i=Bu(t).T;return(r,s,a)=>e(r,s,a,i,n)}return e}class Ic{}let nm,mo;const $s=Symbol();function s_(t,e,n){const i=n[1];let r;if(i){const s=i[$s];r=s?s.T:Do(i[0]),t[e]=s??i}r&&r===Lu?(t.g||(t.g=new Set)).add(e):n[0]&&(t.h||(t.h=new Set)).add(e)}function Xh(t,e){return[t.l,!e||0<e[0]?void 0:e]}function im(t){var e=t[$s];if(e)return e;if(!(e=Ou(t,t[$s]=new Ic,Xh,Xh,s_)).ea&&!e.h&&!e.g){let n=!0;for(let i in e)isNaN(i)||(n=!1);n?(Do(t[0])===Lu?mo?e=mo:((e=new Ic).T=Do(!0),e=mo=e):e=nm||(nm=new Ic),e=t[$s]=e):e.j=!0}return e}function a_(t,e,n){t[e]=n}function Ou(t,e,n,i,r=a_){e.T=Do(t[0]);let s=0;var a=t[++s];a&&a.constructor===Object&&(e.ea=a,typeof(a=t[++s])=="function"&&(e.l=a,e.m=t[++s],a=t[++s]));const o={};for(;Array.isArray(a)&&typeof a[0]=="number"&&0<a[0];){for(var c=0;c<a.length;c++)o[a[c]]=a;a=t[++s]}for(c=1;a!==void 0;){let d;typeof a=="number"&&(c+=a,a=t[++s]);var l=void 0;if(a instanceof Ls?d=a:(d=m_,s--),d.pa){a=t[++s],l=t;var u=s;typeof a=="function"&&(a=a(),l[u]=a),l=a}for(u=c+1,typeof(a=t[++s])=="number"&&0>a&&(u-=a,a=t[++s]);c<u;c++){const f=o[c];r(e,c,l?i(d,l,f):n(d,f))}}return e}const Yh=Symbol();function rm(t){let e=t[Yh];if(!e){const n=ec(t);e=(i,r)=>am(i,r,n),t[Yh]=e}return e}const Dl=Symbol();function o_(t){return t.h}function c_(t,e){let n,i;const r=t.h;return(s,a,o)=>r(s,a,o,i||(i=ec(e).T),n||(n=rm(e)))}function ec(t){let e=t[Dl];return e||(e=Ou(t,t[Dl]={},o_,c_),sm(t),e)}const Ul=Symbol();function l_(t,e){const n=t.g;return e?(i,r,s)=>n(i,r,s,e):n}function u_(t,e,n){const i=t.g;let r,s;return(a,o,c)=>i(a,o,c,s||(s=Bu(e).T),r||(r=Fu(e)),n)}function Bu(t){let e=t[Ul];return e||(im(t),e=Ou(t,t[Ul]={},l_,u_),sm(t),e)}function sm(t){Ul in t&&$s in t&&Dl in t&&(t.length=0)}function qh(t,e){var n=t[e];if(n)return n;if((n=t.ea)&&(n=n[e])){var i=(n=tm(n))[0].h;if(n=n[1]){const r=rm(n),s=ec(n).T;n=(n=t.m)?n(s,r):(a,o,c)=>i(a,o,c,s,r)}else n=i;return t[e]=n}}function am(t,e,n){for(var i=ot(t),r=+!!(512&i)-1,s=t.length,a=512&i?1:0,o=s+(256&i?-1:0);a<o;a++){const c=t[a];if(c==null)continue;const l=a-r,u=qh(n,l);u&&u(e,c,l)}if(256&i){i=t[s-1];for(let c in i)r=+c,Number.isNaN(r)||(s=i[c])!=null&&(o=qh(n,r))&&o(e,s,r)}if(t=tr?t[tr]:void 0)for(vs(e,e.g.end()),n=0;n<t.length;n++)vs(e,uu(t[n])||Yo())}function _n(t,e){return new Ls(t,e,!1,!1)}function Fs(t,e){return new Ls(t,e,!0,!1)}function tc(t,e){return new Ls(t,e,!1,!0)}function vn(t,e,n){_t(t,ot(t),e,n)}var h_=tc(function(t,e,n,i,r){return t.h===2&&(t=da(t,Pr([void 0,void 0],i),r),Si(i=ot(e)),(r=bi(e,i,n))instanceof Xn?2&r.N?((r=r.Y()).push(t),_t(e,i,n,r)):r.Oa(t):Array.isArray(r)?(2&Rt(r)&&_t(e,i,n,r=Zp(r)),r.push(t)):_t(e,i,n,[t]),!0)},function(t,e,n,i,r){if(e instanceof Xn)e.forEach((s,a)=>{wl(t,n,Pr([a,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&wl(t,n,Pr(a,i),r)}});function om(t,e,n){e:if(e!=null){if(Zo(e)){if(typeof e=="string"){e=Ru(e);break e}if(typeof e=="number"){e=wu(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&Ih(e),e!=null&&(Yn(t,n,0),typeof e=="number"?(t=t.g,Rr(e),Ao(t,gt,Ot)):(n=Ih(e),Ao(t.g,n.h,n.g))))}function cm(t,e,n){(e=Ds(e))!=null&&e!=null&&(Yn(t,n,0),Ko(t.g,e))}function lm(t,e,n){(e=Vp(e))!=null&&(Yn(t,n,0),t.g.g.push(e?1:0))}function um(t,e,n){(e=Lr(e))!=null&&$o(t,n,Sp(e))}function nc(t,e,n,i,r){wl(t,n,e instanceof me?e.s:Array.isArray(e)?Pr(e,i):void 0,r)}function hm(t,e,n){(e=e==null||typeof e=="string"||ha(e)||e instanceof Oi?e:void 0)!=null&&$o(t,n,du(e).buffer)}function dm(t,e,n){return(t.h===5||t.h===2)&&(e=Is(e,ot(e),n,2,!1),t.h==2?jo(t,Al,e):e.push(Al(t.g)),!0)}var Bt,Bi=_n(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=Tl(i);const r=Tl(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,vn(e,n,s==2047?t?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=fr(e))!=null&&(Yn(t,n,1),t=t.g,(n=Up||(Up=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),gt=n.getUint32(0,!0),Ot=n.getUint32(4,!0),aa(t,gt),aa(t,Ot))}),kt=_n(function(t,e,n){return t.h===5&&(vn(e,n,Al(t.g)),!0)},function(t,e,n){(e=fr(e))!=null&&(Yn(t,n,5),t=t.g,pu(e),aa(t,gt))}),d_=Fs(dm,function(t,e,n){if((e=Ns(fr,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Yn(i,r,5),i=i.g,pu(s),aa(i,gt))}}),ku=Fs(dm,function(t,e,n){if((e=Ns(fr,e))!=null&&e.length){Yn(t,n,2),fa(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,pu(e[i]),aa(n,gt)}}),ur=_n(function(t,e,n){return t.h===0&&(vn(e,n,_u(t.g,mu)),!0)},om),Nc=_n(function(t,e,n){return t.h===0&&(vn(e,n,(t=_u(t.g,mu))===0?void 0:t),!0)},om),f_=_n(function(t,e,n){return t.h===0&&(vn(e,n,_u(t.g,bl)),!0)},function(t,e,n){e:if(e!=null){if(Zo(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),kh(e)||(qo(e),e=To(gt,Ot)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(r){if(0>r){Rr(r);const s=To(gt,Ot);return r=Number(s),Number.isSafeInteger(r)?r:s}return kh(String(r))?r:(Rr(r),bl(gt,Ot))}(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&Dh(e),e!=null&&(Yn(t,n,0),typeof e=="number"?(t=t.g,Rr(e),Ao(t,gt,Ot)):(n=Dh(e),Ao(t.g,n.h,n.g))))}),Ct=_n(function(t,e,n){return t.h===0&&(vn(e,n,or(t.g)),!0)},cm),ic=Fs(function(t,e,n){return(t.h===0||t.h===2)&&(e=Is(e,ot(e),n,2,!1),t.h==2?jo(t,or,e):e.push(or(t.g)),!0)},function(t,e,n){if((e=Ns(Ds,e))!=null&&e.length){n=Eu(t,n);for(let i=0;i<e.length;i++)Ko(t.g,e[i]);Mu(t,n)}}),Es=_n(function(t,e,n){return t.h===0&&(vn(e,n,(t=or(t.g))===0?void 0:t),!0)},cm),Ut=_n(function(t,e,n){return t.h===0&&(vn(e,n,vu(t.g)),!0)},lm),Zs=_n(function(t,e,n){return t.h===0&&(vn(e,n,(t=vu(t.g))===!1?void 0:t),!0)},lm),rn=Fs(function(t,e,n){return t.h===2&&(ga(e,n,i_,t=xu(t)),!0)},function(t,e,n){if((e=Ns(Lr,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&$o(i,r,Sp(s))}}),hr=_n(function(t,e,n){return t.h===2&&(vn(e,n,(t=xu(t))===""?void 0:t),!0)},um),ut=_n(function(t,e,n){return t.h===2&&(vn(e,n,xu(t)),!0)},um),p_=tc(function(t,e,n,i,r){return t.h===2&&(da(t,Nu(e,i,n,!0),r),!0)},nc),m_=tc(function(t,e,n,i,r){return t.h===2&&(da(t,Nu(e,i,n),r),!0)},nc);Bt=new Ls(function(t,e,n,i,r){if(t.h!==2)return!1;i=Pr(void 0,i);let s=ot(e);Si(s);let a=Is(e,s,n,3);return s=ot(e),4&Rt(a)&&(a=Rn(a),wt(a,-2079&(1|Rt(a))),_t(e,s,n,a)),a.push(i),da(t,i,r),!0},function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)nc(t,e[s],n,i,r)},!0,!0);var lt=tc(function(t,e,n,i,r,s){if(t.h!==2)return!1;let a=ot(e);return Si(a),(s=Iu(e,a,s))&&n!==s&&_t(e,a,s),da(t,e=Nu(e,i,n),r),!0},nc),fm=_n(function(t,e,n){return t.h===2&&(vn(e,n,Bp(t)),!0)},hm),g_=Fs(function(t,e,n){return(t.h===0||t.h===2)&&(e=Is(e,ot(e),n,2,!1),t.h==2?jo(t,cr,e):e.push(cr(t.g)),!0)},function(t,e,n){if((e=Ns(q0,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(Yn(i,r,0),fa(i.g,s))}}),yi=_n(function(t,e,n){return t.h===0&&(vn(e,n,or(t.g)),!0)},function(t,e,n){(e=Ds(e))!=null&&(e=parseInt(e,10),Yn(t,n,0),Ko(t.g,e))}),__=Fs(function(t,e,n){return(t.h===0||t.h===2)&&(e=Is(e,ot(e),n,2,!1),t.h==2?jo(t,k0,e):e.push(or(t.g)),!0)},function(t,e,n){if((e=Ns(Ds,e))!=null&&e.length){n=Eu(t,n);for(let i=0;i<e.length;i++)Ko(t.g,e[i]);Mu(t,n)}});class v_{constructor(e,n){this.h=e,this.g=n,this.l=nt,this.m=Te,this.defaultValue=void 0}}function ai(t,e){return new v_(t,e)}function pr(t,e){return(n,i)=>{e:{if(Ra.length){const s=Ra.pop();s.o(i),Cc(s.g,n,i),n=s}else n=new class{constructor(s,a){if(Ph.length){const o=Ph.pop();Cc(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,Cc(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({ia:s=!1}={}){this.ia=s}}(n,i);try{const s=new t,a=s.s;Fu(e)(a,n);var r=s;break e}finally{n.g.clear(),n.m=-1,n.h=-1,100>Ra.length&&Ra.push(n)}r=void 0}return r}}function rc(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};am(this.s,e,ec(t)),vs(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var jh=class extends me{constructor(t){super(t)}},pm=[0,hr,_n(function(t,e,n){return t.h===2&&(vn(e,n,(t=Bp(t))===Or()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof me){const i=e.Qa;return void(i&&(e=i(e),e!=null&&$o(t,n,du(e).buffer)))}if(Array.isArray(e))return}hm(t,e,n)})],x_=[0,ut],mm=[0,Ct,yi,Ut,-1,ic,yi,-1],E_=[0,Ut,-1],gm=class extends me{constructor(){super()}};gm.B=[6];var _m=[0,Ut,ut,Ut,yi,-1,__,ut,-1,E_,yi],vm=[0,ut,-2],Kh=class extends me{constructor(){super()}},xm=[0],Em=[0,Ct,Ut,-4],Cn=class extends me{constructor(t){super(t,2)}},yt={},M_=[-2,yt,Ut];yt[336783863]=[0,ut,Ut,-1,Ct,[0,[1,2,3,4,5,6],lt,xm,lt,_m,lt,vm,lt,Em,lt,mm,lt,[0,ut]],x_,Ut,[0,[1,3],[2,4],lt,[0,ic],-1,lt,[0,rn],-1],ut];var y_=[0,hr,Zs],Mm=[0,Nc,-1,Zs,-3,Nc,ic,hr,Es,Nc,-1,Zs,Es,Zs,-2,hr],_a=[-1,{}],ym=[0,ut,1,_a],Sm=[0,ut,rn,_a];function Ln(t,e){Pl(t,2,Us(e),"")}function ft(t,e){ga(t.s,3,ma,e)}function Je(t,e){ga(t.s,4,ma,e)}var sn=class extends me{constructor(t){super(t,500)}o(t){return Te(this,0,7,t)}};sn.B=[3,4,5,6,8,13,17,1005];var S_=[-500,hr,-1,rn,-3,M_,Bt,pm,Es,-1,ym,Sm,Bt,y_,hr,Mm,Es,rn,987,rn],b_=[0,hr,-1,_a],T_=[-500,ut,-1,[-1,{}],998,ut],A_=[-500,ut,rn,-1,[-2,{},Ut],997,rn,-1],w_=[-500,ut,rn,_a,998,rn];function Pn(t,e){Io(t,1,sn,e)}function vt(t,e){ga(t.s,10,ma,e)}function rt(t,e){ga(t.s,15,ma,e)}var un=class extends me{constructor(t){super(t,500)}o(t){return Te(this,0,1001,t)}};un.B=[1,6,7,9,10,15,16,17,14,1002];var bm=[-500,Bt,S_,4,Bt,T_,Bt,A_,Es,Bt,w_,rn,Es,ym,Sm,Bt,b_,rn,-2,Mm,hr,-1,Zs,979,_a,Bt,pm],R_=pr(un,bm);un.prototype.g=rc(bm);var C_=[0,Bt,[0,Ct,-2]],L_=class extends me{constructor(t){super(t)}},P_=[0,Ct,kt,ut,-1],Gu=class extends me{constructor(t){super(t)}g(){return zi(this,L_,1)}};Gu.B=[1];var Tm=[0,Bt,P_],sc=pr(Gu,Tm),D_=[0,Ct,kt],U_=[0,Ct,-1,C_],I_=class extends me{constructor(t){super(t)}},N_=[0,Ct,-3],F_=[0,kt,-3],O_=class extends me{constructor(t){super(t)}},B_=[0,kt,-1,ut,kt],go=class extends me{constructor(t){super(t)}h(){return nt(this,I_,2)}g(){return zi(this,O_,5)}};go.B=[5];var k_=[0,yi,N_,F_,U_,Bt,B_],Am=class extends me{constructor(t){super(t)}};Am.B=[1,2,3,8,9];var wm=pr(Am,[0,rn,ic,ku,k_,ut,-1,ur,Bt,D_,rn,ur]),Rm=class extends me{constructor(t){super(t)}},G_=[0,kt,-4],Cm=class extends me{constructor(t){super(t)}};Cm.B=[1];var ds=pr(Cm,[0,Bt,G_]),Lm=class extends me{constructor(t){super(t)}},z_=[0,kt,-4],Pm=class extends me{constructor(t){super(t)}};Pm.B=[1];var va=pr(Pm,[0,Bt,z_]),Dm=class extends me{constructor(t){super(t)}};Dm.B=[3];var H_=[0,Ct,-1,ku,yi],Um=class extends me{constructor(){super()}};Um.prototype.g=rc([0,kt,-4,ur]);var V_=class extends me{constructor(t){super(t)}},W_=[0,1,Ct,ut,Tm],Im=class extends me{constructor(t){super(t)}};Im.B=[1];var X_=pr(Im,[0,Bt,W_,ur]),Il=class extends me{constructor(t){super(t)}};Il.B=[1];var Y_=class extends me{constructor(t){super(t)}qa(){const t=jp(this);return t??Or()}},q_=class extends me{constructor(t){super(t)}},Nm=[1,2],j_=[0,Nm,lt,[0,ku],lt,[0,fm],Ct,ut],Fm=class extends me{constructor(t){super(t)}};Fm.B=[1];var K_=pr(Fm,[0,Bt,j_,ur]),ac=class extends me{constructor(t){super(t)}};ac.B=[4,5];var Om=[0,ut,Ct,kt,rn,-1],$h=class extends me{constructor(t){super(t)}},$_=[0,Ut,-1],Zh=class extends me{constructor(t){super(t)}},_o=[1,2,3,4,5],No=class extends me{constructor(t){super(t)}g(){return jp(this)!=null}h(){return Lr(lr(this,2))!=null}},Bm=[0,fm,ut,[0,Ct,ur,-1],[0,f_,ur]],St=class extends me{constructor(t){super(t)}g(){return Vp(lr(this,2))??!1}},It=[0,Bm,Ut,[0,_o,lt,Em,lt,_m,lt,mm,lt,xm,lt,vm],yi],oc=class extends me{constructor(t){super(t)}},zu=[0,It,kt,-1,Ct],Z_=ai(502141897,oc);yt[502141897]=zu;var km=[0,Bm];yt[512499200]=km;var Gm=[0,km];yt[515723506]=Gm;var J_=pr(class extends me{constructor(t){super(t)}},[0,[0,yi,-1,d_,g_],H_]),zm=[0,It];yt[508981768]=zm;var Hm=class extends me{constructor(t){super(t)}},Hu=[0,It,kt,zm,Ut],Vm=class extends me{constructor(t){super(t)}},Wm=[0,It,zu,Hu,kt,Gm];yt[508968149]=Hu;var Q_=ai(508968150,Vm);yt[508968150]=Wm;var Xm=class extends me{constructor(t){super(t)}},e1=ai(513916220,Xm);yt[513916220]=[0,It,Wm,Ct];var Vr=class extends me{constructor(t){super(t)}h(){return nt(this,ac,2)}g(){dt(this,2)}},Ym=[0,It,Om];yt[478825465]=Ym;var qm=[0,It];yt[478825422]=qm;var t1=class extends me{constructor(t){super(t)}},jm=[0,It,qm,Ym,-1],Km=class extends me{constructor(t){super(t)}},$m=[0,It,kt,Ct],Vu=class extends me{constructor(t){super(t)}},Wu=[0,It,kt],Xu=class extends me{constructor(t){super(t)}},Zm=[0,It,$m,Wu,kt],Jm=class extends me{constructor(t){super(t)}},n1=[0,It,Zm,jm];yt[463370452]=jm,yt[464864288]=$m,yt[474472470]=Wu;var i1=ai(462713202,Xu);yt[462713202]=Zm;var r1=ai(479097054,Jm);yt[479097054]=n1;var s1=class extends me{constructor(t){super(t)}},a1=[0,It],Qm=class extends me{constructor(t){super(t)}},Yu=[0,It,kt,-1,Ct];yt[514774813]=Yu;var eg=class extends me{constructor(t){super(t)}},qu=[0,It,kt,Ut];yt[518928384]=qu;var tg=class extends me{constructor(){super()}};tg.prototype.g=rc([0,It,Wu,a1,zu,Hu,Yu,qu]);var ng=class extends me{constructor(t){super(t)}},o1=ai(456383383,ng);yt[456383383]=[0,It,Om];var ig=class extends me{constructor(t){super(t)}},c1=ai(476348187,ig);yt[476348187]=[0,It,$_];var rg=class extends me{constructor(t){super(t)}},sg=[0,yi,-1],Nl=class extends me{constructor(t){super(t)}};Nl.B=[3];var l1=ai(458105876,class extends me{constructor(t){super(t)}g(){var t=this.s;const e=ot(t);var n=2&e;return t=function(i,r,s){var a=Nl;const o=2&r;let c=!1;if(s==null){if(o)return Hh();s=[]}else if(s.constructor===Xn){if(!(2&s.N)||o)return s;s=s.Y()}else Array.isArray(s)?c=!!(2&Rt(s)):s=[];if(o){if(!s.length)return Hh();c||(c=!0,Ps(s))}else c&&(c=!1,s=Zp(s));return c||(64&Rt(s)?wo(s,32):32&r&&Su(s,32)),_t(i,r,2,a=new Xn(s,a,j0,void 0),!1),a}(t,e,bi(t,e,2)),t==null||!n&&Nl&&(t.ta=!0),n=t}});yt[458105876]=[0,sg,h_,[!0,ur,[0,ut,-1,rn]]];var ju=class extends me{constructor(t){super(t)}},ag=ai(458105758,ju);yt[458105758]=[0,It,ut,sg];var Ku=class extends me{constructor(t){super(t)}};Ku.B=[5,6];var u1=ai(443442058,Ku);yt[443442058]=[0,It,ut,Ct,kt,rn,-1];var og=class extends me{constructor(t){super(t)}},h1=ai(516587230,og);function Fl(t,e){return e=e?e.clone():new ac,t.displayNamesLocale!==void 0?dt(e,1,Us(t.displayNamesLocale)):t.displayNamesLocale===void 0&&dt(e,1),t.maxResults!==void 0?Mi(e,2,t.maxResults):"maxResults"in t&&dt(e,2),t.scoreThreshold!==void 0?_e(e,3,t.scoreThreshold):"scoreThreshold"in t&&dt(e,3),t.categoryAllowlist!==void 0?Uo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&dt(e,4),t.categoryDenylist!==void 0?Uo(e,5,t.categoryDenylist):"categoryDenylist"in t&&dt(e,5),e}function $u(t,e=-1,n=""){return{categories:t.map(i=>({index:ri(Vn(i,1),0)??-1,score:Dt(i,2)??0,categoryName:Ei(i,3)??"",displayName:Ei(i,4)??""})),headIndex:e,headName:n}}function cg(t){var a,o;var e=ls(t,3,fr),n=ls(t,2,Ds),i=ls(t,1,Lr),r=ls(t,9,Lr);const s={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)s.categories.push({score:e[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((e=(a=nt(t,go,4))==null?void 0:a.h())&&(s.boundingBox={originX:Vn(e,1)??0,originY:Vn(e,2)??0,width:Vn(e,3)??0,height:Vn(e,4)??0,angle:0}),(o=nt(t,go,4))==null?void 0:o.g().length)for(const c of nt(t,go,4).g())s.keypoints.push({x:po(c,1)??0,y:po(c,2)??0,score:po(c,4)??0,label:Lr(lr(c,3))??""});return s}function cc(t){const e=[];for(const n of zi(t,Lm,1))e.push({x:Dt(n,1)??0,y:Dt(n,2)??0,z:Dt(n,3)??0,visibility:Dt(n,4)??0});return e}function Js(t){const e=[];for(const n of zi(t,Rm,1))e.push({x:Dt(n,1)??0,y:Dt(n,2)??0,z:Dt(n,3)??0,visibility:Dt(n,4)??0});return e}function Jh(t){return Array.from(t,e=>127<e?e-256:e)}function Qh(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Ca;yt[516587230]=[0,It,Yu,qu,kt];const d1=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function lg(){if(Ca===void 0)try{await WebAssembly.instantiate(d1),Ca=!0}catch{Ca=!1}return Ca}async function Gs(t,e=""){const n=await lg()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Ki=class{};function ug(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=t.length&&17<=Number(t[1])))}async function ed(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(t.toString())}function hg(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function xe(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function td(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=hg(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function nd(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function li(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Vi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}Ki.forVisionTasks=function(t){return Gs("vision",t)},Ki.forTextTasks=function(t){return Gs("text",t)},Ki.forGenAiExperimentalTasks=function(t){return Gs("genai_experimental",t)},Ki.forGenAiTasks=function(t){return Gs("genai",t)},Ki.forAudioTasks=function(t){return Gs("audio",t)},Ki.isSimdSupported=function(){return lg()};async function f1(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await ed(s),!self.ModuleFactory||a&&(await ed(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function id(t,e){const n=nt(t.baseOptions,No,1)||new No;typeof e=="string"?(dt(n,2,Us(e)),dt(n,1)):e instanceof Uint8Array&&(dt(n,1,Au(e,!1,!1)),dt(n,2)),Te(t.baseOptions,0,1,n)}function rd(t){try{const e=t.K.length;if(e===1)throw Error(t.K[0].message);if(1<e)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function de(t,e){t.J=Math.max(t.J,e)}function lc(t,e){t.C=new sn,Ln(t.C,"PassThroughCalculator"),ft(t.C,"free_memory"),Je(t.C,"free_memory_unused_out"),vt(e,"free_memory"),Pn(e,t.C)}function Ms(t,e){ft(t.C,e),Je(t.C,e+"_unused_out")}function uc(t){t.g.addBoolToStream(!0,"free_memory",t.J)}var Ol=class{constructor(t){this.g=t,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,a,o;if(e){const c=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=nt(this.baseOptions,No,1))!=null&&r.g()||(s=nt(this.baseOptions,No,1))!=null&&s.h()||(a=t.baseOptions)!=null&&a.modelAssetBuffer||(o=t.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,u){let d=nt(l.baseOptions,Zh,3);if(!d){var f=d=new Zh,m=new Kh;Ks(f,4,_o,m)}"delegate"in u&&(u.delegate==="GPU"?(u=d,f=new gm,Ks(u,2,_o,f)):(u=d,f=new Kh,Ks(u,4,_o,f))),Te(l.baseOptions,0,3,d)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),id(this,"/model.dat"),this.m(),this.M()});id(this,c.modelAssetBuffer)}return this.m(),this.M(),Promise.resolve()}M(){}fa(){let t;if(this.g.fa(e=>{t=R_(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(t,e),this.C=void 0,rd(this)}finishProcessing(){this.g.finishProcessing(),rd(this)}close(){this.C=void 0,this.g.closeGraph()}};function ki(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ol.prototype.close=Ol.prototype.close;class p1{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function sd(t,e,n){const i=t.g;if(n=ki(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function ad(t,e){const n=t.g,i=ki(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=ki(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=ki(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new p1(n,i,r,s)}function Zu(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Ju(t,e,n,i){return Zu(t,e),t.h||(t.m(),t.D()),n?(t.v||(t.v=ad(t,!0)),n=t.v):(t.A||(t.A=ad(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function hc(t,e,n){return Zu(t,e),t=ki(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function dc(t,e,n){Zu(t,e),t.u||(t.u=ki(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Qu(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var eh=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=ki(t.createProgram(),"Failed to create WebGL program"),this.ba=sd(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=sd(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.K=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.ba),t.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function Ii(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Bl(t){var e=Ii(t,1);if(!e){if(e=Ii(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=ys(t);var n=th(t);if(dc(n,i,dg(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function dg(t){let e=Ii(t,2);if(!e){const n=ys(t);e=pg(t);const i=Bl(t),r=fg(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),kl(t)}return e}function ys(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=ki(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function fg(t){if(t=ys(t),!La)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))La=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");La=t.R16F}return La}function th(t){return t.l||(t.l=new eh),t.l}function pg(t){const e=ys(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ii(t,2);return n||(n=hc(th(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function kl(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var La,Wt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--od===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!Ii(this,0)}la(){return!!Ii(this,1)}R(){return!!Ii(this,2)}ka(){return(e=Ii(t=this,0))||(e=Bl(t),e=new Uint8Array(e.map(n=>255*n)),t.g.push(e)),e;var t,e}ja(){return Bl(this)}O(){return dg(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=ys(this),r=th(this);i.activeTexture(i.TEXTURE1),n=hc(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=fg(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),dc(r,i,n),Ju(r,i,!1,()=>{pg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),kl(this)}),Qu(r),kl(this)}}t.push(n)}return new Wt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ys(this).deleteTexture(Ii(this,2)),od=-1}};Wt.prototype.close=Wt.prototype.close,Wt.prototype.clone=Wt.prototype.clone,Wt.prototype.getAsWebGLTexture=Wt.prototype.O,Wt.prototype.getAsFloat32Array=Wt.prototype.ja,Wt.prototype.getAsUint8Array=Wt.prototype.ka,Wt.prototype.hasWebGLTexture=Wt.prototype.R,Wt.prototype.hasFloat32Array=Wt.prototype.la,Wt.prototype.hasUint8Array=Wt.prototype.Ha;var od=250;function di(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function mg(t){var e=di(t,0);if(!e){e=Ss(t);const n=fc(t),i=new Uint8Array(t.width*t.height*4);dc(n,e,vo(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Qu(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function vo(t){let e=di(t,2);if(!e){const n=Ss(t);e=xo(t);const i=di(t,1)||mg(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),qs(t)}return e}function Ss(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return t.h||(t.h=ki(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function fc(t){return t.l||(t.l=new eh),t.l}function xo(t){const e=Ss(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=di(t,2);return n||(n=hc(fc(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function qs(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function cd(t){const e=Ss(t);return Ju(fc(t),e,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n}(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}var Xt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--ld===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!di(this,0)}ma(){return!!di(this,1)}R(){return!!di(this,2)}Ea(){return mg(this)}Da(){var t=di(this,1);return t||(vo(this),xo(this),t=cd(this),qs(this),this.g.push(t),this.j=!0),t}O(){return vo(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Ss(this),r=fc(this);i.activeTexture(i.TEXTURE1),n=hc(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),dc(r,i,n),Ju(r,i,!1,()=>{xo(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),qs(this)}),Qu(r),qs(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);vo(this),xo(this),n=cd(this),qs(this)}t.push(n)}return new Xt(t,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&di(this,1).close(),this.m&&Ss(this).deleteTexture(di(this,2)),ld=-1}};Xt.prototype.close=Xt.prototype.close,Xt.prototype.clone=Xt.prototype.clone,Xt.prototype.getAsWebGLTexture=Xt.prototype.O,Xt.prototype.getAsImageBitmap=Xt.prototype.Da,Xt.prototype.getAsImageData=Xt.prototype.Ea,Xt.prototype.hasWebGLTexture=Xt.prototype.R,Xt.prototype.hasImageBitmap=Xt.prototype.ma,Xt.prototype.hasImageData=Xt.prototype.Ga;var ld=250;function oi(...t){return t.map(([e,n])=>({start:e,end:n}))}const m1=function(t){return class extends t{Ma(){this.i._registerModelResourcesGraphService()}}}((ud=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:ug()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),xe(this,i||"input_audio",s=>{xe(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,t,e,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}fa(t){li(this,"__graph_config__",e=>{t(e)}),xe(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),xe(this,i,a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)})}addGpuBufferToStream(t,e,n){xe(this,e,i=>{const[r,s]=td(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){xe(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){xe(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){xe(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){xe(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){xe(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){xe(this,e,i=>{xe(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){xe(this,e,i=>{nd(this,Object.keys(t),r=>{nd(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){xe(this,n,r=>{xe(this,e,s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(t,e){xe(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){xe(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){xe(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){xe(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){xe(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){xe(this,e,i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){xe(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)xe(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){xe(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){xe(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){xe(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){xe(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){xe(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){xe(this,e,n=>{xe(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){xe(this,n,i=>{xe(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){xe(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){xe(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){xe(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){xe(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){xe(this,e,n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){xe(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)xe(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){li(this,t,e),xe(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){Vi(this,t,e),xe(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){li(this,t,e),xe(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){Vi(this,t,e),xe(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){li(this,t,e),xe(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){Vi(this,t,e),xe(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){li(this,t,e),xe(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){Vi(this,t,e),xe(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){li(this,t,e),xe(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){Vi(this,t,e),xe(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){li(this,t,e),xe(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){Vi(this,t,e),xe(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){li(this,t,e),xe(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){Vi(this,t,e),xe(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),li(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),xe(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends ud{get ha(){return this.i}sa(t,e,n){xe(this,e,i=>{const[r,s]=td(this,t,i);this.ha._addBoundTextureAsImageToStream(i,r,s,n)})}W(t,e){li(this,t,e),xe(this,t,n=>{this.ha._attachImageListener(n)})}da(t,e){Vi(this,t,e),xe(this,t,n=>{this.ha._attachImageVectorListener(n)})}}));var ud,qn=class extends m1{};async function Ze(t,e,n){return async function(i,r,s,a){return f1(i,r,s,a)}(t,n.canvas??(ug()?void 0:document.createElement("canvas")),e,n)}function gg(t,e,n,i){if(t.V){const s=new Um;if(n!=null&&n.regionOfInterest){if(!t.ra)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");_e(s,1,(r.left+r.right)/2),_e(s,2,(r.top+r.bottom)/2),_e(s,4,r.right-r.left),_e(s,3,r.bottom-r.top)}else _e(s,1,.5),_e(s,2,.5),_e(s,4,1),_e(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(_e(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=hg(e);n=Dt(s,3)*o/a,r=Dt(s,4)*a/o,_e(s,4,n),_e(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.V,i)}t.g.sa(e,t.ba,i??performance.now()),t.finishProcessing()}function jn(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");gg(t,e,n,t.J+1)}function Ti(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");gg(t,e,n,i)}function bs(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Wt([r],n,!1,t.g.i.canvas,t.L,s,e),i?t.clone():t}var gn=class extends Ol{constructor(t,e,n,i){super(t),this.g=t,this.ba=e,this.V=n,this.ra=i,this.L=new eh}l(t,e=!0){if("runningMode"in t&&oa(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.L.close(),super.close()}};gn.prototype.close=gn.prototype.close;var Un=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Te(t=this.h=new oc,0,1,e=new St),_e(this.h,2,.5),_e(this.h,3,.3)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&_e(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&_e(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},jn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ti(this,t,n,e),this.j}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect_in"),rt(t,"detections");const e=new Cn;si(e,Z_,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect_in"),Je(n,"DETECTIONS:detections"),n.o(e),Pn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=wm(s),this.j.detections.push(cg(i));de(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Un.prototype.detectForVideo=Un.prototype.G,Un.prototype.detect=Un.prototype.F,Un.prototype.setOptions=Un.prototype.o,Un.createFromModelPath=async function(t,e){return Ze(Un,t,{baseOptions:{modelAssetPath:e}})},Un.createFromModelBuffer=function(t,e){return Ze(Un,t,{baseOptions:{modelAssetBuffer:e}})},Un.createFromOptions=function(t,e){return Ze(Un,t,e)};var nh=oi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),ih=oi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),rh=oi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),_g=oi([474,475],[475,476],[476,477],[477,474]),sh=oi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),ah=oi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),vg=oi([469,470],[470,471],[471,472],[472,469]),oh=oi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),xg=[...nh,...ih,...rh,...sh,...ah,...oh],Eg=oi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function hd(t){t.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Et=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Te(t=this.h=new Vm,0,1,e=new St),this.H=new Hm,Te(this.h,0,3,this.H),this.j=new oc,Te(this.h,0,2,this.j),Mi(this.j,4,1),_e(this.j,2,.5),_e(this.H,2,.5),_e(this.h,4,.5)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){return"numFaces"in t&&Mi(this.j,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&_e(this.j,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&_e(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&_e(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return hd(this),jn(this,t,e),this.u}G(t,e,n){return hd(this),Ti(this,t,n,e),this.u}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect"),rt(t,"face_landmarks");const e=new Cn;si(e,Q_,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect"),Je(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Pn(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=va(s),this.u.faceLandmarks.push(cc(i));de(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{de(this,i)}),this.outputFaceBlendshapes&&(rt(t,"blendshapes"),Je(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=sc(s),this.u.faceBlendshapes.push($u(i.g()??[]));de(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{de(this,i)})),this.outputFacialTransformationMatrixes&&(rt(t,"face_geometry"),Je(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=nt(J_(s),Dm,2))&&this.u.facialTransformationMatrixes.push({rows:ri(Vn(i,1),0)??0,columns:ri(Vn(i,2),0)??0,data:ls(i,3,fr).slice()??[]});de(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{de(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Et.prototype.detectForVideo=Et.prototype.G,Et.prototype.detect=Et.prototype.F,Et.prototype.setOptions=Et.prototype.o,Et.createFromModelPath=function(t,e){return Ze(Et,t,{baseOptions:{modelAssetPath:e}})},Et.createFromModelBuffer=function(t,e){return Ze(Et,t,{baseOptions:{modelAssetBuffer:e}})},Et.createFromOptions=function(t,e){return Ze(Et,t,e)},Et.FACE_LANDMARKS_LIPS=nh,Et.FACE_LANDMARKS_LEFT_EYE=ih,Et.FACE_LANDMARKS_LEFT_EYEBROW=rh,Et.FACE_LANDMARKS_LEFT_IRIS=_g,Et.FACE_LANDMARKS_RIGHT_EYE=sh,Et.FACE_LANDMARKS_RIGHT_EYEBROW=ah,Et.FACE_LANDMARKS_RIGHT_IRIS=vg,Et.FACE_LANDMARKS_FACE_OVAL=oh,Et.FACE_LANDMARKS_CONTOURS=xg,Et.FACE_LANDMARKS_TESSELATION=Eg;var ui=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!0),Te(t=this.j=new Xm,0,1,e=new St)}get baseOptions(){return nt(this.j,St,1)}set baseOptions(t){Te(this.j,0,1,t)}o(t){return super.l(t)}Pa(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,jn(this,t,i??{}),!this.h)return this.u}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect"),rt(t,"stylized_image");const e=new Cn;si(e,e1,this.j);const n=new sn;Ln(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect"),Je(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),Pn(t,n),this.g.W("stylized_image",(i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let u=0;u<c;++u)l[4*u]=a[3*u],l[4*u+1]=a[3*u+1],l[4*u+2]=a[3*u+2],l[4*u+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new Xt([a],!1,!1,this.g.i.canvas,this.L,o,i),this.u=s=s?o.clone():o,this.h&&this.h(s),de(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ui.prototype.stylize=ui.prototype.Pa,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=function(t,e){return Ze(ui,t,{baseOptions:{modelAssetPath:e}})},ui.createFromModelBuffer=function(t,e){return Ze(ui,t,{baseOptions:{modelAssetBuffer:e}})},ui.createFromOptions=function(t,e){return Ze(ui,t,e)};var ch=oi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function dd(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function fd(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function pd(t,e=!0){const n=[];for(const r of t){var i=sc(r);t=[];for(const s of i.g())i=e&&Vn(s,1)!=null?ri(Vn(s,1),0):-1,t.push({score:Dt(s,2)??0,index:i,categoryName:Ei(s,3)??"",displayName:Ei(s,4)??""});n.push(t)}return n}var En=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Te(t=this.v=new Jm,0,1,e=new St),this.A=new Xu,Te(this.v,0,2,this.A),this.u=new Vu,Te(this.A,0,3,this.u),this.h=new Km,Te(this.A,0,2,this.h),this.j=new t1,Te(this.v,0,3,this.j),_e(this.h,2,.5),_e(this.A,4,.5),_e(this.u,2,.5)}get baseOptions(){return nt(this.v,St,1)}set baseOptions(t){Te(this.v,0,1,t)}o(t){var r,s,a,o;if(Mi(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&_e(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&_e(this.A,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&_e(this.u,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Vr,n=e,i=Fl(t.cannedGesturesClassifierOptions,(r=nt(this.j,Vr,3))==null?void 0:r.h());Te(n,0,2,i),Te(this.j,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=nt(this.j,Vr,3))==null||s.g());return t.customGesturesClassifierOptions?(Te(n=e=new Vr,0,2,i=Fl(t.customGesturesClassifierOptions,(a=nt(this.j,Vr,4))==null?void 0:a.h())),Te(this.j,0,4,e)):t.customGesturesClassifierOptions===void 0&&((o=nt(this.j,Vr,4))==null||o.g()),this.l(t)}Ka(t,e){return dd(this),jn(this,t,e),fd(this)}La(t,e,n){return dd(this),Ti(this,t,n,e),fd(this)}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect"),rt(t,"hand_gestures"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new Cn;si(e,r1,this.v);const n=new sn;Ln(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect"),Je(n,"HAND_GESTURES:hand_gestures"),Je(n,"LANDMARKS:hand_landmarks"),Je(n,"WORLD_LANDMARKS:world_hand_landmarks"),Je(n,"HANDEDNESS:handedness"),n.o(e),Pn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=va(s);const a=[];for(const o of zi(i,Lm,1))a.push({x:Dt(o,1)??0,y:Dt(o,2)??0,z:Dt(o,3)??0,visibility:Dt(o,4)??0});this.landmarks.push(a)}de(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=ds(s);const a=[];for(const o of zi(i,Rm,1))a.push({x:Dt(o,1)??0,y:Dt(o,2)??0,z:Dt(o,3)??0,visibility:Dt(o,4)??0});this.worldLandmarks.push(a)}de(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...pd(i,!1)),de(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{de(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...pd(i)),de(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function md(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}En.prototype.recognizeForVideo=En.prototype.La,En.prototype.recognize=En.prototype.Ka,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(t,e){return Ze(En,t,{baseOptions:{modelAssetPath:e}})},En.createFromModelBuffer=function(t,e){return Ze(En,t,{baseOptions:{modelAssetBuffer:e}})},En.createFromOptions=function(t,e){return Ze(En,t,e)},En.HAND_CONNECTIONS=ch;var Mn=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Te(t=this.j=new Xu,0,1,e=new St),this.u=new Vu,Te(this.j,0,3,this.u),this.h=new Km,Te(this.j,0,2,this.h),Mi(this.h,3,1),_e(this.h,2,.5),_e(this.u,2,.5),_e(this.j,4,.5)}get baseOptions(){return nt(this.j,St,1)}set baseOptions(t){Te(this.j,0,1,t)}o(t){return"numHands"in t&&Mi(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&_e(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&_e(this.j,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&_e(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],jn(this,t,e),md(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ti(this,t,n,e),md(this)}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new Cn;si(e,i1,this.j);const n=new sn;Ln(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect"),Je(n,"LANDMARKS:hand_landmarks"),Je(n,"WORLD_LANDMARKS:world_hand_landmarks"),Je(n,"HANDEDNESS:handedness"),n.o(e),Pn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=va(s),this.landmarks.push(cc(i));de(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=ds(s),this.worldLandmarks.push(Js(i));de(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{de(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=sc(c);const l=[];for(const u of i.g())l.push({score:Dt(u,2)??0,index:ri(Vn(u,1),0)??-1,categoryName:Ei(u,3)??"",displayName:Ei(u,4)??""});o.push(l)}a.call(s,...o),de(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mn.prototype.detectForVideo=Mn.prototype.G,Mn.prototype.detect=Mn.prototype.F,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(t,e){return Ze(Mn,t,{baseOptions:{modelAssetPath:e}})},Mn.createFromModelBuffer=function(t,e){return Ze(Mn,t,{baseOptions:{modelAssetBuffer:e}})},Mn.createFromOptions=function(t,e){return Ze(Mn,t,e)},Mn.HAND_CONNECTIONS=ch;var Mg=oi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function gd(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function _d(t){try{if(!t.I)return t.h;t.I(t.h)}finally{uc(t)}}function Pa(t,e){t=va(t),e.push(cc(t))}var xt=class extends gn{constructor(t,e){super(new qn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Te(t=this.A=new tg,0,1,e=new St),this.u=new Vu,Te(this.A,0,2,this.u),this.aa=new s1,Te(this.A,0,3,this.aa),this.j=new oc,Te(this.A,0,4,this.j),this.H=new Hm,Te(this.A,0,5,this.H),this.v=new Qm,Te(this.A,0,6,this.v),this.D=new eg,Te(this.A,0,7,this.D),_e(this.j,2,.5),_e(this.j,3,.3),_e(this.H,2,.5),_e(this.v,2,.5),_e(this.v,3,.3),_e(this.D,2,.5),_e(this.u,2,.5)}get baseOptions(){return nt(this.A,St,1)}set baseOptions(t){Te(this.A,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&_e(this.j,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&_e(this.j,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&_e(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&_e(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&_e(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&_e(this.D,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&_e(this.u,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:n,gd(this),jn(this,t,i),_d(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.I=typeof n=="function"?n:i,gd(this),Ti(this,t,r,e),_d(this)}m(){var t=new un;vt(t,"input_frames_image"),rt(t,"pose_landmarks"),rt(t,"pose_world_landmarks"),rt(t,"face_landmarks"),rt(t,"left_hand_landmarks"),rt(t,"left_hand_world_landmarks"),rt(t,"right_hand_landmarks"),rt(t,"right_hand_world_landmarks");const e=new Cn,n=new jh;Pl(n,1,Us("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))dt(r,2,Jo(s,Du,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Oi||ha(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Pl(r,2,Au(s,!1,!1),Or())}}(n,this.A.g());const i=new sn;Ln(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Io(i,8,jh,n),ft(i,"IMAGE:input_frames_image"),Je(i,"POSE_LANDMARKS:pose_landmarks"),Je(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Je(i,"FACE_LANDMARKS:face_landmarks"),Je(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Je(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Je(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Je(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Pn(t,i),lc(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{Pa(r,this.h.poseLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=ds(r),a.push(Js(r)),de(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{de(this,r)}),this.outputPoseSegmentationMasks&&(Je(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ms(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[bs(this,r,!0,!this.I)],de(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],de(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{Pa(r,this.h.faceLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{de(this,r)}),this.outputFaceBlendshapes&&(rt(t,"extra_blendshapes"),Je(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=sc(r),a.push($u(r.g()??[]))),de(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{de(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{Pa(r,this.h.leftHandLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=ds(r),a.push(Js(r)),de(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{Pa(r,this.h.rightHandLandmarks),de(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{de(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=ds(r),a.push(Js(r)),de(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{de(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xt.prototype.detectForVideo=xt.prototype.G,xt.prototype.detect=xt.prototype.F,xt.prototype.setOptions=xt.prototype.o,xt.createFromModelPath=function(t,e){return Ze(xt,t,{baseOptions:{modelAssetPath:e}})},xt.createFromModelBuffer=function(t,e){return Ze(xt,t,{baseOptions:{modelAssetBuffer:e}})},xt.createFromOptions=function(t,e){return Ze(xt,t,e)},xt.HAND_CONNECTIONS=ch,xt.POSE_CONNECTIONS=Mg,xt.FACE_LANDMARKS_LIPS=nh,xt.FACE_LANDMARKS_LEFT_EYE=ih,xt.FACE_LANDMARKS_LEFT_EYEBROW=rh,xt.FACE_LANDMARKS_LEFT_IRIS=_g,xt.FACE_LANDMARKS_RIGHT_EYE=sh,xt.FACE_LANDMARKS_RIGHT_EYEBROW=ah,xt.FACE_LANDMARKS_RIGHT_IRIS=vg,xt.FACE_LANDMARKS_FACE_OVAL=oh,xt.FACE_LANDMARKS_CONTOURS=xg,xt.FACE_LANDMARKS_TESSELATION=Eg;var In=class extends gn{constructor(t,e){super(new qn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Te(t=this.h=new ng,0,1,e=new St)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){return Te(this.h,0,2,Fl(t,nt(this.h,ac,2))),this.l(t)}ua(t,e){return this.j={classifications:[]},jn(this,t,e),this.j}va(t,e,n){return this.j={classifications:[]},Ti(this,t,n,e),this.j}m(){var t=new un;vt(t,"input_image"),vt(t,"norm_rect"),rt(t,"classifications");const e=new Cn;si(e,o1,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ft(n,"IMAGE:input_image"),ft(n,"NORM_RECT:norm_rect"),Je(n,"CLASSIFICATIONS:classifications"),n.o(e),Pn(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const a={classifications:zi(s,V_,1).map(o=>{var c;return $u(((c=nt(o,Gu,4))==null?void 0:c.g())??[],ri(Vn(o,2),0),Ei(o,3))})};return Lo(lr(s,2))!=null&&(a.timestampMs=ri(Lo(lr(s,2)),0)),a}(X_(i)),de(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};In.prototype.classifyForVideo=In.prototype.va,In.prototype.classify=In.prototype.ua,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(t,e){return Ze(In,t,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(t,e){return Ze(In,t,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(t,e){return Ze(In,t,e)};var yn=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!0),this.h=new ig,this.embeddings={embeddings:[]},Te(t=this.h,0,1,e=new St)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){var e=this.h,n=nt(this.h,$h,2);return n=n?n.clone():new $h,t.l2Normalize!==void 0?oa(n,1,t.l2Normalize):"l2Normalize"in t&&dt(n,1),t.quantize!==void 0?oa(n,2,t.quantize):"quantize"in t&&dt(n,2),Te(e,0,2,n),this.l(t)}Ba(t,e){return jn(this,t,e),this.embeddings}Ca(t,e,n){return Ti(this,t,n,e),this.embeddings}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect"),rt(t,"embeddings_out");const e=new Cn;si(e,c1,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect"),Je(n,"EMBEDDINGS:embeddings_out"),n.o(e),Pn(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=K_(i),this.embeddings=function(s){return{embeddings:zi(s,q_,1).map(a=>{var c,l;const o={headIndex:ri(Vn(a,3),0)??-1,headName:Ei(a,4)??""};if(Jp(a,Il,Uc(a,1))!==void 0)a=ls(a=nt(a,Il,Uc(a,1)),1,fr),o.floatEmbedding=a.slice();else{const u=new Uint8Array(0);o.quantizedEmbedding=((l=(c=nt(a,Y_,Uc(a,2)))==null?void 0:c.qa())==null?void 0:l.h())??u}return o}),timestampMs:ri(Lo(lr(s,2)),0)}}(i),de(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Qh(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Qh(Jh(t.quantizedEmbedding),Jh(e.quantizedEmbedding))}return t},yn.prototype.embedForVideo=yn.prototype.Ca,yn.prototype.embed=yn.prototype.Ba,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(t,e){return Ze(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return Ze(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return Ze(yn,t,e)};var Gl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function vd(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function xd(t){try{const e=new Gl(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{uc(t)}}Gl.prototype.close=Gl.prototype.close;var hn=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ju,this.v=new rg,Te(this.h,0,3,this.v),Te(t=this.h,0,1,e=new St)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?dt(this.h,2,Us(t.displayNamesLocale)):"displayNamesLocale"in t&&dt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}M(){(function(t){var n,i;const e=zi(t.fa(),sn,1).filter(r=>Ei(r,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=nt(e[0],Cn,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=Ei(r,1)})})(this)}ga(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,vd(this),jn(this,t,i),xd(this)}Na(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,vd(this),Ti(this,t,r,e),xd(this)}Fa(){return this.u}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect");const e=new Cn;si(e,ag,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect"),n.o(e),Pn(t,n),lc(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Je(n,"CONFIDENCE_MASKS:confidence_masks"),Ms(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>bs(this,s,!0,!this.j)),de(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],de(this,i)})),this.outputCategoryMask&&(rt(t,"category_mask"),Je(n,"CATEGORY_MASK:category_mask"),Ms(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=bs(this,i,!1,!this.j),de(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,de(this,i)})),rt(t,"quality_scores"),Je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,de(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};hn.prototype.getLabels=hn.prototype.Fa,hn.prototype.segmentForVideo=hn.prototype.Na,hn.prototype.segment=hn.prototype.ga,hn.prototype.setOptions=hn.prototype.o,hn.createFromModelPath=function(t,e){return Ze(hn,t,{baseOptions:{modelAssetPath:e}})},hn.createFromModelBuffer=function(t,e){return Ze(hn,t,{baseOptions:{modelAssetBuffer:e}})},hn.createFromOptions=function(t,e){return Ze(hn,t,e)};var zl=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};zl.prototype.close=zl.prototype.close;var g1=class extends me{constructor(t){super(t)}},Ts=[0,Ct,-2],_1=[0,Bi,-3,Ut],pc=[0,Bi,-3,Ut,Bi,-1],yg=[0,pc],v1=[0,yg,Ts],x1=[0,pc,Ts],Sg=[0,pc,Ct,-1],E1=[0,Sg,Ts],M1=[0,Bi,-3,Ut,Ts,-1],y1=[0,Bi,-3,Ut,yi],Fc=class extends me{constructor(t){super(t)}},Ed=[0,Bi,-1,Ut],bg=class extends me{constructor(){super()}};bg.B=[1];var Md=class extends me{constructor(t){super(t)}},Hl=[1,2,3,4,5,6,7,8,9,10,14,15],S1=[0,Hl,lt,pc,lt,x1,lt,yg,lt,v1,lt,Ed,lt,y1,lt,_1,lt,[0,ut,Bi,-2,Ut,Ct,Ut,-1,2,Bi,Ts],lt,Sg,lt,E1,Bi,Ts,ut,lt,M1,lt,[0,Bt,Ed]],b1=[0,ut,Ct,-1,Ut],Vl=class extends me{constructor(){super()}};Vl.B=[1],Vl.prototype.g=rc([0,Bt,S1,ut,b1]);var hi=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ju,this.v=new rg,Te(this.h,0,3,this.v),Te(t=this.h,0,1,e=new St)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}ga(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new Vl;const s=new Md;var a=new g1;if(Mi(a,1,255),Te(s,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new Fc;oa(o,3,!0),_e(o,1,e.keypoint.x),_e(o,2,e.keypoint.y),Ks(s,5,Hl,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new bg,e.scribble))oa(e=new Fc,3,!0),_e(e,1,o.x),_e(e,2,o.y),Io(a,1,Fc,e);Ks(s,15,Hl,a)}Io(i,1,Md,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),jn(this,t,r);e:{try{const l=new zl(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{uc(this)}c=void 0}return c}m(){var t=new un;vt(t,"image_in"),vt(t,"roi_in"),vt(t,"norm_rect_in");const e=new Cn;si(e,ag,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),ft(n,"IMAGE:image_in"),ft(n,"ROI:roi_in"),ft(n,"NORM_RECT:norm_rect_in"),n.o(e),Pn(t,n),lc(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Je(n,"CONFIDENCE_MASKS:confidence_masks"),Ms(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>bs(this,s,!0,!this.j)),de(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],de(this,i)})),this.outputCategoryMask&&(rt(t,"category_mask"),Je(n,"CATEGORY_MASK:category_mask"),Ms(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=bs(this,i,!1,!this.j),de(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,de(this,i)})),rt(t,"quality_scores"),Je(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,de(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};hi.prototype.segment=hi.prototype.ga,hi.prototype.setOptions=hi.prototype.o,hi.createFromModelPath=function(t,e){return Ze(hi,t,{baseOptions:{modelAssetPath:e}})},hi.createFromModelBuffer=function(t,e){return Ze(hi,t,{baseOptions:{modelAssetBuffer:e}})},hi.createFromOptions=function(t,e){return Ze(hi,t,e)};var Nn=class extends gn{constructor(t,e){super(new qn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Te(t=this.h=new Ku,0,1,e=new St)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?dt(this.h,2,Us(t.displayNamesLocale)):"displayNamesLocale"in t&&dt(this.h,2),t.maxResults!==void 0?Mi(this.h,3,t.maxResults):"maxResults"in t&&dt(this.h,3),t.scoreThreshold!==void 0?_e(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&dt(this.h,4),t.categoryAllowlist!==void 0?Uo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&dt(this.h,5),t.categoryDenylist!==void 0?Uo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&dt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},jn(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Ti(this,t,n,e),this.j}m(){var t=new un;vt(t,"input_frame_gpu"),vt(t,"norm_rect"),rt(t,"detections");const e=new Cn;si(e,u1,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),ft(n,"IMAGE:input_frame_gpu"),ft(n,"NORM_RECT:norm_rect"),Je(n,"DETECTIONS:detections"),n.o(e),Pn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=wm(s),this.j.detections.push(cg(i));de(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{de(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Nn.prototype.detectForVideo=Nn.prototype.G,Nn.prototype.detect=Nn.prototype.F,Nn.prototype.setOptions=Nn.prototype.o,Nn.createFromModelPath=async function(t,e){return Ze(Nn,t,{baseOptions:{modelAssetPath:e}})},Nn.createFromModelBuffer=function(t,e){return Ze(Nn,t,{baseOptions:{modelAssetBuffer:e}})},Nn.createFromOptions=function(t,e){return Ze(Nn,t,e)};var Wl=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function yd(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Sd(t){try{const e=new Wl(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.j)return e;t.j(e)}finally{uc(t)}}Wl.prototype.close=Wl.prototype.close;var Sn=class extends gn{constructor(t,e){super(new qn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Te(t=this.h=new og,0,1,e=new St),this.D=new eg,Te(this.h,0,3,this.D),this.v=new Qm,Te(this.h,0,2,this.v),Mi(this.v,4,1),_e(this.v,2,.5),_e(this.D,2,.5),_e(this.h,4,.5)}get baseOptions(){return nt(this.h,St,1)}set baseOptions(t){Te(this.h,0,1,t)}o(t){return"numPoses"in t&&Mi(this.v,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&_e(this.v,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&_e(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&_e(this.D,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,yd(this),jn(this,t,i),Sd(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,yd(this),Ti(this,t,r,e),Sd(this)}m(){var t=new un;vt(t,"image_in"),vt(t,"norm_rect"),rt(t,"normalized_landmarks"),rt(t,"world_landmarks"),rt(t,"segmentation_masks");const e=new Cn;si(e,h1,this.h);const n=new sn;Ln(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ft(n,"IMAGE:image_in"),ft(n,"NORM_RECT:norm_rect"),Je(n,"NORM_LANDMARKS:normalized_landmarks"),Je(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Pn(t,n),lc(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=va(s),this.landmarks.push(cc(i));de(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],de(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=ds(s),this.worldLandmarks.push(Js(i));de(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],de(this,i)}),this.outputSegmentationMasks&&(Je(n,"SEGMENTATION_MASK:segmentation_masks"),Ms(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>bs(this,s,!0,!this.j)),de(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],de(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(t,e){return Ze(Sn,t,{baseOptions:{modelAssetPath:e}})},Sn.createFromModelBuffer=function(t,e){return Ze(Sn,t,{baseOptions:{modelAssetBuffer:e}})},Sn.createFromOptions=function(t,e){return Ze(Sn,t,e)},Sn.POSE_CONNECTIONS=Mg;const Tg="/portal-head-tracker/",T1=`${Tg}models/face_landmarker.task`,A1=`${Tg}mediapipe/wasm`,bd="/models/face_landmarker.task",Td="/mediapipe/wasm";let nr=null;async function w1(){try{return await Ki.forVisionTasks(A1)}catch(t){return console.warn("[mp] forVisionTasks primary failed, falling back to",Td,t),await Ki.forVisionTasks(Td)}}async function R1(t,e){try{return await Et.createFromOptions(t,{baseOptions:{modelAssetPath:T1,delegate:e},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1})}catch(n){return console.warn("[mp] createFromOptions primary failed, falling back to",bd,n),await Et.createFromOptions(t,{baseOptions:{modelAssetPath:bd,delegate:e},runningMode:"VIDEO",numFaces:1,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1})}}async function C1(t="GPU"){const e=await w1();return nr=await R1(e,t),nr}async function Ag(){nr&&(await nr.close(),nr=null)}function L1(t,e){return(nr==null?void 0:nr.detectForVideo(t,e))??null}const Ad={ts:0,pe:null,raw:null},Xl=new Set;function wg(t){return Xl.add(t),()=>Xl.delete(t)}function P1(t){Object.assign(Ad,t);for(const e of Xl)e(Ad)}let Wn=!1,Oc=!1,vr=null,Kt=null,lh=null,Rg="center",Fo=null,Oo={width:1280,height:720},uh="GPU",Qn={d0:null,Z0:0};const fs={val:null},D1=1500;let Ui={pe:null,z_m:null,ts:0};window.LUCI_CFG=window.LUCI_CFG||{};async function U1({delegate:t="GPU",video:e=document.createElement("video"),deviceId:n=null,width:i=1280,height:r=720,initZ_m:s=.6}={}){Wn||(uh=t||"GPU",Fo=n??Fo,Oo={width:i,height:r},Qn={d0:null,Z0:s},fs.val=null,Ui={pe:null,z_m:null,ts:0},Kt=e,Kt.muted=!0,Kt.playsInline=!0,await Lg(),await hh(),Wn=!0,Kt.requestVideoFrameCallback(mc))}async function I1(){Wn=!1;try{await Ag()}catch{}lh=null,cu(),Kt=null,Qn={d0:null,Z0:0},fs.val=null,Ui={pe:null,z_m:null,ts:0}}async function Cg(t){Rg=t||"center"}async function N1(t){Fo=t||null,Kt&&await dh({resetZ:!0})}async function F1(t,e){Oo={width:t,height:e},Kt&&await dh({resetZ:!1})}async function O1(t="GPU"){if(!Kt)return;uh=t||"GPU";const e=Wn;Wn=!1,await hh(),Wn=e,Wn&&Kt.requestVideoFrameCallback(mc)}async function Lg(){var i;const t=await Mp(),e=Fo??((i=t[0])==null?void 0:i.deviceId)??void 0,n=await A0({deviceId:e,width:Oo.width,height:Oo.height});await w0(Kt,n)}async function hh(){try{await Ag()}catch{}lh=await C1(uh)}async function dh({resetZ:t=!1}={}){if(Oc){vr={resetZ:(vr==null?void 0:vr.resetZ)||t};return}Oc=!0;const e=Wn;if(Wn=!1,cu(),await Lg(),await new Promise(n=>{const i=()=>{Kt.removeEventListener("loadedmetadata",i),n()};Kt.addEventListener("loadedmetadata",i,{once:!0}),Kt.videoWidth&&Kt.videoHeight&&i()}),await hh(),t&&(Qn={d0:null,Z0:Qn.Z0},fs.val=null,Ui.ts=performance.now()),Wn=e,Wn&&Kt.requestVideoFrameCallback(mc),Oc=!1,vr){const n=vr;return vr=null,dh(n)}}function mc(t,e){var d,f,m,g,_;if(!Wn)return;Kt.requestVideoFrameCallback(mc);const n=e&&typeof e.mediaTime=="number"?e.mediaTime*1e3:t,i=performance.now(),r=lh?L1(Kt,n):null,s=performance.now()-i,a=(d=r==null?void 0:r.faceLandmarks)==null?void 0:d[0];let o=a?B1(a,Rg):null;o&&(o={x:1-o.x,y:o.y});let c=null;if(a){const{cL:p,cR:h}=k1(a),S=((f=window.LUCI_CFG)==null?void 0:f.zEstimator)||"hybrid",v=Math.max(.01,Math.min(.9,((m=window.LUCI_CFG)==null?void 0:m.zAlpha)??.08)),w=((g=window.LUCI_CFG)==null?void 0:g.zClampMin_m)??.25,L=((_=window.LUCI_CFG)==null?void 0:_.zClampMax_m)??2.5;let R=null;if(p&&h){const b=Math.hypot(p.x-h.x,p.y-h.y);!Qn.d0&&b>0&&(Qn.d0=b),Qn.d0&&b>1e-6&&(R=Qn.Z0*(Qn.d0/b))}const A=G1(a);let V=null;A!=null&&Qn.d0&&(V=Qn.Z0*(1+.85*-A));let E=R;S==="nose"?E=V??R:S==="hybrid"&&(R!=null&&V!=null?E=.65*R+.35*V:E=V??R),E!=null&&(fs.val=z1(fs.val,E,v),c=Math.min(L,Math.max(w,fs.val)))}let l=!!a&&!!o&&c!=null,u=!1;l?Ui={pe:o,z_m:c,ts:n}:Ui.pe&&Ui.z_m!=null&&n-Ui.ts<=D1?(o=Ui.pe,c=Ui.z_m,u=!0):(o=null,c=null),P1({ts:n,pe:o,raw:r,procMs:s,z_m:c,tracking:l,held:u})}function B1(t,e){const n=[33,133,159,145],i=[263,362,386,374],r=o=>{let c=0,l=0,u=0;for(const d of o){const f=t[d];f&&(c+=f.x,l+=f.y,u++)}return u?{x:c/u,y:l/u}:null},s=r(n),a=r(i);return e==="left"?a||s||null:e==="right"?s||a||null:a&&s?{x:(a.x+s.x)/2,y:(a.y+s.y)/2}:a||s||null}function k1(t){const e=[33,133,159,145],n=[263,362,386,374],i=r=>{let s=0,a=0,o=0;for(const c of r){const l=t[c];l&&(s+=l.x,a+=l.y,o++)}return o?{x:s/o,y:a/o}:null};return{cR:i(e),cL:i(n)}}function G1(t){const e=[6,4,1,195,5];let n=0,i=0;for(const r of e){const s=t[r];s&&Number.isFinite(s.z)&&(n+=s.z,i++)}return i?n/i:null}function z1(t,e,n){return t==null?e:t*(1-n)+e*n}function H1(t,{videoEl:e}){t.innerHTML=`
    <div id="trackerPanel" style="position:fixed; right:12px; bottom:12px; width:320px; background:#111; border:1px solid #333; border-radius:12px; z-index:9999">
      <div style="display:flex; align-items:center; justify-content:space-between; padding:6px 8px; border-bottom:1px solid #222">
        <strong>Face Tracker</strong>
        <button id="trkClose" aria-label="close">✕</button>
      </div>
      <div style="position:relative; aspect-ratio:16/9">
        <video id="trkVideo" style="position:absolute; inset:0; width:100%; height:100%; object-fit:contain; background:#000" playsinline muted></video>
        <canvas id="trkOverlay" style="position:absolute; inset:0; width:100%; height:100%"></canvas>
      </div>
      <pre id="trkReadout" style="margin:8px; white-space:pre-wrap"></pre>
    </div>
  `;const n=t.querySelector("#trkVideo");e&&(n.srcObject=e.srcObject,n.play());const i=t.querySelector("#trkOverlay"),r=i.getContext("2d");function s(){const o=i.getBoundingClientRect();i.width=Math.round(o.width*Math.min(devicePixelRatio||1,2)),i.height=Math.round(o.height*Math.min(devicePixelRatio||1,2)),r.setTransform(i.width/o.width,0,0,i.height/o.height,0,0)}new ResizeObserver(s).observe(i.parentElement),s();const a=wg(({pe:o})=>{if(r.clearRect(0,0,i.width,i.height),!o)return;const c=i.getBoundingClientRect();r.beginPath(),r.arc(o.x*c.width,o.y*c.height,6,0,Math.PI*2),r.fillStyle="#ffb14e",r.fill(),t.querySelector("#trkReadout").textContent=`Pe: ${o.x.toFixed(4)}, ${o.y.toFixed(4)}`});return t.querySelector("#trkClose").onclick=()=>t.firstElementChild.style.display="none",{destroy(){a(),t.innerHTML=""}}}const Pg="luci.config.v1",wd={delegate:"GPU",monitorX_m:.59,monitorY_m:.34,offsetX_m:0,offsetY_m:.3,offsetZ_m:0,headInitZ_m:.6,headInitY_m:.1,zEstimator:"hybrid",zAlpha:.08,zClampMin_m:.15,zClampMax_m:2.5,yGain:1,yGamma:1,yClamp01:!1,xGain:1.5,xGamma:1,xClamp01:!1,wideAngleMode:!0,lens:{u0:.5,v0:.5,k1:-.22,k2:0},yCalib:null,xCalib:null};function V1(){try{return{...wd,...JSON.parse(localStorage.getItem(Pg)||"{}")}}catch{return{...wd}}}function Dg(t){localStorage.setItem(Pg,JSON.stringify(t))}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="160",Wr={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},W1=0,Rd=1,X1=2,Ug=1,Y1=2,Di=3,dr=0,pn=1,pi=2,ir=0,ps=1,Cd=2,Ld=3,Pd=4,q1=5,br=100,j1=101,K1=102,Dd=103,Ud=104,$1=200,Z1=201,J1=202,Q1=203,Yl=204,ql=205,e2=206,t2=207,n2=208,i2=209,r2=210,s2=211,a2=212,o2=213,c2=214,l2=0,u2=1,h2=2,Bo=3,d2=4,f2=5,p2=6,m2=7,Ig=0,g2=1,_2=2,rr=0,v2=1,x2=2,E2=3,M2=4,y2=5,S2=6,Ng=300,As=301,ws=302,jl=303,Kl=304,gc=306,$l=1e3,ei=1001,Zl=1002,cn=1003,Id=1004,Bc=1005,Bn=1006,b2=1007,ca=1008,sr=1009,T2=1010,A2=1011,ph=1012,Fg=1013,Ji=1014,Qi=1015,la=1016,Og=1017,Bg=1018,Dr=1020,w2=1021,ti=1023,R2=1024,C2=1025,Ur=1026,Rs=1027,L2=1028,kg=1029,P2=1030,Gg=1031,zg=1033,kc=33776,Gc=33777,zc=33778,Hc=33779,Nd=35840,Fd=35841,Od=35842,Bd=35843,Hg=36196,kd=37492,Gd=37496,zd=37808,Hd=37809,Vd=37810,Wd=37811,Xd=37812,Yd=37813,qd=37814,jd=37815,Kd=37816,$d=37817,Zd=37818,Jd=37819,Qd=37820,ef=37821,Vc=36492,tf=36494,nf=36495,D2=36283,rf=36284,sf=36285,af=36286,Vg=3e3,Ir=3001,U2=3200,I2=3201,N2=0,F2=1,Hn="",jt="srgb",Hi="srgb-linear",mh="display-p3",_c="display-p3-linear",ko="linear",mt="srgb",Go="rec709",zo="p3",Yr=7680,of=519,O2=512,B2=513,k2=514,Wg=515,G2=516,z2=517,H2=518,V2=519,cf=35044,lf="300 es",Jl=1035,Fi=2e3,Ho=2001;class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Ql=180/Math.PI;function xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function W2(t,e){return(t%e+e)%e}function Wc(t,e,n){return(1-n)*t+n*e}function uf(t){return(t&t-1)===0&&t!==0}function eu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const X2={DEG2RAD:Qs};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,a,o,c,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=r[0],p=r[3],h=r[6],S=r[1],v=r[4],w=r[7],L=r[2],R=r[5],A=r[8];return s[0]=a*_+o*S+c*L,s[3]=a*p+o*v+c*R,s[6]=a*h+o*w+c*A,s[1]=l*_+u*S+d*L,s[4]=l*p+u*v+d*R,s[7]=l*h+u*w+d*A,s[2]=f*_+m*S+g*L,s[5]=f*p+m*v+g*R,s[8]=f*h+m*w+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*s,m=l*s-a*c,g=n*d+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=f*_,e[4]=(u*n-r*c)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*c-l*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new qe;function Xg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Y2(){const t=Vo("canvas");return t.style.display="block",t}const hf={};function ea(t){t in hf||(hf[t]=!0,console.warn(t))}const df=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ff=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Hi]:{transfer:ko,primaries:Go,toReference:t=>t,fromReference:t=>t},[jt]:{transfer:mt,primaries:Go,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[_c]:{transfer:ko,primaries:zo,toReference:t=>t.applyMatrix3(ff),fromReference:t=>t.applyMatrix3(df)},[mh]:{transfer:mt,primaries:zo,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ff),fromReference:t=>t.applyMatrix3(df).convertLinearToSRGB()}},q2=new Set([Hi,_c]),ct={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!q2.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Da[e].toReference,r=Da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Da[t].primaries},getTransfer:function(t){return t===Hn?ko:Da[t].transfer}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class Yg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=Vo("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ms(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j2=0;class qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j2++}),this.uuid=xa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qc(r[a].image)):s.push(qc(r[a]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Yg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K2=0;class wn extends Hr{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=ei,r=ei,s=Bn,a=ca,o=ti,c=sr,l=wn.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K2++}),this.uuid=xa(),this.name="",this.source=new qg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ir?jt:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?Ir:Vg}set encoding(e){ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ir?jt:Hn}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Ng;wn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,i=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(l+1)/2,w=(m+1)/2,L=(h+1)/2,R=(u+f)/4,A=(d+_)/4,V=(g+p)/4;return v>w&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=A/i):w>L?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=R/r,s=V/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=V/s),this.set(i,r,s,n),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(f-u)/S,this.w=Math.acos((l+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $2 extends Hr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ir?jt:Hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends $2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jg extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Z2 extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=g,e[n+3]=_;return}if(d!==_||c!==f||l!==m||u!==g){let p=1-o;const h=c*f+l*m+u*g+d*_,S=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const L=Math.sqrt(v),R=Math.atan2(L,h*S);p=Math.sin(p*R)/L,o=Math.sin(o*R)/L}const w=o*S;if(c=c*p+f*w,l=l*p+m*w,u=u*p+g*w,d=d*p+_*w,p===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+u*d+c*m-l*f,e[n+1]=c*g+u*f+l*d-o*m,e[n+2]=l*g+u*m+o*f-c*d,e[n+3]=u*g-o*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new D,pf=new Gr;class Ea{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Ia.subVectors(this.max,Hs),jr.subVectors(e.a,Hs),Kr.subVectors(e.b,Hs),$r.subVectors(e.c,Hs),Wi.subVectors(Kr,jr),Xi.subVectors($r,Kr),xr.subVectors(jr,$r);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-xr.z,xr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,xr.z,0,-xr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-xr.y,xr.x,0];return!Kc(n,jr,Kr,$r,Ia)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,jr,Kr,$r,Ia))?!1:(Na.crossVectors(Wi,Xi),n=[Na.x,Na.y,Na.z],Kc(n,jr,Kr,$r,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new D,new D,new D,new D,new D,new D,new D,new D],$n=new D,Ua=new Ea,jr=new D,Kr=new D,$r=new D,Wi=new D,Xi=new D,xr=new D,Hs=new D,Ia=new D,Na=new D,Er=new D;function Kc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),c=e.dot(Er),l=n.dot(Er),u=i.dot(Er);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const J2=new Ea,Vs=new D,$c=new D;class vc{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add($c)),this.expandByPoint(Vs.copy(e.center).sub($c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new D,Zc=new D,Fa=new D,Yi=new D,Jc=new D,Oa=new D,Qc=new D;class gh{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zc.copy(e).add(n).multiplyScalar(.5),Fa.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(Zc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Fa),o=Yi.dot(this.direction),c=-Yi.dot(Fa),l=Yi.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*c-o,f=a*o-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zc).addScaledVector(Fa,f),m}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){Jc.subVectors(n,e),Oa.subVectors(i,e),Qc.crossVectors(Jc,Oa);let a=this.direction.dot(Qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const c=o*this.direction.dot(Oa.crossVectors(Yi,Oa));if(c<0)return null;const l=o*this.direction.dot(Jc.cross(Yi));if(l<0||c+l>a)return null;const u=-o*Yi.dot(Qc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,i,r,s,a,o,c,l,u,d,f,m,g,_,p){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,d,f,m,g,_,p)}set(e,n,i,r,s,a,o,c,l,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Zr.setFromMatrixColumn(e,0).length(),s=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,_=o*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=m+g*l,n[5]=f-_*l,n[9]=-o*c,n[2]=_-f*l,n[6]=g+m*l,n[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,_=l*d;n[0]=f+_*o,n[4]=g*o-m,n[8]=a*l,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=m*o-g,n[6]=_+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,_=l*d;n[0]=f-_*o,n[4]=-a*d,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*u,n[9]=_-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,_=o*d;n[0]=c*u,n[4]=g*l-m,n[8]=f*l+_,n[1]=c*d,n[5]=_*l+f,n[9]=m*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,g=o*c,_=o*l;n[0]=c*u,n[4]=_-f*d,n[8]=g*d+m,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=m*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=a*c,m=a*l,g=o*c,_=o*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+_,n[5]=a*u,n[9]=m*d-g,n[2]=g*d-m,n[6]=o*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q2,e,ev)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),qi.crossVectors(i,bn),qi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),qi.crossVectors(i,bn)),qi.normalize(),Ba.crossVectors(bn,qi),r[0]=qi.x,r[4]=Ba.x,r[8]=bn.x,r[1]=qi.y,r[5]=Ba.y,r[9]=bn.y,r[2]=qi.z,r[6]=Ba.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],h=i[14],S=i[3],v=i[7],w=i[11],L=i[15],R=r[0],A=r[4],V=r[8],E=r[12],b=r[1],G=r[5],q=r[9],re=r[13],P=r[2],B=r[6],H=r[10],Y=r[14],X=r[3],W=r[7],K=r[11],te=r[15];return s[0]=a*R+o*b+c*P+l*X,s[4]=a*A+o*G+c*B+l*W,s[8]=a*V+o*q+c*H+l*K,s[12]=a*E+o*re+c*Y+l*te,s[1]=u*R+d*b+f*P+m*X,s[5]=u*A+d*G+f*B+m*W,s[9]=u*V+d*q+f*H+m*K,s[13]=u*E+d*re+f*Y+m*te,s[2]=g*R+_*b+p*P+h*X,s[6]=g*A+_*G+p*B+h*W,s[10]=g*V+_*q+p*H+h*K,s[14]=g*E+_*re+p*Y+h*te,s[3]=S*R+v*b+w*P+L*X,s[7]=S*A+v*G+w*B+L*W,s[11]=S*V+v*q+w*H+L*K,s[15]=S*E+v*re+w*Y+L*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*m-i*c*m)+_*(+n*c*m-n*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+p*(+n*l*d-n*o*m-s*a*d+i*a*m+s*o*u-i*l*u)+h*(-r*o*u-n*c*d+n*o*f+r*a*d-i*a*f+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],S=d*p*l-_*f*l+_*c*m-o*p*m-d*c*h+o*f*h,v=g*f*l-u*p*l-g*c*m+a*p*m+u*c*h-a*f*h,w=u*_*l-g*d*l+g*o*m-a*_*m-u*o*h+a*d*h,L=g*d*c-u*_*c-g*o*f+a*_*f+u*o*p-a*d*p,R=n*S+i*v+r*w+s*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(_*f*s-d*p*s-_*r*m+i*p*m+d*r*h-i*f*h)*A,e[2]=(o*p*s-_*c*s+_*r*l-i*p*l-o*r*h+i*c*h)*A,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*m-i*c*m)*A,e[4]=v*A,e[5]=(u*p*s-g*f*s+g*r*m-n*p*m-u*r*h+n*f*h)*A,e[6]=(g*c*s-a*p*s-g*r*l+n*p*l+a*r*h-n*c*h)*A,e[7]=(a*f*s-u*c*s+u*r*l-n*f*l-a*r*m+n*c*m)*A,e[8]=w*A,e[9]=(g*d*s-u*_*s-g*i*m+n*_*m+u*i*h-n*d*h)*A,e[10]=(a*_*s-g*o*s+g*i*l-n*_*l-a*i*h+n*o*h)*A,e[11]=(u*o*s-a*d*s-u*i*l+n*d*l+a*i*m-n*o*m)*A,e[12]=L*A,e[13]=(u*_*r-g*d*r+g*i*f-n*_*f-u*i*p+n*d*p)*A,e[14]=(g*o*r-a*_*r-g*i*c+n*_*c+a*i*p-n*o*p)*A,e[15]=(a*d*r-u*o*r+u*i*c-n*d*c-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,d=o+o,f=s*l,m=s*u,g=s*d,_=a*u,p=a*d,h=o*d,S=c*l,v=c*u,w=c*d,L=i.x,R=i.y,A=i.z;return r[0]=(1-(_+h))*L,r[1]=(m+w)*L,r[2]=(g-v)*L,r[3]=0,r[4]=(m-w)*R,r[5]=(1-(f+h))*R,r[6]=(p+S)*R,r[7]=0,r[8]=(g+v)*A,r[9]=(p-S)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Zr.set(r[0],r[1],r[2]).length();const a=Zr.set(r[4],r[5],r[6]).length(),o=Zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const l=1/s,u=1/a,d=1/o;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Fi){const c=this.elements,l=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let m,g;if(o===Fi)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ho)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Fi){const c=this.elements,l=1/(n-e),u=1/(i-r),d=1/(a-s),f=(n+e)*l,m=(i+r)*u;let g,_;if(o===Fi)g=(a+s)*d,_=-2*d;else if(o===Ho)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Zr=new D,Zn=new Yt,Q2=new D(0,0,0),ev=new D(1,1,1),qi=new D,Ba=new D,bn=new D,mf=new Yt,gf=new Gr;class xc{constructor(e=0,n=0,i=0,r=xc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gf.setFromEuler(this),this.setFromQuaternion(gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xc.DEFAULT_ORDER="XYZ";class Kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tv=0;const _f=new D,Jr=new Gr,Ci=new Yt,ka=new D,Ws=new D,nv=new D,iv=new Gr,vf=new D(1,0,0),xf=new D(0,1,0),Ef=new D(0,0,1),rv={type:"added"},sv={type:"removed"};class mn extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new D,n=new xc,i=new Gr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yt},normalMatrix:{value:new qe}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(vf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,n){return _f.copy(e).applyQuaternion(this.quaternion),this.position.add(_f.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ka.copy(e):ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Ws,ka,this.up):Ci.lookAt(ka,Ws,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(Ci),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new D(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new D,Li=new D,el=new D,Pi=new D,Qr=new D,es=new D,Mf=new D,tl=new D,nl=new D,il=new D;let Ga=!1;class kn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Li.subVectors(i,n),el.subVectors(e,n);const a=Jn.dot(Jn),o=Jn.dot(Li),c=Jn.dot(el),l=Li.dot(Li),u=Li.dot(el),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,n,i,r,s,a,o,c){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),this.getInterpolation(e,n,i,r,s,a,o,c)}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pi.x),c.addScaledVector(a,Pi.y),c.addScaledVector(o,Pi.z),c)}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Li.subVectors(e,n),Jn.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Jn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ga===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ga=!0),kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),es.subVectors(s,i),tl.subVectors(e,i);const c=Qr.dot(tl),l=es.dot(tl);if(c<=0&&l<=0)return n.copy(i);nl.subVectors(e,r);const u=Qr.dot(nl),d=es.dot(nl);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Qr,a);il.subVectors(e,s);const m=Qr.dot(il),g=es.dot(il);if(g>=0&&m<=g)return n.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(es,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Mf.subVectors(s,r),o=(d-u)/(d-u+(m-g)),n.copy(r).addScaledVector(Mf,o);const h=1/(p+_+f);return a=_*h,o=f*h,n.copy(i).addScaledVector(Qr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},za={h:0,s:0,l:0};function rl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=W2(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=rl(a,s,e+1/3),this.g=rl(a,s,e),this.b=rl(a,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=jt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jt){const i=$g[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=Yc(e.r),this.g=Yc(e.g),this.b=Yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return ct.fromWorkingColorSpace(en.copy(this),e),Math.round(ln(en.r*255,0,255))*65536+Math.round(ln(en.g*255,0,255))*256+Math.round(ln(en.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=jt){ct.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(za);const i=Wc(ji.h,za.h,n),r=Wc(ji.s,za.s,n),s=Wc(ji.l,za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Qe;Qe.NAMES=$g;let av=0;class Ma extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=ps,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=ql,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==ql&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==of&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wo extends Ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ig,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new D,Ha=new Xe;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ha.fromBufferAttribute(this,n),Ha.applyMatrix3(e),this.setXY(n,Ha.x,Ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cf&&(e.usage=this.usage),e}}class Zg extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jg extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zt extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ov=0;const Fn=new Yt,sl=new mn,ts=new D,Tn=new Ea,Xs=new Ea,Vt=new D;class Kn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xg(e)?Jg:Zg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(Tn.min,Xs.min),Tn.expandByPoint(Vt),Vt.addVectors(Tn.max,Xs.max),Tn.expandByPoint(Vt)):(Tn.expandByPoint(Xs.min),Tn.expandByPoint(Xs.max))}Tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Vt.fromBufferAttribute(o,l),c&&(ts.fromBufferAttribute(e,l),Vt.add(ts)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<o;b++)l[b]=new D,u[b]=new D;const d=new D,f=new D,m=new D,g=new Xe,_=new Xe,p=new Xe,h=new D,S=new D;function v(b,G,q){d.fromArray(r,b*3),f.fromArray(r,G*3),m.fromArray(r,q*3),g.fromArray(a,b*2),_.fromArray(a,G*2),p.fromArray(a,q*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const re=1/(_.x*p.y-p.x*_.y);isFinite(re)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(re),S.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(re),l[b].add(h),l[G].add(h),l[q].add(h),u[b].add(S),u[G].add(S),u[q].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,G=w.length;b<G;++b){const q=w[b],re=q.start,P=q.count;for(let B=re,H=re+P;B<H;B+=3)v(i[B+0],i[B+1],i[B+2])}const L=new D,R=new D,A=new D,V=new D;function E(b){A.fromArray(s,b*3),V.copy(A);const G=l[b];L.copy(G),L.sub(A.multiplyScalar(A.dot(G))).normalize(),R.crossVectors(V,G);const re=R.dot(u[b])<0?-1:1;c[b*4]=L.x,c[b*4+1]=L.y,c[b*4+2]=L.z,c[b*4+3]=re}for(let b=0,G=w.length;b<G;++b){const q=w[b],re=q.start,P=q.count;for(let B=re,H=re+P;B<H;B+=3)E(i[B+0]),E(i[B+1]),E(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new vi(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yf=new Yt,Mr=new gh,Va=new vc,Sf=new D,ns=new D,is=new D,rs=new D,al=new D,Wa=new D,Xa=new Xe,Ya=new Xe,qa=new Xe,bf=new D,Tf=new D,Af=new D,ja=new D,Ka=new D;class _i extends mn{constructor(e=new Kn,n=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(al.fromBufferAttribute(d,e),a?Wa.addScaledVector(al,u):Wa.addScaledVector(al.sub(n),u))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Va.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Va,Sf)===null||Mr.origin.distanceToSquared(Sf)>(e.far-e.near)**2))&&(yf.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(yf),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,L=v;w<L;w+=3){const R=o.getX(w),A=o.getX(w+1),V=o.getX(w+2);r=$a(this,h,e,i,l,u,d,R,A,V),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const S=o.getX(p),v=o.getX(p+1),w=o.getX(p+2);r=$a(this,a,e,i,l,u,d,S,v,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=a[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,L=v;w<L;w+=3){const R=w,A=w+1,V=w+2;r=$a(this,h,e,i,l,u,d,R,A,V),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const S=p,v=p+1,w=p+2;r=$a(this,a,e,i,l,u,d,S,v,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function cv(t,e,n,i,r,s,a,o){let c;if(e.side===pn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===dr,o),c===null)return null;Ka.copy(o),Ka.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Ka);return l<n.near||l>n.far?null:{distance:l,point:Ka.clone(),object:t}}function $a(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,ns),t.getVertexPosition(c,is),t.getVertexPosition(l,rs);const u=cv(t,e,n,i,ns,is,rs,ja);if(u){r&&(Xa.fromBufferAttribute(r,o),Ya.fromBufferAttribute(r,c),qa.fromBufferAttribute(r,l),u.uv=kn.getInterpolation(ja,ns,is,rs,Xa,Ya,qa,new Xe)),s&&(Xa.fromBufferAttribute(s,o),Ya.fromBufferAttribute(s,c),qa.fromBufferAttribute(s,l),u.uv1=kn.getInterpolation(ja,ns,is,rs,Xa,Ya,qa,new Xe),u.uv2=u.uv1),a&&(bf.fromBufferAttribute(a,o),Tf.fromBufferAttribute(a,c),Af.fromBufferAttribute(a,l),u.normal=kn.getInterpolation(ja,ns,is,rs,bf,Tf,Af,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};kn.getNormal(ns,is,rs,d.normal),u.face=d}return u}class ya extends Kn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(d,2));function g(_,p,h,S,v,w,L,R,A,V,E){const b=w/A,G=L/V,q=w/2,re=L/2,P=R/2,B=A+1,H=V+1;let Y=0,X=0;const W=new D;for(let K=0;K<H;K++){const te=K*G-re;for(let le=0;le<B;le++){const z=le*b-q;W[_]=z*S,W[p]=te*v,W[h]=P,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[h]=R>0?1:-1,u.push(W.x,W.y,W.z),d.push(le/A),d.push(1-K/V),Y+=1}}for(let K=0;K<V;K++)for(let te=0;te<A;te++){const le=f+te+B*K,z=f+te+B*(K+1),j=f+(te+1)+B*(K+1),ce=f+(te+1)+B*K;c.push(le,z,ce),c.push(z,j,ce),X+=6}o.addGroup(m,X,E),m+=X,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function lv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qg(t){return t.getRenderTarget()===null?t.outputColorSpace:ct.workingColorSpace}const uv={clone:Cs,merge:an};var hv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hv,this.fragmentShader=dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=lv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e0 extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gn extends e0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ss=-90,as=1;class fv extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new Gn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new Gn(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new Gn(ss,as,e,n);o.layers=this.layers,this.add(o);const c=new Gn(ss,as,e,n);c.layers=this.layers,this.add(c);const l=new Gn(ss,as,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class t0 extends wn{constructor(e,n,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:As,super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pv extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ir?jt:Hn),this.texture=new t0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ya(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ir});s.uniforms.tEquirect.value=n;const a=new _i(r,s),o=n.minFilter;return n.minFilter===ca&&(n.minFilter=Bn),new fv(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const ol=new D,mv=new D,gv=new qe;class $i{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ol.subVectors(i,n).cross(mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gv.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new vc,Za=new D;class n0{constructor(e=new $i,n=new $i,i=new $i,r=new $i,s=new $i,a=new $i){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],_=r[10],p=r[11],h=r[12],S=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-s,f-l,p-m,w-h).normalize(),i[1].setComponents(c+s,f+l,p+m,w+h).normalize(),i[2].setComponents(c+a,f+u,p+g,w+S).normalize(),i[3].setComponents(c-a,f-u,p-g,w-S).normalize(),i[4].setComponents(c-o,f-d,p-_,w-v).normalize(),n===Fi)i[5].setComponents(c+o,f+d,p+_,w+v).normalize();else if(n===Ho)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _v(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,u){const d=l.array,f=l.usage,m=d.byteLength,g=t.createBuffer();t.bindBuffer(u,g),t.bufferData(u,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=t.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=t.SHORT;else if(d instanceof Uint32Array)_=t.UNSIGNED_INT;else if(d instanceof Int32Array)_=t.INT;else if(d instanceof Int8Array)_=t.BYTE;else if(d instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){const f=u.array,m=u._updateRange,g=u.updateRanges;if(t.bindBuffer(d,l),m.count===-1&&g.length===0&&t.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const h=g[_];n?t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):t.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(t.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:a,remove:o,update:c}}class Ec extends Kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=n/c,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const S=h*f-a;for(let v=0;v<l;v++){const w=v*d-s;g.push(w,-S,0),_.push(0,0,1),p.push(v/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let S=0;S<o;S++){const v=S+l*h,w=S+l*(h+1),L=S+1+l*(h+1),R=S+1+l*h;m.push(v,w,R),m.push(w,L,R)}this.setIndex(m),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Av=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$v=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ax=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_x=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,n3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,d3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,m3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,g3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,T3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Y3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:vv,alphahash_pars_fragment:xv,alphamap_fragment:Ev,alphamap_pars_fragment:Mv,alphatest_fragment:yv,alphatest_pars_fragment:Sv,aomap_fragment:bv,aomap_pars_fragment:Tv,batching_pars_vertex:Av,batching_vertex:wv,begin_vertex:Rv,beginnormal_vertex:Cv,bsdfs:Lv,iridescence_fragment:Pv,bumpmap_pars_fragment:Dv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Iv,clipping_planes_pars_vertex:Nv,clipping_planes_vertex:Fv,color_fragment:Ov,color_pars_fragment:Bv,color_pars_vertex:kv,color_vertex:Gv,common:zv,cube_uv_reflection_fragment:Hv,defaultnormal_vertex:Vv,displacementmap_pars_vertex:Wv,displacementmap_vertex:Xv,emissivemap_fragment:Yv,emissivemap_pars_fragment:qv,colorspace_fragment:jv,colorspace_pars_fragment:Kv,envmap_fragment:$v,envmap_common_pars_fragment:Zv,envmap_pars_fragment:Jv,envmap_pars_vertex:Qv,envmap_physical_pars_fragment:hx,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:sx,lightmap_fragment:ax,lightmap_pars_fragment:ox,lights_lambert_fragment:cx,lights_lambert_pars_fragment:lx,lights_pars_begin:ux,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:_x,lights_fragment_begin:vx,lights_fragment_maps:xx,lights_fragment_end:Ex,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:yx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:bx,map_fragment:Tx,map_pars_fragment:Ax,map_particle_fragment:wx,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Lx,morphcolor_vertex:Px,morphnormal_vertex:Dx,morphtarget_pars_vertex:Ux,morphtarget_vertex:Ix,normal_fragment_begin:Nx,normal_fragment_maps:Fx,normal_pars_fragment:Ox,normal_pars_vertex:Bx,normal_vertex:kx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:Yx,premultiplied_alpha_fragment:qx,project_vertex:jx,dithering_fragment:Kx,dithering_pars_fragment:$x,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:Qx,shadowmap_pars_vertex:e3,shadowmap_vertex:t3,shadowmask_pars_fragment:n3,skinbase_vertex:i3,skinning_pars_vertex:r3,skinning_vertex:s3,skinnormal_vertex:a3,specularmap_fragment:o3,specularmap_pars_fragment:c3,tonemapping_fragment:l3,tonemapping_pars_fragment:u3,transmission_fragment:h3,transmission_pars_fragment:d3,uv_pars_fragment:f3,uv_pars_vertex:p3,uv_vertex:m3,worldpos_vertex:g3,background_vert:_3,background_frag:v3,backgroundCube_vert:x3,backgroundCube_frag:E3,cube_vert:M3,cube_frag:y3,depth_vert:S3,depth_frag:b3,distanceRGBA_vert:T3,distanceRGBA_frag:A3,equirect_vert:w3,equirect_frag:R3,linedashed_vert:C3,linedashed_frag:L3,meshbasic_vert:P3,meshbasic_frag:D3,meshlambert_vert:U3,meshlambert_frag:I3,meshmatcap_vert:N3,meshmatcap_frag:F3,meshnormal_vert:O3,meshnormal_frag:B3,meshphong_vert:k3,meshphong_frag:G3,meshphysical_vert:z3,meshphysical_frag:H3,meshtoon_vert:V3,meshtoon_frag:W3,points_vert:X3,points_frag:Y3,shadow_vert:q3,shadow_frag:j3,sprite_vert:K3,sprite_frag:$3},se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},fi={basic:{uniforms:an([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:an([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:an([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:an([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:an([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:an([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:an([se.points,se.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:an([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:an([se.common,se.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:an([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:an([se.sprite,se.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:an([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:an([se.lights,se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};fi.physical={uniforms:an([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ja={r:0,b:0,g:0};function Z3(t,e,n,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,l,u,d=null,f=0,m=null;function g(p,h){let S=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?n:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),S=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gc)?(u===void 0&&(u=new _i(new ya(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Cs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ct.getTransfer(v.colorSpace)!==mt,(d!==v||f!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _i(new Ec(2,2),new zr({name:"BackgroundMaterial",uniforms:Cs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=ct.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==t.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,m=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){p.getRGB(Ja,Qg(t)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),c=h,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function J3(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=p(null);let l=c,u=!1;function d(P,B,H,Y,X){let W=!1;if(a){const K=_(Y,H,B);l!==K&&(l=K,m(l.object)),W=h(P,Y,H,X),W&&S(P,Y,H,X)}else{const K=B.wireframe===!0;(l.geometry!==Y.id||l.program!==H.id||l.wireframe!==K)&&(l.geometry=Y.id,l.program=H.id,l.wireframe=K,W=!0)}X!==null&&n.update(X,t.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,V(P,B,H,Y),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(X).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(P){return i.isWebGL2?t.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?t.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,B,H){const Y=H.wireframe===!0;let X=o[P.id];X===void 0&&(X={},o[P.id]=X);let W=X[B.id];W===void 0&&(W={},X[B.id]=W);let K=W[Y];return K===void 0&&(K=p(f()),W[Y]=K),K}function p(P){const B=[],H=[],Y=[];for(let X=0;X<r;X++)B[X]=0,H[X]=0,Y[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:Y,object:P,attributes:{},index:null}}function h(P,B,H,Y){const X=l.attributes,W=B.attributes;let K=0;const te=H.getAttributes();for(const le in te)if(te[le].location>=0){const j=X[le];let ce=W[le];if(ce===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function S(P,B,H,Y){const X={},W=B.attributes;let K=0;const te=H.getAttributes();for(const le in te)if(te[le].location>=0){let j=W[le];j===void 0&&(le==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),le==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),X[le]=ce,K++}l.attributes=X,l.attributesNum=K,l.index=Y}function v(){const P=l.newAttributes;for(let B=0,H=P.length;B<H;B++)P[B]=0}function w(P){L(P,0)}function L(P,B){const H=l.newAttributes,Y=l.enabledAttributes,X=l.attributeDivisors;H[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),X[P]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,B),X[P]=B)}function R(){const P=l.newAttributes,B=l.enabledAttributes;for(let H=0,Y=B.length;H<Y;H++)B[H]!==P[H]&&(t.disableVertexAttribArray(H),B[H]=0)}function A(P,B,H,Y,X,W,K){K===!0?t.vertexAttribIPointer(P,B,H,X,W):t.vertexAttribPointer(P,B,H,Y,X,W)}function V(P,B,H,Y){if(i.isWebGL2===!1&&(P.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=Y.attributes,W=H.getAttributes(),K=B.defaultAttributeValues;for(const te in W){const le=W[te];if(le.location>=0){let z=X[te];if(z===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(z=P.instanceColor)),z!==void 0){const j=z.normalized,ce=z.itemSize,ye=n.get(z);if(ye===void 0)continue;const Ee=ye.buffer,Ne=ye.type,Fe=ye.bytesPerElement,Ce=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||z.gpuType===Fg);if(z.isInterleavedBufferAttribute){const je=z.data,N=je.stride,qt=z.offset;if(je.isInstancedInterleavedBuffer){for(let Ae=0;Ae<le.locationSize;Ae++)L(le.location+Ae,je.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Ae=0;Ae<le.locationSize;Ae++)w(le.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Ae=0;Ae<le.locationSize;Ae++)A(le.location+Ae,ce/le.locationSize,Ne,j,N*Fe,(qt+ce/le.locationSize*Ae)*Fe,Ce)}else{if(z.isInstancedBufferAttribute){for(let je=0;je<le.locationSize;je++)L(le.location+je,z.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let je=0;je<le.locationSize;je++)w(le.location+je);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let je=0;je<le.locationSize;je++)A(le.location+je,ce/le.locationSize,Ne,j,ce*Fe,ce/le.locationSize*je*Fe,Ce)}}else if(K!==void 0){const j=K[te];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(le.location,j);break;case 3:t.vertexAttrib3fv(le.location,j);break;case 4:t.vertexAttrib4fv(le.location,j);break;default:t.vertexAttrib1fv(le.location,j)}}}}R()}function E(){q();for(const P in o){const B=o[P];for(const H in B){const Y=B[H];for(const X in Y)g(Y[X].object),delete Y[X];delete B[H]}delete o[P]}}function b(P){if(o[P.id]===void 0)return;const B=o[P.id];for(const H in B){const Y=B[H];for(const X in Y)g(Y[X].object),delete Y[X];delete B[H]}delete o[P.id]}function G(P){for(const B in o){const H=o[B];if(H[P.id]===void 0)continue;const Y=H[P.id];for(const X in Y)g(Y[X].object),delete Y[X];delete H[P.id]}}function q(){re(),u=!0,l!==c&&(l=c,m(l.object))}function re(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:q,resetDefaultState:re,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:w,disableUnusedAttributes:R}}function Q3(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,d){t.drawArrays(s,u,d),n.update(d,s,1)}function c(u,d,f){if(f===0)return;let m,g;if(r)m=t,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,f),n.update(d,s,f)}function l(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];n.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function eE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=a||e.has("OES_texture_float"),L=v&&w,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:R}}function tE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new $i,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const S=s?0:i,v=S*4;let w=h.clippingState||null;c.value=w,w=u(g,f,v,m);for(let L=0;L!==v;++L)w[L]=n[L];h.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const h=m+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,w=m;v!==_;++v,w+=4)a.copy(d[v]).applyMatrix4(S,o),a.normal.toArray(p,w),p[w+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function nE(t){let e=new WeakMap;function n(a,o){return o===jl?a.mapping=As:o===Kl&&(a.mapping=ws),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===jl||o===Kl)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new pv(c.height/2);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iE extends e0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=4,wf=[.125,.215,.35,.446,.526,.582],Tr=20,cl=new iE,Rf=new Qe;let ll=null,ul=0,hl=0;const Sr=(1+Math.sqrt(5))/2,os=1/Sr,Cf=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Sr,os),new D(0,Sr,-os),new D(os,0,Sr),new D(-os,0,Sr),new D(Sr,os,0),new D(-Sr,os,0)];class Lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ll=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,ul,hl),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===As||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:la,format:ti,colorSpace:Hi,depthBuffer:!1},r=Pf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rE(s)),this._blurMaterial=sE(s,e,n)}return r}_compileMaterial(e){const n=new _i(this._lodPlanes[0],e);this._renderer.compile(n,cl)}_sceneToCubeUV(e,n,i,r){const o=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Rf),u.toneMapping=rr,u.autoClear=!1;const m=new Wo({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new _i(new ya,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Rf),_=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):S===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const v=this._cubeSize;Qa(r,S*v,h>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===As||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _i(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Qa(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cf[(r-1)%Cf.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _i(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Tr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const h=[];let S=0;for(let A=0;A<Tr;++A){const V=A/_,E=Math.exp(-V*V/2);h.push(E),A===0?S+=E:A<p&&(S+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const w=this._sizeLods[r],L=3*w*(r>v-us?r-v+us:0),R=4*(this._cubeSize-w);Qa(n,L,R,3*w,2*w),c.setRenderTarget(n),c.render(d,cl)}}function rE(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+wf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-us?c=wf[a-t+us-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,S=new Float32Array(_*g*m),v=new Float32Array(p*g*m),w=new Float32Array(h*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,V=R>2?0:-1,E=[A,V,0,A+2/3,V,0,A+2/3,V+1,0,A,V,0,A+2/3,V+1,0,A,V+1,0];S.set(E,_*g*R),v.set(f,p*g*R);const b=[R,R,R,R,R,R];w.set(b,h*g*R)}const L=new Kn;L.setAttribute("position",new vi(S,_)),L.setAttribute("uv",new vi(v,p)),L.setAttribute("faceIndex",new vi(w,h)),e.push(L),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Pf(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function sE(t,e,n){const i=new Float32Array(Tr),r=new D(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Df(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Uf(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===jl||c===Kl,u=c===As||c===ws;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new Lf(t)),d=l?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||u&&d&&r(d)){n===null&&(n=new Lf(t));const f=l?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function oE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cE(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,h=_.length;p<h;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)e.update(_[p],t.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let v=0,w=S.length;v<w;v+=3){const L=S[v+0],R=S[v+1],A=S[v+2];f.push(L,R,R,A,A,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,w=S.length/3-1;v<w;v+=3){const L=v+0,R=v+1,A=v+2;f.push(L,R,R,A,A,L)}}else return;const p=new(Xg(f)?Jg:Zg)(f,1);p.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function lE(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){t.drawElements(s,g,o,m*c),n.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,o,m*c,_),n.update(g,s,_)}function f(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<_;h++)this.render(m[h]/c,g[h]);else{p.multiDrawElementsWEBGL(s,g,0,o,m,0,_);let h=0;for(let S=0;S<_;S++)h+=g[S];n.update(h,s,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function uE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hE(t,e){return t[0]-e[0]}function dE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function fE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new $t,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let P=function(){q.dispose(),s.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let V=0;S===!0&&(V=1),v===!0&&(V=2),w===!0&&(V=3);let E=u.attributes.position.count*V,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*b*4*g),q=new jg(G,E,b,g);q.type=Qi,q.needsUpdate=!0;const re=V*4;for(let B=0;B<g;B++){const H=L[B],Y=R[B],X=A[B],W=E*b*4*B;for(let K=0;K<H.count;K++){const te=K*re;S===!0&&(a.fromBufferAttribute(H,K),G[W+te+0]=a.x,G[W+te+1]=a.y,G[W+te+2]=a.z,G[W+te+3]=0),v===!0&&(a.fromBufferAttribute(Y,K),G[W+te+4]=a.x,G[W+te+5]=a.y,G[W+te+6]=a.z,G[W+te+7]=0),w===!0&&(a.fromBufferAttribute(X,K),G[W+te+8]=a.x,G[W+te+9]=a.y,G[W+te+10]=a.z,G[W+te+11]=X.itemSize===4?a.w:1)}}_={count:g,texture:q,size:new Xe(E,b)},s.set(u,_),u.addEventListener("dispose",P)}let p=0;for(let S=0;S<f.length;S++)p+=f[S];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(t,"morphTargetBaseInfluence",h),d.getUniforms().setValue(t,"morphTargetInfluences",f),d.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<m;v++){const w=g[v];w[0]=v,w[1]=f[v]}g.sort(dE);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(hE);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let v=0;v<8;v++){const w=o[v],L=w[0],R=w[1];L!==Number.MAX_SAFE_INTEGER&&R?(_&&u.getAttribute("morphTarget"+v)!==_[L]&&u.setAttribute("morphTarget"+v,_[L]),p&&u.getAttribute("morphNormal"+v)!==p[L]&&u.setAttribute("morphNormal"+v,p[L]),r[v]=R,h+=R):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const S=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(t,"morphTargetBaseInfluence",S),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function pE(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class r0 extends wn{constructor(e,n,i,r,s,a,o,c,l,u){if(u=u!==void 0?u:Ur,u!==Ur&&u!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ur&&(i=Ji),i===void 0&&u===Rs&&(i=Dr),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const s0=new wn,a0=new r0(1,1);a0.compareFunction=Wg;const o0=new jg,c0=new Z2,l0=new t0,If=[],Nf=[],Ff=new Float32Array(16),Of=new Float32Array(9),Bf=new Float32Array(4);function Os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=If[r];if(s===void 0&&(s=new Float32Array(r),If[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=Nf[e];n===void 0&&(n=new Int32Array(e),Nf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function _E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function vE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function xE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Gt(n,i))return;Bf.set(i),t.uniformMatrix2fv(this.addr,!1,Bf),zt(n,i)}}function EE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Gt(n,i))return;Of.set(i),t.uniformMatrix3fv(this.addr,!1,Of),zt(n,i)}}function ME(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Gt(n,i))return;Ff.set(i),t.uniformMatrix4fv(this.addr,!1,Ff),zt(n,i)}}function yE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function bE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function AE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function wE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function LE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?a0:s0;n.setTexture2D(e||s,r)}function PE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c0,r)}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||l0,r)}function UE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||o0,r)}function IE(t){switch(t){case 5126:return mE;case 35664:return gE;case 35665:return _E;case 35666:return vE;case 35674:return xE;case 35675:return EE;case 35676:return ME;case 5124:case 35670:return yE;case 35667:case 35671:return SE;case 35668:case 35672:return bE;case 35669:case 35673:return TE;case 5125:return AE;case 36294:return wE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return UE}}function NE(t,e){t.uniform1fv(this.addr,e)}function FE(t,e){const n=Os(e,this.size,2);t.uniform2fv(this.addr,n)}function OE(t,e){const n=Os(e,this.size,3);t.uniform3fv(this.addr,n)}function BE(t,e){const n=Os(e,this.size,4);t.uniform4fv(this.addr,n)}function kE(t,e){const n=Os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GE(t,e){const n=Os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zE(t,e){const n=Os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HE(t,e){t.uniform1iv(this.addr,e)}function VE(t,e){t.uniform2iv(this.addr,e)}function WE(t,e){t.uniform3iv(this.addr,e)}function XE(t,e){t.uniform4iv(this.addr,e)}function YE(t,e){t.uniform1uiv(this.addr,e)}function qE(t,e){t.uniform2uiv(this.addr,e)}function jE(t,e){t.uniform3uiv(this.addr,e)}function KE(t,e){t.uniform4uiv(this.addr,e)}function $E(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s0,s[a])}function ZE(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||c0,s[a])}function JE(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||l0,s[a])}function QE(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||o0,s[a])}function eM(t){switch(t){case 5126:return NE;case 35664:return FE;case 35665:return OE;case 35666:return BE;case 35674:return kE;case 35675:return GE;case 35676:return zE;case 5124:case 35670:return HE;case 35667:case 35671:return VE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return YE;case 36294:return qE;case 36295:return jE;case 36296:return KE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return QE}}class tM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=IE(n.type)}}class nM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eM(n.type)}}class iM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function kf(t,e){t.seq.push(e),t.map[e.id]=e}function rM(t,e,n){const i=t.name,r=i.length;for(dl.lastIndex=0;;){const s=dl.exec(i),a=dl.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){kf(n,l===void 0?new tM(o,t,e):new nM(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new iM(o),kf(n,d)),n=d}}}class Eo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);rM(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Gf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sM=37297;let aM=0;function oM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function cM(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===zo&&n===Go?i="LinearDisplayP3ToLinearSRGB":e===Go&&n===zo&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case _c:return[i,"LinearTransferOETF"];case jt:case mh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function zf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+oM(t.getShaderSource(e),a)}else return r}function lM(t,e){const n=cM(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function uM(t,e){let n;switch(e){case v2:n="Linear";break;case x2:n="Reinhard";break;case E2:n="OptimizedCineon";break;case M2:n="ACESFilmic";break;case S2:n="AgX";break;case y2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hM(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function dM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function fM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function hs(t){return t!==""}function Hf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(t){return t.replace(mM,_M)}const gM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _M(t,e){let n=He[e];if(n===void 0){const i=gM.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tu(n)}const vM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(t){return t.replace(vM,xM)}function xM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xf(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ug?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Y1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function MM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case As:case ws:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function SM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ig:e="ENVMAP_BLENDING_MULTIPLY";break;case g2:e="ENVMAP_BLENDING_MIX";break;case _2:e="ENVMAP_BLENDING_ADD";break}return e}function bM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function TM(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=EM(n),l=MM(n),u=yM(n),d=SM(n),f=bM(n),m=n.isWebGL2?"":hM(n),g=dM(n),_=fM(s),p=r.createProgram();let h,S,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hs).join(`
`),h.length>0&&(h+=`
`),S=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(hs).join(`
`),S.length>0&&(S+=`
`)):(h=[Xf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),S=[m,Xf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?He.tonemapping_pars_fragment:"",n.toneMapping!==rr?uM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,lM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`)),a=tu(a),a=Hf(a,n),a=Vf(a,n),o=tu(o),o=Hf(o,n),o=Vf(o,n),a=Wf(a),o=Wf(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=v+h+a,L=v+S+o,R=Gf(r,r.VERTEX_SHADER,w),A=Gf(r,r.FRAGMENT_SHADER,L);r.attachShader(p,R),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function V(q){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(R).trim(),B=r.getShaderInfoLog(A).trim();let H=!0,Y=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,A);else{const X=zf(r,R,"vertex"),W=zf(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+X+`
`+W)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(P===""||B==="")&&(Y=!1);Y&&(q.diagnostics={runnable:H,programLog:re,vertexShader:{log:P,prefix:h},fragmentShader:{log:B,prefix:S}})}r.deleteShader(R),r.deleteShader(A),E=new Eo(r,p),b=pM(r,p)}let E;this.getUniforms=function(){return E===void 0&&V(this),E};let b;this.getAttributes=function(){return b===void 0&&V(this),b};let G=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(p,sM)),G},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let AM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new RM(e),n.set(e,i)),i}}class RM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function CM(t,e,n,i,r,s,a){const o=new Kg,c=new wM,l=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,b,G,q,re){const P=q.fog,B=re.geometry,H=E.isMeshStandardMaterial?q.environment:null,Y=(E.isMeshStandardMaterial?n:e).get(E.envMap||H),X=Y&&Y.mapping===gc?Y.image.height:null,W=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=K!==void 0?K.length:0;let le=0;B.morphAttributes.position!==void 0&&(le=1),B.morphAttributes.normal!==void 0&&(le=2),B.morphAttributes.color!==void 0&&(le=3);let z,j,ce,ye;if(W){const Lt=fi[W];z=Lt.vertexShader,j=Lt.fragmentShader}else z=E.vertexShader,j=E.fragmentShader,c.update(E),ce=c.getVertexShaderID(E),ye=c.getFragmentShaderID(E);const Ee=t.getRenderTarget(),Ne=re.isInstancedMesh===!0,Fe=re.isBatchedMesh===!0,Ce=!!E.map,je=!!E.matcap,N=!!Y,qt=!!E.aoMap,Ae=!!E.lightMap,De=!!E.bumpMap,ge=!!E.normalMap,pt=!!E.displacementMap,ke=!!E.emissiveMap,y=!!E.metalnessMap,x=!!E.roughnessMap,I=E.anisotropy>0,Q=E.clearcoat>0,Z=E.iridescence>0,ee=E.sheen>0,ve=E.transmission>0,oe=I&&!!E.anisotropyMap,pe=Q&&!!E.clearcoatMap,Re=Q&&!!E.clearcoatNormalMap,Ge=Q&&!!E.clearcoatRoughnessMap,$=Z&&!!E.iridescenceMap,st=Z&&!!E.iridescenceThicknessMap,Ve=ee&&!!E.sheenColorMap,Ue=ee&&!!E.sheenRoughnessMap,be=!!E.specularMap,ue=!!E.specularColorMap,T=!!E.specularIntensityMap,ne=ve&&!!E.transmissionMap,Me=ve&&!!E.thicknessMap,fe=!!E.gradientMap,J=!!E.alphaMap,C=E.alphaTest>0,ie=!!E.alphaHash,ae=!!E.extensions,Le=!!B.attributes.uv1,we=!!B.attributes.uv2,Ke=!!B.attributes.uv3;let $e=rr;return E.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&($e=t.toneMapping),{isWebGL2:u,shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:j,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,instancing:Ne,instancingColor:Ne&&re.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Hi,map:Ce,matcap:je,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:X,aoMap:qt,lightMap:Ae,bumpMap:De,normalMap:ge,displacementMap:f&&pt,emissiveMap:ke,normalMapObjectSpace:ge&&E.normalMapType===F2,normalMapTangentSpace:ge&&E.normalMapType===N2,metalnessMap:y,roughnessMap:x,anisotropy:I,anisotropyMap:oe,clearcoat:Q,clearcoatMap:pe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Ge,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:st,sheen:ee,sheenColorMap:Ve,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:ue,specularIntensityMap:T,transmission:ve,transmissionMap:ne,thicknessMap:Me,gradientMap:fe,opaque:E.transparent===!1&&E.blending===ps,alphaMap:J,alphaTest:C,alphaHash:ie,combine:E.combine,mapUv:Ce&&_(E.map.channel),aoMapUv:qt&&_(E.aoMap.channel),lightMapUv:Ae&&_(E.lightMap.channel),bumpMapUv:De&&_(E.bumpMap.channel),normalMapUv:ge&&_(E.normalMap.channel),displacementMapUv:pt&&_(E.displacementMap.channel),emissiveMapUv:ke&&_(E.emissiveMap.channel),metalnessMapUv:y&&_(E.metalnessMap.channel),roughnessMapUv:x&&_(E.roughnessMap.channel),anisotropyMapUv:oe&&_(E.anisotropyMap.channel),clearcoatMapUv:pe&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(E.sheenRoughnessMap.channel),specularMapUv:be&&_(E.specularMap.channel),specularColorMapUv:ue&&_(E.specularColorMap.channel),specularIntensityMapUv:T&&_(E.specularIntensityMap.channel),transmissionMapUv:ne&&_(E.transmissionMap.channel),thicknessMapUv:Me&&_(E.thicknessMap.channel),alphaMapUv:J&&_(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||I),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:we,vertexUv3s:Ke,pointsUvs:re.isPoints===!0&&!!B.attributes.uv&&(Ce||J),fog:!!P,useFog:E.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:re.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:le,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===mt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===pi,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ae&&E.extensions.derivatives===!0,extensionFragDepth:ae&&E.extensions.fragDepth===!0,extensionDrawBuffers:ae&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function h(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)b.push(G),b.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(S(b,E),v(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function S(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function w(E){const b=g[E.type];let G;if(b){const q=fi[b];G=uv.clone(q.uniforms)}else G=E.uniforms;return G}function L(E,b){let G;for(let q=0,re=l.length;q<re;q++){const P=l[q];if(P.cacheKey===b){G=P,++G.usedTimes;break}}return G===void 0&&(G=new TM(t,b,E,s),l.push(G)),G}function R(E){if(--E.usedTimes===0){const b=l.indexOf(E);l[b]=l[l.length-1],l.pop(),E.destroy()}}function A(E){c.remove(E)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:V}}function LM(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function PM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,m,g,_,p){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function o(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):n.push(h)}function c(d,f,m,g,_,p){const h=a(d,f,m,g,_,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):n.unshift(h)}function l(d,f){n.length>1&&n.sort(d||PM),i.length>1&&i.sort(f||Yf),r.length>1&&r.sort(f||Yf)}function u(){for(let d=e,f=t.length;d<f;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function DM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new qf,t.set(i,[a])):r>=s.length?(a=new qf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function UM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Qe};break;case"SpotLight":n={position:new D,direction:new D,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function IM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NM=0;function FM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OM(t,e){const n=new UM,i=IM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,a=new Yt,o=new Yt;function c(u,d){let f=0,m=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,p=0,h=0,S=0,v=0,w=0,L=0,R=0,A=0,V=0,E=0;u.sort(FM);const b=d===!0?Math.PI:1;for(let q=0,re=u.length;q<re;q++){const P=u[q],B=P.color,H=P.intensity,Y=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=B.r*H*b,m+=B.g*H*b,g+=B.b*H*b;else if(P.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(P.sh.coefficients[W],H);E++}else if(P.isDirectionalLight){const W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const K=P.shadow,te=i.get(P);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.directionalShadow[_]=te,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=P.shadow.matrix,w++}r.directional[_]=W,_++}else if(P.isSpotLight){const W=n.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(H*b),W.distance=Y,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,r.spot[h]=W;const K=P.shadow;if(P.map&&(r.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&V++),r.spotLightMatrix[h]=K.matrix,P.castShadow){const te=i.get(P);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.spotShadow[h]=te,r.spotShadowMap[h]=X,R++}h++}else if(P.isRectAreaLight){const W=n.get(P);W.color.copy(B).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),r.rectArea[S]=W,S++}else if(P.isPointLight){const W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*b),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,te=i.get(P);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=P.shadow.matrix,L++}r.point[p]=W,p++}else if(P.isHemisphereLight){const W=n.get(P);W.skyColor.copy(P.color).multiplyScalar(H*b),W.groundColor.copy(P.groundColor).multiplyScalar(H*b),r.hemi[v]=W,v++}}S>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=g;const G=r.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==h||G.rectAreaLength!==S||G.hemiLength!==v||G.numDirectionalShadows!==w||G.numPointShadows!==L||G.numSpotShadows!==R||G.numSpotMaps!==A||G.numLightProbes!==E)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=S,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+A-V,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=E,G.directionalLength=_,G.pointLength=p,G.spotLength=h,G.rectAreaLength=S,G.hemiLength=v,G.numDirectionalShadows=w,G.numPointShadows=L,G.numSpotShadows=R,G.numSpotMaps=A,G.numLightProbes=E,r.version=NM++)}function l(u,d){let f=0,m=0,g=0,_=0,p=0;const h=d.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const w=u[S];if(w.isDirectionalLight){const L=r.directional[f];L.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),f++}else if(w.isSpotLight){const L=r.spot[g];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(h),L.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(h),g++}else if(w.isRectAreaLight){const L=r.rectArea[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(h),o.identity(),a.copy(w.matrixWorld),a.premultiply(h),o.extractRotation(a),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const L=r.point[m];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(h),m++}else if(w.isHemisphereLight){const L=r.hemi[p];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(h),p++}}}return{setup:c,setupView:l,state:r}}function jf(t,e){const n=new OM(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function c(d){n.setup(i,d)}function l(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function BM(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let c;return o===void 0?(c=new jf(t,e),n.set(s,[c])):a>=o.length?(c=new jf(t,e),o.push(c)):c=o[a],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class kM extends Ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GM extends Ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VM(t,e,n){let i=new n0;const r=new Xe,s=new Xe,a=new $t,o=new kM({depthPacking:I2}),c=new GM,l={},u=n.maxTextureSize,d={[dr]:pn,[pn]:dr,[pi]:pi},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:zM,fragmentShader:HM}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Kn;g.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _i(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ug;let h=this.type;this.render=function(R,A,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),b=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),q=t.state;q.setBlending(ir),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const re=h!==Di&&this.type===Di,P=h===Di&&this.type!==Di;for(let B=0,H=R.length;B<H;B++){const Y=R[B],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const W=X.getFrameExtents();if(r.multiply(W),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,X.mapSize.y=s.y)),X.map===null||re===!0||P===!0){const te=this.type!==Di?{minFilter:cn,magFilter:cn}:{};X.map!==null&&X.map.dispose(),X.map=new kr(r.x,r.y,te),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const K=X.getViewportCount();for(let te=0;te<K;te++){const le=X.getViewport(te);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),q.viewport(a),X.updateMatrices(Y,te),i=X.getFrustum(),w(A,V,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Di&&S(X,V),X.needsUpdate=!1}h=this.type,p.needsUpdate=!1,t.setRenderTarget(E,b,G)};function S(R,A){const V=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new kr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,V,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,V,m,_,null)}function v(R,A,V,E){let b=null;const G=V.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(G!==void 0)b=G;else if(b=V.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=b.uuid,re=A.uuid;let P=l[q];P===void 0&&(P={},l[q]=P);let B=P[re];B===void 0&&(B=b.clone(),P[re]=B,A.addEventListener("dispose",L)),b=B}if(b.visible=A.visible,b.wireframe=A.wireframe,E===Di?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:d[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,V.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const q=t.properties.get(b);q.light=V}return b}function w(R,A,V,E,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld);const re=e.update(R),P=R.material;if(Array.isArray(P)){const B=re.groups;for(let H=0,Y=B.length;H<Y;H++){const X=B[H],W=P[X.materialIndex];if(W&&W.visible){const K=v(R,W,E,b);R.onBeforeShadow(t,R,A,V,re,K,X),t.renderBufferDirect(V,null,re,K,R,X),R.onAfterShadow(t,R,A,V,re,K,X)}}}else if(P.visible){const B=v(R,P,E,b);R.onBeforeShadow(t,R,A,V,re,B,null),t.renderBufferDirect(V,null,re,B,R,null),R.onAfterShadow(t,R,A,V,re,B,null)}}const q=R.children;for(let re=0,P=q.length;re<P;re++)w(q[re],A,V,E,b)}function L(R){R.target.removeEventListener("dispose",L);for(const V in l){const E=l[V],b=R.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function WM(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const ie=new $t;let ae=null;const Le=new $t(0,0,0,0);return{setMask:function(we){ae!==we&&!C&&(t.colorMask(we,we,we,we),ae=we)},setLocked:function(we){C=we},setClear:function(we,Ke,$e,Tt,Lt){Lt===!0&&(we*=Tt,Ke*=Tt,$e*=Tt),ie.set(we,Ke,$e,Tt),Le.equals(ie)===!1&&(t.clearColor(we,Ke,$e,Tt),Le.copy(ie))},reset:function(){C=!1,ae=null,Le.set(-1,0,0,0)}}}function s(){let C=!1,ie=null,ae=null,Le=null;return{setTest:function(we){we?Fe(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(we){ie!==we&&!C&&(t.depthMask(we),ie=we)},setFunc:function(we){if(ae!==we){switch(we){case l2:t.depthFunc(t.NEVER);break;case u2:t.depthFunc(t.ALWAYS);break;case h2:t.depthFunc(t.LESS);break;case Bo:t.depthFunc(t.LEQUAL);break;case d2:t.depthFunc(t.EQUAL);break;case f2:t.depthFunc(t.GEQUAL);break;case p2:t.depthFunc(t.GREATER);break;case m2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=we}},setLocked:function(we){C=we},setClear:function(we){Le!==we&&(t.clearDepth(we),Le=we)},reset:function(){C=!1,ie=null,ae=null,Le=null}}}function a(){let C=!1,ie=null,ae=null,Le=null,we=null,Ke=null,$e=null,Tt=null,Lt=null;return{setTest:function(it){C||(it?Fe(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(it){ie!==it&&!C&&(t.stencilMask(it),ie=it)},setFunc:function(it,Nt,ci){(ae!==it||Le!==Nt||we!==ci)&&(t.stencilFunc(it,Nt,ci),ae=it,Le=Nt,we=ci)},setOp:function(it,Nt,ci){(Ke!==it||$e!==Nt||Tt!==ci)&&(t.stencilOp(it,Nt,ci),Ke=it,$e=Nt,Tt=ci)},setLocked:function(it){C=it},setClear:function(it){Lt!==it&&(t.clearStencil(it),Lt=it)},reset:function(){C=!1,ie=null,ae=null,Le=null,we=null,Ke=null,$e=null,Tt=null,Lt=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,h=!1,S=null,v=null,w=null,L=null,R=null,A=null,V=null,E=new Qe(0,0,0),b=0,G=!1,q=null,re=null,P=null,B=null,H=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=W>=2);let te=null,le={};const z=t.getParameter(t.SCISSOR_BOX),j=t.getParameter(t.VIEWPORT),ce=new $t().fromArray(z),ye=new $t().fromArray(j);function Ee(C,ie,ae,Le){const we=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(C,Ke),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<ae;$e++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(ie,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(ie+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return Ke}const Ne={};Ne[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Fe(t.DEPTH_TEST),c.setFunc(Bo),ke(!1),y(Rd),Fe(t.CULL_FACE),ge(ir);function Fe(C){f[C]!==!0&&(t.enable(C),f[C]=!0)}function Ce(C){f[C]!==!1&&(t.disable(C),f[C]=!1)}function je(C,ie){return m[C]!==ie?(t.bindFramebuffer(C,ie),m[C]=ie,i&&(C===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ie),C===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ie)),!0):!1}function N(C,ie){let ae=_,Le=!1;if(C)if(ae=g.get(ie),ae===void 0&&(ae=[],g.set(ie,ae)),C.isWebGLMultipleRenderTargets){const we=C.texture;if(ae.length!==we.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,$e=we.length;Ke<$e;Ke++)ae[Ke]=t.COLOR_ATTACHMENT0+Ke;ae.length=we.length,Le=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,Le=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function qt(C){return p!==C?(t.useProgram(C),p=C,!0):!1}const Ae={[br]:t.FUNC_ADD,[j1]:t.FUNC_SUBTRACT,[K1]:t.FUNC_REVERSE_SUBTRACT};if(i)Ae[Dd]=t.MIN,Ae[Ud]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Ae[Dd]=C.MIN_EXT,Ae[Ud]=C.MAX_EXT)}const De={[$1]:t.ZERO,[Z1]:t.ONE,[J1]:t.SRC_COLOR,[Yl]:t.SRC_ALPHA,[r2]:t.SRC_ALPHA_SATURATE,[n2]:t.DST_COLOR,[e2]:t.DST_ALPHA,[Q1]:t.ONE_MINUS_SRC_COLOR,[ql]:t.ONE_MINUS_SRC_ALPHA,[i2]:t.ONE_MINUS_DST_COLOR,[t2]:t.ONE_MINUS_DST_ALPHA,[s2]:t.CONSTANT_COLOR,[a2]:t.ONE_MINUS_CONSTANT_COLOR,[o2]:t.CONSTANT_ALPHA,[c2]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(C,ie,ae,Le,we,Ke,$e,Tt,Lt,it){if(C===ir){h===!0&&(Ce(t.BLEND),h=!1);return}if(h===!1&&(Fe(t.BLEND),h=!0),C!==q1){if(C!==S||it!==G){if((v!==br||R!==br)&&(t.blendEquation(t.FUNC_ADD),v=br,R=br),it)switch(C){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.ONE,t.ONE);break;case Ld:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ld:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,L=null,A=null,V=null,E.set(0,0,0),b=0,S=C,G=it}return}we=we||ie,Ke=Ke||ae,$e=$e||Le,(ie!==v||we!==R)&&(t.blendEquationSeparate(Ae[ie],Ae[we]),v=ie,R=we),(ae!==w||Le!==L||Ke!==A||$e!==V)&&(t.blendFuncSeparate(De[ae],De[Le],De[Ke],De[$e]),w=ae,L=Le,A=Ke,V=$e),(Tt.equals(E)===!1||Lt!==b)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Lt),E.copy(Tt),b=Lt),S=C,G=!1}function pt(C,ie){C.side===pi?Ce(t.CULL_FACE):Fe(t.CULL_FACE);let ae=C.side===pn;ie&&(ae=!ae),ke(ae),C.blending===ps&&C.transparent===!1?ge(ir):ge(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),o.setMask(C.colorWrite);const Le=C.stencilWrite;l.setTest(Le),Le&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),I(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(C){q!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),q=C)}function y(C){C!==W1?(Fe(t.CULL_FACE),C!==re&&(C===Rd?t.cullFace(t.BACK):C===X1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),re=C}function x(C){C!==P&&(X&&t.lineWidth(C),P=C)}function I(C,ie,ae){C?(Fe(t.POLYGON_OFFSET_FILL),(B!==ie||H!==ae)&&(t.polygonOffset(ie,ae),B=ie,H=ae)):Ce(t.POLYGON_OFFSET_FILL)}function Q(C){C?Fe(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Z(C){C===void 0&&(C=t.TEXTURE0+Y-1),te!==C&&(t.activeTexture(C),te=C)}function ee(C,ie,ae){ae===void 0&&(te===null?ae=t.TEXTURE0+Y-1:ae=te);let Le=le[ae];Le===void 0&&(Le={type:void 0,texture:void 0},le[ae]=Le),(Le.type!==C||Le.texture!==ie)&&(te!==ae&&(t.activeTexture(ae),te=ae),t.bindTexture(C,ie||Ne[C]),Le.type=C,Le.texture=ie)}function ve(){const C=le[te];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function oe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function T(C){ce.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function ne(C){ye.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ye.copy(C))}function Me(C,ie){let ae=d.get(ie);ae===void 0&&(ae=new WeakMap,d.set(ie,ae));let Le=ae.get(C);Le===void 0&&(Le=t.getUniformBlockIndex(ie,C.name),ae.set(C,Le))}function fe(C,ie){const Le=d.get(ie).get(C);u.get(ie)!==Le&&(t.uniformBlockBinding(ie,Le,C.__bindingPointIndex),u.set(ie,Le))}function J(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},te=null,le={},m={},g=new WeakMap,_=[],p=null,h=!1,S=null,v=null,w=null,L=null,R=null,A=null,V=null,E=new Qe(0,0,0),b=0,G=!1,q=null,re=null,P=null,B=null,H=null,ce.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Fe,disable:Ce,bindFramebuffer:je,drawBuffers:N,useProgram:qt,setBlending:ge,setMaterial:pt,setFlipSided:ke,setCullFace:y,setLineWidth:x,setPolygonOffset:I,setScissorTest:Q,activeTexture:Z,bindTexture:ee,unbindTexture:ve,compressedTexImage2D:oe,compressedTexImage3D:pe,texImage2D:be,texImage3D:ue,updateUBOMapping:Me,uniformBlockBinding:fe,texStorage2D:Ve,texStorage3D:Ue,texSubImage2D:Re,texSubImage3D:Ge,compressedTexSubImage2D:$,compressedTexSubImage3D:st,scissor:T,viewport:ne,reset:J}}function XM(t,e,n,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,x){return m?new OffscreenCanvas(y,x):Vo("canvas")}function _(y,x,I,Q){let Z=1;if((y.width>Q||y.height>Q)&&(Z=Q/Math.max(y.width,y.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const ee=x?eu:Math.floor,ve=ee(Z*y.width),oe=ee(Z*y.height);d===void 0&&(d=g(ve,oe));const pe=I?g(ve,oe):d;return pe.width=ve,pe.height=oe,pe.getContext("2d").drawImage(y,0,0,ve,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+ve+"x"+oe+")."),pe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return uf(y.width)&&uf(y.height)}function h(y){return o?!1:y.wrapS!==ei||y.wrapT!==ei||y.minFilter!==cn&&y.minFilter!==Bn}function S(y,x){return y.generateMipmaps&&x&&y.minFilter!==cn&&y.minFilter!==Bn}function v(y){t.generateMipmap(y)}function w(y,x,I,Q,Z=!1){if(o===!1)return x;if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ee=x;if(x===t.RED&&(I===t.FLOAT&&(ee=t.R32F),I===t.HALF_FLOAT&&(ee=t.R16F),I===t.UNSIGNED_BYTE&&(ee=t.R8)),x===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(ee=t.R8UI),I===t.UNSIGNED_SHORT&&(ee=t.R16UI),I===t.UNSIGNED_INT&&(ee=t.R32UI),I===t.BYTE&&(ee=t.R8I),I===t.SHORT&&(ee=t.R16I),I===t.INT&&(ee=t.R32I)),x===t.RG&&(I===t.FLOAT&&(ee=t.RG32F),I===t.HALF_FLOAT&&(ee=t.RG16F),I===t.UNSIGNED_BYTE&&(ee=t.RG8)),x===t.RGBA){const ve=Z?ko:ct.getTransfer(Q);I===t.FLOAT&&(ee=t.RGBA32F),I===t.HALF_FLOAT&&(ee=t.RGBA16F),I===t.UNSIGNED_BYTE&&(ee=ve===mt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function L(y,x,I){return S(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==cn&&y.minFilter!==Bn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function R(y){return y===cn||y===Id||y===Bc?t.NEAREST:t.LINEAR}function A(y){const x=y.target;x.removeEventListener("dispose",A),E(x),x.isVideoTexture&&u.delete(x)}function V(y){const x=y.target;x.removeEventListener("dispose",V),G(x)}function E(y){const x=i.get(y);if(x.__webglInit===void 0)return;const I=y.source,Q=f.get(I);if(Q){const Z=Q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(y),Object.keys(Q).length===0&&f.delete(I)}i.remove(y)}function b(y){const x=i.get(y);t.deleteTexture(x.__webglTexture);const I=y.source,Q=f.get(I);delete Q[x.__cacheKey],a.memory.textures--}function G(y){const x=y.texture,I=i.get(y),Q=i.get(x);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(I.__webglFramebuffer[Z]))for(let ee=0;ee<I.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(I.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(I.__webglFramebuffer[Z]);I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer[Z])}else{if(Array.isArray(I.__webglFramebuffer))for(let Z=0;Z<I.__webglFramebuffer.length;Z++)t.deleteFramebuffer(I.__webglFramebuffer[Z]);else t.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&t.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Z=0;Z<I.__webglColorRenderbuffer.length;Z++)I.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(I.__webglColorRenderbuffer[Z]);I.__webglDepthRenderbuffer&&t.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Z=0,ee=x.length;Z<ee;Z++){const ve=i.get(x[Z]);ve.__webglTexture&&(t.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(y)}let q=0;function re(){q=0}function P(){const y=q;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),q+=1,y}function B(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function H(y,x){const I=i.get(y);if(y.isVideoTexture&&pt(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(I,y,x);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+x)}function Y(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ce(I,y,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+x)}function X(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ce(I,y,x);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+x)}function W(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ye(I,y,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+x)}const K={[$l]:t.REPEAT,[ei]:t.CLAMP_TO_EDGE,[Zl]:t.MIRRORED_REPEAT},te={[cn]:t.NEAREST,[Id]:t.NEAREST_MIPMAP_NEAREST,[Bc]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[b2]:t.LINEAR_MIPMAP_NEAREST,[ca]:t.LINEAR_MIPMAP_LINEAR},le={[O2]:t.NEVER,[V2]:t.ALWAYS,[B2]:t.LESS,[Wg]:t.LEQUAL,[k2]:t.EQUAL,[H2]:t.GEQUAL,[G2]:t.GREATER,[z2]:t.NOTEQUAL};function z(y,x,I){if(I?(t.texParameteri(y,t.TEXTURE_WRAP_S,K[x.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,K[x.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,K[x.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,te[x.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,te[x.minFilter])):(t.texParameteri(y,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(y,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==ei||x.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(y,t.TEXTURE_MAG_FILTER,R(x.magFilter)),t.texParameteri(y,t.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==cn&&x.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===cn||x.minFilter!==Bc&&x.minFilter!==ca||x.type===Qi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===la&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function j(y,x){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",A));const Q=x.source;let Z=f.get(Q);Z===void 0&&(Z={},f.set(Q,Z));const ee=B(x);if(ee!==y.__cacheKey){Z[ee]===void 0&&(Z[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[ee].usedTimes++;const ve=Z[y.__cacheKey];ve!==void 0&&(Z[y.__cacheKey].usedTimes--,ve.usedTimes===0&&b(x)),y.__cacheKey=ee,y.__webglTexture=Z[ee].texture}return I}function ce(y,x,I){let Q=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=t.TEXTURE_3D);const Z=j(y,x),ee=x.source;n.bindTexture(Q,y.__webglTexture,t.TEXTURE0+I);const ve=i.get(ee);if(ee.version!==ve.__version||Z===!0){n.activeTexture(t.TEXTURE0+I);const oe=ct.getPrimaries(ct.workingColorSpace),pe=x.colorSpace===Hn?null:ct.getPrimaries(x.colorSpace),Re=x.colorSpace===Hn||oe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ge=h(x)&&p(x.image)===!1;let $=_(x.image,Ge,!1,r.maxTextureSize);$=ke(x,$);const st=p($)||o,Ve=s.convert(x.format,x.colorSpace);let Ue=s.convert(x.type),be=w(x.internalFormat,Ve,Ue,x.colorSpace,x.isVideoTexture);z(Q,x,st);let ue;const T=x.mipmaps,ne=o&&x.isVideoTexture!==!0&&be!==Hg,Me=ve.__version===void 0||Z===!0,fe=L(x,$,st);if(x.isDepthTexture)be=t.DEPTH_COMPONENT,o?x.type===Qi?be=t.DEPTH_COMPONENT32F:x.type===Ji?be=t.DEPTH_COMPONENT24:x.type===Dr?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:x.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ur&&be===t.DEPTH_COMPONENT&&x.type!==ph&&x.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ji,Ue=s.convert(x.type)),x.format===Rs&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,x.type!==Dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Dr,Ue=s.convert(x.type))),Me&&(ne?n.texStorage2D(t.TEXTURE_2D,1,be,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,be,$.width,$.height,0,Ve,Ue,null));else if(x.isDataTexture)if(T.length>0&&st){ne&&Me&&n.texStorage2D(t.TEXTURE_2D,fe,be,T[0].width,T[0].height);for(let J=0,C=T.length;J<C;J++)ue=T[J],ne?n.texSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,Ve,Ue,ue.data):n.texImage2D(t.TEXTURE_2D,J,be,ue.width,ue.height,0,Ve,Ue,ue.data);x.generateMipmaps=!1}else ne?(Me&&n.texStorage2D(t.TEXTURE_2D,fe,be,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,Ve,Ue,$.data)):n.texImage2D(t.TEXTURE_2D,0,be,$.width,$.height,0,Ve,Ue,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ne&&Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,be,T[0].width,T[0].height,$.depth);for(let J=0,C=T.length;J<C;J++)ue=T[J],x.format!==ti?Ve!==null?ne?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,Ve,ue.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,be,ue.width,ue.height,$.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,$.depth,Ve,Ue,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,be,ue.width,ue.height,$.depth,0,Ve,Ue,ue.data)}else{ne&&Me&&n.texStorage2D(t.TEXTURE_2D,fe,be,T[0].width,T[0].height);for(let J=0,C=T.length;J<C;J++)ue=T[J],x.format!==ti?Ve!==null?ne?n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,Ve,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,J,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?n.texSubImage2D(t.TEXTURE_2D,J,0,0,ue.width,ue.height,Ve,Ue,ue.data):n.texImage2D(t.TEXTURE_2D,J,be,ue.width,ue.height,0,Ve,Ue,ue.data)}else if(x.isDataArrayTexture)ne?(Me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,be,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ve,Ue,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,$.width,$.height,$.depth,0,Ve,Ue,$.data);else if(x.isData3DTexture)ne?(Me&&n.texStorage3D(t.TEXTURE_3D,fe,be,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ve,Ue,$.data)):n.texImage3D(t.TEXTURE_3D,0,be,$.width,$.height,$.depth,0,Ve,Ue,$.data);else if(x.isFramebufferTexture){if(Me)if(ne)n.texStorage2D(t.TEXTURE_2D,fe,be,$.width,$.height);else{let J=$.width,C=$.height;for(let ie=0;ie<fe;ie++)n.texImage2D(t.TEXTURE_2D,ie,be,J,C,0,Ve,Ue,null),J>>=1,C>>=1}}else if(T.length>0&&st){ne&&Me&&n.texStorage2D(t.TEXTURE_2D,fe,be,T[0].width,T[0].height);for(let J=0,C=T.length;J<C;J++)ue=T[J],ne?n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ve,Ue,ue):n.texImage2D(t.TEXTURE_2D,J,be,Ve,Ue,ue);x.generateMipmaps=!1}else ne?(Me&&n.texStorage2D(t.TEXTURE_2D,fe,be,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Ue,$)):n.texImage2D(t.TEXTURE_2D,0,be,Ve,Ue,$);S(x,st)&&v(Q),ve.__version=ee.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function ye(y,x,I){if(x.image.length!==6)return;const Q=j(y,x),Z=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+I);const ee=i.get(Z);if(Z.version!==ee.__version||Q===!0){n.activeTexture(t.TEXTURE0+I);const ve=ct.getPrimaries(ct.workingColorSpace),oe=x.colorSpace===Hn?null:ct.getPrimaries(x.colorSpace),pe=x.colorSpace===Hn||ve===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,Ge=x.image[0]&&x.image[0].isDataTexture,$=[];for(let J=0;J<6;J++)!Re&&!Ge?$[J]=_(x.image[J],!1,!0,r.maxCubemapSize):$[J]=Ge?x.image[J].image:x.image[J],$[J]=ke(x,$[J]);const st=$[0],Ve=p(st)||o,Ue=s.convert(x.format,x.colorSpace),be=s.convert(x.type),ue=w(x.internalFormat,Ue,be,x.colorSpace),T=o&&x.isVideoTexture!==!0,ne=ee.__version===void 0||Q===!0;let Me=L(x,st,Ve);z(t.TEXTURE_CUBE_MAP,x,Ve);let fe;if(Re){T&&ne&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ue,st.width,st.height);for(let J=0;J<6;J++){fe=$[J].mipmaps;for(let C=0;C<fe.length;C++){const ie=fe[C];x.format!==ti?Ue!==null?T?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C,0,0,ie.width,ie.height,Ue,ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C,0,0,ie.width,ie.height,Ue,be,ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C,ue,ie.width,ie.height,0,Ue,be,ie.data)}}}else{fe=x.mipmaps,T&&ne&&(fe.length>0&&Me++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,ue,$[0].width,$[0].height));for(let J=0;J<6;J++)if(Ge){T?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,$[J].width,$[J].height,Ue,be,$[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ue,$[J].width,$[J].height,0,Ue,be,$[J].data);for(let C=0;C<fe.length;C++){const ae=fe[C].image[J].image;T?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C+1,0,0,ae.width,ae.height,Ue,be,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C+1,ue,ae.width,ae.height,0,Ue,be,ae.data)}}else{T?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,be,$[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ue,Ue,be,$[J]);for(let C=0;C<fe.length;C++){const ie=fe[C];T?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C+1,0,0,Ue,be,ie.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,C+1,ue,Ue,be,ie.image[J])}}}S(x,Ve)&&v(t.TEXTURE_CUBE_MAP),ee.__version=Z.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Ee(y,x,I,Q,Z,ee){const ve=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),pe=w(I.internalFormat,ve,oe,I.colorSpace);if(!i.get(x).__hasExternalTextures){const Ge=Math.max(1,x.width>>ee),$=Math.max(1,x.height>>ee);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,ee,pe,Ge,$,x.depth,0,ve,oe,null):n.texImage2D(Z,ee,pe,Ge,$,0,ve,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ge(x)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Z,i.get(I).__webglTexture,0,De(x)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,Z,i.get(I).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(y,x,I){if(t.bindRenderbuffer(t.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let Q=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(I||ge(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Qi?Q=t.DEPTH_COMPONENT32F:Z.type===Ji&&(Q=t.DEPTH_COMPONENT24));const ee=De(x);ge(x)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,Q,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,Q,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const Q=De(x);I&&ge(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,x.width,x.height):ge(x)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,y)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<Q.length;Z++){const ee=Q[Z],ve=s.convert(ee.format,ee.colorSpace),oe=s.convert(ee.type),pe=w(ee.internalFormat,ve,oe,ee.colorSpace),Re=De(x);I&&ge(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,pe,x.width,x.height):ge(x)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,pe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,pe,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const Q=i.get(x.depthTexture).__webglTexture,Z=De(x);if(x.depthTexture.format===Ur)ge(x)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Rs)ge(x)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ce(y){const x=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Fe(x.__webglFramebuffer,y)}else if(I){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=t.createRenderbuffer(),Ne(x.__webglDepthbuffer[Q],y,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),Ne(x.__webglDepthbuffer,y,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(y,x,I){const Q=i.get(y);x!==void 0&&Ee(Q.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ce(y)}function N(y){const x=y.texture,I=i.get(y),Q=i.get(x);y.addEventListener("dispose",V),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=x.version,a.memory.textures++);const Z=y.isWebGLCubeRenderTarget===!0,ee=y.isWebGLMultipleRenderTargets===!0,ve=p(y)||o;if(Z){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let pe=0;pe<x.mipmaps.length;pe++)I.__webglFramebuffer[oe][pe]=t.createFramebuffer()}else I.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)I.__webglFramebuffer[oe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(ee)if(r.drawBuffers){const oe=y.texture;for(let pe=0,Re=oe.length;pe<Re;pe++){const Ge=i.get(oe[pe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&ge(y)===!1){const oe=ee?x:[x];I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const Re=oe[pe];I.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Ge=s.convert(Re.format,Re.colorSpace),$=s.convert(Re.type),st=w(Re.internalFormat,Ge,$,Re.colorSpace,y.isXRRenderTarget===!0),Ve=De(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,st,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(I.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),z(t.TEXTURE_CUBE_MAP,x,ve);for(let oe=0;oe<6;oe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Ee(I.__webglFramebuffer[oe][pe],y,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else Ee(I.__webglFramebuffer[oe],y,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);S(x,ve)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){const oe=y.texture;for(let pe=0,Re=oe.length;pe<Re;pe++){const Ge=oe[pe],$=i.get(Ge);n.bindTexture(t.TEXTURE_2D,$.__webglTexture),z(t.TEXTURE_2D,Ge,ve),Ee(I.__webglFramebuffer,y,Ge,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),S(Ge,ve)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?oe=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,Q.__webglTexture),z(oe,x,ve),o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)Ee(I.__webglFramebuffer[pe],y,x,t.COLOR_ATTACHMENT0,oe,pe);else Ee(I.__webglFramebuffer,y,x,t.COLOR_ATTACHMENT0,oe,0);S(x,ve)&&v(oe),n.unbindTexture()}y.depthBuffer&&Ce(y)}function qt(y){const x=p(y)||o,I=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,Z=I.length;Q<Z;Q++){const ee=I[Q];if(S(ee,x)){const ve=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(ee).__webglTexture;n.bindTexture(ve,oe),v(ve),n.unbindTexture()}}}function Ae(y){if(o&&y.samples>0&&ge(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],I=y.width,Q=y.height;let Z=t.COLOR_BUFFER_BIT;const ee=[],ve=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(y),pe=y.isWebGLMultipleRenderTargets===!0;if(pe)for(let Re=0;Re<x.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){ee.push(t.COLOR_ATTACHMENT0+Re),y.depthBuffer&&ee.push(ve);const Ge=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Ge===!1&&(y.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Re]),Ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ve]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ve])),pe){const $=i.get(x[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$,0)}t.blitFramebuffer(0,0,I,Q,0,0,I,Q,Z,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<x.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,oe.__webglColorRenderbuffer[Re]);const Ge=i.get(x[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function De(y){return Math.min(r.maxSamples,y.samples)}function ge(y){const x=i.get(y);return o&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pt(y){const x=a.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function ke(y,x){const I=y.colorSpace,Q=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Jl||I!==Hi&&I!==Hn&&(ct.getTransfer(I)===mt?o===!1?e.has("EXT_sRGB")===!0&&Q===ti?(y.format=Jl,y.minFilter=Bn,y.generateMipmaps=!1):x=Yg.sRGBToLinear(x):(Q!==ti||Z!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}this.allocateTextureUnit=P,this.resetTextureUnits=re,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=je,this.setupRenderTarget=N,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ge}function YM(t,e,n){const i=n.isWebGL2;function r(s,a=Hn){let o;const c=ct.getTransfer(a);if(s===sr)return t.UNSIGNED_BYTE;if(s===Og)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Bg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===T2)return t.BYTE;if(s===A2)return t.SHORT;if(s===ph)return t.UNSIGNED_SHORT;if(s===Fg)return t.INT;if(s===Ji)return t.UNSIGNED_INT;if(s===Qi)return t.FLOAT;if(s===la)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===w2)return t.ALPHA;if(s===ti)return t.RGBA;if(s===R2)return t.LUMINANCE;if(s===C2)return t.LUMINANCE_ALPHA;if(s===Ur)return t.DEPTH_COMPONENT;if(s===Rs)return t.DEPTH_STENCIL;if(s===Jl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===L2)return t.RED;if(s===kg)return t.RED_INTEGER;if(s===P2)return t.RG;if(s===Gg)return t.RG_INTEGER;if(s===zg)return t.RGBA_INTEGER;if(s===kc||s===Gc||s===zc||s===Hc)if(c===mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===kc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===kc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Nd||s===Fd||s===Od||s===Bd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Nd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Od)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kd||s===Gd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kd)return c===mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Gd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zd||s===Hd||s===Vd||s===Wd||s===Xd||s===Yd||s===qd||s===jd||s===Kd||s===$d||s===Zd||s===Jd||s===Qd||s===ef)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$d)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Jd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qd)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ef)return c===mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vc||s===tf||s===nf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Vc)return c===mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===nf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===D2||s===rf||s===sf||s===af)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Vc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===rf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===af)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class qM extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class eo extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jM={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new eo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class KM extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const _=n.getContextAttributes();let p=null,h=null;const S=[],v=[],w=new Xe;let L=null;const R=new Gn;R.layers.enable(1),R.viewport=new $t;const A=new Gn;A.layers.enable(2),A.viewport=new $t;const V=[R,A],E=new qM;E.layers.enable(1),E.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=S[z];return j===void 0&&(j=new fl,S[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=S[z];return j===void 0&&(j=new fl,S[z]=j),j.getGripSpace()},this.getHand=function(z){let j=S[z];return j===void 0&&(j=new fl,S[z]=j),j.getHandSpace()};function q(z){const j=v.indexOf(z.inputSource);if(j===-1)return;const ce=S[j];ce!==void 0&&(ce.update(z.inputSource,z.frame,l||a),ce.dispatchEvent({type:z.type,data:z.inputSource}))}function re(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",P);for(let z=0;z<S.length;z++){const j=v[z];j!==null&&(v[z]=null,S[z].disconnect(j))}b=null,G=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,h=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",re),r.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new kr(m.framebufferWidth,m.framebufferHeight,{format:ti,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,ce=null,ye=null;_.depth&&(ye=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=_.stencil?Rs:Ur,ce=_.stencil?Dr:Ji);const Ee={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new kr(f.textureWidth,f.textureHeight,{format:ti,type:sr,depthTexture:new r0(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ne=e.properties.get(h);Ne.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),le.setContext(r),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(z){for(let j=0;j<z.removed.length;j++){const ce=z.removed[j],ye=v.indexOf(ce);ye>=0&&(v[ye]=null,S[ye].disconnect(ce))}for(let j=0;j<z.added.length;j++){const ce=z.added[j];let ye=v.indexOf(ce);if(ye===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=v.length){v.push(ce),ye=Ne;break}else if(v[Ne]===null){v[Ne]=ce,ye=Ne;break}if(ye===-1)break}const Ee=S[ye];Ee&&Ee.connect(ce)}}const B=new D,H=new D;function Y(z,j,ce){B.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(ce.matrixWorld);const ye=B.distanceTo(H),Ee=j.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,Fe=Ee[14]/(Ee[10]-1),Ce=Ee[14]/(Ee[10]+1),je=(Ee[9]+1)/Ee[5],N=(Ee[9]-1)/Ee[5],qt=(Ee[8]-1)/Ee[0],Ae=(Ne[8]+1)/Ne[0],De=Fe*qt,ge=Fe*Ae,pt=ye/(-qt+Ae),ke=pt*-qt;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ke),z.translateZ(pt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const y=Fe+pt,x=Ce+pt,I=De-ke,Q=ge+(ye-ke),Z=je*Ce/x*y,ee=N*Ce/x*y;z.projectionMatrix.makePerspective(I,Q,Z,ee,y,x),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;E.near=A.near=R.near=z.near,E.far=A.far=R.far=z.far,(b!==E.near||G!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,G=E.far);const j=z.parent,ce=E.cameras;X(E,j);for(let ye=0;ye<ce.length;ye++)X(ce[ye],j);ce.length===2?Y(E,R,A):E.projectionMatrix.copy(R.projectionMatrix),W(z,E,j)};function W(z,j,ce){ce===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(ce.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ql*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let K=null;function te(z,j){if(u=j.getViewerPose(l||a),g=j,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let ye=!1;ce.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let Ee=0;Ee<ce.length;Ee++){const Ne=ce[Ee];let Fe=null;if(m!==null)Fe=m.getViewport(Ne);else{const je=d.getViewSubImage(f,Ne);Fe=je.viewport,Ee===0&&(e.setRenderTargetTextures(h,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(h))}let Ce=V[Ee];Ce===void 0&&(Ce=new Gn,Ce.layers.enable(Ee),Ce.viewport=new $t,V[Ee]=Ce),Ce.matrix.fromArray(Ne.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ne.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Ee===0&&(E.matrix.copy(Ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(Ce)}}for(let ce=0;ce<S.length;ce++){const ye=v[ce],Ee=S[ce];ye!==null&&Ee!==void 0&&Ee.update(ye,j,l||a)}K&&K(z,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const le=new i0;le.setAnimationLoop(te),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}}function $M(t,e){function n(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Qg(t)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,S,v,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,w)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,S,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,n(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===pn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,n(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===pn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,n(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,n(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*v,n(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,S,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=v*.5,h.map&&(p.map.value=h.map,n(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,n(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,n(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZM(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,v){const w=v.program;i.uniformBlockBinding(S,w)}function l(S,v){let w=r[S.id];w===void 0&&(g(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",p));const L=v.program;i.updateUBOMapping(S,L);const R=e.render.frame;s[S.id]!==R&&(f(S),s[S.id]=R)}function u(S){const v=d();S.__bindingPointIndex=v;const w=t.createBuffer(),L=S.__size,R=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,L,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=r[S.id],w=S.uniforms,L=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,A=w.length;R<A;R++){const V=Array.isArray(w[R])?w[R]:[w[R]];for(let E=0,b=V.length;E<b;E++){const G=V[E];if(m(G,R,E,L)===!0){const q=G.__offset,re=Array.isArray(G.value)?G.value:[G.value];let P=0;for(let B=0;B<re.length;B++){const H=re[B],Y=_(H);typeof H=="number"||typeof H=="boolean"?(G.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,q+P,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=0,G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=0,G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=0):(H.toArray(G.__data,P),P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,v,w,L){const R=S.value,A=v+"_"+w;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const V=L[A];if(typeof R=="number"||typeof R=="boolean"){if(V!==R)return L[A]=R,!0}else if(V.equals(R)===!1)return V.copy(R),!0}return!1}function g(S){const v=S.uniforms;let w=0;const L=16;for(let A=0,V=v.length;A<V;A++){const E=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,G=E.length;b<G;b++){const q=E[b],re=Array.isArray(q.value)?q.value:[q.value];for(let P=0,B=re.length;P<B;P++){const H=re[P],Y=_(H),X=w%L;X!==0&&L-X<Y.boundary&&(w+=L-X),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=Y.storage}}}const R=w%L;return R>0&&(w+=L-R),S.__size=w,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class u0{constructor(e={}){const{canvas:n=Y2(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const h=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=rr,this.toneMappingExposure=1;const v=this;let w=!1,L=0,R=0,A=null,V=-1,E=null;const b=new $t,G=new $t;let q=null;const re=new Qe(0);let P=0,B=n.width,H=n.height,Y=1,X=null,W=null;const K=new $t(0,0,B,H),te=new $t(0,0,B,H);let le=!1;const z=new n0;let j=!1,ce=!1,ye=null;const Ee=new Yt,Ne=new Xe,Fe=new D,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return A===null?Y:1}let N=i;function qt(M,U){for(let O=0;O<M.length;O++){const k=M[O],F=n.getContext(k,U);if(F!==null)return F}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fh}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",C,!1),n.addEventListener("webglcontextcreationerror",ie,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),N=qt(U,M),N===null)throw qt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ae,De,ge,pt,ke,y,x,I,Q,Z,ee,ve,oe,pe,Re,Ge,$,st,Ve,Ue,be,ue,T,ne;function Me(){Ae=new oE(N),De=new eE(N,Ae,e),Ae.init(De),ue=new YM(N,Ae,De),ge=new WM(N,Ae,De),pt=new uE(N),ke=new LM,y=new XM(N,Ae,ge,ke,De,ue,pt),x=new nE(v),I=new aE(v),Q=new _v(N,De),T=new J3(N,Ae,Q,De),Z=new cE(N,Q,pt,T),ee=new pE(N,Z,Q,pt),Ve=new fE(N,De,y),Ge=new tE(ke),ve=new CM(v,x,I,Ae,De,T,Ge),oe=new $M(v,ke),pe=new DM,Re=new BM(Ae,De),st=new Z3(v,x,I,ge,ee,f,c),$=new VM(v,ee,De),ne=new ZM(N,pt,De,ge),Ue=new Q3(N,Ae,pt,De),be=new lE(N,Ae,pt,De),pt.programs=ve.programs,v.capabilities=De,v.extensions=Ae,v.properties=ke,v.renderLists=pe,v.shadowMap=$,v.state=ge,v.info=pt}Me();const fe=new KM(v,N);this.xr=fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(B,H,!1))},this.getSize=function(M){return M.set(B,H)},this.setSize=function(M,U,O=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,H=U,n.width=Math.floor(M*Y),n.height=Math.floor(U*Y),O===!0&&(n.style.width=M+"px",n.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(B*Y,H*Y).floor()},this.setDrawingBufferSize=function(M,U,O){B=M,H=U,Y=O,n.width=Math.floor(M*O),n.height=Math.floor(U*O),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,U,O,k){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,U,O,k),ge.viewport(b.copy(K).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(te)},this.setScissor=function(M,U,O,k){M.isVector4?te.set(M.x,M.y,M.z,M.w):te.set(M,U,O,k),ge.scissor(G.copy(te).multiplyScalar(Y).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){ge.setScissorTest(le=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(M=!0,U=!0,O=!0){let k=0;if(M){let F=!1;if(A!==null){const he=A.texture.format;F=he===zg||he===Gg||he===kg}if(F){const he=A.texture.type,Se=he===sr||he===Ji||he===ph||he===Dr||he===Og||he===Bg,Pe=st.getClearColor(),Ie=st.getClearAlpha(),We=Pe.r,Be=Pe.g,ze=Pe.b;Se?(m[0]=We,m[1]=Be,m[2]=ze,m[3]=Ie,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=We,g[1]=Be,g[2]=ze,g[3]=Ie,N.clearBufferiv(N.COLOR,0,g))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT),O&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",C,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),pe.dispose(),Re.dispose(),ke.dispose(),x.dispose(),I.dispose(),ee.dispose(),T.dispose(),ne.dispose(),ve.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Lt),fe.removeEventListener("sessionend",it),ye&&(ye.dispose(),ye=null),Nt.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=pt.autoReset,U=$.enabled,O=$.autoUpdate,k=$.needsUpdate,F=$.type;Me(),pt.autoReset=M,$.enabled=U,$.autoUpdate=O,$.needsUpdate=k,$.type=F}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ae(M){const U=M.target;U.removeEventListener("dispose",ae),Le(U)}function Le(M){we(M),ke.remove(M)}function we(M){const U=ke.get(M).programs;U!==void 0&&(U.forEach(function(O){ve.releaseProgram(O)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,O,k,F,he){U===null&&(U=Ce);const Se=F.isMesh&&F.matrixWorld.determinant()<0,Pe=E0(M,U,O,k,F);ge.setMaterial(k,Se);let Ie=O.index,We=1;if(k.wireframe===!0){if(Ie=Z.getWireframeAttribute(O),Ie===void 0)return;We=2}const Be=O.drawRange,ze=O.attributes.position;let Pt=Be.start*We,xn=(Be.start+Be.count)*We;he!==null&&(Pt=Math.max(Pt,he.start*We),xn=Math.min(xn,(he.start+he.count)*We)),Ie!==null?(Pt=Math.max(Pt,0),xn=Math.min(xn,Ie.count)):ze!=null&&(Pt=Math.max(Pt,0),xn=Math.min(xn,ze.count));const Ht=xn-Pt;if(Ht<0||Ht===1/0)return;T.setup(F,k,Pe,O,Ie);let Ai,bt=Ue;if(Ie!==null&&(Ai=Q.get(Ie),bt=be,bt.setIndex(Ai)),F.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*je()),bt.setMode(N.LINES)):bt.setMode(N.TRIANGLES);else if(F.isLine){let Ye=k.linewidth;Ye===void 0&&(Ye=1),ge.setLineWidth(Ye*je()),F.isLineSegments?bt.setMode(N.LINES):F.isLineLoop?bt.setMode(N.LINE_LOOP):bt.setMode(N.LINE_STRIP)}else F.isPoints?bt.setMode(N.POINTS):F.isSprite&&bt.setMode(N.TRIANGLES);if(F.isBatchedMesh)bt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)bt.renderInstances(Pt,Ht,F.count);else if(O.isInstancedBufferGeometry){const Ye=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Sc=Math.min(O.instanceCount,Ye);bt.renderInstances(Pt,Ht,Sc)}else bt.render(Pt,Ht)};function Ke(M,U,O){M.transparent===!0&&M.side===pi&&M.forceSinglePass===!1?(M.side=pn,M.needsUpdate=!0,Aa(M,U,O),M.side=dr,M.needsUpdate=!0,Aa(M,U,O),M.side=pi):Aa(M,U,O)}this.compile=function(M,U,O=null){O===null&&(O=M),p=Re.get(O),p.init(),S.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==O&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(v._useLegacyLights);const k=new Set;return M.traverse(function(F){const he=F.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Pe=he[Se];Ke(Pe,O,F),k.add(Pe)}else Ke(he,O,F),k.add(he)}),S.pop(),p=null,k},this.compileAsync=function(M,U,O=null){const k=this.compile(M,U,O);return new Promise(F=>{function he(){if(k.forEach(function(Se){ke.get(Se).currentProgram.isReady()&&k.delete(Se)}),k.size===0){F(M);return}setTimeout(he,10)}Ae.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let $e=null;function Tt(M){$e&&$e(M)}function Lt(){Nt.stop()}function it(){Nt.start()}const Nt=new i0;Nt.setAnimationLoop(Tt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(M){$e=M,fe.setAnimationLoop(M),M===null?Nt.stop():Nt.start()},fe.addEventListener("sessionstart",Lt),fe.addEventListener("sessionend",it),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,A),p=Re.get(M,S.length),p.init(),S.push(p),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(Ee),ce=this.localClippingEnabled,j=Ge.init(this.clippingPlanes,ce),_=pe.get(M,h.length),_.init(),h.push(_),ci(M,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,j===!0&&Ge.beginShadows();const O=p.state.shadowsArray;if($.render(O,M,U),j===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(_,M),p.setupLights(v._useLegacyLights),U.isArrayCamera){const k=U.cameras;for(let F=0,he=k.length;F<he;F++){const Se=k[F];Eh(_,M,Se,Se.viewport)}}else Eh(_,M,U);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(v,M,U),T.resetDefaultState(),V=-1,E=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ci(M,U,O,k){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||z.intersectsSprite(M)){k&&Fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ee);const Se=ee.update(M),Pe=M.material;Pe.visible&&_.push(M,Se,Pe,O,Fe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||z.intersectsObject(M))){const Se=ee.update(M),Pe=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Fe.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Fe.copy(Se.boundingSphere.center)),Fe.applyMatrix4(M.matrixWorld).applyMatrix4(Ee)),Array.isArray(Pe)){const Ie=Se.groups;for(let We=0,Be=Ie.length;We<Be;We++){const ze=Ie[We],Pt=Pe[ze.materialIndex];Pt&&Pt.visible&&_.push(M,Se,Pt,O,Fe.z,ze)}}else Pe.visible&&_.push(M,Se,Pe,O,Fe.z,null)}}const he=M.children;for(let Se=0,Pe=he.length;Se<Pe;Se++)ci(he[Se],U,O,k)}function Eh(M,U,O,k){const F=M.opaque,he=M.transmissive,Se=M.transparent;p.setupLightsView(O),j===!0&&Ge.setGlobalState(v.clippingPlanes,O),he.length>0&&x0(F,he,U,O),k&&ge.viewport(b.copy(k)),F.length>0&&Ta(F,U,O),he.length>0&&Ta(he,U,O),Se.length>0&&Ta(Se,U,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function x0(M,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const he=De.isWebGL2;ye===null&&(ye=new kr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?la:sr,minFilter:ca,samples:he?4:0})),v.getDrawingBufferSize(Ne),he?ye.setSize(Ne.x,Ne.y):ye.setSize(eu(Ne.x),eu(Ne.y));const Se=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(re),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=rr,Ta(M,O,k),y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye);let Ie=!1;for(let We=0,Be=U.length;We<Be;We++){const ze=U[We],Pt=ze.object,xn=ze.geometry,Ht=ze.material,Ai=ze.group;if(Ht.side===pi&&Pt.layers.test(k.layers)){const bt=Ht.side;Ht.side=pn,Ht.needsUpdate=!0,Mh(Pt,O,k,xn,Ht,Ai),Ht.side=bt,Ht.needsUpdate=!0,Ie=!0}}Ie===!0&&(y.updateMultisampleRenderTarget(ye),y.updateRenderTargetMipmap(ye)),v.setRenderTarget(Se),v.setClearColor(re,P),v.toneMapping=Pe}function Ta(M,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,he=M.length;F<he;F++){const Se=M[F],Pe=Se.object,Ie=Se.geometry,We=k===null?Se.material:k,Be=Se.group;Pe.layers.test(O.layers)&&Mh(Pe,U,O,Ie,We,Be)}}function Mh(M,U,O,k,F,he){M.onBeforeRender(v,U,O,k,F,he),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(v,U,O,k,M,he),F.transparent===!0&&F.side===pi&&F.forceSinglePass===!1?(F.side=pn,F.needsUpdate=!0,v.renderBufferDirect(O,U,k,F,M,he),F.side=dr,F.needsUpdate=!0,v.renderBufferDirect(O,U,k,F,M,he),F.side=pi):v.renderBufferDirect(O,U,k,F,M,he),M.onAfterRender(v,U,O,k,F,he)}function Aa(M,U,O){U.isScene!==!0&&(U=Ce);const k=ke.get(M),F=p.state.lights,he=p.state.shadowsArray,Se=F.state.version,Pe=ve.getParameters(M,F.state,he,U,O),Ie=ve.getProgramCacheKey(Pe);let We=k.programs;k.environment=M.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(M.isMeshStandardMaterial?I:x).get(M.envMap||k.environment),We===void 0&&(M.addEventListener("dispose",ae),We=new Map,k.programs=We);let Be=We.get(Ie);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===Se)return Sh(M,Pe),Be}else Pe.uniforms=ve.getUniforms(M),M.onBuild(O,Pe,v),M.onBeforeCompile(Pe,v),Be=ve.acquireProgram(Pe,Ie),We.set(Ie,Be),k.uniforms=Pe.uniforms;const ze=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ze.clippingPlanes=Ge.uniform),Sh(M,Pe),k.needsLights=y0(M),k.lightsStateVersion=Se,k.needsLights&&(ze.ambientLightColor.value=F.state.ambient,ze.lightProbe.value=F.state.probe,ze.directionalLights.value=F.state.directional,ze.directionalLightShadows.value=F.state.directionalShadow,ze.spotLights.value=F.state.spot,ze.spotLightShadows.value=F.state.spotShadow,ze.rectAreaLights.value=F.state.rectArea,ze.ltc_1.value=F.state.rectAreaLTC1,ze.ltc_2.value=F.state.rectAreaLTC2,ze.pointLights.value=F.state.point,ze.pointLightShadows.value=F.state.pointShadow,ze.hemisphereLights.value=F.state.hemi,ze.directionalShadowMap.value=F.state.directionalShadowMap,ze.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ze.spotShadowMap.value=F.state.spotShadowMap,ze.spotLightMatrix.value=F.state.spotLightMatrix,ze.spotLightMap.value=F.state.spotLightMap,ze.pointShadowMap.value=F.state.pointShadowMap,ze.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Be,k.uniformsList=null,Be}function yh(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Eo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Sh(M,U){const O=ke.get(M);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function E0(M,U,O,k,F){U.isScene!==!0&&(U=Ce),y.resetTextureUnits();const he=U.fog,Se=k.isMeshStandardMaterial?U.environment:null,Pe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,Ie=(k.isMeshStandardMaterial?I:x).get(k.envMap||Se),We=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Be=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ze=!!O.morphAttributes.position,Pt=!!O.morphAttributes.normal,xn=!!O.morphAttributes.color;let Ht=rr;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ht=v.toneMapping);const Ai=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,bt=Ai!==void 0?Ai.length:0,Ye=ke.get(k),Sc=p.state.lights;if(j===!0&&(ce===!0||M!==E)){const Dn=M===E&&k.id===V;Ge.setState(k,M,Dn)}let At=!1;k.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Sc.state.version||Ye.outputColorSpace!==Pe||F.isBatchedMesh&&Ye.batching===!1||!F.isBatchedMesh&&Ye.batching===!0||F.isInstancedMesh&&Ye.instancing===!1||!F.isInstancedMesh&&Ye.instancing===!0||F.isSkinnedMesh&&Ye.skinning===!1||!F.isSkinnedMesh&&Ye.skinning===!0||F.isInstancedMesh&&Ye.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ye.instancingColor===!1&&F.instanceColor!==null||Ye.envMap!==Ie||k.fog===!0&&Ye.fog!==he||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ge.numPlanes||Ye.numIntersection!==Ge.numIntersection)||Ye.vertexAlphas!==We||Ye.vertexTangents!==Be||Ye.morphTargets!==ze||Ye.morphNormals!==Pt||Ye.morphColors!==xn||Ye.toneMapping!==Ht||De.isWebGL2===!0&&Ye.morphTargetsCount!==bt)&&(At=!0):(At=!0,Ye.__version=k.version);let mr=Ye.currentProgram;At===!0&&(mr=Aa(k,U,F));let bh=!1,Bs=!1,bc=!1;const Jt=mr.getUniforms(),gr=Ye.uniforms;if(ge.useProgram(mr.program)&&(bh=!0,Bs=!0,bc=!0),k.id!==V&&(V=k.id,Bs=!0),bh||E!==M){Jt.setValue(N,"projectionMatrix",M.projectionMatrix),Jt.setValue(N,"viewMatrix",M.matrixWorldInverse);const Dn=Jt.map.cameraPosition;Dn!==void 0&&Dn.setValue(N,Fe.setFromMatrixPosition(M.matrixWorld)),De.logarithmicDepthBuffer&&Jt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Jt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Bs=!0,bc=!0)}if(F.isSkinnedMesh){Jt.setOptional(N,F,"bindMatrix"),Jt.setOptional(N,F,"bindMatrixInverse");const Dn=F.skeleton;Dn&&(De.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Jt.setValue(N,"boneTexture",Dn.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Jt.setOptional(N,F,"batchingTexture"),Jt.setValue(N,"batchingTexture",F._matricesTexture,y));const Tc=O.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0&&De.isWebGL2===!0)&&Ve.update(F,O,mr),(Bs||Ye.receiveShadow!==F.receiveShadow)&&(Ye.receiveShadow=F.receiveShadow,Jt.setValue(N,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(gr.envMap.value=Ie,gr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Bs&&(Jt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&M0(gr,bc),he&&k.fog===!0&&oe.refreshFogUniforms(gr,he),oe.refreshMaterialUniforms(gr,k,Y,H,ye),Eo.upload(N,yh(Ye),gr,y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Eo.upload(N,yh(Ye),gr,y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Jt.setValue(N,"center",F.center),Jt.setValue(N,"modelViewMatrix",F.modelViewMatrix),Jt.setValue(N,"normalMatrix",F.normalMatrix),Jt.setValue(N,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Dn=k.uniformsGroups;for(let Ac=0,S0=Dn.length;Ac<S0;Ac++)if(De.isWebGL2){const Th=Dn[Ac];ne.update(Th,mr),ne.bind(Th,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function M0(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function y0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,U,O){ke.get(M.texture).__webglTexture=U,ke.get(M.depthTexture).__webglTexture=O;const k=ke.get(M);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const O=ke.get(M);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,O=0){A=M,L=U,R=O;let k=!0,F=null,he=!1,Se=!1;if(M){const Ie=ke.get(M);Ie.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(N.FRAMEBUFFER,null),k=!1):Ie.__webglFramebuffer===void 0?y.setupRenderTarget(M):Ie.__hasExternalTextures&&y.rebindTextures(M,ke.get(M.texture).__webglTexture,ke.get(M.depthTexture).__webglTexture);const We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Se=!0);const Be=ke.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?F=Be[U][O]:F=Be[U],he=!0):De.isWebGL2&&M.samples>0&&y.useMultisampledRTT(M)===!1?F=ke.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[O]:F=Be,b.copy(M.viewport),G.copy(M.scissor),q=M.scissorTest}else b.copy(K).multiplyScalar(Y).floor(),G.copy(te).multiplyScalar(Y).floor(),q=le;if(ge.bindFramebuffer(N.FRAMEBUFFER,F)&&De.drawBuffers&&k&&ge.drawBuffers(M,F),ge.viewport(b),ge.scissor(G),ge.setScissorTest(q),he){const Ie=ke.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,O)}else if(Se){const Ie=ke.get(M.texture),We=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ie.__webglTexture,O||0,We)}V=-1},this.readRenderTargetPixels=function(M,U,O,k,F,he,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Pe=Pe[Se]),Pe){ge.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const Ie=M.texture,We=Ie.format,Be=Ie.type;if(We!==ti&&ue.convert(We)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===la&&(Ae.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Be!==sr&&ue.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Qi&&(De.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-k&&O>=0&&O<=M.height-F&&N.readPixels(U,O,k,F,ue.convert(We),ue.convert(Be),he)}finally{const Ie=A!==null?ke.get(A).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(M,U,O=0){const k=Math.pow(2,-O),F=Math.floor(U.image.width*k),he=Math.floor(U.image.height*k);y.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,M.x,M.y,F,he),ge.unbindTexture()},this.copyTextureToTexture=function(M,U,O,k=0){const F=U.image.width,he=U.image.height,Se=ue.convert(O.format),Pe=ue.convert(O.type);y.setTexture2D(O,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,M.x,M.y,F,he,Se,Pe,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,Se,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,k,M.x,M.y,Se,Pe,U.image),k===0&&O.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(M,U,O,k,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=M.max.x-M.min.x+1,Se=M.max.y-M.min.y+1,Pe=M.max.z-M.min.z+1,Ie=ue.convert(k.format),We=ue.convert(k.type);let Be;if(k.isData3DTexture)y.setTexture3D(k,0),Be=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)y.setTexture2DArray(k,0),Be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const ze=N.getParameter(N.UNPACK_ROW_LENGTH),Pt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),xn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ht=N.getParameter(N.UNPACK_SKIP_ROWS),Ai=N.getParameter(N.UNPACK_SKIP_IMAGES),bt=O.isCompressedTexture?O.mipmaps[F]:O.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),O.isDataTexture||O.isData3DTexture?N.texSubImage3D(Be,F,U.x,U.y,U.z,he,Se,Pe,Ie,We,bt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,F,U.x,U.y,U.z,he,Se,Pe,Ie,bt.data)):N.texSubImage3D(Be,F,U.x,U.y,U.z,he,Se,Pe,Ie,We,bt),N.pixelStorei(N.UNPACK_ROW_LENGTH,ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ai),F===0&&k.generateMipmaps&&N.generateMipmap(Be),ge.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){L=0,R=0,A=null,ge.reset(),T.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===mh?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===_c?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?Ir:Vg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ir?jt:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JM extends u0{}JM.prototype.isWebGL1Renderer=!0;class QM extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class yc extends Ma{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kf=new D,$f=new D,Zf=new Yt,pl=new gh,to=new vc;class ey extends mn{constructor(e=new Kn,n=new yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Kf.fromBufferAttribute(n,r-1),$f.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Kf.distanceTo($f);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),to.radius+=s,e.ray.intersectsSphere(to)===!1)return;Zf.copy(r).invert(),pl.copy(e.ray).applyMatrix4(Zf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new D,u=new D,d=new D,f=new D,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const h=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=h,w=S-1;v<w;v+=m){const L=g.getX(v),R=g.getX(v+1);if(l.fromBufferAttribute(p,L),u.fromBufferAttribute(p,R),pl.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(f);V<e.near||V>e.far||n.push({distance:V,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let v=h,w=S-1;v<w;v+=m){if(l.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),pl.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||n.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Jf=new D,Qf=new D;class vh extends ey{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Jf.fromBufferAttribute(n,r),Qf.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jf.distanceTo(Qf);e.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const no=new D,io=new D,ml=new D,ro=new kn;class ty extends Kn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Qs*n),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),f={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:p,c:h}=ro;if(_.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),h.fromBufferAttribute(o,l[2]),ro.getNormal(ml),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){const v=(S+1)%3,w=d[S],L=d[v],R=ro[u[S]],A=ro[u[v]],V=`${w}_${L}`,E=`${L}_${w}`;E in f&&f[E]?(ml.dot(f[E].normal)<=s&&(m.push(R.x,R.y,R.z),m.push(A.x,A.y,A.z)),f[E]=null):V in f||(f[V]={index0:l[S],index1:l[v],normal:ml.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:p}=f[g];no.fromBufferAttribute(o,_),io.fromBufferAttribute(o,p),m.push(no.x,no.y,no.z),m.push(io.x,io.y,io.z)}this.setAttribute("position",new Zt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xh extends Kn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new D,f=new D,m=[],g=[],_=[],p=[];for(let h=0;h<=i;h++){const S=[],v=h/i;let w=0;h===0&&a===0?w=.5/n:h===i&&c===Math.PI&&(w=-.5/n);for(let L=0;L<=n;L++){const R=L/n;d.x=-e*Math.cos(r+R*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(r+R*s)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(R+w,1-v),S.push(l++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<n;S++){const v=u[h][S+1],w=u[h][S],L=u[h+1][S],R=u[h+1][S+1];(h!==0||a>0)&&m.push(v,w,R),(h!==i-1||c<Math.PI)&&m.push(w,L,R)}this.setIndex(m),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ep{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ln(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ny extends vh{constructor(e=10,n=10,i=4473924,r=8947848){i=new Qe(i),r=new Qe(r);const s=n/2,a=e/n,o=e/2,c=[],l=[];for(let f=0,m=0,g=-o;f<=n;f++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const _=f===s?i:r;_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3}const u=new Kn;u.setAttribute("position",new Zt(c,3)),u.setAttribute("color",new Zt(l,3));const d=new yc({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iy extends vh{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Kn;r.setAttribute("position",new Zt(n,3)),r.setAttribute("color",new Zt(i,3));const s=new yc({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);const tp={type:"change"},gl={type:"start"},np={type:"end"},so=new gh,ip=new $i,ry=Math.cos(70*X2.DEG2RAD);class sy extends Hr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wr.ROTATE,MIDDLE:Wr.DOLLY,RIGHT:Wr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Re),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(tp),i.update(),s=r.NONE},this.update=function(){const T=new D,ne=new Gr().setFromUnitVectors(e.up,new D(0,1,0)),Me=ne.clone().invert(),fe=new D,J=new Gr,C=new D,ie=2*Math.PI;return function(Le=null){const we=i.object.position;T.copy(we).sub(i.target),T.applyQuaternion(ne),o.setFromVector3(T),i.autoRotate&&s===r.NONE&&q(b(Le)),i.enableDamping?(o.theta+=c.theta*i.dampingFactor,o.phi+=c.phi*i.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ke=i.minAzimuthAngle,$e=i.maxAzimuthAngle;isFinite(Ke)&&isFinite($e)&&(Ke<-Math.PI?Ke+=ie:Ke>Math.PI&&(Ke-=ie),$e<-Math.PI?$e+=ie:$e>Math.PI&&($e-=ie),Ke<=$e?o.theta=Math.max(Ke,Math.min($e,o.theta)):o.theta=o.theta>(Ke+$e)/2?Math.max(Ke,o.theta):Math.min($e,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*l),T.setFromSpherical(o),T.applyQuaternion(Me),we.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Tt=!1;if(i.zoomToCursor&&R){let Lt=null;if(i.object.isPerspectiveCamera){const it=T.length();Lt=K(it*l);const Nt=it-Lt;i.object.position.addScaledVector(w,Nt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const it=new D(L.x,L.y,0);it.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Tt=!0;const Nt=new D(L.x,L.y,0);Nt.unproject(i.object),i.object.position.sub(Nt).add(it),i.object.updateMatrixWorld(),Lt=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Lt).add(i.object.position):(so.origin.copy(i.object.position),so.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(so.direction))<ry?e.lookAt(i.target):(ip.setFromNormalAndCoplanarPoint(i.object.up,i.target),so.intersectPlane(ip,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Tt=!0);return l=1,R=!1,Tt||fe.distanceToSquared(i.object.position)>a||8*(1-J.dot(i.object.quaternion))>a||C.distanceToSquared(i.target)>0?(i.dispatchEvent(tp),fe.copy(i.object.position),J.copy(i.object.quaternion),C.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",st),i.domElement.removeEventListener("pointerdown",y),i.domElement.removeEventListener("pointercancel",I),i.domElement.removeEventListener("wheel",ee),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",I),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Re),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new ep,c=new ep;let l=1;const u=new D,d=new Xe,f=new Xe,m=new Xe,g=new Xe,_=new Xe,p=new Xe,h=new Xe,S=new Xe,v=new Xe,w=new D,L=new Xe;let R=!1;const A=[],V={};let E=!1;function b(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function G(T){const ne=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*ne)}function q(T){c.theta-=T}function re(T){c.phi-=T}const P=function(){const T=new D;return function(Me,fe){T.setFromMatrixColumn(fe,0),T.multiplyScalar(-Me),u.add(T)}}(),B=function(){const T=new D;return function(Me,fe){i.screenSpacePanning===!0?T.setFromMatrixColumn(fe,1):(T.setFromMatrixColumn(fe,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(Me),u.add(T)}}(),H=function(){const T=new D;return function(Me,fe){const J=i.domElement;if(i.object.isPerspectiveCamera){const C=i.object.position;T.copy(C).sub(i.target);let ie=T.length();ie*=Math.tan(i.object.fov/2*Math.PI/180),P(2*Me*ie/J.clientHeight,i.object.matrix),B(2*fe*ie/J.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(P(Me*(i.object.right-i.object.left)/i.object.zoom/J.clientWidth,i.object.matrix),B(fe*(i.object.top-i.object.bottom)/i.object.zoom/J.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(T,ne){if(!i.zoomToCursor)return;R=!0;const Me=i.domElement.getBoundingClientRect(),fe=T-Me.left,J=ne-Me.top,C=Me.width,ie=Me.height;L.x=fe/C*2-1,L.y=-(J/ie)*2+1,w.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function te(T){d.set(T.clientX,T.clientY)}function le(T){W(T.clientX,T.clientX),h.set(T.clientX,T.clientY)}function z(T){g.set(T.clientX,T.clientY)}function j(T){f.set(T.clientX,T.clientY),m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ne=i.domElement;q(2*Math.PI*m.x/ne.clientHeight),re(2*Math.PI*m.y/ne.clientHeight),d.copy(f),i.update()}function ce(T){S.set(T.clientX,T.clientY),v.subVectors(S,h),v.y>0?Y(G(v.y)):v.y<0&&X(G(v.y)),h.copy(S),i.update()}function ye(T){_.set(T.clientX,T.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),H(p.x,p.y),g.copy(_),i.update()}function Ee(T){W(T.clientX,T.clientY),T.deltaY<0?X(G(T.deltaY)):T.deltaY>0&&Y(G(T.deltaY)),i.update()}function Ne(T){let ne=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?re(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),ne=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?re(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),ne=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),ne=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),ne=!0;break}ne&&(T.preventDefault(),i.update())}function Fe(T){if(A.length===1)d.set(T.pageX,T.pageY);else{const ne=ue(T),Me=.5*(T.pageX+ne.x),fe=.5*(T.pageY+ne.y);d.set(Me,fe)}}function Ce(T){if(A.length===1)g.set(T.pageX,T.pageY);else{const ne=ue(T),Me=.5*(T.pageX+ne.x),fe=.5*(T.pageY+ne.y);g.set(Me,fe)}}function je(T){const ne=ue(T),Me=T.pageX-ne.x,fe=T.pageY-ne.y,J=Math.sqrt(Me*Me+fe*fe);h.set(0,J)}function N(T){i.enableZoom&&je(T),i.enablePan&&Ce(T)}function qt(T){i.enableZoom&&je(T),i.enableRotate&&Fe(T)}function Ae(T){if(A.length==1)f.set(T.pageX,T.pageY);else{const Me=ue(T),fe=.5*(T.pageX+Me.x),J=.5*(T.pageY+Me.y);f.set(fe,J)}m.subVectors(f,d).multiplyScalar(i.rotateSpeed);const ne=i.domElement;q(2*Math.PI*m.x/ne.clientHeight),re(2*Math.PI*m.y/ne.clientHeight),d.copy(f)}function De(T){if(A.length===1)_.set(T.pageX,T.pageY);else{const ne=ue(T),Me=.5*(T.pageX+ne.x),fe=.5*(T.pageY+ne.y);_.set(Me,fe)}p.subVectors(_,g).multiplyScalar(i.panSpeed),H(p.x,p.y),g.copy(_)}function ge(T){const ne=ue(T),Me=T.pageX-ne.x,fe=T.pageY-ne.y,J=Math.sqrt(Me*Me+fe*fe);S.set(0,J),v.set(0,Math.pow(S.y/h.y,i.zoomSpeed)),Y(v.y),h.copy(S);const C=(T.pageX+ne.x)*.5,ie=(T.pageY+ne.y)*.5;W(C,ie)}function pt(T){i.enableZoom&&ge(T),i.enablePan&&De(T)}function ke(T){i.enableZoom&&ge(T),i.enableRotate&&Ae(T)}function y(T){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",I)),Ve(T),T.pointerType==="touch"?Ge(T):Q(T))}function x(T){i.enabled!==!1&&(T.pointerType==="touch"?$(T):Z(T))}function I(T){Ue(T),A.length===0&&(i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",I)),i.dispatchEvent(np),s=r.NONE}function Q(T){let ne;switch(T.button){case 0:ne=i.mouseButtons.LEFT;break;case 1:ne=i.mouseButtons.MIDDLE;break;case 2:ne=i.mouseButtons.RIGHT;break;default:ne=-1}switch(ne){case Wr.DOLLY:if(i.enableZoom===!1)return;le(T),s=r.DOLLY;break;case Wr.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;z(T),s=r.PAN}else{if(i.enableRotate===!1)return;te(T),s=r.ROTATE}break;case Wr.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;te(T),s=r.ROTATE}else{if(i.enablePan===!1)return;z(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(gl)}function Z(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;j(T);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(T);break;case r.PAN:if(i.enablePan===!1)return;ye(T);break}}function ee(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(gl),Ee(ve(T)),i.dispatchEvent(np))}function ve(T){const ne=T.deltaMode,Me={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(ne){case 1:Me.deltaY*=16;break;case 2:Me.deltaY*=100;break}return T.ctrlKey&&!E&&(Me.deltaY*=10),Me}function oe(T){T.key==="Control"&&(E=!0,document.addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(T){T.key==="Control"&&(E=!1,document.removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function Re(T){i.enabled===!1||i.enablePan===!1||Ne(T)}function Ge(T){switch(be(T),A.length){case 1:switch(i.touches.ONE){case Xr.ROTATE:if(i.enableRotate===!1)return;Fe(T),s=r.TOUCH_ROTATE;break;case Xr.PAN:if(i.enablePan===!1)return;Ce(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Xr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;N(T),s=r.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;qt(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(gl)}function $(T){switch(be(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;De(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;pt(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(T),i.update();break;default:s=r.NONE}}function st(T){i.enabled!==!1&&T.preventDefault()}function Ve(T){A.push(T.pointerId)}function Ue(T){delete V[T.pointerId];for(let ne=0;ne<A.length;ne++)if(A[ne]==T.pointerId){A.splice(ne,1);return}}function be(T){let ne=V[T.pointerId];ne===void 0&&(ne=new Xe,V[T.pointerId]=ne),ne.set(T.pageX,T.pageY)}function ue(T){const ne=T.pointerId===A[0]?A[1]:A[0];return V[ne]}i.domElement.addEventListener("contextmenu",st),i.domElement.addEventListener("pointerdown",y),i.domElement.addEventListener("pointercancel",I),i.domElement.addEventListener("wheel",ee,{passive:!1}),document.addEventListener("keydown",oe,{passive:!0,capture:!0}),this.update()}}function ay(t){getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.style.display="block";const e=new u0({antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.domElement.style.display="block",e.domElement.style.width="100%",e.domElement.style.height="100%",t.appendChild(e.domElement);const n=new QM;n.background=new Qe(723723);const i=new Gn(45,1,.01,50);i.position.set(.7,.5,1.6);const r=new sy(i,e.domElement);r.enableDamping=!0;const s=16757070,a=8014876,o=new ny(2.5,25,s,a);o.material.opacity=.35,o.material.transparent=!0,o.position.set(0,-5e-4,0),n.add(o);const c=new iy(.25);c.material.opacity=.75,c.material.transparent=!0,n.add(c);const l=new Ec(1,1),u=new Wo({color:s,transparent:!0,opacity:.22,side:pi}),d=new _i(l,u);n.add(d);const f=new vh(new ty(l),new yc({color:s}));d.add(f);const m=new _i(new xh(.03,32,24),new Wo({color:s}));n.add(m);const g=document.createElement("div");g.textContent="Left Click: Rotate | Right Click: Pan | Scroll: Zoom",Object.assign(g.style,{position:"absolute",left:"8px",bottom:"8px",padding:"6px 8px",font:"12px/1.2 system-ui, sans-serif",color:"#ffb14e",border:"1px solid #333",borderRadius:"8px",background:"rgba(255,177,78,0.10)",pointerEvents:"none",userSelect:"none"}),t.appendChild(g);function _(){const v=t.clientWidth||640,w=t.clientHeight||360;e.setSize(v,w,!0),i.aspect=v/w,i.updateProjectionMatrix()}const p=new ResizeObserver(_);p.observe(t),window.addEventListener("resize",_),_();let h=0;function S(){h=requestAnimationFrame(S),r.update(),e.render(n,i)}return S(),{setScreenSize(v,w){d.scale.set(v,w,1),d.position.set(0,w*.5,0)},setEye(v,w,L){m.position.set(v,w,L)},dispose(){cancelAnimationFrame(h),p.disconnect(),window.removeEventListener("resize",_),e.dispose();try{t.removeChild(e.domElement)}catch{}try{t.removeChild(g)}catch{}}}}function oy(){var i,r;const e=new URLSearchParams(window.location.search).get("ws");if(e)return e;const n=(r=(i=import.meta)==null?void 0:i.env)==null?void 0:r.VITE_LUCI_WS_URL;return n||null}function cy(){var i,r;const t=location.protocol==="https:"?"wss":"ws",e=location.hostname,n=((r=(i=import.meta)==null?void 0:i.env)==null?void 0:r.VITE_LUCI_WS_PORT)||8787;return`${t}://${e}:${n}`}class ly{constructor(e,{debug:n=!1,heartbeatSec:i=15,onOpen:r=null,onClose:s=null,onError:a=null,onMessage:o=null}={}){ks(this,"onOpen",()=>{if(this.connected=!0,this.everOpened=!0,this.log("connected (url=",this.url,")"),this.backoff=1e3,this.startHeartbeat(),this.send({type:"hello",v:1,ts:Date.now(),agent:"luci-tracker"}),this.onOpenCb)try{this.onOpenCb()}catch{}});ks(this,"onClose",()=>{if(this.log("closed"),this.connected=!1,this.stopHeartbeat(),this.onCloseCb)try{this.onCloseCb()}catch{}if(!this.everOpened&&!this.usingFallback&&this.fallbackUrl){this.updateUrl(this.fallbackUrl);return}this.scheduleReconnect()});ks(this,"onError",e=>{if(this.log("error",(e==null?void 0:e.message)||e),this.onErrorCb)try{this.onErrorCb(e)}catch{}if(!this.everOpened&&!this.usingFallback&&this.fallbackUrl){this.updateUrl(this.fallbackUrl);return}});ks(this,"onMessage",e=>{const n=e==null?void 0:e.data;let i=n;if(typeof n=="string")try{i=JSON.parse(n)}catch{}if(this.onMessageCb)try{this.onMessageCb(i)}catch{}else this.log("rx",i)});this.fallbackUrl=cy(),this.primaryUrl=e||oy()||this.fallbackUrl,this.url=this.primaryUrl,this.usingFallback=this.url===this.fallbackUrl,this.everOpened=!1,this.debug=n,this.heartbeatSec=i,this.onOpenCb=r,this.onCloseCb=s,this.onErrorCb=a,this.onMessageCb=o,this.ws=null,this.connected=!1,this.heartbeatTimer=null,this.reconnectTimer=null,this.backoff=1e3,this.maxBackoff=8e3,this.onTx=null}log(...e){this.debug&&console.log("[luci-ws]",...e)}isOpen(){var e;return((e=this.ws)==null?void 0:e.readyState)===WebSocket.OPEN}updateUrl(e){!e||this.url===e||(this.url=e,this.usingFallback=this.url===this.fallbackUrl,this.log("switching URL →",this.url),this.ws&&(this.close(),this.connect()))}connect(){this.clearReconnect();try{this.log("connecting to:",this.url),this.ws=new WebSocket(this.url)}catch(e){if(this.log("WebSocket ctor failed:",e),!this.everOpened&&!this.usingFallback&&this.fallbackUrl){this.updateUrl(this.fallbackUrl);return}this.scheduleReconnect();return}this._boundOpen=this._boundOpen||(e=>this.onOpen(e)),this._boundClose=this._boundClose||(e=>this.onClose(e)),this._boundError=this._boundError||(e=>this.onError(e)),this._boundMessage=this._boundMessage||(e=>this.onMessage(e)),this.ws.addEventListener("open",this._boundOpen),this.ws.addEventListener("close",this._boundClose),this.ws.addEventListener("error",this._boundError),this.ws.addEventListener("message",this._boundMessage)}scheduleReconnect(){this.clearReconnect();const e=this.backoff+Math.floor(Math.random()*200);this.log(`reconnect in ${e}ms`),this.reconnectTimer=setTimeout(()=>this.connect(),e),this.backoff=Math.min(this.maxBackoff,Math.round(this.backoff*1.7))}clearReconnect(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null)}startHeartbeat(){this.stopHeartbeat(),this.heartbeatTimer=setInterval(()=>{if(this.isOpen())try{this.ws.send(JSON.stringify({type:"ping",ts:Date.now()}))}catch(e){this.log("heartbeat send failed:",e)}},this.heartbeatSec*1e3)}stopHeartbeat(){this.heartbeatTimer&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null)}send(e){const n=JSON.stringify(e);if(this.isOpen())try{return this.ws.send(n),this.onTx&&this.onTx(),!0}catch(i){this.log("send failed:",i)}return!1}close(){var e;this.stopHeartbeat(),this.clearReconnect();try{(e=this.ws)==null||e.close()}catch{}this.ws=null,this.connected=!1}}const et=document.getElementById("start"),tt=document.getElementById("stop"),mi=document.getElementById("delegate"),Ni=document.getElementById("cameraSel"),gi=document.getElementById("resSel"),fn=document.getElementById("eyeSel"),at=document.getElementById("status"),er=document.getElementById("actual"),rp=document.getElementById("fps"),sp=document.getElementById("ms"),ao=document.getElementById("readout"),_l=document.getElementById("toggleWebcam"),vl=document.getElementById("toggleMesh"),oo=document.getElementById("toggle3d"),co=document.getElementById("mirrorFeed"),ap=document.getElementById("preview"),ni=document.getElementById("overlay"),ht=ni?ni.getContext("2d"):null,ta=document.getElementById("monX"),na=document.getElementById("monY"),op=document.getElementById("saveCal"),nu=document.getElementById("offX"),iu=document.getElementById("offY"),ru=document.getElementById("offZ"),su=document.getElementById("gainX"),au=document.getElementById("gainY"),xl=document.getElementById("btnPopout"),Gi=document.getElementById("btnDocPiP");document.getElementById("btnWake");const h0="luci.tracker.prefs.v1",d0=()=>{try{return JSON.parse(localStorage.getItem(h0))||{}}catch{return{}}},Sa=t=>{const e=d0();localStorage.setItem(h0,JSON.stringify({...e,...t}))};let Oe=V1();window.LUCI_CFG={zEstimator:Oe.zEstimator,zAlpha:Oe.zAlpha,zClampMin_m:Oe.zClampMin_m,zClampMax_m:Oe.zClampMax_m};var gp,_p,vp,xp;const nn={yGain:Oe.yGain,yGamma:Oe.yGamma,yClamp01:Oe.yClamp01,yCalib:Oe.yCalib,xGain:Oe.xGain,xGamma:Oe.xGamma,xClamp01:Oe.xClamp01,xCalib:Oe.xCalib,wideAngleMode:Oe.wideAngleMode,lens:{u0:((gp=Oe.lens)==null?void 0:gp.u0)??.5,v0:((_p=Oe.lens)==null?void 0:_p.v0)??.5,k1:((vp=Oe.lens)==null?void 0:vp.k1)??0,k2:((xp=Oe.lens)==null?void 0:xp.k2)??0}};ta&&(ta.value=String(Oe.monitorX_m));na&&(na.value=String(Oe.monitorY_m));nu&&(nu.value=String(Oe.offsetX_m??0));iu&&(iu.value=String(Oe.offsetY_m??0));ru&&(ru.value=String(Oe.offsetZ_m??0));su&&(su.value=String(Oe.xGain??1));au&&(au.value=String(Oe.yGain??1));const ii=d0();gi&&ii.resKey&&(gi.value=ii.resKey);fn&&ii.eye&&(fn.value=ii.eye);mi&&ii.delegate&&(mi.value=ii.delegate);let Nr=ii.mirrorFeed!==void 0?!!ii.mirrorFeed:!0;co&&(co.checked=Nr,co.addEventListener("change",()=>{Nr=!!co.checked,Sa({mirrorFeed:Nr}),_y()}));const Mt=document.createElement("video");Mt.muted=!0;Mt.playsInline=!0;Object.assign(Mt.style,{position:"fixed",left:"-10000px",top:"0",width:"1px",height:"1px"});document.body.appendChild(Mt);const cp=document.getElementById("threeMount");let on=null,cs=!0,Mo={x:0,y:0,z:0};const lp=t=>`3D Preview: ${t?"On":"Off"}`;function up(t){var e;cp&&(t&&!on?(on=ay(cp),on.setScreenSize(Oe.monitorX_m,Oe.monitorY_m),on.setEye(Mo.x,Mo.y,Mo.z)):!t&&on&&((e=on.dispose)==null||e.call(on),on=null))}oo&&(oo.textContent=lp(cs),up(cs),oo.addEventListener("click",()=>{cs=!cs,oo.textContent=lp(cs),up(cs)}));op&&op.addEventListener("click",()=>{Oe={...Oe,monitorX_m:Number((ta==null?void 0:ta.value)??Oe.monitorX_m),monitorY_m:Number((na==null?void 0:na.value)??Oe.monitorY_m)},Dg(Oe),on==null||on.setScreenSize(Oe.monitorX_m,Oe.monitorY_m)});function ba(t,e,n){t&&t.addEventListener("change",()=>{const i=Number(t.value);Oe={...Oe,[e]:i},Dg(Oe),typeof n=="function"&&n(i)})}ba(nu,"offsetX_m");ba(iu,"offsetY_m");ba(ru,"offsetZ_m");ba(su,"xGain",t=>{nn.xGain=t});ba(au,"yGain",t=>{nn.yGain=t});let lo=null;window.addEventListener("keydown",t=>{if(t.key.toLowerCase()==="t")if(lo)lo.destroy(),lo=null;else{const e=document.createElement("div");document.body.appendChild(e),lo=H1(e,{videoEl:Mt})}});let ia=0,ra=0,Ar=1;function f0(){if(!ni||!ht)return;const t=ni.getBoundingClientRect();ia=t.width,ra=t.height,Ar=Math.min(window.devicePixelRatio||1,2),ni.width=Math.round(ia*Ar),ni.height=Math.round(ra*Ar),ht.setTransform(Ar,0,0,Ar,0,0)}ni&&ap&&new ResizeObserver(f0).observe(ap);f0();const uy=(t,e,n,i)=>{const r=Math.min(n/t,i/e),s=t*r,a=e*r;return{offX:(n-s)/2,offY:(i-a)/2,drawW:s,drawH:a}},hy=(t,e,n)=>{const i=(t-n.offX)/n.drawW,r=(e-n.offY)/n.drawH;return{u:Math.min(1,Math.max(0,i)),v:Math.min(1,Math.max(0,r))}},ar=t=>Math.max(0,Math.min(1,t));function dy(t,e,n){const{u0:i=.5,v0:r=.5,k1:s=0,k2:a=0}=n||{};let o=t-i,c=e-r;const l=o*o+c*c,u=l*l,d=-s,f=-a;return o*=1+d*l+f*u,c*=1+d*l+f*u,{u:o+i,v:c+r}}function fy(t){let e=1-t;if(e=(e-.5)*nn.yGain+.5,e=nn.yGamma!==1?Math.pow(ar(e),nn.yGamma):e,nn.yCalib){const{a:n=0,b:i=1,c:r=0}=nn.yCalib;e=ar(n+i*e+r*e*e)}return nn.yClamp01?ar(e):e}function py(t){let e=(t-.5)*nn.xGain+.5;if(e=nn.xGamma!==1?Math.pow(ar(e),nn.xGamma):e,nn.xCalib){const{a:n=0,b:i=1,c:r=0}=nn.xCalib;e=ar(n+i*e+r*e*e)}return nn.xClamp01?ar(e):e}let yo=!0,So=!1;if(_l){const t=()=>_l.textContent=`Webcam: ${yo?"On":"Off"}`;t(),_l.addEventListener("click",()=>{yo=!yo,t()})}if(vl){const t=()=>vl.textContent=`FaceMesh: ${So?"On":"Off"}`;t(),vl.addEventListener("click",()=>{So=!So,t()})}let uo=0,ho=0,hp=0,Fr=0,El=0,wr=0,Ml=null;function p0(t){uo||(uo=t);const e=1e3/Math.max(1,t-uo);if(ho=ho?ho*.85+e*.15:e,uo=t,rp){const n=[`cb: ${ho.toFixed(1)}`];Fr&&n.push(`vid: ${Fr.toFixed(1)}`),wr&&n.push(`inf: ${wr.toFixed(1)}`),rp.textContent=n.join(" • ")}requestAnimationFrame(p0)}requestAnimationFrame(p0);function m0(t,e){if(e&&typeof e.mediaTime=="number"){const n=e.mediaTime-(hp||e.mediaTime);if(n>0){const i=1/n;Fr=Fr?Fr*.85+i*.15:i}hp=e.mediaTime}Mt.requestVideoFrameCallback(m0)}function my(){document.querySelectorAll(".tva-panel").forEach(e=>{var r;const n=(((r=e.querySelector(".tva-title"))==null?void 0:r.textContent)||"").toLowerCase();n.includes("camera & overlay")||n.includes("3d preview")||(e.style.display="none")});const t=document.getElementById("preview");t&&(t.style.maxHeight="280px")}new URLSearchParams(location.search).get("mode")==="mini"&&my();function gy(){const t=new URL(location.href);t.searchParams.set("mode","mini"),window.open(t.toString(),"luci_tracker_pop","width=420,height=360,resizable=yes,menubar=no,toolbar=no,location=no,status=no")}xl==null||xl.addEventListener("click",gy);let An=null;function _y(){if(!An)return;const t=An.document.querySelector("video");if(t){const e=!Nr;t.style.transform=e?"scaleX(-1)":"scaleX(1)"}}async function vy(){if(!("documentPictureInPicture"in window)){alert("Mini PiP is only available in Chromium-based browsers.");return}if(An&&!An.closed){try{An.close()}catch{}An=null,Gi.textContent="Mini PiP (Chromium)";return}const t=Mt==null?void 0:Mt.srcObject;if(!t){alert("Start the tracker first, then open Mini PiP.");return}An=await documentPictureInPicture.requestWindow({width:320,height:240});const e=An.document.createElement("style");e.textContent=`
    html,body{margin:0;padding:0;background:#000;height:100%;display:grid;place-items:center}
    video{max-width:100%;max-height:100%;object-fit:contain;transition:transform 80ms linear}
  `,An.document.head.appendChild(e);const n=An.document.createElement("video");n.autoplay=!0,n.muted=!0,n.playsInline=!0,n.srcObject=t,n.style.transform=Nr?"scaleX(-1)":"scaleX(1)",An.document.body.appendChild(n),An.addEventListener("pagehide",()=>{An=null,Gi.textContent="Mini PiP (Chromium)"}),Gi.textContent="Close Mini PiP"}Gi==null||Gi.addEventListener("click",vy);Gi&&!("documentPictureInPicture"in window)&&(Gi.disabled=!0,Gi.title="Mini PiP not supported in this browser");const gs=document.getElementById("wsStatus"),dp=document.getElementById("wsAddr"),yl=(t,e)=>{gs&&(gs.textContent=`WS: ${t}`,gs.className=`badge ${e||""}`)},g0="wss://portal-ws-server.onrender.com";dp&&(dp.textContent=g0);let ua=null,fp=null;ua=new ly(g0,{debug:!1,onOpen:()=>yl("Connected","ok"),onClose:()=>yl("Reconnecting…","warn"),onError:()=>yl("Error","err")});ua.onTx=()=>{gs&&(gs.classList.add("tx"),clearTimeout(fp),fp=setTimeout(()=>gs.classList.remove("tx"),120))};ua.connect();let ou=null,pp=0;const xy=60,Ey=Math.round(1e3/xy);(function t(){if(requestAnimationFrame(t),!ou||!ua)return;const e=performance.now();e-pp<Ey||(pp=e,ua.send(ou))})();wg(({ts:t,pe:e,procMs:n,raw:i,z_m:r})=>{var V;if(typeof t=="number"){if(El){const E=1e3/Math.max(1,t-El);wr=wr?wr*.85+E*.15:E}El=t}if(n!=null&&(Ml=n),sp&&Ml!=null&&(sp.textContent=`proc: ${Ml.toFixed(1)} ms`),!ni||!ht)return;const s=Mt.videoWidth||640,a=Mt.videoHeight||360,o=uy(s,a,ia,ra);ht.setTransform(Ar,0,0,Ar,0,0),ht.clearRect(0,0,ia,ra);const c=!Nr;if(yo&&(Mt==null?void 0:Mt.readyState)>=2?(ht.save(),c?(ht.translate(o.offX+o.drawW,o.offY),ht.scale(-1,1)):ht.translate(o.offX,o.offY),ht.drawImage(Mt,0,0,s,a,0,0,o.drawW,o.drawH),ht.restore()):(ht.fillStyle="#000",ht.fillRect(0,0,ia,ra)),ht.strokeStyle="rgba(255,177,78,0.45)",ht.lineWidth=1,ht.strokeRect(o.offX,o.offY,o.drawW,o.drawH),So&&((V=i==null?void 0:i.faceLandmarks)!=null&&V.length)){const E=i.faceLandmarks[0];ht.fillStyle="#ffb14e";for(let b=0;b<E.length;b++){const G=E[b],q=c?1-G.x:G.x,re=o.offX+q*o.drawW,P=o.offY+G.y*o.drawH;ht.beginPath(),ht.arc(re,P,1.5,0,Math.PI*2),ht.fill()}}if(!e){ao&&(ao.textContent="screen (m): —  Z: —  uv: —");return}const l=Nr?1-e.x:e.x,u=e.y,d=o.offX+l*o.drawW,f=o.offY+u*o.drawH;ht.beginPath(),ht.arc(d,f,4,0,Math.PI*2),ht.fillStyle="#ffb14e",ht.fill();const{u:m,v:g}=hy(d,f,o);let _=m,p=g;if(nn.wideAngleMode){const E=dy(_,p,nn.lens);_=ar(E.u),p=ar(E.v)}const h=py(_),S=fy(p),v=(h-.5)*Oe.monitorX_m+(Oe.offsetX_m||0),w=(S-.5)*Oe.monitorY_m+(Oe.offsetY_m||0),L=(r??Oe.headInitZ_m)+(Oe.offsetZ_m||0);ao&&(ao.textContent=`screen (m): x=${v.toFixed(3)}  y=${w.toFixed(3)}  Z (m): ${L.toFixed(3)}  uv: u=${h.toFixed(4)} v=${(1-S).toFixed(4)}`),Mo={x:v,y:w,z:L},on==null||on.setEye(v,w,L);const R=Mt.videoWidth||0,A=Mt.videoHeight||0;ou={type:"pose",v:1,ts:Date.now(),eyeMode:(fn==null?void 0:fn.value)||"center",screen:{x:v,y:w},uv:{u:h,v:1-S},head:{z:L},camera:{width:R,height:A},perf:{infer_fps:Number.isFinite(wr)?Number(wr.toFixed(1)):null,video_fps:Number.isFinite(Fr)?Number(Fr.toFixed(1)):null}}});let mp=!1;async function _0(){var r;at&&(at.textContent="starting…"),et==null||et.setAttribute("disabled","true"),tt==null||tt.setAttribute("disabled","true");const t=(mi==null?void 0:mi.value)||"GPU",e=(gi==null?void 0:gi.value)||"1280x720",{width:n,height:i}=Ep[e]||{width:1280,height:720};try{if(await U1({delegate:t,video:Mt,width:n,height:i,initZ_m:Oe.headInitZ_m}),fn!=null&&fn.value&&await Cg(fn.value),Mt.addEventListener("loadedmetadata",()=>{er&&(er.textContent=bo(Mt))},{once:!0}),mp||(mp=!0,Mt.requestVideoFrameCallback(m0)),Ni){const s=await Mp();Ni.innerHTML=s.map(o=>`<option value="${o.deviceId}">${o.label||"Camera"}</option>`).join("");const a=ii.cameraId&&s.find(o=>o.deviceId===ii.cameraId)?ii.cameraId:Ni.value||((r=s[0])==null?void 0:r.deviceId)||"";a&&(Ni.value=a)}er&&(er.textContent=bo(Mt)),at&&(at.textContent="running")}catch(s){console.error("start() failed:",s),at&&(at.textContent="error starting (see console)")}finally{et==null||et.removeAttribute("disabled"),tt==null||tt.removeAttribute("disabled")}}async function v0(){at&&(at.textContent="stopping…"),et==null||et.setAttribute("disabled","true"),tt==null||tt.setAttribute("disabled","true");try{await I1(),ni&&ht&&ht.clearRect(0,0,ni.width,ni.height),at&&(at.textContent="stopped")}catch(t){console.error("stop() failed:",t),at&&(at.textContent="error stopping (see console)")}finally{et==null||et.removeAttribute("disabled"),tt==null||tt.removeAttribute("disabled")}}et==null||et.addEventListener("click",_0);tt==null||tt.addEventListener("click",v0);window.addEventListener("pagehide",()=>v0());Ni==null||Ni.addEventListener("change",async()=>{Sa({cameraId:Ni.value}),at&&(at.textContent="reconfiguring…"),et==null||et.setAttribute("disabled","true"),tt==null||tt.setAttribute("disabled","true");try{await N1(Ni.value),er&&(er.textContent=bo(Mt)),at&&(at.textContent="running")}catch(t){console.error("camera change failed:",t),at&&(at.textContent="camera error")}finally{et==null||et.removeAttribute("disabled"),tt==null||tt.removeAttribute("disabled")}});gi==null||gi.addEventListener("change",async()=>{Sa({resKey:gi.value}),at&&(at.textContent="reconfiguring…"),et==null||et.setAttribute("disabled","true"),tt==null||tt.setAttribute("disabled","true");try{const{width:t,height:e}=Ep[gi.value]||{width:1280,height:720};await F1(t,e),er&&(er.textContent=bo(Mt)),at&&(at.textContent="running")}catch(t){console.error("resolution change failed:",t),at&&(at.textContent="resolution error")}finally{et==null||et.removeAttribute("disabled"),tt==null||tt.removeAttribute("disabled")}});fn==null||fn.addEventListener("change",async()=>{Sa({eye:fn.value});try{await Cg(fn.value)}catch{}});mi==null||mi.addEventListener("change",async()=>{Sa({delegate:mi.value});const t=mi.value||"GPU";at&&(at.textContent="switching delegate…"),et==null||et.setAttribute("disabled","true"),tt==null||tt.setAttribute("disabled","true");try{await O1(t),at&&(at.textContent="running")}catch(e){console.error("delegate change failed:",e),at&&(at.textContent="delegate error")}finally{et==null||et.removeAttribute("disabled"),tt==null||tt.removeAttribute("disabled")}});_0();
