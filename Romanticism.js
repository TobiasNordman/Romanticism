


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
</script>
<script>

$.get('text.txt',function(data){
  document.getElementById("pone").innerHtml = data;
});

</script>
