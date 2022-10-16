var dir = "./dist/mading";
let fileextension = ".html"
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    method: 'GET',
    url: dir,
    success: function (data) {
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            $("#container-card").append(`<div class="w-[30%] h-80 overflow-x-hidden rounded-xl border">
            <iframe src="./${filename}" class="w-full h-full" frameborder="0"></iframe>
          </div>`)
            // console.log(filename);
            // $("body").append($("<img src=" + dir + filename + "></img>"));
        });
    }
});