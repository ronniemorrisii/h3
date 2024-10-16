"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[2220],{5680:(e,l,a)=>{a.d(l,{xA:()=>f,yg:()=>d});var n=a(6540);function t(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function r(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?r(Object(a),!0).forEach((function(l){t(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function i(e,l){if(null==e)return{};var a,n,t=function(e,l){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||(t[a]=e[a]);return t}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=n.createContext({}),s=function(e){var l=n.useContext(c),a=l;return e&&(a="function"==typeof e?e(l):o(o({},l),e)),a},f=function(e){var l=s(e.components);return n.createElement(c.Provider,{value:l},e.children)},p={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},u=n.forwardRef((function(e,l){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=t,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return a?n.createElement(h,o(o({ref:l},f),{},{components:a})):n.createElement(h,o({ref:l},f))}));function d(e,l){var a=arguments,t=l&&l.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var c in l)hasOwnProperty.call(l,c)&&(i[c]=l[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9365:(e,l,a)=>{a.d(l,{A:()=>o});var n=a(6540),t=a(53);const r="tabItem_Ymn6";function o(e){let{children:l,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,t.A)(r,o),hidden:a},l)}},1470:(e,l,a)=>{a.d(l,{A:()=>N});var n=a(8168),t=a(6540),r=a(53),o=a(3104),i=a(2681),c=a(7485),s=a(1682),f=a(9466);function p(e){return function(e){var l,a;return null!=(l=null==(a=t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?l:[]}(e).map((e=>{let{props:{value:l,label:a,attributes:n,default:t}}=e;return{value:l,label:a,attributes:n,default:t}}))}function u(e){const{values:l,children:a}=e;return(0,t.useMemo)((()=>{const e=null!=l?l:p(a);return function(e){const l=(0,s.X)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[l,a])}function d(e){let{value:l,tabValues:a}=e;return a.some((e=>e.value===l))}function h(e){let{queryString:l=!1,groupId:a}=e;const n=(0,i.W6)(),r=function(e){let{queryString:l=!1,groupId:a}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:l,groupId:a});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const l=new URLSearchParams(n.location.search);l.set(r,e),n.replace({...n.location,search:l.toString()})}),[r,n])]}function g(e){const{defaultValue:l,queryString:a=!1,groupId:n}=e,r=u(e),[o,i]=(0,t.useState)((()=>function(e){var l;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const t=null!=(l=n.find((e=>e.default)))?l:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:r}))),[c,s]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:l}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(l),[n,r]=(0,f.Dv)(a);return[n,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),m=(()=>{const e=null!=c?c:p;return d({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);i(e),s(e),g(e)}),[s,g,r]),tabValues:r}}var m=a(2303);const y="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:l,block:a,selectedValue:i,selectValue:c,tabValues:s}=e;const f=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),u=e=>{const l=e.currentTarget,a=f.indexOf(l),n=s[a].value;n!==i&&(p(l),c(n))},d=e=>{var l;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var n;const l=f.indexOf(e.currentTarget)+1;a=null!=(n=f[l])?n:f[0];break}case"ArrowLeft":{var t;const l=f.indexOf(e.currentTarget)-1;a=null!=(t=f[l])?t:f[f.length-1];break}}null==(l=a)||l.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},l)},s.map((e=>{let{value:l,label:a,attributes:o}=e;return t.createElement("li",(0,n.A)({role:"tab",tabIndex:i===l?0:-1,"aria-selected":i===l,key:l,ref:e=>f.push(e),onKeyDown:d,onClick:u},o,{className:(0,r.A)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":i===l})}),null!=a?a:l)})))}function T(e){let{lazy:l,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(l){const e=r.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},r.map(((e,l)=>(0,t.cloneElement)(e,{key:l,hidden:e.props.value!==n}))))}function C(e){const l=g(e);return t.createElement("div",{className:(0,r.A)("tabs-container",y)},t.createElement(b,(0,n.A)({},e,l)),t.createElement(T,(0,n.A)({},e,l)))}function N(e){const l=(0,m.A)();return t.createElement(C,(0,n.A)({key:String(l)},e))}},5286:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>f,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(8168),t=(a(6540),a(5680)),r=a(1470),o=a(9365);const i={id:"hierarchy",title:"Hierarchical grid functions",sidebar_label:"Hierarchy",slug:"/api/hierarchy"},c=void 0,s={unversionedId:"api/hierarchy",id:"api/hierarchy",title:"Hierarchical grid functions",description:"These functions permit moving between resolutions in the H3 grid system. The functions produce parent cells (coarser), or child cells (finer).",source:"@site/docs/api/hierarchy.mdx",sourceDirName:"api",slug:"/api/hierarchy",permalink:"/docs/api/hierarchy",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/api/hierarchy.mdx",tags:[],version:"current",frontMatter:{id:"hierarchy",title:"Hierarchical grid functions",sidebar_label:"Hierarchy",slug:"/api/hierarchy"},sidebar:"someSidebar",previous:{title:"Traversal",permalink:"/docs/api/traversal"},next:{title:"Regions",permalink:"/docs/api/regions"}},f={},p=[{value:"cellToParent",id:"celltoparent",level:2},{value:"cellToChildren",id:"celltochildren",level:2},{value:"cellToChildrenSize",id:"celltochildrensize",level:2},{value:"cellToCenterChild",id:"celltocenterchild",level:2},{value:"cellToChildPos",id:"celltochildpos",level:2},{value:"childPosToCell",id:"childpostocell",level:2},{value:"compactCells",id:"compactcells",level:2},{value:"uncompactCells",id:"uncompactcells",level:2},{value:"uncompactCellsSize",id:"uncompactcellssize",level:2}],u={toc:p};function d(e){let{components:l,...a}=e;return(0,t.yg)("wrapper",(0,n.A)({},u,a,{components:l,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"These functions permit moving between resolutions in the H3 grid system. The functions produce parent cells (coarser), or child cells (finer)."),(0,t.yg)("h2",{id:"celltoparent"},"cellToParent"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Error cellToParent(H3Index cell, int parentRes, H3Index *parent);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"long cellToParent(long cell, int parentRes);\nString cellToParentAddress(String cellAddress, int parentRes);\n"))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"h3.cellToParent(cell, parentRes)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToParent(cell, 4);\n}\n"))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_parent(cell, parent_res)\n"))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 cellToParent --help\nh3: Returns the H3 index that is the parent (or higher) of the provided cell\nH3 4.1.0\n\n    cellToParent    Returns the H3 index that is the parent (or higher) of the provided cell\n    -h, --help  Show this help message.\n    -c, --cell <index>  Required. H3 Cell\n    -r, --resolution <res>  Required. Resolution, 0-14 inclusive, excluding 15 as it can never be a parent\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ h3 cellToParent -c 85283473fffffff -r 4\n8428347ffffffff\n")))),(0,t.yg)("p",null,"Provides the parent (coarser) index containing ",(0,t.yg)("inlineCode",{parentName:"p"},"cell"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"celltochildren"},"cellToChildren"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Error cellToChildren(H3Index cell, int childRes, H3Index *children);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"List<Long> cellToChildren(long cell, int childRes);\nList<String> cellToChildren(String cellAddress, int childRes);\n"))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"h3.cellToChildren(cell, childRes)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToChildren(cell, 6);\n}\n"))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_children(cell, child_res)\n"))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 cellToChildren --help\nh3: Returns a JSON array of H3 indexes that are the children (or lower) of the provided cell\nH3 4.1.0\n\n    cellToChildren  Returns a JSON array of H3 indexes that are the children (or lower) of the provided cell\n    -h, --help  Show this help message.\n    -c, --cell <index>  Required. H3 Cell\n    -r, --resolution <res>  Required. Resolution, 1-15 inclusive, excluding 0 as it can never be a child\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},'$ h3 cellToChildren -c 85283473fffffff -r 6\n[ "862834707ffffff", "86283470fffffff", "862834717ffffff", "86283471fffffff", "862834727ffffff", "86283472fffffff", "862834737ffffff" ]\n')))),(0,t.yg)("p",null,"Populates ",(0,t.yg)("inlineCode",{parentName:"p"},"children")," with the indexes contained by ",(0,t.yg)("inlineCode",{parentName:"p"},"cell")," at resolution ",(0,t.yg)("inlineCode",{parentName:"p"},"childRes"),". ",(0,t.yg)("inlineCode",{parentName:"p"},"children")," must be an array of at least size ",(0,t.yg)("inlineCode",{parentName:"p"},"cellToChildrenSize(cell, childRes)"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"celltochildrensize"},"cellToChildrenSize"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Error cellToChildrenSize(H3Index cell, int childRes, int64_t *out);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 cellToChildrenSize --help\nh3: Returns the maximum number of children for a given cell at the specified child resolution\nH3 4.1.0\n\n    cellToChildrenSize  Returns the maximum number of children for a given cell at the specified child resolution\n    -h, --help  Show this help message.\n    -c, --cell <index>  Required. H3 Cell\n    -r, --resolution <res>  Required. Resolution, 1-15 inclusive, excluding 0 as it can never be a child\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ h3 cellToChildrenSize -c 85283473fffffff -r 6\n7\n")))),(0,t.yg)("p",null,"Provides the size of the ",(0,t.yg)("inlineCode",{parentName:"p"},"children")," array needed for the given inputs to ",(0,t.yg)("inlineCode",{parentName:"p"},"cellToChildren"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"celltocenterchild"},"cellToCenterChild"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Error cellToCenterChild(H3Index cell, int childRes, H3Index *child);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"long cellToCenterChild(long cell, int childRes);\nString cellToCenterChild(String cellAddress, int childRes);\n"))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"h3.cellToCenterChild(cell, childRes)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToCenterChild(cell, 7);\n}\n"))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_center_child(cell, child_res)\n"))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 cellToCenterChild --help\nh3: Returns the H3 index that is the centrally-placed child (or lower) of the provided cell\nH3 4.1.0\n\n    cellToCenterChild   Returns the H3 index that is the centrally-placed child (or lower) of the provided cell\n    -h, --help  Show this help message.\n    -c, --cell <index>  Required. H3 Cell\n    -r, --resolution <res>  Required. Resolution, 1-15 inclusive, excluding 0 as it can never be a child\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ h3 cellToCenterChild -c 85283473fffffff -r 7\n872834700ffffff\n")))),(0,t.yg)("p",null,"Provides the center child (finer) index contained by ",(0,t.yg)("inlineCode",{parentName:"p"},"cell")," at resolution ",(0,t.yg)("inlineCode",{parentName:"p"},"childRes"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"celltochildpos"},"cellToChildPos"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Index cellToChildPos(H3Index child, int parentRes, int64_t *out);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"long cellToChildPos(long child, int parentRes);\nlong cellToChildPos(String childAddress, int parentRes);\n"))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"h3.cellToChildPos(child, parentRes)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  return h3.cellToChildPos(cell, 3);\n}\n"))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"h3.cell_to_child_pos(child, parent_res)\n"))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 cellToChildPos --help\nh3: Returns the position of the child cell within an ordered list of all children of the cell's parent at the specified child resolution\nH3 4.1.0\n\n    cellToChildPos  Returns the position of the child cell within an ordered list of all children of the cell's parent at the specified child resolution\n    -h, --help  Show this help message.\n    -c, --cell <index>  Required. H3 Cell\n    -r, --resolution <res>  Required. Resolution, 1-15 inclusive, excluding 0 as it can never be a child\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ h3 cellToChildPos -c 85283473fffffff -r 3\n25\n")))),(0,t.yg)("p",null,"Returns the position of the child cell within an ordered list of all children of the cell's parent at the specified resolution ",(0,t.yg)("inlineCode",{parentName:"p"},"parentRes"),". The order of the ordered list is the same as that returned by ",(0,t.yg)("inlineCode",{parentName:"p"},"cellToChildren"),". This is the complement of ",(0,t.yg)("inlineCode",{parentName:"p"},"childPosToCell"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"childpostocell"},"childPosToCell"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Index childPosToCell(int64_t childPos, H3Index parent, int childRes, H3Index *child);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"long childPosToCell(long childPos, long parent, int childRes);\nString childPosToCell(long childPos, String parentAddress, int childRes);\n"))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"h3.childPosToCell(childPos, parent, childRes);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const parent = '85283473fffffff';\n  const childPos = 42;\n  return h3.childPosToCell(childPos, parent, 7);\n}\n"))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"h3.child_pos_to_cell(child_pos, parent, child_res)\n"))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 childPosToCell --help\nh3: Returns the child cell at a given position and resolution within an ordered list of all children of the parent cell\nH3 4.1.0\n\n    childPosToCell  Returns the child cell at a given position and resolution within an ordered list of all children of the parent cell\n    -h, --help  Show this help message.\n    -c, --cell <index>  Required. H3 Cell\n    -r, --resolution <res>  Required. Resolution, 1-15 inclusive, excluding 0 as it can never be a child\n    -p, --position <pos>    Required. The child position within the set of children of the parent cell\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ h3 childPosToCell -p 42 -c 85283473fffffff -r 7\n872834730ffffff\n")))),(0,t.yg)("p",null,"Returns the child cell at a given position within an ordered list of all children of ",(0,t.yg)("inlineCode",{parentName:"p"},"parent")," at the specified resolution ",(0,t.yg)("inlineCode",{parentName:"p"},"childRes"),". The order of the ordered list is the same as that returned by ",(0,t.yg)("inlineCode",{parentName:"p"},"cellToChildren"),". This is the complement of ",(0,t.yg)("inlineCode",{parentName:"p"},"cellToChildPos"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"compactcells"},"compactCells"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Error compactCells(const H3Index *cellSet, H3Index *compactedSet, const int64_t numCells);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"List<Long> compactCells(Collection<Long> cells);\nList<String> compactCellAddress(Collection<String> cells);\n"))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"h3.compactCells(cells)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  const nearby = h3.gridDisk(cell, 4);\n  return h3.compactCells(nearby);\n}\n"))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"h3.compact_cells(cells)\n"))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 compactCells --help\nh3: Compacts the provided set of cells as best as possible. The set of input cells must all share the same resolution. The compacted cells will be printed one per line to stdout.\nH3 4.1.0\n\n    compactCells    Compacts the provided set of cells as best as possible. The set of input cells must all share the same resolution. The compacted cells will be printed one per line to stdout.\n    -h, --help  Show this help message.\n    -f, --file <FILENAME>   The file to load the cells from. Use -- to read from stdin.\n    -c, --cells <CELLS> The cells to compact. Up to 100 cells if provided as hexadecimals with zero padding.\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ h3 compactCells -c 85283473fffffff,85283447fffffff,8528347bfffffff,85283463fffffff,85283477fffffff,8528340ffffffff,8528340bfffffff,85283457fffffff,85283443fffffff,8528344ffffffff,852836b7fffffff,8528346bfffffff,8528346ffffffff,85283467fffffff,8528342bfffffff,8528343bfffffff,85283407fffffff,85283403fffffff,8528341bfffffff\n85283447fffffff\n8528340ffffffff\n8528340bfffffff\n85283457fffffff\n85283443fffffff\n8528344ffffffff\n852836b7fffffff\n8528342bfffffff\n8528343bfffffff\n85283407fffffff\n85283403fffffff\n8528341bfffffff\n8428347ffffffff\n")))),(0,t.yg)("p",null,"Compacts the set ",(0,t.yg)("inlineCode",{parentName:"p"},"cellSet")," of indexes as best as possible, into the array ",(0,t.yg)("inlineCode",{parentName:"p"},"compactedSet"),". ",(0,t.yg)("inlineCode",{parentName:"p"},"compactedSet")," must be at least the size of ",(0,t.yg)("inlineCode",{parentName:"p"},"cellSet")," in case the set cannot be compacted. Cells in ",(0,t.yg)("inlineCode",{parentName:"p"},"cellSet")," must all share the same resolution."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"uncompactcells"},"uncompactCells"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Error uncompactCells(const H3Index *compactedSet, const int64_t numCells, H3Index *cellSet, const int64_t maxCells, const int res);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"List<Long> uncompactCells(Collection<Long> cells, int res);\nList<String> uncompactCellAddress(Collection<String> cells, int res);\n"))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js"},"h3.uncompactCells(cells, res)\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-js",metastring:"live",live:!0},"function example() {\n  const cell = '85283473fffffff';\n  const nearby = h3.gridDisk(cell, 4);\n  const compacted = h3.compactCells(nearby);\n  return h3.uncompactCells(compacted, 5);\n}\n"))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-py"},"h3.uncompact_cells(cells, res)\n"))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"$ h3 uncompactCells --help\nh3: Unompacts the provided set of compacted cells.The uncompacted cells will be printed one per line to stdout.\nH3 4.1.0\n\n    uncompactCells  Unompacts the provided set of compacted cells.The uncompacted cells will be printed one per line to stdout.\n    -h, --help  Show this help message.\n    -f, --file <FILENAME>   The file to load the cells from. Use -- to read from stdin.\n    -c, --cells <CELLS> The cells to uncompact. Up to 100 cells if provided as hexadecimals with zero padding.\n    -r, --resolution <res>  Required. Resolution, 0-15 inclusive, that the compacted set should be uncompacted to. Must be greater than or equal to the highest resolution within the compacted set.\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ h3 uncompactCells -r 5 -c 85283447fffffff,8528340ffffffff,8528340bfffffff,85283457fffffff,85283443fffffff,8528344ffffffff,852836b7fffffff,8528342bfffffff,8528343bfffffff,85283407fffffff,85283403fffffff,8528341bfffffff,8428347ffffffff\n85283447fffffff\n8528340ffffffff\n8528340bfffffff\n85283457fffffff\n85283443fffffff\n8528344ffffffff\n852836b7fffffff\n8528342bfffffff\n8528343bfffffff\n85283407fffffff\n85283403fffffff\n8528341bfffffff\n85283463fffffff\n85283467fffffff\n8528346bfffffff\n8528346ffffffff\n85283473fffffff\n85283477fffffff\n8528347bfffffff\n")))),(0,t.yg)("p",null,"Uncompacts the set ",(0,t.yg)("inlineCode",{parentName:"p"},"compactedSet")," of indexes to the resolution ",(0,t.yg)("inlineCode",{parentName:"p"},"res"),". ",(0,t.yg)("inlineCode",{parentName:"p"},"h3Set")," must be at least of size ",(0,t.yg)("inlineCode",{parentName:"p"},"uncompactCellsSize(compactedSet, numHexes, res)"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."),(0,t.yg)("h2",{id:"uncompactcellssize"},"uncompactCellsSize"),(0,t.yg)(r.A,{groupId:"language",defaultValue:"c",values:[{label:"C",value:"c"},{label:"Java",value:"java"},{label:"JavaScript (Live)",value:"javascript"},{label:"Python",value:"python"},{label:"Shell",value:"shell"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"c",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-c"},"H3Error uncompactCellsSize(const H3Index *compactedSet, const int64_t numCompacted, const int res, int64_t *out);\n"))),(0,t.yg)(o.A,{value:"java",mdxType:"TabItem"},(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,t.yg)(o.A,{value:"javascript",mdxType:"TabItem"},(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,t.yg)(o.A,{value:"python",mdxType:"TabItem"},(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed."))),(0,t.yg)(o.A,{value:"shell",mdxType:"TabItem"},(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"This function exists for memory management and is not exposed.")))),(0,t.yg)("p",null,"Places the size of the array needed by ",(0,t.yg)("inlineCode",{parentName:"p"},"uncompactCells")," into ",(0,t.yg)("inlineCode",{parentName:"p"},"out"),"."),(0,t.yg)("p",null,"Returns 0 (",(0,t.yg)("inlineCode",{parentName:"p"},"E_SUCCESS"),") on success."))}d.isMDXComponent=!0}}]);