$(document).ready(function(){
	select.init();
	change.init();
	faq.init();
	family.init();
	family.click();
	$(function(){//달력 플러그인 호출
		if($(".datepicker").size() > 0){
			$(".datepicker").datepicker({
				monthNames : [".1",".2",".3",".4",".5",".6",".7",".8",".9",".10",".11",".12"],
				dayNamesMin : ["일","월","화","수","목","금","토"],
				dateFormat : "yy-mm-dd",
				minDate : new Date()
			});
		}
	});
});
function initDate(){
	$("#depr_Time").text("00:00");
}
$(window).load(function(){
	family.init();
});
var change = {
	init : function(){
		this.obj = $('.drop_menu');
		this.btn = $('.change', this.obj);
		this.wrap = $('.drop_box', this.obj);
		var that = this;

		that.btn.click(function(e){
			$(this).toggleClass('on');
			that.wrap.toggleClass('on');
			e.stopPropagation();
			return false;
		});
		$(document).click(function(){
			that.btn.removeClass('on');
			that.wrap.removeClass('on');
		});
	}
}
var select = {
	init : function(){
		this.obj = $('[data-select="select"]');
		this.def = $('.default', this.obj);
		this.ul = $('ul', this.obj);
		this.li = $('li', this.obj);
		var that = this;
		var mywrap = null;

		that.def.click(function(e){
			that.def.not($(this)).parent().removeClass('on');
			select.reset();
			mywrap = $(this).parent();
			mywrap.toggleClass("on");
			e.stopPropagation();
			if (mywrap.hasClass('disabled')){
				mywrap.removeClass('on');
			}
			return false;
		});
		that.li.click(function(){

			var flagYn = $("#flagYn").val();
			that.li.removeClass("on");
			$(this).addClass("on");
			that.obj.removeClass('on');
			if(flagYn != null){
				if(flagYn=="N"){
					$("#flagYn").val("Y");
				}else{
					$(this).parent().parent().find('.default').find("a").html($(this).text());
				}
			}else{
				$(this).parent().parent().find('.default').find("a").html($(this).text());
			}


			return false;
		});
	},
	reset : function(){
		var that = this;
		$(document).bind("click",function(){
			that.obj.removeClass("on");
		});
	}
}
var family = {
	init : function(){
		this.wrap = $('.family_site');
		this.obj = $('.rolling2');
		this.li = $('li', this.obj);
		this.prev = $('.prev', this.wrap);
		this.next = $('.next', this.wrap);
		this.state = false;
		this.direction = 'rtl';
		this.speed = 500;
		var that = this;
		that.obj.css('width', that.li.size() * that.li.eq(0).width());
	},
	click : function(){
		var that = this;
		that.prev.click(function(){
			if (that.state == true) return false;
			that.state = true;
			that.direction = 'ltr';
			family.move();
			return false;
		});
		that.next.click(function(){
			if (that.state == true) return false;
			that.state = true;
			that.direction = 'rtl';
			family.move();
			return false;
		});
	},
	move : function(){
		var that = this;
		if (that.direction == 'ltr'){
			that.obj.find('li').eq(-1).prependTo(that.obj);
			that.obj.css('margin-left', -that.li.eq(0).width());
			that.obj.animate({
				'margin-left' : 0
			}, {
				duration : that.speed,
				complete : function(){
					that.state = false;
				}
			});
		}else if (that.direction == 'rtl'){
			that.obj.animate({
				'margin-left' : -that.li.eq(0).width()
			}, {
				duration: that.speed,
				complete : function(){
					that.obj.find('li').eq(0).appendTo(that.obj);
					that.obj.css('margin-left', 0);
					that.state = false;
				}
			});
		}
	}
}
var faq = {
	init : function(){
		this.obj = $('.faq');
		this.dt = $('dt', this.obj);
		this.a = $('a', this.dt);
		this.dd = $('dd', this.obj);
		this.standard = $('div', this.dd);
		this.before = null;

		var that = this;

		that.a.click(function(){
			if (that.before !== null){
				that.before.next().animate({
					'height' : 0
				}, 300);
				if (that.before.index() === $(this).parent().index()){
					that.before.removeClass('on');
					that.before = null;
				}else{
					that.before.removeClass('on');
					$(this).parent().addClass('on');
					that.before = $(this).parent();
					that.before.next().animate({
						'height' : that.before.next().find('div').height() + 1
					}, 300);
				}
			}else{
				$(this).parent().addClass('on');
				that.before = $(this).parent();
				that.before.next().animate({
					'height' : that.before.next().find('div').height() + 1
				} ,300);
			}
			return false;
		});
	}
}
var subLocation = {
	init : function(){
		this.obj = $('[data-ui-type="selectbox"]');
		this.def = $('.default', this.obj);
		this.ul = $('ul', this.obj);
		this.li = $('li', this.obj);
		var that = this;
		var mywrap = null;

		that.def.click(function(e){
			that.def.not($(this)).parent().removeClass('on');
			subLocation.reset();
			mywrap = $(this).parent();
			mywrap.toggleClass("on");
			e.stopPropagation();
			return false;
		});
	},
	reset : function(){
		var that = this;
		$(document).bind("click",function(){
			that.obj.removeClass("on");
		});
	}
}
function showLayer(el){
	var obj = {
		init : function(el){
			var that = this;
			var e = el || window.event;
			var from = e.target || e.srcElement;
			var target = $(from),
				layer = el,
				layer_close = layer.find(".close"),
				myfocus = undefined;
				//this.current = null;
				mouseuse = false;
				if(layer.attr("data-position") === undefined){
					layer.css({
						"margin-top" : -layer.height() / 2 + 50 + "px",
						"margin-left" : -layer.width() / 2 + "px"
					});
				}else{
					layer.css({
						"margin-top" : layer.attr("data-position").split(",")[0] + "px",
						"margin-left" : layer.attr("data-position").split(",")[1] + "px"
					});
				}

			//$(from).click(function(e){
				this.current = from;
				if(layer.attr("class").indexOf("my_map") > -1){
					layer.addClass("on").css({
						"margin-top" : -layer.height() / 2 + "px",
						"margin-left" : -layer.width() / 2 + "px"
					}).hide();
				}
				layer.show();

				if(el.attr("data-layer-name")=="terminal_select01"){
					$("#areaText01").focus();
				}else if(el.attr("data-layer-name")=="terminal_select02"){
					$("#areaText02").focus();
				}else if(el.attr("data-layer-name")=="terminal_select03"){
					$("#areaText03").focus();
				}else if(el.attr("data-layer-name")=="terminal_select04"){
					$("#areaText04").focus();
				}

				//.find("a, button, input").eq(0).focus();
				$("body").addClass("onLayer");
				//return false;
			//});
			layer_close.click(function(){
				if(that.current !== null){
					that.current;
					that.current = null;
				}
				layer.hide();
				$("body").removeClass("onLayer");
				return false;
			});
			layer.click(function(e){
				$("[data-ui-type='selectbox']").removeClass("on");
				e.stopPropagation();
			});
			layer.find(".dimd").click(function(e){
				layer_close.click();
			});
			layer.find(".layer_content").mouseenter(function(){
				mouseuse = true;
			});
			layer.find(".layer_content").mouseleave(function(){
				mouseuse = false;
			});
			layer.find("a, button, input").blur(function(e){
				if(mouseuse == true) return false;
				if(layer.find("a, button, input").is(":focus") == false){
					layer_close.click();
					layer.hide();
					$("body").removeClass("onLayer");
				}
			});
		}
	};

	obj.init(el);

	if(el.attr("data-layer-name")=="terminal_select01"){
		readTrmlList('01');
	}else if(el.attr("data-layer-name")=="terminal_select02"){
		readTrmlList('02');
	}else if(el.attr("data-layer-name")=="terminal_select03"){
		readTrmlList('03');
	}else if(el.attr("data-layer-name")=="terminal_select04"){
		readTrmlList('04');
	}
}
function hideLayer(el){
	el.hide();
}
function fc_ChangeTer() {
  var d = document.onewayInfo;

    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "1") {
      d.TER_TO.length = 1;
      d.TER_TO.selectedIndex = 0;
      d.TER_TO.options[0].value = "5";
      d.TER_TO.options[0].text = "서울";
    }

    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "5") {

      d.TER_TO.length = 6;

      d.TER_TO.selectedIndex = 0;

      d.TER_TO.options[0].value = "1";
      d.TER_TO.options[0].text = "강릉";

      d.TER_TO.options[1].value = "2";
      d.TER_TO.options[1].text = "경주";

      d.TER_TO.options[2].value = "3";
      d.TER_TO.options[2].text = "포항";

      d.TER_TO.options[3].value = "4";
      d.TER_TO.options[3].text = "부산";

      d.TER_TO.options[4].value = "6";
      d.TER_TO.options[4].text = "순천";

      d.TER_TO.options[5].value = "7";
      d.TER_TO.options[5].text = "공주";

    }
    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "2") {
      d.TER_TO.length = 1;
      d.TER_TO.selectedIndex = 0;
      d.TER_TO.options[0].value = "5";
      d.TER_TO.options[0].text = "서울";
    }
    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "3") {
      d.TER_TO.length = 1;
      d.TER_TO.selectedIndex = 0;
      d.TER_TO.options[0].value = "5";
      d.TER_TO.options[0].text = "서울";
    }
    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "4") {
      d.TER_TO.length = 1;
      d.TER_TO.selectedIndex = 0;
      d.TER_TO.options[0].value = "5";
      d.TER_TO.options[0].text = "서울";
    }
    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "6") {
      d.TER_TO.length = 1;
      d.TER_TO.selectedIndex = 0;
      d.TER_TO.options[0].value = "5";
      d.TER_TO.options[0].text = "서울";
    }
    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "7") {
      d.TER_TO.length = 1;
      d.TER_TO.selectedIndex = 0;
      d.TER_TO.options[0].value = "5";
      d.TER_TO.options[0].text = "서울";
    }
    if (d.TER_FR.options[d.TER_FR.selectedIndex].value == "") {

      d.TER_TO.length = 8;

      d.TER_TO.selectedIndex = 0;

      d.TER_TO.options[0].value = "1";
      d.TER_TO.options[0].text = "강릉";

      d.TER_TO.options[1].value = "2";
      d.TER_TO.options[1].text = "경주";

      d.TER_TO.options[2].value = "3";
      d.TER_TO.options[2].text = "포항";

      d.TER_TO.options[3].value = "4";
      d.TER_TO.options[3].text = "부산";

      d.TER_TO.options[4].value = "6";
      d.TER_TO.options[4].text = "순천";

      d.TER_TO.options[5].value = "7";
      d.TER_TO.options[5].text = "공주";

      d.TER_TO.options[6].value = "5";
      d.TER_TO.options[6].text = "서울";

      d.TER_TO.options[7].value = "";
      d.TER_TO.options[7].text = "선 택";
    } // script : if(d.TER_FR.value... 의 끝
} // script : function 의 끝
