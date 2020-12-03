var maxTck = 10;
// 티켓예매 최대매수

function valiOnewayInfo(bef_Aft_Dvs, req_Rec_Num){
	var deprTime = $("#depr_Time").text();
	var getIg;
	var getIm;
	var getIc;

	if($("#ig").text()!=null && $("#ig").text() !=""){
		getIg = $("#ig").text();
	}else{
		getIg = "1";
	}

	if($("#im").text()!=null && $("#im").text() !=""){
		getIm = $("#im").text();
	}else{
		getIm = "0";
	}
	if($("#ic").text()!=null && $("#ic").text() !=""){
		getIc = $("#ic").text();
	}else{
		getIc = "0";
	}

	var total = getIg*1+getIm*1+getIc*1;

	if(total==0){
		alert("승차권 매수를 선택해 주십시오.");
		return false;
	}else if(total > maxTck){
		alert("승차권 매수는 1회 "+maxTck+"매까지 예매 가능합니다.");
		return false;
	}


	if (deprTime == null || deprTime == "") {
		deprTime = $("#deprTime").val();
	}


	if($("#i_bef_Aft_Dvs").val()!=null && $("#i_bef_Aft_Dvs").val()!=""){
		$("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "bef_Aft_Dvs",
			"id" : "i_bef_Aft_Dvs",
			"value" : bef_Aft_Dvs
		}).appendTo("#onewayInfo");
	}

	if($("#i_req_Rec_Num").val()!=null && $("#i_req_Rec_Num").val()!=""){
		$("#i_req_Rec_Num").val(req_Rec_Num);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "req_Rec_Num",
			"id" : "i_req_Rec_Num",
			"value" : req_Rec_Num
		}).appendTo("#onewayInfo");
	}


	if($("#i_depr_Time").val()!=null && $("#i_depr_Time").val()!=""){
		$("#i_depr_Time").val(deprTime);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "depr_Time",
			"id" : "i_depr_Time",
			"value" : deprTime
		}).appendTo("#onewayInfo");
	}
	if($("#i_ig").val()!=null && $("#i_ig").val()!=""){
		$("#i_ig").val(getIg);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "ig",
			"id" : "i_ig",
			"value" : getIg
		}).appendTo("#onewayInfo");
	}
	if($("#i_im").val()!=null && $("#i_im").val()!=""){
		$("#i_im").val(getIm);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "im",
			"id" : "i_im",
			"value" : getIm
		}).appendTo("#onewayInfo");
	}
	if($("#i_ic").val()!=null && $("#i_ic").val()!=""){
		$("#i_ic").val(getIc);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "ic",
			"id" : "i_ic",
			"value" : getIc
		}).appendTo("#onewayInfo");
	}

	var deprDt = $("#depr_Dt").val();

	if (deprDt != null && deprDt != "") {
		deprDt = deprDt.replace(/-/gi,"");
	}

	var check = dui.wv.validate($("#onewayInfo"));

	if(!check){
		return true;
	}else{
		showLayer($('[data-layer-name=\'cautionNote\']'));
	}
}

function readAlcnList_Rtn()  {
	$("#returnInfo").submit();
}


