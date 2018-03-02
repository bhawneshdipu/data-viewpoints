$(document).ready(function(){

    var graph=document.getElementById('graphtype');
    $('#graphtype').change(function () {
        alert(graph.value);
        if (graph.value == 'cluster') {
            document.getElementById('xdatalable').innerHTML='X-Data';

            var str1 = '<label for="clusters" class="col-lg-4 form-group" id="clusterslable" name="clusterslable">Clusters:</label>';
            var str2 = '<input type="number" name="clusters" id="clusters"  class="col-lg-2 btn-sm" >';

            $('#graphtypedata').append(str1 + str2);
               var elec = document.getElementById('zdata');
               if(elec!=null)
                   elec.remove();
            var elec = document.getElementById('zlable');

            if(elec!=null)
                elec.remove();

             elec = document.getElementById('binslabel');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();






           str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
                  str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
                  var str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

                 var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }

             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();

        }
        if (graph.value =='contour') {

            document.getElementById('xdatalable').innerHTML='X-Data';
            var selecty = document.getElementById('selectyval').value;

            var str1 = '<label for="zdata" class="col-lg-4 form-group" id="zlable" name="zlable">Z-Data</label>';
            var str2 = '<select class="col-lg-4 form-group input-sm" id="zdata" name="zdata">';
            var str3 = selecty + '</select>';

            $('#graphtypedata').append(str1 + str2+str3);

            var selecty = document.getElementById('selectyval').value;


           str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
                  str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
                  str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

                 var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }


            var elec = document.getElementById('clusters');
            if(elec!=null)
                elec.remove();

                var elec = document.getElementById('clusterslable');
            if(elec!=null)
                elec.remove();


            elec = document.getElementById('binslabel');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();


             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();



        }
        if (graph.value == 'histogram') {


            var selecty = document.getElementById('selectyval').value;
            alert(selecty);
            var selectb="<option  value='auto'>auto</option>".toString()+selecty;
            alert(selectb);
            str1=' <label for="bins" class="col-lg-4 form-group" id="binslabel" >Bins:</label>';
            str2='      <select class="col-lg-6 form-group input-sm" id="bins" name="bins">'+selectb+'</select>';
            str3='      <input type="color" name="colorbins" id="colorbins"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

            var elec = document.getElementById('bins');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3);


                    }





            document.getElementById('xdatalable').innerHTML='Frequency Data';




             elec = document.getElementById('ylable1');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('ydata1');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('color1');
            if(elec!=null)
                elec.remove();
             elec = document.getElementById('addycol');
            if(elec!=null)
                elec.remove();


             elec = document.getElementById('zdata');
             if(elec!=null)
                 elec.remove();
            elec = document.getElementById('zlable');
            if(elec!=null)
                elec.remove();

            elec = document.getElementById('clusters');
            if(elec!=null)
                elec.remove();

            elec = document.getElementById('clusterslable');
            if(elec!=null)
                elec.remove();


             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();
        }
        if (graph.value == 'line') {

            document.getElementById('xdatalable').innerHTML='X-Data';
            var selecty = document.getElementById('selectyval').value;


           str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
                  str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
                  str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

                 var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }

                     elec = document.getElementById('binslabel');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();

         }
         if(graph.value=='pie'){
            alert('pieee');
             document.getElementById('xdatalable').innerHTML='Lables:';
             var selecty = document.getElementById('selectyval').value;


           str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
                  str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
                  str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

                 var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }
                     elec = document.getElementById('binslabel');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();


         }
         if(graph.value=='scatter'){
             document.getElementById('xdatalable').innerHTML='X-Data';

             var selecty = document.getElementById('selectyval').value;


           str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
                  str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
                  str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

                 var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }


                     elec = document.getElementById('binslabel');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();

         }
         if(graph.value=='bar'){
            document.getElementById('xdatalable').innerHTML='Lables:';

             var selecty = document.getElementById('selectyval').value;


           str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
                  str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
                  str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

                 var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }
                     elec = document.getElementById('binslabel');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();


             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();

         }
         if(graph.value=='heatmap'){
             document.getElementById('xdatalable').innerHTML='X-Data:';

             var selecty = document.getElementById('selectyval').value;


           str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
                  str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
                  str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

                 var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }
                     elec = document.getElementById('binslabel');
            if(elec!=null)
            elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();


             elec = document.getElementById('timeformatlable');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('timeformat');
            if(elec!=null)
                elec.remove();

         }
         if (graph.value == 'timeseries') {

            document.getElementById('xdatalable').innerHTML='X-Data';
            var selecty = document.getElementById('selectyval').value;


             str1=' <label for="ydata1" class="col-lg-4 form-group" id="ylable1">Y-Data</label>';
             str2='      <select class="col-lg-4 form-group input-sm" id="ydata1" name="ydata1">{{ selecty|safe }}</select>';
             str3='      <input type="color" name="color1" id="color1"  class="col-lg-2 btn-sm" style="height:30px;padding: 0px 0px 0px 0px ;margin: 0px 0px 20px 0px">';

             var  str4='      <button type="button" name="addycol" id="addycol" class="btn btn-success btn-sm col-lg-2" value="1" onclick="addelement(this.value)">Add Y</button>';


               var elec = document.getElementById('ydata1');
                    if(elec ==null){
                        $('#data').append(str1+str2+str3+str4);


                    }




             var t0="<option value='%d-%m-%y'>24-07-17</option><option value='%d-%m-%Y'>24-07-2017</option>";
             var t1="<option value='%d-%y-%m'>24-17-07</option><option value='%d-%Y-%m'>24-2017-07</option>";
             var t2="<option value='%y-%d-%m'>17-24-07</option><option value='%Y-%d-%m'>2017-24-07</option>";
             var t3="<option value='%y-%m-%d'>17-07-24</option><option value='%Y-%m-%d'>2017-07-24</option>";
             var t4="<option value='%m-%d-%y'>07-24-17</option><option value='%-%d-%m'>2017-24-07</option>";
             var t5="<option value='%m-%y-%d'>07-17-24</option><option value='%Y-%m-%d'>2017-07-24</option>";

             var t6="<option value='%d-%B-%y'>24-july-17</option><option value='%d-%b-%Y'>24-jul-2017</option>";
             var t7="<option value='%d-%y-%B'>24-17-july</option><option value='%d-%Y-%b'>24-2017-jul</option>";
             var t8="<option value='%y-%d-%B'>17-24-july</option><option value='%Y-%d-%b'>2017-24-jul</option>";
             var t9="<option value='%y-%B-%d'>17-july-24</option><option value='%Y-%b-%d'>2017-jul-24</option>";
             var t10="<option value='%B-%d-%y'>july-24-17</option><option value='%-%d-%b'>2017-24-jul</option>";
             var t11="<option value='%B-%y-%d'>july-17-24</option><option value='%Y-%b-%d'>2017-jul-24</option>";

             var a0="<option value='%d/%m/%y'>24/07/17</option><option value='%d/%m/%Y'>24/07/2017</option>";
             var a1="<option value='%d/%y/%m'>24/17/07</option><option value='%d/%Y/%m'>24/2017/07</option>";
             var a2="<option value='%y/%d/%m'>17/24/07</option><option value='%Y/%d/%m'>2017/24/07</option>";
             var a3="<option value='%y/%m/%d'>17/07/24</option><option value='%Y/%m/%d'>2017/07/24</option>";
             var a4="<option value='%m/%d/%y'>07/24/17</option><option value='%/%d/%m'>2017/24/07</option>";
             var a5="<option value='%m/%y/%d'>07/17/24</option><option value='%Y/%m/%d'>2017/07/24</option>";

             var a6="<option value='%d/%B/%y'>24/july/17</option><option value='%d/%b/%Y'>24/jul/2017</option>";
             var a7="<option value='%d/%y/%B'>24/17/july</option><option value='%d/%Y/%b'>24/2017/jul</option>";
             var a8="<option value='%y/%d/%B'>17/24/july</option><option value='%Y/%d/%b'>2017/24/jul</option>";
             var a9="<option value='%y/%B/%d'>17/july/24</option><option value='%Y/%b/%d'>2017/jul/24</option>";
             var a10="<option value='%B/%d/%y'>july/24/17</option><option value='%/%d/%b'>2017/24/jul</option>";
             var a11="<option value='%B/%y/%d'>july/17/24</option><option value='%Y/%b/%d'>2017/jul/24</option>";

             var s0="<option value='%d %m %y'>24 07 17</option><option value='%d %m %Y'>24 07 2017</option>";
             var s1="<option value='%d %y %m'>24 17 07</option><option value='%d %Y %m'>24 2017 07</option>";
             var s2="<option value='%y %d %m'>17 24 07</option><option value='%Y %d %m'>2017 24 07</option>";
             var s3="<option value='%y %m %d'>17 07 24</option><option value='%Y %m %d'>2017 07 24</option>";
             var s4="<option value='%m %d %y'>07 24 17</option><option value='% %d %m'>2017 24 07</option>";
             var s5="<option value='%m %y %d'>07 17 24</option><option value='%Y %m %d'>2017 07 24</option>";

             var s6="<option value='%d %B %y'>24 july 17</option><option value='%d %b %Y'>24 jul 2017</option>";
             var s7="<option value='%d %y %B'>24 17 july</option><option value='%d %Y %b'>24 2017 jul</option>";
             var s8="<option value='%y %d %B'>17 24 july</option><option value='%Y %d %b'>2017 24 jul</option>";
             var s9="<option value='%y %B %d'>17 july 24</option><option value='%Y %b %d'>2017 jul 24</option>";
             var s10="<option value='%B %d %y'>july 24 17</option><option value='%Y %d %b'>2017 24 jul</option>";
             var s11="<option value='%B %y %d'>july 17 24</option><option value='%Y %b %d'>2017 jul 24</option>";



             var timef=t0+t1+t2+t3+t4+t5+t6+t7+t8+t9+t10+t11+a0+a1+a2+a3+a4+a5+a6+a7+a8+a9+a10+a11+s0+s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11;

             var str1 = '<label for="timeformat" class="col-lg-4 form-group" id="timeformatlable" name="timeformatlable">Date Format</label>';
            var str2 = '<select class="col-lg-4 form-group input-sm" id="timeformat" name="timeformat">';
            var str3 = timef + '</select>';

            $('#graphtypedata').append(str1 + str2+str3);

            var selecty = document.getElementById('selectyval').value;



             elec = document.getElementById('binslabel');
             if(elec!=null)
                 elec.remove();
             elec = document.getElementById('bins');
            if(elec!=null)
                elec.remove();

             elec = document.getElementById('colorbins');
            if(elec!=null)
                elec.remove();





         }




    });

});