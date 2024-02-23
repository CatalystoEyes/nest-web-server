import AdminJS from 'adminjs';
import '@adminjs/express';
import { AdminModule } from '@adminjs/nestjs';
import { Database, Resource } from '@adminjs/prisma';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
const dmmf = (prisma as any)._dmmf as Prisma.DMMF;

AdminJS.registerAdapter({ Database, Resource });

export default AdminModule.createAdmin({
  adminJsOptions: {
    rootPath: '/admin',
    resources: [
      {
        resource: { model: dmmf.modelMap.User, client: prisma },
      },
      {
        resource: { model: dmmf.modelMap.Post, client: prisma },
      },
    ],
  },
});
