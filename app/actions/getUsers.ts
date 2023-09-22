import getSession from "./getSession";
import prisma from '@/app/libs/prismadb';

const getUsers = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return [];
    }

    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        NOT: {
          email: session.user.email
        }
      }
    });

    return users;
  } catch (error: any) {
    return [];
  }
}

export default getUsers;