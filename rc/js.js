
Nicolae = {};
Nicolae.Site = {};

Nicolae.Site.SetActiveMenuItem = function( menu, newMenuItem, activeMenuItemMarker )
{
    var activeMenuItem = menu.find('a.activeMenuItem' );
        activeMenuItem.removeClass( 'activeMenuItem' );
        
    newMenuItem.addClass( 'activeMenuItem' );

    activeMenuItemMarker.css( 'top', newMenuItem.position().top + menu.position().top - 1 );
}

Nicolae.Site.SetContainersSize = function()
{
    var content01 = jQuery( '#categoryArea' );
    var content02 = jQuery( '#subCategoryArea' );
    var content03 = jQuery( '#categoryArea #right-border' );
    var content04 = jQuery( '#subCategoryArea #right-border' );
    var content05 = jQuery( '#subCategoryArea #canvas' );
    var content06 = jQuery( '#contentCanvas' );
    
    var windowHeight = jQuery( window ).height();

    content01.css( 'height', windowHeight );
    content02.css( 'height', windowHeight );
    content03.css( 'height', windowHeight );
    content04.css( 'height', windowHeight );
    content05.css( 'height', windowHeight );
    content06.css( 'height', windowHeight );
    
    var contentArea = jQuery( '#contentArea' );
        contentArea.css( 'height', windowHeight );
        contentArea.css( 'width', jQuery( window ).width() - content01.width() - content02.width() );
        //contentArea.width( jQuery( window ).width() - 420 ); // ( content01.width() + content02.width() )
}

Nicolae.Site.ScrollBackground = function( container )
{
	// ***
	// Scrolling background
	// ***

	// height of background image in pixels
	var backgroundheight = 4000;

	// get the current minute/hour of the day
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();

	// work out how far through the day we are as a percentage - e.g. 6pm = 75%
	var hourpercent = hour / 24 * 100;
	var minutepercent = minute / 60 / 24 * 100;
	var percentofday = Math.round(hourpercent + minutepercent);

	// calculate which pixel row to start graphic from based
	// on how far through the day we are
	var offset = backgroundheight / 100 * percentofday;

	// graphic starts at approx 6am, so adjust offset by 1/4
	var offset = offset - (backgroundheight / 4);

	function scrollbackground( container ) {
		// decrease the offset by 1, or if its less than 1 increase it by
		// the background height minus 1
   		offset = (offset < 1) ? offset + (backgroundheight - 1) : offset - 1;
		// apply the background position
   		jQuery(container).css("background-position", "50% " + offset + "px");
   		// call self to continue animation
   		setTimeout(function() {
			scrollbackground( container );
			}, 100
		);
   	}

	// Start the animation
	scrollbackground( container );
}



Nicolae.Site.DrawCool = {};
Nicolae.Site.DrawCool.vars = {container:null,particles:[],average:{x:0,y:0}};
Nicolae.Site.DrawCool.cvs = new fil.Canvas();
Nicolae.Site.DrawCool.pen = null;

Nicolae.Site.DrawCool.getPointDistance = function(e,t)
{
    var n=e[0]-t[0],r=e[1]-t[1],i=Math.sqrt(n*n+r*r);
    
    return i;
}

Nicolae.Site.DrawCool.easeOut = function(e,t,n,r)
{
    return n*((e=e/r-1)*e*e+1)+t;
}

Nicolae.Site.DrawCool.render = function(e)
{
    var t,n,r,i,s;
    Nicolae.Site.DrawCool.cvs.clear();
    for(t=0;t<Nicolae.Site.DrawCool.vars.particles.length;t++)
    {
        for(n=0;n<Nicolae.Site.DrawCool.vars.particles.length;n++)i=Nicolae.Site.DrawCool.vars.particles[t],s=Nicolae.Site.DrawCool.vars.particles[n],r=Nicolae.Site.DrawCool.getPointDistance(i,s),r<100*Nicolae.Site.DrawCool.vars.ratio&&t!==n&&
        (
        
        Nicolae.Site.DrawCool.pen.context().strokeStyle="rgba(128,149,151,"+(r/100-1)*-1+")",
        Nicolae.Site.DrawCool.pen.line(i,s,"array")
        
        );
        Nicolae.Site.DrawCool.moveParticle(Nicolae.Site.DrawCool.vars.particles[t])
    }
    
    t=null,n=null,r=null,i=null,s=null
}

