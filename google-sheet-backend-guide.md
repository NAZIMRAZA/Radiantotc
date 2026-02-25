# Google Sheet as Database Integration Guide

To use your Google Sheet as a live Database for storing KYC data and changing the USDT rate securely without local storage, we will set up a **Google Apps Script**. This acts as a bridge (API) between your Website and your Spreadsheet.

## Step 1: Open Your Google Sheet
1. Open the specific Google Sheet you provided: https://docs.google.com/spreadsheets/d/1MlllSlMFmsuSk_FS9iUrGF0hdGrswasK3IOKDUc6Dqw/edit
2. In the top menu, click **Extensions** -> **Apps Script**.

## Step 2: Paste the Code
1. In the Apps Script editor, you will see a file called `Code.gs`. Delete all existing code in it.
2. Paste the following complete code into `Code.gs`:

```javascript
// Hardcoded Spreadsheet ID so we don't need a setup function
var SHEET_ID = "1MlllSlMFmsuSk_FS9iUrGF0hdGrswasK3IOKDUc6Dqw";

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  // We specify CORS headers for our JSON response
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  try {
    var doc = SpreadsheetApp.openById(SHEET_ID);
    var originData = e.postData.contents;
    var data = JSON.parse(originData);
    
    var action = data.action; 
    
    if (action === "UPDATE_RATE") {
      var sheet = doc.getSheetByName("Settings");
      if (!sheet) {
        sheet = doc.insertSheet("Settings");
      }
      var rate = data.rate;
      sheet.getRange("A1").setValue("USDT_RATE");
      sheet.getRange("B1").setValue(rate);
      
      output.setContent(JSON.stringify({"result": "success", "rate": rate}));
        
    } else if (action === "SUBMIT_KYC") {
      var sheet = doc.getSheetByName("KYC");
      if (!sheet) {
        sheet = doc.insertSheet("KYC");
      }
      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1).getValues()[0];
      
      if (!headers || headers[0] === "") {
        headers = ["ID", "FullName", "DOB", "Gender", "Phone", "Email", "Address", "PAN", "Aadhaar", "Selfie", "Timestamp"];
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      }
      
      var nextRow = sheet.getLastRow() + 1;
      var row = [
        data.id || "",
        data.name || "",
        data.dob || "",
        data.gender || "",
        data.phone || "",
        data.email || "",
        data.address || "",
        data.pan || "",
        data.aadhaar || "",
        data.selfie || "", 
        new Date().toString()
      ];
      
      sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
      output.setContent(JSON.stringify({"result": "success"}));
    }
    
    lock.releaseLock();
    return output;
  } catch(err) {
    lock.releaseLock();
    output.setContent(JSON.stringify({"result": "error", "error": err.message}));
    return output;
  }
}

function doGet(e) {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  
  try {
    var doc = SpreadsheetApp.openById(SHEET_ID);
    
    // Safety check if parameters are empty (e.g. testing in editor directly)
    if (!e || !e.parameter || !e.parameter.action) {
      output.setContent(JSON.stringify({"status": "Online", "message": "Spreadsheet DB is active."}));
      return output;
    }
    
    var action = e.parameter.action;
    
    if (action === "GET_RATE") {
      var sheet = doc.getSheetByName("Settings");
      var rate = 91.45; // default
      if (sheet) {
        var val = sheet.getRange("B1").getValue();
        if (val) rate = parseFloat(val);
      }
      output.setContent(JSON.stringify({"rate": rate}));
        
    } else if (action === "GET_KYC") {
      var sheet = doc.getSheetByName("KYC");
      var data = [];
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        var headers = rows[0];
        for (var i = 1; i < rows.length; i++) {
          var obj = {};
          for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = rows[i][j];
          }
          data.push(obj);
        }
      }
      output.setContent(JSON.stringify({"kycRecords": data}));
    } else if (action === "CHECK_KYC") {
      var userId = e.parameter.userId;
      var sheet = doc.getSheetByName("KYC");
      var exists = false;
      if (sheet) {
        var rows = sheet.getDataRange().getValues();
        for (var i = 1; i < rows.length; i++) {
          if (rows[i][0] == userId) {
            exists = true;
            break;
          }
        }
      }
      output.setContent(JSON.stringify({"exists": exists}));
    } else {
        output.setContent(JSON.stringify({"status": "Online", "message": "Spreadsheet DB is active."}));
    }
  } catch(err) {
      output.setContent(JSON.stringify({"status": "Error", "message": err.message}));
  }
  return output;
}
```

## Step 3: Deploy as Web App
1. In the top right corner, click the blue **Deploy** button, then select **New deployment**.
2. Click the gear icon `⚙️` next to "Select type" and choose **Web app**.
3. Under "Description", type `Live Database API`.
4. Under "Execute as", select **Me (your email)**.
5. Under "Who has access", select **Anyone**. (This is critical for the React frontend to communicate with it).
6. Click **Deploy**.
7. Once finished, copy the **Web app URL** that ends with `/exec`.

## Step 5: Update the Code
1. Open your project wrapper file: `constants.ts` and replace the exported `GOOGLE_SHEET_WEB_APP_URL` string with the copied Web App URL.
2. Once you paste your URL, your Admin Panel and KYC will seamlessly use your Live Google Spreadsheet as its database!
