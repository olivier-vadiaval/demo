(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5018,9458],{65018:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r,o=n(84571),a=n(67906),d=n(17741),c=n(46287),i=n(80669),s=n(98838),m=n(67070);!function(e){e.markdownPreview="markdownviewer:open",e.markdownEditor="markdownviewer:edit"}(r||(r={}));const w="Markdown Preview",p={activate:function(e,t,n,o,i){const m=n.load("jupyterlab"),{commands:u,docRegistry:l}=e;t.addFactory(c.markdownRendererFactory);const k=new a.WidgetTracker({namespace:"markdownviewer-widget"});let g=Object.assign({},d.MarkdownViewer.defaultConfig);function h(e){Object.keys(g).forEach((t=>{var n;e.setOption(t,null!==(n=g[t])&&void 0!==n?n:null)}))}if(i){const e=e=>{g=e.composite,k.forEach((e=>{h(e.content)}))};i.load(p.id).then((t=>{t.changed.connect((()=>{e(t)})),e(t)})).catch((e=>{console.error(e.message)}))}const f=new d.MarkdownViewerFactory({rendermime:t,name:w,primaryFileType:l.getFileType("markdown"),fileTypes:["markdown"],defaultRendered:["markdown"]});return f.widgetCreated.connect(((e,t)=>{t.context.pathChanged.connect((()=>{k.save(t)})),h(t.content),k.add(t)})),l.addWidgetFactory(f),o&&o.restore(k,{command:"docmanager:open",args:e=>({path:e.context.path,factory:w}),name:e=>e.context.path}),u.addCommand(r.markdownPreview,{label:m.__("Markdown Preview"),execute:e=>{const t=e.path;if("string"==typeof t)return u.execute("docmanager:open",{path:t,factory:w,options:e.options})}}),u.addCommand(r.markdownEditor,{execute:()=>{const e=k.currentWidget;if(!e)return;const t=e.context.path;return u.execute("docmanager:open",{path:t,factory:"Editor",options:{mode:"split-right"}})},isVisible:()=>{const e=k.currentWidget;return e&&".md"===s.PathExt.extname(e.context.path)||!1},label:m.__("Show Markdown Editor")}),e.contextMenu.addItem({command:r.markdownEditor,selector:".jp-RenderedMarkdown"}),k},id:"@jupyterlab/markdownviewer-extension:plugin",provides:d.IMarkdownViewerTracker,requires:[c.IRenderMimeRegistry,m.ITranslator],optional:[o.ILayoutRestorer,i.ISettingRegistry],autoStart:!0},u=p}}]);
//# sourceMappingURL=5018.bundle.js.map