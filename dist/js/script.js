var dir = "./dist/mading";
let fileextension = ".html"

function getListData(){
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        method: 'GET',
        url: 'https://gdsc-ubg-be.herokuapp.com/get-list',
        success: function (data) {
            console.log();
            data.data.forEach(el => {
                    $("#container-card").append(`<div class="container-card">
                    <iframe src="https://gdsc-ubg-be.herokuapp.com/get-page/${el}" style="width:100%; height:100%;" frameborder="0"></iframe>
                  </div>`)

                // $("#container-card").append(`<div class="w-[30%] h-80 overflow-x-hidden rounded-xl border">
                //     <iframe src="https://gdsc-ubg-be.herokuapp.com/get-page/${el}"  class="w-full h-full" frameborder="0"></iframe>
                // </div>`)
            });
        }
    });
}

getListData()