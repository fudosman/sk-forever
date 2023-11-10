document.getElementById('downloadBtn').addEventListener('click', function () {
  var fileID = '1LW98cWDMHlh7RHGNJWRPwFycXj7IghQD';

  var link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?id=' + fileID;
  link.target = '_blank';
  link.download = 'SK_Forever_Wedding_Program.pdf';

  document.body.appendChild(link);
  showToast('Download started. Please wait...');
  // Hide toast after 2 seconds
  setTimeout(function () {
    hideToast();
  }, 1500);
  link.click();
  document.body.removeChild(link);

});

function showToast(message) {
  var toastContainer = document.getElementById('toastContainer');
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);
}

function hideToast() {
  var toastContainer = document.getElementById('toastContainer');
  toastContainer.innerHTML = ''; // Clear toast content
}
