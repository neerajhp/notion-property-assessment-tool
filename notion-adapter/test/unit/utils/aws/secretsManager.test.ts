import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { getSecretValue } from '../../../../src/utils/aws/secretsManager'; // Adjust the import path as needed
import { mock } from 'jest-mock-extended';
import { getConfig } from '../../../../src/config';
import { mockClient } from 'aws-sdk-client-mock';
import { Config } from '../../../../src/types';

jest.mock('../../../../src/config');
const mockSecretsManager = mockClient(SecretsManagerClient);

describe('secretsManager', () => {
    const mockConfig = mock<Config>();

    beforeEach(() => {
        jest.mocked(getConfig).mockReturnValue(mockConfig);
    });

    it('Given a secret name and a valid secret value When getSecretValue called with secretname Then call client GetSecretValueCommand', async () => {
        const mockSecretName = 'example-secret';
        const mockSecret = JSON.stringify({ token: 'some-secret' });

        mockSecretsManager.on(GetSecretValueCommand).resolves({
            SecretString: mockSecret,
        });

        const result = await getSecretValue(mockSecretName);

        const calls = mockSecretsManager.commandCalls(GetSecretValueCommand);
        expect(calls).toHaveLength(1);
        expect(result).toEqual(mockSecret);
    });

    it('Given a secret name and no secret value When  getSecretValue called with secretname Then call client GetSecretValueCommand', async () => {
        const mockSecretName = 'example-secret';

        mockSecretsManager.on(GetSecretValueCommand).resolves({});

        await expect(getSecretValue(mockSecretName)).rejects.toThrow(
            `Unable to retrieve ${mockSecretName} secret value`,
        );
    });
});
