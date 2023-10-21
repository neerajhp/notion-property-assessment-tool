import { handler } from '../../src/app';
import logger from '../../src/utils/logger';
import { mock } from 'jest-mock-extended';
import { ScheduledEvent } from 'aws-lambda';
import { processPropertyInformation } from '../../src/processPropertyInformation';

jest.spyOn(logger, 'info');
jest.mock('../../src/processPropertyInformation');

describe('Lambda handler', () => {
    beforeEach(() => {
        jest.mocked(processPropertyInformation);
    });

    it('Given a scheduled event When event received Then call property poller', async () => {
        const mockScheduledEvent: ScheduledEvent = mock<ScheduledEvent>();

        const context = {};

        handler(mockScheduledEvent, context);

        expect(processPropertyInformation).toHaveBeenCalled();
    });
});
