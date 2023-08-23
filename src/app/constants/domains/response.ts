import { Code } from '../enum/code.enum';
import { Status } from '../enum/httpStatus.enum';
import { HttpResponse as http } from '../../models/httpResponses/httpResponse.interface';

export class HttpResponseImp implements http {
   statusCode: Code;
   status: Status;
   message: string;
   data: object;
   timeStamp: string;

   constructor(statusCode: Code, status: Status, message: string, timeStamp: string, data?: object) {
      this.statusCode = statusCode;
      this.status = status;
      this.message = message;
      this.data = data || {};
      this.timeStamp = timeStamp;
   }
}
