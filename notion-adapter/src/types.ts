import { SecretsManagerClientConfig } from '@aws-sdk/client-secrets-manager';

export interface NotionApiToken {
    token: string;
}

export interface NotionConfig {
    secretName: string;
}

export interface Config {
    notion: NotionConfig;
    secretsManager: SecretsManagerClientConfig;
}
