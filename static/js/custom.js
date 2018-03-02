var hottab;
$(document).ready(function(){

    var str=(document.getElementById('tabledata'));
    var data=eval("[\n"+str.value+"\n]");
    var container = document.getElementById('example');
     hottab = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    dropdownMenu: true,
    stretchH: 'all',
        contextMenu:true
    });




});


function save() {

    var newData = hottab.getData(); // Get ID of the result DIV where we display the results
    var cols=hottab.countCols();
    var rows=hottab.countRows();

        var dataPass = 'data='+newData+'&cols='+cols+'&rows='+rows+'&';
            $.ajax({ // Send the username val to available.php
                type : 'POST',
                data : dataPass,
                url  : 'save_data',
                success: function(responseText){ // Get the result

                    if(responseText == 0){
                        alert("error in saving");
                    }
                    else if(responseText == 1){
                        alert('saved')
                        window.location.replace('./');
                    }
                    else{
                        alert('Problem with sql query'+responseText);
                    }
                }
            });

    }


function deluser() {
    alert("Loging out...(^_^)");
    dataPass='delete';
    $.ajax({ // Send the username val to available.php
                type : 'POST',
                data : dataPass,
                url  : 'del_user',
                success: function(responseText){
                    // Get the result
                    location.href="./../?usr=0";

                }
            });

}

