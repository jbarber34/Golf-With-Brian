import { createRouter } from '~/server/utils/createRouter';
import superjson from 'superjson';
<<<<<<< HEAD
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { subtractMonths } from '../utils/subtractMonths';
import { dateFormat } from '../utils/dateFormat';

const assessmentsDate: string = subtractMonths(3);
=======
import { TRPCError } from '@trpc/server';
>>>>>>> 5a63fcd199a380decbf1aea58bb55c3de06002a9

export const appRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.session) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You are unauthorized',
      });
    }
    return next();
  })
  .transformer(superjson);

// export type definition of API
export type AppRouter = typeof appRouter;
