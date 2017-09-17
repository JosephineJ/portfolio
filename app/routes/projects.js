import Ember from 'ember';

const mockModel = [
      { "id": 1,
        "name": "Software Development @ Earlham Institute, Norwich (UK)",
        "param": "my",
        "imgUrl": "/assets/hands.jpg",
        "desc": "Redesign and development of the project website based on Ghost CMS at biojs.net. Development of an user interface for exploring human SNP data using BioJS components, D3.js, Ember.js, Express.js and MongoDB. Organisation of JavaScript Workshops. Org Administration of the BioJS project in Google Summer of Code.",
        "slides": [
          {"imgUrl":"/assets/abc2.jpg",
           "alt":"Anita Borg Celebration JS Intro Snapshot",
           "caption": ""
          },
          {"imgUrl":"/assets/biojs.jpg",
           "alt":"BioJS Website Screenshot",
           "caption": ""
          },
          {"imgUrl":"/assets/abc2.jpg",
           "alt":"Anita Borg Celebration JS Intro Snapshot",
           "caption": ""
          },
          {"imgUrl":"/assets/tgac_outside.jpg",
           "alt":"Overview Earlham Insitute, Norwich, UK",
           "caption": ""
          },
          
          
        ],
        "tech": [
           {"name":"ember.js"},
           {"name":"d3"},
           {"name":"express.js"},
           {"name":"mongodb"},
           {"name":"ghostcms"},
           {"name":  "scss"},
           {"name":"mentoring"},
           {"name":"active"}
        ]
      },
      { "id": 2,
        "name": "Front End Development @ PickPete.com",
        "slides": [
          {"imgUrl":"/assets/pete1.jpg",
           "alt":"Pick Pete Website Screenshot",
           "caption": ""
          }
        ],
        "desc": "User Interface Development of the Ember.js Web Application for pickpete.com.",
        "tech": [
          {"name":"ember.js"},
          {"name":"scss"},
          {"name":"past"}
          ]
      },
      { "id": 3,
        "name": "Front End Development @ Voestalpine AG",
        "param":"my",
        "imgUrl": "/assets/hands.jpg",
        "desc": "Development of an User Interface Addon for Ember.js Applications.",
        "tech": [
          {"name":"ember.js"},
          {"name":"scss"},
          {"name":"past"}
        ]
      },
      { "id": 4,
        "name": "Front End Development & A/B Testing @ Mobility Media GmbH",
        "imgUrl": "/assets/hands.jpg",
        "desc": "Development of user interface elements and landing pages for drivelog.de. A/B testing of new website features and conversion tracking. Content management in Liferay CMS.",
        "slides": [
          {"imgUrl":"/assets/dl2.png",
           "alt":"Screenshot Drivelog Landing Page B2B",
           "caption": ""
          },
          {"imgUrl":"/assets/dl1.png",
           "alt":"Screenshot Drivelog Main Page 2015",
           "caption": ""
          }
        ],
        "tech": [
          {"name":"jquery"},
          {"name":"scss"},
          {"name":"a/b"},
          {"name":"past"}
        ]
      },
      { "id": 5,
        "name": "Front End Development @ Instinkte",
        "imgUrl": "/assets/hands.jpg",
        "desc": "Development of user interface for instinkte.eu  based on Wordpress CMS.",
        "tech": [
          {"name":"jquery"},
          {"name":"wordpress"},
          {"name":"less"},
          {"name":"past"}
        ]
      },
      { "id": 6,
        "name": "Front End Development of Personal Web Comic Project 'Dusk'",
        "imgUrl": "/assets/hands.jpg",
        "desc": "Development, Art and Design for my personal web comic project at www.dusk-comic.com",
        "slides": [
          {"imgUrl":"/assets/jugendkim-cut.jpg",
           "alt":"Character of Webcomic Dusk - Jugendstil",
           "caption": ""
          },
          {"imgUrl":"/assets/dancedemoex.001.png",
           "alt":"Demo Sketch Dusk Webcomic",
           "caption": ""
          }
        ],
        "tech": [
          {"name":"ember.js"},
          {"name":"scss"},
          {"name":"design"},
          {"name":"art"},
          {"name":"active"}
        ]
      },
      { "id": 7,
        "name": "Mentoring @ OpenTechSchool Berlin (Germany)",
        "imgUrl": "/assets/hands.jpg",
        "desc": "Co-mentoring learners at weekly front end co-learning meetups.",
        "slides": [
          {"imgUrl":"/assets/ots.jpeg",
           "alt":"OpenTechSchool Berlin Colearning Snapshot",
           "caption": ""
          }
        ],
        "tech": [
          {"name":"mentoring"},
          {"name":"scss"},
          {"name":"past"}
        ]
      }
     ];
export default Ember.Route.extend({
  model(){
    return mockModel;
  }
});
