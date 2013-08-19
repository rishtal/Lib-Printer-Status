var socket = io.connect('http://192.168.101.45:8000');
  
socket.on('status', function (data) {

  //BUTTON BAR
  if (data["DBLIBBW1"]["Online"] == 1) {
    if (data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Alert") {
      $("#BW1btn").html('<a class="btn btn-warning custom" href="#BW1">' + 'Black & White Printer 1' + '</a>');
    }
    else if (data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Error" || data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Paper Misfeed" || data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Cover Open" || data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Cartridge Empty") {
      $("#BW1btn").html('<a class="btn btn-danger custom" href="#BW1">' + 'Black & White Printer 1' + '</a>');
    }
    else {
      $("#BW1btn").html('<a class="btn custom" href="#BW1">' + 'Black & White Printer 1' + '</a>');
    }
  }
  else {
    $("#BW1btn").html('<a class="btn custom disabled" href="#BW1">' + 'Black & White Printer 1' + '</a>');
  }
  if (data["DBLIBBW2"]["Online"] == 1) {
    if (data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Alert") {
      $("#BW2btn").html('<a class="btn btn-warning custom" href="#BW2">' + 'Black & White Printer 2' + '</a>');
    }
    else if (data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Error" || data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Paper Misfeed" || data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Cover Open" || data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Cartridge Empty") {
      $("#BW2btn").html('<a class="btn btn-danger custom" href="#BW2">' + 'Black & White Printer 2' + '</a>');
    }
    else {
      $("#BW2btn").html('<a class="btn custom" href="#BW2">' + 'Black & White Printer 2' + '</a>');
    }
  }
  else {
    $("#BW2btn").html('<a class="btn custom disabled" href="#BW2">' + 'Black & White Printer 2' + '</a>');
  }
  if (data["DBLIBBW3"]["Online"] == 1) {
    if (data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Alert") {
      $("#BW3btn").html('<a class="btn btn-warning custom" href="#BW3">' + 'Black & White 3 (MFP)' + '</a>');
    }
    else if (data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Error" || data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Paper Misfeed" || data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Cover Open" || data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Cartridge Empty") {
      $("#BW3btn").html('<a class="btn btn-danger custom" href="#BW3">' + 'Black & White 3 (MFP)' + '</a>');
    }
    else {
      $("#BW3btn").html('<a class="btn custom" href="#BW3">' + 'Black & White 3 (MFP)' + '</a>');
    }
  }
  else {
    $("#BW3btn").html('<a class="btn custom disabled" href="#BW3">' + 'Black & White 3 (MFP)' + '</a>');
  }
  if (data["DBLIBCOL1"]["Online"] == 1) {
    if (data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Alert") {
      $("#COL1btn").html('<a class="btn btn-warning custom" href="#COL1">' + 'Color Printer' + '</a>');
    }
    else if (data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Error" || data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Paper Misfeed" || data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Cover Open" || data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Cartridge Empty") {
      $("#COL1btn").html('<a class="btn btn-danger custom" href="#COL1">' + 'Color Printer' + '</a>');
    }
    else {
      $("#COL1btn").html('<a class="btn custom" href="#COL1">' + 'Color Printer' + '</a>');
    }
  }
  else {
    $("#COL1btn").html('<a class="btn custom disabled" href="#COL1">' + 'Color Printer' + '</a>');
  }
  if (data["DBLIBMFP1"]["Online"] == 1) {
    if (data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Alert") { //&& data["DBLIBMFP1"]["Status"]["Printer"]["Message"].indexOf("Tray 1") == 0) {
      $("#MFP1btn").html('<a class="btn btn-warning custom" href="#MFP1">' + 'Multi-Functional Printer' + '</a>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Error" || data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Paper Misfeed" || data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Cover Open" || data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Cartridge Empty") {
      $("#MFP1btn").html('<a class="btn btn-danger custom" href="#MFP1">' + 'Multi-Functional Printer' + '</a>');
    }
    else {
      $("#MFP1btn").html('<a class="btn custom" href="#MFP1">' + 'Multi-Functional Printer' + '</a>');
    }
  }
  else {
    $("#MFP1btn").html('<a class="btn custom disabled" href="#MFP1">' + 'Multi-Functional Printer' + '</a>');
  } 
  if (data["DBLIBMFPF1"]["Online"] == 1) {
    if (data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Alert") {
      $("#MFPF1btn").html('<a class="btn btn-warning custom" href="#MFPF1">' + 'MFP with Fax' + '</a>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Error" || data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Paper Misfeed" || data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Cover Open" || data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Cartridge Empty") {
      $("#MFPF1btn").html('<a class="btn btn-danger custom" href="#MFPF1">' + 'MFP with Fax' + '</a>');
    }
    else {
      $("#MFPF1btn").html('<a class="btn custom" href="#MFPF1">' + 'MFP with Fax' + '</a>');
    }
  }
  else {
    $("#MFPF1btn").html('<a class="btn custom disabled" href="#MFPF1">' + 'MFP with Fax' + '</a>');
  }
  if (data["DBLIBMFPSTAFF"]["Online"] == 1) {
    if (data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Alert") {
      $("#MFPSTAFFbtn").html('<a class="btn btn-warning custom" href="#MFPSTAFF">' + 'Staff Printer' + '</a>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Error" || data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Paper Misfeed" || data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Cover Open" || data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Cartridge Empty") {
      $("#MFPSTAFFbtn").html('<a class="btn btn-danger custom" href="#MFPSTAFF">' + 'Staff Printer' + '</a>');
    }
    else {
      $("#MFPSTAFFbtn").html('<a class="btn custom" href="#MFPSTAFF">' + 'Staff Printer' + '</a>');
    }
  }
  else {
    $("#MFPSTAFFbtn").html('<a class="btn custom disabled" href="#MFPSTAFF">' + 'Staff Printer' + '</a>');
  }

  //BLACK & WHITE 1
  $("#BW1online").html(data["DBLIBBW1"]["Online"]);
  if (data["DBLIBBW1"]["Online"] == 1) {
    //Info
    $("#BW1name").html('<strong>Name</strong>: ' + data["DBLIBBW1"]["Info"]["Name"]);
    $("#BW1tgioaID").html('<strong>TGIOA ID</strong>: ' + data["DBLIBBW1"]["Info"]["TGIOA_ID"]);
    $("#BW1deviceName").html('<strong>Device Name</strong>: ' + data["DBLIBBW1"]["Info"]["Device_Name"]);
    $("#BW1hostName").html('<strong>Host Name</strong>: ' + data["DBLIBBW1"]["Info"]["Host_Name"]);
    $("#BW1machineID").html('<strong>Machine ID</strong>: ' + data["DBLIBBW1"]["Info"]["Machine_ID"]);
    $("#BW1ipAddress").html('<strong>IP Address</strong>: ' + data["DBLIBBW1"]["Info"]["IP_Address"]);
    $("#BW1modelName").html('<strong>Model Name</strong>: ' + data["DBLIBBW1"]["Info"]["Model_Name"]);
    //Status
    if (data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Ready" || data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Energy Saver Mode" || data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Warming Up...") {
      $("#BW1pStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Printing...") {
      $("#BW1pStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBBW1"]["Status"]["Printer"]["Status"] == "Cartridge Almost Empty") {
      $("#BW1pStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBBW1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else {
      $("#BW1pStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBBW1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    var mess = data["DBLIBBW1"]["Status"]["Printer"]["Message"];
    var message = mess.split("/");
    var messages = "";
    for (var i = 0; i < message.length; i++) {
      messages += (message[i] + '<br />'); 
    }
    $("#BW1pMessage").html(messages);
    //Supplies
    $("#BW1paper").html("PAPER");
    if (data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Almost Out of Paper") {
      $("#BW1tr1").html('<p class="text-warning">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Error" || data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Out of Paper") { 
      $("#BW1tr1").html('<p class="text-error">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW1tr1").html('&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"]);
    }
    if (data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Almost Out of Paper") {
      $("#BW1tr2").html('<p class="text-warning">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Error" || data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Out of Paper") { 
      $("#BW1tr2").html('<p class="text-error">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW1tr2").html('&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"]);
    }
    if (data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Almost Out of Paper") {
      $("#BW1tr3").html('<p class="text-warning">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Error" || data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Out of Paper") { 
      $("#BW1tr3").html('<p class="text-error">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW1tr3").html('&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBBW1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"]);
    }
    $("#BW1toner").html("TONER");
    if (data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Almost Empty") {
      $("#BW1toB").html('<p class="text-warning">&nbsp<strong>Black</strong>: ' + data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Empty" || data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Status"] == "Error") {
      $("#BW1toB").html('<p class="text-error">&nbsp<strong>Black</strong>: ' + data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#BW1toB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBBW1"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)');
    }
    $("#BW1kits").html("KITS");
    $("#BW1kitA").html('&nbsp<strong>Maintenance Kit A</strong>: ' + data["DBLIBBW1"]["Supplies"]["Kits"]["Maintenance_Kit_A"]["Status"] + ' (' + data["DBLIBBW1"]["Supplies"]["Kits"]["Maintenance_Kit_A"]["Level"] + ')');
    $("#BW1kitB").html('&nbsp<strong>Maintenance Kit B</strong>: ' + data["DBLIBBW1"]["Supplies"]["Kits"]["Maintenance_Kit_B"]["Status"] + ' (' + data["DBLIBBW1"]["Supplies"]["Kits"]["Maintenance_Kit_B"]["Level"] + ')');
    //Counter
    $("#BW1countPrinter").html("PRINTER");
    $("#BW1countPrinterBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBBW1"]["Counter"]["Printer"]["Black__White"]);
    $("#BW1countOther").html("OTHER");
    $("#BW1countDuplex").html('&nbsp<strong>Duplex</strong>: ' + data["DBLIBBW1"]["Counter"]["Other"]["Duplex"]);
  }
  else {
    $("#BW1name").html("OFFLINE");
    $("#BW1tgioaID").html('');
    $("#BW1deviceName").html('');
    $("#BW1hostName").html('');
    $("#BW1machineID").html('');
    $("#BW1ipAddress").html('');
    $("#BW1modelName").html('');
    $("#BW1pStatus").html("OFFLINE");
    $("#BW1pMessage").html('');
    $("#BW1paper").html("OFFLINE");
    $("#BW1tr1").html('');
    $("#BW1tr2").html('');
    $("#BW1tr3").html('');
    $("#BW1toner").html('');
    $("#BW1toB").html('');
    $("#BW1kits").html('');
    $("#BW1kitA").html('');
    $("#BW1kitB").html('');
    $("#BW1countPrinter").html("OFFLINE");
    $("#BW1countPrinterBW").html('');
    $("#BW1countOther").html('');
    $("#BW1countDuplex").html('');
  }
  
  //BLACK & WHITE 2
  $("#BW2online").html(data["DBLIBBW2"]["Online"]);
  if (data["DBLIBBW2"]["Online"] == 1) {
    //Info
    $("#BW2name").html('<strong>Name</strong>: ' + data["DBLIBBW2"]["Info"]["Name"]);
    $("#BW2tgioaID").html('<strong>TGIOA ID</strong>: ' + data["DBLIBBW2"]["Info"]["TGIOA_ID"]);
    $("#BW2deviceName").html('<strong>Device Name</strong>: ' + data["DBLIBBW2"]["Info"]["Device_Name"]);
    $("#BW2hostName").html('<strong>Host Name</strong>: ' + data["DBLIBBW2"]["Info"]["Host_Name"]);
    $("#BW2machineID").html('<strong>Machine ID</strong>: ' + data["DBLIBBW2"]["Info"]["Machine_ID"]);
    $("#BW2ipAddress").html('<strong>IP Address</strong>: ' + data["DBLIBBW2"]["Info"]["IP_Address"]);
    $("#BW2modelName").html('<strong>Model Name</strong>: ' + data["DBLIBBW2"]["Info"]["Model_Name"]);
    //Status
    if (data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Ready" || data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Energy Saver Mode" || data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Warming Up...") {
      $("#BW2pStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW2"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Printing...") {
      $("#BW2pStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW2"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBBW2"]["Status"]["Printer"]["Status"] == "Cartridge Almost Empty") {
      $("#BW2pStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBBW2"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else {
      $("#BW2pStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBBW2"]["Status"]["Printer"]["Status"] + '</p>');
    }
    var mess = data["DBLIBBW2"]["Status"]["Printer"]["Message"];
    var message = mess.split("/");
    var messages = "";
    for (var i = 0; i < message.length; i++) {
      messages += (message[i] + '<br />'); 
    }
    $("#BW2pMessage").html(messages);
    //Supplies
    $("#BW2paper").html("PAPER");
    if (data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Almost Out of Paper") {
      $("#BW2tr1").html('<p class="text-warning">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Error" || data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Out of Paper") { 
      $("#BW2tr1").html('<p class="text-error">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW2tr1").html('&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"]);
    }
    if (data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Almost Out of Paper") {
      $("#BW2tr2").html('<p class="text-warning">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Error" || data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Out of Paper") { 
      $("#BW2tr2").html('<p class="text-error">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW2tr2").html('&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"]);
    }
    if (data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Almost Out of Paper") {
      $("#BW2tr3").html('<p class="text-warning">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Error" || data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Out of Paper") { 
      $("#BW2tr3").html('<p class="text-error">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW2tr3").html('&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBBW2"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"]);
    }
    $("#BW2toner").html("TONER");
    if (data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Almost Empty") {
      $("#BW2toB").html('<p class="text-warning">&nbsp<strong>Black</strong>: ' + data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Empty" || data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Status"] == "Error") {
      $("#BW2toB").html('<p class="text-error">&nbsp<strong>Black</strong>: ' + data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#BW2toB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBBW2"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)');
    }
    $("#BW2kits").html("KITS");
    $("#BW2kitA").html('&nbsp<strong>Maintenance Kit A</strong>: ' + data["DBLIBBW2"]["Supplies"]["Kits"]["Maintenance_Kit_A"]["Status"] + ' (' + data["DBLIBBW2"]["Supplies"]["Kits"]["Maintenance_Kit_A"]["Level"] + ')');
    $("#BW2kitB").html('&nbsp<strong>Maintenance Kit B</strong>: ' + data["DBLIBBW2"]["Supplies"]["Kits"]["Maintenance_Kit_B"]["Status"] + ' (' + data["DBLIBBW2"]["Supplies"]["Kits"]["Maintenance_Kit_B"]["Level"] + ')');
    //Counter
    $("#BW2countPrinter").html("PRINTER");
    $("#BW2countPrinterBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBBW2"]["Counter"]["Printer"]["Black__White"]);
    $("#BW2countOther").html("OTHER");
    $("#BW2countDuplex").html('&nbsp<strong>Duplex</strong>: ' + data["DBLIBBW2"]["Counter"]["Other"]["Duplex"]);
  }
  else {
    $("#BW2name").html("OFFLINE");
    $("#BW2tgioaID").html('');
    $("#BW2deviceName").html('');
    $("#BW2hostName").html('');
    $("#BW2machineID").html('');
    $("#BW2ipAddress").html('');
    $("#BW2modelName").html('');
    $("#BW2pStatus").html("OFFLINE");
    $("#BW2pMessage").html('');
    $("#BW2paper").html("OFFLINE");
    $("#BW2tr1").html('');
    $("#BW2tr2").html('');
    $("#BW2tr3").html('');
    $("#BW2toner").html('');
    $("#BW2toB").html('');
    $("#BW2kits").html('');
    $("#BW2kitA").html('');
    $("#BW2kitB").html('');
    $("#BW2countPrinter").html("OFFLINE");
    $("#BW2countPrinterBW").html('');
    $("#BW2countOther").html('');
    $("#BW2countDuplex").html('');
  }
  
  //BLACK & WHITE 3
  $("#BW3online").html(data["DBLIBBW3"]["Online"]);
  if (data["DBLIBBW3"]["Online"] == 1) {
    //Info
    $("#BW3name").html('<strong>Name</strong>: ' + data["DBLIBBW3"]["Info"]["Name"]);
    $("#BW3tgioaID").html('<strong>TGIOA ID</strong>: ' + data["DBLIBBW3"]["Info"]["TGIOA_ID"]);
    $("#BW3deviceName").html('<strong>Device Name</strong>: ' + data["DBLIBBW3"]["Info"]["Device_Name"]);
    $("#BW3hostName").html('<strong>Host Name</strong>: ' + data["DBLIBBW3"]["Info"]["Host_Name"]);
    $("#BW3machineID").html('<strong>Machine ID</strong>: ' + data["DBLIBBW3"]["Info"]["Machine_ID"]);
    $("#BW3ipAddress").html('<strong>IP Address</strong>: ' + data["DBLIBBW3"]["Info"]["IP_Address"]);
    $("#BW3modelName").html('<strong>Model Name</strong>: ' + data["DBLIBBW3"]["Info"]["Model_Name"]);
    //Status
    $("#BW3statCollumn").html('<p>Printer:</p><p>Copier:</p><p>Scanner:</p>');
    if (data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Ready" || data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Energy Saver Mode" || data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Warming Up...") {
      $("#BW3pStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Printing...") {
      $("#BW3pStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBBW3"]["Status"]["Printer"]["Status"] == "Cartridge Almost Empty") {
      $("#BW3pStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else {
      $("#BW3pStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Printer"]["Status"] + '</p>');
    }
    if (data["DBLIBBW3"]["Status"]["Copier"]["Status"] == "Ready" || data["DBLIBBW3"]["Status"]["Copier"]["Status"] == "Energy Saver Mode" || data["DBLIBBW3"]["Status"]["Copier"]["Status"] == "Warming Up...") {
      $("#BW3cStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Status"]["Copier"]["Status"] == "Printing...") {
      $("#BW3cStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Status"]["Copier"]["Status"] == "Alert" || data["DBLIBBW3"]["Status"]["Copier"]["Status"] == "Cartridge Almost Empty") {
      $("#BW3cStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else {
      $("#BW3cStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Copier"]["Status"] + '</p>');
    }
    if (data["DBLIBBW3"]["Status"]["Scanner"]["Status"] == "Ready" || data["DBLIBBW3"]["Status"]["Scanner"]["Status"] == "Energy Saver Mode" || data["DBLIBBW3"]["Status"]["Scanner"]["Status"] == "Warming Up...") {
      $("#BW3sStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Status"]["Scanner"]["Status"] == "Printing...") {
      $("#BW3sStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Status"]["Scanner"]["Status"] == "Alert" || data["DBLIBBW3"]["Status"]["Scanner"]["Status"] == "Cartridge Almost Empty") {
      $("#BW3sStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else {
      $("#BW3sStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBBW3"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    var mess = data["DBLIBBW3"]["Status"]["Printer"]["Message"];
    var message = mess.split("/");
    var messages = "";
    for (var i = 0; i < message.length; i++) {
      messages += (message[i] + '<br />');
    }
    $("#BW3pMessage").html(messages);
    //Supplies
    $("#BW3paper").html("PAPER");
    if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Almost Out of Paper") {
      $("#BW3tr1").html('<p class="text-warning">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Error" || data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Out of Paper") { 
      $("#BW3tr1").html('<p class="text-error">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW3tr1").html('&nbsp<strong>Tray 1</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"]);
    }
    if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Almost Out of Paper") {
      $("#BW3tr2").html('<p class="text-warning">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Error" || data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Out of Paper") { 
      $("#BW3tr2").html('<p class="text-error">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW3tr2").html('&nbsp<strong>Tray 2</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"]);
    }
    if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Almost Out of Paper") {
      $("#BW3tr3").html('<p class="text-warning">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Error" || data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Out of Paper") { 
      $("#BW3tr3").html('<p class="text-error">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW3tr3").html('&nbsp<strong>Tray 3</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"]);
    }
    if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Almost Out of Paper") {
      $("#BW3tr4").html('<p class="text-warning">&nbsp<strong>Tray 4</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Error" || data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Out of Paper") { 
      $("#BW3tr4").html('<p class="text-error">&nbsp<strong>Tray 4</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#BW3tr4").html('&nbsp<strong>Tray 4</strong>: ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBBW3"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"]);
    }
    $("#BW3toner").html("TONER");
    if (data["DBLIBBW3"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Almost Empty") {
      $("#BW3toB").html('<p class="text-warning">&nbsp<strong>Black</strong>: ' + data["DBLIBBW3"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    else if (data["DBLIBBW3"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Empty" || data["DBLIBBW3"]["Supplies"]["Toner"]["Black"]["Status"] == "Error") {
      $("#BW3toB").html('<p class="text-error">&nbsp<strong>Black</strong>: ' + data["DBLIBBW3"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    else {
      $("#BW3toB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBBW3"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    //Counter
    $("#BW3countPrinter").html("PRINTER");
    $("#BW3countPrinterBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBBW3"]["Counter"]["Printer"]["Black__White"]);
    $("#BW3countCopier").html("COPIER");
    $("#BW3countCopierBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBBW3"]["Counter"]["Copier"]["Black__White"]);
    $("#BW3countScanner").html("SCANNER");
    $("#BW3countScannerBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBBW3"]["Counter"]["Scanner"]["Black__White"]);
    $("#BW3countScannerCOL").html('&nbsp<strong>Color</strong>: ' + data["DBLIBBW3"]["Counter"]["Scanner"]["Color"]);
    $("#BW3countOther").html("OTHER");
    $("#BW3countDuplex").html('&nbsp<strong>Duplex</strong>: ' + data["DBLIBBW3"]["Counter"]["Other"]["Duplex"]);
  }
  else {
    $("#BW3statCollumn").html("OFFLINE");
    $("#BW3name").html("OFFLINE");
    $("#BW3tgioaID").html('');
    $("#BW3deviceName").html('');
    $("#BW3hostName").html('');
    $("#BW3machineID").html('');
    $("#BW3ipAddress").html('');
    $("#BW3modelName").html('');
    $("#BW3pStatus").html('');
    $("#BW3cStatus").html('');
    $("#BW3sStatus").html('');
    $("#BW3pMessage").html('');
    $("#BW3paper").html("OFFLINE");
    $("#BW3tr1").html('');
    $("#BW3tr2").html('');
    $("#BW3tr3").html('');
    $("#BW3tr4").html('');
    $("#BW3toner").html('');
    $("#BW3toB").html('');
    $("#BW3countPrinter").html("OFFLINE");
    $("#BW3countPrinterBW").html('');
    $("#BW3countCopier").html('');
    $("#BW3countCopierBW").html('');
    $("#BW3countScanner").html('');
    $("#BW3countScannerBW").html('');
    $("#BW3countScannerCOL").html('');
    $("#BW3countOther").html('');
    $("#BW3countDuplex").html('');
  }
  
  //COLOR PRINTER
  $("#COL1online").html(data["DBLIBCOL1"]["Online"]);
  //Info
  if (data["DBLIBCOL1"]["Online"] == 1) {
    $("#COL1name").html('<strong>Name</strong>: ' + data["DBLIBCOL1"]["Info"]["Name"]);
    $("#COL1tgioaID").html('<strong>TGIOA ID</strong>: ' + data["DBLIBCOL1"]["Info"]["TGIOA_ID"]);
    $("#COL1deviceName").html('<strong>Device Name</strong>: ' + data["DBLIBCOL1"]["Info"]["Device_Name"]);
    $("#COL1hostName").html('<strong>Host Name</strong>: ' + data["DBLIBCOL1"]["Info"]["Host_Name"]);
    $("#COL1machineID").html('<strong>Machine ID</strong>: ' + data["DBLIBCOL1"]["Info"]["Machine_ID"]);
    $("#COL1ipAddress").html('<strong>IP Address</strong>: ' + data["DBLIBCOL1"]["Info"]["IP_Address"]);
    $("#COL1modelName").html('<strong>Model Name</strong>: ' + data["DBLIBCOL1"]["Info"]["Model_Name"]);
    //Status
    if (data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Ready" || data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Energy Saver Mode" || data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Warming Up...") {
      $("#COL1pStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBCOL1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Printing...") {
      $("#COL1pStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBCOL1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBCOL1"]["Status"]["Printer"]["Status"] == "Cartridge Almost Empty") {
      $("#COL1pStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBCOL1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else {
      $("#COL1pStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBCOL1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    var mess = data["DBLIBCOL1"]["Status"]["Printer"]["Message"];
    var message = mess.split("/");
    var messages = "";
    for (var i = 0; i < message.length; i++) {
      messages += (message[i] + '<br />');
    }
    $("#COL1pMessage").html(messages);
    //Supplies 
    $("#COL1photoUnit").html("PHOTOCONDUCTOR UNIT");
    $("#COL1photoUnitCOL").html('&nbsp<strong>Color</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Photoconductor_Unit"]["Color"]);
    $("#COL1photoUnitB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Photoconductor_Unit"]["Black"]);
    $("#COL1otherSupps").html("OTHER");
    $("#COL1fusingUnit").html('&nbsp<strong>Fusing Unit / Transfer Roller</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Other"]["Fusing_Unit_Transfer_Roller"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Other"]["Fusing_Unit_Transfer_Roller"]["Level"] + '%)');
    $("#COL1transferUnit").html('&nbsp<strong>Intermediate Transfer Roller</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Other"]["Intermediate_Transfer_Unit"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Other"]["Intermediate_Transfer_Unit"]["Level"] + '%)');
    $("#COL1wasteBottle").html('&nbsp<strong>Waste Toner Bottle</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Other"]["Waste_Toner_Bottle"]);
    $("#COL1paper").html("PAPER");
    if (data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Almost Out of Paper") {
      $("#COL1tr1").html('<p class="text-warning">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Error" || data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Out of Paper") { 
      $("#COL1tr1").html('<p class="text-error">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#COL1tr1").html('&nbsp<strong>Tray 1</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"]);
    }
    if (data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Almost Out of Paper") {
      $("#COL1tr2").html('<p class="text-warning">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Error" || data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Out of Paper") { 
      $("#COL1tr2").html('<p class="text-error">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#COL1tr2").html('&nbsp<strong>Tray 2</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"]);
    }
    if (data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Almost Out of Paper") {
      $("#COL1tr3").html('<p class="text-warning">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Error" || data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] == "Out of Paper") { 
      $("#COL1tr3").html('<p class="text-error">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#COL1tr3").html('&nbsp<strong>Tray 3</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Status"] + ' ' + data["DBLIBCOL1"]["Supplies"]["Paper"]["Tray_3_LCT"]["Paper_Remaining"]);
    }
    $("#COL1toner").html("TONER");
    if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Almost Empty") {
      $("#COL1toB").html('<p class="text-warning">&nbsp<strong>Black</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Empty" || data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Status"] == "Error") {
      $("#COL1toB").html('<p class="text-error">&nbsp<strong>Black</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#COL1toB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)');
    }
    if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Status"] == "Catridge Almost Empty") {
      $("#COL1toM").html('<p class="text-warning">&nbsp<strong>Magenta</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Status"] == "Catridge Empty" || data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Status"] == "Error") {
      $("#COL1toM").html('<p class="text-error">&nbsp<strong>Magenta</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#COL1toM").html('&nbsp<strong>Magenta</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Magenta"]["Toner_Remaining"] + '%)');
    }
    if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Status"] == "Catridge Almost Empty") {
      $("#COL1toC").html('<p class="text-warning">&nbsp<strong>Cyan</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Status"] == "Catridge Empty" || data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Status"] == "Error") {
      $("#COL1toC").html('<p class="text-error">&nbsp<strong>Cyan</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#COL1toC").html('&nbsp<strong>Cyan</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Cyan"]["Toner_Remaining"] + '%)');
    }
    if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Status"] == "Catridge Almost Empty") {
      $("#COL1toY").html('<p class="text-warning">&nbsp<strong>Yellow</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Status"] == "Catridge Empty" || data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Status"] == "Error") {
      $("#COL1toY").html('<p class="text-error">&nbsp<strong>Yellow</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#COL1toY").html('&nbsp<strong>Yellow</strong>: ' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Status"] + ' (' + data["DBLIBCOL1"]["Supplies"]["Toner"]["Yellow"]["Toner_Remaining"] + '%)');
    }
    //Counter
    $("#COL1countPrinter").html("PRINTER");
    $("#COL1countPrinterBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBCOL1"]["Counter"]["Printer"]["Black__White"]);
    $("#COL1countPrinterSC").html('&nbsp<strong>Single Color</strong>: ' + data["DBLIBCOL1"]["Counter"]["Printer"]["Single_Color"]);
    $("#COL1countPrinterFC").html('&nbsp<strong>Full Color</strong>: ' + data["DBLIBCOL1"]["Counter"]["Printer"]["Full_Color"]);
    $("#COL1countPrinterTC").html('&nbsp<strong>Two-color</strong>: ' + data["DBLIBCOL1"]["Counter"]["Printer"]["Two_color"]);
    $("#COL1countOther").html("OTHER");
    $("#COL1countDuplex").html('&nbsp<strong>Duplex</strong>: ' + data["DBLIBCOL1"]["Counter"]["Other"]["Duplex"]);
  }
  else {
    $("#COL1name").html("OFFLINE");
    $("#COL1tgioaID").html('');
    $("#COL1deviceName").html('');
    $("#COL1hostName").html('');
    $("#COL1machineID").html('');
    $("#COL1ipAddress").html('');
    $("#COL1modelName").html('');
    $("#COL1pStatus").html("OFFLINE");
    $("#COL1pMessage").html('');
    $("#COL1photoUnit").html('');
    $("#COL1photoUnitB").html('');
    $("#COL1photoUnitCOL").html('');
    $("#COL1otherSupps").html('');
    $("#COL1fusingUnit").html('');
    $("#COL1transferUnit").html('');
    $("#COL1wasteBottle").html('');
    $("#COL1paper").html("OFFLINE");
    $("#COL1tr1").html('');
    $("#COL1tr2").html('');
    $("#COL1tr3").html('');
    $("#COL1toner").html('');
    $("#COL1toB").html('');
    $("#COL1toC").html('');
    $("#COL1toM").html('');
    $("#COL1toY").html('');
    $("#COL1countPrinter").html("OFFLINE");
    $("#COL1countPrinterBW").html('');
    $("#COL1countPrinterSC").html('');
    $("#COL1countPrinterFC").html('');
    $("#COL1countPrinterTC").html('');
    $("#COL1countOther").html('');
    $("#COL1countDuplex").html('');
  }
    
  //MULT-FUNK PRINTER
  $("#MFP1online").html(data["DBLIBMFP1"]["Online"]);
  if (data["DBLIBMFP1"]["Online"] == 1) {
    //Info
    $("#MFP1name").html('<strong>Name</strong>: ' + data["DBLIBMFP1"]["Info"]["Name"]);
    $("#MFP1tgioaID").html('<strong>TGIOA ID</strong>: ' + data["DBLIBMFP1"]["Info"]["TGIOA_ID"]);
    $("#MFP1deviceName").html('<strong>Device Name</strong>: ' + data["DBLIBMFP1"]["Info"]["Device_Name"]);
    $("#MFP1hostName").html('<strong>Host Name</strong>: ' + data["DBLIBMFP1"]["Info"]["Host_Name"]);
    $("#MFP1machineID").html('<strong>Machine ID</strong>: ' + data["DBLIBMFP1"]["Info"]["Machine_ID"]);
    $("#MFP1ipAddress").html('<strong>IP Address</strong>: ' + data["DBLIBMFP1"]["Info"]["IP_Address"]);
    $("#MFP1modelName").html('<strong>Model Name</strong>: ' + data["DBLIBMFP1"]["Info"]["Model_Name"]);
    //Status
    $("#MFP1statCollumn").html('<p>Printer:</p><p>Copier:</p><p>Scanner:</p>');
    if (data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Ready" || data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Energy Saver Mode" || data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Warming Up...") {
      $("#MFP1pStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Printing...") {
      $("#MFP1pStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Alert" /*&& data["DBLIBMFP1"]["Status"]["Printer"]["Message"].indexOf('Tray 1') == 0)*/ || data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Cartridge Almost Empty") {
      $("#MFP1pStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Printer"]["Status"] == "Alert" /*&& data["DBLIBMFP1"]["Status"]["Printer"]["Message"].indexOf('Tray 1') > 0*/) {
      $("#MFP1pStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbspReady</p>');
    }
    else {
      $("#MFP1pStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    if (data["DBLIBMFP1"]["Status"]["Copier"]["Status"] == "Ready" || data["DBLIBMFP1"]["Status"]["Copier"]["Status"] == "Energy Saver Mode" || data["DBLIBMFP1"]["Status"]["Copier"]["Status"] == "Warming Up...") {
      $("#MFP1cStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Copier"]["Status"] == "Printing...") {
      $("#MFP1cStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Copier"]["Status"] == "Alert" /*&& data["DBLIBMFP1"]["Status"]["Copier"]["Message"].indexOf('Tray 1') == 0)*/ || data["DBLIBMFP1"]["Status"]["Copier"]["Status"] == "Cartridge Almost Empty") {
      $("#MFP1cStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Copier"]["Status"] == "Alert" /*&& data["DBLIBMFP1"]["Status"]["Copier"]["Message"].indexOf('Tray 1') > 0*/) {
      $("#MFP1cStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbspReady</p>');
    }
    else {
      $("#MFP1cStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    if (data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Ready" || data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Energy Saver Mode" || data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Warming Up...") {
      $("#MFP1sStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Printing...") {
      $("#MFP1sStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Alert" || data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Cartridge Almost Empty") {
      $("#MFP1sStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else {
      $("#MFP1sStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    var mess = data["DBLIBMFP1"]["Status"]["Printer"]["Message"];
    var message = mess.split("/");
    var messages = "";
    for (var i = 0; i < message.length; i++) {
      messages += (message[i] + '<br />');
    }
    $("#MFP1pMessage").html(messages);
    if (data["DBLIBMFP1"]["Status"]["Scanner"]["Status"] == "Alert") {
      var mess = data["DBLIBMFP1"]["Status"]["Scanner"]["Message"];
      var message = mess.split("/");
      var messages = "";
      for (var i = 0; i < message.length; i++) {
        if (message[i] != " Panel Off Mode") {
          messages += (message[i] + '<br />');
        }
      }
      $("#MFP1sMessage").html(messages);
    }
    else {
	    $("#MFP1sMessage").html('');
    }
    //Supplies
    $("#MFP1paper").html("PAPER");
    if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Almost Out of Paper") {
      $("#MFP1tr1").html('<p class="text-warning">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Error" || data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Out of Paper") { 
      $("#MFP1tr1").html('<p class="text-error">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFP1tr1").html('&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"]);
    }
    if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Almost Out of Paper") {
      $("#MFP1tr2").html('<p class="text-warning">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Error" || data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Out of Paper") { 
      $("#MFP1tr2").html('<p class="text-error">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFP1tr2").html('&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"]);
    }
    if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Almost Out of Paper") {
      $("#MFP1tr3").html('<p class="text-warning">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Error" || data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Out of Paper") { 
      $("#MFP1tr3").html('<p class="text-error">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFP1tr3").html('&nbsp<strong>Tray 3</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"]);
    }
    if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Almost Out of Paper") {
      $("#MFP1tr4").html('<p class="text-warning">&nbsp<strong>Tray 4</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Error" || data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Out of Paper") { 
      $("#MFP1tr4").html('<p class="text-error">&nbsp<strong>Tray 4</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFP1tr4").html('&nbsp<strong>Tray 4</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBMFP1"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"]);
    }
    $("#MFP1toner").html("TONER");
    if (data["DBLIBMFP1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Almost Empty") {
      $("#MFP1toB").html('<p class="text-warning">&nbsp<strong>Black</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    else if (data["DBLIBMFP1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Empty" || data["DBLIBMFP1"]["Supplies"]["Toner"]["Black"]["Status"] == "Error") {
      $("#MFP1toB").html('<p class="text-error">&nbsp<strong>Black</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    else {
      $("#MFP1toB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBMFP1"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    //Counter
    $("#MFP1countPrinter").html("PRINTER");
    $("#MFP1countPrinterBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFP1"]["Counter"]["Printer"]["Black__White"]);
    $("#MFP1countCopier").html("COPIER");
    $("#MFP1countCopierBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFP1"]["Counter"]["Copier"]["Black__White"]);
    $("#MFP1countScanner").html("SCANNER");
    $("#MFP1countScannerBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFP1"]["Counter"]["Scanner"]["Black__White"]);
    $("#MFP1countScannerCOL").html('&nbsp<strong>Color</strong>: ' + data["DBLIBMFP1"]["Counter"]["Scanner"]["Color"]);
    $("#MFP1countOther").html("OTHER");
    $("#MFP1countDuplex").html('&nbsp<strong>Duplex</strong>: ' + data["DBLIBMFP1"]["Counter"]["Other"]["Duplex"]);
  }
  else {
    $("#MFP1statCollumn").html("OFFLINE");
    $("#MFP1name").html("OFFLINE");
    $("#MFP1tgioaID").html('');
    $("#MFP1deviceName").html('');
    $("#MFP1hostName").html('');
    $("#MFP1machineID").html('');
    $("#MFP1ipAddress").html('');
    $("#MFP1modelName").html('');
    $("#MFP1pStatus").html('');
    $("#MFP1cStatus").html('');
    $("#MFP1sStatus").html('');
    $("#MFP1pMessage").html('');
    $("#MFP1sMessage").html('');
    $("#MFP1paper").html("OFFLINE");
    $("#MFP1tr1").html('');
    $("#MFP1tr2").html('');
    $("#MFP1tr3").html('');
    $("#MFP1tr4").html('');
    $("#MFP1toner").html('');
    $("#MFP1toB").html('');
    $("#MFP1countPrinter").html("OFFLINE");
    $("#MFP1countPrinterBW").html('');
    $("#MFP1countCopier").html('');
    $("#MFP1countCopierBW").html('');
    $("#MFP1countScanner").html('');
    $("#MFP1countScannerBW").html('');
    $("#MFP1countScannerCOL").html('');
    $("#MFP1countOther").html('');
    $("#MFP1countDuplex").html('');
  }
  
  //MFP with FAX
  $("#MFPF1online").html(data["DBLIBMFPF1"]["Online"]);
  if (data["DBLIBMFPF1"]["Online"] == 1) {
    //Info
    $("#MFPF1name").html('<strong>Name</strong>: ' + data["DBLIBMFPF1"]["Info"]["Name"]);
    $("#MFPF1tgioaID").html('<strong>TGIOA ID</strong>: ' + data["DBLIBMFPF1"]["Info"]["TGIOA_ID"]);
    $("#MFPF1deviceName").html('<strong>Device Name</strong>: ' + data["DBLIBMFPF1"]["Info"]["Device_Name"]);
    $("#MFPF1hostName").html('<strong>Host Name</strong>: ' + data["DBLIBMFPF1"]["Info"]["Host_Name"]);
    $("#MFPF1machineID").html('<strong>Machine ID</strong>: ' + data["DBLIBMFPF1"]["Info"]["Machine_ID"]);
    $("#MFPF1ipAddress").html('<strong>IP Address</strong>: ' + data["DBLIBMFPF1"]["Info"]["IP_Address"]);
    $("#MFPF1modelName").html('<strong>Model Name</strong>: ' + data["DBLIBMFPF1"]["Info"]["Model_Name"]);
    //Status
    $("#MFPF1statCollumn").html('<p>Printer:</p><p>Copier:</p><p>Scanner:</p><p>Fax:</p>');
    if (data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Ready" || data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Warming Up...") {
      $("#MFPF1pStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Printing...") {
      $("#MFPF1pStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPF1pStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else {
      $("#MFPF1pStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Printer"]["Status"] + '</p>');
    }
    if (data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] == "Ready" || data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] == "Warming Up...") {
      $("#MFPF1cStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] == "Printing...") {
      $("#MFPF1cStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] == "Alert" || data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPF1cStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else {
      $("#MFPF1cStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Copier"]["Status"] + '</p>');
    }
    if (data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Ready" || data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Warming Up...") {
      $("#MFPF1sStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Printing...") {
      $("#MFPF1sStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Alert" || data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPF1sStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else {
      $("#MFPF1sStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    if (data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] == "Ready" || data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] == "Warming Up...") {
      $("#MFPF1fStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] == "Printing...") {
      $("#MFPF1fStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] == "Alert" || data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPF1fStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] + '</p>');
    }
    else {
      $("#MFPF1fStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPF1"]["Status"]["Fax"]["Status"] + '</p>');
    }
    var mess = data["DBLIBMFPF1"]["Status"]["Printer"]["Message"];
    var message = mess.split("/");
    var messages = "";
    for (var i = 0; i < message.length; i++) {
      messages += (message[i] + '<br />');
    }
    $("#MFPF1pMessage").html(messages);
    if (data["DBLIBMFPF1"]["Status"]["Scanner"]["Status"] == "Alert") {
      var mess = data["DBLIBMFPF1"]["Status"]["Scanner"]["Message"];
      var message = mess.split("/");
      var messages = "";
      for (var i = 0; i < message.length; i++) {
        if (message[i] != " Panel Off Mode") {
          messages += (message[i] + '<br />');
        }
      }
      $("#MFPF1sMessage").html(messages);
    }
    else {
	    $("#MFPF1sMessages").html('');
    }
    //Supplies
    $("#MFPF1paper").html("PAPER");
    if (data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Almost Out of Paper") {
      $("#MFPF1tr1").html('<p class="text-warning">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Error" || data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Out of Paper") { 
      $("#MFPF1tr1").html('<p class="text-error">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFPF1tr1").html('&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"]);
    }
    if (data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Almost Out of Paper") {
      $("#MFPF1tr2").html('<p class="text-warning">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Error" || data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Out of Paper") { 
      $("#MFPF1tr2").html('<p class="text-error">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFPF1tr2").html('&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFPF1"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"]);
    }
    $("#MFPF1toner").html("TONER");
    if (data["DBLIBMFPF1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Almost Empty") {
      $("#MFPF1toB").html('<p class="text-warning">&nbsp<strong>Black</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    else if (data["DBLIBMFPF1"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Empty" || data["DBLIBMFPF1"]["Supplies"]["Toner"]["Black"]["Status"] == "Error") {
      $("#MFPF1toB").html('<p class="text-error">&nbsp<strong>Black</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    else {
      $("#MFPF1toB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBMFPF1"]["Supplies"]["Toner"]["Black"]["Status"]);
    }
    //Counter
    $("#MFPF1countPrinter").html("PRINTER");
    $("#MFPF1countPrinterBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPF1"]["Counter"]["Printer"]["Black__White"]);
    $("#MFPF1countCopier").html("COPIER");
    $("#MFPF1countCopierBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPF1"]["Counter"]["Copier"]["Black__White"]);
    $("#MFPF1countScanner").html("SCANNER");
    $("#MFPF1countScannerBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPF1"]["Counter"]["Scanner"]["Black__White"]);
    $("#MFPF1countScannerCOL").html('&nbsp<strong>Color</strong>: ' + data["DBLIBMFPF1"]["Counter"]["Scanner"]["Color"]);
    $("#MFPF1countOther").html("OTHER");
    $("#MFPF1countDuplex").html('&nbsp<strong>Duplex</strong>: ' + data["DBLIBMFPF1"]["Counter"]["Other"]["Duplex"]);
    $("#MFPF1countFax").html("FAX");
    $("#MFPF1countFaxBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPF1"]["Counter"]["Fax"]["Black__White"]);
  }
  else {
    $("#MFPF1statCollumn").html("OFFLINE");
    $("#MFPF1name").html("OFFLINE");
    $("#MFPF1tgioaID").html('');
    $("#MFPF1deviceName").html('');
    $("#MFPF1hostName").html('');
    $("#MFPF1machineID").html('');
    $("#MFPF1ipAddress").html('');
    $("#MFPF1modelName").html('');
    $("#MFPF1pStatus").html('');
    $("#MFPF1cStatus").html('');
    $("#MFPF1sStatus").html('');
    $("#MFPF1fStatus").html('');
    $("#MFPF1pMessage").html('');
    $("#MFPF1sMessage").html('');
    $("#MFPF1paper").html("OFFLINE");
    $("#MFPF1tr1").html('');
    $("#MFPF1tr2").html('');
    $("#MFPF1toner").html('');
    $("#MFPF1toB").html('');
    $("#MFPF1countPrinter").html("OFFLINE");
    $("#MFPF1countPrinterBW").html('');
    $("#MFPF1countCopier").html('');
    $("#MFPF1countCopierBW").html('');
    $("#MFPF1countScanner").html('');
    $("#MFPF1countScannerBW").html('');
    $("#MFPF1countScannerCOL").html('');
    $("#MFPF1countFax").html('');
    $("#MFPF1countFaxBW").html('');
    $("#MFPF1countOther").html('');
    $("#MFPF1countDuplex").html('');
  }
  
  
  //STAFF PRINTER
  $("#MFPSTAFFonline").html(data["DBLIBMFPF1"]["Online"]);
  if (data["DBLIBMFPSTAFF"]["Online"] == 1) {
    //Info
    $("#MFPSTAFFname").html('<strong>Name</strong>: ' + data["DBLIBMFPSTAFF"]["Info"]["Name"]);
    $("#MFPSTAFFtgioaID").html('<strong>TGIOA ID</strong>: ' + data["DBLIBMFPSTAFF"]["Info"]["TGIOA_ID"]);
    $("#MFPSTAFFdeviceName").html('<strong>Device Name</strong>: ' + data["DBLIBMFPSTAFF"]["Info"]["Device_Name"]);
    $("#MFPSTAFFhostName").html('<strong>Host Name</strong>: ' + data["DBLIBMFPSTAFF"]["Info"]["Host_Name"]);
    $("#MFPSTAFFmachineID").html('<strong>Machine ID</strong>: ' + data["DBLIBMFPSTAFF"]["Info"]["Machine_ID"]);
    $("#MFPSTAFFipAddress").html('<strong>IP Address</strong>: ' + data["DBLIBMFPSTAFF"]["Info"]["IP_Address"]);
    $("#MFPSTAFFmodelName").html('<strong>Model Name</strong>: ' + data["DBLIBMFPSTAFF"]["Info"]["Model_Name"]);
    //Status
    $("#MFPSTAFFstatCollumn").html('<p>Printer:</p><p>Copier:</p><p>Scanner:</p><p>Fax:</p>');
    if (data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Ready" || data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Warming Up...") {
      $("#MFPSTAFFpStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Printing...") {
      $("#MFPSTAFFpStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Alert" || data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPSTAFFpStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] + '</p>');
    }
    else {
      $("#MFPSTAFFpStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Status"] + '</p>');
    }
    if (data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] == "Ready" || data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] == "Warming Up...") {
      $("#MFPSTAFFcStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] == "Printing...") {
      $("#MFPSTAFFcStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] == "Alert" || data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPSTAFFcStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] + '</p>');
    }
    else {
      $("#MFPSTAFFcStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Copier"]["Status"] + '</p>');
    }
    if (data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Ready" || data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Warming Up...") {
      $("#MFPSTAFFsStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Printing...") {
      $("#MFPSTAFFsStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Alert" || data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPSTAFFsStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    else {
      $("#MFPSTAFFsStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] + '</p>');
    }
    if (data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] == "Ready" || data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] == "Energy Saver Mode" || data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] == "Warming Up...") {
      $("#MFPSTAFFfStatus").html('<p class="text-success"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] == "Printing...") {
      $("#MFPSTAFFfStatus").html('<p class="text-info"><i class="icon-ok"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] == "Alert" || data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] == "Cartridge Almost Empty") {
      $("#MFPSTAFFfStatus").html('<p class="text-warning"><i class="icon-warning-sign"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] + '</p>');
    }
    else {
      $("#MFPSTAFFfStatus").html('<p class="text-error"><i class="icon-remove"></i>&nbsp' + data["DBLIBMFPSTAFF"]["Status"]["Fax"]["Status"] + '</p>');
    }
    var mess = data["DBLIBMFPSTAFF"]["Status"]["Printer"]["Message"];
    var message = mess.split("/");
    var messages = "";
    for (var i = 0; i < message.length; i++) {
      messages += (message[i] + '<br />');
    }
    $("#MFPSTAFFpMessage").html(messages);
    if (data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Status"] == "Alert") {
      var mess = data["DBLIBMFPSTAFF"]["Status"]["Scanner"]["Message"];
      var message = mess.split("/");
      var messages = "";
      for (var i = 0; i < message.length; i++) {
        if (message[i] != " Panel Off Mode") {
          messages += (message[i] + '<br />');
        }
      }
      $("#MFPSTAFFsMessage").html(messages);
    }
    else {
	    $("#MFPSTAFFsMessages").html('');
    }
    //Supplies
    $("#MFPSTAFFpaper").html("PAPER");
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Almost Out of Paper") {
      $("#MFPSTAFFtr1").html('<p class="text-warning">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Error" || data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Status"] == "Out of Paper") { 
      $("#MFPSTAFFtr1").html('<p class="text-error">&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFPSTAFFtr1").html('&nbsp<strong>Tray 1</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_1"]["Paper_Remaining"]);
    }
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Almost Out of Paper") {
      $("#MFPSTAFFtr2").html('<p class="text-warning">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Error" || data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Status"] == "Out of Paper") { 
      $("#MFPSTAFFtr2").html('<p class="text-error">&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFPSTAFFtr2").html('&nbsp<strong>Tray 2</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_2"]["Paper_Remaining"]);
    }
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Almost Out of Paper") {
      $("#MFPSTAFFtr3").html('<p class="text-warning">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Error" || data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Status"] == "Out of Paper") { 
      $("#MFPSTAFFtr3").html('<p class="text-error">&nbsp<strong>Tray 3</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFPSTAFFtr3").html('&nbsp<strong>Tray 3</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_3"]["Paper_Remaining"]);
    }
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Almost Out of Paper") {
      $("#MFPSTAFFtr4").html('<p class="text-warning">&nbsp<strong>Tray 4</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"] + '</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Error" || data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Status"] == "Out of Paper") { 
      $("#MFPSTAFFtr4").html('<p class="text-error">&nbsp<strong>Tray 4</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"] + '</p>');
    }
    else {
      $("#MFPSTAFFtr4").html('&nbsp<strong>Tray 4</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Status"] + ' ' + data["DBLIBMFPSTAFF"]["Supplies"]["Paper"]["Tray_4"]["Paper_Remaining"]);
    }
    $("#MFPSTAFFtoner").html("TONER");
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Almost Empty") {
      $("#MFPSTAFFtoB").html('<p class="text-warning">&nbsp<strong>Black</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Status"] == "Catridge Empty" || data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Status"] == "Error") {
      $("#MFPSTAFFtoB").html('<p class="text-error">&nbsp<strong>Black</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#MFPSTAFFtoB").html('&nbsp<strong>Black</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Black"]["Toner_Remaining"] + '%)');
    }
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Status"] == "Catridge Almost Empty") {
      $("#MFPSTAFFtoM").html('<p class="text-warning">&nbsp<strong>Magenta</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Status"] == "Catridge Empty" || data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Status"] == "Error") {
      $("#MFPSTAFFtoM").html('<p class="text-error">&nbsp<strong>Magenta</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#MFPSTAFFtoM").html('&nbsp<strong>Magenta</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Magenta"]["Toner_Remaining"] + '%)');
    }
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Status"] == "Catridge Almost Empty") {
      $("#MFPSTAFFtoC").html('<p class="text-warning">&nbsp<strong>Cyan</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Status"] == "Catridge Empty" || data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Status"] == "Error") {
      $("#MFPSTAFFtoC").html('<p class="text-error">&nbsp<strong>Cyan</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#MFPSTAFFtoC").html('&nbsp<strong>Cyan</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Cyan"]["Toner_Remaining"] + '%)');
    }
    if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Status"] == "Catridge Almost Empty") {
      $("#MFPSTAFFtoY").html('<p class="text-warning">&nbsp<strong>Yellow</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Toner_Remaining"] + '%)</p>');
    }
    else if (data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Status"] == "Catridge Empty" || data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Status"] == "Error") {
      $("#MFPSTAFFtoY").html('<p class="text-error">&nbsp<strong>Yellow</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Toner_Remaining"] + '%)</p>');
    }
    else {
      $("#MFPSTAFFtoY").html('&nbsp<strong>Yellow</strong>: ' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Status"] + ' (' + data["DBLIBMFPSTAFF"]["Supplies"]["Toner"]["Yellow"]["Toner_Remaining"] + '%)');
    }
    //Counter
    $("#MFPSTAFFcountPrinter").html('PRINTER');
    $("#MFPSTAFFcountPrinterBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Printer"]["Black__White"]);
    $("#MFPSTAFFcountPrinterSC").html('&nbsp<strong>Single Color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Printer"]["Single_Color"]);
    $("#MFPSTAFFcountPrinterFC").html('&nbsp<strong>Full Color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Printer"]["Full_Color"]);
    $("#MFPSTAFFcountPrinterTC").html('&nbsp<strong>Two-color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Printer"]["Two_Color"]);
    $("#MFPSTAFFcountCopier").html('COPIER');
    $("#MFPSTAFFcountCopierBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Copier"]["Black__White"]);
    $("#MFPSTAFFcountCopierSC").html('&nbsp<strong>Single Color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Copier"]["Singel_Color"]);
    $("#MFPSTAFFcountCopierFC").html('&nbsp<strong>Full Color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Copier"]["Full_Color"]);
    $("#MFPSTAFFcountCopierTC").html('&nbsp<strong>Two-color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Copier"]["Two_Color"]);
    $("#MFPSTAFFcountScanner").html('SCANNER');
    $("#MFPSTAFFcountScannerBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Scanner"]["Black__White"]);
    $("#MFPSTAFFcountScannerCOL").html('&nbsp<strong>Color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Scanner"]["Color"]);
    $("#MFPSTAFFcountFax").html('FAX');
    $("#MFPSTAFFcountFaxBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Fax"]["Black__White"]);
    $("#MFPSTAFFcountFaxTrans").html('FAX TRANSMISSION');
    $("#MFPSTAFFcountFaxTransT").html('&nbsp<strong>Total</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Fax_Transmission"]["Total"]);
    $("#MFPSTAFFcountSendTotal").html('SEND/TX_TOTAL');
    $("#MFPSTAFFcountSendTotalBW").html('&nbsp<strong>Black & White</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Send_TX_Total"]["Black__White"]);
    $("#MFPSTAFFcountSendTotalCOL").html('&nbsp<strong>Color</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Send_TX_Total"]["Color"]);
    $("#MFPSTAFFcountOther").html('OTHER');
    $("#MFPSTAFFcountDuplex").html('&nbsp<strong>Duplex</strong>: ' + data["DBLIBMFPSTAFF"]["Counter"]["Other"]["Duplex"]);
  }
  else {
    $("#MFPSTAFFstatCollumn").html("OFFLINE");
    $("#MFPSTAFFname").html("OFFLINE");
    $("#MFPSTAFFtgioaID").html('');
    $("#MFPSTAFFdeviceName").html('');
    $("#MFPSTAFFhostName").html('');
    $("#MFPSTAFFmachineID").html('');
    $("#MFPSTAFFipAddress").html('');
    $("#MFPSTAFFmodelName").html('');
    $("#MFPSTAFFpStatus").html('');
    $("#MFPSTAFFcStatus").html('');
    $("#MFPSTAFFsStatus").html('');
    $("#MFPSTAFFfStatus").html('');
    $("#MFPSTAFFpMessage").html('');
    $("#MFPSTAFFsMessage").html('');
    $("#MFPSTAFFpaper").html("OFFLINE");
    $("#MFPSTAFFtr1").html('');
    $("#MFPSTAFFtr2").html('');
    $("#MFPSTAFFtr3").html('');
    $("#MFPSTAFFtr4").html('');
    $("#MFPSTAFFtoner").html('');
    $("#MFPSTAFFtoB").html('');
    $("#MFPSTAFFtoC").html('');
    $("#MFPSTAFFtoM").html('');
    $("#MFPSTAFFtoY").html('');
    $("#MFPSTAFFcountPrinter").html("OFFLINE");
    $("#MFPSTAFFcountPrinterBW").html('');
    $("#MFPSTAFFcountPrinterSC").html('');
    $("#MFPSTAFFcountPrinterFC").html('');
    $("#MFPSTAFFcountPrinterTC").html('');
    $("#MFPSTAFFcountCopier").html('');
    $("#MFPSTAFFcountCopierBW").html('');
    $("#MFPSTAFFcountCopierSC").html('');
    $("#MFPSTAFFcountCopierTC").html('');
    $("#MFPSTAFFcountCopierFC").html('');
    $("#MFPSTAFFcountScanner").html('');
    $("#MFPSTAFFcountScannerBW").html('');
    $("#MFPSTAFFcountScannerCOL").html('');
    $("#MFPSTAFFcountFax").html('');
    $("#MFPSTAFFcountFaxBW").html('');
    $("#MFPSTAFFcountFaxTrans").html('');
    $("#MFPSTAFFcountFaxTransT").html('');
    $("#MFPSTAFFcountSendTotal").html('');
    $("#MFPSTAFFcountSendTotalBW").html('');
    $("#MFPSTAFFcountSendTotalCOL").html('');
    $("#MFPSTAFFcountOther").html('');
    $("#MFPSTAFFcountDuplex").html('');
  }
});