(function ( $ ) {
 
    $.fn.miv = function( options ) {
 
        // Default options
        var settings = $.extend({
            image: '.cam',
            video: '.vid'
        }, options );
       var maindiv=$(this);
		var i=0; var j=0;
		$(document).on('click',settings.image,function(){    
		  $('.allimgs').append("<input type='file' id='imgupload"+i+"' style='display:none;' name='image["+i+"]'/>");
		    $('#imgupload'+i).trigger('click');     
		     $(document).on('change','#imgupload'+i,function () {
		       var fileInput = $(this).get(0);
		       var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
		       $(maindiv).append("<div class='apnd-img'><img src='"+fileUrl+"' id='img"+i+"' class='img-responsive'><i class='fa fa-close delfile'></i></div>");
		       i++;
		     });   
		});
		$(document).on('click',settings.video,function(){      
		  $('.allimgs').append("<input type='file' style='display:none;' id='vidupload"+j+"' name='video["+j+"]'/>");
		    $('#vidupload'+j).trigger('click');      
		     $(document).on('change','#vidupload'+j,function () {
		       var fileInput1 = $(this).get(0);
		       var fileUrl1 = window.URL.createObjectURL(fileInput1.files[0]);
		       $(maindiv).append("<div class='apnd-img'><iframe width='50' height='50' src='"+fileUrl1+"' id='vid"+j+"' frameborder='0' allowfullscreen></iframe><i class='fa fa-close delfile1'></i></div>");
		       j++;
		     }); 
		});
		$(document).on('click','.delfile',function () {
		    var id=$(this).prev().attr('id').substr(3,4);
		    $(this).parent().remove();
		    $('#imgupload'+id).remove();
		});
		$(document).on('click','.delfile1',function () {
		    var id=$(this).prev().attr('id').substr(3,4);
		    $(this).parent().remove();
		    $('#vidupload'+id).remove();
		});
		// Coder - Akash Verma  Email: Ultimateakash311@gmail.com
 
    };
 
}( jQuery ));