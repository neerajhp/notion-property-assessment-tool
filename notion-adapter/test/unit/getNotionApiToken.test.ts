import { mock } from 'jest-mock-extended';
import { getConfig } from '../../src/config';
import { Config } from '../../src/types';
import { getSecretValue } from '../../src/utils/aws/secretsManager';
import { getNotionApiToken } from '../../src/getNotionApiToken';

jest.mock('../../src/config');
jest.mock('../../src/utils/aws/secretsManager');

describe('getNotionApiToken', () => {
    const mockConfig = mock<Config>();

    beforeEach(() => {
        jest.mocked(getConfig).mockReturnValue(mockConfig);
    });

    it('Given a valid Notion secret name and a valid secret value When getNotionApiToken is called Then return the parsed secret', async () => {
        const mockSecretName = 'notion-secret';
        const mockSecret = JSON.stringify({ token: 'some-secret' });

        mockConfig.notion.secretName = mockSecretName;

        jest.mocked(getSecretValue).mockResolvedValue(mockSecret);

        const result = await getNotionApiToken();

        expect(getSecretValue).toHaveBeenCalledWith(mockSecretName);
        expect(result).toEqual(JSON.parse(mockSecret));
    });

    it('Given a valid Notion secret name and no secret value When getNotionApiToken is called Then throw an error', async () => {
        const mockSecretName = 'notion-secret';

        mockConfig.notion.secretName = mockSecretName;

        jest.mocked(getSecretValue).mockRejectedValue(new Error(`Unable to retrieve ${mockSecretName} secret value`));

        await expect(getNotionApiToken()).rejects.toThrow(`Unable to retrieve ${mockSecretName} secret value`);
    });
});
