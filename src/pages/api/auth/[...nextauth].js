import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    signIn: async (user, account, profile) => {
        return Promise.resolve("/");
    },
  },
}

export default (req, res) => NextAuth(req, res, options)
