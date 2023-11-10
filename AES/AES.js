(()=>{var oe=Object.create;var G=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ae=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var se=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports);var le=(t,o,n,s)=>{if(o&&typeof o=="object"||typeof o=="function")for(let c of re(o))!ie.call(t,c)&&c!==n&&G(t,c,{get:()=>o[c],enumerable:!(s=ne(o,c))||s.enumerable});return t};var de=(t,o,n)=>(n=t!=null?oe(ae(t)):{},le(o||!t||!t.__esModule?G(n,"default",{value:t,enumerable:!0}):n,t));var Y=se(H=>{var Ce=function(){"use strict";let t="1.1.0";function o(e){alert(`Mod ERROR:
`+e);let i=new Error(e);throw console.error(i),i}let n=new TextEncoder;function s(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function c(e){let i=new Set;return e.filter(a=>!i.has(a)&&i.add(a))}let C=new Map,g=new Set;function A(e){g.has(e)||(g.add(e),console.warn(e))}function T(e){let i=[],a=new Map,l=new Set;for(let p of E.values()){let f=p.patching.get(e.name);if(f){i.push(...f.hooks);for(let[d,r]of f.patches.entries())a.has(d)&&a.get(d)!==r&&A(`ModSDK: Mod '${p.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${d}
Patch1:
${a.get(d)||""}
Patch2:
${r}`),a.set(d,r),l.add(p.name)}}i.sort((p,f)=>f.priority-p.priority);let y=function(p,f){if(f.size===0)return p;let d=p.toString().replaceAll(`\r
`,`
`);for(let[r,u]of f.entries())d.includes(r)||A(`ModSDK: Patching ${p.name}: Patch ${r} not applied`),d=d.replaceAll(r,u);return(0,eval)(`(${d})`)}(e.original,a),w=function(p){var f,d;let r=(d=(f=O.errorReporterHooks).hookChainExit)===null||d===void 0?void 0:d.call(f,e.name,l),u=y.apply(this,p);return r?.(),u};for(let p=i.length-1;p>=0;p--){let f=i[p],d=w;w=function(r){var u,m;let v=(m=(u=O.errorReporterHooks).hookEnter)===null||m===void 0?void 0:m.call(u,e.name,f.mod),S=f.hook.apply(this,[r,P=>{if(arguments.length!==1||!Array.isArray(r))throw new Error(`Mod ${f.mod} failed to call next hook: Expected args to be array, got ${typeof P}`);return d.call(this,P)}]);return v?.(),S}}return{hooks:i,patches:a,patchesSources:l,enter:w,final:y}}function x(e,i=!1){let a=C.get(e);if(a)i&&(a.precomputed=T(a));else{let l=window,y=e.split(".");for(let d=0;d<y.length-1;d++)if(l=l[y[d]],!s(l))throw new Error(`ModSDK: Function ${e} to be patched not found; ${y.slice(0,d+1).join(".")} is not object`);let w=l[y[y.length-1]];if(typeof w!="function")throw new Error(`ModSDK: Function ${e} to be patched not found`);let p=function(d){let r=-1;for(let u of n.encode(d)){let m=255&(r^u);for(let v=0;v<8;v++)m=1&m?-306674912^m>>>1:m>>>1;r=r>>>8^m}return((-1^r)>>>0).toString(16).padStart(8,"0").toUpperCase()}(w.toString().replaceAll(`\r
`,`
`)),f={name:e,original:w,originalHash:p};a=Object.assign(Object.assign({},f),{precomputed:T(f),router:()=>{},context:l,contextProperty:y[y.length-1]}),a.router=function(d){return function(...r){return d.precomputed.enter.apply(this,[r])}}(a),C.set(e,a),l[a.contextProperty]=a.router}return a}function M(){let e=new Set;for(let i of E.values())for(let a of i.patching.keys())e.add(a);for(let i of C.keys())e.add(i);for(let i of e)x(i,!0)}function D(){let e=new Map;for(let[i,a]of C)e.set(i,{name:i,original:a.original,originalHash:a.originalHash,sdkEntrypoint:a.router,currentEntrypoint:a.context[a.contextProperty],hookedByMods:c(a.precomputed.hooks.map(l=>l.mod)),patchedByMods:Array.from(a.precomputed.patchesSources)});return e}let E=new Map;function L(e){E.get(e.name)!==e&&o(`Failed to unload mod '${e.name}': Not registered`),E.delete(e.name),e.loaded=!1,M()}function F(e,i,a){typeof e=="string"&&typeof i=="string"&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),e={name:e,fullName:e,version:i},i={allowReplace:a===!0}),e&&typeof e=="object"||o("Failed to register mod: Expected info object, got "+typeof e),typeof e.name=="string"&&e.name||o("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let l=`'${e.name}'`;typeof e.fullName=="string"&&e.fullName||o(`Failed to register mod ${l}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),l=`'${e.fullName} (${e.name})'`,typeof e.version!="string"&&o(`Failed to register mod ${l}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),e.repository!==void 0&&typeof e.repository!="string"&&o(`Failed to register mod ${l}: Expected repository to be undefined or string, got ${typeof e.version}`),i==null&&(i={}),i&&typeof i=="object"||o(`Failed to register mod ${l}: Expected options to be undefined or object, got ${typeof i}`);let y=i.allowReplace===!0,w=E.get(e.name);w&&(w.allowReplace&&y||o(`Refusing to load mod ${l}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),L(w));let p=r=>{typeof r=="string"&&r||o(`Mod ${l} failed to patch a function: Expected function name string, got ${typeof r}`);let u=d.patching.get(r);return u||(u={hooks:[],patches:new Map},d.patching.set(r,u)),u},f={unload:()=>L(d),hookFunction:(r,u,m)=>{d.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`);let v=p(r);typeof u!="number"&&o(`Mod ${l} failed to hook function '${r}': Expected priority number, got ${typeof u}`),typeof m!="function"&&o(`Mod ${l} failed to hook function '${r}': Expected hook function, got ${typeof m}`);let S={mod:d.name,priority:u,hook:m};return v.hooks.push(S),M(),()=>{let P=v.hooks.indexOf(S);P>=0&&(v.hooks.splice(P,1),M())}},patchFunction:(r,u)=>{d.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`);let m=p(r);s(u)||o(`Mod ${l} failed to patch function '${r}': Expected patches object, got ${typeof u}`);for(let[v,S]of Object.entries(u))typeof S=="string"?m.patches.set(v,S):S===null?m.patches.delete(v):o(`Mod ${l} failed to patch function '${r}': Invalid format of patch '${v}'`);M()},removePatches:r=>{d.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`),p(r).patches.clear(),M()},callOriginal:(r,u,m)=>(d.loaded||o(`Mod ${l} attempted to call SDK function after being unloaded`),typeof r=="string"&&r||o(`Mod ${l} failed to call a function: Expected function name string, got ${typeof r}`),Array.isArray(u)||o(`Mod ${l} failed to call a function: Expected args array, got ${typeof u}`),function(v,S,P=window){return x(v).original.apply(P,S)}(r,u,m)),getOriginalHash:r=>(typeof r=="string"&&r||o(`Mod ${l} failed to get hash: Expected function name string, got ${typeof r}`),x(r).originalHash)},d={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:y,api:f,loaded:!0,patching:new Map};return E.set(e.name,d),Object.freeze(f)}function te(){let e=[];for(let i of E.values())e.push({name:i.name,fullName:i.fullName,version:i.version,repository:i.repository});return e}let O,_=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let e={version:t,apiVersion:1,registerMod:F,getModsInfo:te,getPatchingInfo:D,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return O=e,Object.freeze(e)}();if(s(window.bcModSdk)||o("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&o(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==t&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let e=window.bcModSdk,i=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(a,l,y)=>a&&typeof a=="object"&&typeof a.name=="string"&&typeof a.version=="string"?e.registerMod(a.name,a.version,typeof l=="object"&&!!l&&l.allowReplace===!0):e.registerMod(a,l,y),_shim10register:!0}));window.bcModSdk=i}return window.bcModSdk}();return typeof H<"u"&&(Object.defineProperty(H,"__esModule",{value:!0}),H.default=_),_}()});function I(t){return Math.floor(Math.random()*t)}function W(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function z(t,o=3e3){ServerBeep={Timer:CommonTime()+o,Message:t}}function h(t,o="#6e6eff54",n,s){let c=document.createElement("div");c.setAttribute("class","ChatMessage ChatMessageLocalMessage"),c.setAttribute("data-time",ChatRoomCurrentTime()),c.setAttribute("data-sender",`${s??Player.MemberNumber??0}`),c.style.background=o,c.style.margin="0.15em 0",typeof t=="string"?c.innerText="[AES] "+t:c.appendChild("[AES] "+t);let C=document.activeElement?.id==="InputChat",g=ElementIsScrolledToEnd("TextAreaChatLog"),A=document.getElementById("TextAreaChatLog");return A!=null?(A.appendChild(c),g&&ElementScrollToEnd("TextAreaChatLog"),C&&ElementFocus("InputChat"),c):null}function U(){for(var t in ChatRoomCharacter)ChatRoomCharacterUpdate(t)}function V(t){var o=document.getElementById("MainCanvas"),n=document.createElement("div");n.textContent="Bot\xF3n",n.style.backgroundColor="blue",n.style.width="100px",n.style.height="40px",n.style.position="absolute";var s=o.getBoundingClientRect();n.style.left=s.left+50+"px",n.style.top=s.top+50+"px",n.addEventListener("click",function(){t()}),o.appendChild(n),document.body.appendChild(n)}var X=de(Y()),ce=X.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.01",repository:"https://github.com/Ainaradev7/AES"});function j(t,o,n,s=null){return ue(t,o,n,s)}function ue(t,o,n,s=null){let c=ce.hookFunction(t,o,n)}function R(t,o,n=null){ServerSend("ChatRoomChat",{Content:"AESMsg",Type:"Hidden",Target:n,Dictionary:{type:t,message:o}})}j("ChatRoomMessage",10,(t,o)=>{let n=t[0];if(n?.Type==="Hidden"&&n.Content==="AESMsg"&&typeof n.Sender=="number"){if(console.log("OWN MESSAGE ${data.sender} and ${message} from "+n.Sender),n.Sender===Player.MemberNumber)return;let{type:s,message:c}=n.Dictionary;typeof s=="string"&&console.log("`${data.sender} and ${message} from "+n.Sender);return}return o(t)});function b(t,o,n,s,c,C=!1){InventoryGet(t,n)==null&&InventoryWear(Player,o,n,s,c,!1)}function q(t){let o=["Cloth","ClothAccessory","Suit","ClothLower","SuitLower","Bra","Corset","Panties","SocksLeft","SocksRight","Socks","Garters","Shoes","Hat","Gloves","LeftHand","RightHand","Bracelet","Mask"],n=[];for(let s of o)InventoryGet(t,s)!=null&&n.push(s);if(n.length>0){let s=I(n.length);return InventoryRemove(t,n[s]),!0}else return CharacterNaked(Player),!1}var Z,B=0,k="#56AB56",K=3,J=["The relentless vines tore through my clothing as if they were ravenous for flesh.","With a ruthless determination, the sinewy vines shredded my attire into tatters.","The invasive vines left me exposed, ripping my clothes to shreds with their tenacious grip.","As the voracious vines ensnared me, my clothes fell victim to their insatiable appetite.","My garments were no match for the relentless onslaught of the entangling vines.","The vines didn't discriminate, mercilessly tearing apart both fabric and dignity.","In their unyielding grasp, the vines left my clothing in tatters, exposing my vulnerability.","The tenacious vines stripped away my defenses, leaving me exposed and helpless.","As the plant's grip tightened, my clothes succumbed to the relentless force of nature.","My attire disintegrated under the relentless assault of the encroaching vines, leaving me vulnerable to their relentless advance."],$={head:0,mouth:0,mouth2:0,mouth3:0,neck:0,arms:0,pelvis:0,torso:0,torso2:0,legs:0,feet:0,boots:0};function ee(){console.log("AES: A plant invasion has started"),h("A plant invasion has started"),R("PlantEvent","test",Player),R("PlantEvent","test",Player),R("PlantEvent","test",Player),Z=setInterval(function(){fe()},K*1e3)}function pe(){console.log("AES: A plant invasion has finished"),h("A plant invasion has finished"),clearInterval(Z);for(var t in $)$[t]=0;R("PlantEvent","end",Player)}function fe(){var t=0;for(var o in $)t+=$[o];B++;let n=I(51)+B*5+t;ve("Some vines are approaching to you, do you want to fight back?","#6e6eff54",null,()=>{Q(n,I(101))},()=>{Q(n,0),console.log("Rendirse")},K*1e3),R("PlantEvent","test",Player)}function Q(t,o){var n=`You fought against the plants: 
 You: `+o+" - Vines: "+t;if(t>o){var s=I(2);s==0&&N()!=null||s==1&&N()!=null&&CharacterIsNaked(Player)?(n+=`
 Vines are looking to restrain your body.`,h(n,"#FFF2CC"),he()):s==1&&!CharacterIsNaked(Player)||s==0&&!CharacterIsNaked(Player)&&N()==null?(n+=`
 Vines are tearing down your clothing.`,h(n,"#FFF2CC"),ge()):(n+=`
 Vines stopped moving as they got you fully bound.`,h(n,"#FFF2CC"),pe()),B=0}else h(n,"#FFF2CC");console.log("[AES] eventLevel up! - "+B),U()}function he(){var t=N();switch($[t.bind]++,t.bind){case"head":b(Player,"RopeBlindfold","ItemHead",k,1),h("The vines, like stealthy intruders, approached your face. With a swift and deliberate move, they placed a leafy blindfold over your eyes, shrouding you in impenetrable darkness.");break;case"mouth":b(Player,"ClothStuffing","ItemMouth",k,1),h("The vines swiftly moved towards your mouth, coiling tightly with a sinister intent.");break;case"mouth2":b(Player,"HempRope","ItemMouth2",k,1),h("The menacing vines lunged at your mouth, their aggressive coils silencing your protests with a brutal grip.");break;case"mouth3":b(Player,"ClothGag","ItemMouth3","#357035",1),h("The voracious vines lunged at your gaping mouth, their snakelike coils wrapping your throat in a strangling grip, rendering you speechless and breathless.");break;case"neck":b(Player,"NeckRope","ItemNeck",k,1),h("The relentless vines closed in on your neck, their grip unyielding, constricting like a tightening noose.");break;case"arms":b(Player,"HempRope","ItemArms",k,1),h("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"torso":b(Player,"HempRopeHarness","ItemTorso",k,1),h("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"torso2":b(Player,"HempRopeHarness","ItemTorso2",k,1),h("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"pelvis":b(Player,"HempRope","ItemPelvis",k,1),h("The vines slithered up your arms, coiling and constricting as they entangled you.");break;case"legs":b(Player,"HempRope","ItemLegs",k,1),h("The plant's sinuous tendrils coiled around your thighs, slowly constricting and pulling you deeper into their verdant embrace.");break;case"feet":b(Player,"HempRope","ItemFeet",k,1),h("The plant wraps around your legs, twisting and tightening its grip.");break;case"boots":b(Player,"ToeTie","ItemBoots",k,1),h("The massive, sinewy vines slithered around your fingers like living ropes, binding them together with an unbreakable, natural restraint.");break;default:break}}function me(){let t=Math.floor(Math.random()*J.length);return J[t]}function ge(){let t=me();q(Player)&&h(t)}function N(){var t=[];for(var o in $)$[o]==0&&t.push(o);if(t.length>0){var n=Math.floor(Math.random()*t.length),s=t[n];return{bind:s,value:$[s]}}else return null}function ye(){let t=B/6*100,o=document.createElement("div");o.classList.add("maxLevel-bar"),o.style.width="200px",o.style.height="20px";let n=document.createElement("div");n.classList.add("eventLevel-fill"),n.style.width=`${t}%`,o.appendChild(n),div.appendChild(o);let s=`
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
    `,c=document.createElement("style");return c.innerHTML=s,document.head.appendChild(c),o}function ve(t,o="#6e6eff54",n,s,c,C=K*1e3){let g=document.createElement("div");g.setAttribute("class","ChatMessage ChatMessageLocalMessage"),g.setAttribute("data-time",ChatRoomCurrentTime()),g.setAttribute("data-sender",`${n??Player.MemberNumber??0}`),g.style.background=o,g.style.margin="0.15em 0";let A=typeof t=="string"?t:"[AES] "+t,T=document.createElement("div");T.innerText=A,g.appendChild(T),eventLevelBar=ye(),g.appendChild(eventLevelBar);let x=document.createElement("button");x.classList.add("fancy-button"),x.innerHTML="&#10003;",x.addEventListener("click",()=>{s&&(s(),F())});let M=document.createElement("button");M.classList.add("fancy-button"),M.innerHTML="&#10007;",M.addEventListener("click",()=>{c&&(c(),F())}),g.appendChild(x),g.appendChild(M),setTimeout(()=>{c(),F()},C);let D=document.activeElement?.id==="InputChat",E=ElementIsScrolledToEnd("TextAreaChatLog"),L=document.getElementById("TextAreaChatLog");if(L!=null)return L.appendChild(g),E&&ElementScrollToEnd("TextAreaChatLog"),D&&ElementFocus("InputChat"),g;return null;function F(){g.remove()}}function be(){console.log("AES: Initiated"),CurrentScreen==null||CurrentScreen==="Login"?(j("LoginResponse",0,(t,o)=>{console.debug("AES: Init LoginResponse caught",t),o(t);let n=t[0];W(n)&&typeof n.Name=="string"&&n.AccountName}),z("AES Ready!"),console.log("[AES] initiated"),V(()=>{ee()})):console.debug("BCX: Already logged in, init")}be();})();
