// The original Trio Javascripts were written by
// Kurt Grigg (kurt.grigg@virgin.net), http://freespace.virgin.net/kurt.grigg/
// Merged and adopted for W3C DOM in Internet Explorer 5.x am Netscape 6.x by
// Stefan Kuhn (stefan@come2kuhn.de), www.come2kuhn.de

// [CONFIGURATION]
var effekt	= 1;	// Zulaessig: 1 - 3 
// var col		= new Array('#ff0000','#ffff00','#0000ff'); 
// var col		= new Array('#b0bac9','#b0bac9','#b0bac9'); 
var col		= new Array('#bfc3c9','#bfc3c9','#bfc3c9'); 
var radius	= 25;	// Radius der Animation 
var step	= 0.2;	// Sinnvoll: 0.1 - 1.0 
// [END OF CONFIGURATION] 
 
// Don't change anything of the following code 
// window.onerror=null; 
 
var anz		= 10;	// Anzahl der Punkte pro Schweif 
var YDummy=new Array(),XDummy=new Array(); 
var xpos=-(anz+radius),ypos=-(anz+radius); 
var ThisStep=0,db; 
 
ns4=(document.layers)?1:0; 
ie4=(document.all)?1:0; 
dom=(document.getElementById)?1:0; 
gecko=(navigator.product)?1:0; 
unit=(ns4)?'':'px'; 
 
function GetClientHeight()	{return (ie4)?db.clientHeight:window.innerHeight;} 
function GetClientWidth()	{return (ie4)?db.clientWidth:window.innerWidth;} 
function GetClientTop()		{return (ie4)?db.scrollTop:window.pageYOffset;} 
function GetClientLeft()	{return (ie4)?db.scrollLeft:window.pageXOffset;} 
 
function Mouse(evnt) 
{
    //xpos = (ie4)?event.x+db.scrollLeft+6:window.pageYOffset+evnt.pageX+6; 
    //ypos = (ie4)?event.y+db.scrollTop+16:window.pageYOffset+evnt.pageY+16; 

    xpos = window.pageYOffset+evnt.pageX+6; 
    ypos = window.pageYOffset+evnt.pageY+16; 
} 
 
function swirl() 
{	for (i = 0; i < 3; i++) 
	{	switch(effekt) { 
		case 1:	YDummy[i]=ypos+radius*Math.cos(ThisStep+i*2)*Math.sin((ThisStep+i*25)/2); 
			XDummy[i]=xpos+radius*Math.sin(ThisStep+i*2)*Math.sin((ThisStep+i*25)/2)*Math.sin(ThisStep/4); 
			break; 
		case 2:	YDummy[i]=ypos+radius*Math.cos(ThisStep+i*2)*Math.sin((ThisStep)*6); 
			XDummy[i]=xpos+radius*Math.sin(ThisStep+i*2)*Math.sin((ThisStep)*6); 
			break; 
		case 3:	YDummy[i]=ypos+radius*Math.sin((Math.sin(ThisStep/10))+i*2)*Math.sin(ThisStep/4); 
			XDummy[i]=xpos+radius*Math.cos((Math.sin(ThisStep/10))+i*2)*Math.sin(ThisStep/4); 
			break; 
		} 
	} 
	ThisStep+=step; 
	setTimeout('swirl()',10); 
} 
 
function nelem(id,siz,col) 
{	var no			= document.createElement('DIV'); 
	no.id			= id; 
	no.style.position	= 'absolute'; 
	no.style.top		= '-'+siz; 
	no.style.left		= '-'+siz; 
	no.style.width		= siz; 
	no.style.height		= siz; 
	no.style.fontSize	= siz; 
	no.style.backgroundColor= col; 
    no.style.zIndex = 9999;
	db.appendChild(no); 
} 
 
var dots = new Array(); 
function init() 
{	function dot(nr) 
	{	if (ie4 && !dom) { this.obj = document.all[nr].style; } 
		if (ns4) { this.obj = document.layers[nr];	} 
		if (dom) { this.obj = document.getElementById(nr).style; } 
	} 
	db=document.body; 
	for (j = 0; j < 3; j++) 
	{	for (i = 0; i < anz; i++) 
		{	id=(j*anz)+i; 
			if (dom) { nelem('d'+id,i/2+'px',col[j]); } 
			dots[id] = new dot('d'+id); 
		} 
	} 
	switch(effekt) { 
	case 1:	step = step/3; 
		break; 
	case 2:	step = step/20; 
		break; 
	} 
	if (ie4)	{ document.onmousemove=Mouse } 
	if (ns4)	{ window.captureEvents(Event.MOUSEMOVE);window.onMouseMove=Mouse; } 
	if (gecko)	{ document.addEventListener('mousemove',Mouse,false) } 
} 
 
function prepos() 
{	for (j = 0; j < 3; j++) 
	{	for (i = 0; i < anz; i++) 
		{	id=(j*anz)+i; 
			if (i < anz-1) 
			{ 	dots[id].obj.top=dots[id+1].obj.top; 
				dots[id].obj.left=dots[id+1].obj.left; 
			} 
			else 
			{	if ( (YDummy[j]+parseInt(dots[id].obj.height) >= GetClientTop()+GetClientHeight()-1) || 
				     (XDummy[j]+parseInt(dots[id].obj.width)  >= GetClientLeft()+GetClientWidth()-1) ) 
				{	dots[id].obj.top ='-'+anz+unit; 
					dots[id].obj.left='-'+anz+unit; 
				} 
				else 
				{	dots[id].obj.top =YDummy[j]+unit; 
					dots[id].obj.left=XDummy[j]+unit; 
				} 
			} 
		} 
	} 
	setTimeout('prepos()',10); 
} 
 
function TrioStarter() 
{	init(); 
	swirl(); 
	prepos(); 
} 

// Initialisation for ie4 & ns4 
if (!dom) 
{	for( j = 0; j < 3; j++ )
	{	for (i = 0; i < anz; i++) 
		{ id=(j*anz)+i; 
		  if (ns4) { document.write('<layer name=d'+id+' top=0 left=0 width='+i/2+' height='+i/2+' bgcolor='+col[j]+'></layer>'); } 
		  if (ie4) { document.write('<div id=d'+id+' style="position:absolute;top:0px;left:0px;width:'+i/2+';height:'+i/2+';background:'+col[j]+';font-size:'+i/2+'"></div>'); } 
		} 
	} 
} 

//window.onload=TrioStarter;
