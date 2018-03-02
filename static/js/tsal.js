$(document).ready(function() {

   var data=1;
    $.ajax({ // Send the username val to available.php
        type: 'POST',
        data: data,
        url: 'livetweety',
        success: function (responseText) { // Get the
            alert('liveimage');
            $('#liveimage').src=responseText;
        }
    });


     var data=1;
    $.ajax({ // Send the username val to available.php
        type: 'POST',
        data: data,
        url: 'returntweets',
        success: function (responseText) { // Get the result
            alert('tweets');
            $('#tweets').innerText(responseText);
        }
    });

});
