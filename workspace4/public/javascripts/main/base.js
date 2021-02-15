function fc_SeatCheck50() {
  var d = document.InputForm;
  Child = d.pCnt_050.selectedIndex;
  Man = d.pCnt_100.selectedIndex;
  Bus_cod = d.BUS_GRA_I.selectedIndex;
  Total = Child + Man;

  if (Bus_cod == 0 || Bus_cod == 1 || Bus_cod == 4) {
    ticket_num = 45;
  } else {
    ticket_num = 27;
  }

  if (Total > ticket_num) {
    alert(" 해당 버스등급에 좌석수 (" + ticket_num + ") 을 초과하였습니다.");
    d.pCnt_050.selectedIndex = 0;
    d.pCnt_050.focus();
    return false;
  }
  return true;
}

function fc_SeatCheck100() {
  var d = document.InputForm;
  Child = d.pCnt_050.selectedIndex;
  Man = d.pCnt_100.selectedIndex;
  Bus_cod = d.BUS_GRA_I.selectedIndex;
  Total = Child + Man;

  if (Bus_cod == 0 || Bus_cod == 1 || Bus_cod == 4) {
    ticket_num = 45;
  } else {
    ticket_num = 27;
  }

  if (Total > ticket_num) {
    alert(" 해당 버스등급에 좌석수 (" + ticket_num + ") 을 초과하였습니다.");
    d.pCnt_100.selectedIndex = 0;
    d.pCnt_100.focus();
    return false;
  }
  return true;
}

function ticket_ChangeTer() {
  var d = document.Inform;

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

function fc_ChangeTer() {
  var d = document.Inform;

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


function valiOnewayInfo(bef_Aft_Dvs, req_Rec_Num) {
  var deprTime = $("#depr_Time").text();
  var getIg;
  var getIm;
  var getIc;

  if ($("#ig").text() != null && $("#ig").text() != "") {
    getIg = $("#ig").text();
  } else {
    getIg = "1";
  }

  if ($("#im").text() != null && $("#im").text() != "") {
    getIm = $("#im").text();
  } else {
    getIm = "0";
  }
  if ($("#ic").text() != null && $("#ic").text() != "") {
    getIc = $("#ic").text();
  } else {
    getIc = "0";
  }

  var total = getIg * 1 + getIm * 1 + getIc * 1;

  if (total == 0) {
    alert("승차권 매수를 선택해 주십시오.");
    return false;
  } else if (total > maxTck) {
    alert("승차권 매수는 1회 " + maxTck + "매까지 예매 가능합니다.");
    return false;
  }


  if (deprTime == null || deprTime == "") {
    deprTime = $("#deprTime").val();
  }


  if ($("#i_bef_Aft_Dvs").val() != null && $("#i_bef_Aft_Dvs").val() != "") {
    $("#i_bef_Aft_Dvs").val(bef_Aft_Dvs);
  } else {
    $("<input />", {
      "type": "hidden",
      "name": "bef_Aft_Dvs",
      "id": "i_bef_Aft_Dvs",
      "value": bef_Aft_Dvs
    }).appendTo("#onewayInfo");
  }

  if ($("#i_req_Rec_Num").val() != null && $("#i_req_Rec_Num").val() != "") {
    $("#i_req_Rec_Num").val(req_Rec_Num);
  } else {
    $("<input />", {
      "type": "hidden",
      "name": "req_Rec_Num",
      "id": "i_req_Rec_Num",
      "value": req_Rec_Num
    }).appendTo("#onewayInfo");
  }


  if ($("#i_depr_Time").val() != null && $("#i_depr_Time").val() != "") {
    $("#i_depr_Time").val(deprTime);
  } else {
    $("<input />", {
      "type": "hidden",
      "name": "depr_Time",
      "id": "i_depr_Time",
      "value": deprTime
    }).appendTo("#onewayInfo");
  }
  if ($("#i_ig").val() != null && $("#i_ig").val() != "") {
    $("#i_ig").val(getIg);
  } else {
    $("<input />", {
      "type": "hidden",
      "name": "ig",
      "id": "i_ig",
      "value": getIg
    }).appendTo("#onewayInfo");
  }
  if ($("#i_im").val() != null && $("#i_im").val() != "") {
    $("#i_im").val(getIm);
  } else {
    $("<input />", {
      "type": "hidden",
      "name": "im",
      "id": "i_im",
      "value": getIm
    }).appendTo("#onewayInfo");
  }
  if ($("#i_ic").val() != null && $("#i_ic").val() != "") {
    $("#i_ic").val(getIc);
  } else {
    $("<input />", {
      "type": "hidden",
      "name": "ic",
      "id": "i_ic",
      "value": getIc
    }).appendTo("#onewayInfo");
  }

  var deprDt = $("#depr_Dt").val();

  if (deprDt != null && deprDt != "") {
    deprDt = deprDt.replace(/-/gi, "");
  }

  var check = dui.wv.validate($("#onewayInfo"));

  if (!check) {
    return true;
  } else {
    showLayer($('[data-layer-name=\'cautionNote\']'));
  }
}

// 티켓합계계산
function fnTckSumInfo(btkc, cnt) {

  var igFee = $("#igFee").val() * 1;
  var icFee = $("#icFee").val() * 1;

  var igCnt = $("#ig").val() * 1;
  var icCnt = $("#ic").val() * 1;

  var str = "";

  if (btkc == "ig") {
    igCnt = cnt;
  } else if (btkc == "ic") {
    icCnt = cnt;
  }

  var totlaCnt = igCnt * 1 + icCnt * 1;

  if (totlaCnt == 0) {
    alert("승차권 매수를 선택해 주십시오.");
    $("#flagYn").val("N");
    return false;
  }

  var dcFeeA = 0;
  var dcFeeB = 0;
  var dcFeeC = 0;
  var dcFeeD = 0;

  if (btkc == "ig") {
    igCnt = cnt;
    $(".ig span").text("어른 " + igCnt + "명");
    var igVal = comma(igFee * igCnt);
    $(".ig strong").text(igVal + "원");
    $("#ig").val(igCnt);


    if (dcFeeD_Val == 0) {
      $("#strong_DcFee_D").text(dcFeeD_Val + "원");
      $("#dcFeeD_V").val(dcFeeD_Val);

      if ($("#r1_D").is(":checked") == true) {
        $("#dcSum").html("0원");
      }

      $("#r1_D").attr("disabled", "disabled");
      $("#divDcD").addClass("disable");
      $("#r1_D").removeAttr("checked");
    } else {
      $("#strong_DcFee_D").text("(-) " + dcFeeD_Val + "원");
      $("#dcFeeD_V").val(dcFeeD_Val);

      $("#r1_D").removeAttr("disabled");
      $("#divDcD").removeClass("disable");
    }
  }

  var sum = (igFee * igCnt) + (icFee * icCnt);
  var sumVal = comma(sum);
  $(".sum strong").html(sumVal + "원");

  $("#total").val(sum);
}

function fnSum() {
  var sel0 = Number($("#sel0").val());
  var sel1 = Number($("#sel1").val());
  var p0 = Number($("#label0").val());
  var p1 = Number($("#label1").val());
  var sum = sel0*p0 + sel1*p1;
  var cnt = sel0 + sel1;
  $('.changeVal').text(sum + "원");
  $("#cur_rSeat").val(cnt);
  $("#cur_price").val(sum);
}
