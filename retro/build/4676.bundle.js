(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4676,8564],{8564:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>T});var a=t(22410),o=t(20686),l=t(67906),r=t(67070),s=t(30742),i=t(66065),c=(t(98669),t(96927));const m=new i.Token("@jupyterlab/running:IRunningSessionManagers");function u(e){var n;const{runningItem:t}=e,a=t.icon(),o=null===(n=t.detail)||void 0===n?void 0:n.call(t),i=(e.translator||r.nullTranslator).load("jupyterlab"),m=e.shutdownLabel||i.__("Shut Down"),u=e.shutdownItemIcon||s.closeIcon;return c.createElement("li",{className:"jp-RunningSessions-item"},c.createElement(a.react,{tag:"span",stylesheet:"runningItem"}),c.createElement("span",{className:"jp-RunningSessions-itemLabel",title:t.labelTitle?t.labelTitle():"",onClick:()=>t.open()},t.label()),o&&c.createElement("span",{className:"jp-RunningSessions-itemDetail"},o),c.createElement(l.ToolbarButtonComponent,{className:"jp-RunningSessions-itemShutdown",icon:u,onClick:()=>t.shutdown(),tooltip:m}))}function d(e){return c.createElement("ul",{className:"jp-RunningSessions-sectionList"},e.runningItems.map(((n,t)=>c.createElement(u,{key:t,runningItem:n,shutdownLabel:e.shutdownLabel,shutdownItemIcon:e.shutdownItemIcon,translator:e.translator}))))}function g(e){return c.createElement(l.UseSignal,{signal:e.manager.runningChanged},(()=>c.createElement(d,{runningItems:e.manager.running(),shutdownLabel:e.shutdownLabel,shutdownAllLabel:e.shutdownAllLabel,shutdownItemIcon:e.manager.shutdownItemIcon,translator:e.translator})))}function b(e){const n=(e.translator||r.nullTranslator).load("jupyterlab"),t=e.manager.shutdownAllLabel||n.__("Shut Down All"),a=`${t}?`,o=e.manager.shutdownAllConfirmationText||`${t} ${e.manager.name}`;function s(){(0,l.showDialog)({title:a,body:o,buttons:[l.Dialog.cancelButton({label:n.__("Cancel")}),l.Dialog.warnButton({label:t})]}).then((n=>{n.button.accept&&e.manager.shutdownAll()}))}return c.createElement("div",{className:"jp-RunningSessions-section"},c.createElement(c.Fragment,null,c.createElement("div",{className:"jp-RunningSessions-sectionHeader jp-stack-panel-header"},c.createElement("h2",null,e.manager.name),c.createElement(l.UseSignal,{signal:e.manager.runningChanged},(()=>{const n=0===e.manager.running().length;return c.createElement("button",{className:`jp-RunningSessions-shutdownAll jp-mod-styled ${n&&"jp-mod-disabled"}`,disabled:n,onClick:s},t)}))),c.createElement("div",{className:"jp-RunningSessions-sectionContainer"},c.createElement(g,{manager:e.manager,shutdownLabel:e.manager.shutdownLabel,shutdownAllLabel:t,translator:e.translator}))))}function w(e){const n=(e.translator||r.nullTranslator).load("jupyterlab");return c.createElement(c.Fragment,null,c.createElement("div",{className:"jp-RunningSessions-header"},c.createElement(l.ToolbarButtonComponent,{tooltip:n.__("Refresh List"),icon:s.refreshIcon,onClick:()=>e.managers.items().forEach((e=>e.refreshRunning()))})),e.managers.items().map((n=>c.createElement(b,{key:n.name,manager:n,translator:e.translator}))))}class h extends l.ReactWidget{constructor(e,n){super(),this.managers=e,this.translator=n||r.nullTranslator,this.addClass("jp-RunningSessions")}render(){return c.createElement(w,{managers:this.managers,translator:this.translator})}}var p=t(41479),I=t(80934),E=t(77031);const T=[{id:"@retrolab/tree-extension:buttons",requires:[o.IFileBrowserFactory],autoStart:!0,activate:(e,n)=>{const{commands:t}=e,o=n.defaultBrowser,l="tree:new-notebook";t.addCommand(l,{label:"New Notebook",icon:I.notebookIcon,execute:()=>t.execute("notebook:create-new")});const r=new a.CommandToolbarButton({commands:t,id:l}),s=new a.CommandToolbarButton({commands:t,id:"filebrowser:create-new-file"});o.toolbar.insertItem(0,"new-notebook",r),o.toolbar.insertItem(1,"new-file",s)}},{id:"@retrolab/tree-extension:new-terminal",requires:[o.IFileBrowserFactory],autoStart:!0,activate:(e,n)=>{const{commands:t}=e,o=n.defaultBrowser,l="tree:new-terminal";t.addCommand(l,{label:"New Terminal",icon:I.terminalIcon,execute:()=>t.execute("terminal:create-new")});const r=new a.CommandToolbarButton({commands:t,id:l});o.toolbar.insertItem(2,"new-terminal",r)}},{id:"@jupyterlab-classic/tree-extension:widget",requires:[o.IFileBrowserFactory,p.ITranslator],optional:[m],autoStart:!0,activate:(e,n,t,a)=>{const o=new E.TabPanel({tabPlacement:"top",tabsMovable:!0});o.addClass("jp-TreePanel");const{defaultBrowser:l}=n;if(l.title.label="Files",o.addWidget(l),o.tabBar.addTab(l.title),a){const e=new h(a,t);e.id="jp-running-sessions",e.title.label="Running",e.title.icon=I.runningIcon,o.addWidget(e),o.tabBar.addTab(e.title)}e.shell.add(o,"main",{rank:100})}}]}}]);
//# sourceMappingURL=4676.bundle.js.map