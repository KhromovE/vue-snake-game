(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27774ac0"],{"11e9":function(e,t,r){var n=r("52a7"),o=r("4630"),a=r("6821"),i=r("6a99"),c=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?u:function(e,t){if(e=a(e),t=i(t,!0),s)try{return u(e,t)}catch(r){}if(c(e,t))return o(!n.f.call(e,t),e[t])}},4643:function(e,t,r){"use strict";r.r(t);var n=r("be94"),o=r("2f62"),a=r("8785"),i=r("9c56");function c(){var e=Object(a["a"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return c=function(){return e},e}var s,u=i["a"].main(c()),d=(r("c5f6"),r("ade3")),l=r("f121"),f=r("64f8");function p(){var e=Object(a["a"])(["\n  border-left: 1px solid var(--border-color);\n  &:last-child {\n    border-right: 1px solid var(--border-color);\n  }\n  height: ","px;\n  width: ","px;\n  background-color: ",";\n"]);return p=function(){return e},e}var b=(s={},Object(d["a"])(s,f["a"].EMPTY_CELL,"white"),Object(d["a"])(s,f["a"].SNAKE_CELL,"var(--bg-snake-cell)"),Object(d["a"])(s,f["a"].FOOD_CELL,"var(--bg-food-cell)"),s),v=Object(i["a"])("section",{type:Number})(p(),l["a"],l["a"],function(e){var t=e.type;return b[t]});function h(){var e=Object(a["a"])(["\n  font-size: 20px;\n  text-align: center;\n  padding: 12px 0;\n  background-color: var(--bg-additional-block);\n  border-left: 1px solid var(--border-color);\n  border-right: 1px solid var(--border-color);\n  border-top: 1px solid var(--border-color);\n  border-top-right-radius: var(--border-radius);\n  border-top-left-radius: var(--border-radius);\n"]);return h=function(){return e},e}var g=i["a"].header(h()),y={name:"Field",props:{title:{type:String,required:!0},value:{type:Number,required:!0}},render:function(){var e=arguments[0];return e("div",[this.title,": ",this.value])}};function m(){var e=Object(a["a"])(["\n  border-top: 1px solid var(--border-color);\n  display: flex;\n\n  &:last-child {\n    border-bottom: 1px solid var(--border-color);\n  }\n"]);return m=function(){return e},e}var x=i["a"].section(m()),E={name:"Controls",props:{clickButton:{type:Function,required:!0}},created:function(){this.onKeyDown=this.onKeyDown.bind(this),document.addEventListener("keydown",this.onKeyDown)},destroyed:function(){document.removeEventListener("keydown",this.onKeyDown)},methods:{onKeyDown:function(e){var t=e.keyCode;this.clickButton({keyCode:t})}},render:function(){var e=arguments[0];return e("div")}};function k(){var e=Object(a["a"])(["\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 12px;\n  background-color: var(--bg-additional-block);\n  border-left: 1px solid var(--border-color);\n  border-right: 1px solid var(--border-color);\n  border-bottom: 1px solid var(--border-color);\n  border-bottom-right-radius: var(--border-radius);\n  border-bottom-left-radius: var(--border-radius);\n"]);return k=function(){return e},e}var O=i["a"].footer(k()),N={name:"Footer",props:{level:{type:Number,required:!0},score:{type:Number,required:!0}},render:function(){var e=arguments[0];return e(O,[e(y,{attrs:{title:"Level",value:this.level}}),e(y,{attrs:{title:"Score",value:this.score}})])}};function w(){var e=Object(a["a"])(["\n  font-size: 20px;\n  text-align: center;\n"]);return w=function(){return e},e}function _(){var e=Object(a["a"])(["\n  font-size: 28px;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]);return _=function(){return e},e}function j(){var e=Object(a["a"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  background-color: rgba(255, 255, 255, 0.7);\n"]);return j=function(){return e},e}var A=i["a"].div(j()),I=i["a"].span(_()),S=i["a"].span(w()),T={name:"ScreenLocker",props:{stage:{type:String,required:!0}},computed:{getData:function(){switch(this.stage){case f["d"].CREATED:return{title:"NEW GAME",addon:"Press <space> for start"};case f["d"].GAME_OVER:return{title:"GAME OVER",addon:"Press <space> to start a new game"};case f["d"].PAUSED:return{title:"GAME PAUSED",addon:"Press <space> for resume"};case f["d"].WON:return{title:"YOU WON",addon:"Press <space> to start a new game"}}}},render:function(){var e=arguments[0];if(this.stage===f["d"].STARTED)return null;var t=this.getData,r=t.title,n=t.addon;return e(A,[e(I,[r]),e(S,[n])])}};function D(){var e=Object(a["a"])(["\n  display: inline-block;\n  position: relative;\n"]);return D=function(){return e},e}function F(){var e=Object(a["a"])(["\n  display: flex;\n  flex-direction: column;\n"]);return F=function(){return e},e}var L=i["a"].div(F()),P=i["a"].div(D()),q={name:"GameBoard",props:{board:{type:Array,required:!0},clickButton:{type:Function,required:!0},level:{type:Number,required:!0},score:{type:Number,required:!0},stage:{type:String,required:!0}},render:function(){var e=arguments[0];return e(L,[e(g,["Snake Game"]),e(P,[e(T,{attrs:{stage:this.stage}}),this.board.map(function(t,r){return e(x,{key:"row-".concat(r)},[t.map(function(t,n){return e(v,{key:"cell-".concat(n,"-").concat(r),attrs:{type:t}})})])})]),e(N,{attrs:{level:this.level,score:this.score}}),e(E,{attrs:{clickButton:this.clickButton}})])}},C=r("d401"),G={name:"Game",mounted:function(){this.setTick(this.level)},destroyed:function(){clearInterval(this.tick)},computed:{board:function(){return this.$store.getters.createBoard},level:function(){var e=this.$store.state.game.level;return this.setTick(e),this.$store.state.game.level},stage:function(){return this.$store.state.game.stage},score:function(){return this.$store.state.game.score}},methods:Object(n["a"])({},Object(o["b"])([C["b"],C["a"]]),{setTick:function(e){var t=this;clearInterval(this.tick),this.tick=setInterval(function(){t.stage===f["d"].STARTED&&t[C["b"]]()},l["b"]-l["d"]*e)}}),render:function(){var e=arguments[0];return e(u,[e(q,{attrs:{board:this.board,clickButton:this[C["a"]],level:this.level,score:this.score,stage:this.stage}})])}};r.d(t,"Game",function(){return G})},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"5dbc":function(e,t,r){var n=r("d3f4"),o=r("8b97").set;e.exports=function(e,t,r){var a,i=t.constructor;return i!==r&&"function"==typeof i&&(a=i.prototype)!==r.prototype&&n(a)&&o&&o(e,a),e}},"8b97":function(e,t,r){var n=r("d3f4"),o=r("cb7c"),a=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,r){return a(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:a}},9093:function(e,t,r){var n=r("ce10"),o=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},aa77:function(e,t,r){var n=r("5ca1"),o=r("be13"),a=r("79e5"),i=r("fdef"),c="["+i+"]",s="​",u=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),l=function(e,t,r){var o={},c=a(function(){return!!i[e]()||s[e]()!=s}),u=o[e]=c?t(f):i[e];r&&(o[r]=u),n(n.P+n.F*c,"String",o)},f=l.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(d,"")),e};e.exports=l},c5f6:function(e,t,r){"use strict";var n=r("7726"),o=r("69a8"),a=r("2d95"),i=r("5dbc"),c=r("6a99"),s=r("79e5"),u=r("9093").f,d=r("11e9").f,l=r("86cc").f,f=r("aa77").trim,p="Number",b=n[p],v=b,h=b.prototype,g=a(r("2aeb")(h))==p,y="trim"in String.prototype,m=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():f(t,3);var r,n,o,a=t.charCodeAt(0);if(43===a||45===a){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,s=t.slice(2),u=0,d=s.length;u<d;u++)if(i=s.charCodeAt(u),i<48||i>o)return NaN;return parseInt(s,n)}}return+t};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof b&&(g?s(function(){h.valueOf.call(r)}):a(r)!=p)?i(new v(m(t)),r,b):m(t)};for(var x,E=r("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;E.length>k;k++)o(v,x=E[k])&&!o(b,x)&&l(b,x,d(v,x));b.prototype=h,h.constructor=b,r("2aba")(n,p,b)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-27774ac0.4fdbd900.js.map