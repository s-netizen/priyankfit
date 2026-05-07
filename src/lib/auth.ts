// Auth integration - uncomment when env vars are configured
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [],
  pages: { signIn: '/admin/login' },
  secret: process.env.NEXTAUTH_SECRET || 'placeholder',
};
