function Transformation(){var C;var E;var D;var B;var G=function(){};var A=false;this.getXml=function(){return C};this.getXmlDocument=function(){return E};this.setXml=function(H){C=H;return this};this.getXslt=function(){return D};this.getXsltDocument=function(){return B};this.setXslt=function(H){D=H;return this};this.getCallback=function(){return G};this.setCallback=function(H){G=H;return this};this.transform=function(M){if(!browserSupportsXSLT()){return }var P=this;if(document.recalc){var I=F();var K=F();var O=function(){var R="complete";var Q="undefined";if(typeof document.all[I]!=Q&&document.all[I].readyState==R&&typeof document.all[K]!=Q&&document.all[K].readyState==R){window.setTimeout(function(){E=document.all[I].XMLDocument;B=document.all[K].XMLDocument;G(P);document.all[M].innerHTML=document.all[I].transformNode(document.all[K].XMLDocument)},50)}};var L=document.createElement("xml");L.onreadystatechange=O;L.id=I;L.src=C;var J=document.createElement("xml");J.onreadystatechange=O;J.id=K;J.src=D;document.body.insertBefore(L);document.body.insertBefore(J)}else{var H=new XMLHttpRequest();var N=new XMLHttpRequest();var O=function(){if(H.readyState==4&&N.readyState==4&&!A){E=H.responseXML;B=N.responseXML;var R;var S=new XSLTProcessor();if(typeof S.transformDocument=="function"){R=document.implementation.createDocument("","",null);S.transformDocument(E,B,R,null);var Q=new XMLSerializer().serializeToString(R);G(P);document.getElementById(M).innerHTML=Q}else{S.importStylesheet(B);R=S.transformToFragment(E,document);G(P);document.getElementById(M).innerHTML="";document.getElementById(M).appendChild(R)}A=true}};H.onreadystatechange=O;H.open("GET",C);H.send(null);N.onreadystatechange=O;N.open("GET",D);N.send(null)}};function F(){var H="id"+Math.round(Math.random()*100000);return H}}function browserSupportsXSLT(){var C=false;if(document.recalc){C=true}var A="undefined";if(typeof XMLHttpRequest!=A&&typeof XSLTProcessor!=A){var B=new XSLTProcessor();if(typeof B.transformDocument=="function"){C=typeof XMLSerializer!=A}else{C=true}}return C};