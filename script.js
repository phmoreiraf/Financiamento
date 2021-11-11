const btncalcular = document.getElementById('calcular');

function calcularPace() {

  const name = document.getElementById('nome').value;
  const peso = document.getElementById('peso').value;
  const distancia = document.getElementById('distancia').value;
  const tempo = document.getElementById('tempo').value;

  const result = document.getElementById('resultado');

  if (name !== '' && peso !== '' && distancia !== '' && tempo !== '') {

    const timeSplitted = tempo.split(':');

    const hora = parseInt(timeSplitted[0]);
    const minutos = parseInt(timeSplitted[1]);
    const segundos = parseInt(timeSplitted[2]);

    const Todashoras = hora + (minutos/60) + (segundos/3600);
    const Todasminutos = Todashoras*60;

    const velocidade = (distancia/(Todashoras)).toFixed(2);
    const pace = (60 / velocidade).toFixed(2);
    const calorias = (velocidade * peso * 0.0175 * (Todasminutos)).toFixed(2)

    result.textContent = `Olá, ${name}!, Você percorreu ${distancia}km em ${hora}h, ${minutos}min e ${segundos}s. 
    Isso quer dizer que a sua velocidade média foi de ${velocidade} km/h, o que o corresponde a um pace de ${pace}min/km.
    Com ${peso}kg, você gastou cerca de ${calorias} cal`;
  } else {

    window.alert('Para calcular o seu pace , preencha todos os campos.');
  }
}

btncalcular.addEventListener('click', calcularPace);