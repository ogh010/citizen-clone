    
        /*타이머*/
        (function () {
  var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  var dday = "august 1, 2021 00:00:00",
      countDown = new Date(dday).getTime(),
      x = setInterval(function() {    

        var now = new Date().getTime(),
            distance = countDown - now;
          
          

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
}, 0)
  }());
        
        /*햄버거 gsap + nav*/
        $(function(){
            /*toggle버튼*/
            var toggleBtn = document.querySelector(".hamburger");
            /*gsap 플러그인*/
            var t1 = new TimelineMax({paused:true});
            t1.to(".hamburger span:nth-child(2)", 1,{
                left:"-150",
            })
            t1.to(".hamburger span:nth-child(1)", 1,{
                rotate:315,
                top:10
            },"-=1")
            t1.to(".hamburger span:nth-child(3)", 1,{
                rotate:-315,
                top:10
            },"-=1")
            
            t1.to("nav",1.4,{
                left:"0"
            },"-=1")
            
            t1.from("nav ul li",1.4,{
                    x:-300,
                    opacity:0,
                    stagger:0.2
                    })

            t1.reverse();

            toggleBtn.onclick = function(){
                t1.reversed(!t1.reversed());
            }
            
            /*nav*/
            $('nav>ul').mousemove(function(e){
                var y = e.clientY;
                $('.hover-element').css("margin-top",y);
            }).mouseout(function(e){
                $(".hover-element").css("margin-top","50px")
            });
            $('nav>ul>li>a').mouseover(function(){
                var activeLink = $(this).attr('href');
                //console.log(activeLink);
                $('.link-img img, .link-img video').removeClass("active");
                $('.link-img img'+activeLink).addClass("active");
            })
            /*video*/
            $('#social .inner video').mouseover(function(){
                $('#social .inner i').stop().animate({'opacity':'1'})
            }).mouseout(function(){
                $('#social .inner i').stop().animate({'opacity':'0'})
            })
            
            
        })
        
        
    $(function(){
            var n = 0;
            var m = 1; 
            var sectionLength = $('.bannerTxt .slideView2 div').length;
            $('.allNum').text('/' +  sectionLength);

            /*타임라인*/
            var timer = setInterval(timeline,4000);
            function timeline(){
                $('#banner .bannerIndicator .timer .line').removeClass('active');
                $('#banner .bannerIndicator .timer .line').eq(0).addClass('active');
                $('#banner .bannerIndicator .timer .line').eq(0).removeClass('active');
                
            }
            timeline();
            
            /*슬라이드*/
            var timer = setInterval(gallery,4000);
            function gallery(){
                /*이미지*/
                $('.bannerslide1 .slideView1 div').eq(n%3).fadeOut('easing');
                $('.bannerslide1 .slideView1 div').eq(m%3).fadeIn('linear');

                /*텍스트*/
                $('.bannerTxt .slideView2 div').eq(n%3).stop().animate({'bottom':'-100%'},'linear');
                $('.bannerTxt  .slideView2 div').eq(m%3).css('bottom','100%').stop().animate({'bottom':'0%'},'linear');
                
                
                /*현제페이지 인디케이터*/
                $('.current').text(m%sectionLength+1);
                // console.log(`c = ${m%sectionLength} : m = ${m%sectionLength+1}`);

                n++;
                m++; 
                $('#banner .bannerIndicator .timer .line').removeClass('active');
                $('#banner .bannerIndicator .timer .line').eq(0).addClass('active');
                
                
            }
            function fadeInOut(n){
                /*이미지fade*/
                $('.bannerslide1 .slideView1 div').stop().fadeOut();
                $('.bannerslide1 .slideView1 div').eq(n%3).fadeIn();
                /*텍스트fade*/
                $('.bannerTxt .slideView2 div').stop().animate({'bottom':'-100%'},'linear');
                $('.bannerTxt .slideView2 div').eq(n%3).css('bottom','100%').stop().animate({'bottom':'0%'},'linear');
            }
            function currentIn(m){
                $('.current').text(m%sectionLength+1);
            }
            
            
        
            fadeInOut(0);
            currentIn(0);


            $('#banner .bannerIndicator .indicatorNext').click(function(){
                setTimeout(timeline, 10);
                n++;
                fadeInOut(n);
                currentIn(m);
                m++;
            })
            $('#banner .bannerIndicator .indicatorPrev').click(function(){
                setTimeout(timeline, 10);
                n--;
                fadeInOut(n);
                currentIn(m);
                m--;
                
            })
        
        
            
        })
        
       /*news 이미지 ~ 애니메이션*/
        $(function(){
            $(window).scroll(function(){
                var st = $(window).scrollTop();
                var $new = $('#new').offset().top-630;
                if(st > $new){
                    $('#new .imgLayer').animate({'height':'0'},{
                        duration:400
                    },'easeOutBack');
                    $('#new .inner>div .item .itemImg').css({'transform':'scale(1)'})
                }
                else{
                    $('#new .inner>div .item .itemImg').css({'transform':'scale(0)'})
                }
                
                var $social = $('#social').offset().top-280;
                if(st > $social){
                    $('#social .imgLayer').animate({'height':'0'},{
                        duration:400
                    },'easeOutBack');
                }
                var $bgchane01 = $('#bgchane .scroll .item01').offset().top-50;
                if(st > $bgchane01){
                    $('#bgchane .scroll .item01 .page-img >div:nth-child(1) .imgLayer').animate({'height':'0'},{
                        duration:700
                    })
                    $('#bgchane .scroll .item01 .page-img >div:nth-child(1)').css({'transform':'scale(1)'})
                }
                else{
                    $('#bgchane .scroll .item01 .page-img >div:nth-child(1)').css({'transform':'scale(0)'})
                }
                var $bgchane02 = $('#bgchane .scroll .item02').offset().top-50;
                if(st > $bgchane02){
                    $('#bgchane .scroll .item02 .page-img >div:nth-child(1) .imgLayer').animate({'height':'0'},{
                        duration:700
                    });
                    $('#bgchane .scroll .item02 .page-img >div:nth-child(1)').css({'transform':'scale(1)'})
                }
                else{
                    $('#bgchane .scroll .item02 .page-img >div:nth-child(1)').css({'transform':'scale(0)'})
                }
                var $bgchane03 = $('#bgchane .scroll .item03').offset().top-50;
                if(st > $bgchane03){
                    $('#bgchane .scroll .item03 .page-img >div:nth-child(1) .imgLayer').animate({'height':'0'},{
                        duration:700
                    })
                    $('#bgchane .scroll .item03 .page-img >div:nth-child(1)').css({'transform':'scale(1)'})
                }
                else{
                    $('#bgchane .scroll .item03 .page-img >div:nth-child(1)').css({'transform':'scale(0)'})
                }
                
                /*$watchColor*/
                var $watchColor = $('#watchColor').offset().top-800;
                if(st>$watchColor){
                    $('#watchColor').css({'width':'100%'},{
                        duration:800
                    })
                }
                
                var $concept = $('#bgchane .scroll img').offset().top-300;
                if(st > $concept){
                    $('#bgchane .scroll img ').css({'transform':'rotate(90deg)'},{
                        duration:500
                    })
                }
                else{
                    $('#bgchane .scroll img ').css({'transform':'rotate(0deg)'},{
                        duration:500
                    })
                }
                
               
                
               
                var $lovi = $('#lovi').offset().top-200;
                if(st>$lovi){
                    $('#lovi .loviEn').addClass('on', 6000, "easeInBack")
                }
                else{
                    $('#lovi .loviEn').removeClass('on', 6000, "easeInBack");
                }
                $(window).resize(function (){
              // width값을 가져오기
              var width_size = window.outerWidth;

              //미디어쿼리
              if (width_size <= 1200){
                  if(st>$lovi){
                    $('#lovi .loviEn').removeClass('on');
                    $('#lovi .loviEn').addClass('on2', 6000, "easeInBack")
                }
                else{
                    $('#lovi .loviEn').removeClass('on2', 6000, "easeInBack");
                }  
              }
                    if (width_size <= 500){
                  if(st>$lovi){
                      $('#lovi .loviEn').removeClass('on');
                    $('#lovi .loviEn').addClass('on3', 6000, "easeInBack")
                }
                else{
                    $('#lovi .loviEn').removeClass('on3', 6000, "easeInBack");
                }  
              }
                })
                
                
                /*nextChallnge*/
                var $nextChallnge = $('#nextChallnge').offset().top-100;
                if(st>$nextChallnge){ $('.centerImg').animate({'opacity':'1'},600);
                }
                
                
            })
            
            
            $('#new .inner>div .item .itemImg').mouseover(function(){
                $(this).css({'transform':'scale(1.1)'});
                
                
            }).mouseout(function(){
                $(this).css({'transform':'scale(1)'})
            })
            
            $('.nextImg').mouseover(function(){
                $('.nextrotateImg').css({'animation-play-state':'paused'}); 
                
            }).mouseout(function(){
                $('.nextrotateImg').css({'animation-play-state':'running'}); 
            })
            
            $('#nextChallnge .left').mouseover(function(){
                $(this).css({'transform':' scale(1.1)','transition':'1s'});
            }).mouseout(function(){
                $(this).css({'transform':' scale(1)'});
            })
            $('#nextChallnge .right').mouseover(function(){
                $(this).css({'transform':' scale(1.1)','transition':'1s'});
            }).mouseout(function(){
                $(this).css({'transform':' scale(1)'});
            })
            

            /*푸터버튼*/
            
            function footBtn(){
                
                $('.foo2right>div button').mouseover(function(){
                $('.footBtn').stop().css({'bottom':'0%'})
                }).mouseout(function(){
                $('.footBtn').stop().css({'bottom':'100%'},{
                     duration : 400,
                     complete : function(){
                       $(this).css({bottom: '-100%'})
                       }
                })
            })
            };
            
            footBtn();
            
            
            
           
            
        /*마우스 커서 js*/
        
        var $circle = $('.circle');

        function moveCircle(e) {
          TweenLite.to($circle, 0.3, {
            css: {
              left: e.pageX,
              top: e.pageY
            }
          });
        }

        $(window).on('mousemove', moveCircle);
        
        })
        /*스크롤배경*/
        $(function () {
               $(window).scroll(function () {
                   var st = $(window).scrollTop();
                   if ($(this).scrollTop() >= 1200&& $(this).scrollTop() <= 2700) {
                      $(".scroll").css("background", "tan").css("transition", "1s");
                   }
                  else if ($(this).scrollTop() >= 2700 && $(this).scrollTop() <= 3700) {
                     $(".scroll").css("background", "#fae2dd").css("transition", "1s");
                  }
                  else if ($(this).scrollTop() >= 3700 && $(this).scrollTop() <= 4700) {
                     $(".scroll").css("background", "#d9e8f5").css("transition", "1s");
                  }
              });
            
                $(window).resize(function (){
              // width값을 가져오기
              var width_size = window.outerWidth;

              //미디어쿼리
              if (width_size <= 900) {
                $(window).scroll(function () {
                    /*900일때 bgchage*/
                   var st = $(window).scrollTop();
                   if ($(this).scrollTop() >= 2200&& $(this).scrollTop() <= 3700) {
                      $(".scroll").css("background", "tan").css("transition", "1s");
                   }
                  else if ($(this).scrollTop() >= 3700 && $(this).scrollTop() <= 4700) {
                     $(".scroll").css("background", "#fae2dd").css("transition", "1s");
                  }
                  else if ($(this).scrollTop() >= 4700 && $(this).scrollTop() <= 5700) {
                     $(".scroll").css("background", "#d9e8f5").css("transition", "1s");
                  }  
              });
              }
              if (width_size <= 500) {
                $(window).scroll(function () {
                    /*900일때 bgchage*/
                   var st = $(window).scrollTop();
                   if ($(this).scrollTop() >= 1800&& $(this).scrollTop() <= 3400) {
                      $(".scroll").css("background", "tan").css("transition", "1s");
                   }
                  else if ($(this).scrollTop() >= 3300 && $(this).scrollTop() <= 4300) {
                     $(".scroll").css("background", "#fae2dd").css("transition", "1s");
                  }
                  else if ($(this).scrollTop() >= 4300 && $(this).scrollTop() <= 5300) {
                     $(".scroll").css("background", "#d9e8f5").css("transition", "1s");
                  }  
              });
              }      
            })
        });
        
        /*마우스 바뀜*/
        $(function(){
            
            
            
            
            $('.foot1Text>p, #lovi ul li, .item, .logo, .sns >div, .foo2right .footBtn, .foot2left ul li a, .left .nextText .nextLeftIcon img').mouseenter(function(){
                $('.circle').css({'transform':'scale(0.3)','margin': '-10px -10px -10px -10px','transition':'0.2s'})
            }).mouseleave(function(){
                $('.circle').css({'transform':'scale(1)','margin': ' -50px 0 0 -50px'})
            })
            
            $('#header>div .hamburger').mouseenter(function(){
                $('.circle').css({'transform':'scale(0.5)','margin': '-20px -10px -10px -20px','transition':'0.2s'})
            }).mouseleave(function(){
                $('.circle').css({'transform':'scale(1)','margin': ' -50px 0 0 -50px'})
            })
        })
        
        /*watchColor*/
       $(function(){
           
            $(window).scroll(function(){
                var st = $(window).scrollTop();
                var $watchColor = $('#watchColor').offset().top;
                if(st >= $watchColor+300,600 ){
                    $('.watchTxt').addClass('on', 1000, "easeInBack");
                }
                if($(this).scrollTop() >= 0 && $(this).scrollTop() <= 5200){
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                    $('.black').removeClass('modal');
                }
                if($(this).scrollTop() >= 5200 && $(this).scrollTop() <= 7200){
                    $('.black').addClass('modal');
                    $('.lightBox1').addClass('modal');
                    $('.lightBox2').addClass('modal');
                    $('.lightBox3').addClass('modal');
                    $('.watchTxt').addClass('on', 1000, "easeInBack"); 
                }
                if($(this).scrollTop() >= 7600 && $(this).scrollTop() <= 20000){
                    $('.black').removeClass('modal');
                    $('.lightBox1').removeClass('modal');
                    $('.lightBox2').removeClass('modal');
                    $('.lightBox3').removeClass('modal');
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                } 
        })
           $(window).resize(function (){
              // width값을 가져오기
              var width_size = window.outerWidth;

               //미디어쿼리
              if (width_size <= 1200) {
                $(window).scroll(function(){
                var st = $(window).scrollTop();
                var $watchColor = $('#watchColor').offset().top;
                if(st >= $watchColor+300,600 ){
                    $('.watchTxt').addClass('on', 1000, "easeInBack");
                }
                if($(this).scrollTop() >= 0 && $(this).scrollTop() <= 5800){
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                    $('.black').removeClass('modal');
                }
                if($(this).scrollTop() >= 5800 && $(this).scrollTop() <= 8200){
                    $('.black').addClass('modal');
                    $('.lightBox1').addClass('modal');
                    $('.lightBox2').addClass('modal');
                    $('.lightBox3').addClass('modal');
                    $('.watchTxt').addClass('on', 1000, "easeInBack"); 
                }
                if($(this).scrollTop() >= 8700 && $(this).scrollTop() <= 20000){
                    $('.black').removeClass('modal');
                    $('.lightBox1').removeClass('modal');
                    $('.lightBox2').removeClass('modal');
                    $('.lightBox3').removeClass('modal');
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                } 
        })
              }
               
              //미디어쿼리
              if (width_size <= 900) {
                $(window).scroll(function(){
                var st = $(window).scrollTop();
                var $watchColor = $('#watchColor').offset().top;
                if(st >= $watchColor+300,600 ){
                    $('.watchTxt').addClass('on', 1000, "easeInBack");
                }
                if($(this).scrollTop() >= 0 && $(this).scrollTop() <= 6200){
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                    $('.black').removeClass('modal');
                }
                if($(this).scrollTop() >= 6200 && $(this).scrollTop() <= 8500){
                    $('.black').addClass('modal');
                    $('.lightBox1').addClass('modal');
                    $('.lightBox2').addClass('modal');
                    $('.lightBox3').addClass('modal');
                    $('.watchTxt').addClass('on', 1000, "easeInBack"); 
                }
                if($(this).scrollTop() >= 8900 && $(this).scrollTop() <= 20000){
                    $('.black').removeClass('modal');
                    $('.lightBox1').removeClass('modal');
                    $('.lightBox2').removeClass('modal');
                    $('.lightBox3').removeClass('modal');
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                } 
        })
              }
               if (width_size <= 500) {
                $(window).scroll(function(){
                var st = $(window).scrollTop();
                var $watchColor = $('#watchColor').offset().top;
                if(st >= $watchColor+300,600 ){
                    $('.watchTxt').addClass('on', 1000, "easeInBack");
                }
                if($(this).scrollTop() >= 0 && $(this).scrollTop() <= 5400){
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                    $('.black').removeClass('modal');
                }
                if($(this).scrollTop() >= 5400 && $(this).scrollTop() <= 6600){
                    $('.black').addClass('modal');
                    $('.lightBox1').addClass('modal');
                    $('.lightBox2').addClass('modal');
                    $('.lightBox3').addClass('modal');
                    $('.watchTxt').addClass('on', 1000, "easeInBack"); 
                }
                if($(this).scrollTop() >= 7300 && $(this).scrollTop() <= 20000){
                    $('.black').removeClass('modal');
                    $('.lightBox1').removeClass('modal');
                    $('.lightBox2').removeClass('modal');
                    $('.lightBox3').removeClass('modal');
                    $('.watchTxt').removeClass('on', 1000, "easeInBack");
                } 
                    
        })
              }
            })
           
    })
        /*lovi*/
        $(function(){
                 $('#lovi .inner .loviEn').eq(0).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(0) .addClass('on1').css({'left':300-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(1).css({'left':1000-posX/10,'top':550-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(2).css({'left':900-posX/10,'top':900-posY/20,'opacity':'1'},10)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'1'})
                     $('#lovi').css({'background':'rgba(230, 254, 255, 0.65)'})
                     
                 })
            
                     $('#lovi .inner .loviEn').eq(0).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(0).removeClass('on1').css({'opacity':'0'},50)
                     $('.loviImg img').eq(1).css({'opacity':'0'},50)
                     $('.loviImg img').eq(2).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
            
                $('#lovi .inner .loviEn').eq(1).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(3) .addClass('on2').css({'left':500-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(4).css({'left':450-posX/10,'top':950-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(5).css({'left':500-posX/10,'top':500-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(1).css({'opacity':'1'})
                    $('#lovi').css({'background':'rgba(255, 232, 225, 0.67)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(1).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(3).removeClass('on2').css({'opacity':'0'},50)
                     $('.loviImg img').eq(4).css({'opacity':'0'},50)
                     $('.loviImg img').eq(5).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(1).css({'opacity':'0'})
                 })
            
            $('#lovi .inner .loviEn').eq(2).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(6) .css({'left':500-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(7).css({'left':1000-posX/10,'top':550-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(8).css({'left':900-posX/10,'top':900-posY/20,'opacity':'1'},10)
                $('.loviImg img').eq(9).addClass('on3').css({'left':600-posX/10,'top':800-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(2).css({'opacity':'1'})
                $('#lovi').css({'background':'rgba(255, 254, 230, 0.69)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(2).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(6).removeClass('on').css({'opacity':'0'},50)
                     $('.loviImg img').eq(7).css({'opacity':'0'},50)
                     $('.loviImg img').eq(8).css({'opacity':'0'},50)
                     $('.loviImg img').eq(9).removeClass('on3').css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(2).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
            
                $(window).resize(function (){
              // width값을 가져오기
              var width_size = window.outerWidth;
                    //미디어쿼리
              if (width_size <= 1200){
                  $('#lovi .inner .loviEn').eq(0).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(0) .addClass('on1_0').css({'left':200-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(1).css({'left':700-posX/10,'top':650-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(2).css({'left':600-posX/10,'top':900-posY/20,'opacity':'1'},10)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'1'})
                     $('#lovi').css({'background':'rgba(230, 254, 255, 0.65)'})
                     
                 })
            
                     $('#lovi .inner .loviEn').eq(0).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(0).removeClass('on1_0').css({'opacity':'0'},50)
                     $('.loviImg img').eq(1).css({'opacity':'0'},50)
                     $('.loviImg img').eq(2).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
            
                $('#lovi .inner .loviEn').eq(1).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(3) .addClass('on2_0').css({'left':600-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(4).css({'left':350-posX/10,'top':950-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(5).css({'left':400-posX/10,'top':600-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(1).css({'opacity':'1'})
                    $('#lovi').css({'background':'rgba(255, 232, 225, 0.67)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(1).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(3).removeClass('on2_0').css({'opacity':'0'},50)
                     $('.loviImg img').eq(4).css({'opacity':'0'},50)
                     $('.loviImg img').eq(5).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(1).css({'opacity':'0'})
                 })
            
            $('#lovi .inner .loviEn').eq(2).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(6) .css({'left':350-posX/10,'top':900-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(7).css({'left':750-posX/10,'top':650-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(8).css({'left':650-posX/10,'top':900-posY/20,'opacity':'1'},10)
                $('.loviImg img').eq(9).addClass('on3_0').css({'left':400-posX/10,'top':800-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(2).css({'opacity':'1'})
                $('#lovi').css({'background':'rgba(255, 254, 230, 0.69)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(2).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(6).removeClass('on').css({'opacity':'0'},50)
                     $('.loviImg img').eq(7).css({'opacity':'0'},50)
                     $('.loviImg img').eq(8).css({'opacity':'0'},50)
                     $('.loviImg img').eq(9).removeClass('on3_0').css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(2).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
              }

                    
              //미디어쿼리
              if (width_size <= 900){
                  $('#lovi .inner .loviEn').eq(0).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(0) .addClass('on1_1').css({'left':100-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(1).css({'left':600-posX/10,'top':650-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(2).css({'left':500-posX/10,'top':900-posY/20,'opacity':'1'},10)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'1'})
                     $('#lovi').css({'background':'rgba(230, 254, 255, 0.65)'})
                     
                 })
            
                     $('#lovi .inner .loviEn').eq(0).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(0).removeClass('on1_1').css({'opacity':'0'},50)
                     $('.loviImg img').eq(1).css({'opacity':'0'},50)
                     $('.loviImg img').eq(2).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
            
                $('#lovi .inner .loviEn').eq(1).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(3) .addClass('on2_1').css({'left':500-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(4).css({'left':250-posX/10,'top':950-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(5).css({'left':300-posX/10,'top':700-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(1).css({'opacity':'1'})
                    $('#lovi').css({'background':'rgba(255, 232, 225, 0.67)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(1).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(3).removeClass('on2_1').css({'opacity':'0'},50)
                     $('.loviImg img').eq(4).css({'opacity':'0'},50)
                     $('.loviImg img').eq(5).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(1).css({'opacity':'0'})
                 })
            
            $('#lovi .inner .loviEn').eq(2).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(6) .css({'left':200-posX/10,'top':900-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(7).css({'left':600-posX/10,'top':650-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(8).css({'left':500-posX/10,'top':900-posY/20,'opacity':'1'},10)
                $('.loviImg img').eq(9).addClass('on3_1').css({'left':400-posX/10,'top':800-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(2).css({'opacity':'1'})
                $('#lovi').css({'background':'rgba(255, 254, 230, 0.69)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(2).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(6).removeClass('on').css({'opacity':'0'},50)
                     $('.loviImg img').eq(7).css({'opacity':'0'},50)
                     $('.loviImg img').eq(8).css({'opacity':'0'},50)
                     $('.loviImg img').eq(9).removeClass('on3_1').css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(2).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
              }
                    
                    //미디어쿼리
              if (width_size <= 500){
                  $('#lovi .inner .loviEn').eq(0).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(0) .addClass('on1_1').css({'left':100-posX/10,'top':800-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(1).css({'left':100-posX/10,'top':600-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(2).css({'left':300-posX/10,'top':700-posY/20,'opacity':'1'},10)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'1'})
                     $('#lovi').css({'background':'rgba(230, 254, 255, 0.65)'})
                     
                 })
            
                     $('#lovi .inner .loviEn').eq(0).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(0).removeClass('on1_1').css({'opacity':'0'},50)
                     $('.loviImg img').eq(1).css({'opacity':'0'},50)
                     $('.loviImg img').eq(2).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(0).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
            
                $('#lovi .inner .loviEn').eq(1).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(3) .addClass('on2_1').css({'left':500-posX/10,'top':700-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(4).css({'left':150-posX/10,'top':850-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(5).css({'left':200-posX/10,'top':600-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(1).css({'opacity':'1'})
                    $('#lovi').css({'background':'rgba(255, 232, 225, 0.67)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(1).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(3).removeClass('on2_1').css({'opacity':'0'},50)
                     $('.loviImg img').eq(4).css({'opacity':'0'},50)
                     $('.loviImg img').eq(5).css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(1).css({'opacity':'0'})
                 })
            
            $('#lovi .inner .loviEn').eq(2).mousemove(function(e){
                    var posX = e.pageX;
                    var posY = e.pageY;
                     e.stopPropagation();
                     $('.loviImg img').eq(6) .css({'left':100-posX/10,'top':700-posY/15,'opacity':'1'},10)
                    
                     $('.loviImg img').eq(7).css({'left':300-posX/10,'top':550-posY/20,'opacity':'1'},10)
                     $('.loviImg img').eq(8).css({'left':200-posX/10,'top':800-posY/20,'opacity':'1'},10)
                $('.loviImg img').eq(9).addClass('on3_1').css({'left':100-posX/10,'top':800-posY/20,'opacity':'1'},10)
                    $('#lovi li.loviKo').eq(2).css({'opacity':'1'})
                $('#lovi').css({'background':'rgba(255, 254, 230, 0.69)'})
                 })
            
                     $('#lovi .inner .loviEn').eq(2).mouseout(function(e){
                     e.stopPropagation();
                     $('.loviImg img').eq(6).removeClass('on').css({'opacity':'0'},50)
                     $('.loviImg img').eq(7).css({'opacity':'0'},50)
                     $('.loviImg img').eq(8).css({'opacity':'0'},50)
                     $('.loviImg img').eq(9).removeClass('on3_1').css({'opacity':'0'},50)
                     $('#lovi li.loviKo').eq(2).css({'opacity':'0'})
                     $('#lovi').css({'background':'#f3eded'})
                 })
              }
                })
        })
