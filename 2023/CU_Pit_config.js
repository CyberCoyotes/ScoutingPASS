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
    { "name": "Length of Chassis w/o Bumpers",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Width of Chassis w/o Bumpers",
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
        "1": "Swerve (Any version)<br>",
        "2": "West Coast/Tank<br>",
        "3": "Mecanum<br>",
        "4": "Other"
      },
      "defaultValue": "2"
    },
    { "name": "Drivetrain Notes",
      "code": "dtn",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Cones from FLOOR?",
    "code": "cff",
    "type": "bool"
    },
    { "name": "Cones from SINGLE Station?",
      "code": "cfs",
      "type": "bool"
    },
    { "name": "Cones from DOUBLE Station?",
    "code": "cfd",
    "type": "bool"
    },
    { "name": "Cubes from FLOOR?",
      "code": "cuf",
      "type": "bool"
    },
    { "name": "Cubes from SINGLE Station?",
    "code": "cus",
    "type": "bool"
    },
    { "name": "Cubes from DOUBLE Station?",
      "code": "cub",
      "type": "bool"
    },
    { "name": "Cross Charging Station",
      "code": "ccs",
      "type": "bool"
    },
    { "name": "Auton Docked success?",
      "code": "ad",
      "type": "radio",
      "choices": {
        "1": "NA<br>",
        "2": "25%<br>",
        "3": "50%<br>",
        "4": "75% or better<br>"
      },
      "defaultValue":"1"
    },
    { "name": "Auton Engaged success?",
    "code": "ae",
    "type": "radio",
    "choices": {
      "1": "NA<br>",
      "2": "25%<br>",
      "3": "50%<br>",
      "4": "75% or better<br>"
    },
    "defaultValue":"1"
    },
    { "name": "Preferred Auton Start",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
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
