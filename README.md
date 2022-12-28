# Api To Do List com Mongo DB

Esta API foi projetada para fornecer suporte a um aplicativo de gerenciamento de tarefas, com funcionalidades de criação, edição, login, logout e autenticação. Ela utiliza o MongoDB Atlas como banco de dados e o React como interface do usuário. O objetivo é oferecer uma solução rápida e eficiente para a gestão de tarefas pessoais, permitindo que os usuários acessem e manipulem seus dados de maneira fácil e intuitiva.

## Stack utilizada

**Back-end:** Node, Express, Json Web Token, Mongo DB e Bcrypt.

## Documentação da API

#### Login

Se o email já tiver cadastrado será validado se a senha é válida com o hash gravado no banco de dados.
Caso não exista o email cadastrado, ele será criado e gravado no banco de dados com a senha criptografada.

```http
  POST /login
```

| Parâmetro | Tipo   | Descrição                                      |
| :-------- | :----- | :--------------------------------------------- |
| `body`    | `json` | **Obrigatório**. objeto JSON com email e senha |

Body

```
{
 "email": "emailteste@email.com",
 "password": "senhadeacesso"
}
```

o retorno é um objeto JSON

```
{
  "message": "Login Ok",
  "user": {
    "_id": "1q2w3e4r5t6y7u",
    "email": "emailteste@email.com",
    "password": "H@SH-Cr1P0G4F4d@-123!@#$%",
    "tasks": [
      {
        "id": 0,
        "task": "Task 1",
        "isDone": true
      },
      ...
      {
        "id": n,
        "task": "Task n",
        "isDone": false
      }
    ],
    "__v": 0
  },
  "token": "x1c2v3b.1q2w3e4rt"
}
```

#### Pegando todos os dados do usuário

```http
  GET /
```

| Parâmetro | Tipo  | Descrição                                       |
| :-------- | :---- | :---------------------------------------------- |
| headers   | token | **Obrigatório**. Para obter os dados do usuário |

Headers

```
token: "x1c2v3b.1q2w3e4rt"
```

o retorno é um objeto JSON atualizado

```
{
  "message": "User found",
  "user": {
    "_id": "1q2w3e4r5t6y7u",
    "email": "emailteste@email.com",
    "password": "H@SH-Cr1P0G4F4d@-123!@#$%",
    "tasks": [
      {
        "id": 0,
        "task": "Task 1",
        "isDone": true
      },
      ...
      {
        "id": n,
        "task": "Task n",
        "isDone": false
      }
    ],
    "__v": 0
  }
}
```

#### Ditando o array de tasks

```http
  PATCH /
```

| Parâmetro | Tipo    | Descrição                                        |
| :-------- | :------ | :----------------------------------------------- |
| `headers` | `token` | **Obrigatório**. Para editar os dados do usuário |
| `body`    | `json`  | **Obrigatório**. editar o array de tasks         |

Headers

```
token: "x1c2v3b.1q2w3e4rt"
```

Body

```
 "tasks": [
      {
        "id": 0,
        "task": "Edit task 1",
        "isDone": false
      },
      ...
      {
        "id": n,
        "task": "Edit task n",
        "isDone": true
      }
    ]
```

o retorno é um objeto JSON atualizado

```
{
  "message": "Tasks updated",
  "tasks": [
      {
        "id": 0,
        "task": "Edit task 1",
        "isDone": false
      },
      ...
      {
        "id": n,
        "task": "Edit task n",
        "isDone": true
      }
  ]
}
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`SECRET_JWT` = Hash para criptografia gerar o JWT

`CONNECT_DB` = URL de conexão do mongo DB

## Funcionalidades

- Login
- Leitura das Task do usuário
- Edição das tasks do usuário
- Persistência no banco de dados

## 🔗 Links

[Endpoint](https://api-todo-list-glnl.onrender.com/)

[FrontEnd](https://todo-list-frontend-react.vercel.app/)
