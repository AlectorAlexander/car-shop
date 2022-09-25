# Projeto Car Shop

# Contexto

O `CarShop` é uma API contruída utilizando conceitos de POO, objetivando um CRUD, que simula uma concessionária de veículos utilizando MongoDB.

# Habilidades

Neste projeto, utilizei as seguintes habilidades e conhecimentos:

- Conhecimento dos pilares da `Programação Orientada a Objetos`: `Herança`, `Abstração`, `Encapsulamento` e `Polimorfismo`;
- `Composição`;
- `Interfaces`;
- Em `TypeScript`: `Classes`, `Instâncias`, `Atributos`, `Métodos` e `Objetos`;
- Conhecimentos de `MongoDB`, `Typescript` e `POO` para criar uma API com `CRUD`.

---
# Ferramentas usadas 🧰

 🔨 Neste projeto, utilizei as seguintes ferramentas:
 - Para testes: `sinon`, `chai`;
 - Para validações de informações: `zod`;
 - Para modelagem de dados: `mongoose`;

---

## Instruções

1. Clone o repositório
  * `git clone git@github.com:luanamonero/project-car-shop`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-car-shop`

2. Instale as dependências
  * `npm install`
---

## Rotas do Backend 

# Endpoint (`/cars`)

# A rota do tipo `POST`

- O body da requisição deve conterá o seguinte formato:
  ```json
  {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
  ```
- Saídas
   - Sua API deve responder com status http `201` e o seguinte body:
 ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
 ```
 - A rota retorna erro `400` caso a requisição receba um objeto vazio;
 - A rota retorna erro `400` ao tentar criar um carro com quantidade de assentos inferior a 2;
 - A rota retorna erro `400` ao tentar criar um carro com quantidade de portas inferior a 2;
 - A rota retorna erro `400` ao tentar criar um carro sem `model`, `year`, `color`, `status` e `buyValue`;
 - A rota retorna erro `400` ao tentar criar um carro sem `doorsQty` e `seatsQty`;
 - Não é possível criar um carro se os atributos estiverem com tipos errados;
 

# A rota do tipo `GET`

- Saídas
   - Sua API deve responder com status http `200` e o seguinte body:
 ```JSON
    [{
      _id: "4edd40c86762e0fb12000003",
      model: "Ferrari Maranello",
      year: 1963,
      color: "red",
      buyValue: 3500000,
      seatsQty: 2,
      doorsQty: 2
     }]
 ```

# Endpoint (`/cars/:id`)

# A rota do tipo `GET`

- Saídas
   - Sua API deve responder com status http `200` e o seguinte body:
 ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
 ```
 - É possível listar um carro com sucesso através do id;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - 

# A rota do tipo `PUT`

- Saídas
   - Sua API deve responder com status http `200` e o seguinte body:
 ```JSON
    {
      _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
     }
 ```
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `400` caso o `body` esteja incompleto;
 - Será verificado que um carro é atualizado com sucesso;

# A rota do tipo `DELETE`

- Saídas
   - Sua API deve responder com status http `204` e o seguinte body:
 ```JSON
    {
      _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
     }
   ```

 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - Será verificado que um carro é removido com sucesso;
 - Sua API deve responder com status http `204` sem body;


# Endpoint (`/motorcycles`)

# A rota do tipo `POST`

- O body da requisição deve conterá o seguinte formato:

 ```JSON
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
 ```
- Saídas
   - Sua API deve responder com status http `201` e o seguinte body:
 ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
    sQty: 2
 ```
  A rota retorna erro `400` caso a requisição receba um objeto vazio;
 - A rota retorna erro `400` ao tentar criar uma moto com `category` diferente de `Street`, `Custom` ou `Trail`;
 - A rota retorna erro `400` ao tentar criar uma moto com `category` diferente de `string`;
 - A rota retorna erro `400` ao tentar criar uma moto com `engineCapacity` menor ou igual a zero;
 - A rota retorna erro `400` ao tentar criar uma moto com `engineCapacity` maior que 2500;
 - A rota retorna erro `400` ao tentar criar um moto sem `model`, `year`, `color` e `buyValue`;
 - A rota retorna erro `400` ao tentar criar um moto sem `category` e `engineCapacity`;
 - Não é possível criar uma moto se os atributos estiverem com tipos errados;
 - É possível criar uma moto se todos os parametros forem passados corretamente;


# A rota do tipo `GET`

- Saídas
   - Sua API deve responder com status http `200` e o seguinte body:
 ```JSON
    [{
      _id: "4edd40c86762e0fb12000003",
      model: "Honda CG Titan 125",
      year: 1963,
      color: "red",
      buyValue: 3500,
      category: "Street",
      engineCapacity: 125
      sQty: 2
     }]
 ```

# Endpoint (`/motocycle/:id`)

# A rota do tipo `GET`

- Saídas
   - Sua API deve responder com status http `200` e o seguinte body:
 ```JSON
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
 ```
 - É possível listar uma moto com sucesso através do id;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;

# A rota do tipo `PUT`

- Saídas
   - Sua API deve responder com status http `200` e o seguinte body:
 ```JSON
    {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
     }
 ```
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - É disparado o erro `400` caso o `body` esteja incompleto;
 - Será verificado que uma moto é atualizada com sucesso;
 - Sua API deve responder com status http `200` e o seguinte body:

# A rota do tipo `DELETE`

- Saídas
   - Sua API deve responder com status http `204` e o seguinte body:
 ```JSON
    {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "black",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
     }
   ```
 - É disparado o erro `404` `Object not found` caso o id possua 24 caracteres mas é inválido;
 - É disparado o erro `400` `Id must have 24 hexadecimal characters` caso o id possua menos que 24 caracteres;
 - Será verificado que uma moto é removida com sucesso;
 - Sua API deve responder com status http `204` sem body;

