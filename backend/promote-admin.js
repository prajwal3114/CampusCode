import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function promoteToAdmin() {
  try {
    const user = await prisma.user.update({
      where: { email: 'prajwal@test.com' },
      data: { role: 'ADMIN' }
    });
    
    console.log('✅ User promoted to ADMIN successfully!');
    console.log('User details:', {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    console.error('❌ Error promoting user:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

promoteToAdmin();
