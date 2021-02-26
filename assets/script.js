// console.log('hello');
// var task;
// console.log('global', task)
$(".txtb").on("keyup", function (e) {
    // console.log(e.keyCode)
    // alert("ok");
    // var task;
    console.log('inside key up', task)
    // var del;
    if (e.keyCode === 13 && $(".txtb").val() !== "") {
        // console.log(e.keyCode)
        var task = $("<div class='task'></div>").text($(".txtb").val());
        // console.log('inside if', task)
        var del = $("<i class-'fa-trash-alt'></i>").click(function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                p.remove();
            });
        })
    }


});