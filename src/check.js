import { Message } from "./models/index.js";

const object = new Message()
object.setMessageId(44)
console.log(object)
if (!object.message)
{
    console.log('false')
}
console.log(object.message)