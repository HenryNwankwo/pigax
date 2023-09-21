import { auth } from '@/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  //where to sign in from
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        return await signInWithEmailAndPassword(
          auth,
          credentials.email || '',
          credentials.password || ''
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => console.log(error));
      },
    }),
  ],
});

export { handler as GET, handler as POST };
