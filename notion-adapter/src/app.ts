import { ScheduledEvent } from 'aws-lambda';

import { processPropertyInformation } from './processPropertyInformation';

/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
export const handler = async (event: ScheduledEvent, context: any) => {
    processPropertyInformation();
};
