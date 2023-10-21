import { Config } from './types';

export const getConfig = (): Config => {
    return {
        notion: {
            secretName: process.env.NOTION_TOKEN_SECRET_NAME as string,
        },
        secretsManager: {
            region: process.env.AWS_REGION as string,
        },
    };
};
