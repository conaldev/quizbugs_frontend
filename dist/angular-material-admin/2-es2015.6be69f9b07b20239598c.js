(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+0xr":function(t,e,s){"use strict";s.d(e,"a",(function(){return Dt})),s.d(e,"b",(function(){return ht})),s.d(e,"c",(function(){return pt})),s.d(e,"d",(function(){return gt})),s.d(e,"e",(function(){return _t})),s.d(e,"f",(function(){return Tt})),s.d(e,"g",(function(){return xt})),s.d(e,"h",(function(){return yt})),s.d(e,"i",(function(){return ut})),s.d(e,"j",(function(){return Nt})),s.d(e,"k",(function(){return kt})),s.d(e,"l",(function(){return At})),s.d(e,"m",(function(){return Ot})),s.d(e,"n",(function(){return ct})),s.d(e,"o",(function(){return jt})),s.d(e,"p",(function(){return Ht}));var r=s("8LU1"),o=s("0EQZ"),n=s("fXoL"),i=s("cH1L"),a=s("nLfN"),c=s("ofXK"),l=s("XNiG"),h=s("Cfvw"),d=s("2Vo4"),u=s("7+OI"),f=s("LRne"),_=s("1G5W"),m=s("IzEk"),p=s("vxfF");const w=[[["caption"]],[["colgroup"],["col"]]],y=["caption","colgroup, col"];function b(t){return class extends t{constructor(...t){super(...t),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(t){const e=this._sticky;this._sticky=Object(r.c)(t),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const t=this._hasStickyChanged;return this._hasStickyChanged=!1,t}resetStickyChanged(){this._hasStickyChanged=!1}}}const g=new n.r("CDK_TABLE");let R=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkCellDef",""]]}),t})(),D=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),C=(()=>{class t{constructor(t){this.template=t}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class k{}const S=b(k);let x=(()=>{class t extends S{constructor(t){super(),this._table=t,this._stickyEnd=!1}get name(){return this._name}set name(t){this._setNameInput(t)}get stickyEnd(){return this._stickyEnd}set stickyEnd(t){const e=this._stickyEnd;this._stickyEnd=Object(r.c)(t),this._hasStickyChanged=e!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=["cdk-column-"+this.cssClassFriendlyName]}_setNameInput(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(g,8))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,e,s){var r;1&t&&(n.Eb(s,R,!0),n.Eb(s,D,!0),n.Eb(s,C,!0)),2&t&&(n.oc(r=n.ac())&&(e.cell=r.first),n.oc(r=n.ac())&&(e.headerCell=r.first),n.oc(r=n.ac())&&(e.footerCell=r.first))},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[n.zb([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),n.xb]}),t})();class v{constructor(t,e){const s=e.nativeElement.classList;for(const r of t._columnCssClassName)s.add(r)}}let O=(()=>{class t extends v{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(x),n.Lb(n.l))},t.\u0275dir=n.Gb({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[n.xb]}),t})(),E=(()=>{class t extends v{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(x),n.Lb(n.l))},t.\u0275dir=n.Gb({type:t,selectors:[["cdk-footer-cell"],["td","cdk-footer-cell",""]],hostAttrs:["role","gridcell",1,"cdk-footer-cell"],features:[n.xb]}),t})(),N=(()=>{class t extends v{constructor(t,e){super(t,e)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(x),n.Lb(n.l))},t.\u0275dir=n.Gb({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:["role","gridcell",1,"cdk-cell"],features:[n.xb]}),t})();class L{constructor(){this.tasks=[],this.endTasks=[]}}let T=(()=>{class t{constructor(t){this._ngZone=t,this._currentSchedule=null,this._destroyed=new l.a}schedule(t){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(t)}scheduleEnd(t){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(t)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new L,this._getScheduleObservable().pipe(Object(_.a)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const t=this._currentSchedule;this._currentSchedule=new L;for(const e of t.tasks)e();for(const e of t.endTasks)e()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?Object(h.a)(Promise.resolve(void 0)):this._ngZone.onStable.pipe(Object(m.a)(1))}}return t.\u0275fac=function(e){return new(e||t)(n.Vb(n.A))},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac}),t})(),F=(()=>{class t{constructor(t,e){this.template=t,this._differs=e}ngOnChanges(t){if(!this._columnsDiffer){const e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(t){return this instanceof H?t.headerCell.template:this instanceof M?t.footerCell.template:t.cell.template}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M),n.Lb(n.t))},t.\u0275dir=n.Gb({type:t,features:[n.yb]}),t})();class A extends F{}const I=b(A);let H=(()=>{class t extends I{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M),n.Lb(n.t),n.Lb(g,8))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[n.xb,n.yb]}),t})();class j extends F{}const G=b(j);let M=(()=>{class t extends G{constructor(t,e,s){super(t,e),this._table=s}ngOnChanges(t){super.ngOnChanges(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M),n.Lb(n.t),n.Lb(g,8))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[n.xb,n.yb]}),t})(),z=(()=>{class t extends F{constructor(t,e,s){super(t,e),this._table=s}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M),n.Lb(n.t),n.Lb(g,8))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[n.xb]}),t})(),B=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.Q))},t.\u0275dir=n.Gb({type:t,selectors:[["","cdkCellOutlet",""]]}),t.mostRecentCellOutlet=null,t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Nb(0,0)},directives:[B],encapsulation:2}),t})(),V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["cdk-footer-row"],["tr","cdk-footer-row",""]],hostAttrs:["role","row",1,"cdk-footer-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Nb(0,0)},directives:[B],encapsulation:2}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Nb(0,0)},directives:[B],encapsulation:2}),t})(),W=(()=>{class t{constructor(t){this.templateRef=t}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.M))},t.\u0275dir=n.Gb({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}),t})();const Z=["top","bottom","left","right"];class U{constructor(t,e,s,r,o=!0,n=!0){this._isNativeHtmlTable=t,this._stickCellCss=e,this.direction=s,this._coalescedStyleScheduler=r,this._isBrowser=o,this._needsPositionStickyOnElement=n}clearStickyPositioning(t,e){const s=[];for(const r of t)if(r.nodeType===r.ELEMENT_NODE){s.push(r);for(let t=0;t<r.children.length;t++)s.push(r.children[t])}this._coalescedStyleScheduler.schedule(()=>{for(const t of s)this._removeStickyStyle(t,e)})}updateStickyColumns(t,e,s){if(!t.length||!this._isBrowser||!e.some(t=>t)&&!s.some(t=>t))return;const r=t[0],o=r.children.length,n=this._getCellWidths(r),i=this._getStickyStartColumnPositions(n,e),a=this._getStickyEndColumnPositions(n,s);this._coalescedStyleScheduler.schedule(()=>{const r="rtl"===this.direction,n=r?"right":"left",c=r?"left":"right";for(const l of t)for(let t=0;t<o;t++){const r=l.children[t];e[t]&&this._addStickyStyle(r,n,i[t]),s[t]&&this._addStickyStyle(r,c,a[t])}})}stickRows(t,e,s){if(!this._isBrowser)return;const r="bottom"===s?t.slice().reverse():t,o="bottom"===s?e.slice().reverse():e,n=[],i=[];for(let a=0,c=0;a<r.length;a++){if(n[a]=c,!o[a])continue;const t=r[a];i[a]=this._isNativeHtmlTable?Array.from(t.children):[t],a!==r.length-1&&(c+=t.getBoundingClientRect().height)}this._coalescedStyleScheduler.schedule(()=>{for(let t=0;t<r.length;t++){if(!o[t])continue;const e=n[t];for(const r of i[t])this._addStickyStyle(r,s,e)}})}updateStickyFooterContainer(t,e){if(!this._isNativeHtmlTable)return;const s=t.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(t=>!t)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0)})}_removeStickyStyle(t,e){for(const s of e)t.style[s]="";Z.some(s=>-1===e.indexOf(s)&&t.style[s])?t.style.zIndex=this._getCalculatedZIndex(t):(t.style.zIndex="",this._needsPositionStickyOnElement&&(t.style.position=""),t.classList.remove(this._stickCellCss))}_addStickyStyle(t,e,s){t.classList.add(this._stickCellCss),t.style[e]=s+"px",t.style.zIndex=this._getCalculatedZIndex(t),this._needsPositionStickyOnElement&&(t.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(t){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const r of Z)t.style[r]&&(s+=e[r]);return s?""+s:""}_getCellWidths(t){const e=[],s=t.children;for(let r=0;r<s.length;r++)e.push(s[r].getBoundingClientRect().width);return e}_getStickyStartColumnPositions(t,e){const s=[];let r=0;for(let o=0;o<t.length;o++)e[o]&&(s[o]=r,r+=t[o]);return s}_getStickyEndColumnPositions(t,e){const s=[];let r=0;for(let o=t.length;o>0;o--)e[o]&&(s[o]=r,r+=t[o]);return s}}let J=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.Q),n.Lb(n.l))},t.\u0275dir=n.Gb({type:t,selectors:[["","rowOutlet",""]]}),t})(),X=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.Q),n.Lb(n.l))},t.\u0275dir=n.Gb({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),q=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.Q),n.Lb(n.l))},t.\u0275dir=n.Gb({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),K=(()=>{class t{constructor(t,e){this.viewContainer=t,this.elementRef=e}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.Q),n.Lb(n.l))},t.\u0275dir=n.Gb({type:t,selectors:[["","noDataRowOutlet",""]]}),t})(),Y=(()=>{class t{constructor(t,e,s,r,o,n,i,a,c){this._differs=t,this._changeDetectorRef=e,this._coalescedStyleScheduler=s,this._elementRef=r,this._dir=n,this._platform=a,this._viewRepeater=c,this._onDestroy=new l.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this.viewChange=new d.a({start:0,end:Number.MAX_VALUE}),o||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=i,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(t){this._trackByFn=t}get dataSource(){return this._dataSource}set dataSource(t){this._dataSource!==t&&this._switchDataSource(t)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(t){this._multiTemplateDataRows=Object(r.c)(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((t,e)=>this.trackBy?this.trackBy(e.dataIndex,e.data):e)}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():t&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._noDataRowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(o.h)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const t=this._dataDiffer.diff(this._renderRows);if(!t)return void this._updateNoDataRow();const e=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(t,e,(t,e,s)=>this._getEmbeddedViewArgs(t.item,s),t=>t.item.data,t=>{1===t.operation&&t.context&&this._renderCellTemplateForItem(t.record.item.rowDef,t.context)}),this._updateRowIndexContext(),t.forEachIdentityChange(t=>{e.get(t.currentIndex).context.$implicit=t.item.data}),this._updateNoDataRow(),this.updateStickyColumnStyles()}addColumnDef(t){this._customColumnDefs.add(t)}removeColumnDef(t){this._customColumnDefs.delete(t)}addRowDef(t){this._customRowDefs.add(t)}removeRowDef(t){this._customRowDefs.delete(t)}addHeaderRowDef(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}removeHeaderRowDef(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}addFooterRowDef(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}removeFooterRowDef(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}updateStickyHeaderRowStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");const s=this._headerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,s,"top"),this._headerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyFooterRowStyles(){const t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");const s=this._footerRowDefs.map(t=>t.sticky);this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,s,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,s),this._footerRowDefs.forEach(t=>t.resetStickyChanged())}updateStickyColumnStyles(){const t=this._getRenderedRows(this._headerRowOutlet),e=this._getRenderedRows(this._rowOutlet),s=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([...t,...e,...s],["left","right"]),t.forEach((t,e)=>{this._addStickyColumnStyles([t],this._headerRowDefs[e])}),this._rowDefs.forEach(t=>{const s=[];for(let r=0;r<e.length;r++)this._renderRows[r].rowDef===t&&s.push(e[r]);this._addStickyColumnStyles(s,t)}),s.forEach((t,e)=>{this._addStickyColumnStyles([t],this._footerRowDefs[e])}),Array.from(this._columnDefsByName.values()).forEach(t=>t.resetStickyChanged())}_getAllRenderRows(){const t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=0;s<this._data.length;s++){let r=this._data[s];const o=this._getRenderRowsForData(r,s,e.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let e=0;e<o.length;e++){let s=o[e];const r=this._cachedRenderRowsMap.get(s.data);r.has(s.rowDef)?r.get(s.rowDef).push(s):r.set(s.rowDef,[s]),t.push(s)}}return t}_getRenderRowsForData(t,e,s){return this._getRowDefs(t,e).map(r=>{const o=s&&s.has(r)?s.get(r):[];if(o.length){const t=o.shift();return t.dataIndex=e,t}return{data:t,rowDef:r,dataIndex:e}})}_cacheColumnDefs(){this._columnDefsByName.clear(),$(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=$(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=$(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=$(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const t=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=t[0]}_renderUpdatedColumns(){const t=(t,e)=>t||!!e.getColumnsDiff(),e=this._rowDefs.reduce(t,!1);e&&this._forceRenderDataRows();const s=this._headerRowDefs.reduce(t,!1);s&&this._forceRenderHeaderRows();const r=this._footerRowDefs.reduce(t,!1);return r&&this._forceRenderFooterRows(),e||s||r}_switchDataSource(t){this._data=[],Object(o.h)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}_observeRenderChanges(){if(!this.dataSource)return;let t;Object(o.h)(this.dataSource)?t=this.dataSource.connect(this):Object(u.a)(this.dataSource)?t=this.dataSource:Array.isArray(this.dataSource)&&(t=Object(f.a)(this.dataSource)),this._renderChangeSubscription=t.pipe(Object(_.a)(this._onDestroy)).subscribe(t=>{this._data=t||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((t,e)=>this._renderRow(this._headerRowOutlet,t,e)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((t,e)=>this._renderRow(this._footerRowOutlet,t,e)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(t,e){const s=Array.from(e.columns||[]).map(t=>this._columnDefsByName.get(t)),r=s.map(t=>t.sticky),o=s.map(t=>t.stickyEnd);this._stickyStyler.updateStickyColumns(t,r,o)}_getRenderedRows(t){const e=[];for(let s=0;s<t.viewContainer.length;s++){const r=t.viewContainer.get(s);e.push(r.rootNodes[0])}return e}_getRowDefs(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];let s=[];if(this.multiTemplateDataRows)s=this._rowDefs.filter(s=>!s.when||s.when(e,t));else{let r=this._rowDefs.find(s=>s.when&&s.when(e,t))||this._defaultRowDef;r&&s.push(r)}return s}_getEmbeddedViewArgs(t,e){return{templateRef:t.rowDef.template,context:{$implicit:t.data},index:e}}_renderRow(t,e,s,r={}){const o=t.viewContainer.createEmbeddedView(e.template,r,s);return this._renderCellTemplateForItem(e,r),o}_renderCellTemplateForItem(t,e){for(let s of this._getCellTemplates(t))B.mostRecentCellOutlet&&B.mostRecentCellOutlet._viewContainer.createEmbeddedView(s,e);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const t=this._rowOutlet.viewContainer;for(let e=0,s=t.length;e<s;e++){const r=t.get(e).context;r.count=s,r.first=0===e,r.last=e===s-1,r.even=e%2==0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[e].dataIndex,r.renderIndex=e):r.index=this._renderRows[e].dataIndex}}_getCellTemplates(t){return t&&t.columns?Array.from(t.columns,e=>{const s=this._columnDefsByName.get(e);return t.extractCellTemplate(s)}):[]}_applyNativeTableSections(){const t=this._document.createDocumentFragment(),e=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const s of e){const e=this._document.createElement(s.tag);e.setAttribute("role","rowgroup");for(const t of s.outlets)e.appendChild(t.elementRef.nativeElement);t.appendChild(e)}this._elementRef.nativeElement.appendChild(t)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const t=(t,e)=>t||e.hasStickyChanged();this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()}_setupStickyStyler(){this._stickyStyler=new U(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement),(this._dir?this._dir.change:Object(f.a)()).pipe(Object(_.a)(this._onDestroy)).subscribe(t=>{this._stickyStyler.direction=t,this.updateStickyColumnStyles()})}_getOwnDefs(t){return t.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){if(this._noDataRow){const t=0===this._rowOutlet.viewContainer.length;if(t!==this._isShowingNoDataRow){const e=this._noDataRowOutlet.viewContainer;t?e.createEmbeddedView(this._noDataRow.templateRef):e.clear(),this._isShowingNoDataRow=t}}}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(n.t),n.Lb(n.h),n.Lb(T),n.Lb(n.l),n.Wb("role"),n.Lb(i.b,8),n.Lb(c.d),n.Lb(a.a),n.Lb(o.g,8))},t.\u0275cmp=n.Fb({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,e,s){var r;1&t&&(n.Eb(s,W,!0),n.Eb(s,x,!0),n.Eb(s,z,!0),n.Eb(s,H,!0),n.Eb(s,M,!0)),2&t&&(n.oc(r=n.ac())&&(e._noDataRow=r.first),n.oc(r=n.ac())&&(e._contentColumnDefs=r),n.oc(r=n.ac())&&(e._contentRowDefs=r),n.oc(r=n.ac())&&(e._contentHeaderRowDefs=r),n.oc(r=n.ac())&&(e._contentFooterRowDefs=r))},viewQuery:function(t,e){var s;1&t&&(n.vc(J,!0),n.vc(X,!0),n.vc(q,!0),n.vc(K,!0)),2&t&&(n.oc(s=n.ac())&&(e._rowOutlet=s.first),n.oc(s=n.ac())&&(e._headerRowOutlet=s.first),n.oc(s=n.ac())&&(e._footerRowOutlet=s.first),n.oc(s=n.ac())&&(e._noDataRowOutlet=s.first))},hostAttrs:[1,"cdk-table"],inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows"},exportAs:["cdkTable"],features:[n.zb([{provide:g,useExisting:t},{provide:o.g,useClass:o.e},T])],ngContentSelectors:y,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(n.ic(w),n.hc(0),n.hc(1,1),n.Nb(2,0),n.Nb(3,1),n.Nb(4,2),n.Nb(5,3))},directives:[X,J,K,q],encapsulation:2}),t})();function $(t,e){return t.concat(Array.from(e))}let tt=(()=>{class t{}return t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({factory:function(e){return new(e||t)},imports:[[p.d]]}),t})();var et=s("FKr1"),st=s("quSY"),rt=s("VRyK"),ot=s("itXk"),nt=s("lJxs");const it=[[["caption"]],[["colgroup"],["col"]]],at=["caption","colgroup, col"];let ct=(()=>{class t extends Y{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return t.\u0275fac=function(e){return lt(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],exportAs:["matTable"],features:[n.zb([{provide:o.g,useClass:o.e},{provide:Y,useExisting:t},{provide:g,useExisting:t},T]),n.xb],ngContentSelectors:at,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(n.ic(it),n.hc(0),n.hc(1,1),n.Nb(2,0),n.Nb(3,1),n.Nb(4,2),n.Nb(5,3))},directives:[X,J,K,q],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky;position:sticky}\n'],encapsulation:2}),t})();const lt=n.Tb(ct);let ht=(()=>{class t extends R{}return t.\u0275fac=function(e){return dt(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","matCellDef",""]],features:[n.zb([{provide:R,useExisting:t}]),n.xb]}),t})();const dt=n.Tb(ht);let ut=(()=>{class t extends D{}return t.\u0275fac=function(e){return ft(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","matHeaderCellDef",""]],features:[n.zb([{provide:D,useExisting:t}]),n.xb]}),t})();const ft=n.Tb(ut);let _t=(()=>{class t extends C{}return t.\u0275fac=function(e){return mt(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","matFooterCellDef",""]],features:[n.zb([{provide:C,useExisting:t}]),n.xb]}),t})();const mt=n.Tb(_t);let pt=(()=>{class t extends x{get name(){return this._name}set name(t){this._setNameInput(t)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push("mat-column-"+this.cssClassFriendlyName)}}return t.\u0275fac=function(e){return wt(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[n.zb([{provide:x,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),n.xb]}),t})();const wt=n.Tb(pt);let yt=(()=>{class t extends O{}return t.\u0275fac=function(e){return bt(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[n.xb]}),t})();const bt=n.Tb(yt);let gt=(()=>{class t extends E{}return t.\u0275fac=function(e){return Rt(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-footer-cell"],["td","mat-footer-cell",""]],hostAttrs:["role","gridcell",1,"mat-footer-cell"],features:[n.xb]}),t})();const Rt=n.Tb(gt);let Dt=(()=>{class t extends N{}return t.\u0275fac=function(e){return Ct(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[n.xb]}),t})();const Ct=n.Tb(Dt);let kt=(()=>{class t extends H{}return t.\u0275fac=function(e){return St(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[n.zb([{provide:H,useExisting:t}]),n.xb]}),t})();const St=n.Tb(kt);let xt=(()=>{class t extends M{}return t.\u0275fac=function(e){return vt(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","matFooterRowDef",""]],inputs:{columns:["matFooterRowDef","columns"],sticky:["matFooterRowDefSticky","sticky"]},features:[n.zb([{provide:M,useExisting:t}]),n.xb]}),t})();const vt=n.Tb(xt);let Ot=(()=>{class t extends z{}return t.\u0275fac=function(e){return Et(e||t)},t.\u0275dir=n.Gb({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[n.zb([{provide:z,useExisting:t}]),n.xb]}),t})();const Et=n.Tb(Ot);let Nt=(()=>{class t extends P{}return t.\u0275fac=function(e){return Lt(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[n.zb([{provide:P,useExisting:t}]),n.xb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Nb(0,0)},directives:[B],encapsulation:2}),t})();const Lt=n.Tb(Nt);let Tt=(()=>{class t extends V{}return t.\u0275fac=function(e){return Ft(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-footer-row"],exportAs:["matFooterRow"],features:[n.zb([{provide:V,useExisting:t}]),n.xb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Nb(0,0)},directives:[B],encapsulation:2}),t})();const Ft=n.Tb(Tt);let At=(()=>{class t extends Q{}return t.\u0275fac=function(e){return It(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[n.zb([{provide:Q,useExisting:t}]),n.xb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&n.Nb(0,0)},directives:[B],encapsulation:2}),t})();const It=n.Tb(At);let Ht=(()=>{class t{}return t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({factory:function(e){return new(e||t)},imports:[[tt,et.h],et.h]}),t})();class jt extends o.b{constructor(t=[]){super(),this._renderData=new d.a([]),this._filter=new d.a(""),this._internalPageChanges=new l.a,this._renderChangesSubscription=st.a.EMPTY,this.sortingDataAccessor=(t,e)=>{const s=t[e];if(Object(r.a)(s)){const t=Number(s);return t<9007199254740991?t:s}return s},this.sortData=(t,e)=>{const s=e.active,r=e.direction;return s&&""!=r?t.sort((t,e)=>{let o=this.sortingDataAccessor(t,s),n=this.sortingDataAccessor(e,s);const i=typeof o,a=typeof n;i!==a&&("number"===i&&(o+=""),"number"===a&&(n+=""));let c=0;return null!=o&&null!=n?o>n?c=1:o<n&&(c=-1):null!=o?c=1:null!=n&&(c=-1),c*("asc"==r?1:-1)}):t},this.filterPredicate=(t,e)=>{const s=Object.keys(t).reduce((e,s)=>e+t[s]+"\u25ec","").toLowerCase(),r=e.trim().toLowerCase();return-1!=s.indexOf(r)},this._data=new d.a(t),this._updateChangeSubscription()}get data(){return this._data.value}set data(t){this._data.next(t)}get filter(){return this._filter.value}set filter(t){this._filter.next(t)}get sort(){return this._sort}set sort(t){this._sort=t,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(t){this._paginator=t,this._updateChangeSubscription()}_updateChangeSubscription(){const t=this._sort?Object(rt.a)(this._sort.sortChange,this._sort.initialized):Object(f.a)(null),e=this._paginator?Object(rt.a)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Object(f.a)(null),s=this._data,r=Object(ot.a)([s,this._filter]).pipe(Object(nt.a)(([t])=>this._filterData(t))),o=Object(ot.a)([r,t]).pipe(Object(nt.a)(([t])=>this._orderData(t))),n=Object(ot.a)([o,e]).pipe(Object(nt.a)(([t])=>this._pageData(t)));this._renderChangesSubscription.unsubscribe(),this._renderChangesSubscription=n.subscribe(t=>this._renderData.next(t))}_filterData(t){return this.filteredData=this.filter?t.filter(t=>this.filterPredicate(t,this.filter)):t,this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(t){return this.sort?this.sortData(t.slice(),this.sort):t}_pageData(t){if(!this.paginator)return t;const e=this.paginator.pageIndex*this.paginator.pageSize;return t.slice(e,e+this.paginator.pageSize)}_updatePaginator(t){Promise.resolve().then(()=>{const e=this.paginator;if(e&&(e.length=t,e.pageIndex>0)){const t=Math.ceil(e.length/e.pageSize)-1||0,s=Math.min(e.pageIndex,t);s!==e.pageIndex&&(e.pageIndex=s,this._internalPageChanges.next())}})}connect(){return this._renderData}disconnect(){}}}}]);