Nicolae.Site.DrawCool.moveParticle = function(e)
{
    if(e[0]<0||e[0]>Nicolae.Site.DrawCool.cvs.width)e.velocity[0]*=-1;if(e[1]<0||e[1]>Nicolae.Site.DrawCool.cvs.height)e.velocity[1]*=-1;e[0]+=e.velocity[0],e[1]+=e.velocity[1]
}

Nicolae.Site.DrawCool.particle = function(e,t,n)
{
    var r=[];return typeof e=="undefined"&&(r=[Math.floor(Math.random()*(Nicolae.Site.DrawCool.cvs.width-0+1))+0,Math.floor(Math.random()*(Nicolae.Site.DrawCool.cvs.height-0+1))+0]),typeof t=="undefined"&&(r.velocity=[1.5*(Math.random()<.5?-1:1),1.5*(Math.random()<.5?-1:1)]),typeof n=="undefined"&&(r.strength=1e4),r
}

Nicolae.Site.DrawCool.getRandomParticle = function()
{
    return Nicolae.Site.DrawCool.particle()
}

Nicolae.Site.DrawCool.setupParticles = function()
{
    var e=(Nicolae.Site.DrawCool.cvs.width+Nicolae.Site.DrawCool.cvs.height)/100,t;for(t=0;t<e;t++)Nicolae.Site.DrawCool.vars.particles[t]=Nicolae.Site.DrawCool.getRandomParticle()
}    

Nicolae.Site.DrawCoolLines = function()
{
    Nicolae.Site.DrawCool.pen = new fil.Pen();
    var frame = new fil.Frame(),
        tr = new fil.Transformer(),
        el = document.getElementById('canvas'); // The <canvas> element container.

    typeof window.devicePixelRatio!="undefined"?
        Nicolae.Site.DrawCool.vars.ratio=window.devicePixelRatio:
        Nicolae.Site.DrawCool.vars.ratio=1;
        
    Nicolae.Site.DrawCool.vars.container=$("#canvas")[0];
        
    Nicolae.Site.DrawCool.cvs.init
    (
        {
            container:Nicolae.Site.DrawCool.vars.container,
            resize:!0
        } 
    );
    var e=Nicolae.Site.DrawCool.cvs.context("2d");
        //e.webkitBackingStorePixelRatio=Nicolae.Site.DrawCool.cvs.vars.ratio;
    //Nicolae.Site.DrawCool.cvs.draw.context(e);
    e.lineWidth=2*Nicolae.Site.DrawCool.vars.ratio,
    e.strokeStyle="rgba(128,149,151,0.2)",
    e.fillStyle="rgba(128,149,151,0.3)",
    e.globalCompositeOperation="lighter",Nicolae.Site.DrawCool.setupParticles();

    // Set some constant values.
    var ctx = Nicolae.Site.DrawCool.cvs.context(),
        WIDTH = Nicolae.Site.DrawCool.cvs.width,
        HEIGHT = Nicolae.Site.DrawCool.cvs.height;

    // Pen does not require initialization, but it does require a canvas context.
    Nicolae.Site.DrawCool.pen.context(ctx);

    // Start requestAnimationFrame
    frame.start();
    frame.step = function (f) 
    {
        Nicolae.Site.DrawCool.render();
    };
}


