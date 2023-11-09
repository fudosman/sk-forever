document.getElementById('downloadBtn').addEventListener('click', function () {
  // Create a virtual anchor element
  var link = document.createElement('a');

  // Set the href attribute to the file path
  link.href = '../media/SK Forever.pdf';

  // Set the download attribute to specify the filename
  link.download = 'SK_Forever_Wedding_Program.pdf';

  // Append the anchor element to the document
  document.body.appendChild(link);

  // Trigger a click event on the anchor element
  link.click();

  // Remove the anchor element from the document
  document.body.removeChild(link);
});
