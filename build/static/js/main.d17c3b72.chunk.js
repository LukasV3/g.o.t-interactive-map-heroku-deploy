(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(56)},29:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(20),c=n.n(r),i=n(7),o=n.n(i),u=n(8),l=n(1),h=n(2),m=n(4),d=n(3),p=n(5),f=(n(29),n(32),n(9)),y=n.n(f),v=n(21),g=n.n(v).a.create({baseURL:"https://game-of-thrones-interactive.herokuapp.com/api/v1/kingdoms",withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.renderMap(),e.next=3,g.get("/");case 3:t=e.sent,this.addKingdomGeojson(t.data),this.toggleLayer("kingdom");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){this.props.searchResult.name&&this.selectLocation(this.props.searchResult.id,this.props.searchResult.layerName)}},{key:"selectLocation",value:function(e,t){var n=this.layers[t].getLayers().find(function(t){return t.feature.geometry.properties.id===e});this.map.flyToBounds(n.getBounds(),5),n.fireEvent("click")}},{key:"renderMap",value:function(){this.map=y.a.map("mapid",{center:[5,20],zoom:4,maxZoom:8,minZoom:4,maxBounds:[[50,-30],[-45,100]]}),this.map.zoomControl.setPosition("bottomright"),this.layers={},y.a.tileLayer("https://cartocdn-gusc.global.ssl.fastly.net/ramirocartodb/api/v1/map/named/tpl_756aec63_3adb_48b6_9d14_331c6cbc47cf/all/{z}/{x}/{y}.png",{crs:y.a.CRS.EPSG4326}).addTo(this.map)}},{key:"addKingdomGeojson",value:function(e){this.layers.kingdom=y.a.geoJSON(e,{style:{color:"#222",weight:1,opacity:.65},onEachFeature:this.onEachKingdom.bind(this)})}},{key:"onEachKingdom",value:function(e,t){var n=this;t.on({click:function(a){var s=e.properties,r=s.name,c=s.id;n.setHighlightedRegion(t),n.props.onKingdomClick(r,c)}})}},{key:"setHighlightedRegion",value:function(e){this.selected&&this.layers.kingdom.resetStyle(this.selected),this.selected=e,this.selected&&(this.selected.bringToFront(),this.selected.setStyle({color:"blue"}))}},{key:"toggleLayer",value:function(e){var t=this.layers[e];this.map.hasLayer(t)?this.map.removeLayer(t):this.map.addLayer(t)}},{key:"render",value:function(){return s.a.createElement("div",{id:"mapid",className:"map-container"})}}]),t}(s.a.Component),k=(n(52),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{ref:"container",className:"info-container"},s.a.createElement("div",{ref:"title",onClick:function(){return e.refs.container.classList.toggle("info-active")},className:"info-title"},s.a.createElement("h1",null,this.props.name||"Nothing Selected")),s.a.createElement("div",{className:"info-body"},s.a.createElement("div",{className:"info-content-container"},s.a.createElement("div",{ref:"content",className:"info-content"},this.props.summary||""))))}}]),t}(s.a.Component)),O=(n(54),n(10)),E=new(function(){function e(){Object(l.a)(this,e),this.options={keys:["name"],shouldSort:!0,threshold:.3,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1},this.searchbase=[],this.fuse=new O.a([],this.options)}return Object(h.a)(e,[{key:"addGeoJsonItems",value:function(e,t){this.searchbase=this.searchbase.concat(e.map(function(e){return{layerName:t,name:e.properties.name,id:e.properties.id}})),this.fuse=new O.a(this.searchbase,this.options)}},{key:"search",value:function(e){return this.fuse.search(e)}}]),e}()),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={term:""},n.onInputChange=function(e){n.setState({term:e.target.value}),n.onSearch()},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"onSearch",value:function(){var e=this;clearTimeout(this.searchDebounce),this.searchDebounce=setTimeout(function(){return e.search(e.state.term)},500)}},{key:"search",value:function(e){var t=this;this.refs.results.innerHTML="",this.searchResults=E.search(e).slice(0,10),this.searchResults.forEach(function(e){return t.displaySearchResult(e)})}},{key:"displaySearchResult",value:function(e){var t=this,n=document.createElement("div");n.textContent=e.item.name,n.addEventListener("click",function(){return t.searchResultSelected(e)}),this.refs.results.appendChild(n)}},{key:"searchResultSelected",value:function(e){this.setState({term:""}),this.refs.results.innerHTML="",this.props.onSearchClick(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"search-container"},s.a.createElement("div",{className:"search-bar"},s.a.createElement("input",{ref:"input",type:"text",name:"search",placeholder:"Search...",value:this.state.term,className:"search-input",onChange:this.onInputChange})),s.a.createElement("div",{ref:"results",className:"search-results"}))}}]),t}(s.a.Component),S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={selected:{},searchResult:{}},n.showInfo=function(){var e=Object(u.a)(o.a.mark(function e(t,a){var s,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/".concat(a,"/summary"));case 2:s=e.sent,r=s.data.summary,n.setState({selected:{name:t,summary:r},searchResult:{}});case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),n.updateSearchResult=function(e){n.setState({searchResult:e.item})},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/");case 2:t=e.sent,n=t.data,E.addGeoJsonItems(n,"kingdom");case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b,{onKingdomClick:this.showInfo,searchResult:this.state.searchResult}),s.a.createElement(k,{name:this.state.selected.name,summary:this.state.selected.summary}),s.a.createElement(j,{onSearchClick:this.updateSearchResult}))}}]),t}(s.a.Component);c.a.render(s.a.createElement(S,null),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.d17c3b72.chunk.js.map