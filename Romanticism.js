<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
</script>

$.get('insertname.txt', function(data){
  document.getElementById("idofyourshiet").innerHtml = data;
});