function readAlcnListEntry(bef_Aft_Dvs, req_Rec_Num) {

	var deprTime = $("#depr_Time").text();
	var getIg;
	var getIm;
	var getIc;

	if($("#ig").text()!=null && $("#ig").text() !=""){
		getIg = $("#ig").text();
	}else{
		getIg = "1";
	}

	if($("#im").text()!=null && $("#im").text() !=""){
		getIm = $("#im").text();
	}else{
		getIm = "0";
	}
	if($("#ic").text()!=null && $("#ic").text() !=""){
		getIc = $("#ic").text();
	}else{
		getIc = "0";
	}

	var total = getIg*1+getIm*1+getIc*1;

	if(total==0){
		alert("승차권 매수를 선택해 주십시오.");
		return false;
	}else if(total > maxTck){
		alert("승차권 매수는 1회 "+maxTck+"매까지 예매 가능합니다.");
		return false;
	}

	if (deprTime == null || deprTime == "") {
		deprTime = $("#deprTime").val();
	}


	if($("#i_bef_Aft_Dvs").val()!=null && $("#i_bef_Aft_Dvs").val()!=""){
		$("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "bef_Aft_Dvs",
			"id" : "i_bef_Aft_Dvs",
			"value" : bef_Aft_Dvs
		}).appendTo("#onewayInfo");
	}

	if($("#i_req_Rec_Num").val()!=null && $("#i_req_Rec_Num").val()!=""){
		$("#i_req_Rec_Num").val(req_Rec_Num);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "req_Rec_Num",
			"id" : "i_req_Rec_Num",
			"value" : req_Rec_Num
		}).appendTo("#onewayInfo");
	}


	if($("#i_depr_Time").val()!=null && $("#i_depr_Time").val()!=""){
		$("#i_depr_Time").val(deprTime);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "depr_Time",
			"id" : "i_depr_Time",
			"value" : deprTime
		}).appendTo("#onewayInfo");
	}
	if($("#i_ig").val()!=null && $("#i_ig").val()!=""){
		$("#i_ig").val(getIg);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "ig",
			"id" : "i_ig",
			"value" : getIg
		}).appendTo("#onewayInfo");
	}
	if($("#i_im").val()!=null && $("#i_im").val()!=""){
		$("#i_im").val(getIm);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "im",
			"id" : "i_im",
			"value" : getIm
		}).appendTo("#onewayInfo");
	}
	if($("#i_ic").val()!=null && $("#i_ic").val()!=""){
		$("#i_ic").val(getIc);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "ic",
			"id" : "i_ic",
			"value" : getIc
		}).appendTo("#onewayInfo");
	}

	var deprDt = $(".depr_Dt_Entry").val();

	if (deprDt != null && deprDt != "") {
		deprDt = deprDt.replace(/-/gi,"");
	}

	var today = $("#today").val();

	if(deprDt==null || deprDt == ""){
		alert("가는일 필수 입력 항목입니다.");
		return false;
	}else if(deprDt < today){
		alert("가는일 : "+ today.substring(0,4)+"년" + today.substring(4,6)+"월" +today.substring(6,8)+"일 이후이어야 합니다.");
		return false;
	}

	var check = dui.wv.validate($("#onewayInfo"));
	if(!check){
		return true;
	}else{
		var chkAg = confirm("승차권 예매에 따른 취소수수료 및 부도위약금 내용을 읽으셨습니까?\n내용에 동의하십니까?");
		if(chkAg){
			$("#onewayInfo").submit();
		}else{
			return false;
		}
	}

}

