$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li a').on('click', function(e) {     
    $('nav li a').removeClass("active");      
     $(this).addClass("active");
  }); 
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 400 ) {
      menu.slideToggle(); 
    }
  }); 

  $("#login-btn").click(function(){
    $("#loginModal").show();
  })

  $(".close").click(function(){
    $("#loginModal").hide();
  })

  $.getJSON( "https://raw.githubusercontent.com/allylabs/fed-coding-challenge/public/code-test.json", function( data ) {
    var table = $("#tblRates tbody"),
    _data = data.sort(function(a,b){
      return a.apy < b.apy;
    });

    $.each(data, function(idx, elem){
        table.append("<tr><td >"+elem.name+"</td> <td class='cell-right'>"+elem.apy+" %</td>   <td class='cell-right'>$"+elem.earnings.toFixed(2)+"</td></tr>");
    });
     
  });
});