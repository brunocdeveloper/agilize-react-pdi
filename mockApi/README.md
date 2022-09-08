# Configuração inicial

Acesse a pasta `mockApi` e:
```
npm install
```

É preciso também verificar se o arquivo `.env` na raíz contém o endereçamento correto para a API final, é para onde o mock irá fazer o proxy caso não tenha endpoint correspondente.

## Iniciando o projeto

```
npm start
```

A api roda por padrão na porta `9999`, pode ser configurado através do env.

##Criando meu primeiro método:

no arquivo `api.js` estarão concentrados todos os métodos mockados naquele momento, para criar um novo método, basta adicionar:

```
app.get('/mock-api', (req, res) => {
  res.json({ data: { text: 'Response from a get method' } });
});
```

app.GET -> podemos criar qualquer outro tipo de método: post, delete, etc.
`/mock-api` é o endereço do mock. ex: http://localhost:9999/mock-api