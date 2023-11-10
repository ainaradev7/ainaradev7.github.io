(()=>{var ne=Object.create;var z=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ae=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty;var le=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports);var de=(t,o,n,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of ae(o))!se.call(t,c)&&c!==n&&z(t,c,{get:()=>o[c],enumerable:!(l=re(o,c))||l.enumerable});return t};var ce=(t,o,n)=>(n=t!=null?ne(ie(t)):{},de(o||!t||!t.__esModule?z(n,"default",{value:t,enumerable:!0}):n,t));var X=le(B=>{var Ce=function(){"use strict";let t="1.1.0";function o(e){alert(`Mod ERROR:
`+e);let i=new Error(e);throw console.error(i),i}let n=new TextEncoder;function l(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function c(e){let i=new Set;return e.filter(a=>!i.has(a)&&i.add(a))}let w=new Map,u=new Set;function M(e){u.has(e)||(u.add(e),console.warn(e))}function T(e){let i=[],a=new Map,s=new Set;for(let f of x.values()){let h=f.patching.get(e.name);if(h){i.push(...h.hooks);for(let[d,r]of h.patches.entries())a.has(d)&&a.get(d)!==r&&M(`ModSDK: Mod '${f.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${d}
Patch1:
${a.get(d)||""}
Patch2:
${r}`),a.set(d,r),s.add(f.name)}}i.sort((f,h)=>h.priority-f.priority);let y=function(f,h){if(h.size===0)return f;let d=f.toString().replaceAll(`\r
`,`
`);for(let[r,p]of h.entries())d.includes(r)||M(`ModSDK: Patching ${f.name}: Patch ${r} not applied`),d=d.replaceAll(r,p);return(0,eval)(`(${d})`)}(e.original,a),k=function(f){var h,d;let r=(d=(h=O.errorReporterHooks).hookChainExit)===null||d===void 0?void 0:d.call(h,e.name,s),p=y.apply(this,f);return r?.(),p};for(let f=i.length-1;f>=0;f--){let h=i[f],d=k;k=function(r){var p,g;let v=(g=(p=O.errorReporterHooks).hookEnter)===null||g===void 0?void 0:g.call(p,e.name,h.mod),E=h.hook.apply(this,[r,R=>{if(arguments.length!==1||!Array.isArray(r))throw new Error(`Mod ${h.mod} failed to call next hook: Expected args to be array, got ${typeof R}`);return d.call(this,R)}]);return v?.(),E}}return{hooks:i,patches:a,patchesSources:s,enter:k,final:y}}function $(e,i=!1){let a=w.get(e);if(a)i&&(a.precomputed=T(a));else{let s=window,y=e.split(".");for(let d=0;d<y.length-1;d++)if(s=s[y[d]],!l(s))throw new Error(`ModSDK: Function ${e} to be patched not found; ${y.slice(0,d+1).join(".")} is not object`);let k=s[y[y.length-1]];if(typeof k!="function")throw new Error(`ModSDK: Function ${e} to be patched not found`);let f=function(d){let r=-1;for(let p of n.encode(d)){let g=255&(r^p);for(let v=0;v<8;v++)g=1&g?-306674912^g>>>1:g>>>1;r=r>>>8^g}return((-1^r)>>>0).toString(16).padStart(8,"0").toUpperCase()}(k.toString().replaceAll(`\r
`,`
`)),h={name:e,original:k,originalHash:f};a=Object.assign(Object.assign({},h),{precomputed:T(h),router:()=>{},context:s,contextProperty:y[y.length-1]}),a.router=function(d){return function(...r){return d.precomputed.enter.apply(this,[r])}}(a),w.set(e,a),s[a.contextProperty]=a.router}return a}function C(){let e=new Set;for(let i of x.values())for(let a of i.patching.keys())e.add(a);for(let i of w.keys())e.add(i);for(let i of e)$(i,!0)}function D(){let e=new Map;for(let[i,a]of w)e.set(i,{name:i,original:a.original,originalHash:a.originalHash,sdkEntrypoint:a.router,currentEntrypoint:a.context[a.contextProperty],hookedByMods:c(a.precomputed.hooks.map(s=>s.mod)),patchedByMods:Array.from(a.precomputed.patchesSources)});return e}let x=new Map;function P(e){x.get(e.name)!==e&&o(`Failed to unload mod '${e.name}': Not registered`),x.delete(e.name),e.loaded=!1,C()}function L(e,i,a){typeof e=="string"&&typeof i=="string"&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),e={name:e,fullName:e,version:i},i={allowReplace:a===!0}),e&&typeof e=="object"||o("Failed to register mod: Expected info object, got "+typeof e),typeof e.name=="string"&&e.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let s=`'${e.name}'`;typeof e.fullName=="string"&&e.fullName||o(`Failed to register mod ${s}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),s=`'${e.fullName} (${e.name})'`,typeof e.version!="string"&&o(`Failed to register mod ${s}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),e.repository!==void 0&&typeof e.repository!="string"&&o(`Failed to register mod ${s}: Expected repository to be undefined or string, got ${typeof e.version}`),i==null&&(i={}),i&&typeof i=="object"||o(`Failed to register mod ${s}: Expected options to be undefined or object, got ${typeof i}`);let y=i.allowReplace===!0,k=x.get(e.name);k&&(k.allowReplace&&y||o(`Refusing to load mod ${s}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),P(k));let f=r=>{typeof r=="string"&&r||o(`Mod ${s} failed to patch a function: Expected function name string, got ${typeof r}`);let p=d.patching.get(r);return p||(p={hooks:[],patches:new Map},d.patching.set(r,p)),p},h={unload:()=>P(d),hookFunction:(r,p,g)=>{d.loaded||o(`Mod ${s} attempted to call SDK function after being unloaded`);let v=f(r);typeof p!="number"&&o(`Mod ${s} failed to hook function '${r}': Expected priority number, got ${typeof p}`),typeof g!="function"&&o(`Mod ${s} failed to hook function '${r}': Expected hook function, got ${typeof g}`);let E={mod:d.name,priority:p,hook:g};return v.hooks.push(E),C(),()=>{let R=v.hooks.indexOf(E);R>=0&&(v.hooks.splice(R,1),C())}},patchFunction:(r,p)=>{d.loaded||o(`Mod ${s} attempted to call SDK function after being unloaded`);let g=f(r);l(p)||o(`Mod ${s} failed to patch function '${r}': Expected patches object, got ${typeof p}`);for(let[v,E]of Object.entries(p))typeof E=="string"?g.patches.set(v,E):E===null?g.patches.delete(v):o(`Mod ${s} failed to patch function '${r}': Invalid format of patch '${v}'`);C()},removePatches:r=>{d.loaded||o(`Mod ${s} attempted to call SDK function after being unloaded`),f(r).patches.clear(),C()},callOriginal:(r,p,g)=>(d.loaded||o(`Mod ${s} attempted to call SDK function after being unloaded`),typeof r=="string"&&r||o(`Mod ${s} failed to call a function: Expected function name string, got ${typeof r}`),Array.isArray(p)||o(`Mod ${s} failed to call a function: Expected args array, got ${typeof p}`),function(v,E,R=window){return $(v).original.apply(R,E)}(r,p,g)),getOriginalHash:r=>(typeof r=="string"&&r||o(`Mod ${s} failed to get hash: Expected function name string, got ${typeof r}`),$(r).originalHash)},d={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:y,api:h,loaded:!0,patching:new Map};return x.set(e.name,d),Object.freeze(h)}function oe(){let e=[];for(let i of x.values())e.push({name:i.name,fullName:i.fullName,version:i.version,repository:i.repository});return e}let O,W=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let e={version:t,apiVersion:1,registerMod:L,getModsInfo:oe,getPatchingInfo:D,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return O=e,Object.freeze(e)}();if(l(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==t&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let e=window.bcModSdk,i=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(a,s,y)=>a&&typeof a=="object"&&typeof a.name=="string"&&typeof a.version=="string"?e.registerMod(a.name,a.version,typeof s=="object"&&!!s&&s.allowReplace===!0):e.registerMod(a,s,y),_shim10register:!0}));window.bcModSdk=i}return window.bcModSdk}();return typeof B<"u"&&(Object.defineProperty(B,"__esModule",{value:!0}),B.default=W),W}()});function I(t){return Math.floor(Math.random()*t)}function U(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function V(t,o=3e3){ServerBeep={Timer:CommonTime()+o,Message:t}}function m(t,o="#6e6eff54",n,l){let c=document.createElement("div");c.setAttribute("class","ChatMessage ChatMessageLocalMessage"),c.setAttribute("data-time",ChatRoomCurrentTime()),c.setAttribute("data-sender",`${l??Player.MemberNumber??0}`),c.style.background=o,c.style.margin="0.15em 0",typeof t=="string"?c.innerText="[AES] "+t:c.appendChild("[AES] "+t);let w=document.activeElement?.id==="InputChat",u=ElementIsScrolledToEnd("TextAreaChatLog"),M=document.getElementById("TextAreaChatLog");return M!=null?(M.appendChild(c),u&&ElementScrollToEnd("TextAreaChatLog"),w&&ElementFocus("InputChat"),c):null}function Y(){for(var t in ChatRoomCharacter)ChatRoomCharacterUpdate(t)}function j(t,o="btn",n="white",l=50,c=50){var w=document.getElementById("MainCanvas"),u=document.createElement("div");u.textContent=o,u.style.backgroundColor=n,u.style.width="40px",u.style.height="40px",u.style.position="absolute";var M=w.getBoundingClientRect();u.style.left=M.left+l+"px",u.style.top=M.top+c+"px",u.addEventListener("click",function(){t()}),w.appendChild(u),document.body.appendChild(u)}var q=ce(X()),ue=q.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.01",repository:"https://github.com/Ainaradev7/AES"});function K(t,o,n,l=null){return pe(t,o,n,l)}function pe(t,o,n,l=null){let c=ue.hookFunction(t,o,n)}function H(t,o,n=null){ServerSend("ChatRoomChat",{Content:"AESMsg",Type:"Hidden",Dictionary:{action:o}})}K("ChatRoomMessage",10,(t,o)=>{let n=t[0];if(n?.Type==="Hidden"&&n.Content==="AESMsg"&&typeof n.Sender=="number"){if(console.log("OWN MESSAGE ${data.sender} and ${message} from "+n.Sender),console.log(t),console.log(n),n.Sender===Player.MemberNumber)return;let{type:l,message:c}=n.Dictionary;typeof l=="string"&&(console.log("Received some data from AES"),console.log("`${data.sender} and ${message} from "+n.Sender));return}return o(t)});function b(t,o,n,l,c,w=!1){InventoryGet(t,n)==null&&InventoryWear(Player,o,n,l,c,!1)}function J(t){let o=["Cloth","ClothAccessory","Suit","ClothLower","SuitLower","Bra","Corset","Panties","SocksLeft","SocksRight","Socks","Garters","Shoes","Hat","Gloves","LeftHand","RightHand","Bracelet","Mask"],n=[];for(let l of o)InventoryGet(t,l)!=null&&n.push(l);if(n.length>0){let l=I(n.length);return InventoryRemove(t,n[l]),!0}else return CharacterNaked(Player),!1}var ee,F=0,S="#56AB56",_=3,Q=["The relentless vines tore through my clothing as if they were ravenous for flesh.","With a ruthless determination, the sinewy vines shredded my attire into tatters.","The invasive vines left me exposed, ripping my clothes to shreds with their tenacious grip.","As the voracious vines ensnared me, my clothes fell victim to their insatiable appetite.","My garments were no match for the relentless onslaught of the entangling vines.","The vines didn't discriminate, mercilessly tearing apart both fabric and dignity.","In their unyielding grasp, the vines left my clothing in tatters, exposing my vulnerability.","The tenacious vines stripped away my defenses, leaving me exposed and helpless.","As the plant's grip tightened, my clothes succumbed to the relentless force of nature.","My attire disintegrated under the relentless assault of the encroaching vines, leaving me vulnerable to their relentless advance."],A={head:0,mouth:0,mouth2:0,mouth3:0,neck:0,arms:0,pelvis:0,torso:0,torso2:0,legs:0,feet:0,boots:0};function te(){console.log("AES: A plant invasion has started"),m("A plant invasion has started"),H("PlantEvent","init"),ee=setInterval(function(){fe()},_*1e3)}function G(){console.log("AES: A plant invasion has finished"),m("A plant invasion has finished"),clearInterval(ee);for(var t in A)A[t]=0;H("PlantEvent","end",Player)}function fe(){var t=0;for(var o in A)t+=A[o];F++;let n=I(51)+F*5+t;ve("Some vines are approaching to you, do you want to fight back?","#6e6eff54",null,()=>{Z(n,I(101))},()=>{Z(n,0),console.log("Rendirse")},_*1e3),H("PlantEvent","test",Player)}function Z(t,o){var n=`You fought against the plants: 
 You: `+o+" - Vines: "+t;if(t>o){var l=I(2);l==0&&N()!=null||l==1&&N()!=null&&CharacterIsNaked(Player)?(n+=`
 Vines are looking to restrain your body.`,m(n,"#FFF2CC"),he()):l==1&&!CharacterIsNaked(Player)||l==0&&!CharacterIsNaked(Player)&&N()==null?(n+=`
 Vines are tearing down your clothing.`,m(n,"#FFF2CC"),ge()):(n+=`
 Vines stopped moving as they got you fully bound.`,m(n,"#FFF2CC"),G()),F=0}else m(n,"#FFF2CC");console.log("[AES] eventLevel up! - "+F),Y()}function he(){var t=N();switch(A[t.bind]++,t.bind){case"head":b(Player,"RopeBlindfold","ItemHead",S,1),m("The vines, like stealthy intruders, approached your face. With a swift and deliberate move, they placed a leafy blindfold over your eyes, shrouding you in impenetrable darkness.");break;case"mouth":b(Player,"ClothStuffing","ItemMouth",S,1),m("The vines swiftly moved towards your mouth, coiling tightly with a sinister intent.");break;case"mouth2":b(Player,"HempRope","ItemMouth2",S,1),m("The menacing vines lunged at your mouth, their aggressive coils silencing your protests with a brutal grip.");break;case"mouth3":b(Player,"ClothGag","ItemMouth3","#357035",1),m("The voracious vines lunged at your gaping mouth, their snakelike coils wrapping your throat in a strangling grip, rendering you speechless and breathless.");break;case"neck":b(Player,"NeckRope","ItemNeck",S,1),m("The relentless vines closed in on your neck, their grip unyielding, constricting like a tightening noose.");break;case"arms":b(Player,"HempRope","ItemArms",S,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"torso":b(Player,"HempRopeHarness","ItemTorso",S,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"torso2":b(Player,"HempRopeHarness","ItemTorso2",S,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"pelvis":b(Player,"HempRope","ItemPelvis",S,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"legs":b(Player,"HempRope","ItemLegs",S,1),m("The plant's sinuous tendrils coiled around your thighs, slowly constricting and pulling you deeper into their verdant embrace.");break;case"feet":b(Player,"HempRope","ItemFeet",S,1),m("The plant wraps around your legs, twisting and tightening its grip.");break;case"boots":b(Player,"ToeTie","ItemBoots",S,1),m("The massive, sinewy vines slithered around your fingers like living ropes, binding them together with an unbreakable, natural restraint.");break;default:break}}function me(){let t=Math.floor(Math.random()*Q.length);return Q[t]}function ge(){let t=me();J(Player)&&m(t)}function N(){var t=[];for(var o in A)A[o]==0&&t.push(o);if(t.length>0){var n=Math.floor(Math.random()*t.length),l=t[n];return{bind:l,value:A[l]}}else return null}function ye(){let t=F/6*100,o=document.createElement("div");o.classList.add("maxLevel-bar"),o.style.width="200px",o.style.height="20px";let n=document.createElement("div");n.classList.add("eventLevel-fill"),n.style.width=`${t}%`,o.appendChild(n);let l=`
    .maxLevel-bar {
    width: 300px;
    background-color: #ccc;
    border: 1px solid #000;
    text-align: center;
    font-size: 18px;
    }
    .eventLevel-fill {
    background-color: #ea9999;
    color: #fff;
    height: 100%;
    }
    `,c=document.createElement("style");return c.innerHTML=l,document.head.appendChild(c),o}function ve(t,o="#6e6eff54",n,l,c,w=_*1e3){let u=document.createElement("div");u.setAttribute("class","ChatMessage ChatMessageLocalMessage"),u.setAttribute("data-time",ChatRoomCurrentTime()),u.setAttribute("data-sender",`${n??Player.MemberNumber??0}`),u.style.background=o,u.style.margin="0.15em 0";let M=typeof t=="string"?t:"[AES] "+t,T=document.createElement("div");T.innerText=M,u.appendChild(T),eventLevelBar=ye(),u.appendChild(eventLevelBar);let $=document.createElement("button");$.classList.add("fancy-button"),$.innerHTML="&#10003;",$.addEventListener("click",()=>{l&&(l(),L())});let C=document.createElement("button");C.classList.add("fancy-button"),C.innerHTML="&#10007;",C.addEventListener("click",()=>{c&&(c(),L())}),u.appendChild($),u.appendChild(C),setTimeout(()=>{c(),L()},w);let D=document.activeElement?.id==="InputChat",x=ElementIsScrolledToEnd("TextAreaChatLog"),P=document.getElementById("TextAreaChatLog");if(P!=null)return P.appendChild(u),x&&ElementScrollToEnd("TextAreaChatLog"),D&&ElementFocus("InputChat"),u;return null;function L(){u.remove()}}function be(){console.log("AES: Initiated"),CurrentScreen==null||CurrentScreen==="Login"?(K("LoginResponse",0,(t,o)=>{console.debug("AES: Init LoginResponse caught",t),o(t);let n=t[0];U(n)&&typeof n.Name=="string"&&n.AccountName}),V("AES Ready!"),console.log("[AES] initiated"),j(()=>{te()},"start","green",50,50),j(()=>{G()},"stop","red",100,100)):console.debug("BCX: Already logged in, init")}be();})();
