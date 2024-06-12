'use strict';

const {DynamoDBClient} = require("@aws-sdk/client-dynamodb")
const {DynamoDBDocumentClient, DeleteCommand } = require("@aws-sdk/lib-dynamodb");

const dynamoDB = new DynamoDBClient({region: "us-east-1"})
const doc = DynamoDBDocumentClient.from(dynamoDB);

module.exports.delete = async (event, context, callback) => {
  const command = new DeleteCommand({
    TableName: process.env.FUNCIONARIO_TABLE,
    Key:{
      id: event.pathParameters.id
    }
  });

  const response = await doc.send(command);
  
  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(response, null, 2)
  }
};