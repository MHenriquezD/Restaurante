(function(){if("undefined"!==typeof window){var f=window.sfx;var g=window.cfx}else f=require("./jchartfx.system.js"),g=f.cfx;g.surfaceVersion="7.6.7367.23301";var p=function c(){c._ic();this.b=this.g=this.l=this.a=this.d=null;this.e=this.f=!1;this.p=this.k=this.c=0};g.bw=p;p.prototype={iej:function(){return!1},iek:function(){return null},iel:function(){return null!=this.d?this.d.m.f==this:!1},getColors:function(){return this.a},setColors:function(c){if(null==c)this.a=null;else{this.a=f.m._ca(c.length);
for(var b=0;b<this.a.length;b++){var a=c[b];a=f.m._t(a);this.a[b]=a}}this.j(560)},getShowContourLines:function(){return this.f},setShowContourLines:function(c){this.f=c;this.o()},getShowGridLines:function(){return this.e},setShowGridLines:function(c){this.e=c;this.o()},getStep:function(){return 0>this.c?0:this.c},setStep:function(c){this.c=c;this.j(560)},i:function(){return null==this.a||0==this.a.length},h:function(c,b,a){0>=this.c&&(this.c=-c.a2(),0<=this.c&&(this.c=-f.a.d((a-b)/10)));return f.a.d(this.c)},
ic5:function(c,b,a,d){switch(b){case 11:return this.r(a);case 13:a.b=1;a.f=!0;break;case 18:return 6}return null},ic6:function(c){return 1},ic7:function(c){return 10==c?1079056136:1079064328},ic8:function(c,b,a){if(a.aW){if(null==this.b||this.b.length!=a.a.g+1)this.b=f.e._ca(a.a.g+1);b=this.h(a.j,a.M,a.I);this.k=f.a.d(f.a.h((a.I-a.M)/b));0!=(a.t&8)&&(a.bn=!0)}0==a.d&&a.e==a.o&&(this.m(a.c,a.d,a.b.h,a.b.q,this.k),this.g=this.e||this.f?a.v.n():null);b=a.p.b;var d=a.z?a.F:-1;a.z&&a.d!=a.u&&a.e!=a.o&&
this.v(a,b,this.b[a.d].x,d,this.b[a.d].y,this.p,this.b[a.d-(a.r<a.u?-1:1)].y);this.p=this.b[a.d].y;this.b[a.d].x=b;this.b[a.d].y=d;c.a=1;c.b=0;a.d==a.r&&a.e==a.q&&this.u()},iem:function(c){},ien:function(c,b,a,d){d=this.ieo();c.a=!0;b.u=d-1;b.r=0;a&&(c=new f._p2(b.u,b.r),g.bQ.b(c),b.u=c.a,b.r=c.b);b.n=a?1:-1;b.d=b.u-b.n;b.aJ(0);a?this.m(b.c,0,b.b.h,b.b.q,d):this.m(b.c,0,b.b.q,b.b.h,d)},ieo:function(){var c=this.d.m.v;var b=new f._p2(a,b);c.ai(b,!0);var a=b.a;b=b.b;a==b&&(a=c.q,b=c.t);a=this.h(c,a,
b);return f.a.h((c.x-c.u)/a)},iep:function(c){return!1},ieq:function(c,b,a,d,l){l._cf(f.g.b);d=this.d.m.v;l=d.ae();d=f.a.o(l.c(d.x).length,l.c(d.u).length);d=f.b.u(f.b.b,2*d,57);c.a=!0;return b.idZ(d+" - ",a).e()},ier:function(c,b,a){c.b=null;c.a=c.b;c.c=null;c.d=-1;if(b.d==b.r)return!1;b.d+=b.n;c.d=b.d;a=b.j;var d=this.h(a,b.M,b.I),l=a.ae(),g=new f.aT,k=f.a.o(l.c(a.x).length,l.c(a.u).length),h=a.u+d*b.d;h=l.c(h);h=f.b.u(h,k,32);g.e(h);g.e(" - ");h=a.u+d*(b.d+1);h=l.c(h);h=f.b.u(h,k,32);g.e(h);c.b=
g.toString();b.b.c=0;b.b.h=this.q(b.d);b.V(!0);return!0},ieU:function(c,b){c=new f._p1(this.f);b.ifa(c,"ShowContourLines",!1);this.f=c.a;c.a=this.e;b.ifa(c,"ShowGridLines",!1);this.e=c.a;this.a=b.ifc("Colors",this.a,null,96)},ifg:function(c){this.d=c},n:function(c,b,a,d,f,g){if(this.f&&!this.e)for(var k=0;k<d;k++){var h=(k+1)%d;a[h].a==a[k].a&&a[k].a==f&&b.ich(c,g,a[h].b,a[h].a,a[h].c,a[k].b,a[k].a,a[k].c)}},v:function(c,b,a,d,l,x,k){if(-1!=d&&-1!=l&&-1!=x&&-1!=k){var h=c.f,e=g.a_._ca(4),q=g.a_._ca(8),
t=c.r<c.u?-1:1,m=c.p.c+g.bQ.a(c.Y,c.d,c.a.g);t=m-t*(c.Y+~~(c.Y/c.a.g)+1);e[0].b=a;e[0].a=l;e[0].c=m;e[1].b=a;e[1].a=x;e[1].c=t;e[2].b=b;e[2].a=k;e[2].c=t;e[3].b=b;e[3].a=d;e[3].c=m;l=e[0].a>e[1].a&&e[0].a>e[3].a&&e[2].a>e[1].a&&e[2].a>e[3].a||e[0].a<e[1].a&&e[0].a<e[3].a&&e[2].a<e[1].a&&e[2].a<e[3].a;k=c.j;var u=c.M,p=c.I,B=this.h(k,u,p),v=c.B;this.t();for(var y=0;y<this.k;y++){var w=this.q(y);w=new f.as(w);var z=this.e?this.g:(new f.ap)._0ap(w),A=this.f&&!this.e?this.g:null;u+=B;u>p&&(u=p);var r=
v;v=k.af(c.a,u);r++;if(l){e[1].b=a;e[1].a=x;e[1].c=t;var n=g.bW.P(e,q,v,r,3);0!=n&&(h.icp(c.c,q,n,w,z,null,null,0),this.n(c.c,h,q,n,r,A));e[1].b=b;e[1].a=d;e[1].c=m;n=g.bW.P(e,q,v,r,3)}else n=g.bW.P(e,q,v,r,4);0!=n&&(h.icp(c.c,q,n,w,z,null,null,0),this.n(c.c,h,q,n,r,A))}}},q:function(c){if(this.i())return this.l.e();var b=this.a[c%this.a.length];b.e()&&(b=this.d.iZ(c%this.a.length));return b},m:function(c,b,a,d,f){this.i()&&(0!=(c.idh()&8)&&(c=c.idl(),a=c._Gv("fill",a,"Attribute"+b,0),d=c._Gv("fill",
d,"Attribute"+b+"Alt",0)),0==d.a&&(d=g.bQ.K(a,0)),0==a.a&&(a=g.bQ.K(d,0)),this.l=new m(a,d,f))},o:function(){this.j(32)},j:function(c){null!=this.d&&this.d.iai(c|16777216)},u:function(){null!=this.g&&(this.g=null)},t:function(){this.i()&&this.l.a()},r:function(c){c.a.b=64;return null}};p._dt("GS",f.SA,0,g.ic4,g.iei,g.iq,g.ieT,g.iff);var m=function l(b,a,d){b=f.m._t(b);a=f.m._t(a);l._ic();if(0>=d)throw(new f.P)._0P(g.Chart.ae("ErrSteps"));this.f=d;this.g=b.a;d--;var m=b.r;var k=b.g;b=b.b;var h=a.r;
var e=a.g;a=a.b;this.h=(h-m)/d;this.l=(e-k)/d;this.m=(a-b)/d;this.i=m;this.j=k;this.k=b;this.a();return this};g.b4=m;m.prototype={o:function(){this.a();for(var b=f.m._ca(this.f),a=0;a<b.length;a++)b[a]=this.e();return b},e:function(){var b=f.m.l(this.g,this.b,this.c,this.d);this.b+=this.h;this.c+=this.l;this.d+=this.m;return b},a:function(){this.b=this.i;this.c=this.j;this.d=this.k}};m._dt("ColorBlender",f.SA,0)})();