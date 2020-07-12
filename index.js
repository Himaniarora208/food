const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
        <title> Website</title>
  
        <style>
          .himani{
              color: crimson;
          }
          .himani1{
              color: darkblue;
          }
        </style>
  </head>
  
  
  <body >
              <input type="text"  id="name"  placeholder="Name">
           <input  placeholder="Email" type="email"  id="email">
         
              <a id="feedbackSubmit" type="button" onclick="feedbackCallBack()">Submit </a>
     
              <br> <br><br>
              <h2 id="firstName"> Hello  </h2> <br> 
              <br>
              <button id="changeColor">Change Colour</button>
              <br>
              <h2 class="himani" id="emailDisplay">My email  </h2>
              <br>
              <h2 style="background-color: darkolivegreen;">Add CSS</h2> <br>
              <h2 id="changeCSS">Add CSS through jquery</h2>
  
  
              <br>
              <button id="hideField">Hide Field</button>
              <br>
              <button id="showField">Show Field</button>
              <br>
              <button  id="deleteUser">DELETE USER</button> <br>
              <br>
  
  
  
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
   type="text/javascript"></script>
  <script type="text/javascript">
  
      $('#changeColor').click(function(){
  
        $('#firstName').addClass('himani')
         $('#emailDisplay').removeClass('himani')
  
  
        $('#changeCSS').css('background-color', 'pink')
  
  
      })
  
  
      $('#hideField').click(function(){
          $('#emailDisplay').hide();
      })
  
      $('#showField').click(function(){
          $('#emailDisplay').show();
      })
  
    function feedbackCallBack() {
    
     
        var data = 
        {
          name: $('#name').val(),
          email: $("#email").val()
          
        } 
        
        console.log(data,"OBJECT")
        console.log(JSON.stringify(data))
        $.ajax(
            {
          type: 'POST',
          url: 'https://test2109.herokuapp.com/register/register',
          contentType: 'application/json',
          dataType: 'json',
          data: JSON.stringify(data),
        
          success: function (data)
           {
           console.log(data);
            alert("Sucessfull")
          }
          , error: function (err)
          {
            console.log("error: ", err);
          }
        }
        );
    }
  
  </script>
   
  <script>
    $(document).ready(function(){
  
      $('#firstName').append(", Himani Arora")
  
      $.ajax({
          type: 'GET',
          url: 'https://collegeplacement.herokuapp.com/student/fetchStudentById/5e7f4bf0722cb4189499d329' ,
          contentType: 'application/json',
          dataType: 'json',
          success: function (data){
            $('#firstName').html(data.firstName + ' ' + data.lastName)
            $('#emailDisplay').html(data.emailId)
           console.log(data ,"DATA IS HERE");
          }, 
          error: function (err){
            console.log("error: ", err);
          }
        });
    })
  </script>
  
  <script>
      $('#deleteUser').click(function(){
        $.ajax({
          type: 'DELETE',
          url: 'https://collegeplacement.herokuapp.com/student/deleteStudent/5e7f4db0a92ec81894757492' ,
          contentType: 'application/json',
          dataType: 'json',
          success: function (data){
           alert("sucessfully deleted")
           console.log(data );
          }, 
          error: function (err){
            console.log("error: ", err);
          }
        });
      })
  </script>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});