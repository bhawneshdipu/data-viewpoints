/**
 * Created by dipu on 19/3/17.
 */

function addelement(num){

    num=parseInt(num)+1;
    if(num<=9) {
        var selecty = document.getElementById('selectyval').value;

        var str1 = '<label for="ydata' + num + '" class="col-lg-4 form-group" id="ylable' + num + '" name="ylable' + num + '">Y-Data</label>';
        var str2 = '<select class="col-lg-4 form-group input-sm" id="ydata' + num + '" name="ydata' + num + '">';
        var str3 = selecty + '</select>';
        var str4 = '<input type="color" name="color' + num + '" id="color' + num + '"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px"">';
        var str5 = '<button type="button" name="delycol' + num + '" id="delycol' + num + '" class="btn btn-danger btn-sm col-lg-2" value="' + num + '" onclick="delelement(this.value)">Del Y</button>';

        $("#data").append(str1 + str2 + str3 + str4 + str5);
        document.getElementById("addycol").value = parseInt(num);
        document.getElementById('countcols').value += (num);
        document.getElementById("delycol").value = parseInt(num);
    }
}
function delelement(num){
    num=parseInt(num);
    var res="ydata"+num;
    var rad='delycol'+num;
    var colr='color'+num;
    var ylab='ylable'+num;

    var elec = document.getElementById(colr);
    elec.remove();


    var elem = document.getElementById(rad);
    elem.remove();

    var elemr = document.getElementById(res);
    elemr.remove();

    var eleml = document.getElementById(ylab);
    eleml.remove();

    var str=document.getElementById('countcols').value;
    alert(str);
    alert(num);
    var index=str.indexOf(String(num))
    alert(str.substr(0,index));
    var strstr= str.substr(0,index)+str.substr(index+1);
    alert(strstr);

    document.getElementById("addycol").value=parseInt(num-1);
    document.getElementById('countcols').value=strstr;

    document.getElementById("delycol").value=parseInt(num-1);
}