document.addEventListener('DOMContentLoaded', () => {
  const submitBotton = document.getElementById('submitBtn');
  const resultDiv = document.getElementById('result');

  function simulateLogin() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve('Welcome back!');
        } else {
          reject('Error: Login failed. Please try again.');
        }
      }, 2000);
    });
  }

  submitBotton.addEventListener('click', (event)  => {
    event.preventDefault();

    resultDiv.textContent = 'Logging in...';

    simulateLogin()
      .then(message => {
        resultDiv.textContent = message
        submitBotton.style.display = "none";
      })
      .catch(error => {
        resultDiv.textContent = error;
      });
  });

})
