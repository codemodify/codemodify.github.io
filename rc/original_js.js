    var myObject = define
    (
        "danny/modules/Canvas",
        ["rosy/modules/Module","$","danny/modules/fil/Canvas","danny/modules/fil/Frame","danny/modules/fil/Pen","danny/modules/fil/Transformer"],
        function(e,t,n,r,i,s)
        {var o=window.fil;
        return e.extend({cvs:new o.Canvas,draw:new o.Pen,raf:new o.Frame,style:new o.Transformer,vars:{container:null,particles:[],average:{x:0,y:0}},
    
    init:function()
    {
    
    this.sup(),
    
    this.setTimeout(function(){this.publish("track",{type:"page"})},0),
    
    this.raf.start(),
    
    typeof window.devicePixelRatio!="undefined"?this.vars.ratio=window.devicePixelRatio:this.vars.ratio=1,
    
    this.vars.container=t("#canvas")[0],
    this.cvs.init({container:this.vars.container,resize:!0});
    var e=this.cvs.context("2d");
    e.webkitBackingStorePixelRatio=this.vars.ratio,this.draw.context(e),e.lineWidth=2*this.vars.ratio,e.strokeStyle="rgba(128,149,151,0.2)",e.fillStyle="rgba(128,149,151,0.3)",e.globalCompositeOperation="lighter",this.setupParticles(),this.raf.start(),this.raf.step=this.render
    },
    
    getPointDistance:function(e,t){var n=e[0]-t[0],r=e[1]-t[1],i=Math.sqrt(n*n+r*r);return i
    },
    
    easeOut:function(e,t,n,r){return n*((e=e/r-1)*e*e+1)+t},
    
    render:function(e){var t,n,r,i,s;this.cvs.clear();for(t=0;t<this.vars.particles.length;t++){for(n=0;n<this.vars.particles.length;n++)i=this.vars.particles[t],s=this.vars.particles[n],r=this.getPointDistance(i,s),r<100*this.vars.ratio&&t!==n&&(this.draw.context().strokeStyle="rgba(128,149,151,"+(r/100-1)*-1+")",this.draw.line(i,s,"array"));this.moveParticle(this.vars.particles[t])}t=null,n=null,r=null,i=null,s=null},
    
    moveParticle:function(e){if(e[0]<0||e[0]>this.cvs.width)e.velocity[0]*=-1;if(e[1]<0||e[1]>this.cvs.height)e.velocity[1]*=-1;e[0]+=e.velocity[0],e[1]+=e.velocity[1]},
    
    particle:function(e,t,n){var r=[];return typeof e=="undefined"&&(r=[Math.floor(Math.random()*(this.cvs.width-0+1))+0,Math.floor(Math.random()*(this.cvs.height-0+1))+0]),typeof t=="undefined"&&(r.velocity=[1.5*(Math.random()<.5?-1:1),1.5*(Math.random()<.5?-1:1)]),typeof n=="undefined"&&(r.strength=1e4),r},
    
    getRandomParticle:function(){return this.particle()},
    
    setupParticles:function(){var e=(this.cvs.width+this.cvs.height)/100,t;for(t=0;t<e;t++)this.vars.particles[t]=this.getRandomParticle()},
    
    destroy:function(){this.sup()}})});
