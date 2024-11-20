"use strict";(self.webpackChunkrefernces_docs=self.webpackChunkrefernces_docs||[]).push([[463],{2039:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"ICH-detection","title":"Koponya\u0171ri v\xe9rz\xe9s detekt\xe1l\xe1sa neur\xe1lis h\xe1l\xf3 seg\xedts\xe9g\xe9vel","description":"Description","source":"@site/docs/ICH-detection.md","sourceDirName":".","slug":"/ICH-detection","permalink":"/ICH-detection","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Koponya\u0171ri v\xe9rz\xe9s detekt\xe1l\xe1sa neur\xe1lis h\xe1l\xf3 seg\xedts\xe9g\xe9vel","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Welcome","permalink":"/"},"next":{"title":"Android Workout Tracker","permalink":"/android-project"}}');var a=s(4848),n=s(8453);const r={title:"Koponya\u0171ri v\xe9rz\xe9s detekt\xe1l\xe1sa neur\xe1lis h\xe1l\xf3 seg\xedts\xe9g\xe9vel",sidebar_position:2},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"V\xe9rz\xe9s t\xedpusok",id:"v\xe9rz\xe9s-t\xedpusok",level:2},{value:"Eredm\xe9nyek",id:"eredm\xe9nyek",level:2},{value:"Projects Content",id:"projects-content",level:2}];function c(e){const t={h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Egy olyan szoftverest megold\xe1st k\xe9sz\xedtsek, amely seg\xedts\xe9get ny\xfajt a radiol\xf3gus orvosok sz\xe1m\xe1ra a baleseti s\xfcrg\u0151ss\xe9gi ell\xe1t\xe1sban fejs\xe9r\xfcl\xe9st szenvedett betegek komputertomogr\xe1fi\xe1s elj\xe1r\xe1ssal k\xe9sz\xfclt agyi felv\xe9teleikr\u0151l meg\xe1llap\xedtani, hogy az adott felv\xe9telen tal\xe1lhat\xf3-e agyi v\xe9rz\xe9s."}),"\n",(0,a.jsx)(t.li,{children:"Ehhez egy mesters\xe9ges intelligenci\xe1s, m\xe9ly tanul\xe1sos megold\xe1st k\xe9sz\xedtettem, amely egy konvol\xfaci\xf3s neur\xe1lis h\xe1l\xf3n alapszik. Bemenetk\xe9nt DICOM form\xe1tum\xfa felv\xe9tel szeleteket kap, amelyek radiol\xf3gusok \xe1ltal lettek annot\xe1lva a v\xe9rz\xe9s megl\xe9t\xe9vel \xe9s t\xedpus\xe1val. Ezeket a DICOM szeleteket 3 csatorn\xe1s k\xe9p filek\xe9nt kapja meg a h\xe1l\xf3, a c\xedmk\xe9je pedig egy n oszt\xe1ly\xfa bin\xe1ris vektor. Ezt a h\xe1l\xf3t fejlesztettem, tan\xedtottam k\xfcl\xf6nb\xf6z\u0151 param\xe9terekkel \xe9s pr\xf3b\xe1ltam meg vele egy min\xe9l magasabb pontoss\xe1g metrik\xe1j\xfa v\xe1ltozatot k\xe9sz\xedteni."}),"\n",(0,a.jsx)(t.li,{children:"A h\xe1l\xf3t t\xf6bb szempont alapj\xe1n ki\xe9rt\xe9keltem \xe9s k\xe9sz\xedtettem egy dem\xf3 alkalmaz\xe1st hozz\xe1 a tesztelhet\u0151s\xe9g\xe9re, ahol saj\xe1t agyi CT felv\xe9tel k\xe9pekkel tesztelhet\u0151 \xe9s kipr\xf3b\xe1lhat\xf3, amely el\u0151revet\xedti k\xfcl\xf6nb\xf6z\u0151 saj\xe1t adatb\xe1zisok haszn\xe1lhat\xf3s\xe1g\xe1t."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"v\xe9rz\xe9s-t\xedpusok",children:"V\xe9rz\xe9s t\xedpusok"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ICH types",src:s(6276).A+"",width:"1106",height:"610"})}),"\n",(0,a.jsx)(t.h2,{id:"eredm\xe9nyek",children:"Eredm\xe9nyek"}),"\n",(0,a.jsx)(t.p,{children:"A modell utols\xf3 tanul\xe1sa ut\xe1n siker\xfclt megfelel\u0151en magas tal\xe1lati sz\xe1zal\xe9kokat el\xe9rni ahhoz, hogy a modell val\xf3s k\xf6rnyezetben val\xf3 haszn\xe1lat eset\xe9n is megb\xedzhat\xf3nak sz\xe1m\xedtson. A minim\xe1lis elv\xe1r\xe1s a r\xe9szemr\u0151l a h\xe1l\xf3 ir\xe1ny\xe1ba az volt, hogy az esetek legal\xe1bb nyolcvan sz\xe1zal\xe9k\xe1ban j\xf3l tudja meg\xe1llap\xedtani a kimenetet, amit siker\xfclt is megval\xf3s\xedtani. Az adathalmazban a k\xe9t leggyakrabban pozit\xedv c\xedmke az intravenricular \xe9s az any, aminek l\xe1that\xf3 k\xf6vetkezm\xe9nye is, hogy ennek a k\xe9t oszt\xe1lynak van a legmagasabb val\xf3s pontoss\xe1ga. Az epidural \xe9rt\xe9k az\xe9rt ennyire magas, mivel szinte minden esetben nulla \xe9rt\xe9ket vesz fel, amire a modell gyorsan r\xe1 is tanul, \xedgy csak azokat a ritka eseteket nem tal\xe1lja el, ahol pozit\xedv az \xe9rt\xe9ke."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"ICH metrics",src:s(296).A+"",width:"648",height:"710"})}),"\n",(0,a.jsx)(t.h2,{id:"projects-content",children:"Projects Content"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"File(s)"}),(0,a.jsx)(t.th,{children:"about"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"csv_reader.py"}),(0,a.jsx)(t.td,{children:"Az eredeti c\xedmk\xe9ket tartalmaz\xf3 filet alak\xedtja optim\xe1lisabb form\xe1tumra"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"dataset.py"}),(0,a.jsx)(t.td,{children:"Az k\xe9pekb\u0151l \xe9s c\xedmk\xe9kb\u0151l \xe1ll\xf3 adathalmaz"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"dcm_reader.py"}),(0,a.jsx)(t.td,{children:"DICOM fileok beolvas\xe1s\xe1ra \xe9s h\xe1rom csatorn\xe1s k\xe9pekre alak\xedt\xe1s\xe1ra szolg\xe1l"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"dcm_sampler.py"}),(0,a.jsx)(t.td,{children:"Egy sampler, melynek feladata a bemeneti adathalmaz kiegyenl\xedt\xe9se"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"id_vectors.csv"}),(0,a.jsx)(t.td,{children:"Az \xe1talak\xedtott c\xedmke \xe1llom\xe1ny"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"model_test.pth"}),(0,a.jsx)(t.td,{children:"A m\xe1r feltan\xedtott modell"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"model.py"}),(0,a.jsx)(t.td,{children:"Pytorch alap\xfa konvol\xfaci\xf3s neur\xe1lis oszt\xe1lyz\xf3 modell"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"stage_2_train.csv"}),(0,a.jsx)(t.td,{children:"Eredeti bemeneti label \xe1llom\xe1ny"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"test.py"}),(0,a.jsx)(t.td,{children:"A tesztel\xe9sre szolg\xe1l\xf3 funkci\xf3kat \xf6sszefog\xf3 file"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"train.py"}),(0,a.jsx)(t.td,{children:"A h\xe1l\xf3 tan\xedt\xe1s\xe1ra szolg\xe1l"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},296:(e,t,s)=>{s.d(t,{A:()=>l});const l=s.p+"assets/images/ich-metrics-d66c6b8500139844d4b6b0c173f9cd83.png"},6276:(e,t,s)=>{s.d(t,{A:()=>l});const l=s.p+"assets/images/ich-types-009302af562320dd5d446c59a2355bcb.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var l=s(6540);const a={},n=l.createContext(a);function r(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);