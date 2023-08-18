const db = require('../../db/connection');

export const register = async (user: any) => {
   try {
      const q = 'SELECT * FROM users ';
      const result = await db.query(q);
      return result;
   } catch (error) {
      throw error;
   }
};
