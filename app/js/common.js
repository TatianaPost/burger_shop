
$('#form').on('submit', submitForm);

function submitForm (e) {
  e.preventDefault();
  var target = $(e.target),
      data = target.serialize(),
      type = target.attr('method'),
      url = target.attr('action');
  console.log(data);
  console.log(type);
  console.log(url);
  
  
  


};
