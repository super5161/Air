var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181116_syb_scopedata*/window.__wcc_version__='v0.5vv_20181116_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'footer-row'])
Z([3,'footer'])
Z([[7],[3,'footerTop']])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'foots']])
Z([3,'id'])
Z([3,'none'])
Z([3,'redirect'])
Z([[6],[[7],[3,'item']],[3,'page']])
Z([[4],[[5],[[5],[1,'footer-item']],[[2,'?:'],[[2,'=='],[[7],[3,'tab']],[[6],[[7],[3,'item']],[3,'id']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[5],[1,'iconfont']],[[6],[[7],[3,'item']],[3,'type']]]])
Z([3,'footer-text'])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([[7],[3,'autoplay']])
Z([3,'swiper'])
Z([[7],[3,'duration']])
Z([3,'swiper-item'])
Z([3,'swiper-item-img'])
Z([3,'aspectFit'])
Z([3,'../../static/image/guide/title_01.png'])
Z(z[6])
Z(z[7])
Z([3,'../../static/image/guide/icon_01.png'])
Z([3,'__e'])
Z([3,'jump-over'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'launchFlag']]]]]]]]])
Z([a,[[7],[3,'jumpover']]])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'../../static/image/guide/title_02.png'])
Z(z[6])
Z(z[7])
Z([3,'../../static/image/guide/icon_02.png'])
Z(z[12])
Z(z[13])
Z(z[14])
Z([a,z[15][1]])
Z(z[5])
Z(z[6])
Z(z[6])
Z(z[7])
Z([3,'../../static/image/guide/icon_03.png'])
Z(z[12])
Z(z[13])
Z(z[14])
Z([a,z[15][1]])
Z(z[5])
Z(z[6])
Z(z[7])
Z([3,'../../static/image/guide/title_04.png'])
Z(z[6])
Z(z[7])
Z([3,'../../static/image/guide/icon_04.png'])
Z(z[12])
Z([3,'experience'])
Z(z[14])
Z([a,[[7],[3,'experience']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'banner'])
Z([[7],[3,'autoplay']])
Z([3,'swiper'])
Z([[7],[3,'duration']])
Z([3,'#DEDEDE'])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'true'])
Z([3,'scaleToFill'])
Z([3,'/static/image/swiper/1.jpg'])
Z(z[9])
Z(z[10])
Z([3,'/static/image/swiper/2.jpg'])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[10])
Z(z[14])
Z([3,'area'])
Z([3,'item'])
Z([3,'none'])
Z([3,'navigate'])
Z([3,'/pages/report/quota'])
Z([3,'iconfont line'])
Z([3,'各项指标'])
Z([3,'item other'])
Z(z[23])
Z(z[24])
Z([3,'/pages/report/other'])
Z([3,'iconfont pie'])
Z([3,'联网率'])
Z(z[22])
Z(z[23])
Z(z[24])
Z([3,'/pages/report/column'])
Z(z[26])
Z([3,'柱状图'])
Z([3,'0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([3,'logo-content'])
Z([3,'logo'])
Z([3,'/static/image/log.png'])
Z([3,'logo-text'])
Z([a,[[6],[[7],[3,'res']],[3,'sysName']]])
Z([3,'form-content'])
Z([3,'input-group'])
Z([3,'username'])
Z([a,[[6],[[7],[3,'res']],[3,'lblUserName']]])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'username']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'']]]]]]]]]]])
Z([3,'10'])
Z(z[9])
Z([[6],[[7],[3,'res']],[3,'placUserName']])
Z([3,'text'])
Z([[7],[3,'username']])
Z(z[8])
Z([3,'password'])
Z([[6],[[7],[3,'res']],[3,'lblPassword']])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'password']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'']]]]]]]]]]])
Z(z[13])
Z(z[19])
Z([3,'true'])
Z([[6],[[7],[3,'res']],[3,'placPassword']])
Z(z[16])
Z([[7],[3,'password']])
Z(z[8])
Z([[6],[[7],[3,'res']],[3,'lblLange']])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'ChangeLange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([a,[[7],[3,'langText']]])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'Login']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'登录'])
Z([3,'version'])
Z([[7],[3,'versionTop']])
Z([3,'Copyright © 1996-2020 泓远软件.版权所有 ver 1.0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'charts'])
Z(z[1])
Z(z[1])
Z([3,'width:80%;'])
Z([3,'primary'])
Z([3,'刷新数据'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'charts'])
Z(z[1])
Z(z[1])
Z([3,'width:80%;'])
Z([3,'primary'])
Z([3,'刷新数据'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'charts'])
Z(z[1])
Z(z[1])
Z([3,'width:80%;'])
Z([3,'primary'])
Z([3,'刷新数据'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'none'])
Z([3,'redirect'])
Z([3,'/pages/login/login'])
Z([3,'width:50%;'])
Z([3,'warn'])
Z([3,'退出登录'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/page-foot.wxml','./pages/index/guide.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/report/column.wxml','./pages/report/other.wxml','./pages/report/quota.wxml','./pages/user/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./components/page-foot.wxml:view:1:1")
var oB=_n('view')
_rz(z,oB,'bind:__l',0,e,s,gg)
cs.push("./components/page-foot.wxml:view:1:22")
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./components/page-foot.wxml:view:1:54")
var oD=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
cs.push("./components/page-foot.wxml:block:1:99")
var cF=function(oH,hG,cI,gg){
cs.push("./components/page-foot.wxml:block:1:99")
cs.push("./components/page-foot.wxml:navigator:1:178")
var lK=_mz(z,'navigator',['hoverClass',8,'openType',1,'url',2],[],oH,hG,gg)
cs.push("./components/page-foot.wxml:view:1:249")
var aL=_n('view')
_rz(z,aL,'class',11,oH,hG,gg)
cs.push("./components/page-foot.wxml:view:1:310")
var tM=_n('view')
_rz(z,tM,'class',12,oH,hG,gg)
cs.pop()
_(aL,tM)
cs.push("./components/page-foot.wxml:text:1:358")
var eN=_n('text')
_rz(z,eN,'class',13,oH,hG,gg)
var bO=_oz(z,14,oH,hG,gg)
_(eN,bO)
cs.pop()
_(aL,eN)
cs.pop()
_(lK,aL)
cs.pop()
_(cI,lK)
cs.pop()
return cI
}
fE.wxXCkey=2
_2z(z,6,cF,e,s,gg,fE,'item','__i0__','id')
cs.pop()
cs.pop()
_(oB,oD)
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./pages/index/guide.wxml:view:1:1")
var xQ=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/guide.wxml:swiper:1:38")
var oR=_mz(z,'swiper',['autoplay',2,'class',1,'duration',2],[],e,s,gg)
cs.push("./pages/index/guide.wxml:swiper-item:1:109")
var fS=_n('swiper-item')
cs.push("./pages/index/guide.wxml:view:1:122")
var cT=_n('view')
_rz(z,cT,'class',5,e,s,gg)
cs.push("./pages/index/guide.wxml:view:1:148")
var hU=_n('view')
_rz(z,hU,'class',6,e,s,gg)
cs.push("./pages/index/guide.wxml:image:1:178")
var oV=_mz(z,'image',['mode',7,'src',1],[],e,s,gg)
cs.pop()
_(hU,oV)
cs.pop()
_(cT,hU)
cs.push("./pages/index/guide.wxml:view:1:261")
var cW=_n('view')
_rz(z,cW,'class',9,e,s,gg)
cs.push("./pages/index/guide.wxml:image:1:291")
var oX=_mz(z,'image',['mode',10,'src',1],[],e,s,gg)
cs.pop()
_(cW,oX)
cs.pop()
_(cT,cW)
cs.pop()
_(fS,cT)
cs.push("./pages/index/guide.wxml:view:1:380")
var lY=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2],[],e,s,gg)
var aZ=_oz(z,15,e,s,gg)
_(lY,aZ)
cs.pop()
_(fS,lY)
cs.pop()
_(oR,fS)
cs.push("./pages/index/guide.wxml:swiper-item:1:500")
var t1=_n('swiper-item')
cs.push("./pages/index/guide.wxml:view:1:513")
var e2=_n('view')
_rz(z,e2,'class',16,e,s,gg)
cs.push("./pages/index/guide.wxml:view:1:539")
var b3=_n('view')
_rz(z,b3,'class',17,e,s,gg)
cs.push("./pages/index/guide.wxml:image:1:569")
var o4=_mz(z,'image',['mode',18,'src',1],[],e,s,gg)
cs.pop()
_(b3,o4)
cs.pop()
_(e2,b3)
cs.push("./pages/index/guide.wxml:view:1:652")
var x5=_n('view')
_rz(z,x5,'class',20,e,s,gg)
cs.push("./pages/index/guide.wxml:image:1:682")
var o6=_mz(z,'image',['mode',21,'src',1],[],e,s,gg)
cs.pop()
_(x5,o6)
cs.pop()
_(e2,x5)
cs.pop()
_(t1,e2)
cs.push("./pages/index/guide.wxml:view:1:771")
var f7=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],e,s,gg)
var c8=_oz(z,26,e,s,gg)
_(f7,c8)
cs.pop()
_(t1,f7)
cs.pop()
_(oR,t1)
cs.push("./pages/index/guide.wxml:swiper-item:1:891")
var h9=_n('swiper-item')
cs.push("./pages/index/guide.wxml:view:1:904")
var o0=_n('view')
_rz(z,o0,'class',27,e,s,gg)
cs.push("./pages/index/guide.wxml:view:1:930")
var cAB=_n('view')
_rz(z,cAB,'class',28,e,s,gg)
cs.pop()
_(o0,cAB)
cs.push("./pages/index/guide.wxml:view:1:967")
var oBB=_n('view')
_rz(z,oBB,'class',29,e,s,gg)
cs.push("./pages/index/guide.wxml:image:1:997")
var lCB=_mz(z,'image',['mode',30,'src',1],[],e,s,gg)
cs.pop()
_(oBB,lCB)
cs.pop()
_(o0,oBB)
cs.pop()
_(h9,o0)
cs.push("./pages/index/guide.wxml:view:1:1086")
var aDB=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],e,s,gg)
var tEB=_oz(z,35,e,s,gg)
_(aDB,tEB)
cs.pop()
_(h9,aDB)
cs.pop()
_(oR,h9)
cs.push("./pages/index/guide.wxml:swiper-item:1:1206")
var eFB=_n('swiper-item')
cs.push("./pages/index/guide.wxml:view:1:1219")
var bGB=_n('view')
_rz(z,bGB,'class',36,e,s,gg)
cs.push("./pages/index/guide.wxml:view:1:1245")
var oHB=_n('view')
_rz(z,oHB,'class',37,e,s,gg)
cs.push("./pages/index/guide.wxml:image:1:1275")
var xIB=_mz(z,'image',['mode',38,'src',1],[],e,s,gg)
cs.pop()
_(oHB,xIB)
cs.pop()
_(bGB,oHB)
cs.push("./pages/index/guide.wxml:view:1:1358")
var oJB=_n('view')
_rz(z,oJB,'class',40,e,s,gg)
cs.push("./pages/index/guide.wxml:image:1:1388")
var fKB=_mz(z,'image',['mode',41,'src',1],[],e,s,gg)
cs.pop()
_(oJB,fKB)
cs.pop()
_(bGB,oJB)
cs.pop()
_(eFB,bGB)
cs.push("./pages/index/guide.wxml:view:1:1477")
var cLB=_mz(z,'view',['bindtap',43,'class',1,'data-event-opts',2],[],e,s,gg)
var hMB=_oz(z,46,e,s,gg)
_(cLB,hMB)
cs.pop()
_(eFB,cLB)
cs.pop()
_(oR,eFB)
cs.pop()
_(xQ,oR)
cs.pop()
_(r,xQ)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/index/index.wxml:view:1:1")
var cOB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:38")
var oPB=_n('view')
_rz(z,oPB,'class',2,e,s,gg)
cs.push("./pages/index/index.wxml:swiper:1:59")
var lQB=_mz(z,'swiper',['autoplay',3,'class',1,'duration',2,'indicatorColor',3,'indicatorDots',4,'interval',5],[],e,s,gg)
cs.push("./pages/index/index.wxml:swiper-item:1:215")
var aRB=_n('swiper-item')
cs.push("./pages/index/index.wxml:image:1:228")
var tSB=_mz(z,'image',['lazyLoad',9,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(aRB,tSB)
cs.pop()
_(lQB,aRB)
cs.push("./pages/index/index.wxml:swiper-item:1:326")
var eTB=_n('swiper-item')
cs.push("./pages/index/index.wxml:image:1:339")
var bUB=_mz(z,'image',['lazyLoad',12,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(eTB,bUB)
cs.pop()
_(lQB,eTB)
cs.push("./pages/index/index.wxml:swiper-item:1:437")
var oVB=_n('swiper-item')
cs.push("./pages/index/index.wxml:image:1:450")
var xWB=_mz(z,'image',['lazyLoad',15,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(oVB,xWB)
cs.pop()
_(lQB,oVB)
cs.push("./pages/index/index.wxml:swiper-item:1:548")
var oXB=_n('swiper-item')
cs.push("./pages/index/index.wxml:image:1:561")
var fYB=_mz(z,'image',['lazyLoad',18,'mode',1,'src',2],[],e,s,gg)
cs.pop()
_(oXB,fYB)
cs.pop()
_(lQB,oXB)
cs.pop()
_(oPB,lQB)
cs.pop()
_(cOB,oPB)
cs.push("./pages/index/index.wxml:view:1:675")
var cZB=_n('view')
_rz(z,cZB,'class',21,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:694")
var h1B=_n('view')
_rz(z,h1B,'class',22,e,s,gg)
cs.push("./pages/index/index.wxml:navigator:1:713")
var o2B=_mz(z,'navigator',['hoverClass',23,'openType',1,'url',2],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:790")
var c3B=_n('view')
_rz(z,c3B,'class',26,e,s,gg)
cs.pop()
_(o2B,c3B)
cs.push("./pages/index/index.wxml:text:1:825")
var o4B=_n('text')
var l5B=_oz(z,27,e,s,gg)
_(o4B,l5B)
cs.pop()
_(o2B,o4B)
cs.pop()
_(h1B,o2B)
cs.pop()
_(cZB,h1B)
cs.push("./pages/index/index.wxml:view:1:869")
var a6B=_n('view')
_rz(z,a6B,'class',28,e,s,gg)
cs.push("./pages/index/index.wxml:navigator:1:894")
var t7B=_mz(z,'navigator',['hoverClass',29,'openType',1,'url',2],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:971")
var e8B=_n('view')
_rz(z,e8B,'class',32,e,s,gg)
cs.pop()
_(t7B,e8B)
cs.push("./pages/index/index.wxml:text:1:1005")
var b9B=_n('text')
var o0B=_oz(z,33,e,s,gg)
_(b9B,o0B)
cs.pop()
_(t7B,b9B)
cs.pop()
_(a6B,t7B)
cs.pop()
_(cZB,a6B)
cs.push("./pages/index/index.wxml:view:1:1046")
var xAC=_n('view')
_rz(z,xAC,'class',34,e,s,gg)
cs.push("./pages/index/index.wxml:navigator:1:1065")
var oBC=_mz(z,'navigator',['hoverClass',35,'openType',1,'url',2],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1143")
var fCC=_n('view')
_rz(z,fCC,'class',38,e,s,gg)
cs.pop()
_(oBC,fCC)
cs.push("./pages/index/index.wxml:text:1:1178")
var cDC=_n('text')
var hEC=_oz(z,39,e,s,gg)
_(cDC,hEC)
cs.pop()
_(oBC,cDC)
cs.pop()
_(xAC,oBC)
cs.pop()
_(cZB,xAC)
cs.pop()
_(cOB,cZB)
cs.push("./pages/index/index.wxml:page-foot:1:1226")
var oFC=_n('page-foot')
_rz(z,oFC,'tab',40,e,s,gg)
cs.pop()
_(cOB,oFC)
cs.pop()
_(r,cOB)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./pages/login/login.wxml:view:1:1")
var oHC=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/login/login.wxml:view:1:38")
var lIC=_n('view')
_rz(z,lIC,'class',2,e,s,gg)
cs.push("./pages/login/login.wxml:image:1:65")
var aJC=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
cs.pop()
_(lIC,aJC)
cs.push("./pages/login/login.wxml:view:1:121")
var tKC=_n('view')
_rz(z,tKC,'class',5,e,s,gg)
var eLC=_oz(z,6,e,s,gg)
_(tKC,eLC)
cs.pop()
_(lIC,tKC)
cs.pop()
_(oHC,lIC)
cs.push("./pages/login/login.wxml:view:1:174")
var bMC=_n('view')
_rz(z,bMC,'class',7,e,s,gg)
cs.push("./pages/login/login.wxml:view:1:201")
var oNC=_n('view')
_rz(z,oNC,'class',8,e,s,gg)
cs.push("./pages/login/login.wxml:label:1:227")
var xOC=_n('label')
_rz(z,xOC,'for',9,e,s,gg)
var oPC=_oz(z,10,e,s,gg)
_(xOC,oPC)
cs.pop()
_(oNC,xOC)
cs.push("./pages/login/login.wxml:input:1:276")
var fQC=_mz(z,'input',['bindinput',11,'data-event-opts',1,'maxlength',2,'name',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
cs.pop()
_(oNC,fQC)
cs.pop()
_(bMC,oNC)
cs.push("./pages/login/login.wxml:view:1:493")
var cRC=_n('view')
_rz(z,cRC,'class',18,e,s,gg)
cs.push("./pages/login/login.wxml:label:1:519")
var hSC=_n('label')
_rz(z,hSC,'for',19,e,s,gg)
cs.push("./pages/login/login.wxml:rich-text:1:541")
var oTC=_n('rich-text')
_rz(z,oTC,'nodes',20,e,s,gg)
cs.pop()
_(hSC,oTC)
cs.pop()
_(cRC,hSC)
cs.push("./pages/login/login.wxml:input:1:600")
var cUC=_mz(z,'input',['bindinput',21,'data-event-opts',1,'maxlength',2,'name',3,'password',4,'placeholder',5,'type',6,'value',7],[],e,s,gg)
cs.pop()
_(cRC,cUC)
cs.pop()
_(bMC,cRC)
cs.push("./pages/login/login.wxml:view:1:833")
var oVC=_n('view')
_rz(z,oVC,'class',29,e,s,gg)
cs.push("./pages/login/login.wxml:label:1:859")
var lWC=_n('label')
cs.push("./pages/login/login.wxml:rich-text:1:866")
var aXC=_n('rich-text')
_rz(z,aXC,'nodes',30,e,s,gg)
cs.pop()
_(lWC,aXC)
cs.pop()
_(oVC,lWC)
cs.push("./pages/login/login.wxml:text:1:922")
var tYC=_mz(z,'text',['bindtap',31,'data-event-opts',1],[],e,s,gg)
var eZC=_oz(z,33,e,s,gg)
_(tYC,eZC)
cs.pop()
_(oVC,tYC)
cs.pop()
_(bMC,oVC)
cs.push("./pages/login/login.wxml:button:1:1029")
var b1C=_mz(z,'button',['bindtap',34,'data-event-opts',1,'type',2],[],e,s,gg)
var o2C=_oz(z,37,e,s,gg)
_(b1C,o2C)
cs.pop()
_(bMC,b1C)
cs.pop()
_(oHC,bMC)
cs.push("./pages/login/login.wxml:view:1:1143")
var x3C=_mz(z,'view',['class',38,'style',1],[],e,s,gg)
var o4C=_oz(z,40,e,s,gg)
_(x3C,o4C)
cs.pop()
_(oHC,x3C)
cs.pop()
_(r,oHC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
cs.push("./pages/report/column.wxml:view:1:1")
var c6C=_n('view')
_rz(z,c6C,'bind:__l',0,e,s,gg)
cs.push("./pages/report/column.wxml:canvas:1:22")
var h7C=_mz(z,'canvas',['canvasId',1,'class',1,'id',2],[],e,s,gg)
cs.pop()
_(c6C,h7C)
cs.push("./pages/report/column.wxml:button:1:85")
var o8C=_mz(z,'button',['style',4,'type',1],[],e,s,gg)
var c9C=_oz(z,6,e,s,gg)
_(o8C,c9C)
cs.pop()
_(c6C,o8C)
cs.pop()
_(r,c6C)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
cs.push("./pages/report/other.wxml:view:1:1")
var lAD=_n('view')
_rz(z,lAD,'bind:__l',0,e,s,gg)
cs.push("./pages/report/other.wxml:canvas:1:22")
var aBD=_mz(z,'canvas',['canvasId',1,'class',1,'id',2],[],e,s,gg)
cs.pop()
_(lAD,aBD)
cs.push("./pages/report/other.wxml:button:1:85")
var tCD=_mz(z,'button',['style',4,'type',1],[],e,s,gg)
var eDD=_oz(z,6,e,s,gg)
_(tCD,eDD)
cs.pop()
_(lAD,tCD)
cs.pop()
_(r,lAD)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./pages/report/quota.wxml:view:1:1")
var oFD=_n('view')
_rz(z,oFD,'bind:__l',0,e,s,gg)
cs.push("./pages/report/quota.wxml:canvas:1:22")
var xGD=_mz(z,'canvas',['canvasId',1,'class',1,'id',2],[],e,s,gg)
cs.pop()
_(oFD,xGD)
cs.push("./pages/report/quota.wxml:button:1:85")
var oHD=_mz(z,'button',['style',4,'type',1],[],e,s,gg)
var fID=_oz(z,6,e,s,gg)
_(oHD,fID)
cs.pop()
_(oFD,oHD)
cs.pop()
_(r,oFD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
cs.push("./pages/user/index.wxml:view:1:1")
var hKD=_n('view')
_rz(z,hKD,'bind:__l',0,e,s,gg)
cs.push("./pages/user/index.wxml:navigator:1:22")
var oLD=_mz(z,'navigator',['hoverClass',1,'openType',1,'url',2],[],e,s,gg)
cs.push("./pages/user/index.wxml:button:1:98")
var cMD=_mz(z,'button',['style',4,'type',1],[],e,s,gg)
var oND=_oz(z,6,e,s,gg)
_(cMD,oND)
cs.pop()
_(oLD,cMD)
cs.pop()
_(hKD,oLD)
cs.push("./pages/user/index.wxml:page-foot:1:170")
var lOD=_n('page-foot')
_rz(z,lOD,'tab',7,e,s,gg)
cs.pop()
_(hKD,lOD)
cs.pop()
_(r,hKD)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: \x22iconfont\x22; src: url(/iconfont.eot-do-not-use-local-path-./common/main.wxss\x263\x266); src: url(/iconfont.eot-do-not-use-local-path-./common/main.wxss\x268\x266) format(\x27embedded-opentype\x27),\n		url(data:application/x-font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAARMAAsAAAAACKAAAAQAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqEQINwATYCJAMUCwwABCAFhG0HTRt5BxEVnNXJfh7YtpatKLSN8eiXEdZT3BGGrtRI85+Dh/wteyGshYob256p2ucNINFaZmD37gkdFGQrmYRqfRULBaTYKDIKhWGj0IgGgG/vZsWXKVM3dOqx1kaxHXkfPFwIVI6/d9qmBOYB5bLeb42FURsDjAMKbIyJY+EGKZCEPQXxbCbjWAwBKNpkIBbKV62LE8doJQCx06lDK5wpLV6TLEgRYslAjxUzsZHqJO0FmOF/X/zhFidoBMPoWLN9ubaUfM/7K3lsjaSpiwONZwa4YSCBDEAHsVVqbYsMoxlIssp0OiOAkxSF9/I+5f1UywIFbC9/8VKyZAENwxEQEUPqAXLJmA7vsdFJIpiRAEFCvewK2H0sZANAAd7AGuArBjWBepKIo9VkoZPtPVwOu1fsEO14o8pLpXlM3hwmgzu0m9eg5FyVnRzUvq13qPlBpecLWRDcYcuU1HriZIGRmzIPbWVeICMDGvjis2tE1cRQ+pQtDFcNDLLrUu6+rXvvXb0HD+o0aN8h9d69kXfrtm9358Go+7VbC+1w+/6QOvOHBvfpGxo0N+Duy/rzg+YHP3jQ4PL9+DUPyp27F7vybsV9+eYFXrtXb1GxU91W+y7yU612tVLVieJaXpWYVkIsSl9VX6mjzvNxz8a1cerI+jPLuZ2c7X7OqVWs1saJY9S969RFu+vzB7cr2mk5mgQ1yWwiLDAjIGNjLbOwufOr+cXckesu5t753/xncn35Nmddl/oZUySta7RkQ4UfFSMbN23WxF26VPkNxypsKlsqqpKRD86btMA9IbjsD7ZmZW1aVIoYq3VOt9n0c+C4XIcfd6ZpuU2jR28q59mbmFdmTKeS2O/Trv+0EgHtJk9u5beucMdr31qV+/fx0tA7FquT06/5/Qd3avX2WDIZCIC1wvfkGlif7aD2b410kSPB2mGfstZf4DdsqffbauE98c9p6AA8/Fre2Oe2J+yh7xEp6AvP0u8A9D1eYERsDtTwfZKmIgAbY3yldg2+X6UFpx/Px1EGvsa4IKURg0ZCyyxJVQS8Tu4HGzkGwE7KNCj6qDDcoEZvJOIuII1xBIQyO0Ap8gxGmWt4Jz+DQJNvECmLhCyrojZhDsZW5Ju9IFQkFP0oj7kxlkE3QfIdaV+FkhT4tDekywPk2W42cUYDGaNLN6S+qiEjXNOJLIeqYmqFC8RqZ6pt4Dim7EB2zPVow14QKhIi+hF5zI1xS+sm9/k70r4Kpaagwv6GdHnlhIeN2wJ/ljatCq6lejekPqqGbmaEa+IEMyozykRbXq9ArDZZj3Ab4FDFTFupPb+8fsZlgMLY1CZUTFyCRBZ9Mu5/WP4zfPOwWWkfebXY3c0/nMAajQA\x3d) format(\x27woff2\x27),\n		url(/iconfont.woff-do-not-use-local-path-./common/main.wxss\x268\x266) format(\x27woff\x27),\n		url(/iconfont.ttf-do-not-use-local-path-./common/main.wxss\x268\x266) format(\x27truetype\x27),\n		url(/iconfont.svg-do-not-use-local-path-./common/main.wxss\x268\x266) format(\x27svg\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; }\n.",[1],"home:before { content: \x22\\E68C\x22; }\n.",[1],"line:before { content: \x22\\E600\x22; }\n.",[1],"pie:before { content: \x22\\E601\x22; }\n.",[1],"my:before { content: \x22\\E628\x22; }\n.",[1],"charts { width: 100%; height: ",[0,680],"; background-color: #FFFFFF; margin-top: ",[0,100],"; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/page-foot.wxss']=setCssToHead([".",[1],"footer-row { height: ",[0,120],"; }\n.",[1],"footer { position: fixed; left: 0px; bottom: 0px; background-color: #FFFFFF; z-index: 999; width: 100%; height: ",[0,120],"; -webkit-box-flex: 0; -webkit-flex: 0 0 auto; -ms-flex: 0 0 auto; flex: 0 0 auto; border-top: 1px solid #bac1d4; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"footer-item.",[1],"active { color: #36BBFF; }\n.",[1],"footer-item { width: 100%; text-align: center; color: #999; display: block; padding: ",[0,16]," 0; }\n.",[1],"iconfont { display: block; font-size: ",[0,36],"; margin-bottom: ",[0,2],"; }\n.",[1],"footer-item .",[1],"footer-text { font-size: ",[0,26],"; display: block; }\n",],undefined,{path:"./components/page-foot.wxss"});    
__wxAppCode__['components/page-foot.wxml']=$gwx('./components/page-foot.wxml');

__wxAppCode__['pages/index/guide.wxss']=setCssToHead(["body, .",[1],"content { width: 100%; height: 100%; background-size: 100% auto; padding: 0; }\n.",[1],"swiper { width: 100%; height: 80%; background: #FFFFFF; }\n.",[1],"swiper-item { width: 100%; height: 100%; text-align: center; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; -webkit-box-orient: vertical; -webkit-box-direction: reverse; -webkit-flex-direction: column-reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse }\n.",[1],"swiper-item-img { width: 100%; height: auto; margin: 0 auto; }\n.",[1],"swiper-item-img wx-image { width: 80%; }\n.",[1],"uniapp-img { height: 20%; background: #FFFFFF; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; overflow: hidden; }\n.",[1],"uniapp-img wx-image { width: 40%; }\n.",[1],"jump-over, .",[1],"experience { position: absolute; height: ",[0,60],"; line-height: ",[0,60],"; padding: 0 ",[0,40],"; border-radius: ",[0,30],"; font-size: ",[0,32],"; color: #454343; border: 1px solid #454343; z-index: 999; }\n.",[1],"jump-over { right: ",[0,40],"; top: ",[0,40],"; }\n.",[1],"experience { right: 50%; margin-right: ",[0,-105],"; bottom: 0; }\n",],undefined,{path:"./pages/index/guide.wxss"});    
__wxAppCode__['pages/index/guide.wxml']=$gwx('./pages/index/guide.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead([".",[1],"iconfont { margin: ",[0,10]," auto; font-size: ",[0,50],"; }\n.",[1],"content { text-align: center; height: ",[0,400],"; }\nwx-image { width: 100%; height: 100%; }\n.",[1],"swiper { height: ",[0,400],"; }\n.",[1],"banner { width: 100%; }\n.",[1],"area { width: 98%; margin-top: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"item { width: 30%; border: 1px solid #ccc; background-color: #36BBFF; color: #FFFFFF; height: ",[0,150],"; text-align: center; padding-top: ",[0,30],"; border-radius: ",[0,10],"; margin-left: ",[0,10],"; -webkit-box-shadow: #365FFF; box-shadow: #365FFF; }\n.",[1],"item wx-image { width: ",[0,60],"; height: ",[0,60],"; }\n.",[1],"item wx-text { display: block; font-size: ",[0,30],"; }\n.",[1],"item.",[1],"other { background-color: #365FFF; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead([".",[1],"content { text-align: center; height: 100%; overflow: hidden; }\n.",[1],"input-group { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-bottom: ",[0,40],"; }\n.",[1],"logo { height: ",[0,200],"; width: ",[0,200],"; margin-top: ",[0,180],"; }\n.",[1],"logo-text { font-size: ",[0,50],"; color: #365fff; text-shadow: 1px 1px 1px #36bbff; }\n.",[1],"form-content { margin-top: ",[0,80],"; }\nwx-input { border-bottom: ",[0,2]," #dedede solid; display: inline-block; text-align: left; padding-left: ",[0,5],"; }\nwx-label { line-height: ",[0,32],"; padding-right: ",[0,20],"; }\nwx-button { width: 80%; margin-top: ",[0,100],"; border-radius: ",[0,50],"; font-size: 16px; color: #fff; background: -webkit-gradient(linear, left top, right top, from(#365fff), to(#36bbff)); background: -o-linear-gradient(left, #365fff, #36bbff); background: linear-gradient(to right, #365fff, #36bbff); }\n.",[1],"version { text-align: center; position: fixed; height: 30px; width: 100%; padding: ",[0,10]," 0; margin-bottom: ",[0,10],"; font-size: ",[0,22],"; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/report/column.wxss']=undefined;    
__wxAppCode__['pages/report/column.wxml']=$gwx('./pages/report/column.wxml');

__wxAppCode__['pages/report/other.wxss']=undefined;    
__wxAppCode__['pages/report/other.wxml']=$gwx('./pages/report/other.wxml');

__wxAppCode__['pages/report/quota.wxss']=undefined;    
__wxAppCode__['pages/report/quota.wxml']=$gwx('./pages/report/quota.wxml');

__wxAppCode__['pages/user/index.wxss']=undefined;    
__wxAppCode__['pages/user/index.wxml']=$gwx('./pages/user/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        plus.webview.postMessageToUniNView({
            type: 'UniWebviewReady-' + plus.webview.currentWebview().id
        }, '__uniapp__service');
})();
