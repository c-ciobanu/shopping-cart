import type { AWS } from "@serverless/typescript";
import functions from "functions";

const serverlessConfiguration: AWS = {
	service: "backend",
	frameworkVersion: "2",
	provider: {
		name: "aws",
		runtime: "nodejs14.x",
		region: "eu-west-1",
		endpointType: "REGIONAL",
		apiGateway: {
			minimumCompressionSize: 1024,
			shouldStartNameWithService: true
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
			API_GATEWAY_MANAGEMENT_API_ENDPOINT: {
				"Fn::Join": [
					"",
					[
						{ Ref: "WebsocketsApi" },
						".execute-api.${opt:region, self:provider.region}.amazonaws.com/${opt:stage, self:provider.stage}"
					]
				]
			}
		},
		lambdaHashingVersion: "20201221",
		iamRoleStatements: [
			{
				Effect: "Allow",
				Action: ["execute-api:ManageConnections"],
				Resource: ["arn:aws:execute-api:*:*:*/*/@connections/*"]
			}
		]
	},
	plugins: ["serverless-webpack", "serverless-offline", "serverless-prune-plugin", "serverless-domain-manager"],
	custom: {
		webpack: {
			webpackConfig: "./webpack.config.js",
			includeModules: true
		},
		prune: {
			automatic: true,
			includeLayers: true,
			number: 3
		},
		customDomain: {
				domainName: "api.c-ciobanu.com",
				basePath: "shopping-cart",
				certificateName: "*.c-ciobanu.com",
				createRoute53Record: true,
				endpointType: "regional",
				apiType: "rest",
				securityPolicy: "tls_1_2",
				autoDomain: true
			},
		"serverless-offline": {
			httpPort: 4000,
			prefix: "shopping-cart",
			noPrependStageInUrl: true,
			websocketPort: 4001,
			lambdaPort: 4002
		}
	},
	functions,
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
					}
				}
			},
			CognitoUserPoolClient: {
				Type: "AWS::Cognito::UserPoolClient",
				Properties: {
					ClientName: "shopping-cart-user-pool-client",
					UserPoolId: { Ref: "CognitoUserPool" },
					PreventUserExistenceErrors: "ENABLED",
					GenerateSecret: false
				}
			},
			CognitoUserPoolAuthorizer: {
				Type: "AWS::ApiGateway::Authorizer",
				Properties: {
					Name: "CognitoUserPoolAuthorizer",
					Type: "COGNITO_USER_POOLS",
					IdentitySource: "method.request.header.Authorization",
					RestApiId: { Ref: "ApiGatewayRestApi" },
					ProviderARNs: [{ "Fn::GetAtt": ["CognitoUserPool", "Arn"] }],
					AuthorizerResultTtlInSeconds: 300
				}
			}
		}
	}
};

module.exports = serverlessConfiguration;
