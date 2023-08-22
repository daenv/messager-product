import { Code } from '../constants/enum/code.enum';
import { Status } from '../constants/enum/httpStatus.enum';

export class HttpResponse {
   private timeStamp: string;
   constructor(private statusCode: Code, private HttpStatus: Status, private message: string, private data?: {}) {
      this.timeStamp = new Date().toLocaleString();
      this.HttpStatus = HttpStatus;
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
   }
}
