(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)a=s[d],o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/flowchart-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02ae":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#toolbar[data-v-86689402]{margin-bottom:10px}.title[data-v-86689402]{margin-top:10px;margin-bottom:0}.subtitle[data-v-86689402]{margin-bottom:10px}#toolbar>button[data-v-86689402]{margin-right:4px}.container[data-v-86689402]{width:800px;margin:auto}",""])},"1aaf":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"#svg{background-size:20px 20px,20px 20px,10px 10px,10px 10px;background-image:linear-gradient(90deg,#dfdfdf 1px,transparent 0),linear-gradient(180deg,#dfdfdf 1px,transparent 0),linear-gradient(90deg,#f1f1f1 1px,transparent 0),linear-gradient(180deg,#f1f1f1 1px,transparent 0);background-position:left -1px top -1px,left -1px top -1px,left -1px top -1px,left -1px top -1px;height:100%;width:100%}#chart{position:relative;width:800px;height:600px;border:1px solid #dfdfdf}#position{position:absolute;right:4px}.unselectable{moz-user-select:-moz-none;-moz-user-select:none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.connector{cursor:crosshair;opacity:0}.connector.active{opacity:1;fill:#fff;stroke:#bbb;stroke-width:1px}.connector:hover{stroke:red}#svg .selection{stroke:#add8e6;fill:#add8e6;fill-opacity:.8;display:none}#svg .selection.active{display:block}",""])},"369f":function(e,t,n){"use strict";var r=n("50c4"),o=n.n(r);o.a},3900:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".modal{border:1px solid #d3d3d3;box-shadow:2px 2px 1px #d3d3d3;background-color:#fff;position:absolute;top:100px;left:0;right:0;margin-left:auto;margin-right:auto}.form-control{display:block;width:100%;height:30px;margin-bottom:10px}.footer{padding:10px;text-align:right}.footer>button{margin-left:10px}.body,.header{padding:10px}.header{border-bottom:1px solid #d3d3d3}",""])},"50c4":function(e,t,n){var r=n("1aaf");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("3d8912d2",r,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v("Flowchart Vue")]),n("h5",{staticClass:"subtitle"},[e._v("\n    Flowchart & Flowchart designer component for Vue.js.\n  ")]),n("div",{attrs:{id:"toolbar"}},[n("button",{on:{click:function(t){e.$refs.chart.add({id:+new Date,x:10,y:10,name:"New",type:"operation",approvers:[]})}}},[e._v("\n      Add(Double-click canvas)\n    ")]),n("button",{on:{click:function(t){return e.$refs.chart.remove()}}},[e._v("Delete(Del)")]),n("button",{on:{click:function(t){return e.$refs.chart.editCurrent()}}},[e._v("\n      Edit(Double-click node)\n    ")]),n("button",{on:{click:function(t){return e.$refs.chart.save()}}},[e._v("Save")])]),n("flowchart",{ref:"chart",attrs:{nodes:e.nodes,connections:e.connections,width:"100%",height:500,readonly:!1,render:e.render},on:{editnode:e.handleEditNode,dblclick:e.handleDblClick,editconnection:e.handleEditConnection,save:e.handleChartSave}}),n("node-dialog",{attrs:{visible:e.nodeDialogVisible,node:e.nodeForm.target},on:{"update:visible":function(t){e.nodeDialogVisible=t},"update:node":function(t){return e.$set(e.nodeForm,"target",t)}}}),n("connection-dialog",{attrs:{visible:e.connectionDialogVisible,connection:e.connectionForm.target,operation:e.connectionForm.operation},on:{"update:visible":function(t){e.connectionDialogVisible=t},"update:connection":function(t){return e.$set(e.connectionForm,"target",t)}}})],1)},i=[],a=(n("7f7f"),n("96cf"),n("3b8d")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.visible?n("div",{staticClass:"modal",staticStyle:{width:"320px"}},[e._m(0),n("div",{staticClass:"body"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.connectionForm.name,expression:"connectionForm.name"}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.connectionForm.name},on:{input:function(t){t.target.composing||e.$set(e.connectionForm,"name",t.target.value)}}}),n("label",{attrs:{for:"type"}},[e._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.connectionForm.type,expression:"connectionForm.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.connectionForm,"type",t.target.multiple?n:n[0])}}},e._l([{name:"Pass",id:"pass"},{name:"Reject",id:"reject"}],function(t){return n("option",{key:"connection-type-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),n("div",{staticClass:"footer"},[n("button",{on:{click:e.handleClickCancelSaveConnection}},[e._v("Cancel")]),n("button",{on:{click:e.handleClickSaveConnection}},[e._v("Ok")])])]):e._e()])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",[e._v("Edit")])])}],l=(n("695b"),{props:{visible:{type:Boolean,default:!1},connection:{type:Object,default:null}},data:function(){return{connectionForm:{type:null,sourceId:null,sourcePosition:null,destinationId:null,destinationPosition:null,name:null,expression:null}}},methods:{handleClickSaveConnection:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("update:visible",!1),this.$emit("update:connection",Object.assign(this.connection,{name:this.connectionForm.name,type:this.connectionForm.type,expression:this.connectionForm.expression}));case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleClickCancelSaveConnection:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$emit("update:visible",!1);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},watch:{connection:{immediate:!0,handler:function(e){e&&(this.connectionForm.id=e.id,this.connectionForm.type=e.type,this.connectionForm.name=e.name,this.connectionForm.expression=e.expression)}}}}),u=l,d=n("2877"),h=Object(d["a"])(u,s,c,!1,null,null,null),p=h.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.visible?n("div",{staticClass:"modal",staticStyle:{width:"320px"}},[e._m(0),n("div",{staticClass:"body"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nodeForm.name,expression:"nodeForm.name"}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:e.nodeForm.name},on:{input:function(t){t.target.composing||e.$set(e.nodeForm,"name",t.target.value)}}}),n("label",{attrs:{for:"type"}},[e._v("Type")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.nodeForm.type,expression:"nodeForm.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.nodeForm,"type",t.target.multiple?n:n[0])}}},e._l([{name:"Start",id:"start"},{name:"End",id:"end"},{name:"Operation",id:"operation"}],function(t){return n("option",{key:"node-type-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0),n("label",{attrs:{for:"approver"}},[e._v("Approver")]),n("select",{staticClass:"form-control",attrs:{id:"approver"},domProps:{value:e.nodeForm.approver.id},on:{change:function(t){return e.handleChangeApprover(t)}}},e._l(e.approvers,function(t){return n("option",{key:"approver-"+t.id,domProps:{value:t.id}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),n("div",{staticClass:"footer"},[n("button",{on:{click:e.handleClickCancelSaveNode}},[e._v("Cancel")]),n("button",{on:{click:e.handleClickSaveNode}},[e._v("Ok")])])]):e._e()])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("span",[e._v("Edit")])])}],m={props:{visible:{type:Boolean,default:!1},node:{type:Object,default:null}},data:function(){return{nodeForm:{name:null,id:null,type:null,approver:[]},approvers:[{id:1,name:"Joyce"},{id:2,name:"Allen"},{id:3,name:"Teresa"}]}},methods:{handleClickSaveNode:function(){this.$emit("update:node",Object.assign(this.node,{name:this.nodeForm.name,type:this.nodeForm.type,approvers:[Object.assign({},this.nodeForm.approver)]})),this.$emit("update:visible",!1)},handleClickCancelSaveNode:function(){this.$emit("update:visible",!1)},handleChangeApprover:function(e){this.nodeForm.approver=this.approvers.filter(function(t){return t.id===parseInt(e.target.value)})[0]}},watch:{node:{immediate:!0,handler:function(e){e&&(this.nodeForm.id=e.id,this.nodeForm.name=e.name,this.nodeForm.type=e.type,e.approvers&&e.approvers.length>0&&(this.nodeForm.approver=e.approvers[0]))}}}},g=m,y=Object(d["a"])(g,f,v,!1,null,null,null),b=y.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{width:isNaN(e.width)?e.width:e.width+"px",height:isNaN(e.height)?e.height:e.height+"px",cursor:e.cursor},attrs:{id:"chart",tabindex:"0"},on:{mousemove:e.handleChartMouseMove,mouseup:e.handleChartMouseUp,dblclick:function(t){return e.handleChartDblClick(t)},mousewheel:e.handleChartMouseWheel,mousedown:function(t){return e.handleChartMouseDown(t)}}},[n("span",{staticClass:"unselectable",attrs:{id:"position"}},[e._v("\n    "+e._s(e.cursorToChartOffset.x+", "+e.cursorToChartOffset.y)+"\n  ")]),n("svg",{attrs:{id:"svg"}},[n("rect",{staticClass:"selection",attrs:{height:"0",width:"0"}})])])},k=[],w=n("7618"),C=(n("c7c6"),n("75fc")),N=(n("ac4d"),n("8a81"),n("ac6a"),n("84b4"),n("c5f6"),n("a481"),n("5698"));function O(e,t,n,r,o,i){var a=(r-t||1)/(n-e||1),s=t-a*e;return Math.abs(a*o-i+s)/Math.sqrt(a*a+1)}function _(e,t,n){return n>e&&n<t||n>t&&n<e}function F(e,t){return Math.abs(t-e)<=3}function T(e){var t=e.reduce(function(e,t){return t.x<e?t.x:e},1/0),n=e.reduce(function(e,t){return t.x>e?t.x:e},0),r=e.reduce(function(e,t){return t.y<e?t.y:e},1/0),o=e.reduce(function(e,t){return t.y>e?t.y:e},0);return{start:{x:t,y:r},end:{x:n,y:o}}}function S(e,t){return e.x>t.start.x&&e.x<t.end.x&&e.y>t.start.y&&e.y<t.end.y}function j(e){return e<20?20:e}function I(e,t,n,r,o,i,a,s){var c=[t,n],l=[r,o],u=N["c"]().x(function(e){return e[0]}).y(function(e){return e[1]}),d=e.append("path").attr("stroke",a).attr("stroke-width",i).attr("fill","none").attr("d",u([c,l]));return s&&d.style("stroke-dasharray",s.join(",")),d}function M(e,t,n,r,o,i,a,s,c,l){var u,d=[],h=[t,n],p=[r,o],f=h[0]+(p[0]-h[0])/2,v=h[1]+(p[1]-h[1])/2,m=function(){var e=[f,u[1]],t=[f,N[1]];d.push(e),d.push(t)},g=function(){var e=[u[0],v],t=[N[0],v];d.push(e),d.push(t)},y=function(){d.push([u[0],h[1]-50]),d.push([N[0],h[1]-50])},b=function(){d.push([u[0],h[1]+50]),d.push([N[0],h[1]+50])},x=function(){d.push([h[0]+80,u[1]]),d.push([h[0]+80,N[1]])},k=function(){d.push([h[0]-80,u[1]]),d.push([h[0]-80,N[1]])},w=function(){d.push([u[0],N[1]])},C=function(){d.push([N[0],u[1]])};switch(i){case"left":u=[h[0]-20,h[1]];break;case"top":u=[h[0],h[1]-20];break;case"bottom":u=[h[0],h[1]+20];break;default:u=[h[0]+20,h[1]];break}var N=null;switch(a){case"right":N=[p[0]+20,p[1]];break;case"top":N=[p[0],p[1]-20];break;case"bottom":N=[p[0],p[1]+20];break;default:N=[p[0]-20,p[1]];break}d.push(h),d.push(u),i=i||"right",a=a||"left";var O=E(t,n,r,o);switch(O.indexOf("r")>-1&&("right"!==i&&"left"!==a||(u[0]>f&&(u[0]=f),N[0]<f&&(N[0]=f))),O.indexOf("d")>-1&&("bottom"!==i&&"top"!==a||(u[1]>v&&(u[1]=v),N[1]<v&&(N[1]=v))),O.indexOf("l")>-1&&("left"!==i&&"right"!==a||(u[0]<f&&(u[0]=f),N[0]>f&&(N[0]=f))),O.indexOf("u")>-1&&("top"!==i&&"bottom"!==a||(u[1]<v&&(u[1]=v),N[1]>v&&(N[1]=v))),O){case"lu":if("right"===i)switch(a){case"top":case"right":w();break;default:g();break}else if("bottom"===i)switch(a){case"top":m();break;default:C();break}else if("top"===i)switch(a){case"top":case"right":w();break;default:g();break}else switch(a){case"top":case"right":m();break;default:C();break}break;case"u":if("right"===i)switch(a){case"right":break;case"top":w();break;default:g();break}else if("bottom"===i)switch(a){case"left":case"right":C();break;default:x();break}else if("top"===i)switch(a){case"left":C();break;case"right":g();break;case"top":x();break;default:break}else switch(a){case"left":case"right":break;default:d.push([u[0],N[1]]);break}break;case"ru":if("right"===i)switch(a){case"left":m();break;case"top":w();break;default:C();break}else if("bottom"===i)switch(a){case"top":m();break;default:C();break}else if("top"===i)switch(a){case"right":m();break;default:w();break}else switch(a){case"left":case"top":w();break;default:g();break}break;case"l":if("right"===i)switch(a){case"left":case"right":case"top":y();break;default:b();break}else if("bottom"===i)switch(a){case"left":b();break;case"right":w();break;case"top":m();break;default:break}else if("top"===i)switch(a){case"left":y();break;case"right":w();break;case"top":break;default:m();break}else switch(a){case"left":y();break;case"right":break;default:w();break}break;case"r":if("right"===i)switch(a){case"left":break;case"right":y();break;default:w();break}else if("bottom"===i)switch(a){case"left":w();break;case"right":b();break;case"top":m();break;default:break}else if("top"===i)switch(a){case"left":C();break;case"right":y();break;case"top":break;default:m();break}else switch(a){case"left":case"right":case"top":y();break;default:b();break}break;case"ld":if("right"===i)switch(a){case"left":g();break;default:w();break}else if("bottom"===i)switch(a){case"left":C();break;case"top":g();break;default:w();break}else if("top"===i)switch(a){case"left":case"right":case"top":C();break;default:m();break}else switch(a){case"left":case"top":C();break;case"right":m();break;default:w();break}break;case"d":if("right"===i)switch(a){case"left":g();break;case"right":C();break;case"top":w();break;default:x();break}else if("bottom"===i)switch(a){case"left":case"right":C();break;case"top":break;default:x();break}else if("top"===i)switch(a){case"left":k();break;default:x();break}else switch(a){case"left":break;case"right":g();break;case"top":w();break;default:k();break}break;case"rd":"right"===i&&"left"===a?m():"right"===i&&"bottom"===a?w():"right"===i&&"top"===a||"right"===i&&"right"===a?C():"bottom"===i&&"left"===a?w():"bottom"===i&&"right"===a?C():"bottom"===i&&"top"===a?g():"bottom"===i&&"bottom"===a?w():"top"===i&&"left"===a?C():"top"===i&&"right"===a?C():"top"===i&&"top"===a?C():"top"===i&&"bottom"===a?m():"left"===i&&"left"===a?w():"left"===i&&"right"===a?g():"left"===i&&"top"===a?g():"left"===i&&"bottom"===a&&w();break}d.push(N),d.push(p);for(var _=[],F=[],T=0;T<d.length;T++){var S=d[T],j=d[T+1];_.push({sourceX:S[0],sourceY:S[1],destinationX:j[0],destinationY:j[1]});var M=T===d.length-2;if(M&&l){var $=P(e,S[0],S[1],j[0],j[1],s,c);F.push($);break}var D=I(e,S[0],S[1],j[0],j[1],s,c);if(F.push(D),M)break}return{lines:_,paths:F}}function P(e,t,n,r,o,i,a){var s=I(e,t,n,r,o,i,a),c="arrow"+a.replace("#","");return e.append("marker").attr("id",c).attr("markerUnits","strokeWidth").attr("viewBox","0 0 12 12").attr("refX",9).attr("refY",6).attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M2,2 L10,6 L2,10 L6,6 L2,2").attr("fill",a),s.attr("marker-end","url(#"+c+")"),s}function E(e,t,n,r){return n<e&&F(r,t)?"l":n>e&&F(r,t)?"r":F(n,e)&&r<t?"u":F(n,e)&&r>t?"d":n<e&&r<t?"lu":n>e&&r<t?"ru":n<e&&r>t?"ld":"rd"}function $(e,t,n){t.width=t.width||120,t.height=t.height||60;var r=n?"#666666":"#bbbbbb";"start"!==t.type&&"end"!==t.type&&(e.append("rect").attr("x",t.x).attr("y",t.y).attr("stroke",r).attr("class","title").style("height","20px").style("fill","#f1f3f4").style("stroke-width","1px").style("width",t.width+"px"),e.append("text").attr("x",t.x+4).attr("y",t.y+15).attr("class","unselectable").text(function(){return t.name}).each(function(){var e=N["d"](this),n=e.node().getComputedTextLength(),r=e.text();while(n>t.width-8&&r.length>0)r=r.slice(0,-1),e.text(r+"..."),n=e.node().getComputedTextLength()}));var o=e.append("rect").attr("class","body");o.style("width",t.width+"px").style("fill","white").style("stroke-width","1px"),"start"!==t.type&&"end"!==t.type?(o.attr("x",t.x).attr("y",t.y+20),o.style("height",j(t.height-20)+"px")):(o.attr("x",t.x).attr("y",t.y).classed(t.type,!0).attr("rx",30),o.style("height",j(t.height)+"px")),o.attr("stroke",r);var i,a="start"===t.type?"Start":"end"===t.type?"End":t.approvers&&0!==t.approvers.length?t.approvers.length>1?"".concat(t.approvers[0].name+"..."):t.approvers[0].name:"No approver";i="start"!==t.type&&"end"!==t.type?t.y+25+j(t.height-20)/2:t.y+5+j(t.height)/2,e.append("text").attr("x",t.x+t.width/2).attr("y",i).attr("class","unselectable").attr("text-anchor","middle").text(function(){return a}).each(function(){var e=N["d"](this),n=e.node().getComputedTextLength(),r=e.text();while(n>t.width-8&&r.length>0)r=r.slice(0,-1),e.text(r+"..."),n=e.node().getComputedTextLength()})}var D=$,Y={name:"flowchart",props:{nodes:{type:Array,default:function(){return[{id:1,x:140,y:270,name:"Start",type:"start"},{id:2,x:540,y:270,name:"End",type:"end"}]}},connections:{type:Array,default:function(){return[{source:{id:1,position:"right"},destination:{id:2,position:"left"},id:1,type:"pass"}]}},width:{type:[String,Number],default:800},height:{type:[String,Number],default:600},readonly:{type:Boolean,default:!1},render:{type:Function,default:D}},data:function(){return{internalNodes:[],internalConnections:[],connectingInfo:{source:null,sourcePosition:null},selectionInfo:null,currentNodes:[],currentConnections:[],cursorToChartOffset:{x:0,y:0},clickedOnce:!1,pathClickedOnce:!1,lines:[]}},methods:{add:function(e){this.readonly||this.internalNodes.push(e)},editCurrent:function(){1===this.currentNodes.length?this.editNode(this.currentNodes[0]):1===this.currentConnections.length&&this.editConnection(this.currentConnections[0])},editNode:function(e){this.readonly||this.$emit("editnode",e)},editConnection:function(e){this.readonly||this.$emit("editconnection",e)},handleChartMouseWheel:function(e){if(e.stopPropagation(),e.preventDefault(),e.ctrlKey){var t=document.getElementById("svg"),n=parseFloat(t.style.zoom||1);if(e.deltaY>0&&.1===n)return;n-=e.deltaY/100/10,t.style.zoom=n}},handleChartMouseUp:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.connectingInfo.source&&(this.hoveredConnector&&this.connectingInfo.source.id!==this.hoveredConnector.node.id&&(t=+new Date,n={source:{id:this.connectingInfo.source.id,position:this.connectingInfo.sourcePosition},destination:{id:this.hoveredConnector.node.id,position:this.hoveredConnector.position},id:t,type:"pass",name:"Pass"},this.internalConnections.push(n)),this.connectingInfo.source=null,this.connectingInfo.sourcePosition=null),this.selectionInfo&&(this.selectionInfo=null);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleChartMouseMove:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.currentTarget.getBoundingClientRect(),r=t.pageX-n.left-window.scrollX,this.cursorToChartOffset.x=Math.trunc(r),o=t.pageY-n.top-window.scrollY,this.cursorToChartOffset.y=Math.trunc(o),!this.connectingInfo.source){e.next=12;break}return e.next=8,this.renderConnections();case 8:N["e"]("#svg .connector").classed("active",!0),i=this.getNodeConnectorOffset(this.connectingInfo.source.id,this.connectingInfo.sourcePosition),a=this.hoveredConnector?this.hoveredConnector.position:null,this.arrowTo(i.x,i.y,this.cursorToChartOffset.x,this.cursorToChartOffset.y,this.connectingInfo.sourcePosition,a);case 12:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleChartDblClick:function(e){this.readonly||this.$emit("dblclick",{x:e.offsetX,y:e.offsetY})},handleChartMouseDown:function(e){e.ctrlKey||(this.selectionInfo={x:e.offsetX,y:e.offsetY})},getConnectorPosition:function(e){var t=e.width/2,n=e.height/2,r={x:e.x+t,y:e.y},o={x:e.x,y:e.y+n},i={x:e.x+t,y:e.y+e.height},a={x:e.x+e.width,y:e.y+n};return{left:o,right:a,top:r,bottom:i}},renderSelection:function(){var e=this;if(e.selectionInfo){e.currentNodes.splice(0,e.currentNodes.length),e.currentConnections.splice(0,e.currentConnections.length);var t=T([{x:e.selectionInfo.x,y:e.selectionInfo.y},{x:e.cursorToChartOffset.x,y:e.cursorToChartOffset.y}]),n=N["d"]("#svg"),r=n.select(".selection").classed("active",!0);r.attr("x",t.start.x).attr("y",t.start.y).attr("width",t.end.x-t.start.x).attr("height",t.end.y-t.start.y),e.internalNodes.forEach(function(n){var r=[{x:n.x,y:n.y},{x:n.x,y:n.y+n.height},{x:n.x+n.width,y:n.y},{x:n.x+n.width,y:n.y+n.height}];r.every(function(e){return S(e,t)})&&e.currentNodes.push(n)}),e.lines.forEach(function(n){var r=[{x:n.sourceX,y:n.sourceY},{x:n.destinationX,y:n.destinationY}];if(r.every(function(e){return S(e,t)})&&e.currentConnections.every(function(e){return e.id!==n.id})){var o=e.internalConnections.filter(function(e){return e.id===n.id})[0];e.currentConnections.push(o)}})}else N["e"]("#svg > .selection").classed("active",!1)},renderConnections:function(){var e=this;return new Promise(function(t){e.$nextTick(function(){N["e"]("#svg > g.connection").remove(),e.lines=[],e.internalConnections.forEach(function(t){var n=e.getNodeConnectorOffset(t.source.id,t.source.position),r=e.getNodeConnectorOffset(t.destination.id,t.destination.position),o={pass:"#52c41a",reject:"red"};e.currentConnections.filter(function(e){return e===t}).length>0&&(o={pass:"#12640a",reject:"darkred"});var i=e.arrowTo(n.x,n.y,r.x,r.y,t.source.position,t.destination.position,o[t.type]),a=!0,s=!1,c=void 0;try{for(var l,u=i.paths[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var d=l.value;d.on("mousedown",function(){if(N["b"].stopPropagation(),e.pathClickedOnce)e.editConnection(t);else{var n=setTimeout(function(){e.pathClickedOnce=!1,clearTimeout(n)},300);e.pathClickedOnce=!0}e.currentNodes.splice(0,e.currentNodes.length),e.currentConnections.splice(0,e.currentConnections.length),e.currentConnections.push(t)})}}catch(y){s=!0,c=y}finally{try{a||null==u.return||u.return()}finally{if(s)throw c}}var h=!0,p=!1,f=void 0;try{for(var v,m=i.lines[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var g=v.value;e.lines.push({sourceX:g.sourceX,sourceY:g.sourceY,destinationX:g.destinationX,destinationY:g.destinationY,id:t.id})}}catch(y){p=!0,f=y}finally{try{h||null==m.return||m.return()}finally{if(p)throw f}}}),t()})})},renderNodes:function(){var e=this;return new Promise(function(t){N["e"]("#svg > g.node").remove(),e.internalNodes.forEach(function(t){e.renderNode(t,e.currentNodes.filter(function(e){return e===t}).length>0)}),t()})},getNodeConnectorOffset:function(e,t){var n=this.internalNodes.filter(function(t){return t.id===e})[0];return this.getConnectorPosition(n)[t]},append:function(e){var t=N["d"]("#svg");return t.insert(e,".selection")},guideLineTo:function(e,t,n,r){var o=this.append("g");o.classed("guideline",!0),I(o,e,t,n,r,1,"#a3a3a3",[5,3])},arrowTo:function(e,t,n,r,o,i,a){var s=this.append("g");return s.classed("connection",!0),M(s,e,t,n,r,o,i,1,a||"#a3a3a3",!0),M(s,e,t,n,r,o,i,5,"transparent",!1)},renderNode:function(e,t){var n=this,r=n.append("g").attr("cursor","move").classed("node",!0);e.render=n.render,e.render(r,e,t);var o=N["a"]().on("start",function(){var t=0===n.currentNodes.filter(function(t){return t===e}).length;if(t&&(n.currentConnections.splice(0,n.currentConnections.length),n.currentNodes.splice(0,n.currentNodes.length),n.currentNodes.push(e)),n.clickedOnce)n.currentNodes.splice(0,n.currentNodes.length),n.editNode(e);else{var r=setTimeout(function(){n.clickedOnce=!1,clearTimeout(r)},300);n.clickedOnce=!0}}).on("drag",Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,o,i,a,s,c,l,u,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n.readonly){e.next=2;break}return e.abrupt("return");case 2:for(t=parseFloat(document.getElementById("svg").style.zoom||1),r=!0,o=!1,i=void 0,e.prev=6,a=n.currentNodes[Symbol.iterator]();!(r=(s=a.next()).done);r=!0)c=s.value,c.x+=N["b"].dx/t,c.y+=N["b"].dy/t;e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](6),o=!0,i=e.t0;case 14:e.prev=14,e.prev=15,r||null==a.return||a.return();case 17:if(e.prev=17,!o){e.next=20;break}throw i;case 20:return e.finish(17);case 21:return e.finish(14);case 22:N["e"]("#svg > g.guideline").remove(),l=n.getCurrentNodesEdge(),u=10*Math.round(Math.round(l.start.x)/10),d=10*Math.round(Math.round(l.start.y)/10),n.internalNodes.forEach(function(e){0===n.currentNodes.filter(function(t){return t===e}).length&&(e.x===u&&(e.y<d?n.guideLineTo(e.x,e.y+e.height,u,d):n.guideLineTo(u,d+e.height,e.x,e.y)),e.y===d&&(e.x<u?n.guideLineTo(e.x+e.width,e.y,u,d):n.guideLineTo(u+e.width,d,e.x,e.y)))});case 27:case"end":return e.stop()}},e,null,[[6,10,14,22],[15,,17,21]])}))).on("end",function(){N["e"]("#svg > g.guideline").remove();var e=!0,t=!1,r=void 0;try{for(var o,i=n.currentNodes[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;a.x=10*Math.round(Math.round(a.x)/10),a.y=10*Math.round(Math.round(a.y)/10)}}catch(s){t=!0,r=s}finally{try{e||null==i.return||i.return()}finally{if(t)throw r}}});r.call(o),r.on("mousedown",function(){if(N["b"].ctrlKey){var t=0===n.currentNodes.filter(function(t){return t===e}).length;t?n.currentNodes.push(e):n.currentNodes.splice(n.currentNodes.indexOf(e),1)}});var i=[],s=this.getConnectorPosition(e),c=function(t){var o=s[t],a=r.append("circle").attr("cx",o.x).attr("cy",o.y).attr("r",4).attr("class","connector");a.on("mousedown",function(){N["b"].stopPropagation(),"end"===e.type||n.readonly||(n.connectingInfo.source=e,n.connectingInfo.sourcePosition=t)}).on("mouseup",function(){if(N["b"].stopPropagation(),n.connectingInfo.source){if(n.connectingInfo.source.id!==e.id){var r=+new Date,o={source:{id:n.connectingInfo.source.id,position:n.connectingInfo.sourcePosition},destination:{id:e.id,position:t},id:r,type:"pass",name:"Pass"};n.internalConnections.push(o)}n.connectingInfo.source=null,n.connectingInfo.sourcePosition=null}}).on("mouseover",function(){a.classed("active",!0)}).on("mouseout",function(){a.classed("active",!1)}),i.push(a)};for(var l in s)c(l);r.on("mouseover",function(){i.forEach(function(e){return e.classed("active",!0)})}).on("mouseout",function(){i.forEach(function(e){return e.classed("active",!1)})})},getCurrentNodesEdge:function(){var e=this.currentNodes.map(function(e){return{x:e.x,y:e.y}});return e.push.apply(e,Object(C["a"])(this.currentNodes.map(function(e){return{x:e.x+e.width,y:e.y+e.height}}))),T(e)},save:function(){this.readonly||this.$emit("save",this.internalNodes,this.internalConnections)},remove:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,n,r,o,i,a,s,c,l,u,d,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.readonly){e.next=2;break}return e.abrupt("return");case 2:if(!(this.currentConnections.length>0)){e.next=23;break}for(t=!0,n=!1,r=void 0,e.prev=6,o=this.currentConnections[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)a=i.value,this.removeConnection(a);e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](6),n=!0,r=e.t0;case 14:e.prev=14,e.prev=15,t||null==o.return||o.return();case 17:if(e.prev=17,!n){e.next=20;break}throw r;case 20:return e.finish(17);case 21:return e.finish(14);case 22:this.currentConnections.splice(0,this.currentConnections.length);case 23:if(!(this.currentNodes.length>0)){e.next=44;break}for(s=!0,c=!1,l=void 0,e.prev=27,u=this.currentNodes[Symbol.iterator]();!(s=(d=u.next()).done);s=!0)h=d.value,this.removeNode(h);e.next=35;break;case 31:e.prev=31,e.t1=e["catch"](27),c=!0,l=e.t1;case 35:e.prev=35,e.prev=36,s||null==u.return||u.return();case 38:if(e.prev=38,!c){e.next=41;break}throw l;case 41:return e.finish(38);case 42:return e.finish(35);case 43:this.currentNodes.splice(0,this.currentNodes.length);case 44:case"end":return e.stop()}},e,this,[[6,10,14,22],[15,,17,21],[27,31,35,43],[36,,38,42]])}));function t(){return e.apply(this,arguments)}return t}(),removeNode:function(e){var t=this.internalConnections.filter(function(t){return t.source.id===e.id||t.destination.id===e.id}),n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;this.internalConnections.splice(this.internalConnections.indexOf(s),1)}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}this.internalNodes.splice(this.internalNodes.indexOf(e),1)},removeConnection:function(e){var t=this.internalConnections.indexOf(e);this.internalConnections.splice(t,1)},moveCurrentNode:function(e,t){if(this.currentNodes.length>0&&!this.readonly){var n=!0,r=!1,o=void 0;try{for(var i,a=this.currentNodes[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value;s.x+=e,s.y+=t}}catch(c){r=!0,o=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}},init:function(){var e=this;e.internalNodes.splice(0,e.internalNodes.length),e.internalConnections.splice(0,e.internalConnections.length),e.nodes.forEach(function(t){var n=Object.assign({},t);n.width=n.width||120,n.height=n.height||60,e.internalNodes.push(n)}),e.connections.forEach(function(t){e.internalConnections.push(JSON.parse(JSON.stringify(t)))})}},mounted:function(){var e=this;e.init(),document.onkeydown=function(t){switch(t.keyCode){case 37:e.moveCurrentNode(-10,0);break;case 38:e.moveCurrentNode(0,-10);break;case 39:e.moveCurrentNode(10,0);break;case 40:e.moveCurrentNode(0,10);break;case 27:e.currentNodes.splice(0,e.currentNodes.length),e.currentConnections.splice(0,e.currentConnections.length);break;case 65:var n,r;if(document.activeElement===document.getElementById("chart"))e.currentNodes.splice(0,e.currentNodes.length),e.currentConnections.splice(0,e.currentConnections.length),(n=e.currentNodes).push.apply(n,Object(C["a"])(e.internalNodes)),(r=e.currentConnections).push.apply(r,Object(C["a"])(e.internalConnections)),t.preventDefault();break;case 46:e.remove();break;default:break}}},created:function(){},computed:{hoveredConnector:function(){var e=!0,t=!1,n=void 0;try{for(var r,o=this.internalNodes[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var i=r.value,a=this.getConnectorPosition(i);for(var s in a){var c=a[s];if(Math.hypot(c.x-this.cursorToChartOffset.x,c.y-this.cursorToChartOffset.y)<10)return{position:s,node:i}}}}catch(l){t=!0,n=l}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}return null},hoveredConnection:function(){var e=this,t=!0,n=!1,r=void 0;try{for(var o,i=function(){var t=o.value,n=O(t.sourceX,t.sourceY,t.destinationX,t.destinationY,e.cursorToChartOffset.x,e.cursorToChartOffset.y);if(n<5&&_(t.sourceX-2,t.destinationX+2,e.cursorToChartOffset.x)&&_(t.sourceY-2,t.destinationY+2,e.cursorToChartOffset.y)){var r=e.internalConnections.filter(function(e){return e.id===t.id});return{v:r.length>0?r[0]:null}}},a=this.lines[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var s=i();if("object"===Object(w["a"])(s))return s.v}}catch(c){n=!0,r=c}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null},cursor:function(){return this.connectingInfo.source||this.hoveredConnector?"crosshair":null!=this.hoveredConnection?"pointer":null}},watch:{internalNodes:{immediate:!0,deep:!0,handler:function(){this.renderNodes(),this.renderConnections()}},internalConnections:{immediate:!0,deep:!0,handler:function(){this.renderConnections()}},selectionInfo:{immediate:!0,deep:!0,handler:function(){this.renderSelection()}},currentNodes:{immediate:!0,deep:!0,handler:function(){this.renderNodes()}},currentConnections:{immediate:!0,deep:!0,handler:function(){this.renderConnections()}},cursorToChartOffset:{immediate:!0,deep:!0,handler:function(){this.selectionInfo&&this.renderSelection()}},connectingInfo:{immediate:!0,deep:!0,handler:function(){this.renderConnections()}},nodes:{immediate:!0,deep:!0,handler:function(){this.init()}},connections:{immediate:!0,deep:!0,handler:function(){this.init()}}}},R=Y,L=(n("369f"),Object(d["a"])(R,x,k,!1,null,null,null)),X=L.exports,A={components:{ConnectionDialog:p,NodeDialog:b,Flowchart:X},data:function(){return{nodes:[{id:1,x:50,y:220,name:"Start",type:"start"},{id:2,x:630,y:220,name:"End",type:"end"},{id:3,x:340,y:130,name:"Custom size",type:"operation",approvers:[{id:1,name:"Joyce"}],width:120,height:40},{id:4,x:240,y:220,name:"Operation",type:"operation",approvers:[{id:2,name:"Allen"}]},{id:5,x:440,y:220,name:"Operation",type:"operation",approvers:[{id:3,name:"Teresa"}]}],connections:[{source:{id:1,position:"right"},destination:{id:4,position:"left"},id:1,type:"pass"},{source:{id:4,position:"right"},destination:{id:5,position:"left"},id:2,type:"pass"},{source:{id:5,position:"right"},destination:{id:2,position:"left"},id:3,type:"pass"},{source:{id:5,position:"bottom"},destination:{id:4,position:"bottom"},id:4,type:"reject"},{source:{id:1,position:"top"},destination:{id:3,position:"left"},id:5,type:"pass"},{source:{id:3,position:"right"},destination:{id:2,position:"top"},id:6,type:"pass"}],nodeForm:{target:null},connectionForm:{target:null,operation:null},nodeDialogVisible:!1,connectionDialogVisible:!1}},mounted:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{handleDblClick:function(e){this.$refs.chart.add({id:+new Date,x:e.x,y:e.y,name:"New",type:"operation",approvers:[]})},handleChartSave:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),handleEditNode:function(e){this.nodeForm.target=e,this.nodeDialogVisible=!0},handleEditConnection:function(e){this.connectionForm.target=e,this.connectionDialogVisible=!0},render:function(e,t,n){t.width=t.width||120,t.height=t.height||60;var r=n?"#666666":"#bbbbbb";"start"!==t.type&&"end"!==t.type&&(e.append("rect").attr("x",t.x).attr("y",t.y).attr("stroke",r).attr("class","title").style("height","20px").style("fill","#f1f3f4").style("stroke-width","1px").style("width",t.width+"px"),e.append("text").attr("x",t.x+4).attr("y",t.y+15).attr("class","unselectable").text(function(){return t.name}).each(function(){var e=N["d"](this),n=e.node().getComputedTextLength(),r=e.text();while(n>t.width-8&&r.length>0)r=r.slice(0,-1),e.text(r+"..."),n=e.node().getComputedTextLength()}));var o=e.append("rect").attr("class","body");o.style("width",t.width+"px").style("fill","white").style("stroke-width","1px"),"start"!==t.type&&"end"!==t.type?(o.attr("x",t.x).attr("y",t.y+20),o.style("height",j(t.height-20)+"px")):(o.attr("x",t.x).attr("y",t.y).classed(t.type,!0).attr("rx",30),o.style("height",j(t.height)+"px")),o.attr("stroke",r);var i,a="start"===t.type?"Start":"end"===t.type?"End":t.approvers&&0!==t.approvers.length?t.approvers.length>1?"".concat(t.approvers[0].name+"..."):t.approvers[0].name:"No approver";i="start"!==t.type&&"end"!==t.type?t.y+25+j(t.height-20)/2:t.y+5+j(t.height)/2,e.append("text").attr("x",t.x+t.width/2).attr("y",i).attr("class","unselectable").attr("text-anchor","middle").text(function(){return a}).each(function(){var e=N["d"](this),n=e.node().getComputedTextLength(),r=e.text();while(n>t.width-8&&r.length>0)r=r.slice(0,-1),e.text(r+"..."),n=e.node().getComputedTextLength()})}}},V=A,z=(n("ea25"),Object(d["a"])(V,o,i,!1,null,"86689402",null)),B=z.exports;r["a"].config.productionTip=!1,new r["a"]({el:"#app",mounted:function(){},components:{App:B}})},"695b":function(e,t,n){var r=n("3900");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("e65d5572",r,!0,{sourceMap:!1,shadowMode:!1})},"7cfd":function(e,t,n){var r=n("02ae");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("e433404a",r,!0,{sourceMap:!1,shadowMode:!1})},ea25:function(e,t,n){"use strict";var r=n("7cfd"),o=n.n(r);o.a}});
//# sourceMappingURL=app.6f1254f0.js.map