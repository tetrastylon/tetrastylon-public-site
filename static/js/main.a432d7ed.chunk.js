(this["webpackJsonptetrastylon-public-site-source"]=this["webpackJsonptetrastylon-public-site-source"]||[]).push([[0],{176:function(e,t,n){},301:function(e,t,n){},379:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);var c,s=n(37),i=n.n(s),a=n(77),r=n(8),o=function(){return Object(r.jsx)("div",{children:"Error!"})},d=function(){return Object(r.jsx)("div",{children:"Loading..."})},l=n(390),j=n(387),h=n(392),u=n(388),b=n(393),x=n(394),m=n(395),O=n(69),p=n.n(O),_=n(199),f=n.n(_),g=(n(301),function(e){var t=window.location.port?":".concat(window.location.port):"",n="".concat(window.location.protocol,"//").concat(window.location.hostname).concat(t,"/house/").concat(e.id);return Object(r.jsxs)("span",{children:[e.user_created.last_name,", ",e.user_created.first_name.substring(0,1),'., "',e.house_name,'", Tetrastylon, ',new Date(e.date_updated).getUTCFullYear(),", ",Object(r.jsx)("a",{href:n,children:n}),"."]})}),v=function(){var e=document.querySelector(".section.cite-as p");f()(e.innerHTML,{asHtml:!0})},y=function(e){var t=e.images.map((function(e){return e.directus_files_id})),n=t.length>0?"url('".concat("https://db.tetrastylon.eu","/assets/").concat(t[0],"?width=1400&height=600')"):null,c=[e.latitude,e.longitude];return Object(r.jsxs)("div",{className:"house loaded",children:[Object(r.jsxs)("header",{className:"jumbo",style:{backgroundImage:n},children:[Object(r.jsxs)("div",{className:"jumbo-contents",children:[Object(r.jsx)("h1",{children:e.house_name}),Object(r.jsx)("h2",{children:e.city})]}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"mini-map",children:Object(r.jsxs)(j.a,{center:c,zoom:5,zoomControl:!1,attributionControl:!1,children:[Object(r.jsx)(h.a,{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"}),Object(r.jsx)(u.a,{position:c})]})})})]}),Object(r.jsxs)("main",{children:[Object(r.jsx)("div",{className:"section key-properties",children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:[Object(r.jsx)(b.a,{})," ",e.number_of_rooms," Rooms, ",parseFloat(e.house_dimensions).toFixed()," m\xb2"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)(x.a,{})," ",e.building_phases," Building Phases"]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"Constructed"})," ",e.construction_date]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("label",{children:"Abandonded"})," ",e.abandon_date]})]})}),Object(r.jsxs)("div",{className:"section description",children:[Object(r.jsx)("h3",{children:"Description"}),Object(r.jsx)(p.a,{children:e.house_description})]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h3",{children:"Dating of Phases"}),Object(r.jsx)(p.a,{children:e.dating_of_phases})]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h3",{children:"Situation of Entrance"}),Object(r.jsx)(p.a,{children:e.situation_of_entrance})]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h3",{children:"Representation Room Typology"}),Object(r.jsx)(p.a,{children:e.representation_room_typology})]}),Object(r.jsxs)("div",{className:"section atrium",children:[Object(r.jsx)("h3",{children:"Atrium"}),parseFloat(e.atrium_extension).toFixed()," m\xb2",e.atrium_typology?", ":""," ",Object(r.jsx)(p.a,{children:e.atrium_typology})]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h3",{children:"Impluvium Extension"}),parseFloat(e.impluvium_extension).toFixed()," m\xb2"]}),Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h3",{children:"Other Uncovered Spaces"}),Object(r.jsx)(p.a,{children:e.other_uncovered_spaces})]}),e.comments&&Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h3",{children:"Comments"}),Object(r.jsx)(p.a,{children:e.comments})]}),e.images.length>0&&Object(r.jsxs)("div",{className:"section images",children:[Object(r.jsx)("h3",{children:"Images"}),Object(r.jsx)(l.a.PreviewGroup,{children:e.images.map((function(e){return Object(r.jsx)(l.a,{width:200,src:"".concat("https://db.tetrastylon.eu","/assets/").concat(e.directus_files_id,"?width=200&height=200"),preview:{src:"".concat("https://db.tetrastylon.eu","/assets/").concat(e.directus_files_id,"?width=1200")}},e.id)}))})]}),e.plans_of_the_house.length>0&&Object(r.jsxs)("div",{className:"section plans",children:[Object(r.jsx)("h3",{children:"Plans of the House"}),Object(r.jsx)(l.a.PreviewGroup,{children:e.plans_of_the_house.map((function(e){return Object(r.jsx)(l.a,{width:200,src:"".concat("https://db.tetrastylon.eu","/assets/").concat(e.directus_files_id,"?width=200&height=200"),preview:{src:"".concat("https://db.tetrastylon.eu","/assets/").concat(e.directus_files_id,"?width=1200")}},e.id)}))})]}),e.interesting_links&&e.interesting_links.length>0&&Object(r.jsxs)("div",{className:"section links",children:[Object(r.jsx)("h3",{children:"Interesting Links"}),Object(r.jsx)("ul",{children:e.interesting_links.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.url,target:"_blank",children:e.description})},e.id)}))})]}),Object(r.jsxs)("div",{className:"section bibliography",children:[Object(r.jsx)("h3",{children:"Bibliography"}),Object(r.jsx)(p.a,{children:e.bibliography})]}),Object(r.jsxs)("div",{className:"section cite-as",children:[Object(r.jsx)("h3",{children:"Cite as"}),Object(r.jsxs)("p",{children:[g(e),Object(r.jsx)(m.a,{className:"copy",onClick:v})]})]})]})]})},w=n(213),N=function(e){return fetch(e).then((function(e){return e.json()}))},C=function(e){var t=e.match.params.houseId,n=Object(w.a)("".concat("https://db.tetrastylon.eu","/items/house/").concat(t,"?fields=*,*.*"),N),c=n.data;return n.error?Object(r.jsx)(o,{}):c?Object(r.jsx)(y,Object(a.a)({},c.data)):Object(r.jsx)(d,{})},k=n(82),I=n(201),S=n(0),F=n(96),P=n(391),q=function(e){return Object(r.jsx)("div",{children:"Loading..."})},A=function(e){return Object(r.jsx)("div",{children:"Error"})},E=n(389),M=(n(176),function(e){var t=e.data,n=function(e){var t;return(null===(t=e.images)||void 0===t?void 0:t.length)>0?"".concat("https://db.tetrastylon.eu","/assets/").concat(e.images[0].directus_files_id.id,"?width=80&height=80"):null},c=t.map((function(e){return{key:e.id,image:n(e),house_name:e.house_name,city:e.city,constructed:{text:e.construction_date,numeric:e.construction_date_numeric},abandonded:{text:e.abandon_date,numeric:e.abandon_date_numeric},dimensions:e.house_dimensions,complete_plan:e.complete_plan}}));return Object(r.jsxs)(E.a,{dataSource:c,pagination:!1,onRow:function(e){return{onClick:function(t){return function(e){console.log(e)}(e)}}},children:[Object(r.jsx)(E.a.Column,{title:"",dataIndex:"image",render:function(e){return Object(r.jsx)(l.a,{src:e,preview:!1})}}),Object(r.jsx)(E.a.Column,{title:"House Name",dataIndex:"house_name"}),Object(r.jsx)(E.a.Column,{title:"City",dataIndex:"city"}),Object(r.jsx)(E.a.Column,{title:"Constructed",dataIndex:["constructed","text"]}),Object(r.jsx)(E.a.Column,{title:"Abandonded",dataIndex:["abandonded","text"]})]})}),T=new F.ApolloClient({uri:"".concat("https://db.tetrastylon.eu","/graphql"),cache:new F.InMemoryCache({typePolicies:{items:{keyFields:[]}}})});function z(e){var t,n=Object(F.useQuery)((t=e.query,Object(F.gql)(c||(c=Object(I.a)(['\n  query {\n    items {\n      house(search: "','", limit: 100) {\n        id,\n        house_name,\n        city,\n        latitude,\n        longitude,\n        construction_date,\n        construction_date_numeric,\n        abandon_date,\n        abandon_date_numeric,\n        complete_plan,\n        house_dimensions,\n        cistern,\n        images {\n          id,\n          directus_files_id {\n            id\n          }\n        }\n      }\n    }\n  }'])),t))),s=n.loading,i=n.error,a=n.data;return s?Object(r.jsx)(q,{}):i?Object(r.jsx)(A,{}):Object(r.jsx)(M,{data:a.items.house})}var B=function(e){var t=Object(S.useState)(),n=Object(k.a)(t,2),c=n[0],s=n[1];return Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("div",{className:"search-bar",children:Object(r.jsx)(P.a.Search,{placeholder:"Search...",allowClear:!0,size:"large",onSearch:function(e){return s(e)}})}),Object(r.jsx)("div",{className:"search-results",children:Object(r.jsx)(F.ApolloProvider,{client:T,children:c&&Object(r.jsx)(z,{query:c,page:1})})})]})},D=function(e){return Object(r.jsx)("h1",{children:"Map"})},H=n(158),L=n(30);n(379);var R=function(){return Object(r.jsx)(H.a,{children:Object(r.jsxs)(L.c,{children:[Object(r.jsx)(L.a,{path:"/search",component:B}),Object(r.jsx)(L.a,{path:"/house/:houseId",component:C}),Object(r.jsx)(L.a,{path:"/map",children:Object(r.jsx)(D,{})}),Object(r.jsxs)(L.a,{path:"/",children:[Object(r.jsx)("p",{children:"Future site of the Tetrastylon DB interface. Nothing to see yet."}),Object(r.jsx)(H.b,{to:"/house/65dcf6b5-d0a4-45c9-a466-c072d1351c93",children:"Example house"})]})]})})};n(381);i.a.render(Object(r.jsx)(R,{}),document.getElementById("app"))}},[[382,1,2]]]);
//# sourceMappingURL=main.a432d7ed.chunk.js.map