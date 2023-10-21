import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { getConfig } from '../../config';

export const getSecretValue = async (secretName: string): Promise<string> => {
    const client = new SecretsManagerClient(getConfig().secretsManager);
    const command = new GetSecretValueCommand({ SecretId: secretName });

    const response = await client.send(command);
    if (response.SecretString === undefined) {
        throw new Error(`Unable to retrieve ${secretName} secret value`);
    }

    return response.SecretString;
};
