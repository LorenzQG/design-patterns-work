### Builder Pattern:
O padrão de design Builder é um padrão de criação (creational) que permite a construção de objetos complexos de forma flexível e incremental, separando a construção de um objeto da sua representação. Ele é utilizado quando a criação de um objeto envolve várias etapas ou quando o objeto precisa ser construído de diferentes formas.

O padrão permite que o processo de construção de um objeto seja separado da sua representação final. Isso significa que o mesmo processo de construção pode criar representações diferentes de um objeto. Ele permite a criação de objetos complexos sem a necessidade de expor todos os detalhes da construção ao cliente.


### Singleton Pattern:
O Singleton é um dos padrões de design mais conhecidos e amplamente usados na programação orientada a objetos. Ele pertence à categoria dos padrões de criação e é usado para garantir que uma classe tenha apenas uma única instância durante a execução da aplicação, além de fornecer um ponto global de acesso a essa instância.

## Vantagens do Singleton

Evita Duplicação de Recursos: O Singleton garante que apenas uma instância seja usada, evitando desperdício de memória ou recursos.

Acesso Global: Torna fácil compartilhar uma única instância entre diferentes partes do sistema, sem necessidade de passar a instância explicitamente.

Facilita a Gerência de Estado Compartilhado: Ideal para classes que precisam compartilhar dados ou estados, como caches, gerenciadores de sessão ou configurações.

## Desvantagens do Singleton

Dificuldade em Testes Unitários: O uso de uma instância global pode dificultar testes, já que pode ser difícil "mockar" ou substituir a instância durante os testes.

Acoplamento Global: O Singleton cria uma dependência global que pode dificultar mudanças no design da aplicação.

Possível Violação do Princípio de Responsabilidade Única (SRP): Uma classe Singleton pode acumular muitas responsabilidades ao longo do tempo, tornando-se difícil de gerenciar.

