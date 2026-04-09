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
      "defaultValue": "2026necmp",
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
        "1": "Red 1",
        "2": "Red 2",
        "3": "Red 3",
        "4": "Blue 1",
        "5": "Blue 2",
        "6": "Blue 3"
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
      "type": "counter"
    },
    { "name": "Number of Scoring Intervals (times shooting into Hub)",
      "code": "asi",
      "type": "counter"
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
    { "name": "Pickup from Hground?",
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
        "n": "No",
        "nfa": "No Fuel Available"
      },
      "defaultValue": "n"
    },
    { "name": "Targeted pickup of fuel in Neutral Zone?",
      "code": "ttpfnz",
      "type": "radio",
      "choices": {
        "y": "Yes",
        "n": "No",
        "dnginz": "Does not go into Neutral Zone"
      },
      "defaultValue": "n"
    },
    { "name": "Timely scoring intervals? (times shooting into Hub)",
      "code": "ttsi",
      "type": "bool"
    },
    { "name": "Number of Volleys",
      "code": "tnv",
      "type": "counter"
    },
    { "name": "Defense Being Played Against?",
      "code": "tdbpa",
      "type": "radio",
      "choices": {
        "hi": "Hub Inactive"
      },
      "defaultValue": "hi"
    }
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
        "n": "No",
        "nfa": "No Fuel Available"
      },
      "defaultValue": "n"
    },
    { "name": "Targeted pickup of fuel in Neutral Zone?",
      "code": "ettpfnz",
      "type": "radio",
      "choices": {
        "y": "Yes",
        "n": "No",
        "dnginz": "Does not go into Neutral Zone"
      },
      "defaultValue": "n"
    },
    { "name": "Timely scoring intervals? (times shooting into Hub)",
      "code": "ettsi",
      "type": "bool"
    },
    { "name": "Number of Volleys",
      "code": "etnv",
      "type": "counter"
    },
    { "name": "Defense Being Played Against?",
      "code": "edbpa",
      "type": "radio",
      "choices": {
        "c": "Climb",
        "l1": "L1",
        "l2": "L2",
        "l3": "L3",
        "a": "Attempted",
        "na": "Not Attempted"
      },
      "defaultValue": "na"
    }
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
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5"
      },
      "defaultValue": "3"
    },
    { "name": "Defense Note Played",
      "code": "dnp",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Skill Playing Around Defense",
      "code": "spad",
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
    { "name": "Defense Not Played Against",
      "code": "dnpa",
      "type": "bool"
    },
    { "name": "Breakdown?",
      "code": "brk",
      "type": "radio",
      "choices": {
        "d": "Disabled",
        "dt": "Drivetrain Issues",
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
