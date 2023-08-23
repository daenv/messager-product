import { pool as db } from '../../configs/connections/connection';
import { Code } from '../../constants/enum/code.enum';
import { Status } from '../../constants/enum/httpStatus.enum';
import { HttpResponse } from '../../models/httpResponses/httpResponse.interface';
import { User } from '../../models/users/user.interface';


export const register = async (user: User): Promise<HttpResponse> => {
   let httpResponse: HttpResponse = {
      statusCode: Code.DEFAULT,
      message: '',
      data: {},
      timeStamp: '',
      status: Status.DEFAULT,
   };

   try {
      let email: string = user.email;
      let qy: string = `SELECT * FROM users WHERE email = '${email}'`;

      

      /* console.log(rs); */

      return httpResponse;
   } catch (error) {
      throw error;
   }
};
