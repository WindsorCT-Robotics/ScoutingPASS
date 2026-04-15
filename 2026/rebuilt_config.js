var config_data = `
{

  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026necmp1",
      "required": "true"
    },
    { "name": "Match Type",
      "code": "l", 
      "type": "level",
      "choices": {
        "q": "Qualifications<br>",
        "p": "Playoffs"
      },
      "defaultValue": "q",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Driver Station",
      "code": "r",
      "type": "robot",
      "choices": {
        "1": "Red 1<br>",
        "2": "Red 2<br>",
        "3": "Red 3<br>",
        "4": "Blue 1<br>",
        "5": "Blue 2<br>",
        "6": "Blue 3<br>"
      },
      "defaultValue": "1",
      "required": "true"
    }
  ],
  "auton": [
    { "name": "Starting Location",
      "code": "asl",
      "type": "radio",
      "choices": {
        "dt": "Depot Trench<br>",
        "db": "Depot Bump<br>", 
        "h": "Hub<br>",
        "ob": "Outpost Bump<br>",
        "ot": "Outpost Trench<br>"
      },
      "defaultValue": "h"
    },
    { "name": "Number of Sweeps to Neutral Zone",
      "code": "asnz",
      "type": "counter",
      "fullRow": true
    },
    { "name": "Number of Scoring Intervals",
      "code": "asi",
      "type": "counter",
      "fullRow": true
    },
    { "name": "Method of Return from Neutral Zone",
      "code": "amrnz",
      "type": "radio",
      "choices": {
        "t": "Trench",
        "b": "Bump",
        "btb": "Bump and Trench"
      },
      "defaultValue": "t"
    },
    { "name": "Pickup from Depot?",
      "code": "apfd",
      "type": "bool"
    },
    { "name": "Pickup from Ground?",
      "code": "apfh",
      "type": "bool"
    },
    { "name": "Scoring Accuracy",
      "code": "asa",
      "type": "radio",
      "choices": {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "3"
    },
    { "name": "L1 Climb Attempt",
      "code": "aca",
      "type": "radio",
      "choices": {
        "1": "L1",
        "2": "Failed",
        "3": "N/A"
      },
      "defaultValue": "3"
    }
  ],
  "teleop-1": [
    { "name": "Ready to score at shift start?",
      "code": "trss",
      "type": "bool"
    },
    { "name": "Targeted pickup of fuel in Alliance Zone?",
      "code": "ttpfaz",
      "type": "radio",
      "choices": {
        "y": "Yes",
        "n": "No <br>",
        "nfa": "No Fuel Available"
      },
      "defaultValue": "n"
    },
    { "name": "Targeted pickup of fuel in Neutral Zone?",
      "code": "ttpfnz",
      "type": "radio",
      "choices": {
        "y": "Yes",
        "n": "No <br>",
        "dnginz": "Does not go into Neutral Zone"
      },
      "defaultValue": "n"
    },
    { "name": "Timely scoring intervals?",
      "code": "ttsi",
      "type": "bool"
    },
    { "name": "Number of scoring intervals",
      "code": "tnv",
      "type": "counter",
      "fullRow": true
    },
    { "name": "Defense Being Played Against?",
      "code": "tdbpa",
      "type": "bool"
    }
    { "name": "Scoring Accuracy",
    "code": "tasa",
    "type": "radio",
    "choices": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5"
    },
    "defaultValue": "3"
  },
  ],
  "teleop-2": [
    { "name": "Shuttling Game Pieces by Pushing?",
      "code": "tsgpp",
      "type": "bool"
    },
    { "name": "Shuttling Game Pieces by Snowblowing?",
      "code": "tsgps",
      "type": "bool"
    },
    { "name": "Fill Hopper for next Shift?",
      "code": "tfhns",
      "type": "bool"
    },
    { "name": "Defense in Opposing Alliance Zone?",
      "code": "tdoaz",
      "type": "bool"
    },
    { "name": "Defense on Bump Traversal?",
      "code": "tdobt",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Ready to score at end game start?",
      "code": "ertss",
      "type": "bool"
    },
    { "name": "Targeted pickup of fuel in Alliance Zone?",
      "code": "ettpfaz",
      "type": "radio",
      "choices": {
        "y": "Yes",
        "n": "No <br>",
        "nfa": "No Fuel Available"
      },
      "defaultValue": "n"
    },
    { "name": "Targeted pickup of fuel in Neutral Zone?",
      "code": "ettpfnz",
      "type": "radio",
      "choices": {
        "y": "Yes",
        "n": "No <br>",
        "dnginz": "Does not go into Neutral Zone"
      },
      "defaultValue": "n"
    },
    { "name": "Timely scoring intervals?",
      "code": "ettsi",
      "type": "bool"
    },
    { "name": "Number of scoring intervals",
      "code": "etnv",
      "type": "counter"
    },
    { "name": "Defense Being Played Against?",
      "code": "edbpa",
      "type": "bool"
    },
    { "name": "Climb Attempted?",
      "code": "eclimb",
      "type": "radio",
      "choices": {
        "l1": "L1",
        "l2": "L2",
        "l3": "L3 <br>",
        "na": "n/a",
        "f": "Failed"
      },
      "defaultValue": "na"
    }
    { "name": "Scoring Accuracy",
      "code": "esa",
      "type": "radio",
      "choices": {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "3"
    },
  ],
  "postmatch": [
    { "name": "Driver Intentionality",
      "code": "di",
      "type": "radio",
      "choices": {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "3"
    },
    { "name": "Skill Playing Defense",
      "code": "spd",
      "type": "radio",
      "choices": {
        "0": "n/a <br>",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "3"
    },
    { "name": "Skill Playing Around Defense",
      "code": "spad",
      "type": "radio",
      "choices": {
        "0": "n/a <br>",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "3"
    },
    { "name": "Breakdown?",
      "code": "brk",
      "type": "radio",
      "choices": {
        "d": "Disabled <br>",
        "dt": "Drivetrain Issues <br>",
        "si": "Shooter/Intake Issues"
      },
      "defaultValue": "d"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
