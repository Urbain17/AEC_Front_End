(this.webpackJsonpprojetfinal=this.webpackJsonpprojetfinal||[]).push([[0],{52:function(e,t,a){e.exports=a(76)},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=a(11),u=a(12),i=a(14),m=a(13),s=a(44),p=a(87),d=a(19),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{lg:"4",className:"mt-4"},r.a.createElement(p.a,null,r.a.createElement(p.a.Img,{variant:"top",src:this.props.image,style:{width:"100%",height:250}}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,r.a.createElement(d.b,{to:"TypeVoiture/"+this.props.marque+"?id="+this.props.idVoiture},this.props.marque)),r.a.createElement(p.a.Text,null,r.a.createElement("div",null,"kilometrage: ",this.props.kilometrage),r.a.createElement("div",null,"ann\xe9e: ",this.props.annee),r.a.createElement("div",null,"prix: ",this.props.prix))))))}}]),a}(r.a.Component),E=a(83),f=a(84),g=(r.a.Component,a(9)),b=a.n(g),v=a(24),y=a(27),j=a(79),x=a(80),k=a(21),O="https://crudcrud.com/api/e96539309a7a41dea1777929170b1ddf/autos/",w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={image:""},n.handleAjouter=n.handleAjouter.bind(Object(y.a)(n)),n.ajouterAuto=n.ajouterAuto.bind(Object(y.a)(n)),n.handleImage=n.handleImage.bind(Object(y.a)(n)),n}return Object(u.a)(a,[{key:"ajouterAuto",value:function(){var e=Object(v.a)(b.a.mark((function e(t,a,n,r,l){var o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,a,n,r,l),e.next=4,fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({marque:t,image:a,kilometrage:n,annee:r,prix:l})});case 4:if(!(o=e.sent).ok){e.next=12;break}return e.next=8,o.json();case 8:return c=e.sent,this.props.history.push("/"),k.b.success("Ajout auto "+t),e.abrupt("return",c);case 12:throw new Error("Request failed!");case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,a,n,r,l){return e.apply(this,arguments)}}()},{key:"handleAjouter",value:function(e){e.preventDefault();var t=document.getElementById("marque").value,a=document.getElementById("image").value,n=document.getElementById("kilometrage").value,r=document.getElementById("annee").value,l=document.getElementById("prix").value;this.ajouterAuto(t,a,n,r,l)}},{key:"handleImage",value:function(e){var t=document.getElementById("image").value;this.setState({image:t})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"marque"},r.a.createElement(f.a.Label,null,"Marque"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Marque"})),r.a.createElement(f.a.Group,{controlId:"image"},r.a.createElement(f.a.Label,null,"Image"),r.a.createElement(f.a.Control,{type:"text",placeholder:"image",onBlur:this.handleImage})),""!==this.state.image&&r.a.createElement(j.a,{src:this.state.image,rounded:!0,width:"125"}),r.a.createElement(f.a.Group,{controlId:"kilometrage"},r.a.createElement(f.a.Label,null,"kilometrage"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Kilometrage"})),r.a.createElement(f.a.Group,{controlId:"annee"},r.a.createElement(f.a.Label,null,"annee"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Annee"})),r.a.createElement(f.a.Group,{controlId:"prix"},r.a.createElement(f.a.Label,null,"Prix"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Prix"})),r.a.createElement(x.a,{variant:"primary",type:"submit",onClick:this.handleAjouter},"Soumettre")))}}]),a}(r.a.Component),I=a(28),C=a(82),q=a(81),B=a(46),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.Roll,{left:!0},r.a.createElement(q.a,null,r.a.createElement("h1",null,"Bienvenue sur le site de vente des autos"))))}}]),a}(r.a.Component);var S=function(){var e=Object(n.useState)([]),t=Object(I.a)(e,2),a=t[0],l=t[1];function o(){return(o=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,l(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[a.join(",")]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("h1",null,"Affichage de la liste de toutes les autos"),r.a.createElement(C.a,null,a.map((function(e,t){return r.a.createElement(h,{idVoiture:e._id,marque:e.marque,key:e.marque+e._id,image:e.image,prix:e.prix,kilometrage:e.kilometrage,annee:e.annee})}))))},G=a(6),L=a(85),T=a(86),V=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{bg:"dark",variant:"dark"},r.a.createElement(L.a.Brand,{href:"/"},"Projet final"),r.a.createElement(T.a,{className:"mr-auto decormenu"},r.a.createElement(d.c,{exact:!0,to:"/"},"Accueil")," ","  |  ",r.a.createElement(d.c,{to:"/Ajouter"},"Ajouter une auto")," ")),r.a.createElement("br",null))}}]),a}(r.a.Component);var P=function(e){var t=Object(n.useState)({marque:"",image:"",kilometrage:"",annee:"",prix:""}),a=Object(I.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(e.location.search.substring(4,e.location.search.length)),u=Object(I.a)(c,2),i=u[0],m=(u[1],Object(n.useState)("")),s=Object(I.a)(m,2),p=s[0],d=s[1];function h(){return(h=Object(v.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O+i);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,o(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function E(){return(E=Object(v.a)(b.a.mark((function t(a,n,r,l,o){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(O+i,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({marque:a,image:n,kilometrage:r,annee:l,prix:o})});case 3:if(!(c=t.sent).ok){t.next=8;break}return e.history.push("/"),k.b.success("Modification de l'auto"+a),t.abrupt("return",c);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function g(){return(g=Object(v.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(O+i,{method:"delete"});case 3:if(!(a=t.sent).ok){t.next=8;break}return e.history.push("/"),k.b.error("Supression de l'auto "),t.abrupt("return",a);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Group,{controlId:"marque"},r.a.createElement(f.a.Label,null,"Marque"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Marque",defaultValue:l.marque})),r.a.createElement(f.a.Group,{controlId:"image"},r.a.createElement(f.a.Label,null,"Image"),r.a.createElement(f.a.Control,{type:"text",placeholder:"image",onBlur:function(e){var t=document.getElementById("image").value;d(t)},defaultValue:l.image})),""!==p&&r.a.createElement(j.a,{src:p,rounded:!0,width:"125"}),r.a.createElement(f.a.Group,{controlId:"kilometrage"},r.a.createElement(f.a.Label,null,"kilometrage"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Kilometrage",defaultValue:l.kilometrage})),r.a.createElement(f.a.Group,{controlId:"annee"},r.a.createElement(f.a.Label,null,"annee"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Annee",defaultValue:l.annee})),r.a.createElement(f.a.Group,{controlId:"prix"},r.a.createElement(f.a.Label,null,"Prix"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Prix",defaultValue:l.prix})),r.a.createElement(x.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),function(e,t,a,n,r){E.apply(this,arguments)}(document.getElementById("marque").value,document.getElementById("image").value,document.getElementById("kilometrage").value,document.getElementById("annee").value,document.getElementById("prix").value)}},"Soumettre")),r.a.createElement("p",{className:"btn btn-danger mt-5",onClick:function(){return g.apply(this,arguments)}},"Supprimer auto"))},F=(a(73),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:"https://cdn.dribbble.com/users/1592487/screenshots/6678531/404.png",width:"1400px"}))}}]),a}(r.a.Component));var M=function(){return r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(k.a,{autoClose:3e3,hideProgressBar:!0}),r.a.createElement(V,null),r.a.createElement(G.c,null,r.a.createElement(G.a,{path:"/",exact:!0,component:S}),r.a.createElement(G.a,{path:"/ajouter",component:w}),r.a.createElement(G.a,{path:"/TypeVoiture/:marque",component:P}),r.a.createElement(G.a,{component:F})))))};a(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(75);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.19aecd25.chunk.js.map