Nicolae.Site.OnPageLoaded = function()
{
    var categoryAreaMenu = jQuery( '#categoryArea #menu' );
    var categoryActiveMenuItem = categoryAreaMenu.find('a.activeMenuItem' );
    var categoryActiveMenuItemMark = jQuery( '#categoryArea #activeMenuItemMark' );

    Nicolae.Site.SetActiveMenuItem( categoryAreaMenu, categoryActiveMenuItem, categoryActiveMenuItemMark );

    // Set the click() event handlers for menu items
    var menuItems = categoryAreaMenu.children().first().children();
        menuItems.each
        (
            function( index, domElement )
            {
                jQuery( domElement ).click // click event for category links
                (
                    function( event )
                    {
                        var categoryAreaMenu = jQuery( '#categoryArea #menu' );
                        var categoryActiveMenuItem = jQuery( event.target );
                        var categoryActiveMenuItemMark = jQuery( '#categoryArea #activeMenuItemMark' );
                        
                        Nicolae.Site.SetActiveMenuItem( categoryAreaMenu, categoryActiveMenuItem, categoryActiveMenuItemMark );

                        var link = categoryActiveMenuItem.attr( "alt" ) + "/index.html";  

                        var subCategoryAreaMenu = jQuery( '#subCategoryArea #menu' );
                            subCategoryAreaMenu.load
                            (
                                link,
                                function()
                                {
                                    var subCategoryAreaMenu = jQuery( '#subCategoryArea #menu' );
                                    var subCategoryActiveMenuItem = subCategoryAreaMenu.find('a.activeMenuItem' );
                                    var subCategoryActiveMenuItemMark = jQuery( '#subCategoryArea #activeMenuItemMark' );

                                    Nicolae.Site.SetActiveMenuItem( subCategoryAreaMenu, subCategoryActiveMenuItem, subCategoryActiveMenuItemMark );
                                    
                                    // Change themes
                                    var categoryAreaMenu = jQuery( '#categoryArea #menu' );
                                    var categoryActiveMenuItem = categoryAreaMenu.find('a.activeMenuItem' );
                                    var parentPath = categoryActiveMenuItem.attr( "alt" );
                                    var subCategoryArea = jQuery( "#subCategoryArea" );
                                        subCategoryArea.css( "background-image", "url("+ parentPath +"/bg.png)" );

                                    // Set the click() event handlers for menu items
                                    var menuItems = subCategoryAreaMenu.children().first().children();
                                        menuItems.each
                                        (
                                            function( index, domElement )
                                            {
                                                jQuery( domElement ).click // click event for category links
                                                (
                                                    function( event )
                                                    {
                                                        var subCategoryAreaMenu = jQuery( '#subCategoryArea #menu' );
                                                        var subCategoryActiveMenuItem = jQuery( event.target );
                                                        var subCategoryActiveMenuItemMark = jQuery( '#subCategoryArea #activeMenuItemMark' );
                                                        
                                                        Nicolae.Site.SetActiveMenuItem( subCategoryAreaMenu, subCategoryActiveMenuItem, subCategoryActiveMenuItemMark );
                                                        
                                                        var categoryAreaMenu = jQuery( '#categoryArea #menu' );
                                                        var categoryActiveMenuItem = categoryAreaMenu.find('a.activeMenuItem' );
                                                        var parentPath = categoryActiveMenuItem.attr( "alt" );
                                                        
                                                        var childPath = subCategoryActiveMenuItem.attr( "alt" );
                                                        var link = parentPath + "/" + childPath + ".chtml";

                                                        var contentArea = jQuery( '#contentArea' );
                                                            contentArea.load( link );
                                                            //Nicolae.Site.SetContainersSize();
                                                            
                                                        //$("#contentArea").mCustomScrollbar("update");
                                                    }
                                                );
                                            }
                                        );

                                    var parentHeight = jQuery( '#subCategoryArea' ).height();
                                    var childHeight = subCategoryAreaMenu.height();
                                    subCategoryAreaMenu.css( "top", (parentHeight-childHeight) / 2 );
                                    
                                    // Ckick on the first link
                                    subCategoryActiveMenuItem.click();
                                }
                            );
                    }
                );
            }
        );
    
    // Ckick on the first link
    categoryActiveMenuItem.click();

    // Set the container sizes + watch for window resize
    $(window).resize( Nicolae.Site.SetContainersSize );
    Nicolae.Site.SetContainersSize();

    // Do some cool animations   
    //TrioStarter();
    Nicolae.Site.ScrollBackground( "#subCategoryArea" );
    Nicolae.Site.DrawCoolLines();    
}
