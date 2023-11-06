(()=>{var X=Object.create;var D=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var Q=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var ee=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var te=(o,t,p,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of J(t))!Z.call(o,l)&&l!==p&&D(o,l,{get:()=>t[l],enumerable:!(d=q(t,l))||d.enumerable});return o};var oe=(o,t,p)=>(p=o!=null?X(Q(o)):{},te(t||!o||!o.__esModule?D(p,"default",{value:o,enumerable:!0}):p,o));var N=ee(P=>{var ue=function(){"use strict";let o="1.1.0";function t(e){alert(`Mod ERROR:
`+e);let i=new Error(e);throw console.error(i),i}let p=new TextEncoder;function d(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function l(e){let i=new Set;return e.filter(r=>!i.has(r)&&i.add(r))}let v=new Map,C=new Set;function M(e){C.has(e)||(C.add(e),console.warn(e))}function L(e){let i=[],r=new Map,a=new Set;for(let u of E.values()){let f=u.patching.get(e.name);if(f){i.push(...f.hooks);for(let[s,n]of f.patches.entries())r.has(s)&&r.get(s)!==n&&M(`ModSDK: Mod '${u.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${s}
Patch1:
${r.get(s)||""}
Patch2:
${n}`),r.set(s,n),a.add(u.name)}}i.sort((u,f)=>f.priority-u.priority);let m=function(u,f){if(f.size===0)return u;let s=u.toString().replaceAll(`\r
`,`
`);for(let[n,c]of f.entries())s.includes(n)||M(`ModSDK: Patching ${u.name}: Patch ${n} not applied`),s=s.replaceAll(n,c);return(0,eval)(`(${s})`)}(e.original,r),b=function(u){var f,s;let n=(s=(f=F.errorReporterHooks).hookChainExit)===null||s===void 0?void 0:s.call(f,e.name,a),c=m.apply(this,u);return n?.(),c};for(let u=i.length-1;u>=0;u--){let f=i[u],s=b;b=function(n){var c,h;let y=(h=(c=F.errorReporterHooks).hookEnter)===null||h===void 0?void 0:h.call(c,e.name,f.mod),w=f.hook.apply(this,[n,$=>{if(arguments.length!==1||!Array.isArray(n))throw new Error(`Mod ${f.mod} failed to call next hook: Expected args to be array, got ${typeof $}`);return s.call(this,$)}]);return y?.(),w}}return{hooks:i,patches:r,patchesSources:a,enter:b,final:m}}function T(e,i=!1){let r=v.get(e);if(r)i&&(r.precomputed=L(r));else{let a=window,m=e.split(".");for(let s=0;s<m.length-1;s++)if(a=a[m[s]],!d(a))throw new Error(`ModSDK: Function ${e} to be patched not found; ${m.slice(0,s+1).join(".")} is not object`);let b=a[m[m.length-1]];if(typeof b!="function")throw new Error(`ModSDK: Function ${e} to be patched not found`);let u=function(s){let n=-1;for(let c of p.encode(s)){let h=255&(n^c);for(let y=0;y<8;y++)h=1&h?-306674912^h>>>1:h>>>1;n=n>>>8^h}return((-1^n)>>>0).toString(16).padStart(8,"0").toUpperCase()}(b.toString().replaceAll(`\r
`,`
`)),f={name:e,original:b,originalHash:u};r=Object.assign(Object.assign({},f),{precomputed:L(f),router:()=>{},context:a,contextProperty:m[m.length-1]}),r.router=function(s){return function(...n){return s.precomputed.enter.apply(this,[n])}}(r),v.set(e,r),a[r.contextProperty]=r.router}return r}function A(){let e=new Set;for(let i of E.values())for(let r of i.patching.keys())e.add(r);for(let i of v.keys())e.add(i);for(let i of e)T(i,!0)}function W(){let e=new Map;for(let[i,r]of v)e.set(i,{name:i,original:r.original,originalHash:r.originalHash,sdkEntrypoint:r.router,currentEntrypoint:r.context[r.contextProperty],hookedByMods:l(r.precomputed.hooks.map(a=>a.mod)),patchedByMods:Array.from(r.precomputed.patchesSources)});return e}let E=new Map;function B(e){E.get(e.name)!==e&&t(`Failed to unload mod '${e.name}': Not registered`),E.delete(e.name),e.loaded=!1,A()}function Y(e,i,r){typeof e=="string"&&typeof i=="string"&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),e={name:e,fullName:e,version:i},i={allowReplace:r===!0}),e&&typeof e=="object"||t("Failed to register mod: Expected info object, got "+typeof e),typeof e.name=="string"&&e.name||t("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let a=`'${e.name}'`;typeof e.fullName=="string"&&e.fullName||t(`Failed to register mod ${a}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),a=`'${e.fullName} (${e.name})'`,typeof e.version!="string"&&t(`Failed to register mod ${a}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),e.repository!==void 0&&typeof e.repository!="string"&&t(`Failed to register mod ${a}: Expected repository to be undefined or string, got ${typeof e.version}`),i==null&&(i={}),i&&typeof i=="object"||t(`Failed to register mod ${a}: Expected options to be undefined or object, got ${typeof i}`);let m=i.allowReplace===!0,b=E.get(e.name);b&&(b.allowReplace&&m||t(`Refusing to load mod ${a}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),B(b));let u=n=>{typeof n=="string"&&n||t(`Mod ${a} failed to patch a function: Expected function name string, got ${typeof n}`);let c=s.patching.get(n);return c||(c={hooks:[],patches:new Map},s.patching.set(n,c)),c},f={unload:()=>B(s),hookFunction:(n,c,h)=>{s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`);let y=u(n);typeof c!="number"&&t(`Mod ${a} failed to hook function '${n}': Expected priority number, got ${typeof c}`),typeof h!="function"&&t(`Mod ${a} failed to hook function '${n}': Expected hook function, got ${typeof h}`);let w={mod:s.name,priority:c,hook:h};return y.hooks.push(w),A(),()=>{let $=y.hooks.indexOf(w);$>=0&&(y.hooks.splice($,1),A())}},patchFunction:(n,c)=>{s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`);let h=u(n);d(c)||t(`Mod ${a} failed to patch function '${n}': Expected patches object, got ${typeof c}`);for(let[y,w]of Object.entries(c))typeof w=="string"?h.patches.set(y,w):w===null?h.patches.delete(y):t(`Mod ${a} failed to patch function '${n}': Invalid format of patch '${y}'`);A()},removePatches:n=>{s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`),u(n).patches.clear(),A()},callOriginal:(n,c,h)=>(s.loaded||t(`Mod ${a} attempted to call SDK function after being unloaded`),typeof n=="string"&&n||t(`Mod ${a} failed to call a function: Expected function name string, got ${typeof n}`),Array.isArray(c)||t(`Mod ${a} failed to call a function: Expected args array, got ${typeof c}`),function(y,w,$=window){return T(y).original.apply($,w)}(n,c,h)),getOriginalHash:n=>(typeof n=="string"&&n||t(`Mod ${a} failed to get hash: Expected function name string, got ${typeof n}`),T(n).originalHash)},s={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:m,api:f,loaded:!0,patching:new Map};return E.set(e.name,s),Object.freeze(f)}function U(){let e=[];for(let i of E.values())e.push({name:i.name,fullName:i.fullName,version:i.version,repository:i.repository});return e}let F,j=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let e={version:o,apiVersion:1,registerMod:Y,getModsInfo:U,getPatchingInfo:W,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return F=e,Object.freeze(e)}();if(d(window.bcModSdk)||t("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&t(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==o&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let e=window.bcModSdk,i=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(r,a,m)=>r&&typeof r=="object"&&typeof r.name=="string"&&typeof r.version=="string"?e.registerMod(r.name,r.version,typeof a=="object"&&!!a&&a.allowReplace===!0):e.registerMod(r,a,m),_shim10register:!0}));window.bcModSdk=i}return window.bcModSdk}();return typeof P<"u"&&(Object.defineProperty(P,"__esModule",{value:!0}),P.default=j),j}()});var V=oe(N());function O(o,t=3e3){ServerBeep={Timer:CommonTime()+t,Message:o}}function g(o,t="#6e6eff54",p,d){let l=document.createElement("div");l.setAttribute("class","ChatMessage ChatMessageLocalMessage"),l.setAttribute("data-time",ChatRoomCurrentTime()),l.setAttribute("data-sender",`${d??Player.MemberNumber??0}`),l.style.background=t,l.style.margin="0.15em 0",typeof o=="string"?l.innerText="[AES] "+o:l.appendChild("[AES] "+o);let v=document.activeElement?.id==="InputChat",C=ElementIsScrolledToEnd("TextAreaChatLog"),M=document.getElementById("TextAreaChatLog");return M!=null?(M.appendChild(l),C&&ElementScrollToEnd("TextAreaChatLog"),v&&ElementFocus("InputChat"),l):null}function I(o){return Math.floor(Math.random()*o)}function k(o,t,p,d,l,v=!1){InventoryGet(o,p)==null&&InventoryWear(Player,t,p,d,l,!1)}function H(o){let t=["Cloth","ClothAccessory","Suit","ClothLower","SuitLower","Bra","Corset","Panties","SocksLeft","SocksRight","Socks","Garters","Shoes","Hat","Gloves","LeftHand","RightHand","Bracelet","Mask"],p=[];for(let d of t)InventoryGet(o,d)!=null&&p.push(d);if(p.length>0){let d=I(p.length);return InventoryRemove(o,p[d]),!0}else return CharacterNaked(Player),!1}var _,R=0,S="#56AB56",ne=3,K=["The relentless vines tore through my clothing as if they were ravenous for flesh.","With a ruthless determination, the sinewy vines shredded my attire into tatters.","The invasive vines left me exposed, ripping my clothes to shreds with their tenacious grip.","As the voracious vines ensnared me, my clothes fell victim to their insatiable appetite.","My garments were no match for the relentless onslaught of the entangling vines.","The vines didn't discriminate, mercilessly tearing apart both fabric and dignity.","In their unyielding grasp, the vines left my clothing in tatters, exposing my vulnerability.","The tenacious vines stripped away my defenses, leaving me exposed and helpless.","As the plant's grip tightened, my clothes succumbed to the relentless force of nature.","My attire disintegrated under the relentless assault of the encroaching vines, leaving me vulnerable to their relentless advance."],x={head:0,mouth:0,mouth2:0,mouth3:0,neck:0,arms:0,legs:0,feet:0,boots:0};function G(){console.log("AES: A plant invasion has started"),g("A plant invasion has started"),de(),_=setInterval(function(){ie()},ne*1e3)}function re(){console.log("AES: A plant invasion has finished"),g("A plant invasion has finished"),clearInterval(_);for(var o in x)x[o]=0}function ie(){var o=0;for(var t in x)o+=x[t];let p=I(51)+R*5+o,d=I(101);var l=`You fought against the plants: 
 You: `+d+" - Vines: "+p;if(p>d){var v=I(2);v==0&&z()!=null?(l+=`
 Vines are looking to restrain your body.`,g(l,"#FFF2CC"),ae()):CharacterIsNaked(Player)?(l+=`
 Vines stopped moving as they got you fully bound.`,g(l,"#FFF2CC"),re()):(l+=`
 Vines are tearing down your clothing.`,g(l,"#FFF2CC"),p>d&&!CharacterIsNaked(Player)&&le()),R=0}else g(l,"#FFF2CC");R++,console.log("[AES] level up! - "+R)}function ae(){var o=z();switch(x[o.bind]++,o.bind){case"head":k(Player,"RopeBlindfold","ItemHead",S,1),g("The vines, like stealthy intruders, approached your face. With a swift and deliberate move, they placed a leafy blindfold over your eyes, shrouding you in impenetrable darkness.");break;case"mouth":k(Player,"ClothStuffing","ItemMouth",S,1),g("The vines swiftly moved towards your mouth, coiling tightly with a sinister intent.");break;case"mouth2":k(Player,"HempRope","ItemMouth2",S,1),g("The menacing vines lunged at your mouth, their aggressive coils silencing your protests with a brutal grip.");break;case"mouth3":k(Player,"ClothGag","ItemMouth3","#357035",1),g("The voracious vines lunged at your gaping mouth, their snakelike coils wrapping your throat in a strangling grip, rendering you speechless and breathless.");break;case"neck":k(Player,"NeckRope","ItemNeck",S,1),g("The relentless vines closed in on your neck, their grip unyielding, constricting like a tightening noose.");break;case"arms":k(Player,"HempRope","ItemArms",S,1),g("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"legs":k(Player,"HempRope","ItemLegs",S,1),g("The plant's sinuous tendrils coiled around your thighs, slowly constricting and pulling you deeper into their verdant embrace.");break;case"feet":k(Player,"HempRope","ItemFeet",S,1),g("The plant wraps around your legs, twisting and tightening its grip.");break;case"boots":k(Player,"ToeTie","ItemBoots",S,1),g("The massive, sinewy vines slithered around your fingers like living ropes, binding them together with an unbreakable, natural restraint.");break;default:break}}function se(){let o=Math.floor(Math.random()*K.length);return K[o]}function le(){let o=se();H(Player)&&g(o)}function z(){var o=[];for(var t in x)x[t]==0&&o.push(t);if(o.length>0){var p=Math.floor(Math.random()*o.length),d=o[p];return{bind:d,value:x[d]}}else return null}function de(){let d=document.createElement("div");d.classList.add("experience-bar");let l=document.createElement("div");l.classList.add("experience-fill"),l.style.width="50%";let v=document.createElement("span");v.classList.add("level"),v.textContent="50/100",l.appendChild(v),d.appendChild(l),document.getElementById("MainCanvas").appendChild(d);let C=`
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
    `,M=document.createElement("style");M.innerHTML=C,document.head.appendChild(M)}var Ee=V.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.01",repository:"https://github.com/Ainaradev7/AES"});function ce(){console.log("AES: Initiated"),O("AES: Initiated"),G()}ce();})();
