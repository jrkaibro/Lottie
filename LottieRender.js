function Lottie($)
{
    this.prerender;
    this.Width;
    this.Height;
    this.Attribute;
    this.name;
    this.loop;
    this.path;
    this.autoplay;
    this.animType;

    // Databinding for property Attribute
    this.SetAttribute = function(data)
    {
        ///UserCodeRegionStart:[SetAttribute] (do not remove this comment.)
        this.Attribute = data;
        ///UserCodeRegionEnd: (do not remove this comment.)
    }

    // Databinding for property Attribute
    this.GetAttribute = function()
    {
        ///UserCodeRegionStart:[GetAttribute] (do not remove this comment.)
        return this.Attribute;
        ///UserCodeRegionEnd: (do not remove this comment.)
    }

    this.show = function()
    {
        ///UserCodeRegionStart:[show] (do not remove this comment.)

        var _this  = this;
        var animData;
        var buffer = [];
        var anim ;

        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                buffer.push('<div id="' + _this.ContainerName + '_lottie" style="width:' + _this.width + ';height:' + _this.Height + '" class="lottie" data-name="lottiectx"></div>');
                _this.setHtml(buffer.join(""));
                _this.InitControl(_this);
            }
        }

        ///UserCodeRegionEnd: (do not remove this comment.)
    }
    ///UserCodeRegionStart:[User Functions] (do not remove this comment.)

    this.InitControl = function(a) {

        var source =  gx.gen.isJava() == true ? '..' + gx.staticDirectory + 'lottie/' + a.path : gx.staticDirectory + 'lottie/' + a.path;
        
        console.log(source);

        animData = {
            wrapper: document.getElementById(a.ContainerName + '_lottie'),
            animType: a.animType,
            loop: a.loop,
            prerender: a.prerender,
            autoplay: a.autoplay,
            path: source,
            autoloadSegments: true,
            name: "lottie", 

        };

        anim = bodymovin.loadAnimation(animData);
        window.onresize = anim.resize.bind(anim);

        anim.addEventListener('complete', function() {
            a.onComplete();
        });

        anim.onLoopComplete = function(e) {
            a.SetAttribute(JSON.stringify(e.currentTime));
            a.onLoopComplete();
        }

        anim.onEnterFrame = function(e) {
            if ((e.currentTime + 1) == e.totalTime) {
                a.SetAttribute(JSON.stringify(e));
                a.onEnterFrame();
            }
        };

    }

    this.stop = function() { lottie.stop(); }
    this.play = function() { lottie.play(); }
    this.pause = function() { lottie.pause(); }
    this.destroy = function() { lottie.destroy(); }
    this.setQuality = function(parm) { lottie.setQuality(parm); }
    this.setLocationHref = function(parm) { lottie.setLocationHref = parm }
    this.setSpeed = function(parm) {lottie.setSpeed(parm); }
    this.goToAndPlay = function(parm, pram1) {lottie.goToAndPlay(parm, pram1) }
    this.goToAndStop = function(parm, pram1) {lottie.goToAndStop(parm, pram1) }
    this.setDirection = function(parm) {lottie.setDirection = parm }
    this.setSubframe = function(parm) { lottie.setSubframe = parm }
    this.reloadAnimation = function(parm,parm1) { animData.path = gx.gen.isJava() == true ? '..' + gx.staticDirectory + 'lottie/' + parm : gx.staticDirectory + 'lottie/' + parm; animData.name = 'lottiectx'; lottie.destroy(); lottie.loadAnimation(animData); }  


    ///UserCodeRegionEnd: (do not remove this comment.):
}
