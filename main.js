const form = document.querySelector('.formulario');
const inputTipoJuros = form.querySelector('#campo-tipo-juros');
const inputCapital = form.querySelector('#campo-capital');
const inputTaxa = form.querySelector('#campo-taxa');
const inputTempo = form.querySelector('#campo-tempo');
const botaoReiniciar = form.querySelector('#botao-reiniciar');

const resultado = document.querySelector('#resultado');

const converterParaMoeda = (numero) => {
  return numero.toLocaleString('pt-BR', 
    { 
      style: 'currency', currency: 'BRL' 
    }
  )
}

const calcularJurosSimples = (capital, taxa, tempo) => {
  const juros = capital * (taxa / 100) * tempo;
  const montante = capital + juros;

  const jurosReais = converterParaMoeda(juros);
  const montanteReais = converterParaMoeda(montante);

  resultado.innerHTML = `O valor do seu juros é <strong>${jurosReais}</strong> e o valor total é <strong>${montanteReais}</strong>.`;
}

const calcularJurosComposto= (capital, taxa, tempo) => {
  const montante = capital * (1 + ((taxa / 100) ** tempo));
  const juros = montante - capital;

  const jurosReais = converterParaMoeda(juros);
  const montanteReais = converterParaMoeda(montante);

  resultado.innerHTML = `O valor do seu juros é <strong>${jurosReais}</strong> e o valor total é <strong>${montanteReais}</strong>.`;
}

const reiniciarCalculo = () => {
  resultado.innerHTML = ''
}

const iniciarCalculo = (event) => {
  event.preventDefault();

  const tipoJuros = inputTipoJuros.value;

  const capital = +inputCapital.value;
  const taxa = +inputTaxa.value;
  const tempo = +inputTempo.value;

  if (tipoJuros === 'simples') {
    calcularJurosSimples(capital, taxa, tempo);
  } else if (tipoJuros === 'composto') {
    calcularJurosComposto(capital, taxa, tempo);
  }
}

form.addEventListener('submit', iniciarCalculo)
botaoReiniciar.addEventListener('click', reiniciarCalculo)
