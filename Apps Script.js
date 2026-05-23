// myFunction.js
// 功能：同步 Google Sheets 的庫存資訊到 Google Form
// 說明：將 Sheets 中 E1 的內容更新到 Form 的描述欄位

function myFunction() {
  // 取得 Google Form（透過 Form ID 開啟指定表單）
  var form = FormApp.openById("1YwSBEQfiq1DHCQcWAEzpYasyUkXuzQplRGdHPRbVYMU");

  // 取得目前這個 Google Sheets 的指定工作表
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sheet 1");  //    sheet 1 = 工作表名稱

  // 讀取 E1 儲存格內容，E1 = Python 更新後的庫存狀態文字
  var text = sheet.getRange("E1").getValue();

  // 更新 Google Form 的描述欄位
  form.setDescription(text);
}
