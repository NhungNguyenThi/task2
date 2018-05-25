			$(function(){
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
				else $(".lentop").fadeOut();
				});
			$(".lentop").click(function () {
				$("body,html").animate({scrollTop: 0}, "slow");
				});
			}); 
			
			$(document).ready(function(){
				//fade in #back-top
				$(function () {
					//scroll body to 0px on click
					$('#certification').click(function () {
						$('body,html').animate({
							scrollTop: 600
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				//fade in #back-top
				$(function () {
					//scroll body to 0px on click
					$('#activities').click(function () {
						$('body,html').animate({
							scrollTop: 800
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				//fade in #back-top
				$(function () {
					//scroll body to 0px on click
					$('#progamming').click(function () {
						$('body,html').animate({
							scrollTop: 1000
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				//fade in #back-top
				$(function () {
					//scroll body to 0px on click
					$('#interests').click(function () {
						$('body,html').animate({
							scrollTop: 1100
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				//fade in #back-top
				$(function () {
					//scroll body to 0px on click
					$('#language').click(function () {
						$('body,html').animate({
							scrollTop: 1450
						}, 800);
						return false;
					});
				});
			});
		
			$(document).ready(function(){
				//fade in #back-top
				$(function () {
					//scroll body to 0px on click
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
            //get value
            function getVal()
            {
             var txt = document.getElementById('txt').value;
             alert(txt);
            }  
       