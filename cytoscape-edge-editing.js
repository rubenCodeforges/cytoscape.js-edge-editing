!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cytoscapeEdgeEditing=t():e.cytoscapeEdgeEditing=t()}(self,(function(){return(()=>{"use strict";var e={347:(e,t,n)=>{var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(218),s=n(259),d=n(171),a=n(961),r=0;e.exports=function(e,t){var n=e;s.options=e;var c,l,g,u,h,y,v,p,f,m,x,A,b,T,C,M,P,w,I,E="cy-edge-bend-editing-cxt-add-bend-point"+r,S="cy-edge-bend-editing-cxt-remove-bend-point"+r,B="cy-edge-bend-editing-cxt-remove-multiple-bend-point"+r,D="cy-edge-control-editing-cxt-add-control-point"+r,F="cy-edge-control-editing-cxt-remove-control-point"+r,R="cy-edge-bend-editing-cxt-remove-multiple-control-point"+r,W=null,K=null,O=!1,k={init:function(){a(t,s,e);var n=e,o=t.container(),k=null,z="cy-node-edge-editing-stage"+r;r++;var L,N,U=document.createElement("div");U.setAttribute("id",z),o.querySelector("#"+z)||o.append(U),(L=Konva.stages.length<r?new Konva.Stage({id:"node-edge-editing-stage",container:z,width:o.clientWidth,height:o.clientHeight}):Konva.stages[r-1]).getChildren().length<1?(N=new Konva.Layer,L.add(N)):N=L.getChildren()[0];var j={edge:void 0,edgeType:"none",anchors:[],touchedAnchor:void 0,touchedAnchorIndex:void 0,bindListeners:function(e){e.on("mousedown touchstart",this.eMouseDown)},unbindListeners:function(e){e.off("mousedown touchstart",this.eMouseDown)},eMouseDown:function(e){t.autounselectify(!1),O=!0,j.touchedAnchor=e.target,I=!1,j.edge.unselect();var n=s.syntax[j.edgeType].weight,o=s.syntax[j.edgeType].distance,i=j.edge;he={edge:i,type:j.edgeType,weights:i.data(n)?[].concat(i.data(n)):[],distances:i.data(o)?[].concat(i.data(o)):[]},P=t.style()._private.coreStyle["active-bg-opacity"]?t.style()._private.coreStyle["active-bg-opacity"].value:.15,t.style().selector("core").style("active-bg-opacity",0).update(),ae(),t.autoungrabify(!0),N.getStage().on("contentTouchend contentMouseup",j.eMouseUp),N.getStage().on("contentMouseout",j.eMouseOut)},eMouseUp:function(e){O=!1,j.touchedAnchor=void 0,I=!1,j.edge.select(),t.style().selector("core").style("active-bg-opacity",P).update(),re(),t.autounselectify(!0),t.autoungrabify(!1),N.getStage().off("contentTouchend contentMouseup",j.eMouseUp),N.getStage().off("contentMouseout",j.eMouseOut)},eMouseOut:function(e){I=!0},clearAnchorsExcept:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,n=!1;this.anchors.forEach((function(o,i){t&&o===t?n=!0:(e.unbindListeners(o),o.destroy())})),n?this.anchors=[t]:(this.anchors=[],this.edge=void 0,this.edgeType="none")},renderAnchorShapes:function(e){if(this.edge=e,this.edgeType=s.getEdgeType(e),n.handleAnchors&&(e.hasClass("edgebendediting-hasbendpoints")||e.hasClass("edgecontrolediting-hascontrolpoints"))){for(var t=s.getAnchorsAsArray(e),o=.65*ie(e),i=0;t&&i<t.length;i+=2){var d=t[i],a=t[i+1];this.renderAnchorShape(d,a,o)}N.draw()}},renderAnchorShape:function(e,n,o){var i=ne({x:e-o/2,y:n-o/2});o*=t.zoom();var s=new Konva.Rect({x:i.x,y:i.y,width:o,height:o,fill:"black",strokeWidth:0,draggable:!0});this.anchors.push(s),this.bindListeners(s),N.add(s)}},H=function(e,n){var o=e.target||e.cyTarget;if(!s.isIgnoredEdge(o)){var i,d,a,r,c=s.getEdgeType(o);"none"===c?(i=[],d=[]):(a=s.syntax[c].weight,r=s.syntax[c].distance,i=o.data(a)?[].concat(o.data(a)):o.data(a),d=o.data(r)?[].concat(o.data(r)):o.data(r));var l={edge:o,type:c,weights:i,distances:d};s.addAnchorPoint(void 0,void 0,n),te().undoable&&t.undoRedo().do("changeAnchorPoints",l)}oe(),o.select()},q=function(e){var n=j.edge,o=s.getEdgeType(n);if(!s.edgeTypeNoneShouldntHappen(o,"UiUtilities.js, cxtRemoveAnchorFcn")){var i={edge:n,type:o,weights:[].concat(n.data(s.syntax[o].weight)),distances:[].concat(n.data(s.syntax[o].distance))};s.removeAnchor(),te().undoable&&t.undoRedo().do("changeAnchorPoints",i),setTimeout((function(){oe(),n.select()}),50)}},_=function(e){var n=j.edge,o=s.getEdgeType(n),i={edge:n,type:o,weights:[].concat(n.data(s.syntax[o].weight)),distances:[].concat(n.data(s.syntax[o].distance))};s.removeAllAnchors(),te().undoable&&t.undoRedo().do("changeAnchorPoints",i),setTimeout((function(){oe(),n.select()}),50)},V=n.validateEdge,X=n.actOnUnsuccessfulReconnection,Y=[];if(n.addBendMenuItemTitle&&Y.push({id:E,content:n.addBendMenuItemTitle,selector:"edge",onClickFunction:function(e){H(e,"bend")},hasTrailingDivider:n.useTrailingDividersAfterContextMenuOptions}),n.removeBendMenuItemTitle&&Y.push({id:S,content:n.removeBendMenuItemTitle,selector:"edge",onClickFunction:q,hasTrailingDivider:n.useTrailingDividersAfterContextMenuOptions}),n.addControlMenuItemTitle&&Y.push({id:D,content:n.addControlMenuItemTitle,selector:"edge",coreAsWell:!0,onClickFunction:function(e){H(e,"control")},hasTrailingDivider:n.useTrailingDividersAfterContextMenuOptions}),n.removeControlMenuItemTitle&&Y.push({id:F,content:n.removeControlMenuItemTitle,selector:"edge",coreAsWell:!0,onClickFunction:q,hasTrailingDivider:n.useTrailingDividersAfterContextMenuOptions}),n.removeAllBendMenuItemTitle&&Y.push({id:B,content:n.removeAllBendMenuItemTitle,selector:":selected.edgebendediting-hasmultiplebendpoints",onClickFunction:_,hasTrailingDivider:n.useTrailingDividersAfterContextMenuOptions}),n.removeAllControlMenuItemTitle&&Y.push({id:R,content:n.removeAllControlMenuItemTitle,selector:":selected.edgecontrolediting-hasmultiplecontrolpoints",onClickFunction:_,hasTrailingDivider:n.useTrailingDividersAfterContextMenuOptions}),n.handleAnchors||(Y=[],n.removeAllControlMenuItemTitle=!1,n.removeAllBendMenuItemTitle=!1,n.removeControlMenuItemTitle=!1,n.addControlMenuItemTitle=!1,n.removeBendMenuItemTitle=!1,n.addBendMenuItemTitle=!1),t.contextMenus){var G=t.contextMenus("get");G.isActive()?G.appendMenuItems(Y):t.contextMenus({menuItems:Y})}var J=i((function(){U.setAttribute("height",o.clientHeight),U.setAttribute("width",o.clientWidth),U.style.position="absolute",U.style.top="0",U.style.left="0",U.style.zIndex=te().zIndex,setTimeout((function(){var e=Q(U),n=Q(o);U.style.top=""+-(e.top-n.top),U.style.left=""+-(e.left-n.left),N.getStage().setWidth(o.clientWidth),N.getStage().setHeight(o.clientHeight),t&&oe()}),0)}),250);function Q(e){var t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX}}function Z(){J()}Z(),window.addEventListener("resize",(function(){Z()}));var $,ee=k;function te(){return $||($=k.options)}function ne(e){var n=t.pan(),o=t.zoom();return{x:e.x*o+n.x,y:e.y*o+n.y}}function oe(){j.clearAnchorsExcept(j.touchedAnchor),null!==W&&(W.destroy(),W=null),null!==K&&(K.destroy(),K=null),N.draw(),w&&(j.renderAnchorShapes(w),function(e){if(e&&n.handleReconnectEdge){var o=s.getAnchorsAsArray(e);void 0===o&&(o=[]);var i=e.sourceEndpoint(),d=e.targetEndpoint();if(i.x&&d.x&&(o.unshift(i.y),o.unshift(i.x),o.push(d.x),o.push(d.y),o)){var a={x:o[0],y:o[1]},r={x:o[o.length-2],y:o[o.length-1]},c={x:o[2],y:o[3]},l={x:o[o.length-4],y:o[o.length-3]};!function(e,n,o,i,s){var d=n.x-o/2,a=n.y-o/2,r=i.x-o/2,c=i.y-o/2,l=s.x-o/2,g=s.y-o/2,u=ne({x:e.x-o/2,y:e.y-o/2}),h=ne({x:d,y:a});o=o*t.zoom()/2;var y=ne({x:r,y:c}),v=ne({x:l,y:g}),p=o,f=Math.sqrt(Math.pow(y.x-u.x,2)+Math.pow(y.y-u.y,2)),m=u.x+p/f*(y.x-u.x),x=u.y+p/f*(y.y-u.y),A=Math.sqrt(Math.pow(v.x-h.x,2)+Math.pow(v.y-h.y,2)),b=h.x+p/A*(v.x-h.x),T=h.y+p/A*(v.y-h.y);null===W&&(W=new Konva.Circle({x:m+o,y:x+o,radius:o,fill:"black"})),null===K&&(K=new Konva.Circle({x:b+o,y:T+o,radius:o,fill:"black"})),N.add(W),N.add(K),N.draw()}(a,r,.65*ie(e),c,l)}}}(w))}function ie(e){var t=te().anchorShapeSizeFactor;return parseFloat(e.css("width"))<=2.5?2.5*t:parseFloat(e.css("width"))*t}function se(e,t,n,o,i){return e>=o-n/2&&e<=o+n/2&&t>=i-n/2&&t<=i+n/2}function de(e,t,n){var o=s.getEdgeType(n);if("none"===o)return-1;if(null==n.data(s.syntax[o].weight)||0==n.data(s.syntax[o].weight).length)return-1;for(var i=s.getAnchorsAsArray(n),d=ie(n),a=0;i&&a<i.length;a+=2)if(se(e,t,d,i[a],i[a+1]))return a/2;return-1}function ae(){T=t.panningEnabled(),C=t.zoomingEnabled(),M=t.boxSelectionEnabled(),t.zoomingEnabled(!1).panningEnabled(!1).boxSelectionEnabled(!1)}function re(){t.zoomingEnabled(C).panningEnabled(T).boxSelectionEnabled(M)}null==ee&&(ee={}),ee.options=n;var ce=i((function(e,t,n,o){var i=e.data(s.syntax[t].weight),d=e.data(s.syntax[t].distance),a=s.convertToRelativePosition(e,o);i[n]=a.weight,d[n]=a.distance,e.data(s.syntax[t].weight,i),e.data(s.syntax[t].distance,d)}),5);T=t.panningEnabled(),C=t.zoomingEnabled(),M=t.boxSelectionEnabled();var le,ge,ue,he,ye,ve,pe,fe,me,xe=(Me=t.edges(":selected")).length;1===xe&&(w=Me[0]),t.bind("zoom pan",u=function(){w&&oe()}),t.on("data","edge",b=function(){w&&oe()}),t.on("style","edge.edgebendediting-hasbendpoints:selected, edge.edgecontrolediting-hascontrolpoints:selected",c=function(){setTimeout((function(){oe()}),50)}),t.on("remove","edge",l=function(){if(this.selected()){if(xe-=1,t.startBatch(),w&&w.removeClass("cy-edge-editing-highlight"),1===xe){var e=t.edges(":selected");1===e.length?(w=e[0]).addClass("cy-edge-editing-highlight"):w=void 0}else w=void 0;t.endBatch()}oe()}),t.on("add","edge",g=function(){this.selected()&&(xe+=1,t.startBatch(),w&&w.removeClass("cy-edge-editing-highlight"),1===xe?(w=this).addClass("cy-edge-editing-highlight"):w=void 0,t.endBatch()),oe()}),t.on("select","edge",h=function(){var e=this;0!=e.target().connectedEdges().length&&0!=e.source().connectedEdges().length&&(xe+=1,t.startBatch(),w&&w.removeClass("cy-edge-editing-highlight"),1===xe?(w=e).addClass("cy-edge-editing-highlight"):w=void 0,t.endBatch(),oe())}),t.on("unselect","edge",y=function(){if(xe-=1,t.startBatch(),w&&w.removeClass("cy-edge-editing-highlight"),1===xe){var e=t.edges(":selected");1===e.length?(w=e[0]).addClass("cy-edge-editing-highlight"):w=void 0}else w=void 0;t.endBatch(),oe()});var Ae,be,Te,Ce,Me,Pe=!1;t.on("tapstart",v=function(e){ge=e.position||e.cyPosition}),t.on("tapstart","edge",p=function(e){var o=this;if(w&&w.id()===o.id()){ue=o;var i=s.getEdgeType(o);"none"===i&&(i="bend");var a=function(e,t,n){var o=ie(n),i=n._private.rscratch.allpts,s={x:i[0],y:i[1]},d={x:i[i.length-2],y:i[i.length-1]};return ne(s),ne(d),se(e,t,o,s.x,s.y)?0:se(e,t,o,d.x,d.y)?1:-1}(ge.x,ge.y,o);if(!n.handleReconnectEdge||0!=a&&1!=a)n.handleAnchors&&(le=void 0,ye=!0);else{o.unselect(),ve=a,fe=0==a?ue.source():ue.target();var r=0==a?"source":"target",c=d.disconnectEdge(ue,t,e.renderedPosition,r);pe=c.dummyNode,ue=c.edge,ae()}}else ye=!1}),t.on("drag","node",A=function(){w&&oe()}),t.on("tapdrag",f=function(e){t.edges(":selected").length>0&&t.autounselectify(!1);var o=ue;if(void 0===ue||!s.isIgnoredEdge(o)){var i=s.getEdgeType(o);if(ye&&n.enableCreateAnchorOnDrag&&!O&&"none"!==i){var d=s.syntax[i].weight,a=s.syntax[i].distance;he={edge:o,type:i,weights:o.data(d)?[].concat(o.data(d)):[],distances:o.data(a)?[].concat(o.data(a)):[]},o.unselect(),le=s.addAnchorPoint(o,ge),ue=o,ye=void 0,Pe=!0,ae()}if(O||void 0!==ue&&(void 0!==le||void 0!==ve)){var r=e.position||e.cyPosition;-1!=ve&&pe?pe.position(r):null!=le?ce(o,i,le,r):O&&(void 0===j.touchedAnchorIndex&&ge&&(j.touchedAnchorIndex=de(ge.x,ge.y,j.edge)),void 0!==j.touchedAnchorIndex&&ce(j.edge,j.edgeType,j.touchedAnchorIndex,r)),e.target&&e.target[0]&&e.target.isNode()&&(me=e.target)}}}),t.on("tapend",m=function(e){I&&N.getStage().fire("contentMouseup");var o=ue||j.edge;if(void 0!==o){var i=j.touchedAnchorIndex;if(null!=i){var a,r=o.source().position("x"),c=o.source().position("y"),l=o.target().position("x"),g=o.target().position("y"),u=s.getAnchorsAsArray(o),h=[r,c].concat(u).concat([l,g]),y=i+1,v=y-1,p=y+1,f={x:h[2*y],y:h[2*y+1]},m={x:h[2*v],y:h[2*v+1]},x={x:h[2*p],y:h[2*p+1]};if(f.x===m.x&&f.y===m.y||f.x===m.x&&f.y===m.y)a=!0;else{var A,b=(m.y-x.y)/(m.x-x.x),T={srcPoint:m,tgtPoint:x,m1:b,m2:-1/b},C=s.getIntersection(o,f,T),M=Math.sqrt(Math.pow(f.x-C.x,2)+Math.pow(f.y-C.y,2));"bend"===(A=s.getEdgeType(o))&&M<te().bendRemovalSensitivity&&(a=!0)}a&&s.removeAnchor(o,i)}else if(null!=pe&&(0==ve||1==ve)){var P=fe,w="valid",E=0==ve?"source":"target";if(me){var S=0==ve?me:o.source(),B=1==ve?me:o.target();"function"==typeof V&&(w=V(o,S,B)),P="valid"===w?me:fe}if(S=0==ve?P:o.source(),B=1==ve?P:o.target(),o=d.connectEdge(o,fe,E),fe.id()!==P.id())if("function"==typeof n.handleReconnectEdge){var D=n.handleReconnectEdge(S.id(),B.id(),o.data());if(D&&(d.copyEdge(o,D),s.initAnchorPoints(te().bendPositionsFunction,te().controlPositionsFunction,[D])),D&&te().undoable){var F={newEdge:D,oldEdge:o};t.undoRedo().do("removeReconnectedEdge",F),o=D}else D&&(t.remove(o),o=D)}else{var R=0==ve?{source:P.id()}:{target:P.id()},W=0==ve?{source:fe.id()}:{target:fe.id()};if(te().undoable&&P.id()!==fe.id()){var K={edge:o,location:R,oldLoc:W};o=t.undoRedo().do("reconnectEdge",K).edge}}"valid"!==w&&"function"==typeof X&&X(),o.select(),t.remove(pe)}}"none"===(A=s.getEdgeType(o))&&(A="bend"),void 0!==j.touchedAnchorIndex||Pe||(he=void 0);var O=s.syntax[A].weight;void 0!==o&&void 0!==he&&(o.data(O)?o.data(O).toString():null)!=he.weights.toString()&&(Pe&&(o.select(),t.autounselectify(!0)),te().undoable&&t.undoRedo().do("changeAnchorPoints",he)),le=void 0,ue=void 0,he=void 0,ye=void 0,ve=void 0,pe=void 0,fe=void 0,me=void 0,ge=void 0,Pe=!1,j.touchedAnchorIndex=void 0,re(),setTimeout((function(){oe()}),50)}),t.on("edgeediting.movestart",(function(e,t){Ce=!1,null!=t[0]&&t.forEach((function(e){null==s.getAnchorsAsArray(e)||Ce||(be={x:s.getAnchorsAsArray(e)[0],y:s.getAnchorsAsArray(e)[1]},Ae={firstTime:!0,firstAnchorPosition:{x:be.x,y:be.y},edges:t},Te=e,Ce=!0)}))})),t.on("edgeediting.moveend",(function(e,n){if(null!=Ae){var o=Ae.firstAnchorPosition,i={x:s.getAnchorsAsArray(Te)[0],y:s.getAnchorsAsArray(Te)[1]};Ae.positionDiff={x:-i.x+o.x,y:-i.y+o.y},delete Ae.firstAnchorPosition,te().undoable&&t.undoRedo().do("moveAnchorPoints",Ae),Ae=void 0}})),t.on("cxttap",x=function(e){var o,i,d=e.target||e.cyTarget,a=!1;try{a=d.isEdge()}catch(e){}a?(o=d,i=s.getEdgeType(o)):(o=j.edge,i=j.edgeType);var r=e.position||e.cyPosition,c=de(r.x,r.y,o);if(-1==c?s.currentCtxPos=r:s.currentAnchorIndex=c,s.currentCtxEdge=o,t.contextMenus){var l=t.contextMenus("get");if(!w||w.id()!=o.id()||s.isIgnoredEdge(o)||w!==o)return n.removeBendMenuItemTitle&&l.hideMenuItem(S),n.addBendMenuItemTitle&&l.hideMenuItem(E),n.removeControlMenuItemTitle&&l.hideMenuItem(F),void(n.addControlMenuItemTitle&&l.hideMenuItem(D));-1==c?(n.removeBendMenuItemTitle&&l.hideMenuItem(S),n.removeControlMenuItemTitle&&l.hideMenuItem(F),"control"===i&&a?(n.addControlMenuItemTitle&&l.showMenuItem(D),n.addBendMenuItemTitle&&l.hideMenuItem(E)):"bend"===i&&a?(n.addBendMenuItemTitle&&l.showMenuItem(E),n.addControlMenuItemTitle&&l.hideMenuItem(D)):a?(n.addBendMenuItemTitle&&l.showMenuItem(E),n.addControlMenuItemTitle&&l.showMenuItem(D)):(n.addBendMenuItemTitle&&l.hideMenuItem(E),n.addControlMenuItemTitle&&l.hideMenuItem(D))):(n.addBendMenuItemTitle&&l.hideMenuItem(E),n.addControlMenuItemTitle&&l.hideMenuItem(D),"control"===i?(n.removeControlMenuItemTitle&&l.showMenuItem(F),n.removeBendMenuItemTitle&&l.hideMenuItem(S),n.removeAllControlMenuItemTitle&&o.hasClass("edgecontrolediting-hasmultiplecontrolpoints")&&l.showMenuItem(R)):"bend"===i?(n.removeBendMenuItemTitle&&l.showMenuItem(S),n.removeControlMenuItemTitle&&l.hideMenuItem(F)):(n.removeBendMenuItemTitle&&l.hideMenuItem(S),n.removeControlMenuItemTitle&&l.hideMenuItem(F),n.removeAllControlMenuItemTitle&&l.hideMenuItem(R)))}}),t.on("cyedgeediting.changeAnchorPoints","edge",(function(){t.startBatch(),t.edges().unselect(),t.trigger("bendPointMovement"),t.endBatch(),oe()}));var we=!1,Ie={37:!1,38:!1,39:!1,40:!1};document.addEventListener("keydown",(function(n){if("function"==typeof te().moveSelectedAnchorsOnKeyEvents?te().moveSelectedAnchorsOnKeyEvents():te().moveSelectedAnchorsOnKeyEvents){var o,i,d=document.activeElement.tagName;if("TEXTAREA"!=d&&"INPUT"!=d){switch(n.keyCode){case 37:case 39:case 38:case 40:case 32:n.preventDefault()}if(n.keyCode<"37"||n.keyCode>"40")return;if(Ie[n.keyCode]=!0,t.edges(":selected").length!=t.elements(":selected").length||1!=t.edges(":selected").length)return;we||(Me=t.edges(":selected"),t.trigger("edgeediting.movestart",[Me]),we=!0);var a=3;if(n.altKey&&n.shiftKey)return;n.altKey?a=1:n.shiftKey&&(a=10);var r=0,c=0;r+=Ie[39]?a:0,r-=Ie[37]?a:0,c+=Ie[40]?a:0,c-=Ie[38]?a:0,o={x:r,y:c},(i=Me).forEach((function(t){var n=s.getAnchorsAsArray(t),i=[];if(null!=n){for(var d=0;d<n.length;d+=2)i.push({x:n[d]+o.x,y:n[d+1]+o.y});var a=s.getEdgeType(t);if(s.edgeTypeNoneShouldntHappen(a,"UiUtilities.js, moveAnchorPoints"))return;"bend"===a?e.bendPointPositionsSetterFunction(t,i):"control"===a&&e.controlPointPositionsSetterFunction(t,i)}})),s.initAnchorPoints(te().bendPositionsFunction,te().controlPositionsFunction,i),t.trigger("bendPointMovement")}}}),!0),document.addEventListener("keyup",(function(e){e.keyCode<"37"||e.keyCode>"40"||(e.preventDefault(),Ie[e.keyCode]=!1,("function"==typeof te().moveSelectedAnchorsOnKeyEvents?te().moveSelectedAnchorsOnKeyEvents():te().moveSelectedAnchorsOnKeyEvents)&&(t.trigger("edgeediting.moveend",[Me]),Me=void 0,we=!1))}),!0),k=ee},unbind:function(){t.off("remove","node",l).off("add","node",g).off("style","edge.edgebendediting-hasbendpoints:selected, edge.edgecontrolediting-hascontrolpoints:selected",c).off("select","edge",h).off("unselect","edge",y).off("tapstart",v).off("tapstart","edge",p).off("tapdrag",f).off("tapend",m).off("cxttap",x).off("drag","node",A).off("data","edge",b),t.unbind("zoom pan",u)}};return k[n]?k[n].apply(t.container(),Array.prototype.slice.call(arguments,1)):"object"!=(void 0===n?"undefined":o(n))&&n?(console.error("No such function `"+n+"` for cytoscape.js-edge-editing"),this):k.init.apply(t.container(),arguments)}},259:e=>{var t={options:void 0,currentCtxEdge:void 0,currentCtxPos:void 0,currentAnchorIndex:void 0,ignoredClasses:void 0,setIgnoredClasses:function(e){this.ignoredClasses=e},syntax:{bend:{edge:"segments",class:"edgebendediting-hasbendpoints",multiClass:"edgebendediting-hasmultiplebendpoints",weight:"cyedgebendeditingWeights",distance:"cyedgebendeditingDistances",weightCss:"segment-weights",distanceCss:"segment-distances"},control:{edge:"unbundled-bezier",class:"edgecontrolediting-hascontrolpoints",multiClass:"edgecontrolediting-hasmultiplecontrolpoints",weight:"cyedgecontroleditingWeights",distance:"cyedgecontroleditingDistances",weightCss:"control-point-weights",distanceCss:"control-point-distances"}},getEdgeType:function(e){return e?e.hasClass(this.syntax.bend.class)?"bend":e.hasClass(this.syntax.control.class)?"control":e.css("curve-style")===this.syntax.bend.edge?"bend":e.css("curve-style")===this.syntax.control.edge?"control":this.options.bendPositionsFunction(e)&&this.options.bendPositionsFunction(e).length>0?"bend":this.options.controlPositionsFunction(e)&&this.options.controlPositionsFunction(e).length>0?"control":"none":"none"},initAnchorPoints:function(e,t,n){for(var o=0;o<n.length;o++){var i=n[o],s=this.getEdgeType(i);if("none"!==s&&!this.isIgnoredEdge(i)){var d;"bend"===s?d=e.apply(this,i):"control"===s&&(d=t.apply(this,i));var a={weights:[],distances:[]};if(d)a=this.convertToRelativePositions(i,d);else{var r=i.data(this.syntax[s].weight),c=i.data(this.syntax[s].distance);r&&c&&(a={weights:r,distances:c})}a.distances.length>0?(i.data(this.syntax[s].weight,a.weights),i.data(this.syntax[s].distance,a.distances),i.addClass(this.syntax[s].class),a.distances.length>1&&i.addClass(this.syntax[s].multiClass)):(i.data(this.syntax[s].weight,[]),i.data(this.syntax[s].distance,[]),i.hasClass(this.syntax[s].class)&&i.removeClass(this.syntax[s].class),i.hasClass(this.syntax[s].multiClass)&&i.removeClass(this.syntax[s].multiClass))}}},isIgnoredEdge:function(e){var t=e.source().position("x"),n=e.source().position("y"),o=e.target().position("x"),i=e.target().position("y");if(t==o&&n==i||e.source().id()==e.target().id())return!0;for(var s=0;this.ignoredClasses&&s<this.ignoredClasses.length;s++)if(e.hasClass(this.ignoredClasses[s]))return!0;return!1},getLineDirection:function(e,t){return e.y==t.y&&e.x<t.x?1:e.y<t.y&&e.x<t.x?2:e.y<t.y&&e.x==t.x?3:e.y<t.y&&e.x>t.x?4:e.y==t.y&&e.x>t.x?5:e.y>t.y&&e.x>t.x?6:e.y>t.y&&e.x==t.x?7:8},getSrcTgtPointsAndTangents:function(e){var t=e.source(),n=e.target(),o=(n.position(),t.position(),t.position()),i=n.position(),s=(i.y-o.y)/(i.x-o.x);return{m1:s,m2:-1/s,srcPoint:o,tgtPoint:i}},getIntersection:function(e,t,n){void 0===n&&(n=this.getSrcTgtPointsAndTangents(e));var o,i,s=n.srcPoint,d=(n.tgtPoint,n.m1),a=n.m2;if(d==1/0||d==-1/0)o=s.x,i=t.y;else if(0==d)o=t.x,i=s.y;else{var r=s.y-d*s.x;i=d*(o=(t.y-a*t.x-r)/(d-a))+r}return{x:o,y:i}},getAnchorsAsArray:function(e){var t=this.getEdgeType(e);if("none"!==t&&e.css("curve-style")===this.syntax[t].edge){for(var n=[],o=e.pstyle(this.syntax[t].weightCss)?e.pstyle(this.syntax[t].weightCss).pfValue:[],i=e.pstyle(this.syntax[t].distanceCss)?e.pstyle(this.syntax[t].distanceCss).pfValue:[],s=Math.min(o.length,i.length),d=e.source().position(),a=e.target().position(),r=a.y-d.y,c=a.x-d.x,l=Math.sqrt(c*c+r*r),g={x:c/l,y:r/l},u=-g.y,h=g.x,y=0;y<s;y++){var v=o[y],p=i[y],f=1-v,m=v,x={x1:d.x,x2:a.x,y1:d.y,y2:a.y},A={x:x.x1*f+x.x2*m,y:x.y1*f+x.y2*m};n.push(A.x+u*p,A.y+h*p)}return n}},convertToRelativePosition:function(e,t,n){void 0===n&&(n=this.getSrcTgtPointsAndTangents(e));var o,i=this.getIntersection(e,t,n),s=i.x,d=i.y,a=n.srcPoint,r=n.tgtPoint;o=s!=a.x?(s-a.x)/(r.x-a.x):d!=a.y?(d-a.y)/(r.y-a.y):0;var c=Math.sqrt(Math.pow(d-t.y,2)+Math.pow(s-t.x,2)),l=this.getLineDirection(a,r),g=this.getLineDirection(i,t);return l-g!=-2&&l-g!=6&&0!=c&&(c*=-1),{weight:o,distance:c}},convertToRelativePositions:function(e,t){for(var n=this.getSrcTgtPointsAndTangents(e),o=[],i=[],s=0;t&&s<t.length;s++){var d=t[s],a=this.convertToRelativePosition(e,d,n);o.push(a.weight),i.push(a.distance)}return{weights:o,distances:i}},getDistancesString:function(e,t){for(var n="",o=e.data(this.syntax[t].distance),i=0;o&&i<o.length;i++)n=n+" "+o[i];return n},getWeightsString:function(e,t){for(var n="",o=e.data(this.syntax[t].weight),i=0;o&&i<o.length;i++)n=n+" "+o[i];return n},addAnchorPoint:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;void 0!==e&&void 0!==t||(e=this.currentCtxEdge,t=this.currentCtxPos),void 0===n&&(n=this.getEdgeType(e));for(var o,i=this.syntax[n].weight,s=this.syntax[n].distance,d=this.convertToRelativePosition(e,t),a=d.weight,r=e.source().position("x"),c=e.source().position("y"),l=e.target().position("x"),g=e.target().position("y"),u=this.convertToRelativePosition(e,{x:r,y:c}).weight,h=this.convertToRelativePosition(e,{x:l,y:g}).weight,y=[u].concat(e.data(i)?e.data(i):[]).concat([h]),v=this.getAnchorsAsArray(e),p=1/0,f=[r,c].concat(v||[]).concat([l,g]),m=-1,x=0;x<y.length-1;x++){var A=y[x],b=y[x+1],T=this.compareWithPrecision(a,A,!0),C=this.compareWithPrecision(a,b),M=this.compareWithPrecision(a,b,!0),P=this.compareWithPrecision(a,A);if(T&&C||M&&P){var w={x:r=f[2*x],y:c=f[2*x+1]},I={x:l=f[2*x+2],y:g=f[2*x+3]},E=(c-g)/(r-l),S=-1/E,B={srcPoint:w,tgtPoint:I,m1:E,m2:S},D=this.getIntersection(e,t,B),F=Math.sqrt(Math.pow(t.x-D.x,2)+Math.pow(t.y-D.y,2));F<p&&(p=F,o=D,m=x)}}void 0!==o&&(t=o),d=this.convertToRelativePosition(e,t),void 0===o&&(d.distance=0);var R=e.data(i),W=e.data(s);return W=W||[],0===(R=R||[]).length&&(m=0),-1!=m&&(R.splice(m,0,d.weight),W.splice(m,0,d.distance)),e.data(i,R),e.data(s,W),e.addClass(this.syntax[n].class),(R.length>1||W.length>1)&&e.addClass(this.syntax[n].multiClass),m},removeAnchor:function(e,t){void 0!==e&&void 0!==t||(e=this.currentCtxEdge,t=this.currentAnchorIndex);var n=this.getEdgeType(e);if(!this.edgeTypeNoneShouldntHappen(n,"anchorPointUtilities.js, removeAnchor")){var o,i=this.syntax[n].weight,s=this.syntax[n].distance,d=e.data(i),a=e.data(s);"bend"===n?o=this.options.bendPositionsFunction(e):"control"===n&&(o=this.options.controlPositionsFunction(e)),d.splice(t,1),a.splice(t,1),o&&o.splice(t,1),1==d.length||1==a.length?e.removeClass(this.syntax[n].multiClass):0==d.length||0==a.length?(e.removeClass(this.syntax[n].class),e.data(i,[]),e.data(s,[])):(e.data(i,d),e.data(s,a))}},removeAllAnchors:function(e){void 0===e&&(e=this.currentCtxEdge);var t=this.getEdgeType(e);if(!this.edgeTypeNoneShouldntHappen(t,"anchorPointUtilities.js, removeAllAnchors")){e.removeClass(this.syntax[t].class),e.removeClass(this.syntax[t].multiClass);var n=this.syntax[t].weight,o=this.syntax[t].distance;e.data(n,[]),e.data(o,[]),"bend"===t&&this.options.bendPositionsFunction(e)?this.options.bendPointPositionsSetterFunction(e,[]):"control"===t&&this.options.controlPositionsFunction(e)&&this.options.controlPointPositionsSetterFunction(e,[])}},calculateDistance:function(e,t){var n=e.x-t.x,o=e.y-t.y;return Math.sqrt(Math.pow(n,2)+Math.pow(o,2))},compareWithPrecision:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.01,i=e-t;return Math.abs(i)<=o||(n?e<t:e>t)},edgeTypeNoneShouldntHappen:function(e,t){return"none"===e&&(console.log("In "+t+": edge type none should never happen here!!"),!0)}};e.exports=t},218:e=>{var t,n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=(t=Math.max,n=Date.now||function(){return(new Date).getTime()},function(e,i,s){var d,a,r,c,l,g,u,h,y,v=0,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");if(i=i<0?0:+i||0,!0===s){var m=!0;f=!1}else y=void 0===(h=s)?"undefined":o(h),!h||"object"!=y&&"function"!=y||(m=!!s.leading,p="maxWait"in s&&t(+s.maxWait||0,i),f="trailing"in s?!!s.trailing:f);function x(t,o){o&&clearTimeout(o),a=g=u=void 0,t&&(v=n(),r=e.apply(l,d),g||a||(d=l=void 0))}function A(){var e=i-(n()-c);e<=0||e>i?x(u,a):g=setTimeout(A,e)}function b(){x(f,g)}function T(){if(d=arguments,c=n(),l=this,u=f&&(g||!m),!1===p)var t=m&&!g;else{a||m||(v=c);var o=p-(c-v),s=o<=0||o>p;s?(a&&(a=clearTimeout(a)),v=c,r=e.apply(l,d)):a||(a=setTimeout(b,o))}return s&&g?g=clearTimeout(g):g||i===p||(g=setTimeout(A,i)),t&&(s=!0,r=e.apply(l,d)),!s||g||a||(d=l=void 0),r}return T.cancel=function(){g&&clearTimeout(g),a&&clearTimeout(a),v=0,a=g=u=void 0},T});e.exports=i},579:(e,t,n)=>{var o,i,s;i=n(259),n(218),s=function(e,t){var o=n(347);if(e&&t){var s,d={bendPositionsFunction:function(e){return e.data("bendPointPositions")},controlPositionsFunction:function(e){return e.data("controlPointPositions")},bendPointPositionsSetterFunction:function(e,t){e.data("bendPointPositions",t)},controlPointPositionsSetterFunction:function(e,t){e.data("controlPointPositions",t)},initAnchorsAutomatically:!0,ignoredClasses:[],undoable:!1,anchorShapeSizeFactor:3,zIndex:999,bendRemovalSensitivity:8,addBendMenuItemTitle:"Add Bend Point",removeBendMenuItemTitle:"Remove Bend Point",removeAllBendMenuItemTitle:"Remove All Bend Points",addControlMenuItemTitle:"Add Control Point",removeControlMenuItemTitle:"Remove Control Point",removeAllControlMenuItemTitle:"Remove All Control Points",moveSelectedAnchorsOnKeyEvents:function(){return!0},useTrailingDividersAfterContextMenuOptions:!1,enableCreateAnchorOnDrag:!0,handleReconnectEdge:!0,handleAnchors:!0},a=!1;e("core","edgeEditing",(function(e){var t=this;return"initialized"===e?a:("get"!==e&&(s=function(e,t){var n={};for(var o in e)n[o]=e[o];for(var o in t)if("bendRemovalSensitivity"==o){var i=t[o];isNaN(i)||(n[o]=i>=0&&i<=20?t[o]:i<0?0:20)}else n[o]=t[o];return n}(d,e),a=!0,t.style().selector(".edgebendediting-hasbendpoints").css({"curve-style":"segments","segment-distances":function(e){return i.getDistancesString(e,"bend")},"segment-weights":function(e){return i.getWeightsString(e,"bend")},"edge-distances":"node-position"}),t.style().selector(".edgecontrolediting-hascontrolpoints").css({"curve-style":"unbundled-bezier","control-point-distances":function(e){return i.getDistancesString(e,"control")},"control-point-weights":function(e){return i.getWeightsString(e,"control")},"edge-distances":"node-position"}),t.style().selector("#nwt_reconnectEdge_dummy").css({width:"1",height:"1",visibility:"hidden"}),i.setIgnoredClasses(s.ignoredClasses),s.initAnchorsAutomatically&&i.initAnchorPoints(s.bendPositionsFunction,s.controlPositionsFunction,t.edges(),s.ignoredClasses),o(s,t)),a?{getAnchorsAsArray:function(e){return i.getAnchorsAsArray(e)},initAnchorPoints:function(e){i.initAnchorPoints(s.bendPositionsFunction,s.controlPositionsFunction,e)},deleteSelectedAnchor:function(e,t){i.removeAnchor(e,t)},getEdgeType:function(e){return i.getEdgeType(e)}}:void 0)}))}},e.exports&&(e.exports=s),void 0===(o=function(){return s}.call(t,n,t,e))||(e.exports=o),"undefined"!=typeof cytoscape&&Konva&&s(cytoscape,Konva)},171:e=>{e.exports={disconnectEdge:function(e,t,n,o){var i={data:{id:"nwt_reconnectEdge_dummy",ports:[]},renderedPosition:n};t.add(i);var s="source"===o?{source:i.data.id}:{target:i.data.id};return e=e.move(s)[0],{dummyNode:t.nodes("#"+i.data.id)[0],edge:e}},connectEdge:function(e,t,n){if(e.isEdge()&&t.isNode()){var o={};if("source"===n)o.source=t.id();else{if("target"!==n)return;o.target=t.id()}return e.move(o)[0]}},copyEdge:function(e,t){this.copyAnchors(e,t),this.copyStyle(e,t)},copyStyle:function(e,t){e&&t&&(t.data("line-color",e.data("line-color")),t.data("width",e.data("width")),t.data("cardinality",e.data("cardinality")))},copyAnchors:function(e,t){if(e.hasClass("edgebendediting-hasbendpoints")){var n=e.data("cyedgebendeditingDistances"),o=e.data("cyedgebendeditingWeights");t.data("cyedgebendeditingDistances",n),t.data("cyedgebendeditingWeights",o),t.addClass("edgebendediting-hasbendpoints")}else e.hasClass("edgecontrolediting-hascontrolpoints")&&(n=e.data("cyedgecontroleditingDistances"),o=e.data("cyedgecontroleditingWeights"),t.data("cyedgecontroleditingDistances",n),t.data("cyedgecontroleditingWeights",o),t.addClass("edgecontrolediting-hascontrolpoints"));e.hasClass("edgebendediting-hasmultiplebendpoints")?t.addClass("edgebendediting-hasmultiplebendpoints"):e.hasClass("edgecontrolediting-hasmultiplecontrolpoints")&&t.addClass("edgecontrolediting-hasmultiplecontrolpoints")}}},961:e=>{e.exports=function(e,t,n){if(null!=e.undoRedo){var o=e.undoRedo({defaultActions:!1,isDebug:!0});o.action("changeAnchorPoints",i,i),o.action("moveAnchorPoints",s,s),o.action("reconnectEdge",d,d),o.action("removeReconnectedEdge",a,a)}function i(n){var o,i,s,d,a=e.getElementById(n.edge.id()),r="none"!==n.type?n.type:t.getEdgeType(a);"none"!==n.type||n.set?(s=t.syntax[r].weight,d=t.syntax[r].distance,o=n.set?a.data(s):n.weights,i=n.set?a.data(d):n.distances):(o=[],i=[]);var c={edge:a,type:r,weights:o,distances:i,set:!0};if(n.set){var l=n.weights&&n.weights.length>0,g=l&&n.weights.length>1;l&&(a.data(s,n.weights),a.data(d,n.distances));var u=t.syntax[r].class,h=t.syntax[r].multiClass;l||g?l&&!g?(a.addClass(u),a.removeClass(h)):a.addClass(u+" "+h):a.removeClass(u+" "+h),l||(a.data(s,[]),a.data(d,[])),a.selected()?(a.unselect(),a.select()):a.select()}return a.trigger("cyedgeediting.changeAnchorPoints"),c}function s(e){if(e.firstTime)return delete e.firstTime,e;var o=e.edges,i=e.positionDiff,s={edges:o,positionDiff:{x:-i.x,y:-i.y}};return function(e,o){o.forEach((function(o){var i=t.getEdgeType(o),s=t.getAnchorsAsArray(o),d=[];if(null!=s){for(var a=0;a<s.length;a+=2)d.push({x:s[a]+e.x,y:s[a+1]+e.y});"bend"===i?n.bendPointPositionsSetterFunction(o,d):"control"===i&&n.controlPointPositionsSetterFunction(o,d)}})),t.initAnchorPoints(n.bendPositionsFunction,n.controlPositionsFunction,o)}(i,o),s}function d(e){var t=e.edge,n=e.location,o=e.oldLoc,i={edge:t=t.move(n)[0],location:o,oldLoc:n};return t.unselect(),i}function a(t){var n=t.oldEdge;(o=e.getElementById(n.data("id")))&&o.length>0&&(n=o);var o,i=t.newEdge;return(o=e.getElementById(i.data("id")))&&o.length>0&&(i=o),n.inside()&&(n=n.remove()[0]),i.removed()&&(i=i.restore()).unselect(),{oldEdge:i,newEdge:n}}}}},t={};return function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(579)})()}));