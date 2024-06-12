'use strict';

const {DynamoDBClient} = require("@aws-sdk/client-dynamodb")
const {DynamoDBDocumentClient, UpdateCommand } = require("@aws-sdk/lib-dynamodb");

const dynamoDB = new DynamoDBClient({region: "us-east-1"})
const doc = DynamoDBDocumentClient.from(dynamoDB);

module.exports.update = async (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const nome = requestBody.nome;
  const idade = requestBody.idade;
  const cargo = requestBody.cargo;

  const command = new UpdateCommand({
    TableName: process.env.FUNCIONARIO_TABLE,
    Key:{
      id: event.pathParameters.id
    },
    UpdateExpression: 'set nome = :nome, cargo = :cargo, idade = :idade',
    ExpressionAttributeValues: {
      ":nome": nome,
      ":idade": idade,
      ":cargo": cargo
    },
    ReturnValues: "ALL_NEW",
  });

  const response = await doc.send(command);

  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(response, null, 2)
  }
}