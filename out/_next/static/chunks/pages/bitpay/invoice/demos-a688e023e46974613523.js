(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{9302:function(e,s,n){"use strict";var i=n(5893),t=n(7294),r=n(2479),a=n.n(r),c=n(1770),o=n(6589),l=n(9430),d=n(169),p=n(433),u=n(7963),h=n(2455),m="https://ash.bhimasani.com/bitpay/invoice";s.Z=function(){var e=(0,t.useState)(!0),s=e[0],n=e[1],r=(0,t.useState)({toastTitle:"Payment Link Copied",value:m,showToast:!1}),x=r[0],_=r[1],j=function(){(0,h.Z)(m),(0,d.EV)({toastTitle:"Payment Link Copied!",value:m,showToast:!0},x,_)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(p.Z,{}),(0,i.jsxs)(c.E.div,{className:a().invoice,children:[(0,i.jsx)(o.Z,{rate:"11,382.15 USD",due:"0.011861 BTC",networkCost:!0}),(0,i.jsx)(c.E.div,{className:a().price,children:"$135.00"}),(0,i.jsx)(u.Z,{qrVisible:s,qr:"btc"}),(0,i.jsx)(l.Z,{qrVisible:s,qrToggle:n,walletToggle:function(){window.open("".concat("bitcoin:1GnVjxpvak4CSJRAF6FFRHuboBA5uA8BTR","?amount=").concat(.011861,"&label=").concat(encodeURI("Ash Bhimasani"),"&message=").concat(encodeURI("\ud83c\udf53\ud83e\udd20\ud83d\ude80")),"_self"),(0,d.EV)({toastTitle:'Uncheck "Subtract Fee"',value:"Make sure to uncheck the \u201cSubtract Fee from Amount\u201d option next to your total amount.",type:"warning",buttons:[{text:"Help Me",action:function(){return window.open("https://bitpay.com/request-help/wizard","_blank")}},{text:"Copy Payment",action:j}],showToast:!0},x,_)},copyToggle:j})]}),(0,i.jsx)("div",{style:{position:"relative",marginTop:26},children:(0,i.jsx)(d.ZP,{open:x.showToast,close:function(){return(0,d.yg)(x,_)},title:x.toastTitle,caption:x.value,type:x.type,buttons:x.buttons})})]})}},6352:function(e,s,n){"use strict";var i=n(5893),t=n(7294),r=n(6570),a=n.n(r),c=n(2479),o=n.n(c),l=n(1770),d=n(6589),p=n(169),u=n(7166),h=n.n(u)().bind(a());s.Z=function(e){var s=e.type,n=(0,t.useState)(!0),r=n[0],c=n[1];return(0,i.jsxs)("div",{children:[(0,i.jsxs)(l.E.div,{className:o().invoice,onClick:function(){return c(!r)},style:"underpaid"===s||"overpaid"===s||"refund"===s?{cursor:"pointer"}:{},children:[(0,i.jsx)(d.Z,{timestamp:!0}),"paid"===s&&(0,i.jsxs)(l.E.div,{className:h({status:!0,status__green:!0}),children:[(0,i.jsx)("img",{className:a().status__icon,src:"/icons/status-paid.svg"}),"Success"]}),"delayed"===s&&(0,i.jsxs)(l.E.div,{className:h({status:!0,status__orange:!0}),children:[(0,i.jsx)("img",{className:a().status__icon,src:"/icons/status-confirming.svg"}),"Payment Detected"]}),("overpaid"===s||"refund"===s)&&(0,i.jsxs)(l.E.div,{className:h({status:!0,status__blue:!0}),children:[(0,i.jsx)("img",{className:h({status__icon:!0,status__blue__pulse:r}),src:"/icons/status-refund.svg"}),"Refund Available"]}),"underpaid"===s&&(0,i.jsxs)(l.E.div,{className:h({status:!0,status__red:!0}),children:[(0,i.jsx)("img",{className:h({status__icon:!0,status__red__pulse:r}),src:"/icons/status-declined.svg"}),"Payment Declined"]}),"processing"===s&&(0,i.jsxs)(l.E.div,{className:h({status:!0,status__blue:!0}),children:[(0,i.jsx)("img",{className:a().status__icon,src:"/icons/status-processing.svg"}),"Refund Processing"]}),(0,i.jsx)(l.E.div,{className:o().price,children:"$135.00"}),(0,i.jsxs)("div",{className:a().details,children:[(0,i.jsxs)("div",{className:a().details__row,children:[(0,i.jsx)("div",{className:a().details__row__left,children:"Exchange Rate"}),(0,i.jsx)("div",{className:a().details__row__right,children:"16,410.28 USD"})]}),(0,i.jsxs)("div",{className:a().details__row,children:[(0,i.jsx)("div",{className:a().details__row__left,children:"Network Cost"}),(0,i.jsx)("div",{className:a().details__row__right,children:"0.000029 BTC"})]}),(0,i.jsxs)("div",{className:a().details__row,children:[(0,i.jsx)("div",{className:a().details__row__left,children:"Total Due"}),(0,i.jsx)("div",{className:a().details__row__right,children:"0.008226 BTC"})]}),(0,i.jsxs)("div",{className:a().details__row,children:[(0,i.jsx)("div",{className:a().details__row__left,children:"Amount Paid"}),(0,i.jsxs)("a",{className:a().details__row__right,href:"https://explorer.bitcoin.com/btc/tx/29a3efd3ef04f9153d47a990bd7b048a4b2d213daaa5fb8ed670fb85f13bdbcf",target:"_blank",rel:"noopener noreferrer",children:["overpaid"===s&&(0,i.jsx)(i.Fragment,{children:" 0.009973 BTC"}),"underpaid"===s&&(0,i.jsx)(i.Fragment,{children:" 0.008001 BTC"}),("paid"===s||"processing"===s||"refund"===s||"delayed"===s)&&(0,i.jsx)(i.Fragment,{children:" 0.008226 BTC"})]})]}),("processing"===s||"refund"===s)&&(0,i.jsxs)("div",{className:a().details__row,children:[(0,i.jsx)("div",{className:a().details__row__left,children:"Refund Due"}),(0,i.jsx)("div",{className:a().details__row__right,style:{fontWeight:600},children:"135.00 USD"})]}),"processing"===s&&(0,i.jsxs)("div",{className:a().details__row,children:[(0,i.jsx)("div",{className:a().details__row__left,children:"Refund Address"}),(0,i.jsx)("a",{className:a().details__row__right,href:"https://explorer.bitcoin.com/btc/address/1GnVjxpvak4CSJRAF6FFRHuboBA5uA8BTR",target:"_blank",rel:"noopener noreferrer",children:"1GnVjx\u2026uA8BTR"})]})]})]}),(0,i.jsxs)("div",{style:{position:"relative",marginTop:26},children:["paid"===s&&(0,i.jsx)(p.ZP,{open:!0,title:"We'd love to hear your feedback!",caption:"Tell us how we're doing or if you have any suggestions or feature requests.",type:"feedback",lightMode:!0}),"delayed"===s&&(0,i.jsx)(p.ZP,{open:!0,title:"Low Fee Warning!",caption:"This payment was sent with a low transaction fee and may take longer than normal to confirm.",type:"timer",buttons:[{text:"Learn More"}]}),"overpaid"===s&&(0,i.jsx)(p.ZP,{open:!0,title:"Here\u2019s your change",caption:"A refund of 0.001747 BTC is available for your overpayment.",type:"refund",buttons:[{text:"Enter Address"}]}),"underpaid"===s&&(0,i.jsx)(p.ZP,{open:!0,title:"Here\u2019s a full refund",caption:"A refund of 0.008001 BTC is available for your underpayment.",type:"refund",buttons:[{text:"Enter Address"}]}),"refund"===s&&(0,i.jsx)(p.ZP,{open:!0,title:"Here\u2019s your refund",caption:"A refund for 135.00 USD has been authorized on Dec 18 2020, 6:00 PM.",type:"refund",buttons:[{text:"Enter Address"}]}),"processing"===s&&(0,i.jsx)(p.ZP,{open:!0,title:"Address Saved!",caption:"This refund will be sent to you within 1 to 2 business days.",type:"info"})]})]})}},4598:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return I}});var i=n(5893),t=n(6265),r=n(7294),a=n(1770),c=n(3991),o=n(2766),l=n(5377),d=n(9511),p=n(4337),u=n(7891),h=n(2479),m=n.n(h),x=n(6589),_=n(433),j=n(1575),g=function(){var e=(0,r.useState)(j.l_[0]),s=e[0],n=e[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(_.Z,{}),(0,i.jsxs)(a.E.div,{className:m().invoice,children:[(0,i.jsx)(x.Z,{rate:"1.00 USD",due:"135.00 USD"}),(0,i.jsx)(a.E.div,{className:m().price,children:"$135.00"}),(0,i.jsx)(j.Eh,{selected:s,select:n})]})]})},v=n(9521),f=n(6352),b=n(963),y=n(2963),w=n(2052),N=n(2605),P=n(7713),Z=n.n(P),B=n(5600);function E(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function C(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?E(Object(n),!0).forEach((function(s){(0,t.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}var T=function(e){var s=e.session,n=e.refund;return(0,i.jsxs)(a.E.div,{className:m().invoice,children:[(0,i.jsx)(x.Z,C({},n?{rate:"419.25 USD",due:"0.322003 BCH",refund:n}:{total:"4179.25 USD"})),(0,i.jsxs)("div",{className:Z().wallets,style:{padding:"12px 20px 20px"},children:[(0,i.jsx)(a.E.img,{style:{margin:"12px auto -4px"},width:"32px",src:"https://bitpay.com/img/wallet-logos/bitpay-wallet.svg"}),(0,i.jsx)("div",{className:m().title,children:n?"Sign in to BitPay":"Verification Required"}),(0,i.jsx)("div",{className:m().caption,children:n?(0,i.jsx)(i.Fragment,{children:"To initiate your refund, please sign in or create an account to continue."}):(0,i.jsxs)(i.Fragment,{children:["This payment requires ID verification."," ",s?"Continue to complete verification.":"Please sign in or register to continue."]})}),s&&(0,i.jsxs)("div",{className:Z().user,style:{marginTop:28},children:[(0,i.jsx)("img",{src:"/logos/ab-logo.svg",alt:"Ash's Logo",width:"34px",style:{marginRight:14}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:Z().user__name,children:"Ash Bhimasani"}),(0,i.jsx)("div",{className:Z().user__email,children:"16abhimasani@gmail.com"})]})]}),(0,i.jsx)("div",{style:{marginTop:40},children:(0,i.jsx)(B.ZP,{main:s?"Proceed":"Sign In or Register",async:"Awaiting ".concat(s?"Verification":"Authentication")})})]})]})},O=n(9302),S=n(6584),R=function(e){var s=e.type;return(0,i.jsxs)("div",{children:[(0,i.jsx)(_.Z,{}),(0,i.jsxs)(a.E.div,{className:m().invoice,children:[(0,i.jsx)(x.Z,{rate:"11,382.15 USD",due:"0.011861 BTC"}),(0,i.jsxs)("div",{className:Z().wallets,style:{height:344,overflow:"hidden"},children:[(0,i.jsx)("div",{className:m().title,children:"Awaiting Confirmation"}),(0,i.jsxs)("div",{className:m().caption,children:["We are awaiting confirmation of your payment on the"," ",(0,i.jsx)("a",{href:"https://explorer.bitcoin.com/btc/tx/29a3efd3ef04f9153d47a990bd7b048a4b2d213daaa5fb8ed670fb85f13bdbcf",target:"_blank",rel:"noopener noreferrer",children:"blockchain"})]}),(0,i.jsx)(S.Z,{icon:"/icons/currencies/".concat(s.toLocaleLowerCase(),".svg"),theme:"btc"===s.toLocaleLowerCase()?"#F7931A":"#2FCF6E"})]})]})]})},A=n(3031),D=n.n(A),k=function(e){var s=e.placeholder,n=e.type;return(0,i.jsxs)("div",{className:D().form__group,children:[(0,i.jsx)("input",{type:n,className:D().form__field,placeholder:s}),(0,i.jsx)("label",{htmlFor:n,className:D().form__label,children:s})]})},F=function(){return(0,i.jsxs)(a.E.div,{className:m().invoice,children:[(0,i.jsx)(x.Z,{rate:"419.25 USD",due:"0.322003 BCH",refund:!0}),(0,i.jsxs)("div",{className:Z().wallets,style:{padding:"12px 20px 20px"},children:[(0,i.jsx)(a.E.img,{style:{margin:"12px auto -4px"},width:"28px",src:"/icons/bp-refund-grey.svg"}),(0,i.jsx)("div",{className:m().title,children:"Get Refunded"}),(0,i.jsx)("div",{className:m().caption,children:"To receive your refund we\u2019ll need a BCH address from your wallet."}),(0,i.jsx)("div",{style:{margin:"24px 12px 0"},children:(0,i.jsx)(k,{type:"other",placeholder:"Refund address"})}),(0,i.jsx)("div",{style:{marginTop:40},children:(0,i.jsx)(B.ZP,{main:"Submit",async:"Processing"})})]})]})},U=function(e){var s=e.refund;return(0,i.jsxs)(a.E.div,{className:m().invoice,children:[(0,i.jsx)(x.Z,{rate:"419.25 USD",due:"0.322003 BCH",refund:s}),(0,i.jsxs)("div",{className:Z().wallets,style:{padding:"12px 20px 20px"},children:[(0,i.jsx)(a.E.img,{style:{margin:"12px auto -10px"},width:"24px",src:"/icons/status-declined.svg"}),(0,i.jsxs)("div",{className:m().title,style:{color:"#EF476F"},children:[s?"Refund":"Payment"," Expired"]}),(0,i.jsx)("div",{className:m().caption,children:s?(0,i.jsx)(i.Fragment,{children:"Refund links are only valid for 3 days. Tap below to get a new email."}):(0,i.jsx)(i.Fragment,{children:"Your 15 minute window to pay has expired. Please do not send any funds."})}),(0,i.jsx)("div",{style:{marginTop:40},children:(0,i.jsx)(B.ZP,{main:s?"Resend Email":"Try Again",async:s?"Sending Email":"Regenerating Invoice"})})]})]})},M=n(1945);function W(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function H(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?W(Object(n),!0).forEach((function(s){(0,t.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}var I=function(){return(0,i.jsxs)(i.Fragment,{children:[M.Wd,(0,i.jsx)(l.Z,{}),(0,i.jsxs)(a.E.main,H(H({className:"body"},c.I),{},{children:[(0,i.jsx)("h1",{className:"begin-section pt-0",children:"BitPay Invoice V4 Demos"}),(0,i.jsxs)("h5",{className:"end-section",children:["Reference UI",(0,i.jsx)(o.Z,{content:"implementations",href:"https://github.com/16abhimasani/ash.bhimasani.com/tree/master/components/demos/invoice",spaceBefore:!0})]}),(0,i.jsxs)("section",{className:"end-section",children:[(0,i.jsx)("h3",{className:"begin-section",children:"Wallet Selection"}),(0,i.jsx)("h5",{children:"Identifying source of funds for an optimal experience"}),(0,i.jsx)("h4",{id:"walletSelection",children:"Search & Selection"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(b.Z,{})}),(0,i.jsx)("h4",{id:"browserConnect",children:"Connect Web3 Wallet (Same-Device)"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(y.Z,{type:"metamask"})}),(0,i.jsx)("h4",{id:"walletConnect",children:"Connect Web3 Wallet (Cross-Device)"}),(0,i.jsx)("div",{className:"begin-section wrapper-center",children:(0,i.jsx)(w.Z,{type:"argent"})}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(w.Z,{type:"coinbaseWallet"})}),(0,i.jsx)("h4",{id:"hardwareConnect",children:"Connect Hardware Wallet (USB)"}),(0,i.jsx)("div",{className:"begin-section wrapper-center",children:(0,i.jsx)(y.Z,{type:"ledger"})}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(y.Z,{type:"trezor"})}),(0,i.jsx)("h4",{id:"oauth",children:"Connect Exchange Account (OAuth)"}),(0,i.jsx)("div",{className:"begin-section wrapper-center",children:(0,i.jsx)(N.Z,{type:"coinbase"})}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(N.Z,{type:"gemini"})})]}),(0,i.jsxs)("section",{className:"end-section",children:[(0,i.jsx)("h3",{className:"begin-section",id:"kyc",children:"Compliance & Authentication"}),(0,i.jsx)("h5",{children:"Handling regulatory requirements for high-value payments"}),(0,i.jsx)("h4",{children:"KYC Required"}),(0,i.jsx)("div",{className:"begin-section wrapper-center",children:(0,i.jsx)(T,{})}),(0,i.jsx)("div",{className:"begin-section wrapper-center",children:(0,i.jsx)(T,{session:!0})}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(T,{refund:!0})})]}),(0,i.jsxs)("section",{className:"end-section",children:[(0,i.jsx)("h3",{className:"begin-section",children:"Payment Acceptance"}),(0,i.jsx)("h5",{children:"3 mutations optimized for source of funds"}),(0,i.jsx)("h4",{id:"genericMode",children:"Generic Mode (P2P)"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:100},children:(0,i.jsx)(p.Z,{})}),(0,i.jsx)("h4",{id:"connectMode",children:"Connect Mode (Web3 / OAuth / USB)"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:50},children:(0,i.jsx)(u.Z,{})}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:50},children:(0,i.jsx)(u.Z,{web3:!0})}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:100},children:(0,i.jsx)(g,{})}),(0,i.jsx)("h4",{id:"bip21Mode",children:"BIP-21 Mode (P2P)"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:100},children:(0,i.jsx)(v.Z,{})}),(0,i.jsx)("h4",{id:"bip72Mode",children:"BIP-72 Mode (Payment Protocol)"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:80},children:(0,i.jsx)(O.Z,{})}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(R,{type:"btc"})}),(0,i.jsx)("h4",{id:"bpMode",children:"BitPay Ecosystem Mode"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(d.Z,{})})]}),(0,i.jsxs)("section",{className:"begin-section end-section",children:[(0,i.jsx)("h3",{className:"begin-section",id:"receipts",children:"Payment Receipts"}),(0,i.jsx)("h5",{children:"Singular design to handle all post-payment experiences"}),(0,i.jsx)("h4",{children:"Payment Complete"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:184},children:(0,i.jsx)(f.Z,{type:"paid"})}),(0,i.jsx)("h4",{children:"Merchant Refund"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:184},children:(0,i.jsx)(f.Z,{type:"refund"})}),(0,i.jsx)("h4",{children:"Refund Processing"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:124},children:(0,i.jsx)(f.Z,{type:"processing"})}),(0,i.jsx)("h4",{children:"Overpaid"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:184},children:(0,i.jsx)(f.Z,{type:"overpaid"})}),(0,i.jsx)("h4",{children:"Underpaid"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:184},children:(0,i.jsx)(f.Z,{type:"underpaid"})}),(0,i.jsx)("h4",{children:"Low Miner Fee"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",style:{marginBottom:184},children:(0,i.jsx)(f.Z,{type:"delayed"})}),(0,i.jsx)("h4",{children:"Enter Refund Address"}),(0,i.jsx)("div",{className:"begin-section end-section wrapper-center",children:(0,i.jsx)(F,{})}),(0,i.jsx)("h4",{children:"Invoice Expired"}),(0,i.jsx)("div",{className:"begin-section wrapper-center",children:(0,i.jsx)(U,{})}),(0,i.jsx)("div",{className:"begin-section wrapper-center",children:(0,i.jsx)(U,{refund:!0})})]})]}))]})}},817:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bitpay/invoice/demos",function(){return n(4598)}])},3031:function(e){e.exports={form__group:"mat-input_form__group__9XHzl",form__field:"mat-input_form__field__1xZ1Z",form__label:"mat-input_form__label__1jBK2"}},6570:function(e){e.exports={status:"invoice-receipt_status__2mUD8",status__icon:"invoice-receipt_status__icon__3Z1gs",status__green:"invoice-receipt_status__green__3mfxz",status__red:"invoice-receipt_status__red__1RCYx",status__red__pulse:"invoice-receipt_status__red__pulse__Ip4y5",pulseRed:"invoice-receipt_pulseRed__1wFBe",status__orange:"invoice-receipt_status__orange__29jj7",status__blue:"invoice-receipt_status__blue__hd4Lq",status__blue__pulse:"invoice-receipt_status__blue__pulse__31aWh",pulseBlue:"invoice-receipt_pulseBlue__3GVDj",details:"invoice-receipt_details__1_sWP",details__row:"invoice-receipt_details__row__2YLCH",details__row__left:"invoice-receipt_details__row__left__2brRf",details__row__right:"invoice-receipt_details__row__right__1bSXG"}}},function(e){e.O(0,[770,587,209,575,774,888,179],(function(){return s=817,e(e.s=s);var s}));var s=e.O();_N_E=s}]);