function save_image() {
    alert('save_image ajax');
        var dataURL = canvas.toDataURL();

        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";

        var data=dataURL.substr(dataURL.indexOf(",")+1);
        var dataPass = 'data='+data;
           $.ajax({
                type : 'POST',
                data : dataPass,
                url  : 'save_image',
                success: function(responseText){ // Get the result
                    if(responseText == 0){
                        alert("error in saving");
                    }
                    else if(responseText == 1){
                        alert('saved');
                       // window.location.replace('./');
                    }
                    else{
                        alert('Problem with sql query'+responseText);
                    }
                }
            });

}


function predict_image() {
    alert('predict_image ajax');
        var dataPass="predict";
            $.ajax({
                type : 'POST',
                data : dataPass,
                url  : 'predict_image',
                success: function(responseText){ // Get the result
                    alert(responseText);
                    if(responseText == 0){
                        alert("error in saving");
                    }
                    else if(responseText == 1){
                        alert('saved');
                       // window.location.replace('./');
                    }
                    else{
                        alert('Problem with sql query'+responseText);
                    }
                }
            });

}



