import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['tech'],
  tech: null,

  activeFilter: null,

  filteredProjects: Ember.computed('tech', 'model', function(){
    var tech = this.get('tech');
    var projects = this.get('model');

    if (tech){
      
      var filter = projects.filter(function(el){
          var filterTech = el.tech.filterBy('name', tech);
          return filterTech.length > 0;
      });

      return filter;
 
    }
    else {

      return projects;
    }
  }),

  uniqueTechs: Ember.computed('model', function(){
    let projects = this.get('model');
    let techStack = projects.mapBy('tech');
    let techList = [].concat.apply([], techStack);
    return techList.uniqBy('name');
  }),

  actions: {
    changeFilter(el){

      this.set('activeFilter', el);
    },
   setFilter() {
     console.log("set filter in controller");
   }
  }
});
