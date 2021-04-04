import type { AWS } from '@serverless/typescript';

import hello from 'functions/hello';

const serverlessConfiguration: AWS = {
  service: 'backend',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: { hello },
  resources: {
    Resources: {
      CognitoUserPool: {
        Type: "AWS::Cognito::UserPool",
        Properties: {
          UserPoolName: "shopping-cart-user-pool",
          UsernameAttributes: ["email"],
          AutoVerifiedAttributes: ["email"],
          AccountRecoverySetting: {
            RecoveryMechanisms: [{ Name: "verified_email", Priority: 1 }]
          },
        },
      },
      CognitoUserPoolClient: {
        Type: "AWS::Cognito::UserPoolClient",
        Properties: {
          ClientName: "shopping-cart-user-pool-client",
          UserPoolId: { Ref: "CognitoUserPool" },
          PreventUserExistenceErrors: "ENABLED",
          GenerateSecret: false,
        },
      },
      CognitoUserPoolAuthorizer: {
        Type: "AWS::ApiGateway::Authorizer",
        Properties: {
          Name: "CognitoUserPoolAuthorizer",
          Type: "COGNITO_USER_POOLS",
          IdentitySource: "method.request.header.Authorization",
          RestApiId: { Ref: "ApiGatewayRestApi" },
          ProviderARNs: [{ "Fn::GetAtt": ["CognitoUserPool", "Arn"] }],
          AuthorizerResultTtlInSeconds: 300,
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
