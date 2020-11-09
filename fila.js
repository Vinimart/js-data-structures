// Queue
class Fila {
	constructor() {
		this.elementos = [];
	}

	// Add
	push(elemento) {
		this.elementos.push(elemento);
	}

	// Remove o primeiro elemento à entrar na fila (First in - first out)
	remove() {
		this.elementos.shift();
	}
}

const fila = new Fila();

// Add
fila.push("Vinicius");
fila.push("Anne");
fila.push("Mitsue");

console.log(fila.elementos);

// Remove
fila.remove();
console.log(fila.elementos);
