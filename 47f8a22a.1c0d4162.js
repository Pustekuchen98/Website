(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9,68],{156:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));t(258);var n=t(259),l=t.n(n),r=(t(240),t(260)),c=t(0),s=t.n(c),o=t(222),i=t(272),m=t(261),u=t(266),d=t(209),v=t.n(d),b=t(157),E=t.n(b);function h(){var e=Object(c.useState)([]),a=e[0],t=e[1];return Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/PGMDev/PGM/releases");case 2:return a=e.sent,e.t0=t,e.next=6,a.json();case 6:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s.a.createElement(o.a,{title:"Downloads"},s.a.createElement("div",{className:v()("container",E.a.downloads_container)},s.a.createElement("h1",{className:E.a.downloads_title},"Downloads"),0===a.length?s.a.createElement("div",{className:v()("hero",E.a.spinner_hero)},s.a.createElement("div",{className:E.a.lds_ripple},s.a.createElement("div",null),s.a.createElement("div",null))):s.a.createElement("div",{className:v()("hero",E.a.downloads_hero,E.a.appearing)},s.a.createElement("div",{className:"container row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row"},s.a.createElement("img",{src:"/img/shield.png",className:E.a.pgm_logo}),s.a.createElement("div",{className:E.a.pgm},s.a.createElement("h1",null,"PGM ",a[0].name),s.a.createElement("p",null,s.a.createElement("label",null," ",Object(i.a)(new Date(a[0].published_at),"LLLL do, yyyy")," ")),s.a.createElement("a",{href:a[0].html_url},"Changelog ",s.a.createElement(m.a,{icon:u.a})))),s.a.createElement("div",{className:E.a.description},s.a.createElement("p",null,"Minecraft multiplayer game-server suite for managing PvP matches across various gamemodes"))),s.a.createElement("div",{className:v()("col col--4",E.a.col_border)},s.a.createElement("h2",null,"Download PGM"),s.a.createElement("p",null,"PvP Game Manager (PGM) is a plugin that manages running and instancing multiple PvP maps across various gamemodes for Minecraft multiplayer."),s.a.createElement("a",{className:v()("button button--primary",E.a.download_button),href:a[0].assets[0].browser_download_url},"Download ",s.a.createElement(m.a,{icon:u.b}))),s.a.createElement("div",{className:v()("col col--4",E.a.col_margin_left)},s.a.createElement("h2",null,"Download SportPaper"),s.a.createElement("p",null,"SportPaper is a Minecraft server jar based on Paper 1.8 tuned for maximum performance and high intensity PvP. It is mandatory and should run alongside PGM."),s.a.createElement("a",{className:v()("button button--primary",E.a.download_button),href:a[0].assets[1].browser_download_url},"Download ",s.a.createElement(m.a,{icon:u.b}))))),s.a.createElement("div",{className:E.a.others},s.a.createElement("h2",null,"Other Resources"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--6"},s.a.createElement("div",{className:v()("hero",E.a.others_hero)},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--6"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:E.a.others_icon},s.a.createElement(m.a,{icon:u.d})),s.a.createElement("div",{className:E.a.others_header},s.a.createElement("h2",null,"ResourcePile"),s.a.createElement("a",{href:"https://github.com/MCResourcePile"},s.a.createElement("label",null,"GitHub"))))),s.a.createElement("div",{className:"col col--6"},s.a.createElement("a",{className:v()("button button--primary",E.a.others_button),href:"https://mcresourcepile.github.io"},"Visit ",s.a.createElement(m.a,{icon:u.d})))),s.a.createElement("div",{className:E.a.others_description},s.a.createElement("p",null,"ResourcePile is a community project which aims to provide various collections of resources, such as maps or statistics, for users with backgrounds in Overcast and similar networks."))))),s.a.createElement("div",{className:v()("col col--6",E.a.others_column)},s.a.createElement("div",{className:v()("hero",E.a.others_hero)},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--6"},s.a.createElement("div",{className:"row"},s.a.createElement("h1",{className:E.a.others_icon},s.a.createElement(m.a,{icon:u.c})),s.a.createElement("div",{className:E.a.others_header},s.a.createElement("h2",null,"PGM Tracker"),s.a.createElement("a",{href:"https://pgm.fyi"},s.a.createElement("label",null,"Website"))))),s.a.createElement("div",{className:"col col--6"},s.a.createElement("a",{className:v()("button button--primary",E.a.others_button),href:"https://pgm.fyi"},"Visit ",s.a.createElement(m.a,{icon:u.c})))),s.a.createElement("div",{className:E.a.others_description},s.a.createElement("p",null,"PGM Tracker is a community tool made by"," ",s.a.createElement("a",{href:"https://github.com/applenick"},"applenick")," that tracks public PGM servers. Take a look at it, play a variety of Minecraft PvP maps and get involved with development!")))))))))}},218:function(e,a,t){"use strict";var n=t(1),l=(t(214),t(52),t(9)),r=t(0),c=t.n(r),s=t(209),o=t.n(s),i=t(211),m=t(208),u=t(210),d=t(224),v=t(219),b=t(212),E=t(223),h=t(216),_=t(217),p=t(131),f=t.n(p);function N(e){var a=e.activeBasePath,t=e.to,r=e.href,s=e.label,o=e.activeClassName,m=void 0===o?"navbar__link--active":o,d=Object(l.a)(e,["activeBasePath","to","href","label","activeClassName"]),v=Object(u.a)(t),b=Object(u.a)(a);return c.a.createElement(i.a,Object(n.a)({},r?{target:"_blank",rel:"noopener noreferrer",href:r}:Object.assign({isNavLink:!0,activeClassName:m,to:v},a?{isActive:function(e,a){return a.pathname.startsWith(b)}}:null),d),s)}function g(e){var a=e.items,t=e.position,r=e.className,s=Object(l.a)(e,["items","position","className"]),i=function(e,a){return void 0===a&&(a=!1),o()({"navbar__item navbar__link":!a,dropdown__link:a},e)};return a?c.a.createElement("div",{className:o()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(N,Object(n.a)({className:i(r)},s,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),s.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){var t=e.className,r=Object(l.a)(e,["className"]);return c.a.createElement("li",{key:a},c.a.createElement(N,Object(n.a)({activeClassName:"dropdown__link--active",className:i(t,!0)},r)))})))):c.a.createElement(N,Object(n.a)({className:i(r)},s))}function k(e){var a=e.items,t=e.className,r=Object(l.a)(e,["items","className"]),s=function(e,a){return void 0===a&&(a=!1),o()("menu__link",{"menu__link--sublist":a},e)};return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(N,Object(n.a)({className:s(t,!0)},r),r.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){var t=e.className,o=Object(l.a)(e,["className"]);return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(N,Object(n.a)({activeClassName:"menu__link--active",className:s(t)},o,{onClick:r.onClick})))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(N,Object(n.a)({className:s(t)},r)))}a.a=function(){var e,a,t=Object(m.a)(),l=t.siteConfig.themeConfig,s=l.navbar,u=(s=void 0===s?{}:s).title,p=s.links,N=void 0===p?[]:p,w=s.hideOnScroll,O=void 0!==w&&w,j=l.disableDarkMode,y=void 0!==j&&j,P=t.isClient,C=Object(r.useState)(!1),M=C[0],D=C[1],L=Object(r.useState)(!1),x=L[0],G=L[1],T=Object(b.a)(),S=T.isDarkTheme,I=T.setLightTheme,B=T.setDarkTheme,H=Object(E.a)(O),R=H.navbarRef,A=H.isNavbarVisible,V=Object(_.a)(),W=V.logoLink,J=V.logoLinkProps,K=V.logoImageUrl,U=V.logoAlt;Object(h.a)(M);var q=Object(r.useCallback)((function(){D(!0)}),[D]),z=Object(r.useCallback)((function(){D(!1)}),[D]),F=Object(r.useCallback)((function(e){return e.target.checked?B():I()}),[I,B]);return c.a.createElement("nav",{ref:R,className:o()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":M},e[f.a.navbarHideable]=O,e[f.a.navbarHidden]=!A,e[f.a.orange]=f.a.orange,e))},c.a.createElement("div",{className:"navbar__inner container"},c.a.createElement("div",{className:"navbar__items"},null!=N&&0!==N.length&&c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:q,onKeyDown:q},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(i.a,Object(n.a)({className:"navbar__brand",to:W},J),null!=K&&c.a.createElement("img",{key:P,className:"navbar__logo",src:K,alt:U}),null!=u&&c.a.createElement("strong",{className:o()("navbar__title",(a={},a[f.a.hideLogoText]=x,a))},u)),N.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(g,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},N.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(g,Object(n.a)({},e,{key:a}))})),!y&&c.a.createElement(v.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:S,onChange:F}),c.a.createElement(d.a,{handleSearchBarToggle:G,isSearchBarExpanded:x}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:z}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(i.a,Object(n.a)({className:"navbar__brand",onClick:z,to:W},J),null!=K&&c.a.createElement("img",{key:P,className:"navbar__logo",src:K,alt:U}),null!=u&&c.a.createElement("strong",{className:"navbar__title"},u)),!y&&M&&c.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:S,onChange:F})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},N.map((function(e,a){return c.a.createElement(k,Object(n.a)({},e,{onClick:z,key:a}))})))))))}},221:function(e,a,t){"use strict";var n=t(1),l=t(9),r=t(0),c=t.n(r),s=t(209),o=t.n(s),i=t(211),m=t(208),u=t(210),d=t(132),v=t.n(d);function b(e){var a=e.to,t=e.href,r=e.label,s=Object(l.a)(e,["to","href","label"]),o=Object(u.a)(a);return c.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:o},s),r)}var E=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},l=n.copyright,r=n.links,s=void 0===r?[]:r,i=n.logo,d=void 0===i?{}:i,h=Object(u.a)(d.src);return t?c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},s&&s.length>0&&c.a.createElement("div",{className:"row footer__links"},s.map((function(e,a){return c.a.createElement("div",{key:a,className:o()("col footer__col",v.a.footerCol)},null!=e.title?c.a.createElement("h4",{className:o()("footer__title",v.a.footerTitle)},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(b,e))}))):null)}))),(d||l)&&c.a.createElement("div",{className:"text--center"},d&&d.src&&c.a.createElement("div",{className:"margin-bottom--sm"},d.href?c.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:v.a.footerLogoLink},c.a.createElement(E,{alt:d.alt,url:h})):c.a.createElement(E,{alt:d.alt,url:h})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))):null}}}]);