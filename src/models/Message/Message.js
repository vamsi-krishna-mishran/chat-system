

class Message
{
    messageId;
    sender;
    receiver;
    timeStamp;
    message;
    files;
    isDelivered;
    isViewd;


    constructor(messageId = null, sender = null, receiver = null, timeStamp = null, message = null, files = null, isDelivered = null, isViewd = null)
    {
        this.messageId = messageId;
        this.sender = sender;
        this.receiver = receiver;
        this.timeStamp = timeStamp;
        this.message = message;
        this.files = files;
        this.isDelivered = isDelivered;
        this.isViewd = isViewd;
    }

    setMessageId(messageId)
    {
        this.messageId = messageId;
    }
    setSender(sender)
    {
        this.sender = sender;
    }
    setReceiver(receiver)
    {
        this.receiver = receiver;
    }
    setTimeStamp(timeStamp)
    {
        this.timeStamp = timeStamp;
    }
    setFiles(files)
    {
        this.files = files;
    }
    setIsDelivered(isDelivered)
    {
        this.isDelivered = isDelivered;
    }

    setIsViewed(isViewd)
    {
        this.isViewd = isViewd
    }

    isValid()
    {
        return "OK"
    }

}

export default Message