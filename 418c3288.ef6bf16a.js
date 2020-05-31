(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),o=(n(0),n(207)),i={id:"other",title:"Other Gamemodes"},c={id:"modules/objectives/other",title:"Other Gamemodes",description:"### Ghost Squadron",source:"@site/docs/modules/objectives/other.mdx",permalink:"/docs/modules/objectives/other",editUrl:"https://github.com/PGMDev/Website/docs/modules/objectives/other.mdx",sidebar:"Modules",previous:{title:"Scoring",permalink:"/docs/modules/objectives/scoring"},next:{title:"Filters",permalink:"/docs/modules/mechanics/filters"}},l=[{value:"Ghost Squadron",id:"ghost-squadron",children:[]},{value:"Rage",id:"rage",children:[]},{value:"Team Death-match",id:"team-death-match",children:[]},{value:"Free-For-All",id:"free-for-all",children:[]}],s={rightToc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"ghost-squadron"},"Ghost Squadron"),Object(o.b)("p",null,"Enables the ghostsquadron gamemode and all its features.\nThe default ghostsquadron classes can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/OvercastNetwork/maps.oc.tc/master/Blitz/GS/gs.xml"}),"here"),".\nGhost squadron maps set a custom gamemode title in the ",Object(o.b)("inlineCode",{parentName:"p"},"gs.xml")," with the ",Object(o.b)("inlineCode",{parentName:"p"},'<map game="Ghost Squadron">')," attribute.\nWhen not using the default GS XML include a custom title should be set."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NOTE:")," This module must be used in conjunction with another gamemode."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<ghostsquadron />\n<include src="gs.xml" />\n\n<time>6m</time>\n<blitz>\n    <broadcastLives>false</broadcastLives>\n</blitz>\n')),Object(o.b)("h3",{id:"rage"},"Rage"),Object(o.b)("p",null,"Enable the one hit kill, rage style gamemode."),Object(o.b)("p",null,"One hit kills will only be applied to items that have a sharpness enchantment greater than level 1. One shot arrow kills will only be applied to bows that have a power enchantment greater than level 1."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NOTE:")," This module must be used in conjunction with another gamemode."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<rage/>\n\n<time>8m</time>\n<score>\n    <limit>15</limit>\n</score>\n")),Object(o.b)("h3",{id:"team-death-match"},"Team Death-match"),Object(o.b)("p",null,"This gamemode uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/objectives/scoring"}),"scoring")," module to run the game for a specified amount of time, after which the team with the highest score wins. Teams increase their score by killing players from the other team or capturing points from a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/objectives/scoring#score_box"}),"score box"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NOTE:")," To be able to score points for kills and deaths the ",Object(o.b)("inlineCode",{parentName:"p"},"<kills>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<deaths>")," elements are required."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<score>\n    <kills>1</kills>    \x3c!-- +1 points for a kill --\x3e\n    <deaths>1</deaths>  \x3c!-- -1 points for dying --\x3e\n</score>\n\n\x3c!-- Time till the match ends in seconds (10 minutes) --\x3e\n<time>600</time>\n")),Object(o.b)("h3",{id:"free-for-all"},"Free-For-All"),Object(o.b)("p",null,"The FFA gamemode uses the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/format/players"}),"players")," instead of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/modules/format/teams"}),"teams")," module to create a team-less match.\nDepending on the modules used, players can increase their score by killing other players until a score or time limit is reached or by capturing objectives, etc."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NOTE:")," To be able to score points for kills and deaths the ",Object(o.b)("inlineCode",{parentName:"p"},"<kills>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<deaths>")," elements are required."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<players max="16" max-overfill="20"/>\n<time>8m</time>\n\n<score>\n    <kills>1</kills>\n    <deaths>1</deaths>\n</score>\n')))}m.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=m(n),d=r,p=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(p,c({ref:t},s,{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);