function readAlcnListEntry_Rtn(bef_Aft_Dvs, req_Rec_Num)  {

	var deprTime = $("#rtn_Depr_Time").text();
	var rtn_Depr_Time_Bck = $("#rtn_Depr_Time_Bck").text();
	var getIg;
	var getIm;
	var getIc;

	if($("#ig").text()!=null && $("#ig").text() !=""){
		getIg = $("#ig").text();
	}else{
		getIg = "1";
	}

	if($("#im").text()!=null && $("#im").text() !=""){
		getIm = $("#im").text();
	}else{
		getIm = "0";
	}

	if($("#ic").text()!=null && $("#ic").text() !=""){
		getIc = $("#ic").text();
	}else{
		getIc = "0";
	}

	var total = getIg*1+getIm*1+getIc*1;

	if(total==0){
		alert("승차권 매수를 선택해 주십시오.");
		return false;
	}else if(total > maxTck){
		alert("승차권 매수는 1회 "+maxTck+"매까지 예매 가능합니다.");
		return false;
	}

	if (deprTime == null || deprTime == "") {
		deprTime = $("#deprTime").val();
	}
	if (rtn_Depr_Time_Bck == null || rtn_Depr_Time_Bck == "") {
		rtn_Depr_Time_Bck = "000000";
	}

	$("#returnInfo").attr("action","/rtck/readRtnAlcnList.do");

	if($("#i_bef_Aft_Dvs").val()!=null && $("#i_bef_Aft_Dvs").val()!=""){
		$("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "bef_Aft_Dvs",
			"id" : "i_bef_Aft_Dvs",
			"value" : bef_Aft_Dvs
		}).appendTo("#returnInfo");
	}

	if($("#i_req_Rec_Num").val()!=null && $("#i_req_Rec_Num").val()!=""){
		$("#i_req_Rec_Num").val(req_Rec_Num);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "req_Rec_Num",
			"id" : "i_req_Rec_Num",
			"value" : req_Rec_Num
		}).appendTo("#returnInfo");
	}

	if($("#i_rtn_Depr_Time").val()!=null && $("#i_rtn_Depr_Time").val()!=""){
		$("#i_rtn_Depr_Time").val(deprTime);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "rtn_Depr_Time",
			"id" : "i_rtn_Depr_Time",
			"value" : deprTime
		}).appendTo("#returnInfo");
	}

	if($("#i_rtn_Depr_Time_Bck").val()!=null && $("#i_rtn_Depr_Time_Bck").val()!=""){
		$("#i_rtn_Depr_Time_Bck").val(rtn_Depr_Time_Bck);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "rtn_Depr_Time_Bck",
			"id" : "i_rtn_Depr_Time_Bck",
			"value" : rtn_Depr_Time_Bck
		}).appendTo("#returnInfo");
	}

	if($("#i_ig").val()!=null && $("#i_ig").val()!=""){
		$("#i_ig").val(getIg);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "ig",
			"id" : "i_ig",
			"value" : getIg
		}).appendTo("#returnInfo");
	}

	if($("#i_im").val()!=null && $("#i_im").val()!=""){
		$("i_im").val(getIm);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "im",
			"id" : "i_im",
			"value" : getIm
		}).appendTo("#returnInfo");
	}

	if($("#i_ic").val()!=null && $("#i_ic").val()!=""){
		$("#i_ic").val(getIc);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "ic",
			"id" : "i_ic",
			"value" : getIc
		}).appendTo("#returnInfo");
	}

	if($("#i_page_Inf_Num").val()!=null && $("#i_page_Inf_Num").val()!=""){
		$("#i_page_Inf_Num").val("5");
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "page_Inf_Num",
			"id" : "i_page_Inf_Num",
			"value" : "5"
		}).appendTo("#returnInfo");
	}

	var rtnDeprDt =  $(".rtn_Depr_Dt_Entry").val();
	var rtnDeprDtBck = $(".rtn_Depr_Dt_Bck").val();

	if (rtnDeprDt != null && rtnDeprDt != "") {
		rtnDeprDt = rtnDeprDt.replace(/-/gi,"");
	}

	if (rtnDeprDtBck != null && rtnDeprDtBck != "") {
		rtnDeprDtBck = rtnDeprDtBck.replace(/-/gi,"");
	}

	var today = $("#today").val();

	if(rtnDeprDt==null || rtnDeprDt == ""){
		alert("가는일 필수 입력 항목입니다.");
		return false;
	}else if(rtnDeprDt < today){
		alert("가는일 : "+ today.substring(0,4)+"년" + today.substring(4,6)+"월" +today.substring(6,8)+"일 이후이어야 합니다.");
		return false;
	}

	if(rtnDeprDtBck==null || rtnDeprDtBck == ""){
		alert("오는일 필수 입력 항목입니다.");
		return false;
	}else if(rtnDeprDtBck < today){
		alert("오는일 : "+ today.substring(0,4)+"년" + today.substring(4,6)+"월" +today.substring(6,8)+"일 이후이어야 합니다.");
		return false;
	}

	var deprTime_Fmt = "";
	var rtn_Depr_Time_Bck_Fmt = "";

	if (deprTime != null && deprTime != "") {
		deprTime_Fmt = deprTime.replace(/:/gi,"") + "00";

	}

	if (rtn_Depr_Time_Bck != null && rtn_Depr_Time_Bck != "") {
		rtn_Depr_Time_Bck_Fmt = rtn_Depr_Time_Bck.replace(/:/gi,"") + "00";
	}

	var rtndeprDtTime = rtnDeprDt + "" +deprTime_Fmt;
	var rtnDeprDtTimeBck = rtnDeprDtBck + "" + rtn_Depr_Time_Bck_Fmt;

	if(rtnDeprDtTimeBck*1 < rtndeprDtTime*1){
		alert("오는 일은 가는 일 이후이어야 합니다.");
		return false;
	}

	var check = dui.wv.validate($("#returnInfo"));
	if(!check){
		return true;
	}else{
		var chkAg = confirm("승차권 예매에 따른 취소수수료 및 부도위약금 내용을 읽으셨습니까?\n내용에 동의하십니까?");
		if(chkAg){
			$("#returnInfo").submit();
		}else{
			return false;
		}
	}
}

