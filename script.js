class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou habilidade desconhecida';
        }

        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

const heroiMago = new Heroi("Gandalf", 1500, "mago");
console.log(heroiMago.atacar());

const heroiGuerreiro = new Heroi("Arthur", 35, "guerreiro");
console.log(heroiGuerreiro.atacar());
