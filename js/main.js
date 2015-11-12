require.config({
	baseUrl:'./',
	paths:{
		'jquery':'vendors/jquery/jquery.min',
		'bootstrap':'vendors/bootstrap/bootstrap.min',
		'swiper':'vendors/swiper/idangerous.swiper.min',
		'sweetalert':'vendors/sweetalert/sweet-alert.min',
		'validator':'vendors/validator-js/validator.min',
		'modernizr':'vendors/modernizr/modernizr',
		'domReady':'vendors/requirejs-domready/domReady'
	},
	shim:{
		'bootstrap':{
			deps:['jquery']
		}
	},
	packages:[
		{name:'greensock',main:'',location:'vendors/greensock/'},
		{name:'extra',main:'',location:'vendors/extra'}
	]
});


require(['jquery','validator','extra/imgPreloading','modernizr','bootstrap','greensock/TweenMax.min','swiper','sweetalert','domReady!'],
	function($,validator,imgPreloading){
        var $window = $(window);
        var $body = $('body');
        var music_btn = $('.sound');
        var bgsound = $('#sound')[0];
        var arrow_up = $('.arrow_up');

        $window.on('beforeunload',function(){
            bgsound.pause();
        });

        music_btn.on('click', function(){
            if(bgsound.paused){
                music_btn.addClass('active');
                bgsound.play();
            }else{
                music_btn.removeClass('active');
                bgsound.pause();
            }
        });

        var mySwiper = new Swiper('.main_swiper', {
            mode: 'vertical',
            loop: false,
            onSlideChangeEnd: function(swiper){
                var jqslide = $(swiper.activeSlide());
                var func = jqslide.data('function');
//            去掉最后一页向上滑符号
                if(swiper.activeIndex == (swiper.slides.length - 1)){
                    arrow_up.addClass('arrhide');
                }else{
                    arrow_up.removeClass('arrhide');
                }
//            执行自定义函数
                if(!jqslide.hasClass('loaded') && func){
                    jqslide.addClass('loaded');
                    eval(func + '()');
                }
            }
        });
        function animation1(){
            TweenMax.fromTo('.img1_1', 1.0, {
                autoAlpha: 0,
                y: '-50%'
            },{
                autoAlpha: 1,
                y: '0%',
                delay: 0.6
            });

            TweenMax.fromTo('.img1_2', 1.0, {
                autoAlpha: 0,
                y: '-50%'
            },{
                autoAlpha: 1,
                y: '0%',
                delay: 1.2
            });

            TweenMax.fromTo('.img1_3', 1.0, {
                autoAlpha: 0,
                y: '50%'
            },{
                autoAlpha: 1,
                y: '0%',
                delay: 1.8
            });
        }

        function animation2(){
            TweenMax.fromTo('.img2_1', 1.0, {
                autoAlpha: 0,
                y: '-50%'
            },{
                autoAlpha: 1,
                y: '0%'
            });

            TweenMax.fromTo('.img2_2', 1.0, {
                autoAlpha: 0,
                y: '-50%'
            },{
                autoAlpha: 1,
                y: '0%',
                delay: 0.6
            });

            TweenMax.fromTo('.img2_3', 1.0, {
                autoAlpha: 0,
                x: '100%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 1.2
            });

            TweenMax.fromTo('.img2_4', 1.0, {
                autoAlpha: 0,
                y: '-50%'
            },{
                autoAlpha: 1,
                y: '0%',
                delay: 1.8
            });
            TweenMax.fromTo('.img2_5', 1.0, {
                autoAlpha: 0,
                x: '100%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 2.4
            });
            TweenMax.fromTo('.img2_6', 1.0, {
                autoAlpha: 0,
                y: '-50%'
            },{
                autoAlpha: 1,
                y: '0%',
                delay: 3.0
            });
            TweenMax.fromTo('.img2_7', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 3.6
            });
        }

        function animation3(){
            TweenMax.fromTo('.img3_1', 2.0, {
                autoAlpha: 0,
                x: '60%'
            },{
                autoAlpha: 1,
                x: '0%'
            });

            TweenMax.fromTo('.img3_2', 2.0, {
                autoAlpha: 0,
                x: '-50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 0.6

            });

            TweenMax.fromTo('.img3_3', 2.5, {
                autoAlpha: 0,
                x: '-100%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 1.2
            });

            TweenMax.fromTo('.img3_4', 1.0, {
                autoAlpha: 0,
                x: '100%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 1.8
            });

            TweenMax.fromTo('.img3_5', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 2.4
            });

            TweenMax.fromTo('.img3_6', 1.0, {
                autoAlpha: 0,
                x: '100%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 3.0
            });

        }

        function animation4(){

            TweenMax.fromTo('.img4_1', 1.0, {
                autoAlpha: 0,
                x: '-50%',
                y:'50%'
            },{
                autoAlpha: 1,
                x: '0%',
                y:'0%'
            });

            TweenMax.fromTo('.img4_2', 1.0, {
                autoAlpha: 0,
                x: '50%',
                y:'-50%'
            },{
                autoAlpha: 1,
                x: '0%',
                y:'0%',
                delay: 0.6
            });

            TweenMax.fromTo('.img4_3', 1.0, {
                autoAlpha: 0,
                x: '-50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 1.2
            });
            TweenMax.fromTo('.img4_4', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 1.8
            });
            TweenMax.fromTo('.img4_5', 1.0, {
                autoAlpha: 0,
                x: '-50%',
                y:'50%'
            },{
                autoAlpha: 1,
                x: '0%',
                y:'0%',
                delay:2.4
            });

        }

        function animation5(){
            TweenMax.fromTo('.img5_1', 1.0, {
                autoAlpha: 0,
                x:'-100%',
                y: '50%'
            },{
                autoAlpha: 1,
                x:'0%',
                y: '0%'
            });

            TweenMax.fromTo('.img5_2', 1.0, {
                autoAlpha: 0,
                x: '-50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 0.8
            });

            TweenMax.fromTo('.img5_3', 1.0, {
                autoAlpha: 0,
                y: '50%'
            },{
                autoAlpha: 1,
                y: '0%',
                delay: 1.4
            });
            TweenMax.fromTo('.img5_4', 1.0, {
                autoAlpha: 0,
                x: '-50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 2.0,
                onComplete: function(){
                    $('.img5_4').addClass('breath');
                }
            });
            TweenMax.fromTo('.img5_5', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 2.6
            });
        }
        function animation6(){
            TweenMax.fromTo('.img6_1', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%'
            });

            TweenMax.fromTo('.img6_2', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 0.6
            });

            TweenMax.fromTo('.img6_3', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 1.2
            });
            TweenMax.fromTo('.img6_4', 1.0, {
                autoAlpha: 0,
                x: '50%'
            },{
                autoAlpha: 1,
                x: '0%',
                delay: 1.8
            });
        }

        var showshu = $('.shuzi');
        var mycanvas = $('.showprogress');
        var pp =$('.pp');
        function loadPicture(){
            imgPreloading.preload({
                onLoad: function(loadCount, totalCount, source){
                    var value = parseInt(loadCount / totalCount * 100) + '%'
                    showshu.text(value);
                    pp.width(value);
                    console.log(value, source);
                },
                onComplete: function(){
                    TweenMax.to(mycanvas, .5, {
                        // autoAlpha: 0,
                        onComplete: function(){
                            mycanvas.remove();
                            animation1();
                        }
                    });
                },
                onError: function(){}
            });
        }

	loadPicture();
});