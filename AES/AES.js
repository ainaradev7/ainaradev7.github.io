(()=>{var J=Object.create;var O=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var Z=Object.getOwnPropertyNames;var ee=Object.getPrototypeOf,te=Object.prototype.hasOwnProperty;var oe=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var ne=(o,t,l,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let d of Z(t))!te.call(o,d)&&d!==l&&O(o,d,{get:()=>t[d],enumerable:!(c=Q(t,d))||c.enumerable});return o};var re=(o,t,l)=>(l=o!=null?J(ee(o)):{},ne(t||!o||!o.__esModule?O(l,"default",{value:o,enumerable:!0}):l,o));var H=oe(B=>{var he=function(){"use strict";let o="1.1.0";function t(e){alert(`Mod ERROR:
`+e);let i=new Error(e);throw console.error(i),i}let l=new TextEncoder;function c(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function d(e){let i=new Set;return e.filter(r=>!i.has(r)&&i.add(r))}let b=new Map,h=new Set;function M(e){h.has(e)||(h.add(e),console.warn(e))}function A(e){let i=[],r=new Map,a=new Set;for(let p of E.values()){let f=p.patching.get(e.name);if(f){i.push(...f.hooks);for(let[s,n]of f.patches.entries())r.has(s)&&r.get(s)!==n&&M(`ModSDK: Mod '${p.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${s}
Patch1:
${r.get(s)||""}
Patch2:
${n}`),r.set(s,n),a.add(p.name)}}i.sort((p,f)=>f.priority-p.priority);let y=function(p,f){if(f.size===0)return p;let s=p.toString().replaceAll(`\r
`,`
`);for(let[n,u]of f.entries())s.includes(n)||M(`ModSDK: Patching ${p.name}: Patch ${n} not applied`),s=s.replaceAll(n,u);return(0,eval)(`(${s})`)}(e.original,r),w=function(p){var f,s;let n=(s=(f=D.errorReporterHooks).hookChainExit)===null||s===void 0?void 0:s.call(f,e.name,a),u=y.apply(this,p);return n?.(),u};for(let p=i.length-1;p>=0;p--){let f=i[p],s=w;w=function(n){var u,m;let v=(m=(u=D.errorReporterHooks).hookEnter)===null||m===void 0?void 0:m.call(u,e.name,f.mod),k=f.hook.apply(this,[n,T=>{if(arguments.length!==1||!Array.isArray(n))throw new Error(`Mod ${f.mod} failed to call next hook: Expected args to be array, got ${typeof T}`);return s.call(this,T)}]);return v?.(),k}}return{hooks:i,patches:r,patchesSources:a,enter:w,final:y}}function C(e,i=!1){let r=b.get(e);if(r)i&&(r.precomputed=A(r));else{let a=window,y=e.split(".");for(let s=0;s<y.length-1;s++)if(a=a[y[s]],!c(a))throw new Error(`ModSDK: Function ${e} to be patched not found; ${y.slice(0,s+1).join(".")} is not object`);let w=a[y[y.length-1]];if(typeof w!="function")throw new Error(`ModSDK: Function ${e} to be patched not found`);let p=function(s){let n=-1;for(let u of l.encode(s)){let m=255&(n^u);for(let v=0;v<8;v++)m=1&m?-306674912^m>>>1:m>>>1;n=n>>>8^m}return((-1^n)>>>0).toString(16).padStart(8,"0").toUpperCase()}(w.toString().replaceAll(`\r
`,`
`)),f={name:e,original:w,originalHash:p};r=Object.assign(Object.assign({},f),{precomputed:A(f),router:()=>{},context:a,contextProperty:y[y.length-1]}),r.router=function(s){return function(...n){return s.precomputed.enter.apply(this,[n])}}(r),b.set(e,r),a[r.contextProperty]=r.router}return r}function x(){let e=new Set;for(let i of E.values())for(let r of i.patching.keys())e.add(r);for(let i of b.keys())e.add(i);for(let i of e)C(i,!0)}function L(){let e=new Map;for(let[i,r]of b)e.set(i,{name:i,original:r.original,originalHash:r.originalHash,sdkEntrypoint:r.router,currentEntrypoint:r.context[r.contextProperty],hookedByMods:d(r.precomputed.hooks.map(a=>a.mod)),patchedByMods:Array.from(r.precomputed.patchesSources)});return e}let E=new Map;function P(e){E.get(e.name)!==e&&t(`Failed to unload mod '${e.name}': Not registered`),E.delete(e.name),e.loaded=!1,x()}function F(e,i,r){typeof e=="string"&&typeof i=="string"&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),e={name:e,fullName:e,version:i},i={allowReplace:r===!0}),e&&typeof e=="object"||t("Failed to register mod: Expected info object, got "+typeof e),typeof e.name=="string"&&e.name||t("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let a=`'${e.name}'`;typeof e.fullName=="string"&&e.fullName||t(`Failed to register mod ${a}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),a=`'${e.fullName} (${e.name})'`,typeof e.version!="string"&&t(`Failed to register mod ${a}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),e.repository!==void 0&&typeof e.repository!="string"&&t(`Failed to register mod ${a}: Expected repository to be undefined or string, got ${typeof e.version}`),i==null&&(i={}),i&&typeof i=="object"||t(`Failed to register mod ${a}: Expected options to be undefined or object, got ${typeof i}`);let y=i.allowReplace===!0,w=E.get(e.name);w&&(w.allowReplace&&y||t(`Refusing to load mod ${a}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),P(w));let p=n=>{typeof n=="string"&&n||t(`Mod ${a} failed to patch a function: Expected function name string, got ${typeof n}`);let u=s.patching.get(n);return u||(u={hooks:[],patches:new Map},s.patching.set(n,u)),u},f={unload:()=>P(s),hookFunction:(n,u,m)=>{s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`);let v=p(n);typeof u!="number"&&t(`Mod ${a} failed to hook function '${n}': Expected priority number, got ${typeof u}`),typeof m!="function"&&t(`Mod ${a} failed to hook function '${n}': Expected hook function, got ${typeof m}`);let k={mod:s.name,priority:u,hook:m};return v.hooks.push(k),x(),()=>{let T=v.hooks.indexOf(k);T>=0&&(v.hooks.splice(T,1),x())}},patchFunction:(n,u)=>{s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`);let m=p(n);c(u)||t(`Mod ${a} failed to patch function '${n}': Expected patches object, got ${typeof u}`);for(let[v,k]of Object.entries(u))typeof k=="string"?m.patches.set(v,k):k===null?m.patches.delete(v):t(`Mod ${a} failed to patch function '${n}': Invalid format of patch '${v}'`);x()},removePatches:n=>{s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`),p(n).patches.clear(),x()},callOriginal:(n,u,m)=>(s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`),typeof n=="string"&&n||t(`Mod ${a} failed to call a function: Expected function name string, got ${typeof n}`),Array.isArray(u)||t(`Mod ${a} failed to call a function: Expected args array, got ${typeof u}`),function(v,k,T=window){return C(v).original.apply(T,k)}(n,u,m)),getOriginalHash:n=>(typeof n=="string"&&n||t(`Mod ${a} failed to get hash: Expected function name string, got ${typeof n}`),C(n).originalHash)},s={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:y,api:f,loaded:!0,patching:new Map};return E.set(e.name,s),Object.freeze(f)}function q(){let e=[];for(let i of E.values())e.push({name:i.name,fullName:i.fullName,version:i.version,repository:i.repository});return e}let D,j=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let e={version:o,apiVersion:1,registerMod:F,getModsInfo:q,getPatchingInfo:L,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return D=e,Object.freeze(e)}();if(c(window.bcModSdk)||t("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&t(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==o&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let e=window.bcModSdk,i=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(r,a,y)=>r&&typeof r=="object"&&typeof r.name=="string"&&typeof r.version=="string"?e.registerMod(r.name,r.version,typeof a=="object"&&!!a&&a.allowReplace===!0):e.registerMod(r,a,y),_shim10register:!0}));window.bcModSdk=i}return window.bcModSdk}();return typeof B<"u"&&(Object.defineProperty(B,"__esModule",{value:!0}),B.default=j),j}()});var X=re(H());function K(o,t=3e3){ServerBeep={Timer:CommonTime()+t,Message:o}}function g(o,t="#6e6eff54",l,c){let d=document.createElement("div");d.setAttribute("class","ChatMessage ChatMessageLocalMessage"),d.setAttribute("data-time",ChatRoomCurrentTime()),d.setAttribute("data-sender",`${c??Player.MemberNumber??0}`),d.style.background=t,d.style.margin="0.15em 0",typeof o=="string"?d.innerText="[AES] "+o:d.appendChild("[AES] "+o);let b=document.activeElement?.id==="InputChat",h=ElementIsScrolledToEnd("TextAreaChatLog"),M=document.getElementById("TextAreaChatLog");return M!=null?(M.appendChild(d),h&&ElementScrollToEnd("TextAreaChatLog"),b&&ElementFocus("InputChat"),d):null}function R(o){return Math.floor(Math.random()*o)}function S(o,t,l,c,d,b=!1){InventoryGet(o,l)==null&&InventoryWear(Player,t,l,c,d,!1)}function _(o){let t=["Cloth","ClothAccessory","Suit","ClothLower","SuitLower","Bra","Corset","Panties","SocksLeft","SocksRight","Socks","Garters","Shoes","Hat","Gloves","LeftHand","RightHand","Bracelet","Mask"],l=[];for(let c of t)InventoryGet(o,c)!=null&&l.push(c);if(l.length>0){let c=R(l.length);return InventoryRemove(o,l[c]),!0}else return CharacterNaked(Player),!1}var V,W=0,$="#56AB56",N=3,G=["The relentless vines tore through my clothing as if they were ravenous for flesh.","With a ruthless determination, the sinewy vines shredded my attire into tatters.","The invasive vines left me exposed, ripping my clothes to shreds with their tenacious grip.","As the voracious vines ensnared me, my clothes fell victim to their insatiable appetite.","My garments were no match for the relentless onslaught of the entangling vines.","The vines didn't discriminate, mercilessly tearing apart both fabric and dignity.","In their unyielding grasp, the vines left my clothing in tatters, exposing my vulnerability.","The tenacious vines stripped away my defenses, leaving me exposed and helpless.","As the plant's grip tightened, my clothes succumbed to the relentless force of nature.","My attire disintegrated under the relentless assault of the encroaching vines, leaving me vulnerable to their relentless advance."],I={head:0,mouth:0,mouth2:0,mouth3:0,neck:0,arms:0,legs:0,feet:0,boots:0};function Y(){console.log("AES: A plant invasion has started"),g("A plant invasion has started"),de(),V=setInterval(function(){ae()},N*1e3)}function ie(){console.log("AES: A plant invasion has finished"),g("A plant invasion has finished"),clearInterval(V);for(var o in I)I[o]=0}function ae(){var o=0;for(var t in I)o+=I[t];let l=R(51)+W*5+o;var c=0;ue("Some vines are approaching to you, do you want to fight back?","#6e6eff54",()=>{c=R(101),z(l,c)},()=>{z(l,c),console.log("Rendirse")},N*1e3)}function z(o,t){var l=`You fought against the plants: 
 You: `+t+" - Vines: "+o;if(o>t){var c=R(2);c==0&&U()!=null?(l+=`
 Vines are looking to restrain your body.`,g(l,"#FFF2CC"),se()):CharacterIsNaked(Player)?(l+=`
 Vines stopped moving as they got you fully bound.`,g(l,"#FFF2CC"),ie()):(l+=`
 Vines are tearing down your clothing.`,g(l,"#FFF2CC"),o>t&&!CharacterIsNaked(Player)&&ce()),W=0}else g(l,"#FFF2CC")}function se(){var o=U();switch(I[o.bind]++,o.bind){case"head":S(Player,"RopeBlindfold","ItemHead",$,1),g("The vines, like stealthy intruders, approached your face. With a swift and deliberate move, they placed a leafy blindfold over your eyes, shrouding you in impenetrable darkness.");break;case"mouth":S(Player,"ClothStuffing","ItemMouth",$,1),g("The vines swiftly moved towards your mouth, coiling tightly with a sinister intent.");break;case"mouth2":S(Player,"HempRope","ItemMouth2",$,1),g("The menacing vines lunged at your mouth, their aggressive coils silencing your protests with a brutal grip.");break;case"mouth3":S(Player,"ClothGag","ItemMouth3","#357035",1),g("The voracious vines lunged at your gaping mouth, their snakelike coils wrapping your throat in a strangling grip, rendering you speechless and breathless.");break;case"neck":S(Player,"NeckRope","ItemNeck",$,1),g("The relentless vines closed in on your neck, their grip unyielding, constricting like a tightening noose.");break;case"arms":S(Player,"HempRope","ItemArms",$,1),g("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"legs":S(Player,"HempRope","ItemLegs",$,1),g("The plant's sinuous tendrils coiled around your thighs, slowly constricting and pulling you deeper into their verdant embrace.");break;case"feet":S(Player,"HempRope","ItemFeet",$,1),g("The plant wraps around your legs, twisting and tightening its grip.");break;case"boots":S(Player,"ToeTie","ItemBoots",$,1),g("The massive, sinewy vines slithered around your fingers like living ropes, binding them together with an unbreakable, natural restraint.");break;default:break}}function le(){let o=Math.floor(Math.random()*G.length);return G[o]}function ce(){let o=le();_(Player)&&g(o)}function U(){var o=[];for(var t in I)I[t]==0&&o.push(t);if(o.length>0){var l=Math.floor(Math.random()*o.length),c=o[l];return{bind:c,value:I[c]}}else return null}function de(){let c=document.createElement("div");c.classList.add("experience-bar");let d=document.createElement("div");d.classList.add("experience-fill"),d.style.width="50%";let b=document.createElement("span");b.classList.add("level"),b.textContent="50/100",d.appendChild(b),c.appendChild(d),document.getElementById("MainCanvas").appendChild(c);let h=`
    .experience-bar {
    width: 300px;
    background-color: #ccc;
    border: 1px solid #000;
    text-align: center;
    font-size: 18px;
    }
    .experience-fill {
    background-color: #0074e4;
    color: #fff;
    }
    .level {
    position: relative;
    top: -25px;
    }
    `,M=document.createElement("style");M.innerHTML=h,document.head.appendChild(M)}function ue(o,t="#abd0f0",l,c,d,b=N*1e3){let h=document.createElement("div");h.setAttribute("class","ChatMessage ChatMessageLocalMessage"),h.setAttribute("data-time",ChatRoomCurrentTime()),h.setAttribute("data-sender",`${d??Player.MemberNumber??0}`),h.style.background=t,h.style.margin="0.15em 0";let M=typeof o=="string"?o:"[AES] "+o;h.innerText=M;let A=document.createElement("button");A.innerHTML="&#10003;",A.addEventListener("click",()=>{l&&(l(),L())});let C=document.createElement("button");C.innerHTML="&#10007;",C.addEventListener("click",()=>{c&&(c(),L())}),h.appendChild(A),h.appendChild(C);let x=setTimeout(()=>{L()},b);A.addEventListener("click",()=>{clearTimeout(x)}),C.addEventListener("click",()=>{clearTimeout(x)});function L(){h.remove()}let E=document.activeElement?.id==="InputChat",P=ElementIsScrolledToEnd("TextAreaChatLog"),F=document.getElementById("TextAreaChatLog");return F!=null?(F.appendChild(h),P&&ElementScrollToEnd("TextAreaChatLog"),E&&ElementFocus("InputChat"),h):null}var $e=X.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.01",repository:"https://github.com/Ainaradev7/AES"});function pe(){console.log("AES: Initiated"),K("AES: Initiated"),Y()}pe();})();
