serverless-challenge

A aplicação foi feita usando Serverless Framework/DynamoDB e está disponível na URL https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/

CURLS
GET: curl https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/
GET: curl https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/{id}
POST: curl -i -X POST -H "Content-Type: application/json" -d "{""nome"":""José da Silva"",""cargo"":""Engenheiro"", ""idade"":63}" https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios
PUT: curl -X PUT -d "{""nome"":""joao II"",""cargo"":""CTO"", ""idade"":63}" https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/{id}
DELETE: curl -X DELETE https://rzidljp4l0.execute-api.us-east-1.amazonaws.com/dev/funcionarios/{id}