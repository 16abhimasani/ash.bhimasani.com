(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{143:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bitpay/id/auth",function(){return i(2320)}])},7017:function(e,t,i){"use strict";i.d(t,{I:function(){return a}});let a={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}},6699:function(e,t,i){"use strict";i.d(t,{Z:function(){return w}});var a=i(5893),s=i(9845),n=i.n(s),l=i(1163),r=i(7294),o=i(7982),c=i(2609),d=i(92),h=i.n(d),p=[{path:"/0x",label:"0x",header:!0,children:[{path:"/0x",label:"Matcha",children:[{path:"/0x/matcha/onboard",label:"Onboard"},{path:"/0x/matcha/moolah",label:"Moolah"}]}]}],m=[{path:"/bitpay",label:"BitPay",header:!0,children:[{path:"/bitpay/invoice",label:"Invoice",children:[{path:"/bitpay/invoice/select",label:"Select"},{path:"/bitpay/invoice/pay",label:"Pay"},{path:"/bitpay/invoice/receipt",label:"Receipt"},{path:"/bitpay/invoice/demos",label:"Demos"}]},{path:"/bitpay/extension",label:"Extension",children:[{path:"/bitpay/extension/shop",label:"Shop"},{path:"/bitpay/extension/wallet",label:"Wallet"}]},{path:"/bitpay/id",label:"Onboard",children:[{path:"/bitpay/id/auth",label:"Auth"},{path:"/bitpay/id/verify",label:"Verify"},{path:"/bitpay/id/v2",label:"V2.0"}]},{path:"/bitpay/directory",label:"Directory"},{path:"/bitpay/emails",label:"Emails"},{path:"/bitpay/site",label:"Website"},{path:"/bitpay/support",label:"Support"}]}],u=[{path:"/portfolio",label:"Portfolio",header:!0,children:[{path:"/pob",label:"Proof of Beauty"},{path:"/0x",label:"Matcha"},{path:"/bitpay",label:"BitPay"}]}];let b=n().bind(h()),g=e=>/^https?:\/\//.test(e);var w=()=>{let e=(0,r.useContext)(o.ThemeContext),t=(0,l.useRouter)(),i=s=>{let n;return(0,a.jsxs)(a.Fragment,{children:[s.header?(0,a.jsxs)("div",{className:h().major,children:[(0,a.jsx)(c.Z,{href:"/",style:{opacity:e.dark?.4:.25},children:"Ash \xa0/\xa0\xa0"}),(0,a.jsx)(c.Z,{href:s.path,target:g(s.path)?"_blank":"",rel:"noopener noreferrer",children:s.label})]}):(0,a.jsx)(c.Z,{href:s.path,className:b({minor:!0,active:t.pathname===s.path}),target:g(s.path)?"_blank":"",rel:"noopener noreferrer",children:s.label}),s.children&&(0,a.jsx)("div",{className:h().shift,children:(n=s.children,(0,a.jsx)(a.Fragment,{children:n.map((e,t)=>(0,a.jsx)(r.Fragment,{children:i(e)},t))}))})]})};return(0,a.jsx)("nav",{className:b({nav:!0,dark:e.dark}),children:(t.pathname.includes("bitpay")?m:t.pathname.includes("0x")?p:t.pathname.includes("portfolio")?u:[]).map((e,t)=>(0,a.jsx)(r.Fragment,{children:i(e)},t))})}},2897:function(e,t,i){"use strict";var a=i(5893),s=i(9845),n=i.n(s),l=i(8777),r=i(7294),o=i(7982),c=i(1173),d=i(2699),h=i.n(d);let p=n().bind(h()),m=l.iR;t.Z=e=>{let{src:t,carousel:i,zoom:s,maxWidth:n}=e,d=(0,r.useContext)(o.ThemeContext),u=(0,r.useRef)(null),b=(0,r.useRef)(null),{height:g}=(0,c.$l)(u),[w,x]=(0,r.useState)({width:0,height:0}),y=n?{maxWidth:n}:void 0,f=(0,r.useCallback)(()=>{if(!(null==b?void 0:b.current))return 0;let e=window.getComputedStyle(b.current).getPropertyValue("padding-top").replace("px",""),t=window.getComputedStyle(b.current).getPropertyValue("padding-bottom").replace("px","");return Number(e)+Number(t)},[b]);return(0,r.useEffect)(()=>{if(!i)return;let e=new Image;e.onload=()=>x(e),e.src=t[0]},[t]),(0,a.jsx)("div",{style:{height:g+f()},children:(0,a.jsx)("div",{className:p({wrapper:!0,wrapper__dark:d.dark}),ref:b,children:i&&t instanceof Array?(0,a.jsx)("div",{ref:u,className:h().asset,style:y,children:(0,a.jsxs)(l.sj,{naturalSlideWidth:w.width,naturalSlideHeight:w.height,totalSlides:t.length,interval:1e4,isPlaying:!0,infinite:!0,lockOnWindowScroll:!0,hasMasterSpinner:!0,children:[(0,a.jsx)(m,{onClick:e=>{var t;return null==e?void 0:null===(t=e.currentTarget)||void 0===t?void 0:t.focus()},children:t.map((e,t)=>(0,a.jsx)(l.Mi,{index:t,children:s?(0,a.jsx)(l.Ee,{src:e}):(0,a.jsx)(l.Gy,{src:e,hasMasterSpinner:!0})},t))}),(0,a.jsx)(l.I5,{className:h().dots})]})}):(0,a.jsx)(a.Fragment,{children:"string"==typeof t&&(0,a.jsx)(a.Fragment,{children:t.includes("mp4")?(0,a.jsx)("video",{ref:u,className:h().asset,style:y,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:(0,a.jsx)("source",{src:t,type:"video/mp4"})}):(0,a.jsx)("img",{ref:u,className:h().asset,style:y,src:t})})})})})}},2320:function(e,t,i){"use strict";i.r(t);var a=i(5893),s=i(5072);i(7294);var n=i(7017),l=i(8565),r=i(6699),o=i(9079),c=i(2897);t.default=()=>(0,a.jsxs)(a.Fragment,{children:[l.Ii,(0,a.jsx)(r.Z,{}),(0,a.jsxs)(s.E.main,{className:"body",...n.I,children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("h1",{className:"begin-section pt-0",children:"Log In & Sign Up Breakdown"}),(0,a.jsx)("h5",{className:"end-section",children:"Modular, single-purpose states"}),(0,a.jsx)(c.Z,{src:"/imgs/id/desktop/auth/comp.png"}),(0,a.jsxs)("div",{className:"lead begin-section mb-0 end-section",children:[(0,a.jsxs)("p",{children:["In early 2019, I was wrapping up the",(0,a.jsx)(o.Z,{content:"Directory",href:"/bitpay/directory",spaceAfter:!0,spaceBefore:!0}),"project and BitPay ID was just about to begin development work. The circumstances of this project left us on a extremely tight time frame to finalize requirements, create designs, and then build it all out."]}),(0,a.jsx)("p",{children:"This project was also unique in its strategy for rollout. Instead of building out a full consumer dashboard experience, we opted to start small and only build the Authentication and Verification portion that could be dropped into our payment gateway (Invoice). This would allow us to meet our risk management for high value invoices while maintaining a minimally complex new system."}),(0,a.jsx)("p",{children:"So the scenario boiled down to this. I needed:"}),(0,a.jsxs)("ol",{className:"list",children:[(0,a.jsxs)("li",{className:"list__item",children:[(0,a.jsx)("div",{className:"list__item__number",children:"1"}),(0,a.jsx)("div",{children:"Super fast turnaround (1 week)"})]}),(0,a.jsxs)("li",{className:"list__item",children:[(0,a.jsx)("div",{className:"list__item__number",children:"2"}),(0,a.jsx)("div",{children:"Style consistency with Invoice"})]}),(0,a.jsxs)("li",{className:"list__item",children:[(0,a.jsx)("div",{className:"list__item__number",children:"3"}),(0,a.jsx)("div",{children:"Style consistency with an unknown Consumer Dashboard"})]})]}),(0,a.jsx)("p",{children:"Luckily, working on designing Emails, the new Website, and the Directory all allowed me to have a better grasp on what direction our brand was heading. Ultimately, I chose to go down a neutral, minimal path that would allow us to shape the visual identity of the product over time while also being simple at a component level."})]})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"begin-section",children:"Create an Account"}),(0,a.jsx)("h5",{className:"end-section",children:"A minimal, walkthrough-like experience"}),(0,a.jsx)(c.Z,{src:["/imgs/id/desktop/auth/enter-email.svg","/imgs/id/desktop/auth/account-type.svg","/imgs/id/desktop/auth/create-password.svg","/imgs/id/desktop/auth/check-inbox.svg"],carousel:!0}),(0,a.jsxs)("div",{className:"lead begin-section end-section",children:[(0,a.jsx)("p",{children:"Obviously, the first part of any Authentication flow is the Account Creation flow. This would be utilized whenever a user visits our payment gateway when making a transaction over $3k USD."}),(0,a.jsx)("p",{children:"Initially, we had the idea of splitting the Email and Password fields into their own state; this was so we could strongly tailor someone's experience based on what we know from their email. If had no record of the email entered, then we prompted the user to Create an Account."}),(0,a.jsx)("p",{children:"As you can see, we also require all new user go through mandatory Email Verification. Verifying a user's email, while typically annoying when trying a new service, is an essential part of keeping the platform secure. When we issue refunds, we have to know that the user's email is valid so we don't accidentally send money to the wrong person (this is crypto after all)."})]}),(0,a.jsx)("h3",{className:"begin-section",children:"Mobile"}),(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("img",{style:{marginRight:24},width:"300",height:"100%",src:"/imgs/id/mobile/auth/enter-email.png",alt:"Mobile: Enter Email"}),(0,a.jsx)("img",{width:"300",height:"100%",src:"/imgs/id/mobile/auth/account-type.png",alt:"Mobile: Account Selector"})]}),(0,a.jsxs)("div",{className:"lead begin-section end-section",children:[(0,a.jsx)("p",{children:"From the start of the design process, I knew that the majority usage of this application would eventually be on mobile. After all, our debit card program was the BitPay's first implementation of consumer KYC and we knew a deeper integration between the mobile wallet and the debit card was coming soon."}),(0,a.jsx)("p",{children:"The biggest reason for using a large white background with centered content on desktop was that we could easily make it work well on mobile with minimal mutations. Fixing the main action button and the header to the bottom and top respectively was all that was needed for a responsive layout."})]}),(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("img",{style:{marginRight:24},width:"300",height:"100%",src:"/imgs/id/mobile/auth/create-password.png",alt:"Mobile: Create Password"}),(0,a.jsx)("img",{width:"300",height:"100%",src:"/imgs/id/mobile/auth/check-inbox.png",alt:"Mobile: Check Inbox"})]}),(0,a.jsx)("div",{className:"lead begin-section end-section",children:(0,a.jsx)("p",{children:"For mobile, the single-purpose state layout really worked well because of how much space the keyboard takes up on the screen. In fact, if you look at the most successful mobile onboarding flows (Cash App for example), they all utilize this type of state breakup."})})]}),(0,a.jsxs)("section",{children:[(0,a.jsx)("h2",{className:"begin-section",children:"Sign In"}),(0,a.jsx)("h5",{className:"end-section",children:"Universal login for all products"}),(0,a.jsx)(c.Z,{src:["/imgs/id/desktop/auth/enter-email.svg","/imgs/id/desktop/auth/enter-password.svg","/imgs/id/desktop/auth/enter-2fa.svg"],carousel:!0}),(0,a.jsxs)("div",{className:"lead begin-section end-section",children:[(0,a.jsx)("p",{children:"Like I mentioned previously, this was the first time we would be trying a split state for Email and Password fields. The additional complexity here is doing it in way that prevents enumeration attacks without excessively utilizing reCAPTCHA."}),(0,a.jsx)("p",{children:"The only major downside to this is changing the optimal clicks from 1 to 2. Where 1 click can be achieved when the user has their credentials saved to their device / browser."})]}),(0,a.jsx)("h3",{className:"begin-section",children:"Mobile"}),(0,a.jsxs)("div",{className:"d-flex",children:[(0,a.jsx)("img",{style:{marginRight:24},width:"300",height:"100%",src:"/imgs/id/mobile/auth/enter-password.png",alt:"Mobile: Enter Password"}),(0,a.jsx)("img",{width:"300",height:"100%",src:"/imgs/id/mobile/auth/enter-2fa.png",alt:"Mobile: Enter 2FA"})]}),(0,a.jsx)("div",{className:"lead begin-section end-section",children:(0,a.jsx)("p",{children:"Signing in to stuff on mobile is always a real annoyance for me so I wanted to make sure we would be compatible with browser detection and password managers, while attempting to make the experience as painless as possible. Eventually, I can imagine a system where all browser authentication is redirected into the BitPay mobile app where you can authenticate with a single tap similar to Google Prompt."})})]})]})]})},92:function(e){e.exports={dark:"sidebar_dark___qnvR",nav:"sidebar_nav__TIgPv",major:"sidebar_major__dRpgs",minor:"sidebar_minor__8RpND",shift:"sidebar_shift__Ok4cJ",active:"sidebar_active__WstEf"}},2699:function(e){e.exports={asset:"wide-screen_asset__M6qVo",wrapper:"wide-screen_wrapper__AeGjR",wrapper__dark:"wide-screen_wrapper__dark___w7Ye",dots:"wide-screen_dots__yu0Pw"}}},function(e){e.O(0,[72,777,888,774,179],function(){return e(e.s=143)}),_N_E=e.O()}]);