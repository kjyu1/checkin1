/**
 * Created by thanaponsathirathiwat on 3/2/16.
 */
/**
 * Created by thanaponsathirathiwat on 3/1/16.
 */
function main(){

    $('button#homepageBtn').click(function(){
        $.ajax({
            url: 'http://localhost:3000/home',
            type: 'GET',
            success: function(response) {
                console.log("Going to homepage...");
                window.location.href ='home';
            }
        });
    })
}
$(document).ready(main);