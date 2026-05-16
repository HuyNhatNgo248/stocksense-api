import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { SyncService } from './sync.service';
import { SessionGuard } from '../../common/guards/session.guard';

import type { AuthenticatedRequest } from '../../common/types/authenticated-request.interface';

@Controller('sync')
@UseGuards(SessionGuard)
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  /** Returns the current state of the initial backfill job for the authenticated shop. */
  @Get('backfill-status')
  getBackfillStatus(@Req() req: AuthenticatedRequest): Promise<{
    status: 'pending' | 'running' | 'done' | 'failed' | 'not_started';
  }> {
    return this.syncService.getBackfillStatus(req.shop.domain);
  }
}
