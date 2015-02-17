;(function($){
	$.fn.countdown =function(options){
		var opts = $.extend({},$.fn.countdown.options,options);
		return this.each(function(){
			var opt_hour=opts.hour,
				opt_minute=opts.minute,
				opt_second=opts.second,
				lastSeconds = Number(opt_hour) * 60 * 60 + Number(opt_minute) * 60 + Number(opt_second),
				$this = $(this),
				countHtml = '<span class="J_H">'+opts.hour+'</span>:<span class="J_M">'+opts.minute+'</span>:<span class="J_S">'+opts.second+'</span>',
				timer;
			$this.append(countHtml);
		var $hour = $(".J_H",$this),
			$minute = $(".J_M",$this),
			$second = $(".J_S",$this);
			function format(s){
				return s<10 ? "0"+s : s;
			}
			function countdownTime(){
				lastSeconds--;
				var hours = Math.floor(lastSeconds/3600),
					hour = hours % 24,
					minute =  Math.floor((lastSeconds - hours * 3600) / 60),
					second =  Math.floor((lastSeconds - hours * 3600 - minute * 60));
				$hour.text(format(hour));
				$minute.text(format(minute));
				$second.text(format(second));
				if(lastSeconds<=0){
					clearInterval(timer);
					if(opts.endCallback){
						opts.endCallback();
					}
				}
			}
			timer = setInterval(countdownTime,1000);
		});
	}
})(jQuery);