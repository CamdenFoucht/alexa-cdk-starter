import * as path from "path";

import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as node from "@aws-cdk/aws-lambda-nodejs";

export class SkillStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const endpoint = new node.NodejsFunction(this, "Endpoint", {
      entry: path.resolve(__dirname, "handler.ts"),
      runtime: lambda.Runtime.NODEJS_14_X,
      memorySize: 512,
      handler: "handler",
    });
  }
}