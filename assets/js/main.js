$('.btn-task').click(function(){
    const input = $('.input-task').val()
    $('ul').append(
      '<li class="list">' +
      '<img src="assets/img/checked.png" class="check"/>'
      + input + '<img src="assets/img/trash.png" class="trash"/>' +'</li>'
      )
      
   $('.input-task').val('')
   $('.input-task').focus()
   
   
   $('ul').on('click', '.trash', function(){
    $(this).parent('.list').fadeOut(100)
   })
   
   $('ul').on('click', '.check', function(){
    $(this).parent('.list').toggleClass('green')
   })
  })
  
