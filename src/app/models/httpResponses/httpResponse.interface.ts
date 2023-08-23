import { Code } from '../../constants/enum/code.enum';
import { Status } from '../../constants/enum/httpStatus.enum';
export interface HttpResponse {
   statusCode: Code;
   message: string;
   data: object;
   timeStamp: string;
   status: Status;
}
