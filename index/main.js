/*mudar a cor do butoes e acrescentar um checked
 */

// validando os  inputs

function validar() {
	
	// var aporteInicial = document.getElementsByClassName("text")[0];
	prazo();

	// let aporteMensal = document.getElementsByClassName("text")[2];
	// let rentabilidade = document.getElementsByClassName("text")[3];
}

let aporteInicial = () => {
	let aporteInicial = document.getElementsByClassName("text")[0].value;
	let aporteInicialNumber = Number(aporteInicial);
	// span , label , input
	let span = document.getElementsByTagName("span")[0];
	let label = document.getElementById("prazo");
	let input = document.getElementsByName("prazo")[0];

	if (aporteInicialNumber > 0 || aporteInicialNumber == "") {
		console.log("ok");

		label.style.color = "";
		input.style = "";
		span.style.display = "";
	} else {
		label.style.color = "red";
		input.style = "border-color:red";
		span.style.display = "block";
	}
};
let prazo = () => {
	let prazo = document.getElementsByClassName("text")[1].value;
	let prazoNumber = Number(prazo);
	// span , label , input
	let span = document.getElementsByTagName("span")[1];
	let label = document.getElementById("prazo");
	let input = document.getElementsByName("prazo")[0];

	if (prazoNumber > 0 || prazoNumber == "") {
		console.log("ok");

		label.style.color = "";
		input.style = "";
		span.style.display = "";
	} else {
		label.style.color = "red";
		input.style = "border-color:red";
		span.style.display = "block";
	}

};
///pegando os indicadores

let url = "http://localhost:3000/indicadores";
fetch(url)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		// chama as funçoes
		ipca(data[1].valor);
		cdi(data[0].valor);
	});

let ipca = (valueIpca) => {
	let ipca = document.getElementById("ipca");
	ipca.value = `${valueIpca}%`;
	console.log(ipca);
};

let cdi = (valueCdi) => {
	let cdi = document.getElementById("cdi");
	cdi.value = `${valueCdi}%`;
	console.log(cdi);
};
