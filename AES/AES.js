(()=>{var he=Object.create;var oe=Object.defineProperty;var ge=Object.getOwnPropertyDescriptor;var ye=Object.getOwnPropertyNames;var ve=Object.getPrototypeOf,be=Object.prototype.hasOwnProperty;var Se=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ee=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ye(t))!be.call(e,i)&&i!==n&&oe(e,i,{get:()=>t[i],enumerable:!(r=ge(t,i))||r.enumerable});return e};var Me=(e,t,n)=>(n=e!=null?he(ve(e)):{},Ee(t||!e||!e.__esModule?oe(n,"default",{value:e,enumerable:!0}):n,e));var re=Se(V=>{var Ve=function(){"use strict";let e="1.1.0";function t(o){alert(`Mod ERROR:
`+o);let l=new Error(o);throw console.error(l),l}let n=new TextEncoder;function r(o){return!!o&&typeof o=="object"&&!Array.isArray(o)}function i(o){let l=new Set;return o.filter(s=>!l.has(s)&&l.add(s))}let p=new Map,c=new Set;function v(o){c.has(o)||(c.add(o),console.warn(o))}function w(o){let l=[],s=new Map,d=new Set;for(let m of R.values()){let h=m.patching.get(o.name);if(h){l.push(...h.hooks);for(let[u,a]of h.patches.entries())s.has(u)&&s.get(u)!==a&&v(`ModSDK: Mod '${m.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${u}
Patch1:
${s.get(u)||""}
Patch2:
${a}`),s.set(u,a),d.add(m.name)}}l.sort((m,h)=>h.priority-m.priority);let S=function(m,h){if(h.size===0)return m;let u=m.toString().replaceAll(`\r
`,`
`);for(let[a,f]of h.entries())u.includes(a)||v(`ModSDK: Patching ${m.name}: Patch ${a} not applied`),u=u.replaceAll(a,f);return(0,eval)(`(${u})`)}(o.original,s),I=function(m){var h,u;let a=(u=(h=q.errorReporterHooks).hookChainExit)===null||u===void 0?void 0:u.call(h,o.name,d),f=S.apply(this,m);return a?.(),f};for(let m=l.length-1;m>=0;m--){let h=l[m],u=I;I=function(a){var f,y;let E=(y=(f=q.errorReporterHooks).hookEnter)===null||y===void 0?void 0:y.call(f,o.name,h.mod),A=h.hook.apply(this,[a,F=>{if(arguments.length!==1||!Array.isArray(a))throw new Error(`Mod ${h.mod} failed to call next hook: Expected args to be array, got ${typeof F}`);return u.call(this,F)}]);return E?.(),A}}return{hooks:l,patches:s,patchesSources:d,enter:I,final:S}}function C(o,l=!1){let s=p.get(o);if(s)l&&(s.precomputed=w(s));else{let d=window,S=o.split(".");for(let u=0;u<S.length-1;u++)if(d=d[S[u]],!r(d))throw new Error(`ModSDK: Function ${o} to be patched not found; ${S.slice(0,u+1).join(".")} is not object`);let I=d[S[S.length-1]];if(typeof I!="function")throw new Error(`ModSDK: Function ${o} to be patched not found`);let m=function(u){let a=-1;for(let f of n.encode(u)){let y=255&(a^f);for(let E=0;E<8;E++)y=1&y?-306674912^y>>>1:y>>>1;a=a>>>8^y}return((-1^a)>>>0).toString(16).padStart(8,"0").toUpperCase()}(I.toString().replaceAll(`\r
`,`
`)),h={name:o,original:I,originalHash:m};s=Object.assign(Object.assign({},h),{precomputed:w(h),router:()=>{},context:d,contextProperty:S[S.length-1]}),s.router=function(u){return function(...a){return u.precomputed.enter.apply(this,[a])}}(s),p.set(o,s),d[s.contextProperty]=s.router}return s}function M(){let o=new Set;for(let l of R.values())for(let s of l.patching.keys())o.add(s);for(let l of p.keys())o.add(l);for(let l of o)C(l,!0)}function X(){let o=new Map;for(let[l,s]of p)o.set(l,{name:l,original:s.original,originalHash:s.originalHash,sdkEntrypoint:s.router,currentEntrypoint:s.context[s.contextProperty],hookedByMods:i(s.precomputed.hooks.map(d=>d.mod)),patchedByMods:Array.from(s.precomputed.patchesSources)});return o}let R=new Map;function H(o){R.get(o.name)!==o&&t(`Failed to unload mod '${o.name}': Not registered`),R.delete(o.name),o.loaded=!1,M()}function j(o,l,s){typeof o=="string"&&typeof l=="string"&&(alert(`Mod SDK warning: Mod '${o}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),o={name:o,fullName:o,version:l},l={allowReplace:s===!0}),o&&typeof o=="object"||t("Failed to register mod: Expected info object, got "+typeof o),typeof o.name=="string"&&o.name||t("Failed to register mod: Expected name to be non-empty string, got "+typeof o.name);let d=`'${o.name}'`;typeof o.fullName=="string"&&o.fullName||t(`Failed to register mod ${d}: Expected fullName to be non-empty string, got ${typeof o.fullName}`),d=`'${o.fullName} (${o.name})'`,typeof o.version!="string"&&t(`Failed to register mod ${d}: Expected version to be string, got ${typeof o.version}`),o.repository||(o.repository=void 0),o.repository!==void 0&&typeof o.repository!="string"&&t(`Failed to register mod ${d}: Expected repository to be undefined or string, got ${typeof o.version}`),l==null&&(l={}),l&&typeof l=="object"||t(`Failed to register mod ${d}: Expected options to be undefined or object, got ${typeof l}`);let S=l.allowReplace===!0,I=R.get(o.name);I&&(I.allowReplace&&S||t(`Refusing to load mod ${d}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),H(I));let m=a=>{typeof a=="string"&&a||t(`Mod ${d} failed to patch a function: Expected function name string, got ${typeof a}`);let f=u.patching.get(a);return f||(f={hooks:[],patches:new Map},u.patching.set(a,f)),f},h={unload:()=>H(u),hookFunction:(a,f,y)=>{u.loaded||t(`Mod ${d} attempted to call SDK function after being unloaded`);let E=m(a);typeof f!="number"&&t(`Mod ${d} failed to hook function '${a}': Expected priority number, got ${typeof f}`),typeof y!="function"&&t(`Mod ${d} failed to hook function '${a}': Expected hook function, got ${typeof y}`);let A={mod:u.name,priority:f,hook:y};return E.hooks.push(A),M(),()=>{let F=E.hooks.indexOf(A);F>=0&&(E.hooks.splice(F,1),M())}},patchFunction:(a,f)=>{u.loaded||t(`Mod ${d} attempted to call SDK function after being unloaded`);let y=m(a);r(f)||t(`Mod ${d} failed to patch function '${a}': Expected patches object, got ${typeof f}`);for(let[E,A]of Object.entries(f))typeof A=="string"?y.patches.set(E,A):A===null?y.patches.delete(E):t(`Mod ${d} failed to patch function '${a}': Invalid format of patch '${E}'`);M()},removePatches:a=>{u.loaded||t(`Mod ${d} attempted to call SDK function after being unloaded`),m(a).patches.clear(),M()},callOriginal:(a,f,y)=>(u.loaded||t(`Mod ${d} attempted to call SDK function after being unloaded`),typeof a=="string"&&a||t(`Mod ${d} failed to call a function: Expected function name string, got ${typeof a}`),Array.isArray(f)||t(`Mod ${d} failed to call a function: Expected args array, got ${typeof f}`),function(E,A,F=window){return C(E).original.apply(F,A)}(a,f,y)),getOriginalHash:a=>(typeof a=="string"&&a||t(`Mod ${d} failed to get hash: Expected function name string, got ${typeof a}`),C(a).originalHash)},u={name:o.name,fullName:o.fullName,version:o.version,repository:o.repository,allowReplace:S,api:h,loaded:!0,patching:new Map};return R.set(o.name,u),Object.freeze(h)}function me(){let o=[];for(let l of R.values())o.push({name:l.name,fullName:l.fullName,version:l.version,repository:l.repository});return o}let q,te=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let o={version:e,apiVersion:1,registerMod:j,getModsInfo:me,getPatchingInfo:X,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return q=o,Object.freeze(o)}();if(r(window.bcModSdk)||t("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&t(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let o=window.bcModSdk,l=Object.freeze(Object.assign(Object.assign({},o),{registerMod:(s,d,S)=>s&&typeof s=="object"&&typeof s.name=="string"&&typeof s.version=="string"?o.registerMod(s.name,s.version,typeof d=="object"&&!!d&&d.allowReplace===!0):o.registerMod(s,d,S),_shim10register:!0}));window.bcModSdk=l}return window.bcModSdk}();return typeof V<"u"&&(Object.defineProperty(V,"__esModule",{value:!0}),V.default=te),te}()});function D(e){return Math.floor(Math.random()*e)}function _(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function ne(e,t=3e3){ServerBeep={Timer:CommonTime()+t,Message:e}}function g(e,t="#6e6eff54",n,r){let i=document.createElement("div");i.setAttribute("class","ChatMessage ChatMessageLocalMessage"),i.setAttribute("data-time",ChatRoomCurrentTime()),i.setAttribute("data-sender",`${r??Player.MemberNumber??0}`),i.style.background=t,i.style.margin="0.15em 0",typeof e=="string"?i.innerText="[AES] "+e:i.appendChild("[AES] "+e),n&&setTimeout(()=>{p()},n);function p(){i.remove()}let c=document.activeElement?.id==="InputChat",v=ElementIsScrolledToEnd("TextAreaChatLog"),w=document.getElementById("TextAreaChatLog");return w!=null?(w.appendChild(i),v&&ElementScrollToEnd("TextAreaChatLog"),c&&ElementFocus("InputChat"),i):null}var de=Me(re());function k(e,t,n,r,i,p=!0){InventoryGet(e,n)==null&&InventoryWear(Player,t,n,r,i,p)}function ae(e){let t=["Cloth","ClothAccessory","Suit","ClothLower","SuitLower","Bra","Corset","Panties","SocksLeft","SocksRight","Socks","Garters","Shoes","Hat","Gloves","LeftHand","RightHand","Bracelet","Mask"],n=[];for(let r of t)InventoryGet(e,r)!=null&&n.push(r);if(n.length>0){let r=D(n.length);return InventoryRemove(e,n[r]),!0}else return CharacterNaked(Player),!1}var K={PLANT:"plantEvent"},b={INIT:"INIT",IN_PROGRESS:"IN_PROGRESS",PAUSED:"PAUSED",COMPLETED:"COMPLETED",STOP:"STOP",FAILED:"FAILED"};var W,G=0,J=b.PAUSED,P="#56AB56",B=5,ie=["The relentless vines tore through my clothing as if they were ravenous for flesh.","With a ruthless determination, the sinewy vines shredded my attire into tatters.","The invasive vines left me exposed, ripping my clothes to shreds with their tenacious grip.","As the voracious vines ensnared me, my clothes fell victim to their insatiable appetite.","My garments were no match for the relentless onslaught of the entangling vines.","The vines didn't discriminate, mercilessly tearing apart both fabric and dignity.","In their unyielding grasp, the vines left my clothing in tatters, exposing my vulnerability.","The tenacious vines stripped away my defenses, leaving me exposed and helpless.","As the plant's grip tightened, my clothes succumbed to the relentless force of nature.","My attire disintegrated under the relentless assault of the encroaching vines, leaving me vulnerable to their relentless advance."],T={ItemHead:0,ItemMouth:0,ItemMouth2:0,ItemMouth3:0,ItemNeck:0,ItemArms:0,ItemPelvis:0,ItemTorso:0,ItemTorso2:0,ItemLegs:0,ItemFeet:0,ItemBoots:0};function Z(e){W===void 0&&(console.log("AES: A plant invasion has started"),g("A plant invasion has started"),J=b.INIT,W=setInterval(function(){ke()},B*1e3),e&&ce(b.INIT))}function U(){J=b.STOP,console.log("AES: A plant invasion has finished"),g("The plant invasion has finished"),clearInterval(W);for(var e in T)T[e]=0;W=null,ce(b.STOP)}function le(e){switch(e){case b.INIT:Z(!1),console.log("Evento PLANT iniciado");break;case b.IN_PROGRESS:break;case b.PAUSED:console.log("Evento PLANT pausado");break;case b.COMPLETED:console.log("Evento PLANT completado");break;case b.STOP:U(),console.log("Evento PLANT detenido");break;case b.FAILED:U(),console.log("Evento PLANT fallido");break;default:console.error("Estado no reconocido para el evento PLANT:",e)}}function ce(e){if(b[e]){let t={event:K.PLANT,state:b[e]};N(t)}else console.error("[AES] wrong state for event: ",e)}function ke(){switch(J){case b.INIT:case b.IN_PROGRESS:we();break;case b.STOP:U();break;default:break}}function we(){var e=0;Ae();for(var t in T)e+=T[t];G++;let n=D(51)+G*5+e;xe("Some vines are approaching to you, do you want to fight back?","#6e6eff54",null,()=>{se(n,D(101))},()=>{se(n,0),console.log("Rendirse")},B*1e3),N("PlantEvent","test",Player)}function se(e,t){var n=`You fought against the plants: 
 You: `+t+" - Vines: "+e;if(e>t){var r=D(2);r==0&&z()!=null||r==1&&z()!=null&&CharacterIsNaked(Player)?(n+=`
 Vines are looking to restrain your body.`,g(n,"#FFF2CC",B*1e3),Ce()):r==1&&!CharacterIsNaked(Player)||r==0&&!CharacterIsNaked(Player)&&z()==null?(n+=`
 Vines are tearing down your clothing.`,g(n,"#FFF2CC",B*1e3),Pe()):(n+=`
 Vines stopped moving as they got you fully bound.`,g(n,"#FFF2CC",B*1e3),U()),G=0}else g(n,"#FFF2CC",B*1e3);console.log("[AES] eventLevel up! - "+G),ChatRoomCharacterUpdate(Player)}function Ce(){var e=z();switch(T[e.bind]++,e.bind){case"ItemHead":k(Player,"RopeBlindfold",e.bind,P,1),g("The vines, like stealthy intruders, approached your face. With a swift and deliberate move, they placed a leafy blindfold over your eyes, shrouding you in impenetrable darkness.");break;case"ItemMouth":k(Player,"ClothStuffing",e.bind,P,1),g("The vines swiftly moved towards your mouth, coiling tightly with a sinister intent.");break;case"ItemMouth2":k(Player,"HempRope",e.bind,P,1),g("The menacing vines lunged at your mouth, their aggressive coils silencing your protests with a brutal grip.");break;case"ItemMouth3":k(Player,"ClothGag",e.bind,"#357035",1),g("The voracious vines lunged at your gaping mouth, their snakelike coils wrapping your throat in a strangling grip, rendering you speechless and breathless.");break;case"ItemNeck":k(Player,"NeckRope",e.bind,P,1),g("The relentless vines closed in on your neck, their grip unyielding, constricting like a tightening noose.");break;case"ItemArms":k(Player,"HempRope",e.bind,P,1),TypedItemSetOptionByName(Player,e.bind,"BoxTie"),g("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"ItemTorso":k(Player,"HempRopeHarness",e.bind,P,1),TypedItemSetOptionByName(Player,e.bind,"Diamond"),g("The vines slithered around you, curling and constricting, entwining your form in their embrace.");break;case"ItemTorso2":k(Player,"HempRopeHarness",e.bind,P,1),TypedItemSetOptionByName(Player,e.bind,"Star"),g("The creeping vines wound their way up your body, a tactile dance that coiled and embraced, entangling you in their verdant grip.");break;case"ItemPelvis":k(Player,"HempRope",e.bind,P,1),g("The plant's tendrils sensually brushed against your pelvis, a delicate touch that heightened the intertwining dance, leaving a lingering, enchanting sensation.");break;case"ItemLegs":k(Player,"HempRope",e.bind,P,1),g("The plant's sinuous tendrils coiled around your thighs, slowly constricting and pulling you deeper into their verdant embrace.");break;case"ItemFeet":k(Player,"HempRope",e.bind,P,1),g("The plant wraps around your legs, twisting and tightening its grip.");break;case"ItemBoots":k(Player,"ToeTie",e.bind,P,1),g("The massive, sinewy vines slithered around your fingers like living ropes, binding them together with an unbreakable, natural restraint.");break;default:break}}function Ie(){let e=Math.floor(Math.random()*ie.length);return ie[e]}function Pe(){let e=Ie();ae(Player)&&g(e)}function z(){var e=[];for(var t in T)T[t]==0&&e.push(t);if(e.length>0){var n=Math.floor(Math.random()*e.length),r=e[n];return{bind:r,value:T[r]}}else return null}function Ae(){for(var e in T)T[e]=InventoryGet(Player,e)?1:0}function Te(){let e=G/6*100,t=document.createElement("div");t.classList.add("maxLevel-bar"),t.style.width="200px",t.style.height="20px";let n=document.createElement("div");n.classList.add("eventLevel-fill"),n.style.width=`${e}%`,t.appendChild(n);let r=`
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
    `,i=document.createElement("style");return i.innerHTML=r,document.head.appendChild(i),t}function xe(e,t="#6e6eff54",n,r,i,p=B*1e3){let c=document.createElement("div");c.setAttribute("class","ChatMessage ChatMessageLocalMessage"),c.setAttribute("data-time",ChatRoomCurrentTime()),c.setAttribute("data-sender",`${n??Player.MemberNumber??0}`),c.style.background=t,c.style.margin="0.15em 0";let v=typeof e=="string"?e:"[AES] "+e,w=document.createElement("div");w.innerText=v,c.appendChild(w),eventLevelBar=Te(),c.appendChild(eventLevelBar);let C=document.createElement("button");C.classList.add("fancy-button"),C.innerHTML="&#10003;",C.addEventListener("click",()=>{r&&(r(),j())});let M=document.createElement("button");M.classList.add("fancy-button"),M.innerHTML="&#10007;",M.style.marginRight="10px",M.addEventListener("click",()=>{i&&(i(),j())}),c.appendChild(C),c.appendChild(M),setTimeout(()=>{i(),j()},p);let X=document.activeElement?.id==="InputChat",R=ElementIsScrolledToEnd("TextAreaChatLog"),H=document.getElementById("TextAreaChatLog");if(H!=null)return H.appendChild(c),R&&ElementScrollToEnd("TextAreaChatLog"),X&&ElementFocus("InputChat"),c;return null;function j(){c.remove()}}var Q="0.0.1",L={PING:"PING",PONG:"PONG",REMOVE_CHAR:"REMOVE_CHAR"};var Y=class{character=void 0;AESVersion="";constructor(t){this.character=t}MemberNumber(){return this.Character.MemberNumber}};var $=[],Re=de.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:Q,repository:"https://github.com/ainaradev7/AES"});function O(e,t,n,r=null){return Le(e,t,n,r)}function Le(e,t,n,r=null){let i=Re.hookFunction(e,t,n)}function N(e,t=null){ServerSend("ChatRoomChat",{Content:"AESMsg",Type:"Hidden",Dictionary:e})}O("ChatRoomMessage",10,(e,t)=>{t(e);let n=e[0];if(n?.Type==="Hidden"&&n.Content==="AESMsg"&&typeof n.Sender=="number"){if(console.log("OWN MESSAGE ${data.sender} and ${message} from "+n.Sender),console.log(n.Dictionary),n.Sender===Player.MemberNumber)return;if(!_(n.Dictionary)){console.warn("AES: Hidden message no Dictionary",n);return}if(n.sender===Player.MemberNumber)return;let{action:r,event:i,state:p}=n.Dictionary;if(typeof i=="string"&&typeof p=="string"){switch(i){case K.PLANT:le(p);break;default:console.error("Not recognized event: ",i)}return}if(console.log(r+" - "+i+" - "+p),typeof r=="string"){let c=ChatRoomCharacter.filter(w=>w.MemberNumber===n.Sender)[0],v=new Y(c);switch(v.AESVersion=Q,i){case L.PING:case L.PONG:Ne(v);break;case L.REMOVE_CHAR:$e(v);break;default:console.error("Not recognized event: ",i)}return}}});O("ChatRoomSync",10,(e,t)=>{t(e),$=[Player];let n={action:L.PING};N(n)});O("ChatRoomSyncMemberJoin",10,(e,t)=>{t(e);let n=e[0];if(n.Sender==="number"){let r={action:L.PING};N(r,n.sender)}});O("ChatRoomSyncMemberLeave",10,(e,t)=>{if(t(e),typeof e[0].Sender=="number"){let r={action:L.REMOVE_CHAR};N(r)}});function Ne(e){$.includes(e)||$.push(e)}function $e(e){$.includes(e)&&$.pop(e)}function ee(e,t="btn",n="white",r=50,i=50){var p=document.getElementById("MainCanvas"),c=document.createElement("div");c.textContent=t,c.style.backgroundColor=n,c.style.width="40px",c.style.height="40px",c.style.position="absolute";var v=p.getBoundingClientRect();c.style.left=v.left+r+"px",c.style.top=v.top+i+"px",c.addEventListener("click",function(){e()}),p.appendChild(c),document.body.appendChild(c)}function ue(){Oe("https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"),ee(()=>{Z(!0)},"start","green",50,50),ee(()=>{stopEvent()},"stop","red",100,50)}function Oe(e){let t=document.createElement("script");t.src=e,document.head.appendChild(t)}var fe="M497.679,53.348c-9.285-10.52-22.496-16.551-36.246-16.551h-47.01c-2.358-33.432-25.059-28.785-33.9-28.785 c-9.33,0-124.522,0-124.522,0s-115.191,0-124.521,0c-8.842,0-31.547-4.646-33.904,28.785h-47.01 c-13.748,0-26.959,6.033-36.246,16.551C3.064,66.1-1.793,84.503,0.594,105.255c0.442,9.219,5.098,56.574,54.09,90.256 c24.898,17.117,48.828,25.844,70.598,30.285c4.771,1.031,9.598,1.957,14.545,2.68c0.068,0.076,0.135,0.154,0.205,0.229 c101.859,107.191,89.42,45.18,89.42,143.435c0,38.092-52.771,25.762-52.771,55c0,29.236-41.129,5.174-37.322,39.863 c2.332,21.264,65.318,37.205,116.644,37.205c51.322,0,114.312-15.942,116.644-37.205c3.805-34.689-37.326-10.627-37.326-39.863 c0-29.238-52.768-16.908-52.768-55c0-98.256-12.44-36.244,89.42-143.435c0.14-0.149,0.27-0.307,0.41-0.457 c25.365-3.285,54.457-11.779,84.938-32.736c48.988-33.682,53.644-81.037,54.086-90.256 C513.794,84.503,508.935,66.098,497.679,53.348z M471.214,101.165l-0.184,0.992l0.025,1.353 c-0.096,2.625-2.006,34.916-36.621,58.715c-9.467,6.51-18.627,11.444-27.535,15.276c-2.014,0.816-4.024,1.633-6.084,2.344 c12.162-34.25,14.137-72.558,14.172-102.654h46.445c1.558,0,3.857,0.502,5.965,2.888C470.99,84.149,472.382,91.833,471.214,101.165 z M227.514,204.143c-3.805,4.799-9.436,7.299-15.117,7.299c-4.198,0-8.424-1.363-11.967-4.174 c-48.381-38.371-52.434-91.045-52.434-137.404c0-10.646,8.633-19.277,19.279-19.277c10.646,0,19.277,8.631,19.277,19.277 c0,40.676,2.895,79.482,37.836,107.195C232.73,183.676,234.129,195.802,227.514,204.143z M77.566,162.225 c-34.584-23.777-36.524-56.029-36.623-58.707l0.022-0.92l-0.18-1.434c-1.168-9.33,0.224-17.016,3.818-21.086 c2.108-2.386,4.406-2.888,5.963-2.888h46.445c0.031,25.693,1.533,57.357,9.52,87.386c1.332,5.178,2.808,10.326,4.543,15.385 C100.31,175.89,89.16,170.196,77.566,162.225z";var Fe=document.getElementById("MainCanvas"),x=Fe.getContext("2d");function pe(){O("ChatRoomDrawCharacterOverlay",0,(e,t)=>{t(e);let[n,r,i,p]=e,c=Be(n.MemberNumber),v=(Player.GhostList??[]).includes(n.MemberNumber);console.log($),console.log(c),c&&!v&&c.AESVersion!==null&&De(fe,r+390*p,i+45,3*p,3*p,50,.6,3,"#ffb76e")})}function Be(e){return $.filter(t=>t.character.MemberNumber===e)[0]}function De(e,t,n,r,i,p,c,v,w,C="black"){x.save(),x.globalAlpha=c,x.translate(t,n),x.scale(r/p,i/p),x.fillStyle=w,C&&(x.strokeStyle=C),x.lineWidth=v;let M=new Path2D(e);x.fill(M),C&&x.stroke(M),x.restore()}function He(){console.log("AES: Initiated 2:28"),O("LoginResponse",0,(t,n)=>{console.debug("AES: Init LoginResponse caught",t),n(t);let r=t[0];_(r)&&typeof r.Name=="string"&&r.AccountName}),ne("AES Ready!"),console.log("[AES] initiated"),ue(),pe();let e={action:L.PING};N(e),console.debug("BCX: Already logged in, init")}He();})();