function oneway_Return(gbn){

	if(gbn=='01'){
		$(".rt_depr_Dt").addClass("disabled");
		$(".date2 input[name='rtn_Depr_Dt_Bck']").attr("disabled","true");
		$(".rt_depr_Time").addClass("disabled");
		$(".date2 input[name='rt_depr_Dt']").val("");
		$(".depr_Time_Rt").attr("id", "depr_Time");

		$(".entryForm").attr("id", "onewayInfo");
		$(".entryForm").attr("action", "/otck/readAlcnList.do");
		$(".search_area1 a").attr("onclick", "readAlcnListEntry('D',10); return false;");

		$(".depr_Trml_Nm").val("");
		$(".arvl_Trml_Nm").val("");

		$("#deprArea").attr("onclick", "showLayer($('[data-layer-name=terminal_select01]')); return false;");
		$("#arvlArea").attr("onclick", "showLayer($('[data-layer-name=terminal_select02]')); return false;");

		$(".depr_Trml_Nm").attr("onclick", "showLayer($('[data-layer-name=terminal_select01]')); return false;");
		$(".arvl_Trml_Nm").attr("onclick", "showLayer($('[data-layer-name=terminal_select02]')); return false;");

		$(".depr_Trml_Nm").attr("id", "depr_Trml_Nm");
		$(".arvl_Trml_Nm").attr("id", "arvl_Trml_Nm");

		$(".depr_Dt").removeClass("rtn_Depr_Dt_Entry");
		$(".depr_Dt").addClass("depr_Dt_Entry");
		$(".depr_Dt").attr("onchange", "initDate(); return false;");

		$(".depr_Time").attr("id", "depr_Time");
		$(".depr_Dt").attr("name", "depr_Dt");

		$(".depr_Trml_Cd").attr("id","depr_Trml_Cd");
		$(".arvl_Trml_Cd").attr("id","arvl_Trml_Cd");

		var today = $("#today").val();

	}else if(gbn=='02'){
		$(".date2").removeClass("disabled");
		$(".date2 input[name='rtn_Depr_Dt_Bck']").removeAttr("disabled");
		$(".rt_depr_Time").removeClass("disabled");
		$(".depr_Time_Rt").attr("id", "depr_Time_Rt");
		$(".depr_Time_Rt_Bck").attr("id", "depr_Time_Rt_Bck");

		$(".entryForm").attr("id", "returnInfo");
		$(".entryForm").attr("action", "/rtck/readRtnAlcnList.do");
		$(".search_area1 a").attr("onclick", "readAlcnListEntry_Rtn('D',10); return false;");

		$("#deprArea").attr("onclick", "showLayer($('[data-layer-name=terminal_select03]')); return false;");
		$("#arvlArea").attr("onclick", "showLayer($('[data-layer-name=terminal_select04]')); return false;");

		$(".depr_Trml_Nm").val("");
		$(".arvl_Trml_Nm").val("");

		$(".depr_Trml_Nm").attr("onclick", "showLayer($('[data-layer-name=terminal_select03]')); return false;");
		$(".arvl_Trml_Nm").attr("onclick", "showLayer($('[data-layer-name=terminal_select04]')); return false;");

		$(".depr_Trml_Nm").attr("id", "depr_Trml_Nm_Rtn");
		$(".arvl_Trml_Nm").attr("id", "arvl_Trml_Nm_Rtn");

		$(".depr_Time").attr("id", "rtn_Depr_Time");
		$(".depr_Dt").attr("name", "rtn_Depr_Dt");
		$(".depr_Dt").attr("onchange", "initDate2(); return false;");

		$(".depr_Dt").removeClass("depr_Dt_Entry");
		$(".depr_Dt").addClass("rtn_Depr_Dt_Entry");


		$(".depr_Trml_Cd").attr("id","rtn_Depr_Trml_Cd");
		$(".arvl_Trml_Cd").attr("id","rtn_Arvl_Trml_Cd");

		var today = $("#today").val();

	}
}

