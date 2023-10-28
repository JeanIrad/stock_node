from twilio.rest import Client



account_sid = 'AC63663b9b8099412f9edffc3d04466a28'
account_token = '0aef1e867f84f508a0c9688ea256b20c'

client =  Client(account_sid, account_token)

message = client.messages.create(
    messaging_service_sid= 'https://api.twilio.com/2010-04-01/Accounts/AC63663b9b8099412f9edffc3d04466a28/Messages.json', # here is the issue
     body='hello this is python message from twilio',
     media_url='',
     to='+250787308777',

)
