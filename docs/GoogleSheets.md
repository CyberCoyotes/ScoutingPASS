<div id="top"></div>

# Scouting P.A.S.S. Google Sheets <BETA>

## Now supporting data storage in Google Sheets!

<div id="description"></div>

## Description:
<<<<<<< HEAD
Scouting PASS now implements an inteface to a Google Sheets spreadsheet.

Data from the web page (form) will be packaged up and sent to your Google Sheets spreadsheet.
A new row will be inserted for every robot scouted for a match.  The fields in the form that match the headers in the spreadsheet will automatically
be populated.

There is an extensive set-up process described in following section.  Follow the instructions carefully as it can be tricky in spots.

<p align="right">(<a href="#top">back to top</a>)</p>
<div id="getting-started"></div>

## Set Up:

# Google Sheets Set up

1. Create spreadheet
    * Create a new Google Spreadsheet on your Google Drive.
    * The "Sheet" needs to be named "Sheet1"
    * The first column header should be labeled "Date"
    * Create headers for all of your data elements (avoid spaces; not tested with spaces)
3. Add script
    * While still in the spreadsheet click Extensions -> Apps Script
    * Update the project name from "Untitled project" to something meaningful to you
    * Clear out the code there (i.e. MyFunction...) and replace it with this:
```javascript
        const sheetName = 'Sheet1'
        const scriptProp = PropertiesService.getScriptProperties()

        function initialSetup () {
          const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
          scriptProp.setProperty('key', activeSpreadsheet.getId())
        }

        function doPost (e) {
          const lock = LockService.getScriptLock()
          lock.tryLock(10000)

          try {
            const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
            const sheet = doc.getSheetByName(sheetName)

            const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
            const nextRow = sheet.getLastRow() + 1

            const newRow = headers.map(function(header) {
              return header === 'Date' ? new Date() : e.parameter[header].join(",")
            })

            sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

            return ContentService
              .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
              .setMimeType(ContentService.MimeType.JSON)
          }
          catch (e) {
            return ContentService
              .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
              .setMimeType(ContentService.MimeType.JSON)
          }
          finally {
            lock.releaseLock()
          }
        }
```
   * Save the project (Ctrl-S or click the floppy icon)
5. Execute initialization
    * Next to the Debug menu item select "initialSetup" and click Run.
    * Google will pop up a warning screen.  Click "advanced" on the lower left side
    * You will need to select a Google Account to login as and grant permissions
6. Create Trigger
    * Click on the "alarm" icon on the left side.
    * Click "Add Trigger" in the lower right corner.
    * Set the trigger with these parameters:
        * Function to run:   doPost
        * Deployment: Head
        * Event Source:  From Spreadsheet
        * Event Type:  On Form Submit
    * Click Save  
8. Deploy
    * Click on Deploy at the Top
    * Click "New Deployment"
    * Click the "Select Type" icon and select "Web App"
    * Fill in a description (whatever you want)
    * Set "Execute as" to Me
    * Set "Who has access" to Anyone
    * Click Deploy
10. Copy URL 
    * After deploying, on the next screen, copy the Web App URL and save it.  You'll need it later.

# Scouting P.A.S.S Set Up
=======
Scouting PASS implements the Google Sheets integration like any other database.


Set the 'dataFormat' to 'tsv' in your configuration file.   It is set to that by default.

The data will now be sent through the QR code as tab-delimited data.

To pull the data into your Google Spreadsheet, put your cursor in the first cell where you want the data.  When you scan
the QR code it will fill in each cell using the tabs to move to the next cells.

<<<<<<< HEAD
2. Add gsCol tag in config file
    * In that same configuration file, you need to add a "gsCol" tag for each element in the configuration script.  The gsCol (AKA Google Sheets Column) will tell Google
  Sheets which column to put the data in.
    * For example, the first entry in our configuraiton is Scouter Initials, the new entry with the gsCol tag would look like this:
```json
            { "name": "Scouter Initials",
              "gsCol": "scouter",
              "code": "s",
              "type": "scouter",
              "size": 5,
              "maxSize": 5,
              "required": "true"
            },
```
    * The scouter initials will be put in the column with the header "scouter"
    * Add that gsCol tag to all your elements to map that element to a header in your Google Sheets spreadsheet
    * If you mispell it or omit it, it will not populate in your spreadsheet
  
## See 2022/RR_GS_config.js as an example of a configuration file that uses Google Sheets.
  
<p align="right">(<a href="#top">back to top</a>)</p>
=======
NOTE: Special scripts and setup are no longer needed to use ScoutingPASS with Google Sheets
>>>>>>> 9e5672b60196fcd57868174088146c884aa9b98a
