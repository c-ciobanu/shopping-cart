import schema from './schema';
import { handlerPath } from 'libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schema: {
            'application/json': schema
          }
        },
        authorizer: {
          type: "COGNITO_USER_POOLS",
          authorizerId: { Ref: "CognitoUserPoolAuthorizer" },
        },
      },
    },
  ],
};
