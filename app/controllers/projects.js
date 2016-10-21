import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['tech'],
  tech: null,

  activeFilter: null,

  filteredProjects: Ember.computed('tech', 'model', function(){
    var tech = this.get('tech');
    var projects = this.get('model');
    var res = [];

    if (tech){
      
      var filter = projects.filter(function(el,index){
          var filterTech = el.tech.filterBy('name', tech);
          return filterTech.length > 0;
      });
      console.log("filter: " + filter);
      return filter;
 
    }
    else {
      console.log("didnt filter at all");
      return projects;
    }
  }),

  uniqueTechs: Ember.computed('model', function(){
    let projects = this.get('model');
    let techStack = projects.mapBy('tech');
    let techList = [].concat.apply([], techStack);
    return techList.uniqBy('name');

    //console.log("tech: " + JSON.stringify(techList));
  }),

  actions: {
    changeFilter(el){
      console.log("controller set filter");
      this.set('activeFilter', el);
    }
  }
});
