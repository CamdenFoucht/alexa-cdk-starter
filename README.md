# Welcome Alexa Developers!

This template provides a barebones package for following along with the [Alexa CDK Workshop](https://github.com/alexa/ask-ac). In the workshop you will create your own GitHub repository using this template and finish with a fully functional Alexa skill and CI/CD pipeline.

## What is an Alexa Skill?

Alexa skills are like apps. You can enable and disable skills, using the Alexa app or a web browser, in the same way that you install and uninstall apps on your smart phone or tablet. Skills are voice-driven Alexa capabilities. You can add Alexa skills to your Echo to bring products and services to life. You can view available skills and enable or disable them using your Alexa app.

## What is the AWS CDK?

The AWS CDK is a new software development framework from AWS with the sole purpose of making it fun and easy to define cloud infrastructure in your favorite programming language and deploy it using AWS CloudFormation.

## Installation

```
npm i
```

## Development

To compile your typescript files you can write `npm run build` which will compile your typescript files to a `dist` directory.

```
npm run build && npm run watch
```


## Deployment

To deploy your cdk app, simply use `npx cdk deploy`.

```
npx cdk deploy
```
By default the `cdk.json` file uses `ts-node` to synthesize your application. To deploy your cdk app from the `dist` directory modify the `cdk-json` file to use `node` instead:

```
{
    "app": "node dist/app.ts",
    "context": {
      "@aws-cdk/core:newStyleStackSynthesis": true
    }
  }
  
```


## What you'll accomplish in the Alexa CDK Workshop

We will use the CDK to manage the entire skill infrastructure in our code. We'll spend some time setting up a lambda handler in CDK, modifying a skill package, and deploying the skill with the CDK CLI. By the end of this workshop, you'll be able to:

- Create an Alexa lambda with CDK.<br/>
- Make changes directly to a skill package
- Deploy your skill to Alexa using the CDK CLI<br/>
- Connect your code to a CI/CD pipeline<br/>

## See Also

- [Alexa Conversations](https://developer.amazon.com/en-US/docs/alexa/conversations/about-alexa-conversations.html)
- [Alexa Conversations Descriptive Language](https://developer.amazon.com/en-US/docs/alexa/conversations/about-acdl.html)
- [Alexa Skill Kit SDKs](https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs)
- [Alexa Developer Console](hhttps://developer.amazon.com/alexa/console/ask)
- [AWS CDK Reference](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)