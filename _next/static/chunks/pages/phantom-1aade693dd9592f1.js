(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{1522:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/phantom",function(){return a(8427)}])},7017:function(e,t,a){"use strict";a.d(t,{I:function(){return n}});let n={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}},2328:function(e,t,a){"use strict";var n=a(5893),i=a(5072),o=a(7294),s=a(7982),r=a(2609),l=a(9845),c=a.n(l),p=a(8025),d=a.n(p);let h=c().bind(d()),b={"/logos/0x.svg":{animate:{rotate:90},transition:{delay:2,repeatDelay:2,repeat:1/0,type:"spring",mass:2,damping:20},invertible:!0},"/logos/pob.svg":{animate:{},transition:{},invertible:!0}};t.Z=e=>{var t;let{title:a,caption:l,link:c,icon:p,date:m,newTab:_,locked:x}=e,u=(0,o.useContext)(s.ThemeContext),g=(0,n.jsx)(i.E.div,{className:h({dark:u.dark}),style:x?{pointerEvents:"none",userSelect:"none"}:void 0,children:(0,n.jsxs)(i.E.a,{whileHover:{scale:.997},whileTap:{scale:.99},className:d().box,href:c,target:_?"_blank":"_self",rel:_?"noopener noreferrer":"",children:[p&&(0,n.jsx)(i.E.img,{animate:b.hasOwnProperty(p)?b[p].animate:{},transition:b.hasOwnProperty(p)?b[p].transition:{},className:h({box__icon:!0,invert:(null===(t=b[p])||void 0===t?void 0:t.invertible)&&u.dark}),src:p,alt:a}),(0,n.jsxs)("div",{className:d().box__content,children:[(0,n.jsx)("div",{className:d().box__title,children:a}),(0,n.jsx)("div",{className:d().box__caption,children:l})]}),m&&(0,n.jsx)("div",{className:d().box__date,children:m}),x&&(0,n.jsxs)("div",{className:d().box__locked,children:[(0,n.jsx)("img",{className:d().box__locked__icon,src:"/icons/padlock-white.svg",alt:"locked"}),"Coming Soon"]})]})});return(0,n.jsx)(n.Fragment,{children:c.includes("://")?(0,n.jsxs)(n.Fragment,{children:[" ",g," "]}):(0,n.jsx)(r.Z,{legacyBehavior:!0,href:c,children:g})})}},6699:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(5893),i=a(9845),o=a.n(i),s=a(1163),r=a(7294),l=a(7982),c=a(2609),p=a(92),d=a.n(p),h=[{path:"/0x",label:"0x",header:!0,children:[{path:"/0x",label:"Matcha",children:[{path:"/0x/matcha/onboard",label:"Onboard"},{path:"/0x/matcha/moolah",label:"Moolah"}]}]}],b=[{path:"/bitpay",label:"BitPay",header:!0,children:[{path:"/bitpay/invoice",label:"Invoice",children:[{path:"/bitpay/invoice/select",label:"Select"},{path:"/bitpay/invoice/pay",label:"Pay"},{path:"/bitpay/invoice/receipt",label:"Receipt"},{path:"/bitpay/invoice/demos",label:"Demos"}]},{path:"/bitpay/extension",label:"Extension",children:[{path:"/bitpay/extension/shop",label:"Shop"},{path:"/bitpay/extension/wallet",label:"Wallet"}]},{path:"/bitpay/id",label:"Onboard",children:[{path:"/bitpay/id/auth",label:"Auth"},{path:"/bitpay/id/verify",label:"Verify"},{path:"/bitpay/id/v2",label:"V2.0"}]},{path:"/bitpay/directory",label:"Directory"},{path:"/bitpay/emails",label:"Emails"},{path:"/bitpay/site",label:"Website"},{path:"/bitpay/support",label:"Support"}]}],m=[{path:"/portfolio",label:"Portfolio",header:!0,children:[{path:"/pob",label:"Proof of Beauty"},{path:"/0x",label:"Matcha"},{path:"/bitpay",label:"BitPay"}]}];let _=o().bind(d()),x=e=>/^https?:\/\//.test(e);var u=()=>{let e=(0,r.useContext)(l.ThemeContext),t=(0,s.useRouter)(),a=i=>{let o;return(0,n.jsxs)(n.Fragment,{children:[i.header?(0,n.jsxs)("div",{className:d().major,children:[(0,n.jsx)(c.Z,{href:"/",style:{opacity:e.dark?.4:.25},children:"Ash \xa0/\xa0\xa0"}),(0,n.jsx)(c.Z,{href:i.path,target:x(i.path)?"_blank":"",rel:"noopener noreferrer",children:i.label})]}):(0,n.jsx)(c.Z,{href:i.path,className:_({minor:!0,active:t.pathname===i.path}),target:x(i.path)?"_blank":"",rel:"noopener noreferrer",children:i.label}),i.children&&(0,n.jsx)("div",{className:d().shift,children:(o=i.children,(0,n.jsx)(n.Fragment,{children:o.map((e,t)=>(0,n.jsx)(r.Fragment,{children:a(e)},t))}))})]})};return(0,n.jsx)("nav",{className:_({nav:!0,dark:e.dark}),children:(t.pathname.includes("bitpay")?b:t.pathname.includes("0x")?h:t.pathname.includes("portfolio")?m:[]).map((e,t)=>(0,n.jsx)(r.Fragment,{children:a(e)},t))})}},8715:function(e,t,a){"use strict";var n=a(5893),i=a(7294),o=a(7982);t.Z=e=>{let{src:t}=e,a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{try{var e,t;null===(t=window)||void 0===t||null===(e=t.twttr.widgets)||void 0===e||e.load(null==a?void 0:a.current)}catch(t){let e=document.createElement("script");e.setAttribute("src","https://platform.twitter.com/widgets.js"),e.setAttribute("async","true"),document.head.appendChild(e)}},[]),(0,n.jsx)(o.ThemeContext.Consumer,{children:e=>(0,n.jsx)("blockquote",{className:"twitter-tweet","data-theme":e.dark?"dark":"light",ref:a,children:(0,n.jsx)("a",{href:t})})})}},8427:function(e,t,a){"use strict";a.r(t);var n=a(5893),i=a(5072);a(7294);var o=a(7017),s=a(2328),r=a(8565),l=a(6699),c=a(9079),p=a(8715);t.default=()=>(0,n.jsxs)(n.Fragment,{children:[r.JP,(0,n.jsx)(l.Z,{}),(0,n.jsxs)(i.E.main,{className:"body",...o.I,children:[(0,n.jsxs)("section",{className:"end-section",children:[(0,n.jsx)("h1",{className:"begin-section pt-0",children:"Phantom \xa0\uD83D\uDC7B"}),(0,n.jsxs)("div",{className:"lead",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)(c.Z,{content:"Phantom",href:"https://phantom.app/",spaceAfter:!0}),"is a friendly, multichain crypto wallet for Solana, Ethereum, Polygon, (& more)."]}),(0,n.jsx)("p",{children:"Phantom raised $109M at a $1.2 billion valuation in January 2022 for their Series B via Andreessen Horowitz, Paradigm, & more."}),(0,n.jsx)("p",{children:"I work on the Identity & Onboarding team."})]})]}),(0,n.jsxs)("section",{className:"end-section",children:[(0,n.jsx)("h3",{className:"begin-section",children:"Products"}),(0,n.jsx)(s.Z,{icon:"/logos/phantom.svg",title:"Phantom \xa0\uD83D\uDC7B",caption:"Multichain Self-Custody",link:"https://phantom.app/",newTab:!0}),(0,n.jsx)("div",{className:"lead end-section",children:(0,n.jsx)("p",{children:"If you take a look at the product, it's really incredible to see how one app can redefine and propel an entire ecosystem. Phantom has been critical to Solana's growth and continues to support the network as it scales."})}),(0,n.jsx)("h5",{className:"begin-section",children:"Contributions"}),(0,n.jsx)(s.Z,{icon:"/imgs/phantom/purple-badge.png",title:"Buy Crypto V2",caption:"Enhanced onramp flow w/ smarter quotes & global support",link:"",date:"Q2 2024"}),(0,n.jsx)(s.Z,{icon:"/imgs/phantom/purple-badge.png",title:"Onboarding V2",caption:"Enhanced onboarding flow for new & existing web3 users",link:"",date:"Q1 2024"}),(0,n.jsx)(s.Z,{icon:"/imgs/phantom/purple-badge.png",title:"Bitcoin & Ordinals",caption:"Updating all infrastructure to support Bitcoin & more chains",link:"",date:"Q4 2023"}),(0,n.jsx)(s.Z,{icon:"/imgs/phantom/purple-badge.png",title:"Settings V2",caption:"Enhanced settings page for better discovery & user experience",link:"",date:"Q3 2023"}),(0,n.jsx)(s.Z,{icon:"/imgs/phantom/purple-badge.png",title:"Banners & Interstitials",caption:"Dynamic & personalized CTAs for onboarding, on-chain actions, & more",link:"",date:"Q2 2023"}),(0,n.jsx)(s.Z,{icon:"/imgs/phantom/purple-badge.png",title:"Import Multiple Seeds",caption:"Import & upgrade your mnemonic from wallets like MetaMask",link:"",date:"Q1 2023"})]}),(0,n.jsxs)("section",{className:"begin-section wrapper-center v-align col",children:[(0,n.jsx)(p.Z,{src:"https://twitter.com/phantom/status/1674513272115175424"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{src:"https://twitter.com/phantom/status/1664311554039517189"})]})]})]})},8025:function(e){e.exports={dark:"post-box_dark__a5Auf",box:"post-box_box__dsxNw",box__title:"post-box_box__title__8oeeq",box__caption:"post-box_box__caption__Vum7R",box__date:"post-box_box__date__7n3l0",invert:"post-box_invert__t8s_q",box__icon:"post-box_box__icon__tjUa5",box__content:"post-box_box__content__WNY3A",box__locked:"post-box_box__locked__HeYuI",box__locked__icon:"post-box_box__locked__icon__m3UtZ"}},92:function(e){e.exports={dark:"sidebar_dark___qnvR",nav:"sidebar_nav__TIgPv",major:"sidebar_major__dRpgs",minor:"sidebar_minor__8RpND",shift:"sidebar_shift__Ok4cJ",active:"sidebar_active__WstEf"}}},function(e){e.O(0,[72,888,774,179],function(){return e(e.s=1522)}),_N_E=e.O()}]);