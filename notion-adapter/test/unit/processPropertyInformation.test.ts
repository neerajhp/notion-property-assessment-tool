import { getNotionApiToken } from '../../src/getNotionApiToken';
import { processPropertyInformation } from '../../src/processPropertyInformation';
import { NotionApiToken } from '../../src/types';

jest.mock('../../src/getNotionApiToken');

describe('processPropertyInformation', () => {
    it('should retrieve a notion api token using secrets manager', async () => {
        const mockNotionTokenSecret: NotionApiToken = { token: 'some-token' };
        jest.mocked(getNotionApiToken).mockResolvedValue(mockNotionTokenSecret);

        await processPropertyInformation();

        expect(getNotionApiToken).toBeCalled();
    });
});
