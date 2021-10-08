// $(function(){
//     $("#Navigation").load("PartialViews/Navigation.html"); 
// });

// $(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'PartialViews/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
// })