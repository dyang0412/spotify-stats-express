(this["webpackJsonpspotify-stats-react"]=this["webpackJsonpspotify-stats-react"]||[]).push([[0],{155:function(e,t,a){e.exports=a(321)},160:function(e,t,a){},161:function(e,t,a){},321:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(53),s=a.n(c),l=(a(160),a(161),a(153)),i=a(2),o=a(19),u=a(20),m=a(55),d=a(22),f=a(23),p=a(10),h=a.n(p),E=a(56),v=a(146),g=a(21),b=a(3),k=a(29),x=a.n(k),w=a(40),y=a.n(w),N=new y.a;S();function S(){x.a.get("https://danyang.dev/access-token").then((function(e){N.setAccessToken(e.data)})).catch((function(e){console.log("error")}))}x.a.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&S(),Promise.reject(e)}));var T=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).componentDidMount=Object(g.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.props.item){t=Object(v.a)(r.props.item.artists.entries());try{for(n=function(){var e=Object(E.a)(a.value,2),t=(e[0],e[1]);r.setState((function(e){return{artistString:e.artistString.concat("".concat(t.name,", "))}}))},t.s();!(a=t.n()).done;)n()}catch(c){t.e(c)}finally{t.f()}}case 1:case"end":return e.stop()}}),e)}))),r.formatArtists=function(){return r.state.artistString.replace(/(^\s*,)|(,\s*$)/g,"")},r.handleClick=function(){r.props.fetchAudioFeatures(r.props.id),r.props.setTrack(r.props.item),window.innerWidth<=1024&&r.props.toggleNav()},r.state={artists:[],artistString:""},r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{onClick:function(){return e.handleClick()},className:"search-item block mb-3 text-left"},n.a.createElement("div",{className:"flex flex-row flex-no-wrap justify-start"},n.a.createElement("img",{className:"inline",src:this.props.item.album.images[2].url}),n.a.createElement("div",{className:"track-meta flex flex-col justify-center pl-2 overflow-x-hidden"},n.a.createElement("h5",{className:"font-bold whitespace-no-wrap"},this.props.item.name),n.a.createElement("p",{className:"mb-0 whitespace-no-wrap text-sm"},this.formatArtists()))))}}]),a}(r.Component),C={fetchAudioFeatures:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({type:"FETCH_FEATURES_REQUEST"});case 2:t.prev=2,N.getAudioFeaturesForTrack(e).then((function(e){return a({type:"FETCH_FEATURES_SUCCESS",data:e})}),(function(e){console.log(e)})),t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(2),t.abrupt("return",a({type:"FETCH_FEATURES_ERROR",err:t.t0}));case 9:case"end":return t.stop()}}),t,null,[[2,6]])})));return function(e){return t.apply(this,arguments)}}()},setTrack:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({type:"SET_TRACK"});case 2:return t.prev=2,t.abrupt("return",a({type:"SET_TRACK",track:e}));case 6:return t.prev=6,t.t0=t.catch(2),t.abrupt("return",a({type:"SET_TRACK_ERROR",err:t.t0}));case 9:case"end":return t.stop()}}),t,null,[[2,6]])})));return function(e){return t.apply(this,arguments)}}()}},j=Object(b.b)((function(e){return{features:e.AudioFeatures.features,err:e.AudioFeatures.err,isLoading:e.AudioFeatures.isLoading,track:e.Track.track}}),C)(T);var A=function(){return n.a.createElement("div",{className:"flex h-full w-full flex-col justify-center"},n.a.createElement("div",{className:"loader m-auto"}))},O=a(154);a(227);var F=function(e){var t=n.a.createElement("div",{className:"h-full flex flex-col justify-center"},n.a.createElement("svg",{className:"search-icon block mx-auto mb-3 text-gray-600",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",xmlSpace:"preserve",width:"30px",height:"30px",style:{fill:"#303a52"}},n.a.createElement("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"})),n.a.createElement("h4",{className:"font-bold mb-2"},"Search for a track to begin"),n.a.createElement("p",{className:"text-xs text-gray-600"},"All stats provided by Spotify"));return e.isLoading&&(t=n.a.createElement(A,null)),e.data&&!e.isLoading&&(t=e.data.tracks.items.map((function(t,a){return n.a.createElement(j,{toggleNav:e.toggleNav,key:a,item:t,id:t.id})}))),n.a.createElement(O.a,{style:{maxHeight:"100%"},id:"search-results",className:"mt-5 mb-3 flex-1 overflow-x-hidden"},t)},R=new y.a;_();function _(){x.a.get("https://danyang.dev/access-token").then((function(e){R.setAccessToken(e.data)})).catch((function(e){console.log("error")}))}x.a.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&_(),Promise.reject(e)}));var L=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).searchTracks=function(e){r.props.fetchTracks(e)},r.keyPress=function(e){13==e.keyCode&&r.props.fetchTracks(e.target.value)},r.state={input:""},r}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"search-bar",className:"fixed shadow-md inline-block left-0 bg-white h-screen pt-5 px-4 ".concat(this.props.active?"":"collapsed")},n.a.createElement("div",{className:"block h-full text-center"},n.a.createElement("div",{className:"flex flex-col h-full justify-between"},n.a.createElement("div",null,n.a.createElement("h1",{className:"font-bold"},"Spotify Stats Home"),n.a.createElement("div",{className:"w-full pt-2 relative mx-auto text-gray-600"},n.a.createElement("input",{type:"search",onKeyDown:this.keyPress,onChange:function(t){return e.setState({input:t.target.value})},className:"w-full border-2 border-gray-300 bg-white h-10 px-3 pr-10 rounded-lg text-sm focus:outline-none",placeholder:"Enter Track Name"}),n.a.createElement("button",{onClick:function(){return e.searchTracks(e.state.input)},className:"absolute right-0 top-0 mt-5 mr-4"},n.a.createElement("svg",{className:"search-icon text-gray-600 h-4 w-4 fill-current",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",xmlSpace:"preserve",width:"512px",height:"512px"},n.a.createElement("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"}))))),n.a.createElement(F,{toggleNav:this.props.toggleNav,data:this.props.tracks,isLoading:this.props.isLoading}))))}}]),a}(r.Component),M={fetchTracks:function(e){return function(){var t=Object(g.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a({type:"FETCH_TRACKS_REQUEST"});case 2:t.prev=2,R.searchTracks(e).then((function(e){return a({type:"FETCH_TRACKS_SUCCESS",data:e})}),(function(e){console.log(e)})),t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(2),t.abrupt("return",a({type:"FETCH_TRACKS_ERROR",err:t.t0}));case 9:case"end":return t.stop()}}),t,null,[[2,6]])})));return function(e){return t.apply(this,arguments)}}()}},H=Object(b.b)((function(e){return{tracks:e.Search.tracks,err:e.Search.err,isLoading:e.Search.isLoading}}),M)(L),U=a(85),K=(a(228),function(e){var t=e.valueStart,a=e.valueEnd,r=e.children,c=n.a.useState(t),s=Object(E.a)(c,2),l=s[0],i=s[1];return n.a.useEffect((function(){i(a)}),[a]),r(l)});var D=Object(b.b)((function(e){return{features:e.AudioFeatures.features,err:e.AudioFeatures.err,isLoading:e.AudioFeatures.isLoading,track:e.Track.track}}))((function(e){var t=null,a=null,r="",c="",s=null,l=null,i="";if(e.track&&(e.track.explicit&&(a=n.a.createElement("div",{className:"explicit-tag inline-block"},"EXPLICIT")),e.track.artists.map((function(e,t){i+="".concat(e.name,", ")}))),e.features){switch(e.features.key){case 0:r="C";break;case 1:r="C\u266f";break;case 2:r="D";break;case 3:r="D\u266f";break;case 4:r="E";break;case 5:r="F";break;case 6:r="F\u266f";break;case 7:r="G";break;case 8:r="G\u266f";break;case 9:r="A";break;case 10:r="A\u266f";break;case 11:r="B"}switch(e.features.mode){case 0:c="major";break;case 1:c="minor"}s=Math.round(e.features.tempo),l=Math.round(e.features.loudness)}return e.features&&e.track&&(t=n.a.createElement("div",{className:"track-card bg-white shadow-lg"},n.a.createElement("div",{className:"flex flex-wrap"},n.a.createElement("div",{className:"w-full xl:w-2/5 xl:block hidden"},n.a.createElement("img",{id:"track-img",className:"inline-block",src:e.track.album.images[0].url})),n.a.createElement("div",{className:"w-full xl:w-3/5"},n.a.createElement("div",{className:"h-full flex flex-col justify-between xl:pt-6 xl:pl-6"},n.a.createElement("div",{className:"track-header flex sm:flex-row flex-col"},n.a.createElement("img",{id:"track-img-sm",className:"inline-block xl:hidden",src:e.track.album.images[0].url}),n.a.createElement("div",null,n.a.createElement("h1",{className:"track-name font-bold"},e.track.name),n.a.createElement("h2",{className:"text-2xl font-medium mb-1"},i.replace(/(^\s*,)|(,\s*$)/g,"")),a)),n.a.createElement("div",{className:"track-body h-full flex flex-col justify-end"},n.a.createElement("div",{className:"flex flex-wrap"},n.a.createElement("div",{className:"xl:w-2/5 w-full"},n.a.createElement("h2",{className:"feature-label"},"Popularity"),n.a.createElement("div",{className:"px-10"},n.a.createElement(K,{valueStart:0,valueEnd:e.track.popularity},(function(e){return n.a.createElement(U.a,{value:e,text:"".concat(e,"%"),styles:Object(U.b)({pathColor:"fc5185",textColor:"fc5185",pathTransitionDuration:.8})})})))),n.a.createElement("div",{className:"xl:w-3/5 w-full"},n.a.createElement("div",{className:"flex flex-wrap feature-row"},n.a.createElement("div",{className:"w-1/2 feature-box"},n.a.createElement("h2",{className:"feature-label"},"Key"),n.a.createElement("h1",{className:"track-key"},r,n.a.createElement("span",{className:"track-mode"},c))),n.a.createElement("div",{className:"w-1/2 feature-box"},n.a.createElement("h2",{className:"feature-label"},"Time"),n.a.createElement("span",{className:"time-sig"},e.features.time_signature),n.a.createElement("span",{className:"time-sig-after"},"4")),n.a.createElement("div",{className:"w-1/2 feature-box"},n.a.createElement("h2",{className:"feature-label"},"Tempo"),n.a.createElement("h1",{className:"track-tempo"},s,n.a.createElement("span",null,"BPM"))),n.a.createElement("div",{className:"w-1/2 feature-box"},n.a.createElement("h2",{className:"feature-label"},"Loudness"),n.a.createElement("h1",{className:"track-loudness"},l,n.a.createElement("span",null,"dB")))))))))))),n.a.createElement("div",null,t)})),B=a(150),P=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"flex flex-col justify-center h-full"},n.a.createElement(B.a,{id:"radar",data:{labels:["Acousticness","Danceability","Energy","Instrumentalness","Speechiness","Valence"],datasets:[{borderWidth:2,borderColor:"rgba(252, 81, 133, 1)",backgroundColor:"rgba(252, 81, 133, 0.1)",pointBackgroundColor:"rgba(252, 81, 133, 1)",data:[Math.round(100*this.props.features.acousticness),Math.round(100*this.props.features.danceability),Math.round(100*this.props.features.energy),Math.round(100*this.props.features.instrumentalness),Math.round(100*this.props.features.speechiness),Math.round(100*this.props.features.valence)]}]},width:100,height:68,options:{title:{display:!0,text:"Audio Features",fontSize:25,position:"top",fontStyle:"600",padding:20,fontColor:"#303a52"},legend:{display:!1},responsive:!0,scale:{ticks:{beginAtZero:!0,max:100,min:0,stepSize:10},pointLabels:{fontSize:16,fontColor:"#303a52",fontStyle:"bold"}},tooltips:{mode:"index",callbacks:{label:function(e,t){return t.datasets[0].data[e.index]+"%"},title:function(e,t){return t.labels[e[0].index]}}}}}))}}]),a}(r.Component),z=Object(b.b)((function(e){return{features:e.AudioFeatures.features,err:e.AudioFeatures.err,isLoading:e.AudioFeatures.isLoading}}))(P);var I=Object(b.b)((function(e){return{features:e.AudioFeatures.features,err:e.AudioFeatures.err,isLoading:e.AudioFeatures.isLoading,track:e.Track.track}}))((function(e){var t=null;return e.features&&(t=n.a.createElement(z,null)),n.a.createElement("div",{className:"track-card bg-white shadow-lg mt-5"},t,n.a.createElement("div",{id:"feature-descriptions"},n.a.createElement("div",{className:"desc"},n.a.createElement("strong",null,"Acousticness: "),"A confidence measure of whether the track is acoustic."),n.a.createElement("div",{className:"desc"},n.a.createElement("strong",null,"Danceability: "),"Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity."),n.a.createElement("div",{className:"desc"},n.a.createElement("strong",null,"Energy: "),"Represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy."),n.a.createElement("div",{className:"desc"},n.a.createElement("strong",null,"Instrumentalness: "),"Predicts whether a track contains no vocals. \u201cOoh\u201d and \u201caah\u201d sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \u201cvocal\u201d."),n.a.createElement("div",{className:"desc"},n.a.createElement("strong",null,"Speechiness: "),"Detects the presence of spoken words in a track."),n.a.createElement("div",{className:"desc"},n.a.createElement("strong",null,"Valence: "),"Describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric)")))}));var Q=Object(b.b)((function(e){return{track:e.Track.track,err:e.AudioFeatures.err,isLoading:e.AudioFeatures.isLoading}}))((function(e){var t=null;return e.track&&(t=n.a.createElement("span",null,e.track.name)),n.a.createElement("h1",{className:"watermark"},t," ",t," ",t," ",t," ",t)}));var W=Object(b.b)((function(e){return{features:e.AudioFeatures.features,err:e.AudioFeatures.err,isLoading:e.AudioFeatures.isLoading,track:e.Track.track}}))((function(e){var t=null;return e.track&&(t=n.a.createElement("div",{id:"trackInfo",className:"min-h-screen ".concat(e.active?"collapsed":"")},n.a.createElement("div",{className:"trackInfo-inner"},n.a.createElement(D,null),n.a.createElement(I,null)),n.a.createElement(Q,null))),n.a.createElement("div",null,t)})),X=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).toggleNav=function(){var e=r.state.active;r.setState({active:!e})},r.state={active:!0},r.toggleNav=r.toggleNav.bind(Object(m.a)(r)),r}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"topNav"},n.a.createElement("button",{onClick:this.toggleNav,class:"navbar-toggler border-0 ".concat(this.state.active?"":"collapsed"),id:"toggler-1"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null))),n.a.createElement("div",{id:"mast-content"},n.a.createElement(H,{toggleNav:this.toggleNav,active:this.state.active}),n.a.createElement(W,{active:this.state.active})))}}]),a}(r.Component);var $=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(l.a,null,n.a.createElement("header",{className:"App-header"},n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(X,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(24),J=a(25),V={tracks:null,err:null,isLoading:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TRACKS_REQUEST":return Object(J.a)({},e,{isLoading:!0});case"FETCH_TRACKS_SUCCESS":return Object(J.a)({},e,{tracks:t.data,isLoading:!1});case"FETCH_TRACKS_ERROR":return{err:t.err,isLoading:!1};default:return e}},q={features:null,err:null,isLoading:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FEATURES_REQUEST":return Object(J.a)({},e,{isLoading:!0});case"FETCH_FEATURES_SUCCESS":return Object(J.a)({},e,{features:t.data,isLoading:!1});case"FETCH_FEATURES_ERROR":return{err:t.err,isLoading:!1};default:return e}},ee={track:null,err:null,artists:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRACK":return Object(J.a)({},e,{track:t.track});case"SET_TRACK_ERROR":return{err:t.err};default:return e}},ae=Object(G.c)({Search:Z,AudioFeatures:Y,Track:te}),re=a(152),ne=Object(G.e)(ae,Object(G.d)(Object(G.a)(re.a)));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b.a,{store:ne},n.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.b484cbdb.chunk.js.map