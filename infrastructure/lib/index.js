import CognitoStack from "./CognitoStack";
import DynamoDBStack from "./DynamoDBStack";

export default function main(app) {
  new DynamoDBStack(app, "dynamodb")
  new CognitoStack(app, "cognito")
  // Add more stacks
}
