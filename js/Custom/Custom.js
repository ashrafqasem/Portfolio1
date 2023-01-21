// $(function(){
//     $("#Navigation").load("PartialViews/Navigation.html"); 
//     $("#Home").load("PartialViews/Home.html"); 
//     $("#About").load("PartialViews/About.html"); 
//     $("#Skills").load("PartialViews/Skills.html"); 
//     $("#Projects").load("PartialViews/Projects.html"); 
//     $("#Portfolio").load("PartialViews/Portfolio.html"); 
//     $("#Resume").load("PartialViews/Resume.html"); 
//     $("#Education").load("PartialViews/Education.html"); 
//     $("#Contact").load("PartialViews/Contact.html"); 
//     $("#Footer").load("PartialViews/Footer.html"); 
//     $("#Experience").load("PartialViews/Experience.html"); 
//     $("#Interests").load("PartialViews/Interests.html"); 
//     $("#Awards").load("PartialViews/Awards.html"); 
// });

$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'PartialViews/' + $(this).data('include') + '.html'
        $(this).load(file)
    });

});

