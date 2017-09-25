webpackJsonp([6],{APzx:function(t,e,n){"use strict";var a=n("ZD75"),s=n("iGuA"),r=n("VU/8"),i=r(a.a,s.a,null,null,null);e.a=i.exports},"KJ+T":function(t,e,n){"use strict";var a=n("APzx"),s=n("M0ke");e.a={name:"drum-machine",components:{DrumControls:a.a,DrumSample:s.a}}},LRij:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"drum-machine"}},[n("h1",[t._v("Drum Machine")]),n("p",[t._v("This is a drum machine.")]),n("drum-sample"),n("div",{attrs:{id:"sample-rack"}}),n("drum-controls")],1)},s=[],r={render:a,staticRenderFns:s};e.a=r},M0ke:function(t,e,n){"use strict";var a=n("N9QC"),s=n("bi/u"),r=n("VU/8"),i=r(a.a,s.a,null,null,null);e.a=i.exports},N9QC:function(t,e,n){"use strict";e.a={name:"drum-sample"}},ZD75:function(t,e,n){"use strict";var a=n("HhM0");e.a={name:"drum-controls",components:{Knob:a.a},data:function(){return{recording:"idle",position:0,currentVoice:0,currentPattern:0,length:16,tempo:128,playing:!1}},methods:{playPause:function(){!1===this.playing?this.playing=!0:this.playing=!1}}}},ahIU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("KJ+T"),s=n("LRij"),r=n("VU/8"),i=r(a.a,s.a,null,null,null);e.default=i.exports},"bi/u":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"drum-sample"},[n("h2",[t._v("Drum Sample")])])}],r={render:a,staticRenderFns:s};e.a=r},iGuA:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"drum-machine-controls"},[n("button",{staticClass:"master-control play",attrs:{"ng-hide":"playing"},on:{click:function(e){t.playPause()}}},[t._v(t._s(t.playing?"Stop":"Play"))]),n("div",{staticClass:"tempo-controls"},[n("p",[t._v("TEMPO")]),n("knob",{attrs:{min:20,max:240}}),n("dial",{staticClass:"tempo",attrs:{min:"20",max:"240",for:"tempo",target:"value"}}),n("span",{staticClass:"lcd ng-binding"},[t._v(t._s(t.tempo))])],1),t._m(0),t._m(1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"master-controls"},[n("button",{staticClass:"master-control pattern-select on",attrs:{"ng-click":"selectedPattern = 0","ng-class":"selectedPattern === 0 ? 'on' : 'off'"}},[t._v("\n  PATTERN A\n  ")]),n("button",{staticClass:"master-control pattern-select off",attrs:{"ng-click":"selectedPattern = 1","ng-class":"selectedPattern === 1 ? 'on' : 'off'"}},[t._v("\n  PATTERN B\n  ")]),n("button",{staticClass:"master-control save",attrs:{"ng-click":"save()"}},[t._v("\n  SAVE\n  ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"config"},[n("p",[t._v("DRUM KIT SELECT")]),n("select",{staticClass:"kit-select ng-pristine ng-untouched ng-valid",attrs:{"ng-model":"kit","ng-options":"opt as opt.name for opt in kits"}},[n("option",{attrs:{value:"0",selected:"selected",label:"Hip Hop"}},[t._v("Hip Hop")]),n("option",{attrs:{value:"1",label:"Electro"}},[t._v("Electro")]),n("option",{attrs:{value:"2",label:"House"}},[t._v("House")]),n("option",{attrs:{value:"3",label:"Techno"}},[t._v("Techno")]),n("option",{attrs:{value:"4",label:"Acoustic"}},[t._v("Acoustic")])]),n("button",{staticClass:"export",attrs:{"ng-click":"record()","ng-show":"recState == 'idle'"}},[t._v("EXPORT PATTERN"),n("br"),t._v("AS WAV")]),n("button",{staticClass:"export recording ng-hide",attrs:{"ng-click":"stopRecording()","ng-show":"recState == 'recording'"}},[t._v("RECORDING AUDIO"),n("br"),t._v("\n  CLICK TO STOP")]),n("a",{staticClass:"export download ng-hide",attrs:{href:"","ng-show":"recState == 'finished'","ng-click":"recState = 'idle'",download:""}},[t._v("DOWNLOAD RECORDING")])])}],r={render:a,staticRenderFns:s};e.a=r}});
//# sourceMappingURL=6.140098c8abf867509e3d.js.map