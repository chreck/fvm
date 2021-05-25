(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{91:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),o=t(8),a=(t(0),t(99)),l={id:"project_flavors",title:"Project Flavors",sidebar_position:3},i={unversionedId:"guides/project_flavors",id:"guides/project_flavors",isDocsHomePage:!1,title:"Project Flavors",description:"You can have multiple Flutter SDK versions configured per project environment or release type. FVM follows the same convention of Flutter and calls this flavors.",source:"@site/docs/guides/project_flavors.md",sourceDirName:"guides",slug:"/guides/project_flavors",permalink:"/docs/guides/project_flavors",editUrl:"https://github.com/leoafarias/fvm/edit/master/website/docs/guides/project_flavors.md",version:"current",sidebarPosition:3,frontMatter:{id:"project_flavors",title:"Project Flavors",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure Global Version",permalink:"/docs/guides/global_version"},next:{title:"FAQ",permalink:"/docs/guides/faq"}},c=[{value:"Pin flavor version",id:"pin-flavor-version",children:[]},{value:"Switch flavors",id:"switch-flavors",children:[]},{value:"View flavors",id:"view-flavors",children:[]}],s={toc:c};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can have multiple Flutter SDK versions configured per project environment or release type. FVM follows the same convention of Flutter and calls this ",Object(a.b)("inlineCode",{parentName:"p"},"flavors"),"."),Object(a.b)("p",null,"It allows you to create the following configuration for your project."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "flutterSdkVersion": "stable",\n  "flavors": {\n    "dev": "beta",\n    "staging": "2.0.3",\n    "production": "1.22.6"\n  }\n}\n')),Object(a.b)("h2",{id:"pin-flavor-version"},"Pin flavor version"),Object(a.b)("p",null,"To choose a Flutter SDK version for a specific flavor you just use the ",Object(a.b)("inlineCode",{parentName:"p"},"use")," command."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"fvm use {version} --flavor {flavor_name}\n")),Object(a.b)("p",null,"This will pin ",Object(a.b)("inlineCode",{parentName:"p"},"version")," to ",Object(a.b)("inlineCode",{parentName:"p"},"flavor_name")),Object(a.b)("h2",{id:"switch-flavors"},"Switch flavors"),Object(a.b)("p",null,"Will get the version configured for the flavor and set as the project version."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"fvm flavor {flavor_name}\n")),Object(a.b)("h2",{id:"view-flavors"},"View flavors"),Object(a.b)("p",null,"To list all configured flavors:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"fvm flavor\n")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://flutter.dev/docs/deployment/flavors"},"Learn more about Flutter flavors")))}u.isMDXComponent=!0},99:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return v}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,v=p["".concat(l,".").concat(b)]||p[b]||f[b]||a;return t?o.a.createElement(v,i(i({ref:r},s),{},{components:t})):o.a.createElement(v,i({ref:r},s))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);