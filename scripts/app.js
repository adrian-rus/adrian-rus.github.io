$(document).ready(function(){
    $('#btns').click(function(){
      alert('Thank you for getting in touch. We will come back to you as soon as possible.')
    });

    $('#search-btn').on('click',function(){
        $('#search-bar').toggleClass('hidden')
    });
});



