let slowRoot = (x) =>
  new Promise((myResolve, myReject) => {
    if (x >= 0) {
      return setTimeout(() => myResolve(Math.sqrt(x)), 2000);
    } else {
      myReject("Il numero e' negativo!");
    }
  });

window.handler = () => {
  let x = document.getElementById('value').value;
  slowRoot(x).then(
    (result) =>
      (document.getElementById('demo').innerHTML = "Il risultato e' " + result),
    (error) => (document.getElementById('demo').innerHTML = error)
  );
  document.getElementById('demo').innerHTML = 'Calcolo...';
};
