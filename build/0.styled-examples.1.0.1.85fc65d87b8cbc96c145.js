!function(e){function n(n){for(var r,c,l=n[0],i=n[1],u=n[2],p=0,m=[];p<l.length;p++)c=l[p],a[c]&&m.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(n);m.length;)m.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,l=1;l<t.length;l++){var i=t[l];0!==a[i]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},a={0:0},o=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var s=i;o.push([144,1]),t()}({142:function(e,n,t){e.exports=t.p+"284593a481b3167431452a5b164855e6.png"},143:function(e,n,t){e.exports=t.p+"7f2e321f9b47355888888262234e44ba.png"},144:function(e,n,t){t(145),e.exports=t(339)},339:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(138),c=t.n(o),l=t(28),i=t(45),u=t(2);function s(){var e=m(["\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 5px;\n    padding: 8px;\n    text-decoration: none;\n    color: #07a1d1;\n\n    &:hover {\n        color: #0051c3;\n    }\n"]);return s=function(){return e},e}function p(){var e=m(["\n    border-top: 1px solid gray;\n    padding-top: 15px;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    font-size: 20px;\n"]);return p=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var f=u.c.div(p()),d=Object(u.c)(i.b)(s()),b={en:{home:"Landing page",simple:"Simple component",tags:"HTML tags as base for components",extend:"Extending styles",sassy:"Sassy component",animated:"Animated component",responsive:"Responsive component",attributes:"HTML attributes",props:"Component with props",global:"Global style component",theme:"Theming"},fr:{home:"Page d'accueil",simple:"Simple composant",tags:"Les tags HTML comme base pour les composants",extend:"Etendre les styles",sassy:"Composant utilisant Sass",animated:"Composant animé",responsive:"Composant pour les mobiles",attributes:"Attributs HTML",props:"Composant avec propriétés",global:"Composant avec des styles globaux",theme:"Thèmes"}},g=Object(l.g)(function(e){var n=e.location,t=(void 0===n?{}:n).pathname,r=(void 0===t?"":t).substring(1,3)||"en";return console.log({language:r}),a.a.createElement(f,null,a.a.createElement(d,{to:"/".concat(r)},b[r].home),a.a.createElement(d,{to:"/".concat(r,"/simple")},b[r].simple),a.a.createElement(d,{to:"/".concat(r,"/tags")},b[r].tags),a.a.createElement(d,{to:"/".concat(r,"/extend")},b[r].extend),a.a.createElement(d,{to:"/".concat(r,"/sassy")},b[r].sassy),a.a.createElement(d,{to:"/".concat(r,"/animated")},b[r].animated),a.a.createElement(d,{to:"/".concat(r,"/responsive")},b[r].responsive),a.a.createElement(d,{to:"/".concat(r,"/attributes")},b[r].attributes),a.a.createElement(d,{to:"/".concat(r,"/props")},b[r].props),a.a.createElement(d,{to:"/".concat(r,"/global")},b[r].global),a.a.createElement(d,{to:"/".concat(r,"/theme")},b[r].theme))}),h=t(142),v=t.n(h),y=t(143),E=t.n(y);function x(){var e=j(["\n    margin: 2px;\n"]);return x=function(){return e},e}function w(){var e=j(["\n    border-bottom: 1px solid gray;\n    margin-bottom: 40px;\n    padding: 50px;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: center;\n"]);return w=function(){return e},e}function O(){var e=j(["\n    min-height: calc(100vh - 230px);\n"]);return O=function(){return e},e}function j(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var k=u.c.div(O()),S=u.c.div(w()),z=u.c.img(x()),C=Object(l.g)(function(e){var n=e.location,t=void 0===n?{}:n,r=e.children,o=t.pathname,c=(void 0===o?"":o).substring(3)||"";return console.log({targetWithoutLanguage:c}),a.a.createElement(k,null,a.a.createElement(S,null,a.a.createElement("div",null,"Styled Components"),a.a.createElement("div",null,a.a.createElement(i.b,{to:"/fr".concat(c)},a.a.createElement(z,{src:v.a})),a.a.createElement(i.b,{to:"/en".concat(c)},a.a.createElement(z,{src:E.a})))),r)}),T={en:{hi:a.a.createElement("p",null,"Hello, I'm ",a.a.createElement("a",{href:"https://connect.yvesgurcan.com"},"Yves"),"!"),description:a.a.createElement("p",null,"Click on the links at the bottom of the page to see examples of styled components."),repo:a.a.createElement("p",null,a.a.createElement("small",null,a.a.createElement("a",{href:"https://github.com/yvesgurcan/styled-examples"},"Source code")))},fr:{hi:a.a.createElement("p",null,"Bonjour, je m'appelle"," ",a.a.createElement("a",{href:"https://connect.yvesgurcan.com/fr"},"Yves")," !"),description:a.a.createElement("p",null,"Cliquez sur les liens en bas de cette page pour voir des examples qui utilisent ",a.a.createElement("i",null,"styled components"),"."),repo:a.a.createElement("p",null,a.a.createElement("small",null,a.a.createElement("a",{href:"https://github.com/yvesgurcan/styled-examples"},"Code source")))}},P=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,T[t].hi,T[t].description,T[t].repo)},A={en:a.a.createElement("div",null,"Uh oh! Nothing to see here."),fr:a.a.createElement("div",null,"Oh non ! Il n'y a rien à voir ici.")},_=function(e){var n=e.language;return A[void 0===n?"en":n]};function q(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    // It looks just like CSS!!!\n    border: 1px solid grey;\n    padding: 20px;\n    margin: 20px;\n    background: lightgrey;\n"]);return q=function(){return e},e}var B=u.c.div(q()),M={en:a.a.createElement("p",null,"I use the styled-components library!"),fr:a.a.createElement("p",null,"J'utilise ",a.a.createElement("i",null,"styled-components")," !")},N=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,a.a.createElement(B,null,M[t]))};function L(){var e=U([""]);return L=function(){return e},e}function H(){var e=U([""]);return H=function(){return e},e}function F(){var e=U([""]);return F=function(){return e},e}function I(){var e=U([""]);return I=function(){return e},e}function R(){var e=U([""]);return R=function(){return e},e}function W(){var e=U([""]);return W=function(){return e},e}function U(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Y=u.c.h1(W()),J=u.c.h2(R()),G=u.c.a(I()),V=u.c.p(F()),D=u.c.div(H()),Q=u.c.input(L()),K={en:{h1:a.a.createElement(Y,null,"This styled component uses a h1 tag as a base."),h2:a.a.createElement(J,null,"All HTML tags can be used as a base for your styled component."),a:a.a.createElement(G,{title:"As you can see, this is a link.",href:"https://www.google.com"},"Props are still passed to the HTML tag like it would without the styled component."),p:a.a.createElement(V,null,"This is a good old paragraph wrapped into a styled component as well."),div:a.a.createElement(D,null),input:a.a.createElement(Q,{placeholder:"Hi! I'm an input component."})},fr:{h1:a.a.createElement(Y,null,"Ce composant utilise le tag h1 comme base."),h2:a.a.createElement(J,null,"Tous les tags HTML peuvent être utilisés pour vos composants."),a:a.a.createElement(G,{title:"Ceci est un lien.",href:"https://www.google.fr"},"Les propriétés sont transmises au composant comme d'habitude."),p:a.a.createElement(V,null,"C'est un bon vieux paragraphe en guise de composant."),div:a.a.createElement(D,null),input:a.a.createElement(Q,{placeholder:"Salut! Je suis un composant qui accepte la saisie de données."})}},X=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,K[t].h1,K[t].h2,K[t].a,K[t].p,K[t].img,K[t].div,K[t].input)};function Z(){var e=ne(["\n    border-color: #bcc9cc;\n    background: #efefef;\n"]);return Z=function(){return e},e}function $(){var e=ne(["\n    border-color: #0371b1;\n    background: #07a1d1;\n"]);return $=function(){return e},e}function ee(){var e=ne(["\n    outline: none;\n    appearance: none;\n    cursor: pointer;\n    padding: 20px;\n    border: 2px solid black;\n    margin: 10px;\n    border-radius: 15px;\n    font-size: 20px;\n\n    &:hover {\n        filter: brightness(0.85);\n    }\n\n    &:active {\n        filter: brightness(1.05);\n    }\n"]);return ee=function(){return e},e}function ne(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var te=u.c.button(ee()),re=Object(u.c)(te)($()),ae=Object(u.c)(te)(Z()),oe={en:{base:"Base Button",primary:"Primary Button",secondary:"Secondary Button"},fr:{base:"Bouton de base",primary:"Bouton primaire",secondary:"Bouton secondaire"}},ce=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,a.a.createElement(te,null,oe[t].base),a.a.createElement(re,null,oe[t].primary),a.a.createElement(ae,null,oe[t].secondary))};function le(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    // Nested selector\n    li {\n        background: rgb(0, 180, 240);\n        padding: 5px;\n        margin: 2px;\n\n        // Only applies to li.grey\n        &.grey {\n            background: grey;\n        }\n\n        // Applies to any element with that className in li\n        .orange {\n            background: orange;\n        }\n    }\n"]);return le=function(){return e},e}var ie={en:{descriptiopn:'You can nest rules for your CSS selectors in your styled components, use the "&" reference like you would in SASS.',list1:"This is a list item.",list2:"This item, like the first one, is styled from the parent component (a ul tag wrapped in a styled component).",list3:'This item has a "grey" className. The appropriate scoped styles are applied to it.',list4:"Another list item.",list5:'This is not grey despite the className because "grey" only applies to li, not divs.',list6:'This, however, is orange, because there\'s no "&" on the rule applied to the "orange" className.',list7:"This list item is neither grey nor orange, despite its className. It's outside of the scope of the styled component."},fr:{descriptiopn:'Vous pouvez avoir plusieurs niveaux de règles pour vos sélecteurs CSS dans vos composants et vous pouvez utiliser "&" comme vous le feriez avec SASS.',list1:"C'est un item de la liste.",list2:"Cet item, comme le premier, est stylisé par le composant parent (un tag ul dans un composant).",list3:'Cet item a la classe "grey". Le style dans le cadre de ce composant est appliqué.',list4:"Un autre item de la liste.",list5:"Cet item n'est pas gris malgré la classe car \"grey\" ne s'applique qu'au tag li, pas au tag div.",list6:'Cet item, en revanche, est orange, car il n\' y a pas de "&" dans la règle qui s\'applique à la classe "orange".',list7:"Ce dernier item est ni gris ni orange, malgré ses classes. Cet item est en dehors du cadre du composant."}},ue=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,a.a.createElement("div",null,ie[t].description),a.a.createElement(se,null,a.a.createElement("li",null,ie[t].list1),a.a.createElement("li",null,ie[t].list2),a.a.createElement("li",{className:"grey"},ie[t].list3),a.a.createElement("li",null,ie[t].list4,a.a.createElement("div",{className:"grey"},ie[t].list5),a.a.createElement("div",{className:"orange"},ie[t].list6))),a.a.createElement("ul",null,a.a.createElement("li",{className:"grey orange"},ie[t].list7)))},se=u.c.ul(le());function pe(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  // You can go crazy on the animation stuff! No need for external libraries.\n  @keyframes bounce {\n    14% {\n      background: red;\n      left: 50%;\n      top: calc(100% - 150px);\n    }\n    26% {\n      background: green;\n      left: 70vw;\n      top: 0;\n    }\n    38% {\n      background: brown;\n      left: calc(100% - 150px);\n      top: 80%;\n    }\n    40% {\n      background: blue;\n      left: 85%;\n      top: calc(100% - 150px);\n    }\n    52% {\n      background: pink;\n      left: 65%;\n      top: 0;\n    }\n    64% {\n      background: yellow;\n      left: 45%;\n      top: calc(100% - 150px);\n    }\n    76% {\n      background: grey;\n      left: 30%;\n      top: 0;\n    }\n    88% {\n      background: orange;\n      left: 15%;\n      top: calc(100% - 150px);\n    }\n  }\n\n  width: 150px;\n  height: 150px;\n  background: purple;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  animation: bounce 10s infinite linear;\n"]);return pe=function(){return e},e}var me=u.c.div(pe()),fe=function(){return a.a.createElement(me,null)};function de(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    padding: 20px;\n    background: rgb(230, 230, 230);\n    border: 1px solid black;\n    font-size: 18px;\n\n    width: 100%;\n\n    // You can define your component-specific breakpoints right here\n    @media (min-width: 768px) {\n        width: 50%;\n    }\n\n    @media (min-width: 1024px) {\n        width: 45%;\n    }\n\n    @media (min-width: 1200px) {\n        width: 25%;\n    }\n"]);return de=function(){return e},e}var be=u.c.input(de()),ge={en:{breakingpoints:a.a.createElement("p",null,"This input component has breaking points. Its width will change at 768px, 1024px, and 1200px."),value:"Some value"},fr:{breakingpoints:a.a.createElement("p",null,"Ce composant a plusieurs ",a.a.createElement("i",null,"breaking points"),". Sa taille change lorsque l'écran atteint 768px, 1024px, et 1200px."),value:"Quelque chose"}},he=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement("div",null,ge[t].breakingpoints,a.a.createElement(be,{value:ge[t].value}))};function ve(){var e=we([""]);return ve=function(){return e},e}function ye(){var e=we([""]);return ye=function(){return e},e}function Ee(){var e=we([""]);return Ee=function(){return e},e}function xe(){var e=we([""]);return xe=function(){return e},e}function we(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Oe=u.c.input.attrs({type:"text"})(xe()),je=u.c.input.attrs({type:"checkbox"})(Ee()),ke=u.c.input.attrs({type:"radio"})(ye()),Se=u.c.input.attrs({type:"file"})(ve()),ze={en:a.a.createElement("p",null,"You can set default attributes to your styled components."),fr:a.a.createElement("p",null,"Vous pouvez définir les attributs par défaut de vos composants.")},Ce=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,ze[t],a.a.createElement(Oe,null),a.a.createElement(je,null),a.a.createElement(ke,null),a.a.createElement(Se,null))};function Te(e){return(Te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qe(e,n){return(qe=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function Be(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Me(){var e=Ie(["\n    // The explanation only appears if the selected answer is the right answer.\n    display: ",";\n"]);return Me=function(){return e},e}function Ne(){var e=Ie(["\n    border: 1px solid ",";\n    background: ",";\n"]);return Ne=function(){return e},e}function Le(){var e=Ie(['\n    // The color of the border and the background depend on the value of the "correct" prop.\n    border: 1px solid ',";\n    background: ",";\n"]);return Le=function(){return e},e}function He(){var e=Ie(["\n    margin: 30px;\n    padding: 20px;\n    cursor: pointer;\n    border-radius: 18px;\n"]);return He=function(){return e},e}function Fe(){var e=Ie(["\n    padding-top: 15px;\n"]);return Fe=function(){return e},e}function Ie(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var Re=u.c.div(Fe()),We=u.c.div(He()),Ue=Object(u.c)(We)(Le(),function(e){return e.correct?"green":"black"},function(e){return e.correct&&"lightgreen"}),Ye=Object(u.c)(We)(Ne(),function(e){return e.wrong?"red":"black"},function(e){return!0===e.wrong&&"rgb(255, 150, 150)"}),Je=u.c.p(Me(),function(e){return 2006===e.selectedAnswer?"block":"none"}),Ge={en:{question:"In what year did Amazon launch AWS?",feedback:"Correct! AWS was launched on March 2006."},fr:{question:"En quelle année Amazon a-t-il lancé AWS ?",feedback:"Bonne réponse ! AWS a été lancé en mars 2006."}},Ve=function(e){function n(){var e,t,r,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return r=this,a=(e=Ae(n)).call.apply(e,[this].concat(c)),t=!a||"object"!==Te(a)&&"function"!=typeof a?_e(r):a,Be(_e(t),"state",{selectedAnswer:!1}),Be(_e(t),"selectAnswer",function(e){return t.setState({selectedAnswer:e})}),t}var t,o,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&qe(e,n)}(n,r["Component"]),t=n,(o=[{key:"render",value:function(){var e=this,n=this.props.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,a.a.createElement(Re,null,Ge[t].question),[2016,1995,2008,2006].map(function(n){return 2006===n?a.a.createElement(Ue,{key:n,className:n,correct:2006===n&&2006===e.state.selectedAnswer,onClick:function(){return e.selectAnswer(n)}},n):a.a.createElement(Ye,{key:n,className:n,wrong:!1!==e.state.selectedAnswer&&e.state.selectedAnswer===n,onClick:function(){return e.selectAnswer(n)}},n)}),a.a.createElement(Je,{selectedAnswer:this.state.selectedAnswer},Ge[t].feedback),a.a.createElement("div",null,"State:"),a.a.createElement("code",null,JSON.stringify(this.state)))}}])&&Pe(t.prototype,o),c&&Pe(t,c),n}();function De(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  body {\n    background: black;\n    color: white;\n  }\n"]);return De=function(){return e},e}var Qe=Object(u.b)(De()),Ke={en:a.a.createElement("p",null,"This page uses createGlobalStyle to set styles on the body of the document and change the background and text color."),fr:a.a.createElement("p",null,"Cette page utilise createGlobalStyle pour définir les styles de ce document et change la couleur de fond et du texte.")},Xe=function(e){var n=e.language,t=void 0===n?"en":n;return a.a.createElement(r.Fragment,null,a.a.createElement(Qe,null),Ke[t])};function Ze(e){return(Ze="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function en(e){return(en=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function nn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tn(e,n){return(tn=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function rn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function an(){var e=pn(["\n    background: ",";\n    overflow: scroll;\n    font-size: 18px;\n    padding: 12px;\n"]);return an=function(){return e},e}function on(){var e=pn([""]);return on=function(){return e},e}function cn(){var e=pn(["\n    margin: 10px;\n"]);return cn=function(){return e},e}function ln(){var e=pn(["\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: 10px;\n    border-bottom: 2px solid black;\n    justify-content: space-around;\n"]);return ln=function(){return e},e}function un(){var e=pn(["\n    color: ",";\n"]);return un=function(){return e},e}function sn(){var e=pn(["\n    padding: 20px;\n    // Use props.theme to set a rule depending on the selected theme\n    background: ",";\n    margin-bottom: 50px;\n"]);return sn=function(){return e},e}function pn(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var mn={name:"navy theme",background:"steelblue",linkColor:"lightblue",codeBlockBackground:"lightgrey"},fn={name:"summer theme",background:"orange",linkColor:"yellow",codeBlockBackground:"gold"},dn=u.c.div(sn(),function(e){return e.theme.background}),bn=u.c.a(un(),function(e){return e.theme.linkColor}),gn=u.c.nav(ln()),hn=Object(u.c)(bn)(cn()),vn=u.c.section(on()),yn=u.c.pre(an(),function(e){return e.theme.codeBlockBackground}),En={en:{current:"Current theme",switch:"Switch style"},fr:{current:"Thème",switch:"Changer de thème"}},xn=function(e){function n(){var e,t,r,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return r=this,a=(e=en(n)).call.apply(e,[this].concat(c)),t=!a||"object"!==Ze(a)&&"function"!=typeof a?nn(r):a,rn(nn(t),"state",{currentTheme:mn}),rn(nn(t),"changeTheme",function(){t.state.currentTheme.name===mn.name?t.setState({currentTheme:fn}):t.setState({currentTheme:mn})}),t}var t,o,c;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&tn(e,n)}(n,r["Component"]),t=n,(o=[{key:"render",value:function(){var e=this.props.language,n=void 0===e?"en":e;return a.a.createElement(r.Fragment,null,a.a.createElement("div",null,a.a.createElement("span",null,En[n].current,":")," ",a.a.createElement("b",null,this.state.currentTheme.name)),a.a.createElement(ae,{onClick:this.changeTheme},En[n].switch),a.a.createElement(u.a,{theme:this.state.currentTheme},a.a.createElement(dn,null,a.a.createElement(gn,null,a.a.createElement(hn,null,"Home"),a.a.createElement(hn,null,"Pricing"),a.a.createElement(hn,null,"About"),a.a.createElement(hn,null,"Contact")),a.a.createElement(vn,null,a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"," ",a.a.createElement(bn,{href:""},"incididunt ut labore et dolore magna")," ","aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),a.a.createElement("p",null,"A block of code:"),a.a.createElement(yn,null,"if (!rowIsEmpty) {\n    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {\n        const horizontalWinner = connectedHorizontally(j, row);\n            return horizontalWinner;\n    }\n}"),a.a.createElement("p",null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))}}])&&$e(t.prototype,o),c&&$e(t,c),n}();function wn(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    @font-face {\n        font-family: 'Museo Sans Rounded';\n        src: url(./assets/MuseoSansRounded-500-webfont.woff2);\n    }\n\n    font-family: Museo Sans Rounded;\n    font-size: 30px;\n    padding-left: 60px;\n    padding-right: 60px;\n\n    input {\n        margin: 10px;\n    }\n"]);return wn=function(){return e},e}t.d(n,"Root",function(){return On});var On=u.c.div(wn());c.a.render(a.a.createElement(i.a,null,a.a.createElement(On,null,a.a.createElement(C,null,a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/en/simple",exact:!0,component:N}),a.a.createElement(l.b,{path:"/fr/simple",exact:!0,render:function(){return a.a.createElement(N,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/tags",exact:!0,component:X}),a.a.createElement(l.b,{path:"/fr/tags",exact:!0,render:function(){return a.a.createElement(X,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/extend",exact:!0,component:ce}),a.a.createElement(l.b,{path:"/fr/extend",exact:!0,render:function(){return a.a.createElement(ce,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/sassy",exact:!0,component:ue}),a.a.createElement(l.b,{path:"/fr/sassy",exact:!0,render:function(){return a.a.createElement(ue,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/animated",exact:!0,component:fe}),a.a.createElement(l.b,{path:"/fr/animated",exact:!0,render:function(){return a.a.createElement(fe,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/responsive",exact:!0,component:he}),a.a.createElement(l.b,{path:"/fr/responsive",exact:!0,render:function(){return a.a.createElement(he,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/attributes",exact:!0,component:Ce}),a.a.createElement(l.b,{path:"/fr/attributes",exact:!0,render:function(){return a.a.createElement(Ce,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/props",exact:!0,component:Ve}),a.a.createElement(l.b,{path:"/fr/props",exact:!0,render:function(){return a.a.createElement(Ve,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/global",exact:!0,component:Xe}),a.a.createElement(l.b,{path:"/fr/global",exact:!0,render:function(){return a.a.createElement(Xe,{language:"fr"})}}),a.a.createElement(l.b,{path:"/en/theme",exact:!0,component:xn}),a.a.createElement(l.b,{path:"/fr/theme",exact:!0,render:function(){return a.a.createElement(xn,{language:"fr"})}}),a.a.createElement(l.b,{path:"/",exact:!0,render:function(){return a.a.createElement(l.a,{to:"/en"})}}),a.a.createElement(l.b,{path:"/en",exact:!0,component:P}),a.a.createElement(l.b,{path:"/fr",exact:!0,render:function(){return a.a.createElement(P,{language:"fr"})}}),a.a.createElement(l.b,{path:"/fr/",render:function(){return a.a.createElement(_,{language:"fr"})}}),a.a.createElement(l.b,{path:"/",component:_}))),a.a.createElement(g,null))),document.getElementById("app"))}});