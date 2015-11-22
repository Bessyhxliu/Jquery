/**
 * jQuery registers a document ready listener and manipulate the progress bars
 * 
 * @author Bessy Liu
 * @email bessyhxliu@gmail.com
 */
$(document).ready(function () {
	var bar1 = 0, bar2 = 0, bar3 = 0;
			
	$('#btn_plus25').click(function () {
		setProgress(25);
    });
	
    $('#btn_minus25').click(function () {
		setProgress(-25);
    });			
	
	$('#btn_plus10').click(function () {
		setProgress(10);
    });		
    
	$('#btn_minus10').click(function () {
		setProgress(-10);
    });	
	
	/**
   	 * This method is used to set the progress of the specified bar under the selected control 
     *
     * @param increaseValue It is the value to be increased for the progress bar
     */
	function setProgress(increaseValue){
		var value = 0;
		var barValue = $('#ddlProgressbar').val();
		
		if(barValue == '1' ){
        	bar1 = (bar1 + increaseValue) < 0 ? 0:(bar1 + increaseValue);
			value = bar1;
		}
		
		if(barValue == '2' ){
			bar2 = (bar2 + increaseValue) < 0 ? 0:(bar2 + increaseValue);
			value = bar2;
		}
		
		if(barValue == '3' ){
			bar3 = (bar3 + increaseValue) < 0 ? 0:(bar3 + increaseValue);
			value = bar3;
		}
				
		var selector = '#progressbar' + barValue;
		animateProgressBar(selector,value);
	}
	
	/**
     * This method is used to animate the bar change for value and colour 
     * and display the usage amount percentage
     *
     * @param selectedBar It is id of the selected progress bar
     * @param percentage It is usage amount of the specified bar
     */
	function animateProgressBar(selectedBar,percentage) {
		if (percentage > 100) 
			$(selectedBar).css({backgroundColor:'red'},200);
		else 
			$(selectedBar).css({backgroundColor:'#A2F2F2'},200);

        $({counter: 1 }).animate({ counter: percentage }, {
        	duration: 300,
            step: function ( ) {
           		$(selectedBar).text(Math.round(this.counter) + '%');
			}
		});
		
		percentage = percentage > 100 ? 100:percentage; 
		$(selectedBar).animate({
        	'width': (500 * percentage) / 100
        }, 300);
  	}
	
});

