(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6741],{76741:(t,e,s)=>{"use strict";s.d(e,{QM:()=>i,e4:()=>d});var n=s(58137),a=s(66065),o=s(90355),r=(s(2130),s(6493));const c=t=>JSON.parse(JSON.stringify(t));class i extends class{constructor(){this.isDisposed=!1,this.ydoc=new o.QW,this.source=this.ydoc.getText("source"),this.undoManager=new o.H6([this.source],{trackedOrigins:new Set([this])}),this.awareness=new r.GL(this.ydoc),this._changed=new n.Signal(this)}transact(t,e=!0){this.ydoc.transact(t,e?this:null)}dispose(){this.isDisposed=!0,this.ydoc.destroy()}canUndo(){return this.undoManager.undoStack.length>0}canRedo(){return this.undoManager.redoStack.length>0}undo(){this.undoManager.undo()}redo(){this.undoManager.redo()}clearUndoHistory(){this.undoManager.clear()}get changed(){return this._changed}}{constructor(){super(),this._modelObserver=t=>{const e={};e.sourceChange=t.changes.delta,this._changed.emit(e)},this.ysource=this.ydoc.getText("source"),this.ysource.observe(this._modelObserver)}static create(){return new i}getSource(){return this.ysource.toString()}setSource(t){this.transact((()=>{const e=this.ysource;e.delete(0,e.length),e.insert(0,t)}))}updateSource(t,e,s=""){this.transact((()=>{const n=this.ysource;n.insert(t,s),n.delete(t+s.length,e-t)}))}}const d=(t,e)=>{switch(t){case"markdown":return g.createStandalone(e);case"code":return l.createStandalone(e);default:return h.createStandalone(e)}};class u{constructor(t){this._notebook=null,this.isStandalone=!1,this._modelObserver=t=>{const e={},s=t.find((t=>t.target===this.ymodel.get("source")));s&&(e.sourceChange=s.changes.delta);const n=t.find((t=>t.target===this.ymodel.get("outputs")));n&&(e.outputsChange=n.changes.delta);const a=t.find((t=>t.target===this.ymodel));if(a&&a.keysChanged.has("metadata")){const t=a.changes.keys.get("metadata");e.metadataChange={oldValue:(null==t?void 0:t.oldValue)?t.oldValue:void 0,newValue:this.getMetadata()}}if(a&&a.keysChanged.has("execution_count")){const t=a.changes.keys.get("execution_count");e.executionCountChange={oldValue:t.oldValue,newValue:this.ymodel.get("execution_count")}}const o=this.ymodel.get("source");a&&a.keysChanged.has("source")&&(e.sourceChange=[{delete:this._prevSourceLength},{insert:o.toString()}]),this._prevSourceLength=o.length,this._changed.emit(e)},this.isDisposed=!1,this._undoManager=null,this._changed=new n.Signal(this),this.ymodel=t;const e=t.get("source");this._prevSourceLength=e?e.length:0,this.ymodel.observeDeep(this._modelObserver)}get ysource(){return this.ymodel.get("source")}get awareness(){var t;return(null===(t=this.notebook)||void 0===t?void 0:t.awareness)||null}transact(t,e=!0){this.notebook&&e?this.notebook.transact(t):this.ymodel.doc.transact(t,this)}get undoManager(){return this.notebook?this.notebook.undoManager:this._undoManager}undo(){var t;null===(t=this.undoManager)||void 0===t||t.undo()}redo(){var t;null===(t=this.undoManager)||void 0===t||t.redo()}canUndo(){return!!this.undoManager&&this.undoManager.undoStack.length>0}canRedo(){return!!this.undoManager&&this.undoManager.redoStack.length>0}clearUndoHistory(){var t;null===(t=this.undoManager)||void 0===t||t.clear()}get notebook(){return this._notebook}static create(t=a.UUID.uuid4()){const e=new o.D5,s=new o.xv;return e.set("source",s),e.set("metadata",{}),e.set("cell_type",this.prototype.cell_type),e.set("id",t),new this(e)}static createStandalone(t){const e=this.create(t);return e.isStandalone=!0,(new o.QW).getArray().insert(0,[e.ymodel]),e._undoManager=new o.H6([e.ymodel],{trackedOrigins:new Set([e])}),e}clone(){const t=new o.D5,e=new o.xv(this.getSource());return t.set("source",e),t.set("metadata",this.getMetadata()),t.set("cell_type",this.cell_type),t.set("id",this.getId()),new(0,this.constructor)(t)}get changed(){return this._changed}dispose(){this.ymodel.unobserveDeep(this._modelObserver)}getAttachments(){return this.ymodel.get("attachments")}setAttachments(t){this.transact((()=>{null==t?this.ymodel.set("attachments",t):this.ymodel.delete("attachments")}))}getId(){return this.ymodel.get("id")}getSource(){return this.ymodel.get("source").toString()}setSource(t){const e=this.ymodel.get("source");this.transact((()=>{e.delete(0,e.length),e.insert(0,t)}))}updateSource(t,e,s=""){this.transact((()=>{const n=this.ysource;n.insert(t,s),n.delete(t+s.length,e-t)}))}get cell_type(){throw new Error("A YBaseCell must not be constructed")}getMetadata(){return c(this.ymodel.get("metadata"))}setMetadata(t){this.transact((()=>{this.ymodel.set("metadata",c(t))}))}toJSON(){return{id:this.getId(),cell_type:this.cell_type,source:this.getSource(),metadata:this.getMetadata()}}}class l extends u{get cell_type(){return"code"}get execution_count(){return this.ymodel.get("execution_count")}set execution_count(t){this.transact((()=>{this.ymodel.set("execution_count",t)}))}getOutputs(){return c(this.ymodel.get("outputs").toArray())}setOutputs(t){const e=this.ymodel.get("outputs");this.transact((()=>{e.delete(0,e.length),e.insert(0,t)}))}updateOutputs(t,e,s=[]){const n=this.ymodel.get("outputs"),a=e<n.length?e-t:n.length-t;this.transact((()=>{n.delete(t,a),n.insert(t,s)}))}static create(t){const e=super.create(t);return e.ymodel.set("execution_count",0),e.ymodel.set("outputs",new o.mJ),e}static createStandalone(t){const e=super.createStandalone(t);return e.ymodel.set("execution_count",null),e.ymodel.set("outputs",new o.mJ),e}clone(){const t=super.clone(),e=new o.mJ;return e.insert(0,this.getOutputs()),t.ymodel.set("execution_count",this.execution_count),t.ymodel.set("outputs",e),t}toJSON(){return{id:this.getId(),cell_type:"code",source:this.getSource(),metadata:this.getMetadata(),outputs:this.getOutputs(),execution_count:this.execution_count}}}class h extends u{static create(t){return super.create(t)}static createStandalone(t){return super.createStandalone(t)}get cell_type(){return"raw"}toJSON(){return{id:this.getId(),cell_type:"raw",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}class g extends u{static create(t){return super.create(t)}static createStandalone(t){return super.createStandalone(t)}get cell_type(){return"markdown"}toJSON(){return{id:this.getId(),cell_type:"markdown",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}},6493:(t,e,s)=>{"use strict";s.d(e,{GL:()=>d,Ag:()=>u,xq:()=>l,oy:()=>h});var n=s(23406),a=s(49e3),o=s(40870),r=s(21332),c=s(75736),i=s(91985);class d extends c.y{constructor(t){super(),this.doc=t,this.clientID=t.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval((()=>{const t=o.ZG();null!==this.getLocalState()&&15e3<=t-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const e=[];this.meta.forEach(((s,n)=>{n!==this.clientID&&3e4<=t-s.lastUpdated&&this.states.has(n)&&e.push(n)})),e.length>0&&u(this,e,"timeout")}),r.GW(3e3)),t.on("destroy",(()=>{this.destroy()})),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(t){const e=this.clientID,s=this.meta.get(e),n=void 0===s?0:s.clock+1,a=this.states.get(e);null===t?this.states.delete(e):this.states.set(e,t),this.meta.set(e,{clock:n,lastUpdated:o.ZG()});const r=[],c=[],d=[],u=[];null===t?u.push(e):null==a?null!=t&&r.push(e):(c.push(e),i.Hi(a,t)||d.push(e)),(r.length>0||d.length>0||u.length>0)&&this.emit("change",[{added:r,updated:d,removed:u},"local"]),this.emit("update",[{added:r,updated:c,removed:u},"local"])}setLocalStateField(t,e){const s=this.getLocalState();null!==s&&this.setLocalState({...s,[t]:e})}getStates(){return this.states}}const u=(t,e,s)=>{const n=[];for(let s=0;s<e.length;s++){const a=e[s];if(t.states.has(a)){if(t.states.delete(a),a===t.clientID){const e=t.meta.get(a);t.meta.set(a,{clock:e.clock+1,lastUpdated:o.ZG()})}n.push(a)}}n.length>0&&(t.emit("change",[{added:[],updated:[],removed:n},s]),t.emit("update",[{added:[],updated:[],removed:n},s]))},l=(t,e,s=t.states)=>{const a=e.length,o=n.Mf();n.uE(o,a);for(let r=0;r<a;r++){const a=e[r],c=s.get(a)||null,i=t.meta.get(a).clock;n.uE(o,a),n.uE(o,i),n.uw(o,JSON.stringify(c))}return n._f(o)},h=(t,e,s)=>{const n=a.l1(e),r=o.ZG(),c=[],d=[],u=[],l=[],h=a.yg(n);for(let e=0;e<h;e++){const e=a.yg(n);let s=a.yg(n);const o=JSON.parse(a.kf(n)),h=t.meta.get(e),g=t.states.get(e),m=void 0===h?0:h.clock;(m<s||m===s&&null===o&&t.states.has(e))&&(null===o?e===t.clientID&&null!=t.getLocalState()?s++:t.states.delete(e):t.states.set(e,o),t.meta.set(e,{clock:s,lastUpdated:r}),void 0===h&&null!==o?c.push(e):void 0!==h&&null===o?l.push(e):null!==o&&(i.Hi(o,g)||u.push(e),d.push(e)))}(c.length>0||u.length>0||l.length>0)&&t.emit("change",[{added:c,updated:u,removed:l},s]),(c.length>0||d.length>0||l.length>0)&&t.emit("update",[{added:c,updated:d,removed:l},s])}}}]);
//# sourceMappingURL=6741.bundle.js.map