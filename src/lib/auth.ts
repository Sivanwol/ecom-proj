import { authenticateUser, hasUserWithEmail } from '@app/models/users';
import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string
          password: string
        };
        if (username === "" && password === "") {
          return null;
        }
        if (!await hasUserWithEmail(username)) {
          return null;
        }
        const user = await authenticateUser(username, password);
  
        if (user) {
          const { id, email, name } = user;
          // Any object returned will be saved in `user` property of the JWT
          return { id: `${id}`, email, name } as User;
        } 
        return null;
      }
    }),
    ],
    pages: {
      signIn: "sign-in/", //sigin page
    }
});