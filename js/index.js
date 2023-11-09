document.getElementById('downloadBtn').addEventListener('click', function () {
  // Replace 'FILE_ID' with the actual ID of your Google Drive file
  var fileID = '1LW98cWDMHlh7RHGNJWRPwFycXj7IghQD';

  // Create a virtual anchor element
  var link = document.createElement('a');

  // Set the href attribute to the direct download link
  link.href = 'https://drive.google.com/uc?id=' + fileID;

  // Set the download attribute to specify the filename
  link.download = 'SK_Forever_Wedding_Program.pdf';

  // Append the anchor element to the document
  document.body.appendChild(link);

  // Trigger a click event on the anchor element
  link.click();

  // Remove the anchor element from the document
  document.body.removeChild(link);
  alert("Downloading the wedding program...");
});
