import { CustomEndpoint } from 'ffv/ffv-api-routes';

// 'http://localhost:3001/api/orders/finished'

export const GET: CustomEndpoint = () => {
  return 'get finished orders';
};
