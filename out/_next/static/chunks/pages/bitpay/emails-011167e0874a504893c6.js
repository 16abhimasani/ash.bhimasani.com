(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{3991:function(e,i,a){"use strict";a.d(i,{I:function(){return t}});var t={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}},5377:function(e,i,a){"use strict";a.d(i,{Z:function(){return f}});var t=a(5893),r=a(7294),n=a(1163),s=a(4043),l=a(9105),o=a(7166),c=a.n(o),d=a(1571),p=a.n(d),h=[{path:"/bitpay",label:"BitPay",header:!0,children:[{path:"/bitpay/invoice",label:"Invoice",children:[{path:"/bitpay/invoice/select",label:"Select"},{path:"/bitpay/invoice/pay",label:"Pay"},{path:"/bitpay/invoice/receipt",label:"Receipt"},{path:"/bitpay/invoice/demos",label:"Demos"}]},{path:"/bitpay/extension",label:"Extension",children:[{path:"/bitpay/extension/shop",label:"Shop"},{path:"/bitpay/extension/wallet",label:"Wallet"}]},{path:"/bitpay/id",label:"Onboard",children:[{path:"/bitpay/id/auth",label:"Auth"},{path:"/bitpay/id/verify",label:"Verify"},{path:"/bitpay/id/v2",label:"V2.0"}]},{path:"/bitpay/directory",label:"Directory"},{path:"/bitpay/emails",label:"Emails"},{path:"/bitpay/site",label:"Website"},{path:"/bitpay/support",label:"Support"}]}],m=[{path:"/0x",label:"0x",header:!0,children:[{path:"/0x",label:"Matcha",children:[{path:"/0x/matcha/onboard",label:"Onboard"},{path:"/0x/matcha/moolah",label:"Moolah"}]}]}],u=[{path:"/portfolio",label:"Portfolio",header:!0,children:[{path:"/pob",label:"Proof of Beauty"},{path:"/0x",label:"Matcha"},{path:"/bitpay",label:"BitPay"}]}],b=c().bind(p()),g=function(e){return/^https?:\/\//.test(e)},f=function(){var e=(0,r.useContext)(s.ThemeContext),i=(0,n.useRouter)(),a=function a(n){var s;return(0,t.jsxs)(t.Fragment,{children:[n.header?(0,t.jsxs)("div",{className:p().major,children:[(0,t.jsx)(l.Z,{href:"/",children:(0,t.jsx)("a",{style:{opacity:e.dark?.4:.25},children:"Ash \xa0/\xa0\xa0"})}),(0,t.jsx)(l.Z,{href:n.path,children:(0,t.jsx)("a",{target:g(n.path)?"_blank":"",rel:"noopener noreferrer",children:n.label})})]}):(0,t.jsx)(l.Z,{href:n.path,children:(0,t.jsx)("a",{className:b({minor:!0,active:i.pathname===n.path}),target:g(n.path)?"_blank":"",rel:"noopener noreferrer",children:n.label})}),n.children&&(0,t.jsx)("div",{className:p().shift,children:(s=n.children,(0,t.jsx)(t.Fragment,{children:s.map((function(e,i){return(0,t.jsx)(r.Fragment,{children:a(e)},i)}))}))})]})};return(0,t.jsx)("nav",{className:b({nav:!0,dark:e.dark}),children:(i.pathname.includes("bitpay")?h:i.pathname.includes("0x")?m:i.pathname.includes("portfolio")?u:[]).map((function(e,i){return(0,t.jsx)(r.Fragment,{children:a(e)},i)}))})}},678:function(e,i,a){"use strict";var t=a(5893),r=a(7294),n=a(8777),s=a(760),l=a(119),o=a.n(l),c=a(7166),d=a.n(c),p=a(4043),h=d().bind(o()),m=n.iR;i.Z=function(e){var i=e.src,a=e.carousel,l=e.zoom,c=e.maxWidth,d=(0,r.useContext)(p.ThemeContext),u=(0,r.useRef)(null),b=(0,r.useRef)(null),g=(0,s.$l)(u).height,f=(0,r.useState)({width:0,height:0}),j=f[0],x=f[1],y=c?{maxWidth:c}:void 0,v=(0,r.useCallback)((function(){if(null===b||void 0===b||!b.current)return 0;var e=window.getComputedStyle(b.current).getPropertyValue("padding-top").replace("px",""),i=window.getComputedStyle(b.current).getPropertyValue("padding-bottom").replace("px","");return Number(e)+Number(i)}),[b]);return(0,r.useEffect)((function(){if(a){var e=new Image;e.onload=function(){return x(e)},e.src=i[0]}}),[i]),(0,t.jsx)("div",{style:{height:g+v()},children:(0,t.jsx)("div",{className:h({wrapper:!0,wrapper__dark:d.dark}),ref:b,children:a&&i instanceof Array?(0,t.jsx)("div",{ref:u,className:o().asset,style:y,children:(0,t.jsxs)(n.sj,{naturalSlideWidth:j.width,naturalSlideHeight:j.height,totalSlides:i.length,interval:1e4,isPlaying:!0,infinite:!0,lockOnWindowScroll:!0,hasMasterSpinner:!0,children:[(0,t.jsx)(m,{onClick:function(e){var i;return null===e||void 0===e||null===(i=e.currentTarget)||void 0===i?void 0:i.focus()},children:i.map((function(e,i){return(0,t.jsx)(n.Mi,{index:i,children:l?(0,t.jsx)(n.Ee,{src:e}):(0,t.jsx)(n.Gy,{src:e,hasMasterSpinner:!0})},i)}))}),(0,t.jsx)(n.I5,{className:o().dots})]})}):(0,t.jsx)(t.Fragment,{children:"string"===typeof i&&(0,t.jsx)(t.Fragment,{children:i.includes("mp4")?(0,t.jsx)("video",{ref:u,className:o().asset,style:y,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:(0,t.jsx)("source",{src:i,type:"video/mp4"})}):(0,t.jsx)("img",{ref:u,className:o().asset,style:y,src:i})})})})})}},4664:function(e,i,a){"use strict";a.r(i);var t=a(5893),r=a(6265),n=(a(7294),a(1770)),s=a(3991),l=a(5377),o=a(678),c=a(1945);function d(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?d(Object(a),!0).forEach((function(i){(0,r.Z)(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))}))}return e}i.default=function(){return(0,t.jsxs)(t.Fragment,{children:[c.Ii,(0,t.jsx)(l.Z,{}),(0,t.jsxs)(n.E.main,p(p({className:"body"},s.I),{},{children:[(0,t.jsx)("h1",{className:"begin-section pt-0",children:"Emails V2"}),(0,t.jsx)("h5",{className:"end-section",children:"A brand refresh for platform emails"}),(0,t.jsx)(o.Z,{src:["/imgs/emails/operational/verify-email.jpg","/imgs/emails/operational/verify-login.jpg","/imgs/emails/operational/start-verify.jpg","/imgs/emails/operational/new-device.jpg","/imgs/emails/operational/reset-password.jpg","/imgs/emails/operational/new-refund.jpg","/imgs/emails/operational/refund-processing.jpg"],carousel:!0}),(0,t.jsxs)("div",{className:"lead begin-section end-section",children:[(0,t.jsx)("p",{children:"Here are some of the new email templates as part of BitPay's brand update to keep up with our evolving product line. This was one of my earliest personal projects when I joined BitPay. I am a heavy email user so our old email templates were one of the first things I noticed could be improved upon."}),(0,t.jsx)("p",{children:"This was a really fun solo project and allowed me to refine some early branding ideas that later critically influenced the design of other products."})]}),(0,t.jsxs)("div",{className:"breakdown end-section",children:[(0,t.jsxs)("div",{className:"col",children:[(0,t.jsxs)("hgroup",{children:[(0,t.jsx)("h5",{children:"Role"}),"Designer & Developer"]}),(0,t.jsxs)("hgroup",{children:[(0,t.jsx)("h5",{children:"Team"}),"1 Developer"]})]}),(0,t.jsxs)("div",{className:"col",children:[(0,t.jsxs)("hgroup",{children:[(0,t.jsx)("h5",{children:"Scope"}),"Aug - Jan 2019"]}),(0,t.jsxs)("hgroup",{children:[(0,t.jsx)("h5",{children:"What I did"}),"Email Design & Dev, Content, Branding"]})]}),(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("hgroup",{children:[(0,t.jsx)("h5",{children:"Stack"}),"Foundation, Adobe XD"]})})]}),(0,t.jsx)("h2",{className:"begin-section",children:"Emails Receipts"}),(0,t.jsx)("h5",{className:"end-section",children:"Making crypto feel more familiar"}),(0,t.jsx)(o.Z,{src:["/imgs/emails/receipt/gift-card-receipt.jpg","/imgs/emails/receipt/refund-receipt.jpg","/imgs/emails/receipt/payment-declined-receipt.jpg","/imgs/emails/receipt/payment-detected-receipt.jpg","/imgs/emails/receipt/card-order-receipt.jpg","/imgs/emails/receipt/card-load-receipt.jpg"],carousel:!0}),(0,t.jsxs)("div",{className:"lead begin-section end-section",children:[(0,t.jsx)("p",{children:"I was really inspired by Square Cash's email receipts because the parallel column style of line items works perfectly for bitcoin payments, especially in a payment processing context where the user is charged in one currency but pays in another."}),(0,t.jsx)("p",{children:"This V1 iteration essentially replicates Cash app's design but with a bitcoin specific context. Major goal for me was to introduce fiat symbols without sacrificing clarity of the pricing currency."}),(0,t.jsx)("p",{children:'Since the launch of this email style, I have brought this "receipt" style to both the Consumer Dashboard and the Invoice. Its interesting to see how low impact experimentation can lead a foundational shift somewhere else. With Invoice, I was heavily inspired by this parallel column style; I am looking forward to sharing this soon.'})]}),(0,t.jsx)("h3",{className:"begin-section",children:"Emails V1 (2013)"}),(0,t.jsx)("h5",{className:"end-section",children:"BitPay's original transactional email design"}),(0,t.jsx)(o.Z,{src:["/imgs/emails/old/refund-processing.png","/imgs/emails/old/confirm-settlement.png","/imgs/emails/old/gift-card-receipt.png","/imgs/emails/old/new-bill.png"],maxWidth:1e3,carousel:!0}),(0,t.jsxs)("div",{className:"lead begin-section end-section",children:[(0,t.jsx)("p",{children:'When I first started my internship at BitPay, these were the emails that were being used in production. Once I went pro, I got tired pretty quickly of looking at them so I designed some new ones. I looked at the emails sent out by Robinhood, Cash App, Coinbase, and more to create a "modern" baseline.'}),(0,t.jsx)("p",{children:"From here, I decided on a few strong elements to maintain consistency:"}),(0,t.jsxs)("ol",{className:"list",children:[(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__item__number",children:"1"}),(0,t.jsx)("div",{children:"Round Centered Icon"})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__item__number",children:"2"}),(0,t.jsx)("div",{children:"Bold 1 Line Title"})]}),(0,t.jsxs)("li",{className:"list__item",children:[(0,t.jsx)("div",{className:"list__item__number",children:"3"}),(0,t.jsx)("div",{children:"Bold Intro Text"})]})]})]})]}))]})}},362:function(e,i,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bitpay/emails",function(){return a(4664)}])},1571:function(e){e.exports={dark:"sidebar_dark__3DaPA",nav:"sidebar_nav__2KTd9",major:"sidebar_major__1AMOG",minor:"sidebar_minor__226dG",shift:"sidebar_shift__33WO-",active:"sidebar_active__RSvS9"}},119:function(e){e.exports={asset:"wide-screen_asset__8QPy9",wrapper:"wide-screen_wrapper__3MG4A",wrapper__dark:"wide-screen_wrapper__dark__3LkZV",dots:"wide-screen_dots__31AZo"}}},function(e){e.O(0,[770,777,774,888,179],(function(){return i=362,e(e.s=i);var i}));var i=e.O();_N_E=i}]);