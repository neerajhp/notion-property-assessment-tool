import { ScheduledEvent } from 'aws-lambda';
import logger from './utils/logger';

/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
export const handler = async (event: ScheduledEvent, context: any) => {
    logger.info('It works');
};
