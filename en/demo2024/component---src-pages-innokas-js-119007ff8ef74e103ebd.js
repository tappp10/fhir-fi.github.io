"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[2724],{979:function(e,I,i){i.r(I),i.d(I,{Head:function(){return c},default:function(){return d}});var C=i(6540),l=i(6194),B=i(9498),Y=i(2154),h=i(7507),n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdAAAACACAYAAAC7pDhDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTU5N2RkZGMtZmJkZS05MDQyLWEzYzEtODg5YjA1NDlmYjAyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM2MjMwMEZENTdBODExRUVCNTczRDMwNURENUFGRUY0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MjMwMEZDNTdBODExRUVCNTczRDMwNURENUFGRUY0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4wIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMzNjE4ZmRjLTQ1MWEtZDc0Ni1iMWVjLTk4Y2ViYTgzYTIwNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDphNTk3ZGRkYy1mYmRlLTkwNDItYTNjMS04ODliMDU0OWZiMDIi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";function c(){const e=C.createElement("title",null,"FHIR Demo 2024: Innokas Medical / MedicubeX");return(0,l.x)({title:e})}function d(e){let{location:I}=e;const i=h.n.innokas.roles;return C.createElement(B.A,{roles:i,location:I},C.createElement("h1",null,C.createElement("a",{href:"https://www.innokasmedical.fi/"},C.createElement("img",{src:n,alt:"Innokas"}))),C.createElement(Y.Ay,{list:i}),C.createElement("section",{className:"work-in-progress"},C.createElement("p",null,"Participation confirmed, showcase content to be added.")))}}}]);
//# sourceMappingURL=component---src-pages-innokas-js-119007ff8ef74e103ebd.js.map