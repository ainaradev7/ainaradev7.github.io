(()=>{var V=Object.create;var K=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var q=Object.getPrototypeOf,J=Object.prototype.hasOwnProperty;var Q=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var X=(t,n,g,y)=>{if(n&&typeof n=="object"||typeof n=="function")for(let v of G(n))!J.call(t,v)&&v!==g&&K(t,v,{get:()=>n[v],enumerable:!(y=U(n,v))||y.enumerable});return t};var Y=(t,n,g)=>(g=t!=null?V(q(t)):{},X(n||!t||!t.__esModule?K(g,"default",{value:t,enumerable:!0}):g,t));var F=Q(S=>{var re=function(){"use strict";let t="1.1.0";function n(e){alert(`Mod ERROR:
`+e);let a=new Error(e);throw console.error(a),a}let g=new TextEncoder;function y(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function v(e){let a=new Set;return e.filter(r=>!a.has(r)&&a.add(r))}let w=new Map,A=new Set;function j(e){A.has(e)||(A.add(e),console.warn(e))}function P(e){let a=[],r=new Map,i=new Set;for(let d of b.values()){let l=d.patching.get(e.name);if(l){a.push(...l.hooks);for(let[s,o]of l.patches.entries())r.has(s)&&r.get(s)!==o&&j(`ModSDK: Mod '${d.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${s}
Patch1:
${r.get(s)||""}
Patch2:
${o}`),r.set(s,o),i.add(d.name)}}a.sort((d,l)=>l.priority-d.priority);let p=function(d,l){if(l.size===0)return d;let s=d.toString().replaceAll(`\r
`,`
`);for(let[o,c]of l.entries())s.includes(o)||j(`ModSDK: Patching ${d.name}: Patch ${o} not applied`),s=s.replaceAll(o,c);return(0,eval)(`(${s})`)}(e.original,r),m=function(d){var l,s;let o=(s=(l=E.errorReporterHooks).hookChainExit)===null||s===void 0?void 0:s.call(l,e.name,i),c=p.apply(this,d);return o?.(),c};for(let d=a.length-1;d>=0;d--){let l=a[d],s=m;m=function(o){var c,f;let u=(f=(c=E.errorReporterHooks).hookEnter)===null||f===void 0?void 0:f.call(c,e.name,l.mod),h=l.hook.apply(this,[o,k=>{if(arguments.length!==1||!Array.isArray(o))throw new Error(`Mod ${l.mod} failed to call next hook: Expected args to be array, got ${typeof k}`);return s.call(this,k)}]);return u?.(),h}}return{hooks:a,patches:r,patchesSources:i,enter:m,final:p}}function R(e,a=!1){let r=w.get(e);if(r)a&&(r.precomputed=P(r));else{let i=window,p=e.split(".");for(let s=0;s<p.length-1;s++)if(i=i[p[s]],!y(i))throw new Error(`ModSDK: Function ${e} to be patched not found; ${p.slice(0,s+1).join(".")} is not object`);let m=i[p[p.length-1]];if(typeof m!="function")throw new Error(`ModSDK: Function ${e} to be patched not found`);let d=function(s){let o=-1;for(let c of g.encode(s)){let f=255&(o^c);for(let u=0;u<8;u++)f=1&f?-306674912^f>>>1:f>>>1;o=o>>>8^f}return((-1^o)>>>0).toString(16).padStart(8,"0").toUpperCase()}(m.toString().replaceAll(`\r
`,`
`)),l={name:e,original:m,originalHash:d};r=Object.assign(Object.assign({},l),{precomputed:P(l),router:()=>{},context:i,contextProperty:p[p.length-1]}),r.router=function(s){return function(...o){return s.precomputed.enter.apply(this,[o])}}(r),w.set(e,r),i[r.contextProperty]=r.router}return r}function M(){let e=new Set;for(let a of b.values())for(let r of a.patching.keys())e.add(r);for(let a of w.keys())e.add(a);for(let a of e)R(a,!0)}function W(){let e=new Map;for(let[a,r]of w)e.set(a,{name:a,original:r.original,originalHash:r.originalHash,sdkEntrypoint:r.router,currentEntrypoint:r.context[r.contextProperty],hookedByMods:v(r.precomputed.hooks.map(i=>i.mod)),patchedByMods:Array.from(r.precomputed.patchesSources)});return e}let b=new Map;function D(e){b.get(e.name)!==e&&n(`Failed to unload mod '${e.name}': Not registered`),b.delete(e.name),e.loaded=!1,M()}function _(e,a,r){typeof e=="string"&&typeof a=="string"&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),e={name:e,fullName:e,version:a},a={allowReplace:r===!0}),e&&typeof e=="object"||n("Failed to register mod: Expected info object, got "+typeof e),typeof e.name=="string"&&e.name||n("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let i=`'${e.name}'`;typeof e.fullName=="string"&&e.fullName||n(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),i=`'${e.fullName} (${e.name})'`,typeof e.version!="string"&&n(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),e.repository!==void 0&&typeof e.repository!="string"&&n(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`),a==null&&(a={}),a&&typeof a=="object"||n(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof a}`);let p=a.allowReplace===!0,m=b.get(e.name);m&&(m.allowReplace&&p||n(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),D(m));let d=o=>{typeof o=="string"&&o||n(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof o}`);let c=s.patching.get(o);return c||(c={hooks:[],patches:new Map},s.patching.set(o,c)),c},l={unload:()=>D(s),hookFunction:(o,c,f)=>{s.loaded||n(`Mod ${i} attempted to call SDK function after being unloaded`);let u=d(o);typeof c!="number"&&n(`Mod ${i} failed to hook function '${o}': Expected priority number, got ${typeof c}`),typeof f!="function"&&n(`Mod ${i} failed to hook function '${o}': Expected hook function, got ${typeof f}`);let h={mod:s.name,priority:c,hook:f};return u.hooks.push(h),M(),()=>{let k=u.hooks.indexOf(h);k>=0&&(u.hooks.splice(k,1),M())}},patchFunction:(o,c)=>{s.loaded||n(`Mod ${i} attempted to call SDK function after being unloaded`);let f=d(o);y(c)||n(`Mod ${i} failed to patch function '${o}': Expected patches object, got ${typeof c}`);for(let[u,h]of Object.entries(c))typeof h=="string"?f.patches.set(u,h):h===null?f.patches.delete(u):n(`Mod ${i} failed to patch function '${o}': Invalid format of patch '${u}'`);M()},removePatches:o=>{s.loaded||n(`Mod ${i} attempted to call SDK function after being unloaded`),d(o).patches.clear(),M()},callOriginal:(o,c,f)=>(s.loaded||n(`Mod ${i} attempted to call SDK function after being unloaded`),typeof o=="string"&&o||n(`Mod ${i} failed to call a function: Expected function name string, got ${typeof o}`),Array.isArray(c)||n(`Mod ${i} failed to call a function: Expected args array, got ${typeof c}`),function(u,h,k=window){return R(u).original.apply(k,h)}(o,c,f)),getOriginalHash:o=>(typeof o=="string"&&o||n(`Mod ${i} failed to get hash: Expected function name string, got ${typeof o}`),R(o).originalHash)},s={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:p,api:l,loaded:!0,patching:new Map};return b.set(e.name,s),Object.freeze(l)}function T(){let e=[];for(let a of b.values())e.push({name:a.name,fullName:a.fullName,version:a.version,repository:a.repository});return e}let E,O=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let e={version:t,apiVersion:1,registerMod:_,getModsInfo:T,getPatchingInfo:W,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return E=e,Object.freeze(e)}();if(y(window.bcModSdk)||n("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&n(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==t&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let e=window.bcModSdk,a=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(r,i,p)=>r&&typeof r=="object"&&typeof r.name=="string"&&typeof r.version=="string"?e.registerMod(r.name,r.version,typeof i=="object"&&!!i&&i.allowReplace===!0):e.registerMod(r,i,p),_shim10register:!0}));window.bcModSdk=a}return window.bcModSdk}();return typeof S<"u"&&(Object.defineProperty(S,"__esModule",{value:!0}),S.default=O),O}()});var z=Y(F());function H(t,n=3e3){ServerBeep={Timer:CommonTime()+n,Message:t}}function $(t){return Math.floor(Math.random()*t)}function x(t,n,g,y,v,w=!1){InventoryGet(t,g)==null&&InventoryWear(Player,n,g,y,v,!1)}function N(t){switch($(20)){case 0:InventoryRemove(t,"Cloth");break;case 1:InventoryRemove(t,"ClothAccessory");break;case 2:InventoryRemove(t,"Suit");break;case 3:InventoryRemove(t,"ClothLower");break;case 4:InventoryRemove(t,"SuitLower");break;case 5:InventoryRemove(t,"Bra");break;case 6:InventoryRemove(t,"Corset");break;case 7:InventoryRemove(t,"Panties");break;case 8:InventoryRemove(t,"SocksLeft");break;case 9:InventoryRemove(t,"SocksRight");break;case 10:InventoryRemove(t,"Socks");break;case 11:InventoryRemove(t,"Garters");break;case 12:InventoryRemove(t,"Shoes");break;case 13:InventoryRemove(t,"Hat");break;case 14:InventoryRemove(t,"Gloves");break;case 15:InventoryRemove(t,"LeftHand");break;case 16:InventoryRemove(t,"RightHand");break;case 17:InventoryRemove(t,"Bracelet");break;case 18:InventoryRemove(t,"Mask");break;default:break}}var C,I=0,B="#56AB56";function L(){console.log("AES: A plant invasion has started"),C=setInterval(function(){ee()},1*1e3)}function Z(){clearInterval(C)}function ee(){$(51)>0&&(oe(),I++,console.log("[AES] level up!"))}function oe(){switch(I){case 0:break;case 1:x(Player,"HempRope","ItemLegs",B,1);break;case 2:x(Player,"HempRope","ItemArms",B,1);break;case 3:break;default:break}I>10&&N(Player),I>250&&Z()}var ge=z.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.01",repository:"https://github.com/Ainaradev7/AES"});function te(){console.log("AES: Initiated"),H("AES: Initiated"),L()}te();})();
