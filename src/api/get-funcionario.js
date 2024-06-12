'use strict';

const {DynamoDBClient} = require("@aws-sdk/client-dynamodb")
const {DynamoDBDocumentClient, ScanCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");

const dynamoDB = new DynamoDBClient({region: "us-east-1"})
const doc = DynamoDBDocumentClient.from(dynamoDB);

module.exports.list = async (event, context, callback) => {
  const command = new ScanCommand({
    ProjectionExpression: "id, nome, cargo, idade",
    TableName: process.env.FUNCIONARIO_TABLE
  })

  const response = await doc.send(command);

  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(response.Items, null, 2)
  }
}

module.exports.get = async (event, context, callback) => {
  const command = new GetCommand({
    TableName: process.env.FUNCIONARIO_TABLE,
    Key:{
      id: event.pathParameters.id
    }
  });

  const response = await doc.send(command);

  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(response.Item, null, 2)
  }
};