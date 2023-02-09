### Unitário

Irá testar uma unidade da sua aplicação. Por exemplo, uma classe ou um método.

### Integração

Comunicação entre duas ou mais unidades. Por exemplo, uma classe e um banco de dados.

### e2e - End to End - Ponta a Ponta

Simula um usuário (client) operando na aplicação. Por exemplo, um usuário logando no sistema.

## Pirâmide de testes

- E2E, são os testes mais fáceis de serem aplicados, pois não precisam de nenhuma tecnologia ou arquitetura da aplicação.

### Princípios

1. Poucos testes E2E
   1.1 Testes E2E são lentos, por isso, devem ser usados em pouca quantidade.
2. Mais testes de integração
3. Muitos testes unitários


## Testando
Quebramos o servidor e o app em dois, para que não precisemos de um servidor para fazer os testes, pra isso então usamos o supertest.
`Supertest -> Faz requisições para a aplicação sem precisar subir um servidor.`

```ts
  // Adiciona o hook beforeAll para aguardar o servidor ficar iniciado
  // Isso porque o fastify é assíncrono, e depende que todos os plugins sejam carregados antes de iniciar o servidor
  beforeAll(async () => {
    await app.ready();
  });

  // Adiciona o hook afterAll para fechar o servidor.
  // Isso é importante para que o processo não fique rodando em background.
  afterAll(() => {
    app.close();
  });
```
