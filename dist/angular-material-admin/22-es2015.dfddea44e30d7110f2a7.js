(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"7UCR":function(n,e,t){"use strict";t.r(e),t.d(e,"UserModule",(function(){return R}));var o=t("ofXK"),i=t("tyNb"),a=t("fXoL"),c=t("pD6V"),s=t("b6Gx"),r=t("1ld4"),d=t("/t3+"),b=t("bTqV"),l=t("NFeN"),u=t("STbY");const g=function(){return["/changePassword"]};let m=(()=>{class n{constructor(n,e){this.router=n,this.userService=e,this.sideNavToggled=new a.o}ngOnInit(){}toggleSidebar(){this.sideNavToggled.emit()}onLoggedout(){this.userService.doLogout()}}return n.\u0275fac=function(e){return new(e||n)(a.Lb(i.c),a.Lb(r.a))},n.\u0275cmp=a.Fb({type:n,selectors:[["app-top-nav"]],outputs:{sideNavToggled:"sideNavToggled"},decls:32,vars:4,consts:[["color","primary",1,"fix-nav"],["type","button","mat-icon-button","",1,"visible-md",3,"click"],["aria-label","Side nav toggle icon"],["href","","target","_blank","mat-raised-button","","color","primary",1,"",2,"margin-right","10px"],[1,"nav-spacer"],["mat-icon-button","",1,"hidden-sm",3,"matMenuTriggerFor"],[3,"overlapTrigger"],["profile","matMenu"],["mat-menu-item",""],["mat-menu-item","",3,"routerLink"],["mat-icon-button","",3,"click"]],template:function(n,e){if(1&n&&(a.Rb(0,"mat-toolbar",0),a.Rb(1,"button",1),a.Zb("click",(function(){return e.toggleSidebar()})),a.Rb(2,"mat-icon",2),a.Ac(3,"menu"),a.Qb(),a.Qb(),a.Rb(4,"a",3),a.Rb(5,"mat-icon"),a.Ac(6,"home"),a.Qb(),a.Ac(7," QuizBugs "),a.Qb(),a.Mb(8,"span",4),a.Rb(9,"button",5),a.Rb(10,"mat-icon"),a.Ac(11,"account_circle"),a.Qb(),a.Qb(),a.Rb(12,"mat-menu",6,7),a.Rb(14,"button",8),a.Rb(15,"mat-icon"),a.Ac(16,"person"),a.Qb(),a.Rb(17,"span"),a.Ac(18,"Profile"),a.Qb(),a.Qb(),a.Rb(19,"button",9),a.Rb(20,"mat-icon"),a.Ac(21,"vpn_key"),a.Qb(),a.Rb(22,"span"),a.Ac(23,"Change password"),a.Qb(),a.Qb(),a.Rb(24,"button",8),a.Rb(25,"mat-icon"),a.Ac(26,"settings"),a.Qb(),a.Rb(27,"span"),a.Ac(28,"Settings"),a.Qb(),a.Qb(),a.Qb(),a.Rb(29,"button",10),a.Zb("click",(function(){return e.onLoggedout()})),a.Rb(30,"mat-icon"),a.Ac(31,"exit_to_app"),a.Qb(),a.Qb(),a.Qb()),2&n){const n=a.pc(13);a.Ab(9),a.jc("matMenuTriggerFor",n),a.Ab(3),a.jc("overlapTrigger",!1),a.Ab(7),a.jc("routerLink",a.lc(3,g))}},directives:[d.a,b.b,l.a,b.a,u.c,u.d,u.a,i.d],styles:["[_nghost-%COMP%]{display:block;position:fixed;left:0;right:0;top:0;z-index:1000}.nav-brand[_ngcontent-%COMP%]{text-align:center}.topnav-icon[_ngcontent-%COMP%]{text-decoration:none;display:-ms-flexbox;display:flex;color:#fff}.nav-spacer[_ngcontent-%COMP%]{-ms-flex:1 1 auto;flex:1 1 auto}.visible-md[_ngcontent-%COMP%], .visible-sm[_ngcontent-%COMP%]{display:none}@media screen and (max-width:992px){.visible-md[_ngcontent-%COMP%]{display:block}}@media screen and (max-width:768px){.visible-sm[_ngcontent-%COMP%]{display:block}.nav-brand[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:768px){.hidden-sm[_ngcontent-%COMP%]{display:none}}"]}),n})();var p=t("XhcP");const h=[{path:"dashboard",loadChildren:()=>Promise.all([t.e(2),t.e(6),t.e(15)]).then(t.bind(null,"putL")).then(n=>n.DashboardModule),data:{icon:"dashboard",text:"Dashboard"}},{path:"examination",loadChildren:()=>Promise.all([t.e(0),t.e(2),t.e(3),t.e(1),t.e(7),t.e(6),t.e(4),t.e(21)]).then(t.bind(null,"aKMQ")).then(n=>n.ExaminationModule),data:{icon:"event_note",text:"Examination"}},{path:"history",loadChildren:()=>Promise.all([t.e(0),t.e(2),t.e(3),t.e(1),t.e(7),t.e(4),t.e(20)]).then(t.bind(null,"9Ggk")).then(n=>n.ExamHistoryModule),data:{icon:"history",text:"Exam Records"}}];var v=t("MutI");const f=function(n){return["/",n]};function M(n,e){if(1&n&&(a.Rb(0,"a",1),a.Rb(1,"mat-icon",2),a.Ac(2),a.Qb(),a.Ac(3),a.Qb()),2&n){const n=e.$implicit;a.jc("routerLinkActive","active")("routerLink",a.mc(4,f,n.path)),a.Ab(2),a.Bc(n.data.icon),a.Ab(1),a.Cc(" ",n.data.text," ")}}let O=(()=>{class n{constructor(){this.showMenu=!1,this.routes=h}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Fb({type:n,selectors:[["app-side-nav"]],decls:2,vars:1,consts:[["mat-list-item","",3,"routerLinkActive","routerLink",4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLinkActive","routerLink"],[1,"sidenav-icon"]],template:function(n,e){1&n&&(a.Rb(0,"mat-nav-list"),a.zc(1,M,4,6,"a",0),a.Qb()),2&n&&(a.Ab(1),a.jc("ngForOf",e.routes))},directives:[v.c,o.k,v.a,i.f,i.e,l.a],styles:[".mat-nav-list[_ngcontent-%COMP%]{width:100%}.mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block}.mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-right:15px;color:#3f51b5}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto;margin:0}.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px;display:block}"]}),n})();var x=t("bv9b");function C(n,e){1&n&&(a.Rb(0,"div",7),a.Mb(1,"mat-progress-bar",8),a.Qb())}const y=[{path:"",component:(()=>{class n{constructor(n,e){this.loaderService=e,this.sideNavOpened=!0,this.sideNavMode="side",this.toolBarHeight=64,this.mediaWatcher=n.media$.subscribe(n=>{"sm"===n.mqAlias||"xs"===n.mqAlias?(this.sideNavOpened&&(this.sideNavOpened=!1),this.sideNavMode="over"):(this.sideNavOpened=!0,this.sideNavMode="side"),this.toolBarHeight="xs"===n.mqAlias?56:64})}ngOnInit(){}ngOnDestroy(){this.mediaWatcher.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(a.Lb(c.g),a.Lb(s.a))},n.\u0275cmp=a.Fb({type:n,selectors:[["app-layout"]],decls:11,vars:7,consts:[[1,"layout-container"],[3,"sideNavToggled"],[1,"sidenav-container"],[1,"sidenav","mat-elevation-z10",3,"mode","opened","modeChange","openedChange"],["snav",""],["class","loader-container",4,"ngIf"],[1,"main-container"],[1,"loader-container"],["mode","indeterminate"]],template:function(n,e){if(1&n){const n=a.Sb();a.Rb(0,"div",0),a.Rb(1,"app-top-nav",1),a.Zb("sideNavToggled",(function(){return a.rc(n),a.pc(4).toggle()})),a.Qb(),a.Rb(2,"mat-sidenav-container",2),a.Rb(3,"mat-sidenav",3,4),a.Zb("modeChange",(function(n){return e.sideNavMode=n}))("openedChange",(function(n){return e.sideNavOpened=n})),a.Mb(5,"app-side-nav"),a.Qb(),a.Rb(6,"mat-sidenav-content"),a.zc(7,C,2,0,"div",5),a.ec(8,"async"),a.Rb(9,"main",6),a.Mb(10,"router-outlet"),a.Qb(),a.Qb(),a.Qb(),a.Qb()}2&n&&(a.Ab(2),a.wc("margin-top",e.toolBarHeight,"px"),a.Ab(1),a.jc("mode",e.sideNavMode)("opened",e.sideNavOpened),a.Ab(4),a.jc("ngIf",a.fc(8,5,e.loaderService.isLoading)))},directives:[m,p.b,p.a,O,p.c,o.l,i.h,x.a],pipes:[o.b],styles:[".layout-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{-ms-flex:1;flex:1;background:#fafafa}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{padding:12px;width:250px;background:#fff}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{padding:16px}.loader-container[_ngcontent-%COMP%]{position:fixed;width:100%;z-index:99}"]}),n})(),children:[{path:"",redirectTo:"dashboard"},...h]}];let P=(()=>{class n{}return n.\u0275mod=a.Jb({type:n}),n.\u0275inj=a.Ib({factory:function(e){return new(e||n)},imports:[[i.g.forChild(y)],i.g]}),n})();var _=t("kmnG"),Q=t("qFsG");let R=(()=>{class n{}return n.\u0275mod=a.Jb({type:n}),n.\u0275inj=a.Ib({factory:function(e){return new(e||n)},imports:[[o.c,P,p.d,x.b,d.b,l.b,_.e,u.e,u.b,v.b,b.c,Q.b]]}),n})()}}]);