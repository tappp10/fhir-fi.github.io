"use strict";(self.webpackChunkfhir_demo_2023=self.webpackChunkfhir_demo_2023||[]).push([[854],{2186:function(e,t,l){l.d(t,{Z:function(){return u}});l(7207);var n=l(7294),a=l(4160),r=l(6226),m=l(3516),c=l(5867),s=l(6774);const o=(0,a.dq)("/");function u(e){let{children:t,location:l}=e;const{search:u,pathname:i}=l,{selectedFeatures:A={}}=n.useContext(c.Ym),E=Object.keys(A).sort(),h=Object.keys(m.D).filter((e=>{var t;return!E.length||(null===(t=m.D[e].features)||void 0===t?void 0:t.some((e=>E.some((t=>t===e)))))})),v=h.indexOf(i.replace(o,"").replaceAll("/","")),p=h.length>1?n.createElement("nav",{className:"prevNext"},n.createElement("div",null,v>0?n.createElement(a.rU,{to:"/"+h[v-1]+u},"Previous ",n.createElement("img",{src:s.Z,alt:""})):n.createElement(a.rU,{to:"/"+h[h.length-1]+u},"Last ",n.createElement("img",{src:s.Z,alt:""}))),n.createElement("div",null,v<h.length-1?n.createElement(a.rU,{to:"/"+h[v+1]+u},"Next ",n.createElement("img",{src:s.Z,alt:""})):n.createElement(a.rU,{to:"/"+h[0]+u},"First",n.createElement("img",{src:s.Z,alt:""})))):null;return n.createElement(r.Z,null,n.createElement("header",null,E.length?n.createElement(n.Fragment,null,n.createElement("hr",null),n.createElement("h3",null,"Showing demos with feature"+(E.length>1?"s":"")+":"),n.createElement(c.ZP,{list:E}),n.createElement("hr",null)):null,p),n.createElement("main",{className:"demo"},t),p,n.createElement("img",{className:"decoration",src:s.Z,alt:""}))}},6636:function(e,t,l){l.r(t),l.d(t,{Head:function(){return o},default:function(){return u}});var n=l(7294),a=l(4160),r=l(2186),m=l(5867),c=l(3516),s="data:image/png;base64,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";const o=()=>n.createElement("title",null,"FHIR Demo 2023: Glucostratus");function u(e){var t;let{location:l}=e;const o=null===(t=c.D.glucostratus)||void 0===t?void 0:t.features;return n.createElement(r.Z,{features:o,location:l},n.createElement("h1",{className:"white"},n.createElement("a",{href:"https://www.glucostratus.com/"},n.createElement("img",{src:s,alt:"Glucostratus"}))),n.createElement(m.ZP,{list:o}),n.createElement("aside",{className:"event atk-paivat"},n.createElement("h2",null,"ATK-päivät: Startup-alue")),n.createElement("p",null,"The aim is to implement the ",n.createElement("strong",null,"SMART App Launch")," from ",n.createElement(a.rU,{to:"../una"},"Una"),"."),n.createElement("section",{id:"contact"},n.createElement("h3",null,"Contact"),n.createElement("div",{className:"business-card"},n.createElement("h3",null,"Pekka Mäkelä"),n.createElement("p",null,"CEO, Co-Founder"),n.createElement("address",null,n.createElement("a",{href:"mailto:pekka.makela@glucostratus.com"},"pekka.makela@glucostratus.com")))))}}}]);
//# sourceMappingURL=component---src-pages-glucostratus-js-12eb3c9c71520713b000.js.map