/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
function main(){

    // get login page request to back end
    $('button#loginBtn').click(function(){
        var idnumber = $('input#idnumber').val();
        $.ajax({
            url: 'http://localhost:3000/home/login',
            type: 'GET',
            data: {idnumber: idnumber},
            success: function(response) {
                console.log('id: '+idnumber);
                console.log("Going to homepage...");
            }
        });
    })

    // get viewlog page request to back end
    $('button#viewlogBtn').click(function(){
        var idnumber = $('input#idnumber').val();
        $.ajax({
            url: 'http://localhost:3000/viewlog',
            type: 'GET',
            data: {idnumber: idnumber},
            success: function(response) {
                console.log('id: '+idnumber);
                console.log("Going to Viewlog page...");
                window.location.href ='viewlog';
            }
        });
    })
}
$(document).ready(main);