// 배차이후 이전 다음 버튼
function upPage(bef_Aft_Dvs, req_Rec_Num, first_Dt, first_Time) {


	if($("#i_bef_Aft_Dvs").val()!=null && $("#i_bef_Aft_Dvs").val()!=""){
		$("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "bef_Aft_Dvs",
			"id" : "i_bef_Aft_Dvs",
			"value" : bef_Aft_Dvs
		}).appendTo("#onewayInfo");
	}

	if($("#i_req_Rec_Num").val()!=null && $("#i_req_Rec_Num").val()!=""){
		$("#i_req_Rec_Num").val(req_Rec_Num);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "req_Rec_Num",
			"id" : "i_req_Rec_Num",
			"value" : req_Rec_Num
		}).appendTo("#onewayInfo");
	}

	if($("#i_depr_Time").val()!=null && $("#i_depr_Time").val()!=""){
		$("#i_depr_Time").val(first_Time);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "depr_Time",
			"id" : "i_depr_Time",
			"value" : first_Time
		}).appendTo("#onewayInfo");
	}

	$("#depr_Dt").val(first_Dt);

	$("#onewayInfo").submit();
}

// 배차이후 이전 다음 버튼
function dwnPage(bef_Aft_Dvs, req_Rec_Num, last_Dt, last_Time) {

	if($("#i_bef_Aft_Dvs").val()!=null && $("#i_bef_Aft_Dvs").val()!=""){
		$("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "bef_Aft_Dvs",
			"id" : "i_bef_Aft_Dvs",
			"value" : bef_Aft_Dvs
		}).appendTo("#onewayInfo");
	}

	if($("#i_req_Rec_Num").val()!=null && $("#i_req_Rec_Num").val()!=""){
		$("#i_req_Rec_Num").val(req_Rec_Num);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "req_Rec_Num",
			"id" : "i_req_Rec_Num",
			"value" : req_Rec_Num
		}).appendTo("#onewayInfo");
	}

	if($("#i_depr_Time").val()!=null && $("#i_depr_Time").val()!=""){
		$("#i_depr_Time").val(last_Time);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "depr_Time",
			"id" : "i_depr_Time",
			"value" : last_Time
		}).appendTo("#onewayInfo");
	}

	$("#depr_Dt").val(last_Dt);

	$("#onewayInfo").submit();
}

