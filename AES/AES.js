(()=>{var T=Object.create;var O=Object.defineProperty;var V=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,q=Object.prototype.hasOwnProperty;var J=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Q=(n,t,g,y)=>{if(t&&typeof t=="object"||typeof t=="function")for(let v of U(t))!q.call(n,v)&&v!==g&&O(n,v,{get:()=>t[v],enumerable:!(y=V(t,v))||y.enumerable});return n};var X=(n,t,g)=>(g=n!=null?T(G(n)):{},Q(t||!n||!n.__esModule?O(g,"default",{value:n,enumerable:!0}):g,n));var K=J($=>{var ne=function(){"use strict";let n="1.1.0";function t(e){alert(`Mod ERROR:
`+e);let a=new Error(e);throw console.error(a),a}let g=new TextEncoder;function y(e){return!!e&&typeof e=="object"&&!Array.isArray(e)}function v(e){let a=new Set;return e.filter(r=>!a.has(r)&&a.add(r))}let w=new Map,x=new Set;function A(e){x.has(e)||(x.add(e),console.warn(e))}function j(e){let a=[],r=new Map,i=new Set;for(let d of b.values()){let l=d.patching.get(e.name);if(l){a.push(...l.hooks);for(let[s,o]of l.patches.entries())r.has(s)&&r.get(s)!==o&&A(`ModSDK: Mod '${d.name}' is patching function ${e.name} with same pattern that is already applied by different mod, but with different pattern:
Pattern:
${s}
Patch1:
${r.get(s)||""}
Patch2:
${o}`),r.set(s,o),i.add(d.name)}}a.sort((d,l)=>l.priority-d.priority);let p=function(d,l){if(l.size===0)return d;let s=d.toString().replaceAll(`\r
`,`
`);for(let[o,c]of l.entries())s.includes(o)||A(`ModSDK: Patching ${d.name}: Patch ${o} not applied`),s=s.replaceAll(o,c);return(0,eval)(`(${s})`)}(e.original,r),m=function(d){var l,s;let o=(s=(l=R.errorReporterHooks).hookChainExit)===null||s===void 0?void 0:s.call(l,e.name,i),c=p.apply(this,d);return o?.(),c};for(let d=a.length-1;d>=0;d--){let l=a[d],s=m;m=function(o){var c,f;let u=(f=(c=R.errorReporterHooks).hookEnter)===null||f===void 0?void 0:f.call(c,e.name,l.mod),h=l.hook.apply(this,[o,k=>{if(arguments.length!==1||!Array.isArray(o))throw new Error(`Mod ${l.mod} failed to call next hook: Expected args to be array, got ${typeof k}`);return s.call(this,k)}]);return u?.(),h}}return{hooks:a,patches:r,patchesSources:i,enter:m,final:p}}function I(e,a=!1){let r=w.get(e);if(r)a&&(r.precomputed=j(r));else{let i=window,p=e.split(".");for(let s=0;s<p.length-1;s++)if(i=i[p[s]],!y(i))throw new Error(`ModSDK: Function ${e} to be patched not found; ${p.slice(0,s+1).join(".")} is not object`);let m=i[p[p.length-1]];if(typeof m!="function")throw new Error(`ModSDK: Function ${e} to be patched not found`);let d=function(s){let o=-1;for(let c of g.encode(s)){let f=255&(o^c);for(let u=0;u<8;u++)f=1&f?-306674912^f>>>1:f>>>1;o=o>>>8^f}return((-1^o)>>>0).toString(16).padStart(8,"0").toUpperCase()}(m.toString().replaceAll(`\r
`,`
`)),l={name:e,original:m,originalHash:d};r=Object.assign(Object.assign({},l),{precomputed:j(l),router:()=>{},context:i,contextProperty:p[p.length-1]}),r.router=function(s){return function(...o){return s.precomputed.enter.apply(this,[o])}}(r),w.set(e,r),i[r.contextProperty]=r.router}return r}function M(){let e=new Set;for(let a of b.values())for(let r of a.patching.keys())e.add(r);for(let a of w.keys())e.add(a);for(let a of e)I(a,!0)}function z(){let e=new Map;for(let[a,r]of w)e.set(a,{name:a,original:r.original,originalHash:r.originalHash,sdkEntrypoint:r.router,currentEntrypoint:r.context[r.contextProperty],hookedByMods:v(r.precomputed.hooks.map(i=>i.mod)),patchedByMods:Array.from(r.precomputed.patchesSources)});return e}let b=new Map;function P(e){b.get(e.name)!==e&&t(`Failed to unload mod '${e.name}': Not registered`),b.delete(e.name),e.loaded=!1,M()}function W(e,a,r){typeof e=="string"&&typeof a=="string"&&(alert(`Mod SDK warning: Mod '${e}' is registering in a deprecated way.
It will work for now, but please inform author to update.`),e={name:e,fullName:e,version:a},a={allowReplace:r===!0}),e&&typeof e=="object"||t("Failed to register mod: Expected info object, got "+typeof e),typeof e.name=="string"&&e.name||t("Failed to register mod: Expected name to be non-empty string, got "+typeof e.name);let i=`'${e.name}'`;typeof e.fullName=="string"&&e.fullName||t(`Failed to register mod ${i}: Expected fullName to be non-empty string, got ${typeof e.fullName}`),i=`'${e.fullName} (${e.name})'`,typeof e.version!="string"&&t(`Failed to register mod ${i}: Expected version to be string, got ${typeof e.version}`),e.repository||(e.repository=void 0),e.repository!==void 0&&typeof e.repository!="string"&&t(`Failed to register mod ${i}: Expected repository to be undefined or string, got ${typeof e.version}`),a==null&&(a={}),a&&typeof a=="object"||t(`Failed to register mod ${i}: Expected options to be undefined or object, got ${typeof a}`);let p=a.allowReplace===!0,m=b.get(e.name);m&&(m.allowReplace&&p||t(`Refusing to load mod ${i}: it is already loaded and doesn't allow being replaced.
Was the mod loaded multiple times?`),P(m));let d=o=>{typeof o=="string"&&o||t(`Mod ${i} failed to patch a function: Expected function name string, got ${typeof o}`);let c=s.patching.get(o);return c||(c={hooks:[],patches:new Map},s.patching.set(o,c)),c},l={unload:()=>P(s),hookFunction:(o,c,f)=>{s.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`);let u=d(o);typeof c!="number"&&t(`Mod ${i} failed to hook function '${o}': Expected priority number, got ${typeof c}`),typeof f!="function"&&t(`Mod ${i} failed to hook function '${o}': Expected hook function, got ${typeof f}`);let h={mod:s.name,priority:c,hook:f};return u.hooks.push(h),M(),()=>{let k=u.hooks.indexOf(h);k>=0&&(u.hooks.splice(k,1),M())}},patchFunction:(o,c)=>{s.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`);let f=d(o);y(c)||t(`Mod ${i} failed to patch function '${o}': Expected patches object, got ${typeof c}`);for(let[u,h]of Object.entries(c))typeof h=="string"?f.patches.set(u,h):h===null?f.patches.delete(u):t(`Mod ${i} failed to patch function '${o}': Invalid format of patch '${u}'`);M()},removePatches:o=>{s.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`),d(o).patches.clear(),M()},callOriginal:(o,c,f)=>(s.loaded||t(`Mod ${i} attempted to call SDK function after being unloaded`),typeof o=="string"&&o||t(`Mod ${i} failed to call a function: Expected function name string, got ${typeof o}`),Array.isArray(c)||t(`Mod ${i} failed to call a function: Expected args array, got ${typeof c}`),function(u,h,k=window){return I(u).original.apply(k,h)}(o,c,f)),getOriginalHash:o=>(typeof o=="string"&&o||t(`Mod ${i} failed to get hash: Expected function name string, got ${typeof o}`),I(o).originalHash)},s={name:e.name,fullName:e.fullName,version:e.version,repository:e.repository,allowReplace:p,api:l,loaded:!0,patching:new Map};return b.set(e.name,s),Object.freeze(l)}function _(){let e=[];for(let a of b.values())e.push({name:a.name,fullName:a.fullName,version:a.version,repository:a.repository});return e}let R,D=function(){if(window.bcModSdk===void 0)return window.bcModSdk=function(){let e={version:n,apiVersion:1,registerMod:W,getModsInfo:_,getPatchingInfo:z,errorReporterHooks:Object.seal({hookEnter:null,hookChainExit:null})};return R=e,Object.freeze(e)}();if(y(window.bcModSdk)||t("Failed to init Mod SDK: Name already in use"),window.bcModSdk.apiVersion!==1&&t(`Failed to init Mod SDK: Different version already loaded ('1.1.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==n&&(alert(`Mod SDK warning: Loading different but compatible versions ('1.1.0' vs '${window.bcModSdk.version}')
One of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk.version.startsWith("1.0.")&&window.bcModSdk._shim10register===void 0)){let e=window.bcModSdk,a=Object.freeze(Object.assign(Object.assign({},e),{registerMod:(r,i,p)=>r&&typeof r=="object"&&typeof r.name=="string"&&typeof r.version=="string"?e.registerMod(r.name,r.version,typeof i=="object"&&!!i&&i.allowReplace===!0):e.registerMod(r,i,p),_shim10register:!0}));window.bcModSdk=a}return window.bcModSdk}();return typeof $<"u"&&(Object.defineProperty($,"__esModule",{value:!0}),$.default=D),D}()});var L=X(K());function F(n,t=3e3){ServerBeep={Timer:CommonTime()+t,Message:n}}function E(n,t,g,y,v,w=!1){InventoryGet(n,g)==null&&InventoryWear(Player,t,g,y,v,!1)}function H(n){switch(getRandomInt(20)){case 0:InventoryRemove(n,"Cloth");break;case 1:InventoryRemove(n,"ClothAccessory");break;case 2:InventoryRemove(n,"Suit");break;case 3:InventoryRemove(n,"ClothLower");break;case 4:InventoryRemove(n,"SuitLower");break;case 5:InventoryRemove(n,"Bra");break;case 6:InventoryRemove(n,"Corset");break;case 7:InventoryRemove(n,"Panties");break;case 8:InventoryRemove(n,"SocksLeft");break;case 9:InventoryRemove(n,"SocksRight");break;case 10:InventoryRemove(n,"Socks");break;case 11:InventoryRemove(n,"Garters");break;case 12:InventoryRemove(n,"Shoes");break;case 13:InventoryRemove(n,"Hat");break;case 14:InventoryRemove(n,"Gloves");break;case 15:InventoryRemove(n,"LeftHand");break;case 16:InventoryRemove(n,"RightHand");break;case 17:InventoryRemove(n,"Bracelet");break;case 18:InventoryRemove(n,"Mask");break;default:break}}var B,S=0,N="#56AB56";function C(){console.log("AES: A plant invasion has started"),B=setInterval(function(){Z()},5*1e3)}function Y(){clearInterval(B)}function Z(){let n=getRandomInt(51),t=getRandomInt(101);n>t&&(ee(),S++)}function ee(){switch(S){case 0:break;case 1:E(Player,"HempRope","ItemLegs",N,1);break;case 2:E(Player,"HempRope","ItemArms",N,1);break;case 3:break;default:break}S>10&&H(player),S>100&&Y()}var fe=L.default.registerMod({name:"AES",fullName:"Ainaras Event Mod",version:"0.01",repository:"https://github.com/Ainaradev7/AES"});function oe(){console.log("AES: Initiated"),F("AES: Initiated"),C()}oe();})();
