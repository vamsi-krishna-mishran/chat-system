

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


    constructor(messageId = null, sender = null, receiver = null, timeStamp = null, message = "", files = [], isDelivered = null, isViewd = null)
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
    verifyMessage()
    {
        // Check if message is not null, undefined, or empty string
        const isMessageValid = this.message !== null && this.message !== undefined && this.message.trim() !== "";

        // Check if files is not null, undefined, or an empty array
        const isFilesValid = this.files !== null && this.files !== undefined && Array.isArray(this.files) && this.files.length > 0;

        return isMessageValid || isFilesValid;
    }

}

export default Message