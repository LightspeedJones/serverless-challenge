'use strict';

const crypto = require('crypto');
const {DynamoDBClient} = require("@aws-sdk/client-dynamodb")
const {DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const dynamoDB = new DynamoDBClient({region: "us-east-1"})
const doc = DynamoDBDocumentClient.from(dynamoDB);

module.exports.submit = async (event, context, callback) => {
  const requestBody = JSON.parse(event.body);

  const nome = requestBody.nome;
  const idade = requestBody.idade;
  const cargo = requestBody.cargo;

  const funciona = funcionarioInfo(nome, idade, cargo)

  const command = new PutCommand({
    TableName: process.env.FUNCIONARIO_TABLE,
    Item: funciona
  });

  const response = await doc.send(command);
  
  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(response, null, 2)
  };
};

const funcionarioInfo = (nome, idade, cargo) => {
  const timestamp = new Date().getTime();

  return{
    id: crypto.randomBytes(8).toString('hex'),
    nome: nome,
    idade: idade,
    cargo: cargo,
    submittedAt: timestamp,
    updatedAt: timestamp
  };
};