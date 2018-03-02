function myFunction(id) {
        var selectedVal = "";
        var selected = $("#function input[type='radio']:checked");
        if (selected.length > 0) {
                selectedVal = selected.val();
        }

    var result='result'+selectedVal;
    var output='output'+selectedVal;
    document.getElementById(result).value+=id;

    if (document.getElementById(id).value !='') {
        document.getElementById(output).value+=document.getElementById(id).value;
    }else{
        document.getElementById(output).value+=id;
    }
}
function back(id) {

        var selectedVal = "";
        var selected = $("#function input[type='radio']:checked");
        if (selected.length > 0) {
                selectedVal = selected.val();
        }

    var result='result'+selectedVal;
    var output='output'+selectedVal;
    var res = document.getElementById(result).value;
    var fun = document.getElementById(output).value;
    var lenr = res.length;
    var lenf = fun.length;


    while (res[lenr - 1] != '+' && res[lenr - 1] != '-' && res[lenr - 1] != '*' && res[lenr - 1] != '/' && lenr > 0) {
        lenr--;

    }


    while (fun[lenf - 1] != '+' && fun[lenf - 1] != '-' && fun[lenf - 1] != '*' && fun[lenf - 1] != '/' && lenf > 0) {
        lenf--;
    }


    lenr--;
    lenf--;
if(lenr>0 && lenf>0)
    {
        if (res[lenr - 1] == '*') {
            lenr--;
            while (res[lenr - 1] != '+' && res[lenr - 1] != '-' && res[lenr - 1] != '*' && res[lenr - 1] != '/' && lenr > 0) {
                lenr--;

            }
            lenr--;
        }

        if (fun[lenf - 1] == '*') {
            lenf--;
            while (fun[lenf - 1] != '+' && fun[lenf - 1] != '-' && fun[lenf - 1] != '*' && fun[lenf - 1] != '/' && lenf > 0) {
                lenf--;

            }
            lenf--;
        }
        if(lenr>=0)
          res=res.substr(0,lenr);

        if(lenf>=0)
          fun=fun.substr(0,lenf);


    document.getElementById(result).value=res;
    document.getElementById(output).value=fun;

    }else{

        document.getElementById(result).value='';
        document.getElementById(output).value='';

    }


}
// Clears calculator input screen
function clearScreen() {
        var selectedVal = "";
        var selected = $("#function input[type='radio']:checked");
        if (selected.length > 0) {
                selectedVal = selected.val();
        }

    var result='result'+selectedVal;
    var output='output'+selectedVal;

    document.getElementById(result).value="";
    document.getElementById(output).value="";
}

function addelement(num){

    num=parseInt(num)+1;
    var str0='<input type="radio" id="radioresultx'+num+'" name="radioresult" class="col-lg-1 form-group input-sm" value="x'+num+'" checked>';
    var str1='<input type="text"  readonly class="col-lg-11  form-group input-sm " name="outputx'+num+'"  id="outputx'+num+'" placeholder="X'+num+'=" >';
    var str2='<input type="radio" id="radioresulty'+num+'" name="radioresult" class="col-lg-1 form-group input-sm" value="y'+num+'" checked>';
    var str3='<input type="text"  readonly class="col-lg-10  form-group input-sm " name="outputy'+num+'"  id="outputy'+num+'" placeholder="Y'+num+'=" >';

    var str4='<input type="color" id="color'+num+'" name="color'+num+'" class="col-lg-1 form-group input-sm">';
    var str5='<input type="hidden"  readonly class="col-lg-12  form-group form-group input-sm" name="resultx'+num+'"  id="resultx'+num+'" placeholder="X=" > ';
    var str6=' <input type="hidden" readonly class="col-lg-12 form-control form-group input-sm" name="resulty'+num+'"  id="resulty'+num+'" placeholder="Y=" >';

    $("#function").append(str0+str1+str2+str3+str4+str5+str6);
    document.getElementById("addfun").value=parseInt(num);
    document.getElementById('count').value=parseInt(num);
    document.getElementById("delfun").value=parseInt(num);

}
function deleteelement(num){
    num=parseInt(num);
    var resx="resultx"+num;
    var outx="outputx"+num;
    var radx='radioresultx'+num;

    var resy="resulty"+num;
    var outy="outputy"+num;
    var rady='radioresulty'+num;
    var colr='color'+num;

    var elec = document.getElementById(colr);
    elec.remove();
    var elem = document.getElementById(radx);
    elem.remove();
    var elemr = document.getElementById(resx);
    elemr.remove();
    var elemo = document.getElementById(outx);
    elemo.remove();



    var elem = document.getElementById(rady);
    elem.remove();
    var elemr = document.getElementById(resy);
    elemr.remove();
    var elemo = document.getElementById(outy);
    elemo.remove();


    document.getElementById("addfun").value=parseInt(num-1);
    document.getElementById('count').value=parseInt(num-1);

    document.getElementById("delfun").value=parseInt(num-1);
}