// 왕복 이전 다음 버튼
function upPage_Rtn(bef_Aft_Dvs, req_Rec_Num, first_Dt, first_Time)  {

	$("#returnInfo").attr("action","/rtck/readRtnAlcnList.do");

	if($("#i_bef_Aft_Dvs").val()!=null && $("#i_bef_Aft_Dvs").val()!=""){
		$("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "bef_Aft_Dvs",
			"id" : "i_bef_Aft_Dvs",
			"value" : bef_Aft_Dvs
		}).appendTo("#returnInfo");
	}

	if($("#i_req_Rec_Num").val()!=null && $("#i_req_Rec_Num").val()!=""){
		$("#i_req_Rec_Num").val(req_Rec_Num);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "req_Rec_Num",
			"id" : "i_req_Rec_Num",
			"value" : req_Rec_Num
		}).appendTo("#returnInfo");
	}

	if($("#i_changeVal").val()!=null && $("#i_changeVal").val()!=""){
		$("#i_changeVal").val(null);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "changeVal",
			"id" : "i_changeVal",
			"value" : null
		}).appendTo("#returnInfo");
	}

	if($("#i_rtn_Depr_Dt").val()!=null && $("#i_rtn_Depr_Dt").val()!=""){
		$("#i_rtn_Depr_Dt").val(first_Dt);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "rtn_Depr_Dt",
			"id" : "i_rtn_Depr_Dt",
			"value" : first_Dt
		}).appendTo("#returnInfo");
	}

	if($("#i_rtn_Depr_Time").val()!=null && $("#i_rtn_Depr_Time").val()!=""){
		$("#i_rtn_Depr_Time").val(first_Time);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "rtn_Depr_Time",
			"id" : "i_rtn_Depr_Time",
			"value" : first_Time
		}).appendTo("#returnInfo");
	}


	$("#returnInfo").submit();
}

function dwnPage_Rtn(bef_Aft_Dvs, req_Rec_Num, last_Dt, last_Time)  {

	$("#returnInfo").attr("action","/rtck/readRtnAlcnList.do");

	if($("#i_bef_Aft_Dvs").val()!=null && $("#i_bef_Aft_Dvs").val()!=""){
		$("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "bef_Aft_Dvs",
			"id" : "i_bef_Aft_Dvs",
			"value" : bef_Aft_Dvs
		}).appendTo("#returnInfo");
	}

	if($("#i_req_Rec_Num").val()!=null && $("#i_req_Rec_Num").val()!=""){
		$("#i_req_Rec_Num").val(req_Rec_Num);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "req_Rec_Num",
			"id" : "i_req_Rec_Num",
			"value" : req_Rec_Num
		}).appendTo("#returnInfo");
	}


	if($("#i_changeVal").val()!=null && $("#i_changeVal").val()!=""){
		$("#i_changeVal").val(null);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "changeVal",
			"id" : "i_changeVal",
			"value" : null
		}).appendTo("#returnInfo");
	}

	if($("#i_rtn_Depr_Dt").val()!=null && $("#i_rtn_Depr_Dt").val()!=""){
		$("#i_rtn_Depr_Dt").val(last_Dt);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "rtn_Depr_Dt",
			"id" : "i_rtn_Depr_Dt",
			"value" : last_Dt
		}).appendTo("#returnInfo");
	}

	if($("#i_rtn_Depr_Time").val()!=null && $("#i_rtn_Depr_Time").val()!=""){
		$("#i_rtn_Depr_Time").val(last_Time);
	}else{
		$("<input />", {
			"type" : "hidden",
			"name" : "rtn_Depr_Time",
			"id" : "i_rtn_Depr_Time",
			"value" : last_Time
		}).appendTo("#returnInfo");
	}

	$("#returnInfo").submit();
}

/**
 *
 */
function rotInfAjax(id, sqno) {

	var rotId = id;
	var rotSqno = sqno;
	var params = "rot_Id=" + rotId + "&rot_Sqno=" + rotSqno;

	$.ajax({
		url : "/otck/rotInf.do",
		data : params,
		type : "post",
		dataType : "json",
		cache : false,
		timeout : 30000,
		success : function(json) {

			var rotInf = json;

			var str = "";
			for (var i = 0; i < rotInf.length; i++) {

				var trml_Nm = rotInf[i].TRML_SHCT_NM;
				if (trml_Nm != null) {
					str += "<li>" + trml_Nm + "</li>";
				}
			}
			if (rotInf.messageFromDb != null && rotInf.messageFromDb != "") {
				str += "<li>" + rotInf.messageFromDb + "</li>"
			}

			// for문의 끝
			$(".td_wrap2 ul").html(str);

		},
		error : function(xhr, textStatus, errorThrown) {
			$(".td_wrap2 ul").html(
					"<div>" + textStatus + " (HTTP-" + xhr.status + " / "
							+ errorThrown + ")</div>");
		}
	});
}
