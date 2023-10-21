import { getNotionApiToken } from './getNotionApiToken';
import { NotionApiToken } from './types';

export const processPropertyInformation = async () => {
    const notionApiToken: NotionApiToken = await getNotionApiToken();
};
