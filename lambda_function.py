import json
import boto3

# Initialize the DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume-stats') # Ensure this matches your Table Name

def lambda_handler(event, context):
    # 1. Get the current count
    response = table.get_item(Key={'id': '1'})
    views = response['Item']['visitors']
    
    # 2. Increment the count
    views = views + 1
    
    # 3. Update the count in DynamoDB
    table.put_item(Item={'id': '1', 'visitors': views})
    
    # 4. Return the result to your website
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET'
        },
        'body': json.dumps({'count': str(views)})
    }
