myApp.factory('modalFactory', function(){
  var title = 'Repositories';
  
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});
