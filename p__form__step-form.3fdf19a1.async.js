(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8442],{31199:function(_,v,e){"use strict";var r=e(28991),t=e(81253),i=e(85893),s=e(67294),a=e(53294),d=["fieldProps","min","proFieldProps","max"],o=function(E,f){var B=E.fieldProps,D=E.min,A=E.proFieldProps,R=E.max,l=(0,t.Z)(E,d);return(0,i.jsx)(a.Z,(0,r.Z)({valueType:"digit",fieldProps:(0,r.Z)({min:D,max:R},B),ref:f,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:A},l))};v.Z=s.forwardRef(o)},64317:function(_,v,e){"use strict";var r=e(28991),t=e(81253),i=e(85893),s=e(22270),a=e(67294),d=e(66758),o=e(53294),M=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],E=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],f=a.forwardRef(function(l,W){var g=l.fieldProps,I=l.children,N=l.params,Z=l.proFieldProps,y=l.mode,z=l.valueEnum,b=l.request,V=l.showSearch,G=l.options,$=(0,t.Z)(l,M),u=(0,a.useContext)(d.Z);return(0,i.jsx)(o.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,s.h)(z),request:b,params:N,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({options:G,mode:y,showSearch:V,getPopupContainer:u.getPopupContainer},g),ref:W,proFieldProps:Z},$),{},{children:I}))}),B=a.forwardRef(function(l,W){var g=l.fieldProps,I=l.children,N=l.params,Z=l.proFieldProps,y=l.mode,z=l.valueEnum,b=l.request,V=l.options,G=(0,t.Z)(l,E),$=(0,r.Z)({options:V,mode:y||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},g),u=(0,a.useContext)(d.Z);return(0,i.jsx)(o.Z,(0,r.Z)((0,r.Z)({valueEnum:(0,s.h)(z),request:b,params:N,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,r.Z)({getPopupContainer:u.getPopupContainer},$),ref:W,proFieldProps:Z},G),{},{children:I}))}),D=f,A=B,R=D;R.SearchSelect=A,R.displayName="ProFormComponent",v.Z=R},5966:function(_,v,e){"use strict";var r=e(28991),t=e(81253),i=e(85893),s=e(53294),a=["fieldProps","proFieldProps"],d=["fieldProps","proFieldProps"],o="text",M=function(D){var A=D.fieldProps,R=D.proFieldProps,l=(0,t.Z)(D,a);return(0,i.jsx)(s.Z,(0,r.Z)({valueType:o,fieldProps:A,filedConfig:{valueType:o},proFieldProps:R},l))},E=function(D){var A=D.fieldProps,R=D.proFieldProps,l=(0,t.Z)(D,d);return(0,i.jsx)(s.Z,(0,r.Z)({valueType:"password",fieldProps:A,proFieldProps:R,filedConfig:{valueType:o}},l))},f=M;f.Password=E,f.displayName="ProFormComponent",v.Z=f},88227:function(_){_.exports={card:"card___2gwEq",result:"result___OtC7Q"}},81903:function(){},33208:function(_,v,e){"use strict";e.r(v);var r=e(58024),t=e(91894),i=e(48736),s=e(27049),a=e(17462),d=e(76772),o=e(39428),M=e(3182),E=e(2824),f=e(57106),B=e(99683),D=e(57663),A=e(71577),R=e(95300),l=e(7277),W=e(98858),g=e(4914),I=e(67294),N=e(75362),Z=e(65554),y=e(64317),z=e(952),b=e(5966),V=e(31199),G=e(88227),$=e.n(G),u=e(85893),U=function(P){var C=P.stepData,F=P.bordered,L=C.payAccount,m=C.receiverAccount,h=C.receiverName,S=C.amount;return(0,u.jsxs)(g.Z,{column:1,bordered:F,children:[(0,u.jsxs)(g.Z.Item,{label:"\u4ED8\u6B3E\u8D26\u6237",children:[" ",L]}),(0,u.jsxs)(g.Z.Item,{label:"\u6536\u6B3E\u8D26\u6237",children:[" ",m]}),(0,u.jsxs)(g.Z.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",children:[" ",h]}),(0,u.jsx)(g.Z.Item,{label:"\u8F6C\u8D26\u91D1\u989D",children:(0,u.jsx)(l.Z,{value:S,suffix:(0,u.jsx)("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},n=function(P){return(0,u.jsx)(B.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(A.Z,{type:"primary",onClick:P.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),(0,u.jsx)(A.Z,{children:"\u67E5\u770B\u8D26\u5355"})]}),className:$().result,children:P.children})},p=function(){var P=(0,I.useState)({payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500",receiverMode:"alipay"}),C=(0,E.Z)(P,2),F=C[0],L=C[1],m=(0,I.useState)(0),h=(0,E.Z)(m,2),S=h[0],T=h[1],j=(0,I.useRef)();return(0,u.jsx)(N.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,u.jsxs)(t.Z,{bordered:!1,children:[(0,u.jsxs)(Z.L,{current:S,onCurrentChange:T,submitter:{render:function(c,K){return c.step===2?null:K}},children:[(0,u.jsxs)(Z.L.StepForm,{formRef:j,title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",initialValues:F,onFinish:function(){var x=(0,M.Z)((0,o.Z)().mark(function c(K){return(0,o.Z)().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return L(K),H.abrupt("return",!0);case 2:case"end":return H.stop()}},c)}));return function(c){return x.apply(this,arguments)}}(),children:[(0,u.jsx)(y.Z,{label:"\u4ED8\u6B3E\u8D26\u6237",width:"md",name:"payAccount",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{"ant-design@alipay.com":"ant-design@alipay.com"}}),(0,u.jsxs)(z.ZP.Group,{title:"\u6536\u6B3E\u8D26\u6237",size:8,children:[(0,u.jsx)(y.Z,{name:"receiverMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{alipay:"\u652F\u4ED8\u5B9D",bank:"\u94F6\u884C\u8D26\u6237"}}),(0,u.jsx)(b.Z,{name:"receiverAccount",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u8D26\u6237"},{type:"email",message:"\u8D26\u6237\u540D\u5E94\u4E3A\u90AE\u7BB1\u683C\u5F0F"}],placeholder:"test@example.com"})]}),(0,u.jsx)(b.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"md",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,u.jsx)(V.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]}),(0,u.jsx)(Z.L.StepForm,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",children:(0,u.jsxs)("div",{className:$().result,children:[(0,u.jsx)(d.Z,{closable:!0,showIcon:!0,message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",style:{marginBottom:24}}),(0,u.jsx)(U,{stepData:F,bordered:!0}),(0,u.jsx)(s.Z,{style:{margin:"24px 0"}}),(0,u.jsx)(b.Z.Password,{label:"\u652F\u4ED8\u5BC6\u7801",width:"md",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652F\u4ED8\u5BC6\u7801\u624D\u80FD\u8FDB\u884C\u652F\u4ED8"}]})]})}),(0,u.jsx)(Z.L.StepForm,{title:"\u5B8C\u6210",children:(0,u.jsx)(n,{onFinish:(0,M.Z)((0,o.Z)().mark(function x(){var c;return(0,o.Z)().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:T(0),(c=j.current)===null||c===void 0||c.resetFields();case 2:case"end":return J.stop()}},x)})),children:(0,u.jsx)(U,{stepData:F})})})]}),(0,u.jsx)(s.Z,{style:{margin:"40px 0 24px"}}),(0,u.jsxs)("div",{className:$().desc,children:[(0,u.jsx)("h3",{children:"\u8BF4\u660E"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"}),(0,u.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u94F6\u884C\u5361"}),(0,u.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"})]})]})})};v.default=p},7277:function(_,v,e){"use strict";e.d(v,{Z:function(){return u}});var r=e(22122),t=e(67294),i=e(57838),s=e(96159),a=e(96156),d=e(94184),o=e.n(d),M=e(53124),E=e(90860),f=e(11726),B=e.n(f),D=function(n){var p=n.value,O=n.formatter,P=n.precision,C=n.decimalSeparator,F=n.groupSeparator,L=F===void 0?"":F,m=n.prefixCls,h;if(typeof O=="function")h=O(p);else{var S=String(p),T=S.match(/^(-?)(\d*)(\.(\d+))?$/);if(!T||S==="-")h=S;else{var j=T[1],x=T[2]||"0",c=T[4]||"";x=x.replace(/\B(?=(\d{3})+(?!\d))/g,L),typeof P=="number"&&(c=B()(c,P,"0").slice(0,P>0?P:0)),c&&(c="".concat(C).concat(c)),h=[t.createElement("span",{key:"int",className:"".concat(m,"-content-value-int")},j,x),c&&t.createElement("span",{key:"decimal",className:"".concat(m,"-content-value-decimal")},c)]}}return t.createElement("span",{className:"".concat(m,"-content-value")},h)},A=D,R=function(n){var p=n.prefixCls,O=n.className,P=n.style,C=n.valueStyle,F=n.value,L=F===void 0?0:F,m=n.title,h=n.valueRender,S=n.prefix,T=n.suffix,j=n.loading,x=j===void 0?!1:j,c=n.direction,K=n.onMouseEnter,J=n.onMouseLeave,H=n.decimalSeparator,Q=H===void 0?".":H,X=n.groupSeparator,w=X===void 0?",":X,Y=t.createElement(A,(0,r.Z)({decimalSeparator:Q,groupSeparator:w},n,{value:L})),k=o()(p,(0,a.Z)({},"".concat(p,"-rtl"),c==="rtl"),O);return t.createElement("div",{className:k,style:P,onMouseEnter:K,onMouseLeave:J},m&&t.createElement("div",{className:"".concat(p,"-title")},m),t.createElement(E.Z,{paragraph:!1,loading:x,className:"".concat(p,"-skeleton")},t.createElement("div",{style:C,className:"".concat(p,"-content")},S&&t.createElement("span",{className:"".concat(p,"-content-prefix")},S),h?h(Y):Y,T&&t.createElement("span",{className:"".concat(p,"-content-suffix")},T))))},l=(0,M.PG)({prefixCls:"statistic"})(R),W=l,g=e(28481),I=e(32475),N=e.n(I),Z=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function y(U,n){var p=U,O=/\[[^\]]*]/g,P=(n.match(O)||[]).map(function(m){return m.slice(1,-1)}),C=n.replace(O,"[]"),F=Z.reduce(function(m,h){var S=(0,g.Z)(h,2),T=S[0],j=S[1];if(m.includes(T)){var x=Math.floor(p/j);return p-=x*j,m.replace(new RegExp("".concat(T,"+"),"g"),function(c){var K=c.length;return N()(x.toString(),K,"0")})}return m},C),L=0;return F.replace(O,function(){var m=P[L];return L+=1,m})}function z(U,n){var p=n.format,O=p===void 0?"":p,P=new Date(U).getTime(),C=Date.now(),F=Math.max(P-C,0);return y(F,O)}var b=1e3/30;function V(U){return new Date(U).getTime()}var G=function(n){var p=n.value,O=n.format,P=O===void 0?"HH:mm:ss":O,C=n.onChange,F=n.onFinish,L=(0,i.Z)(),m=t.useRef(null),h=function(){F==null||F(),m.current&&(clearInterval(m.current),m.current=null)},S=function(){var c=V(p);c>=Date.now()&&(m.current=setInterval(function(){L(),C==null||C(c-Date.now()),c<Date.now()&&h()},b))};t.useEffect(function(){return S(),function(){m.current&&(clearInterval(m.current),m.current=null)}},[p]);var T=function(c,K){return z(c,(0,r.Z)((0,r.Z)({},K),{format:P}))},j=function(c){return(0,s.Tm)(c,{title:void 0})};return t.createElement(W,(0,r.Z)({},n,{valueRender:j,formatter:T}))},$=t.memo(G);W.Countdown=$;var u=W},95300:function(_,v,e){"use strict";var r=e(38663),t=e.n(r),i=e(81903),s=e.n(i),a=e(18446)},48983:function(_,v,e){var r=e(40371),t=r("length");_.exports=t},18190:function(_){var v=9007199254740991,e=Math.floor;function r(t,i){var s="";if(!t||i<1||i>v)return s;do i%2&&(s+=t),i=e(i/2),i&&(t+=t);while(i);return s}_.exports=r},78302:function(_,v,e){var r=e(18190),t=e(80531),i=e(40180),s=e(62689),a=e(88016),d=e(83140),o=Math.ceil;function M(E,f){f=f===void 0?" ":t(f);var B=f.length;if(B<2)return B?r(f,E):f;var D=r(f,o(E/a(f)));return s(f)?i(d(D),0,E).join(""):D.slice(0,E)}_.exports=M},88016:function(_,v,e){var r=e(48983),t=e(62689),i=e(21903);function s(a){return t(a)?i(a):r(a)}_.exports=s},21903:function(_){var v="\\ud800-\\udfff",e="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",t="\\u20d0-\\u20ff",i=e+r+t,s="\\ufe0e\\ufe0f",a="["+v+"]",d="["+i+"]",o="\\ud83c[\\udffb-\\udfff]",M="(?:"+d+"|"+o+")",E="[^"+v+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",B="[\\ud800-\\udbff][\\udc00-\\udfff]",D="\\u200d",A=M+"?",R="["+s+"]?",l="(?:"+D+"(?:"+[E,f,B].join("|")+")"+R+A+")*",W=R+A+l,g="(?:"+[E+d+"?",d,f,B,a].join("|")+")",I=RegExp(o+"(?="+o+")|"+g+W,"g");function N(Z){for(var y=I.lastIndex=0;I.test(Z);)++y;return y}_.exports=N},11726:function(_,v,e){var r=e(78302),t=e(88016),i=e(40554),s=e(79833);function a(d,o,M){d=s(d),o=i(o);var E=o?t(d):0;return o&&E<o?d+r(o-E,M):d}_.exports=a},32475:function(_,v,e){var r=e(78302),t=e(88016),i=e(40554),s=e(79833);function a(d,o,M){d=s(d),o=i(o);var E=o?t(d):0;return o&&E<o?r(o-E,M)+d:d}_.exports=a},18601:function(_,v,e){var r=e(14841),t=1/0,i=17976931348623157e292;function s(a){if(!a)return a===0?a:0;if(a=r(a),a===t||a===-t){var d=a<0?-1:1;return d*i}return a===a?a:0}_.exports=s},40554:function(_,v,e){var r=e(18601);function t(i){var s=r(i),a=s%1;return s===s?a?s-a:s:0}_.exports=t}}]);
