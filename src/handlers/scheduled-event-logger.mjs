/**
 * A Lambda function that logs the payload received from a CloudWatch scheduled event.
 */
export const scheduledEventLoggerHandler = async (event, context) => {
    console.info(JSON.stringify(event));
}
