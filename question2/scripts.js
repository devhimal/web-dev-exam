document.addEventListener("DOMContentLoaded", () => {
  console.log('====================================');
  console.log("Printing right angle triangle");
  console.log('====================================');

  for (let i = 0; i < 12; i++) {
    let star = '';
    for (let j = 0; j <= i; j++) {
      star += '*';
    }
    console.log(star);

  }
});
