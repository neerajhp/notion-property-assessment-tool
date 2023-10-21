import { handler } from '../../src/app';
import logger from '../../src/utils/logger';
import { mock } from 'jest-mock-extended';
import { ScheduledEvent } from 'aws-lambda';

// Mock the console.info method to capture log output.
jest.spyOn(logger, 'info');

describe('Lambda handler', () => {
    it('should log "It works" for a scheduled event', async () => {
        const mockScheduledEvent: ScheduledEvent = mock<ScheduledEvent>();

        const context = {};

        await handler(mockScheduledEvent, context);

        expect(logger.info).toHaveBeenCalledWith('It works');
    });
});
