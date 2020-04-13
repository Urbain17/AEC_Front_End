$(document).ready(function(){
    $( "#form" ).submit(function( event ) {
        if($("#alphabetPhoto").val().length < 3 || $("#alphabetPhoto").val().length > 12 ){
            alert("Mot trop long ou trop court");
            event.preventDefault();
        }else{
            const text =  $("#alphabetPhoto").val();
            $("#laRow").html('');
            //ici on construit le mot

            var colsize = "";
            switch (text.length) {
                case 3:
                    colsize="col-4"
                    break;
                case 4:
                    colsize="col-3"
                    break;
                case 5:
                    colsize="col-2"
                    break;
                case 6:
                    colsize="col-2"
                    break;
                default:
                    colsize="col-1"
            }

            for(var i=0;i<text.length;i++){
                var lettreId = Math.floor(Math.random() * 5)+1;

                var image = text[i]+""+lettreId;
                var path =  text[i].toUpperCase();

                if(text[i]==='*'){
                    image = 'CS'+lettreId;
                    path='CS'
                }

                var lettre= '<div class="__col"><img src="Letters/__path/__image.jpg" class="img-responsive letters"></div>';


                lettre = lettre.replace('__col',colsize).replace(/__image/g, image.toUpperCase()).replace(/__path/g,path);


                $("#laRow").append(lettre); }
        }
        event.preventDefault();

    });
    $("#alphabetPhoto").keyup(function() {
        var text = $("#alphabetPhoto").val();
        $("#alphabetPhoto").val(accentsTidy(text));
    });




    accentsTidy = function(s){
        var r=s.toLowerCase();

        r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
        r = r.replace(new RegExp("æ", 'g'),"ae");
        r = r.replace(new RegExp("ç", 'g'),"c");
        r = r.replace(new RegExp("[èéêë]", 'g'),"e");
        r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
        r = r.replace(new RegExp("ñ", 'g'),"n");
        r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
        r = r.replace(new RegExp("œ", 'g'),"oe");
        r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
        r = r.replace(new RegExp("[ýÿ]", 'g'),"y");

        return r;
    };



})





