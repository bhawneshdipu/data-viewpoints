/**
 * Created by dipu on 1/4/17.
 */
$(document).ready(function(){

    var analysis=document.getElementById('analysistype');
    $('#analysistype').change(function () {
        alert(analysis.value);

        if (analysis.value == 'interpolation') {
            document.getElementById('xdatalable').innerHTML='X-Data';

            var str1 = '<label for="degree" class="col-lg-4 form-group" id="degreelable" name="degreelable">Predicted Degree:</label>';
            var str2 = '<input type="number" name="degree" id="degree"  class="col-lg-2 btn-sm" >';

            $('#analysistypedata').append(str1 + str2);



               var elec = document.getElementById('zdata');
               if(elec!=null)
                   elec.remove();
                var elec = document.getElementById('zlable');
                if(elec!=null)
                    elec.remove();


                    var str1=' <label for="ydata" class="col-lg-4 form-group" id="ylable">Y-Data</label>';
                    var str2='      <select class="col-lg-4 form-group input-sm" id="ydata" name="ydata">{{ selecty|safe }}</select>';
                    var str3='      <input type="color" name="color" id="color"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';


                    var elec = document.getElementById('ydata');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3);
                    }

        }
        if (analysis.value =='interpolation2d') {


            elec = document.getElementById('degree');
             if(elec!=null)
                 elec.remove();
            elec = document.getElementById('degreelable');
             if(elec!=null)
                 elec.remove();


            document.getElementById('xdatalable').innerHTML='X-Data';
            var selecty = document.getElementById('selectyval').value;

            var str1 = '<label for="zdata" class="col-lg-4 form-group" id="zlable" name="zlable">Z-Data</label>';
            var str2 = '<select class="col-lg-4 form-group input-sm" id="zdata" name="zdata">';
            var str3 = selecty + '</select>';

            $('#analysistypedata').append(str1 + str2+str3);

            var selecty = document.getElementById('selectyval').value;


            str1=' <label for="ydata" class="col-lg-4 form-group" id="ydatalable">Y-Data</label>';
            str2='      <select class="col-lg-6 form-group input-sm" id="ydata" name="ydata">{{ selecty|safe }}</select>';
            str3='      <input type="color" name="color" id="color"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';


               var elec = document.getElementById('ydata');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }

        }
        if (analysis.value == 'linearregression') {

            document.getElementById('xdatalable').innerHTML='X-Data';

            var str1 = '<label for="degree" class="col-lg-4 form-group" id="degreelable" name="degreelable">Predicted Degree:</label>';
            var str2 = '<input type="number" name="degree" id="degree"  class="col-lg-2 btn-sm" >';

            $('#analysistypedata').append(str1 + str2);


            elec = document.getElementById('zdata');
             if(elec!=null)
                 elec.remove();
            elec = document.getElementById('zlable');
            if(elec!=null)
                elec.remove();

            var selecty = document.getElementById('selectyval').value;


            str1=' <label for="ydata" class="col-lg-4 form-group" id="ydatalable">Y-Data</label>';
            str2='      <select class="col-lg-6 form-group input-sm" id="ydata" name="ydata">{{ selecty|safe }}</select>';
            str3='      <input type="color" name="color" id="color"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';


               var elec = document.getElementById('ydata');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }


        }
        if (analysis.value == 'polynomialregression') {

            document.getElementById('xdatalable').innerHTML='X-Data';
            var selecty = document.getElementById('selectyval').value;


            var str1 = '<label for="degree" class="col-lg-4 form-group" id="degreelable" name="degreelable">Predicted Degree:</label>';
            var str2 = '<input type="number" name="degree" id="degree"  class="col-lg-2 btn-sm" >';



            elec = document.getElementById('degree');
             if(elec==null)
                $('#analysistypedata').append(str1 + str2);



            var   str1=' <label for="ydata" class="col-lg-4 form-group" id="ydatalable">Y-Data</label>';
            var   str2='      <select class="col-lg-6 form-group input-sm" id="ydata" name="ydata">{{ selecty|safe }}</select>';
            var   str3='      <input type="color" name="color" id="color"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';


               var elec = document.getElementById('ydata');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }

         }
         if(analysis.value=='corelation'){
            document.getElementById('xdatalable').innerHTML='X-Data';

            alert('corelation');
             var selecty = document.getElementById('selectyval').value;


           var   str1=' <label for="ydata" class="col-lg-4 form-group" id="ydatalable">Y-Data</label>';
           var   str2='      <select class="col-lg-6 form-group input-sm" id="ydata" name="ydata">{{ selecty|safe }}</select>';
           var   str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';


               var elec = document.getElementById('ydata');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }

             elec = document.getElementById('zdata');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('degree');
             if(elec!=null)
                 elec.remove();
            elec = document.getElementById('degreelable');
             if(elec!=null)
                 elec.remove();




         }
    });

});