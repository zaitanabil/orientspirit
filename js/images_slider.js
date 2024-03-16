document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('imageContainer');
  var numberOfImages = 31; // Ajustez ce nombre selon le nombre d'images

  for (var i = 1; i <= numberOfImages; i++) {
      var imgDiv = document.createElement('div');
      imgDiv.classList.add('images');

      var img = document.createElement('img');
      img.src = 'images/actions/image' + i + '.jpeg';
      
      imgDiv.appendChild(img);
      container.appendChild(imgDiv);
  }
});
