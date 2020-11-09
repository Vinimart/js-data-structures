// Tree - ED constituída por nós que possuem relacionamentos pai/filho - estrutura não ordenada.
class Arvore {
	constructor() {
		this.node = {};
	}

	inserir(arvore, valor) {
		if (arvore.valor) {
			if (valor > arvore.valor) this.inserir(arvore.direita, valor);
			else this.inserir(arvore.esquerda, valor);
		} else {
			arvore.valor = valor;
			arvore.direita = {};
			arvore.esquerda = {};
		}
	}
}

const novaArvore = new Arvore();

novaArvore.inserir(novaArvore.node, 23);
novaArvore.inserir(novaArvore.node, 12);
novaArvore.inserir(novaArvore.node, 4);
novaArvore.inserir(novaArvore.node, 18);
novaArvore.inserir(novaArvore.node, 1);
novaArvore.inserir(novaArvore.node, 27);
novaArvore.inserir(novaArvore.node, 25);

console.log(novaArvore.node);
