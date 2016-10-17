import Ember from 'ember';

export default Ember.Route.extend({
  model(){
     return [
      { "id": 1,
        "name": "Baking for Experts",
        "imgUrl": "assets/hands.jpg",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur arcu. Proin et magna eu turpis aliquet molestie sed vitae libero. Cras ultrices sapien nunc. Mauris blandit ornare massa, sed porttitor mi scelerisque eu. Ut rhoncus tortor et velit aliquam maximus. Pellentesque tellus nulla, interdum dapibus posuere sed, dapibus non nibh."
      },
      { "id": 2,
        "name": "Baking for Experts",
        "imgUrl": "assets/hands.jpg",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur arcu. Proin et magna eu turpis aliquet molestie sed vitae libero. Cras ultrices sapien nunc. Mauris blandit ornare massa, sed porttitor mi scelerisque eu. Ut rhoncus tortor et velit aliquam maximus. Pellentesque tellus nulla, interdum dapibus posuere sed, dapibus non nibh."
      },
      { "id": 3,
        "name": "Baking for Experts",
        "imgUrl": "assets/hands.jpg",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae consectetur arcu. Proin et magna eu turpis aliquet molestie sed vitae libero. Cras ultrices sapien nunc. Mauris blandit ornare massa, sed porttitor mi scelerisque eu. Ut rhoncus tortor et velit aliquam maximus. Pellentesque tellus nulla, interdum dapibus posuere sed, dapibus non nibh."
      }
     ];
  }
});
