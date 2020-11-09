// Stack
class Pilha {
	constructor() {
		this.elementos = [];
	}

	// Add elemento à pilha
	push(elemento) {
		this.elementos.push(elemento);
	}

	// Remove o ultimo elemento que foi add à pilha (Last in - first out)
	pop() {
		this.elementos.pop();
	}
}

const pilha = new Pilha();

// Add
pilha.push(1);
pilha.push(2);
pilha.push(3);

// Remove o primeiro
pilha.pop();
