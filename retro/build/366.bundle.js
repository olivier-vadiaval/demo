(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[366],{95952:(e,s,n)=>{"use strict";n.r(s),n.d(s,{EditMenu:()=>p,FileMenu:()=>h,HelpMenu:()=>c,IMainMenu:()=>f,JupyterLabMenu:()=>d,KernelMenu:()=>M,MainMenu:()=>_,RunMenu:()=>m,SettingsMenu:()=>l,TabsMenu:()=>k,ViewMenu:()=>w});var t,i,r=n(30742),u=n(79028),o=n(77031),a=n(98669);class d{constructor(e,s=!0){this._groups=[],this._isDisposed=!1,this.menu=new o.Menu(e),this._includeSeparators=s}addGroup(e,s){const n={size:e.length,rank:void 0===s?100:s},i=u.ArrayExt.upperBound(this._groups,n,t.itemCmp);let r=0;for(let e=0;e<i;++e)this._groups[e].size>0&&(r+=this._groups[e].size,r+=this._includeSeparators?2:0);const o=[];this._includeSeparators&&o.push(this.menu.insertItem(r++,{type:"separator"}));for(const s of e)o.push(this.menu.insertItem(r++,s));return this._includeSeparators&&o.push(this.menu.insertItem(r++,{type:"separator"})),u.ArrayExt.insert(this._groups,i,n),new a.DisposableDelegate((()=>{o.forEach((e=>this.menu.removeItem(e))),this._groups.splice(i,1)}))}get isDisposed(){return this._isDisposed}dispose(){this._groups.length=0,this._isDisposed=!0,this.menu.dispose()}}!function(e){e.itemCmp=function(e,s){return e.rank-s.rank}}(t||(t={}));class h extends d{constructor(e){super(e),this.quitEntry=!1,this.newMenu=new d(e,!1),this.closeAndCleaners=new Set,this.consoleCreators=new Set}dispose(){this.newMenu.dispose(),this.consoleCreators.clear(),super.dispose()}}class p extends d{constructor(e){super(e),this.undoers=new Set,this.clearers=new Set,this.goToLiners=new Set}dispose(){this.undoers.clear(),this.clearers.clear(),super.dispose()}}class c extends d{constructor(e){super(e),this.kernelUsers=new Set}}class M extends d{constructor(e){super(e),this.kernelUsers=new Set}dispose(){this.kernelUsers.clear(),super.dispose()}}class m extends d{constructor(e){super(e),this.codeRunners=new Set}dispose(){this.codeRunners.clear(),super.dispose()}}class l extends d{constructor(e){super(e)}}class w extends d{constructor(e){super(e),this.editorViewers=new Set}dispose(){this.editorViewers.clear(),super.dispose()}}class k extends d{constructor(e){super(e)}}class _ extends o.MenuBar{constructor(e){super(),this._items=[],this.editMenu=new p({commands:e}),this.fileMenu=new h({commands:e}),this.helpMenu=new c({commands:e}),this.kernelMenu=new M({commands:e}),this.runMenu=new m({commands:e}),this.settingsMenu=new l({commands:e}),this.viewMenu=new w({commands:e}),this.tabsMenu=new k({commands:e}),this.addMenu(this.fileMenu.menu,{rank:1}),this.addMenu(this.editMenu.menu,{rank:2}),this.addMenu(this.viewMenu.menu,{rank:3}),this.addMenu(this.runMenu.menu,{rank:4}),this.addMenu(this.kernelMenu.menu,{rank:5}),this.addMenu(this.tabsMenu.menu,{rank:500}),this.addMenu(this.settingsMenu.menu,{rank:999}),this.addMenu(this.helpMenu.menu,{rank:1e3})}addMenu(e,s={}){if(r.MenuSvg.overrideDefaultRenderer(e),u.ArrayExt.firstIndexOf(this.menus,e)>-1)return;const n={menu:e,rank:"rank"in s?s.rank:100},t=u.ArrayExt.upperBound(this._items,n,i.itemCmp);e.disposed.connect(this._onMenuDisposed,this),u.ArrayExt.insert(this._items,t,n),this.insertMenu(t,e)}dispose(){this.editMenu.dispose(),this.fileMenu.dispose(),this.helpMenu.dispose(),this.kernelMenu.dispose(),this.runMenu.dispose(),this.settingsMenu.dispose(),this.viewMenu.dispose(),this.tabsMenu.dispose(),super.dispose()}_onMenuDisposed(e){this.removeMenu(e);const s=u.ArrayExt.findFirstIndex(this._items,(s=>s.menu===e));-1!==s&&u.ArrayExt.removeAt(this._items,s)}}!function(e){e.itemCmp=function(e,s){return e.rank-s.rank}}(i||(i={}));const f=new(n(66065).Token)("@jupyterlab/mainmenu:IMainMenu")}}]);
//# sourceMappingURL=366.bundle.js.map