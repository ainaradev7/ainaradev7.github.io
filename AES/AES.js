(()=>{var ie=Object.create;var X=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var ue=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var pe=(e,o,n,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let u of le(o))!de.call(e,u)&&u!==n&&X(e,u,{get:()=>o[u],enumerable:!(s=se(o,u))||s.enumerable});return e};var fe=(e,o,n)=>(n=e!=null?ie(ce(e)):{},pe(o||!e||!e.__esModule?X(n,"default",{value:e,enumerable:!0}):n,e));var q=ue(H=>{var xe=function(){"use strict";let e="1.1.0";function o(t){alert(`Mod ERROR:
`+t);let i=new Error(t);throw console.error(i),i}let n=new TextEncoder;function s(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function u(t){let i=new Set;return t.filter(a=>!i.has(a)&&i.add(a))}let S=new Map,p=new Set;function T(t){p.has(t)||(p.add(t),console.warn(t))}function A(t){let i=[],a=new Map,c=new Set;for(let m of x.values()){let h=m.patching.get(t.name);if(h){i.push(...h.hooks);for(let[d,r]of h.patches.entries())a.has(d)&&a.get(d)!==r&&T(`ModSDK: Mod '${m.name}' is patching function ${t.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${d}
Patch1:
${a.get(d)||""}
Patch2:
${r}`),a.set(d,r),c.add(m.name)}}i.sort((m,h)=>h.priority-m.priority);let v=function(m,h){if(h.size===0)return m;let d=m.toString().replaceAll(`\r
`,`
`);for(let[r,f]of h.entries())d.includes(r)||T(`ModSDK: Patching ${m.name}: Patch ${r} not applied`),d=d.replaceAll(r,f);return(0,eval)(`(${d})`)}(t.original,a),w=function(m){var h,d;let r=(d=(h=G.errorReporterHooks).hookChainExit)===null||d===void 0?void 0:d.call(h,t.name,c),f=v.apply(this,m);return r?.(),f};for(let m=i.length-1;m>=0;m--){let h=i[m],d=w;w=function(r){var f,y;let b=(y=(f=G.errorReporterHooks).hookEnter)===null||y===void 0?void 0:y.call(f,t.name,h.mod),C=h.hook.apply(this,[r,R=>{if(arguments.length!==1||!Array.isArray(r))throw new Error(`Mod ${h.mod} failed to call next hook: Expected args to be array, got ${typeof R}`);return d.call(this,R)}]);return b?.(),C}}return{hooks:i,patches:a,patchesSources:c,enter:w,final:v}}function P(t,i=!1){let a=S.get(t);if(a)i&&(a.precomputed=A(a));else{let c=window,v=t.split(".");for(let d=0;d<v.length-1;d++)if(c=c[v[d]],!s(c))throw new Error(`ModSDK: Function ${t} to be patched not found; ${v.slice(0,d+1).join(".")} is not object`);let w=c[v[v.length-1]];if(typeof w!="function")throw new Error(`ModSDK: Function ${t} to be patched not found`);let m=function(d){let r=-1;for(let f of n.encode(d)){let y=255&(r^f);for(let b=0;b<8;b++)y=1&y?-306674912^y>>>1:y>>>1;r=r>>>8^y}return((-1^r)>>>0).toString(16).padStart(8,"0").toUpperCase()}(w.toString().replaceAll(`\r
`,`
`)),h={name:t,original:w,originalHash:m};a=Object.assign(Object.assign({},h),{precomputed:A(h),router:()=>{},context:c,contextProperty:v[v.length-1]}),a.router=function(d){return function(...r){return d.precomputed.enter.apply(this,[r])}}(a),S.set(t,a),c[a.contextProperty]=a.router}return a}function l(){let t=new Set;for(let i of x.values())for(let a of i.patching.keys())t.add(a);for(let i of S.keys())t.add(i);for(let i of t)P(i,!0)}function _(){let t=new Map;for(let[i,a]of S)t.set(i,{name:i,original:a.original,originalHash:a.originalHash,sdkEntrypoint:a.router,currentEntrypoint:a.context[a.contextProperty],hookedByMods:u(a.precomputed.hooks.map(c=>c.mod)),patchedByMods:Array.from(a.precomputed.patchesSources)});return t}let x=new Map;function N(t){x.get(t.name)!==t&&o(`Failed to unload mod '${t.name}': Not registered`),x.delete(t.name),t.loaded=!1,l()}function F(t,i,a){typeof t=="string"&&typeof i=="string"&&(alert(`Mod SDK warning: Mod '${t}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),t={name:t,fullName:t,version:i},i={allowReplace:a===!0}),t&&typeof t=="object"||o("Failed to register mod: Expected info object, got "+typeof t),typeof t.name=="string"&&t.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof t.name);let c=`'${t.name}'`;typeof t.fullName=="string"&&t.fullName||o(`Failed to register mod ${c}: Expected fullName to be non-empty string, got ${typeof t.fullName}`),c=`'${t.fullName} (${t.name})'`,typeof t.version!="string"&&o(`Failed to register mod ${c}: Expected version to be string, got ${typeof t.version}`),t.repository||(t.repository=void 0),t.repository!==void 0&&typeof t.repository!="string"&&o(`Failed to register mod ${c}: Expected repository to be undefined or string, got ${typeof t.version}`),i==null&&(i={}),i&&typeof i=="object"||o(`Failed to register mod ${c}: Expected options to be undefined or object, got ${typeof i}`);let v=i.allowReplace===!0,w=x.get(t.name);w&&(w.allowReplace&&v||o(`Refusing to load mod ${c}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),N(w));let m=r=>{typeof r=="string"&&r||o(`Mod ${c} failed to patch a function: Expected function name string, got ${typeof r}`);let f=d.patching.get(r);return f||(f={hooks:[],patches:new Map},d.patching.set(r,f)),f},h={unload:()=>N(d),hookFunction:(r,f,y)=>{d.loaded||o(`Mod ${c} attempted to call SDK function after being unloaded`);let b=m(r);typeof f!="number"&&o(`Mod ${c} failed to hook function '${r}': Expected priority number, got ${typeof f}`),typeof y!="function"&&o(`Mod ${c} failed to hook function '${r}': Expected hook function, got ${typeof y}`);let C={mod:d.name,priority:f,hook:y};return b.hooks.push(C),l(),()=>{let R=b.hooks.indexOf(C);R>=0&&(b.hooks.splice(R,1),l())}},patchFunction:(r,f)=>{d.loaded||o(`Mod ${c} attempted to call SDK function after being unloaded`);let y=m(r);s(f)||o(`Mod ${c} failed to patch function '${r}': Expected patches object, got ${typeof f}`);for(let[b,C]of Object.entries(f))typeof C=="string"?y.patches.set(b,C):C===null?y.patches.delete(b):o(`Mod ${c} failed to patch function '${r}': Invalid format of patch '${b}'`);l()},removePatches:r=>{d.loaded||o(`Mod ${c} attempted to call SDK function after being unloaded`),m(r).patches.clear(),l()},callOriginal:(r,f,y)=>(d.loaded||o(`Mod ${c} attempted to call SDK function after being unloaded`),typeof r=="string"&&r||o(`Mod ${c} failed to call a function: Expected function name string, got ${typeof r}`),Array.isArray(f)||o(`Mod ${c} failed to call a function: Expected args array, got ${typeof f}`),function(b,C,R=window){return P(b).original.apply(R,C)}(r,f,y)),getOriginalHash:r=>(typeof r=="string"&&r||o(`Mod ${c} failed to get hash: Expected function name string, got ${typeof r}`),P(r).originalHash)},d={name:t.name,fullName:t.fullName,version:t.version,repository:t.repository,allowReplace:v,api:h,loaded:!0,patching:new Map};return x.set(t.name,d),Object.freeze(h)}function ae(){let t=[];for(let i of x.values())t.push({name:i.name,fullName:i.fullName,version:i.version,repository:i.repository});return t}let G,Y=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let t={version:e,apiVersion:1,registerMod:F,getModsInfo:ae,getPatchingInfo:_,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return G=t,Object.freeze(t)}();if(s(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let t=window.bcModSdk,i=Object.freeze(Object.assign(Object.assign({},t),{registerMod:(a,c,v)=>a&&typeof a=="object"&&typeof a.name=="string"&&typeof a.version=="string"?t.registerMod(a.name,a.version,typeof c=="object"&&!!c&&c.allowReplace===!0):t.registerMod(a,c,v),_shim10register:!0}));window.bcModSdk=i}return window.bcModSdk}();return typeof H<"u"&&(Object.defineProperty(H,"__esModule",{value:!0}),H.default=Y),Y}()});function $(e){return Math.floor(Math.random()*e)}function B(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function Z(e,o=3e3){ServerBeep={Timer:CommonTime()+o,Message:e}}function g(e,o="#6e6eff54",n,s){let u=document.createElement("div");u.setAttribute("class","ChatMessage ChatMessageLocalMessage"),u.setAttribute("data-time",ChatRoomCurrentTime()),u.setAttribute("data-sender",`${s??Player.MemberNumber??0}`),u.style.background=o,u.style.margin="0.15em 0",typeof e=="string"?u.innerText="[AES] "+e:u.appendChild("[AES] "+e),n&&setTimeout(()=>{S()},n);function S(){u.remove()}let p=document.activeElement?.id==="InputChat",T=ElementIsScrolledToEnd("TextAreaChatLog"),A=document.getElementById("TextAreaChatLog");return A!=null?(A.appendChild(u),T&&ElementScrollToEnd("TextAreaChatLog"),p&&ElementFocus("InputChat"),u):null}function U(e,o="btn",n="white",s=50,u=50){var S=document.getElementById("MainCanvas"),p=document.createElement("div");p.textContent=o,p.style.backgroundColor=n,p.style.width="40px",p.style.height="40px",p.style.position="absolute";var T=S.getBoundingClientRect();p.style.left=T.left+s+"px",p.style.top=T.top+u+"px",p.addEventListener("click",function(){e()}),S.appendChild(p),document.body.appendChild(p)}var re=fe(q());function E(e,o,n,s,u,S=!0){InventoryGet(e,n)==null&&InventoryWear(Player,o,n,s,u,S)}function J(e){let o=["Cloth","ClothAccessory","Suit","ClothLower","SuitLower","Bra","Corset","Panties","SocksLeft","SocksRight","Socks","Garters","Shoes","Hat","Gloves","LeftHand","RightHand","Bracelet","Mask"],n=[];for(let s of o)InventoryGet(e,s)!=null&&n.push(s);if(n.length>0){let s=$(n.length);return InventoryRemove(e,n[s]),!0}else return CharacterNaked(Player),!1}var j={PLANT:"plantEvent"},k={INIT:"INIT",IN_PROGRESS:"IN_PROGRESS",PAUSED:"PAUSED",COMPLETED:"COMPLETED",STOP:"STOP",FAILED:"FAILED"};var te,D=0,M="#56AB56",L=5,Q=["The relentless vines tore through my clothing as if they were ravenous for flesh.","With a ruthless determination, the sinewy vines shredded my attire into tatters.","The invasive vines left me exposed, ripping my clothes to shreds with their tenacious grip.","As the voracious vines ensnared me, my clothes fell victim to their insatiable appetite.","My garments were no match for the relentless onslaught of the entangling vines.","The vines didn't discriminate, mercilessly tearing apart both fabric and dignity.","In their unyielding grasp, the vines left my clothing in tatters, exposing my vulnerability.","The tenacious vines stripped away my defenses, leaving me exposed and helpless.","As the plant's grip tightened, my clothes succumbed to the relentless force of nature.","My attire disintegrated under the relentless assault of the encroaching vines, leaving me vulnerable to their relentless advance."],I={head:0,mouth:0,mouth2:0,mouth3:0,neck:0,arms:0,pelvis:0,torso:0,torso2:0,legs:0,feet:0,boots:0};function z(e){console.log("AES: A plant invasion has started"),g("A plant invasion has started"),te=setInterval(function(){me()},L*1e3),e&&ne(k.INIT)}function O(){console.log("AES: A plant invasion has finished"),g("The plant invasion has finished"),clearInterval(te);for(var e in I)I[e]=0;ne(k.STOP)}function oe(e){switch(e){case k.INIT:z(!1),console.log("Evento PLANT iniciado");break;case k.IN_PROGRESS:break;case k.PAUSED:console.log("Evento PLANT pausado");break;case k.COMPLETED:console.log("Evento PLANT completado");break;case k.STOP:O(),console.log("Evento PLANT detenido");break;case k.FAILED:O(),console.log("Evento PLANT fallido");break;default:console.error("Estado no reconocido para el evento PLANT:",e)}}function ne(e){if(console.error("2 ",k[e]),k[e]){let o={event:j.PLANT,state:k[e]};W(o)}else console.error("[AES] wrong state for event: ",e)}function me(){var e=0;for(var o in I)e+=I[o];D++;let n=$(51)+D*5+e;be("Some vines are approaching to you, do you want to fight back?","#6e6eff54",null,()=>{ee(n,$(101))},()=>{ee(n,0),console.log("Rendirse")},L*1e3),W("PlantEvent","test",Player)}function ee(e,o){var n=`You fought against the plants: 
 You: `+o+" - Vines: "+e;if(e>o){var s=$(2);s==0&&K()!=null||s==1&&K()!=null&&CharacterIsNaked(Player)?(n+=`
 Vines are looking to restrain your body.`,g(n,"#FFF2CC",L*1e3),he()):s==1&&!CharacterIsNaked(Player)||s==0&&!CharacterIsNaked(Player)&&K()==null?(n+=`
 Vines are tearing down your clothing.`,g(n,"#FFF2CC",L*1e3),ye()):(n+=`
 Vines stopped moving as they got you fully bound.`,g(n,"#FFF2CC",L*1e3),O()),D=0}else g(n,"#FFF2CC",L*1e3);console.log("[AES] eventLevel up! - "+D),ChatRoomCharacterUpdate(Player)}function he(){var e=K();switch(I[e.bind]++,e.bind){case"head":E(Player,"RopeBlindfold","ItemHead",M,1),g("The vines, like stealthy intruders, approached your face. With a swift and deliberate move, they placed a leafy blindfold over your eyes, shrouding you in impenetrable darkness.");break;case"mouth":E(Player,"ClothStuffing","ItemMouth",M,1),g("The vines swiftly moved towards your mouth, coiling tightly with a sinister intent.");break;case"mouth2":E(Player,"HempRope","ItemMouth2",M,1),g("The menacing vines lunged at your mouth, their aggressive coils silencing your protests with a brutal grip.");break;case"mouth3":E(Player,"ClothGag","ItemMouth3","#357035",1),g("The voracious vines lunged at your gaping mouth, their snakelike coils wrapping your throat in a strangling grip, rendering you speechless and breathless.");break;case"neck":E(Player,"NeckRope","ItemNeck",M,1),g("The relentless vines closed in on your neck, their grip unyielding, constricting like a tightening noose.");break;case"arms":E(Player,"HempRope","ItemArms",M,1),TypedItemSetOptionByName(Player,"ItemArms","BoxTie"),g("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"torso":E(Player,"HempRopeHarness","ItemTorso",M,1),TypedItemSetOptionByName(Player,"ItemTorso","Diamond"),g("The vines slithered around you, curling and constricting, entwining your form in their embrace.");break;case"torso2":E(Player,"HempRopeHarness","ItemTorso2",M,1),TypedItemSetOptionByName(Player,"ItemTorso","Star"),g("The creeping vines wound their way up your body, a tactile dance that coiled and embraced, entangling you in their verdant grip.");break;case"pelvis":E(Player,"HempRope","ItemPelvis",M,1),g("The plant's tendrils sensually brushed against your pelvis, a delicate touch that heightened the intertwining dance, leaving a lingering, enchanting sensation.");break;case"legs":E(Player,"HempRope","ItemLegs",M,1),g("The plant's sinuous tendrils coiled around your thighs, slowly constricting and pulling you deeper into their verdant embrace.");break;case"feet":E(Player,"HempRope","ItemFeet",M,1),g("The plant wraps around your legs, twisting and tightening its grip.");break;case"boots":E(Player,"ToeTie","ItemBoots",M,1),g("The massive, sinewy vines slithered around your fingers like living ropes, binding them together with an unbreakable, natural restraint.");break;default:break}}function ge(){let e=Math.floor(Math.random()*Q.length);return Q[e]}function ye(){let e=ge();J(Player)&&g(e)}function K(){var e=[];for(var o in I)I[o]==0&&e.push(o);if(e.length>0){var n=Math.floor(Math.random()*e.length),s=e[n];return{bind:s,value:I[s]}}else return null}function ve(){let e=D/6*100,o=document.createElement("div");o.classList.add("maxLevel-bar"),o.style.width="200px",o.style.height="20px";let n=document.createElement("div");n.classList.add("eventLevel-fill"),n.style.width=`${e}%`,o.appendChild(n);let s=`
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
    `,u=document.createElement("style");return u.innerHTML=s,document.head.appendChild(u),o}function be(e,o="#6e6eff54",n,s,u,S=L*1e3){let p=document.createElement("div");p.setAttribute("class","ChatMessage ChatMessageLocalMessage"),p.setAttribute("data-time",ChatRoomCurrentTime()),p.setAttribute("data-sender",`${n??Player.MemberNumber??0}`),p.style.background=o,p.style.margin="0.15em 0";let T=typeof e=="string"?e:"[AES] "+e,A=document.createElement("div");A.innerText=T,p.appendChild(A),eventLevelBar=ve(),p.appendChild(eventLevelBar);let P=document.createElement("button");P.classList.add("fancy-button"),P.innerHTML="&#10003;",P.addEventListener("click",()=>{s&&(s(),F())});let l=document.createElement("button");l.classList.add("fancy-button"),l.innerHTML="&#10007;",l.style.background="#fff",l.style.backfaceVisibility="hidden",l.style.borderRadius=".375rem",l.style.borderStyle="solid",l.style.borderWidth=".125rem",l.style.boxSizing="border-box",l.style.color="#212121",l.style.cursor="pointer",l.style.display="inline-block",l.style.fontFamily="Circular,Helvetica,sans-serif",l.style.fontSize="1.125rem",l.style.fontWeight="700",l.style.letterSpacing="-.01em",l.style.lineHeight="1.3",l.style.padding=".875rem 1.125rem",l.style.position="relative",l.style.textAlign="left",l.style.textDecoration="none",l.style.transform="translateZ(0) scale(1)",l.style.transition="transform .2s",l.style.userSelect="none",l.style.webkitUserSelect="none",l.style.touchAction="manipulation",l.style.backgroundImage="conic-gradient(#ea9999 0%, #ea9999 0%, transparent 50%, transparent 100%)",l.style.backgroundSize="200% 200%",l.style.transition="background-position 5s linear",l.addEventListener("click",()=>{u&&(u(),F())}),p.appendChild(P),p.appendChild(l),setTimeout(()=>{u(),F()},S);let _=document.activeElement?.id==="InputChat",x=ElementIsScrolledToEnd("TextAreaChatLog"),N=document.getElementById("TextAreaChatLog");if(N!=null)return N.appendChild(p),x&&ElementScrollToEnd("TextAreaChatLog"),_&&ElementFocus("InputChat"),p;return null;function F(){p.remove()}}var Se=re.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.0.1",repository:"https://github.com/ainaradev7/AES"});function V(e,o,n,s=null){return Ee(e,o,n,s)}function Ee(e,o,n,s=null){let u=Se.hookFunction(e,o,n)}function W(e,o=null){ServerSend("ChatRoomChat",{Content:"AESMsg",Type:"Hidden",Dictionary:e})}V("ChatRoomMessage",10,(e,o)=>{let n=e[0];if(n?.Type==="Hidden"&&n.Content==="AESMsg"&&typeof n.Sender=="number"){if(console.log("OWN MESSAGE ${data.sender} and ${message} from "+n.Sender),console.log(n.Dictionary),n.Sender===Player.MemberNumber)return;if(!B(n.Dictionary)){console.warn("AES: Hidden message no Dictionary",n);return}if(n.sender===Player.MemberNumber)return;let{event:s,state:u}=n.Dictionary;if(typeof s=="string"&&typeof u=="string"){switch(s){case j.PLANT:oe(u);break;default:console.error("Evento no reconocido:",s)}console.log(`Received some data from AES from ${n.Sender}`);return}return o(e)}});function ke(){console.log("AES: Initiated"),V("LoginResponse",0,(e,o)=>{console.debug("AES: Init LoginResponse caught",e),o(e);let n=e[0];B(n)&&typeof n.Name=="string"&&n.AccountName}),Z("AES Ready!"),console.log("[AES] initiated"),U(()=>{z(!0)},"start","green",50,50),U(()=>{O()},"stop","red",100,100),console.debug("BCX: Already logged in, init")}ke();})();
