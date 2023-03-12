var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Length",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve (Any version)<br>",
        "w": "West Coast/Tank<br>",
        "m": "Mecanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Drivetrain Notes",
      "code": "dtn",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Speed (optional)",
      "code": "sr",
      "type": "radio",
      "choices": {
        "x": "NA",
        "1": "L1<br>",
        "2": "L2<br>",
        "3": "L3<br>",
        "4": "L4<br>"
      },
      "defaultValue":"x"
    },
    { "name": "Auton Notes",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
