(()=>{var ie=Object.create;var X=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var le=Object.getOwnPropertyNames;var ce=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var ue=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var pe=(e,o,n,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let d of le(o))!de.call(e,d)&&d!==n&&X(e,d,{get:()=>o[d],enumerable:!(s=se(o,d))||s.enumerable});return e};var fe=(e,o,n)=>(n=e!=null?ie(ce(e)):{},pe(o||!e||!e.__esModule?X(n,"default",{value:e,enumerable:!0}):n,e));var J=ue(O=>{var xe=function(){"use strict";let e="1.1.0";function o(t){alert(`Mod ERROR:
`+t);let i=new Error(t);throw console.error(i),i}let n=new TextEncoder;function s(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function d(t){let i=new Set;return t.filter(a=>!i.has(a)&&i.add(a))}let b=new Map,u=new Set;function w(t){u.has(t)||(u.add(t),console.warn(t))}function $(t){let i=[],a=new Map,l=new Set;for(let f of x.values()){let h=f.patching.get(t.name);if(h){i.push(...h.hooks);for(let[c,r]of h.patches.entries())a.has(c)&&a.get(c)!==r&&w(`ModSDK: Mod '${f.name}' is patching function ${t.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${c}
Patch1:
${a.get(c)||""}
Patch2:
${r}`),a.set(c,r),l.add(f.name)}}i.sort((f,h)=>h.priority-f.priority);let y=function(f,h){if(h.size===0)return f;let c=f.toString().replaceAll(`\r
`,`
`);for(let[r,p]of h.entries())c.includes(r)||w(`ModSDK: Patching ${f.name}: Patch ${r} not applied`),c=c.replaceAll(r,p);return(0,eval)(`(${c})`)}(t.original,a),S=function(f){var h,c;let r=(c=(h=K.errorReporterHooks).hookChainExit)===null||c===void 0?void 0:c.call(h,t.name,l),p=y.apply(this,f);return r?.(),p};for(let f=i.length-1;f>=0;f--){let h=i[f],c=S;S=function(r){var p,g;let v=(g=(p=K.errorReporterHooks).hookEnter)===null||g===void 0?void 0:g.call(p,t.name,h.mod),C=h.hook.apply(this,[r,I=>{if(arguments.length!==1||!Array.isArray(r))throw new Error(`Mod ${h.mod} failed to call next hook: Expected args to be array, got ${typeof I}`);return c.call(this,I)}]);return v?.(),C}}return{hooks:i,patches:a,patchesSources:l,enter:S,final:y}}function P(t,i=!1){let a=b.get(t);if(a)i&&(a.precomputed=$(a));else{let l=window,y=t.split(".");for(let c=0;c<y.length-1;c++)if(l=l[y[c]],!s(l))throw new Error(`ModSDK: Function ${t} to be patched not found; ${y.slice(0,c+1).join(".")} is not object`);let S=l[y[y.length-1]];if(typeof S!="function")throw new Error(`ModSDK: Function ${t} to be patched not found`);let f=function(c){let r=-1;for(let p of n.encode(c)){let g=255&(r^p);for(let v=0;v<8;v++)g=1&g?-306674912^g>>>1:g>>>1;r=r>>>8^g}return((-1^r)>>>0).toString(16).padStart(8,"0").toUpperCase()}(S.toString().replaceAll(`\r
`,`
`)),h={name:t,original:S,originalHash:f};a=Object.assign(Object.assign({},h),{precomputed:$(h),router:()=>{},context:l,contextProperty:y[y.length-1]}),a.router=function(c){return function(...r){return c.precomputed.enter.apply(this,[r])}}(a),b.set(t,a),l[a.contextProperty]=a.router}return a}function M(){let t=new Set;for(let i of x.values())for(let a of i.patching.keys())t.add(a);for(let i of b.keys())t.add(i);for(let i of t)P(i,!0)}function j(){let t=new Map;for(let[i,a]of b)t.set(i,{name:i,original:a.original,originalHash:a.originalHash,sdkEntrypoint:a.router,currentEntrypoint:a.context[a.contextProperty],hookedByMods:d(a.precomputed.hooks.map(l=>l.mod)),patchedByMods:Array.from(a.precomputed.patchesSources)});return t}let x=new Map;function N(t){x.get(t.name)!==t&&o(`Failed to unload mod '${t.name}': Not registered`),x.delete(t.name),t.loaded=!1,M()}function F(t,i,a){typeof t=="string"&&typeof i=="string"&&(alert(`Mod SDK warning: Mod '${t}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),t={name:t,fullName:t,version:i},i={allowReplace:a===!0}),t&&typeof t=="object"||o("Failed to register mod: Expected info object, got "+typeof t),typeof t.name=="string"&&t.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof t.name);let l=`'${t.name}'`;typeof t.fullName=="string"&&t.fullName||o(`Failed to register mod ${l}: Expected fullName to be non-empty string, got ${typeof t.fullName}`),l=`'${t.fullName} (${t.name})'`,typeof t.version!="string"&&o(`Failed to register mod ${l}: Expected version to be string, got ${typeof t.version}`),t.repository||(t.repository=void 0),t.repository!==void 0&&typeof t.repository!="string"&&o(`Failed to register mod ${l}: Expected repository to be undefined or string, got ${typeof t.version}`),i==null&&(i={}),i&&typeof i=="object"||o(`Failed to register mod ${l}: Expected options to be undefined or object, got ${typeof i}`);let y=i.allowReplace===!0,S=x.get(t.name);S&&(S.allowReplace&&y||o(`Refusing to load mod ${l}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),N(S));let f=r=>{typeof r=="string"&&r||o(`Mod ${l} failed to patch a function: Expected function name string, got ${typeof r}`);let p=c.patching.get(r);return p||(p={hooks:[],patches:new Map},c.patching.set(r,p)),p},h={unload:()=>N(c),hookFunction:(r,p,g)=>{c.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`);let v=f(r);typeof p!="number"&&o(`Mod ${l} failed to hook function '${r}': Expected priority number, got ${typeof p}`),typeof g!="function"&&o(`Mod ${l} failed to hook function '${r}': Expected hook function, got ${typeof g}`);let C={mod:c.name,priority:p,hook:g};return v.hooks.push(C),M(),()=>{let I=v.hooks.indexOf(C);I>=0&&(v.hooks.splice(I,1),M())}},patchFunction:(r,p)=>{c.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`);let g=f(r);s(p)||o(`Mod ${l} failed to patch function '${r}': Expected patches object, got ${typeof p}`);for(let[v,C]of Object.entries(p))typeof C=="string"?g.patches.set(v,C):C===null?g.patches.delete(v):o(`Mod ${l} failed to patch function '${r}': Invalid format of patch '${v}'`);M()},removePatches:r=>{c.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`),f(r).patches.clear(),M()},callOriginal:(r,p,g)=>(c.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`),typeof r=="string"&&r||o(`Mod ${l} failed to call a function: Expected function name string, got ${typeof r}`),Array.isArray(p)||o(`Mod ${l} failed to call a function: Expected args array, got ${typeof p}`),function(v,C,I=window){return P(v).original.apply(I,C)}(r,p,g)),getOriginalHash:r=>(typeof r=="string"&&r||o(`Mod ${l} failed to get hash: Expected function name string, got ${typeof r}`),P(r).originalHash)},c={name:t.name,fullName:t.fullName,version:t.version,repository:t.repository,allowReplace:y,api:h,loaded:!0,patching:new Map};return x.set(t.name,c),Object.freeze(h)}function ae(){let t=[];for(let i of x.values())t.push({name:i.name,fullName:i.fullName,version:i.version,repository:i.repository});return t}let K,Y=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let t={version:e,apiVersion:1,registerMod:F,getModsInfo:ae,getPatchingInfo:j,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return K=t,Object.freeze(t)}();if(s(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==e&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let t=window.bcModSdk,i=Object.freeze(Object.assign(Object.assign({},t),{registerMod:(a,l,y)=>a&&typeof a=="object"&&typeof a.name=="string"&&typeof a.version=="string"?t.registerMod(a.name,a.version,typeof l=="object"&&!!l&&l.allowReplace===!0):t.registerMod(a,l,y),_shim10register:!0}));window.bcModSdk=i}return window.bcModSdk}();return typeof O<"u"&&(Object.defineProperty(O,"__esModule",{value:!0}),O.default=Y),Y}()});function R(e){return Math.floor(Math.random()*e)}function B(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function q(e,o=3e3){ServerBeep={Timer:CommonTime()+o,Message:e}}function m(e,o="#6e6eff54",n,s){let d=document.createElement("div");d.setAttribute("class","ChatMessage ChatMessageLocalMessage"),d.setAttribute("data-time",ChatRoomCurrentTime()),d.setAttribute("data-sender",`${s??Player.MemberNumber??0}`),d.style.background=o,d.style.margin="0.15em 0",typeof e=="string"?d.innerText="[AES] "+e:d.appendChild("[AES] "+e);let b=document.activeElement?.id==="InputChat",u=ElementIsScrolledToEnd("TextAreaChatLog"),w=document.getElementById("TextAreaChatLog");return w!=null?(w.appendChild(d),u&&ElementScrollToEnd("TextAreaChatLog"),b&&ElementFocus("InputChat"),d):null}function _(e,o="btn",n="white",s=50,d=50){var b=document.getElementById("MainCanvas"),u=document.createElement("div");u.textContent=o,u.style.backgroundColor=n,u.style.width="40px",u.style.height="40px",u.style.position="absolute";var w=b.getBoundingClientRect();u.style.left=w.left+s+"px",u.style.top=w.top+d+"px",u.addEventListener("click",function(){e()}),b.appendChild(u),document.body.appendChild(u)}var re=fe(J());function E(e,o,n,s,d,b=!0){InventoryGet(e,n)==null&&InventoryWear(Player,o,n,s,d,b)}function Q(e){let o=["Cloth","ClothAccessory","Suit","ClothLower","SuitLower","Bra","Corset","Panties","SocksLeft","SocksRight","Socks","Garters","Shoes","Hat","Gloves","LeftHand","RightHand","Bracelet","Mask"],n=[];for(let s of o)InventoryGet(e,s)!=null&&n.push(s);if(n.length>0){let s=R(n.length);return InventoryRemove(e,n[s]),!0}else return CharacterNaked(Player),!1}var L={PLANT:"plantEvent"},A={INIT:"init",IN_PROGRESS:"inProgress",PAUSED:"paused",COMPLETED:"completed",STOP:"stop",FAILED:"failed"};var te,D=0,k="#56AB56",G=3,Z=["The relentless vines tore through my clothing as if they were ravenous for flesh.","With a ruthless determination, the sinewy vines shredded my attire into tatters.","The invasive vines left me exposed, ripping my clothes to shreds with their tenacious grip.","As the voracious vines ensnared me, my clothes fell victim to their insatiable appetite.","My garments were no match for the relentless onslaught of the entangling vines.","The vines didn't discriminate, mercilessly tearing apart both fabric and dignity.","In their unyielding grasp, the vines left my clothing in tatters, exposing my vulnerability.","The tenacious vines stripped away my defenses, leaving me exposed and helpless.","As the plant's grip tightened, my clothes succumbed to the relentless force of nature.","My attire disintegrated under the relentless assault of the encroaching vines, leaving me vulnerable to their relentless advance."],T={head:0,mouth:0,mouth2:0,mouth3:0,neck:0,arms:0,pelvis:0,torso:0,torso2:0,legs:0,feet:0,boots:0};function U(e){console.log("AES: A plant invasion has started"),m("A plant invasion has started"),te=setInterval(function(){he()},G*1e3),e&&ne(L.INIT)}function W(){console.log("AES: A plant invasion has finished"),m("A plant invasion has finished"),clearInterval(te);for(var e in T)T[e]=0;ne(L.STOP)}function oe(e){switch(e){case A.INIT:U(!1),console.log("Evento PLANT iniciado");break;case A.IN_PROGRESS:break;case A.PAUSED:console.log("Evento PLANT pausado");break;case A.COMPLETED:console.log("Evento PLANT completado");break;case A.STOPPED:console.log("Evento PLANT detenido");break;case A.FAILED:console.log("Evento PLANT fallido");break;default:console.error("Estado no reconocido para el evento PLANT:",e)}}function ne(e){if(console.error("1 ",e),console.error("2 ",A[e]),A[e]){let o={event:L.PLANT,state:A[e]};z(o)}else console.error("[AES] wrong state for event: ",e)}function he(){var e=0;for(var o in T)e+=T[o];D++;let n=R(51)+D*5+e;be("Some vines are approaching to you, do you want to fight back?","#6e6eff54",null,()=>{ee(n,R(101))},()=>{ee(n,0),console.log("Rendirse")},G*1e3),z("PlantEvent","test",Player)}function ee(e,o){var n=`You fought against the plants: 
 You: `+o+" - Vines: "+e;if(e>o){var s=R(2);s==0&&H()!=null||s==1&&H()!=null&&CharacterIsNaked(Player)?(n+=`
 Vines are looking to restrain your body.`,m(n,"#FFF2CC"),me()):s==1&&!CharacterIsNaked(Player)||s==0&&!CharacterIsNaked(Player)&&H()==null?(n+=`
 Vines are tearing down your clothing.`,m(n,"#FFF2CC"),ye()):(n+=`
 Vines stopped moving as they got you fully bound.`,m(n,"#FFF2CC"),W()),D=0}else m(n,"#FFF2CC");console.log("[AES] eventLevel up! - "+D),ChatRoomCharacterUpdate(Player)}function me(){var e=H();switch(T[e.bind]++,e.bind){case"head":E(Player,"RopeBlindfold","ItemHead",k,1),m("The vines, like stealthy intruders, approached your face. With a swift and deliberate move, they placed a leafy blindfold over your eyes, shrouding you in impenetrable darkness.");break;case"mouth":E(Player,"ClothStuffing","ItemMouth",k,1),m("The vines swiftly moved towards your mouth, coiling tightly with a sinister intent.");break;case"mouth2":E(Player,"HempRope","ItemMouth2",k,1),m("The menacing vines lunged at your mouth, their aggressive coils silencing your protests with a brutal grip.");break;case"mouth3":E(Player,"ClothGag","ItemMouth3","#357035",1),m("The voracious vines lunged at your gaping mouth, their snakelike coils wrapping your throat in a strangling grip, rendering you speechless and breathless.");break;case"neck":E(Player,"NeckRope","ItemNeck",k,1),m("The relentless vines closed in on your neck, their grip unyielding, constricting like a tightening noose.");break;case"arms":E(Player,"HempRope","ItemArms",k,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"torso":E(Player,"HempRopeHarness","ItemTorso",k,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"torso2":E(Player,"HempRopeHarness","ItemTorso2",k,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"pelvis":E(Player,"HempRope","ItemPelvis",k,1),m("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"legs":E(Player,"HempRope","ItemLegs",k,1),m("The plant's sinuous tendrils coiled around your thighs, slowly constricting and pulling you deeper into their verdant embrace.");break;case"feet":E(Player,"HempRope","ItemFeet",k,1),m("The plant wraps around your legs, twisting and tightening its grip.");break;case"boots":E(Player,"ToeTie","ItemBoots",k,1),m("The massive, sinewy vines slithered around your fingers like living ropes, binding them together with an unbreakable, natural restraint.");break;default:break}}function ge(){let e=Math.floor(Math.random()*Z.length);return Z[e]}function ye(){let e=ge();Q(Player)&&m(e)}function H(){var e=[];for(var o in T)T[o]==0&&e.push(o);if(e.length>0){var n=Math.floor(Math.random()*e.length),s=e[n];return{bind:s,value:T[s]}}else return null}function ve(){let e=D/6*100,o=document.createElement("div");o.classList.add("maxLevel-bar"),o.style.width="200px",o.style.height="20px";let n=document.createElement("div");n.classList.add("eventLevel-fill"),n.style.width=`${e}%`,o.appendChild(n);let s=`
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
    `,d=document.createElement("style");return d.innerHTML=s,document.head.appendChild(d),o}function be(e,o="#6e6eff54",n,s,d,b=G*1e3){let u=document.createElement("div");u.setAttribute("class","ChatMessage ChatMessageLocalMessage"),u.setAttribute("data-time",ChatRoomCurrentTime()),u.setAttribute("data-sender",`${n??Player.MemberNumber??0}`),u.style.background=o,u.style.margin="0.15em 0";let w=typeof e=="string"?e:"[AES] "+e,$=document.createElement("div");$.innerText=w,u.appendChild($),eventLevelBar=ve(),u.appendChild(eventLevelBar);let P=document.createElement("button");P.classList.add("fancy-button"),P.innerHTML="&#10003;",P.addEventListener("click",()=>{s&&(s(),F())});let M=document.createElement("button");M.classList.add("fancy-button"),M.innerHTML="&#10007;",M.addEventListener("click",()=>{d&&(d(),F())}),u.appendChild(P),u.appendChild(M),setTimeout(()=>{d(),F()},b);let j=document.activeElement?.id==="InputChat",x=ElementIsScrolledToEnd("TextAreaChatLog"),N=document.getElementById("TextAreaChatLog");if(N!=null)return N.appendChild(u),x&&ElementScrollToEnd("TextAreaChatLog"),j&&ElementFocus("InputChat"),u;return null;function F(){u.remove()}}var Ee=re.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.0.1",repository:"https://github.com/ainaradev7/AES"});function V(e,o,n,s=null){return Se(e,o,n,s)}function Se(e,o,n,s=null){let d=Ee.hookFunction(e,o,n)}function z(e,o=null){ServerSend("ChatRoomChat",{Content:"AESMsg",Type:"Hidden",Dictionary:e})}V("ChatRoomMessage",10,(e,o)=>{let n=e[0];if(n?.Type==="Hidden"&&n.Content==="AESMsg"&&typeof n.Sender=="number"){if(console.log("OWN MESSAGE ${data.sender} and ${message} from "+n.Sender),console.log(n.Dictionary),n.Sender===Player.MemberNumber)return;if(!B(n.Dictionary)){console.warn("AES: Hidden message no Dictionary",n);return}if(n.sender===Player.MemberNumber)return;let{event:s,state:d}=eventData;if(typeof s=="string"&&typeof d=="string"){switch(s){case L.PLANT:oe(d);break;default:console.error("Evento no reconocido:",s)}console.log(`Received some data from AES from ${n.Sender}`);return}return o(e)}});function ke(){console.log("AES: Initiated"),V("LoginResponse",0,(e,o)=>{console.debug("AES: Init LoginResponse caught",e),o(e);let n=e[0];B(n)&&typeof n.Name=="string"&&n.AccountName}),q("AES Ready!"),console.log("[AES] initiated"),_(()=>{U(!0)},"start","green",50,50),_(()=>{W()},"stop","red",100,100),console.debug("BCX: Already logged in, init")}ke();})();
