import { NotionApiToken } from './types';
import { getConfig } from './config';
import { getSecretValue } from './utils/aws/secretsManager';

export const getNotionApiToken = async (): Promise<NotionApiToken> => {
    const secretName = getConfig().notion.secretName;

    const secretValue = await getSecretValue(secretName);

    return JSON.parse(secretValue) as NotionApiToken;
};
