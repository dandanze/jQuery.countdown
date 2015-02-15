#jQuery.countdown

倒计时插件，时分秒倒计。

![](http://g.picphotos.baidu.com/album/s%3D1000%3Bq%3D90/sign=5761d2ec3ddbb6fd215be12639149069/d439b6003af33a87efeb660dc25c10385343b526.jpg)

#Related Plugins

jQuery

#Examples

引用文件：

    <script src="js/jQuery.calendar.js"></script>

调用：

    $("#counter").countdown({
    			hour:"00",
    			minute:"00",
    			second:"05",
    			endCallback:function (){
    				$('<p class="end">倒计时结束</p>').appendTo($("body"));
    			}
    });
