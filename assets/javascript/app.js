$(document).ready(function(){

//funcion onclick para guardar info
$("#emailbutton").on("click", function() {
    event.preventDefault();
    var email = $("#email-input").val().trim();
    var edad = $("#edad-input").val().trim();
    console.log(email);
    console.log(edad)
    database.ref().push({
        email: email,
        edad: edad,
    });
// cerrando OnClick
});
});


$(document).ready(function() {  

    $("#Detailbutton").on("click", function(event) {

        event.preventDefault();


        console.log(movie);

    
        var movie = $("#movie-input").val();
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        // Creando un AJAX para la pelicula que se esta buscando

            $.ajax({
            url: queryURL,
            method: "GET"
            }).done(function(response) {
                console.log(response);

                // poniendo el div 
                var holder = $("<div class='movie'>");
                //buscando el titulo
                var title = response.Title;
                var tdisplay = $("<p>").text("Title: " + title); 
                holder.append(title);
                
                //buscando el ratting
                var rating = response.Rated
                console.log(rating);
                //mostrando el rating
                var rdisplay = $("<p>").text("Rating: " + rating);
                holder.append(rdisplay);

                //buscando año
                var released = response.Released;
                //mostrando
                var Realasedisplay = $("<p>").text("Released Date: " + released);
                holder.append(Realasedisplay);

                //buscando la trama
                var plot = response.Plot;
                //mostrando la trama
                var plotdisplay = $("<p>").text("Plot: " + plot);
                holder.append(plotdisplay);

                //tiempo de duracion
                var runtime = response.Runtime;
                var rundisplay = $("<p>").text("Runtime: " + runtime); 
                holder.append(rundisplay);
               
                //buscando escritores 
                var writers = response.Writer;
                var writerdis = $("<p>").text("Writers: " + writers);
                holder.append(writerdis); 
                //mostrando escritores
                var director = response.Director
                var dirdis = $("<p>").text("Director: " + director);
                holder.append(dirdis);
                //buscando imagen
                var imgUrl = response.Poster;
                var imgdisplay = $("<img>").attr("src", imgUrl);
                holder.append(imgdisplay);

                $("#AdamsApi").prepend(holder);
                });
//cerrando OnClick      
});
//cerrado listo
});

// API de youtube se cerrara cuando busque la info
$(document).ready(function(){
  $('#movie').hide();
  

  $('#Trailerbutton').on("click", function() {
    var trail = $('#movie-input').val();
    var replaced = trail.replace(' ', '+');
    var query = "https://www.youtube.com/embed?listType=search&list=" + trail + "trailer"
    $('#movie').show();
    $('#movie').attr("src", query);

    console.log(query);
});

});