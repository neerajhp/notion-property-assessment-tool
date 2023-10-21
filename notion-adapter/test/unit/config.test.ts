import { getConfig } from '../../src/config';

describe('getConfig', () => {
    it('should return a configuration object with the specified AWS_REGION', () => {
        const mockRegion = 'some-region';
        const mockSecretName = 'some-name';

        process.env.AWS_REGION = mockRegion;
        process.env.NOTION_TOKEN_SECRET_NAME = mockSecretName;

        const config = getConfig();

        expect(config).toEqual({ notion: { secretName: mockSecretName }, secretsManager: { region: mockRegion } });
    });
});
