"use strict";(self.webpackChunkfhir_demo_2023=self.webpackChunkfhir_demo_2023||[]).push([[794],{2186:function(e,t,a){a.d(t,{Z:function(){return m}});a(7207);var n=a(7294),l=a(4160),i=a(6226),r=a(3516),s=a(5867),o=a(6774);const c=(0,l.dq)("/");function m(e){let{children:t,location:a}=e;const{search:m,pathname:d}=a,{selectedFeatures:u={}}=n.useContext(s.Ym),y=Object.keys(u).sort(),A=Object.keys(r.D).filter((e=>{var t;return!y.length||(null===(t=r.D[e].features)||void 0===t?void 0:t.some((e=>y.some((t=>t===e)))))})),g=A.indexOf(d.replace(c,"").replaceAll("/","")),h=A.length>1?n.createElement("nav",{className:"prevNext"},n.createElement("div",null,g>0?n.createElement(l.rU,{to:"/"+A[g-1]+m},"Previous ",n.createElement("img",{src:o.Z,alt:""})):n.createElement(l.rU,{to:"/"+A[A.length-1]+m},"Last ",n.createElement("img",{src:o.Z,alt:""}))),n.createElement("div",null,g<A.length-1?n.createElement(l.rU,{to:"/"+A[g+1]+m},"Next ",n.createElement("img",{src:o.Z,alt:""})):n.createElement(l.rU,{to:"/"+A[0]+m},"First",n.createElement("img",{src:o.Z,alt:""})))):null;return n.createElement(i.Z,null,n.createElement("header",null,y.length?n.createElement(n.Fragment,null,n.createElement("hr",null),n.createElement("h3",null,"Showing demos with feature"+(y.length>1?"s":"")+":"),n.createElement(s.ZP,{list:y}),n.createElement("hr",null)):null,h),n.createElement("main",{className:"demo"},t),h,n.createElement("img",{className:"decoration",src:o.Z,alt:""}))}},5217:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return u}});var n=a(7294),l=a(2186),i=a(5867),r=a(3516),s=a.p+"static/mylab_logo_slogan_black_rgb-9cc0e5f2720b16c03583ddd95ae02f3a.png",o="data:image/png;base64,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",c=a.p+"static/mylab_plus_care_rgb-4c2dd2c2a7f92371473940a66ff8281c.png",m=a.p+"static/mylab_plus_hub_rgb-841db484830cfff3d817e4967657d040.png";const d=()=>n.createElement("title",null,"FHIR Demo 2023: Mylab");function u(e){let{location:t}=e;const a=r.D.mylab.features;return n.createElement(l.Z,{features:a,location:t},n.createElement("h1",null,n.createElement("a",{href:"https://www.mylab.fi/en/"},n.createElement("img",{src:s,alt:"Mylab"}))),n.createElement(i.ZP,{list:a}),n.createElement("aside",{className:"event vitalis"},n.createElement("h2",null,"Mylab at Vitalis"),n.createElement("p",null,"Welcome to visit Mylab's stand! We have a scheduled time for presenting our ideas using FHIR on"),n.createElement("strong",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("time",{dateTime:"2023-05-23T15:10:00.000+02:00"},"23th May at 15:10")),n.createElement("li",null,n.createElement("time",{dateTime:"2023-05-24T10:10:00.000+02:00"},"24th May at 10:10")))),n.createElement("p",null,"If this time is not suitable for you, you may visit any time Mylab's stand and contact our personnel to schedule presentation time and share your ideas.")),n.createElement("section",{id:"mylab"},n.createElement("p",null,"Mylab is the leading Finnish supplier of health care laboratory and diagnostics information systems. By implementing better and more reliable technological solutions for health care use, we facilitate longer and healthier lifespans and improved quality of life. Human life is at our core.")),n.createElement("section",{id:"mylab-demo"},n.createElement("h2",null,"Boost Your integration with Laboratory Information System: My+ on FHIR® "),n.createElement("p",null,"Mylab presents a vision and ideas using FHIR for integration with laboratory information system.")),n.createElement("section",{id:"myplus"},n.createElement("h2",null,n.createElement("img",{src:o,alt:"My+ LIS"})),n.createElement("a",{href:"https://www.mylab.fi/en/solutions/myplus-vital-data-for-your-laboratory/"},"My+® - vital data for your laboratory - Mylab"),n.createElement("p",null,"My+® is a LIS system that guides users and enhances the efficiency of different aspects of healthcare laboratory processes from pre-analytics to post-analytics, managing the entire process smoothly and safely for patients' diagnosis decision making. My+® is a truly multidisciplinary LIS gathering together all of the specialist areas of healthcare laboratories from clinical chemistry and hematology to microbiology, pathology, and genetics along with versatile equipment and systems integrations, as well as crucial support functions and data analytics. Although My+® is a genuine cross-functional system serving all the laboratory specialty areas within the same system, the specialty areas are promptly designed to meet the unique needs of each specialty area."),n.createElement("h4",null,"Benefits of FHIR for integration with My+ LIS"),n.createElement("p",null,"My+ LIS is the system used in the laboratories for processing and analysis. As an outcome laboratory produces results. Different kind of health care systems need the information produced by laboratory analysis and this data is important for patient treatment."),n.createElement("p",null,"FHIR helps sharing the laboratory results and data standardized way and gives flexible technical means to build bidirectional API to laboratory processes. Compared with the older HL7 standard versions, FHIR enables queries for the patient laboratory results and bidirectional APIs.")),n.createElement("section",{id:"mypluscare"},n.createElement("h2",null,n.createElement("img",{src:c,alt:"My+ Care"})),n.createElement("a",{href:"https://www.mylab.fi/en/solutions/mypluscare-delivering-data-for-care/"},"My+ care® - delivering data for care - Mylab"),n.createElement("p",null,"My+ care® enables physicians, nurses and other staff in treatment units to access laboratory information in patient care directly. The service gives treatment units access to all laboratory information according to the agreed region, in compliance with data protection regulations, and gives them the ability to request laboratory and other diagnostics tests. My+ care includes advanced test and blood product orders, the ability to view results as well as data connections, and delivery of information involving treatment to patients. Versatile device and systems integrations transmit the information needed for decision-making regarding treatments to physicians and nursing staff in a reliable, targeted way."),n.createElement("h4",null,"Benefits of FHIR for integration with My+ Care"),n.createElement("p",null,"EHR system users who need to see detailed information of patient laboratory analysis results or order new tests could open the My+ Care application using SSO. Session context information can be shared between the systems, such as patient, organization, user data etc."),n.createElement("p",null,"FHIR SMART App Launch helps to build UI integration between the systems and provides a flexible standardized way to share session information and build seamless UI-integration between the systems.")),n.createElement("section",{id:"myplushub"},n.createElement("h2",null,n.createElement("img",{src:m,alt:"My+ Hub"})),n.createElement("a",{href:"https://www.mylab.fi/en/solutions/myplushub-integrating-your-crucial-data/"},"My+ hub® - integrating your crucial data - Mylab"),n.createElement("p",null,"My+ hub® ensures secure up-to-date transfer of critical data needed to support healthcare decision-making. My+ hub® acts as a centralised national data transfer node. Our cost-effective solution enable reliable, secure and agile data transfer, making the old-fashioned and costly individual data transfer integrations between laboratories redundant. Integrate your organization into a nationwide healthcare data transfer hub and expand your organization’s communication capabilities. Laboratories collaborate in a variety of ways with other laboratories. For example, when acquiring special analytics from other laboratories, My+ hub® enables agile and secure data transfer between all actors already connected to the service."),n.createElement("h4",null,"Benefits of FHIR for integration with My+ Hub"),n.createElement("p",null,"My+ Hub is a platform to connect health care organizations and systems. FHIR standard helps to create faster and more flexible and customizable integration and API between the health care providers.")),n.createElement("section",{id:"contact"},n.createElement("h3",null,"Contact"),n.createElement("div",{className:"business-card"},n.createElement("h3",null,"Hannu Honkala"),n.createElement("p",null,"Chief Commercial Officer"),n.createElement("address",null,n.createElement("a",{href:"mailto:hannu.honkala@mylab.fi"},"hannu.honkala@mylab.fi")))))}}}]);
//# sourceMappingURL=component---src-pages-mylab-js-32081703480cfd5203d7.js.map