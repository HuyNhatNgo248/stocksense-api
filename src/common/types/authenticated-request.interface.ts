import { Request } from 'express';
import { Shop } from '@prisma/client';

export interface AuthenticatedRequest extends Request {
  shop: Shop;
}
