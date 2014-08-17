$(function() {
  var response = $.getJSON('/docs/api/search.json');
  response.success( ApiSearch.initialize );

  $('#api-accordion').accordion({
    header: "h5",
    heightStyle: "content",
    collapsible: true,
    active: currentGroupIndex // set in _includes/api_docs_index
  });
});