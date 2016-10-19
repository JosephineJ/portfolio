import Ember from 'ember';

const mockModel = [
      { "id": 1,
        "name": "Baking for Expert",
        "param": "my",
        "imgUrl": "assets/hands.jpg",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur arcu. Proin et magna eu turpis aliquet molestie sed vitae libero. Cras ultrices sapien nunc. Mauris blandit ornare massa, sed porttitor mi scelerisque eu. Ut rhoncus tortor et velit aliquam maximus. Pellentesque tellus nulla, interdum dapibus posuere sed, dapibus non nibh.",
        "slides": [
          {"imgUrl":"/hands.jpg",
           "alt":"My Hands",
           "caption": "blabla"
          },
          {"imgUrl":"/jack.gif",
           "alt":"My Jack",
           "caption": "blubbubb"
          }
        ],
        "tech": [
           {"name":"ember.js",
             "query": "ember"},
          {"name":  "css",
           "query": "css"},
           {"name": "html",
            "query":"html"}
        ]
      },
      { "id": 2,
        "param":"dear",
        "name": "Baking for Expats",
        "imgUrl": "assets/hands.jpg",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur arcu. Proin et magna eu turpis aliquet molestie sed vitae libero. Cras ultrices sapien nunc. Mauris blandit ornare massa, sed porttitor mi scelerisque eu. Ut rhoncus tortor et velit aliquam maximus. Pellentesque tellus nulla, interdum dapibus posuere sed, dapibus non nibh.",
        "tech": [
          {"name":"ember.js",
            "query":"ember"}
          ]
      },
      { "id": 3,
        "name": "Baking for Experts",
        "param":"my",
        "imgUrl": "assets/hands.jpg",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur arcu. Proin et magna eu turpis aliquet molestie sed vitae libero. Cras ultrices sapien nunc. Mauris blandit ornare massa, sed porttitor mi scelerisque eu. Ut rhoncus tortor et velit aliquam maximus. Pellentesque tellus nulla, interdum dapibus posuere sed, dapibus non nibh.",
        "tech": [
        ]
      }
     ];
export default Ember.Route.extend({
  model(){
    return mockModel;
  }
});
