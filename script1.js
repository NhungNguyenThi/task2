			$(function(){
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
				else $(".lentop").fadeOut();
				});
			$(".lentop").click(function () {
				$("body,html").animate({scrollTop: 0}, "slow");
				});
			}); 
			
			
		
			document.getElementById("menu").addEventListener("click", function(){
			$('html,body').animate({scrollTop:$("#certification").position().top});
				});



			$(document).ready(function(){
				$(function () {
					$('#activities').click(function () {
						$('body,html').animate({
							scrollTop: 800
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				$(function () {
					$('#progamming').click(function () {
						$('body,html').animate({
							scrollTop: 1000
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				$(function () {
					$('#interests').click(function () {
						$('body,html').animate({
							scrollTop: 1100
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				$(function () {
					$('#language').click(function () {
						$('body,html').animate({
							scrollTop: 1450
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				$(function () {
					$('#project').click(function () {
						$('body,html').animate({
							scrollTop: 1700
						}, 800);
						return false;
					});
				});
			});
		
		
            function getAndSetVal()
            {
                var txt1 = document.getElementById('txt').value;
				document.getElementById("schoolname").innerHTML = txt1;
            }
            function getVal()
            {
             var txt = document.getElementById('txt').value;
             alert(txt);
            }  
       