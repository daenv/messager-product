import { Redis } from '@upstash/redis';

export const db = new Redis({
   url: 'https://apn1-living-mouse-35571.upstash.io',
   token: 'AYrzASQgZDNmNDgxNzAtYjNkMy00ZTZmLWI5YTEtODU2MWMwZWQyN2NjNjJiZTI1YjNhY2E2NGMwOWIyYmNkYzE0NWNiMDJjOTM=',
});
