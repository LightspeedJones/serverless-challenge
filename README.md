# serverless-challenge


A aplicação foi feita usando Serverless Framework/DynamoDB e está disponível na URL https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/

Para fazer o deploy em uma conta da AWS, navegue até o diretório serverless-challenge/src e execute o seguinte comando: 
```
serverless deploy
```


## CURLS


### GET: 
curl https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/

### GET: 
curl https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/{id}

### POST: 
curl -i -X POST -H "Content-Type: application/json" -d "{""nome"":""José da Silva"",""cargo"":""Engenheiro"", ""idade"":63}" https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios

### PUT: 
curl -X PUT -d "{""nome"":""José da Silva"",""cargo"":""Engenheiro Sênior"", ""idade"":63}" https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/{id}

### DELETE: 
curl -X DELETE https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/{id}
