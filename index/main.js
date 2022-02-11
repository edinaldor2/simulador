/*mudar a cor do butoes e acrescentar um checked
 */
// elementos selecionados
let btns = document.querySelectorAll("input.btns");
console.log(btns);

//
let cor = (colorido) => {
	colorido.style.background = "var(--color2)";
	colorido.style.color = "white";

};
let reset = (resetado) => {
	resetado.style.background = "";
	resetado.style.color = "";
};
// rendimentos
function lqd(element) {
	cor(element);
	reset(btns[1]);
}
function brt(element) {
	cor(element);
	reset(btns[0]);
}
// tipos de indexação
function pRe(element) {
	cor(element);
	reset(btns[3]);
	reset(btns[4]);
}
function pOs(element) {
	cor(element);
	reset(btns[2]);
	reset(btns[4]);
}
function fXd(element) {
	cor(element);
	reset(btns[2]);
	reset(btns[3]);
}
// validando os  inputs

function validar() {
	let input = document.getElementsByClassName("text");
	let label = document.getElementsByClassName("cont-inputs");

	let span = document.getElementsByTagName("span");

	aporteInicial(input[0], label[0], span[0]);
	prazo(input[1], label[1], span[1]);

	aporteMensal(input[2], label[2], span[2]);
}

let aporteInicial = (aporte, label, span) => {
	let aporteInicial = Number(aporte.value);

	if (aporteInicial > 1 || aporteInicial == "") {
		label.style = "";
		span.style.display = "";
		aporte.style = "";
	} else {
		label.style = "color:red;";
		span.style.display = "block";
		aporte.style = "border-color:red";
	}
};

let prazo = (prazo, label, span) => {
	let prazoNumber = Number(prazo.value);

	if (prazoNumber > 0 || prazoNumber == "") {
		label.style = "";
		span.style.display = "";
		prazo.style = "";
	} else {
		label.style = "color:red;";
		span.style.display = "block";
		prazo.style = "border-color:red";
	}
};
aporteMensal = (aporteM, label, span) => {
	let aporteMensal = Number(aporteM.value);

	if (aporteMensal > 1 || aporteMensal == "") {
		label.style = "";
		span.style.display = "";
		aporteM.style = "";
	} else {
		label.style = "color:red;";
		span.style.display = "block";
		aporteM.style = "border-color:red";
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
};

let cdi = (valueCdi) => {
	let cdi = document.getElementById("cdi");
	cdi.value = `${valueCdi}%`;
};
