import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

const options = {
    providers: [
        GitHubProvider({
            clientId: "01b5e3d55475c1ae680c",
            clientSecret: "767943c4caee029331df01136c6df6c773b9a6fd",
        }),
    ],
}

export default (req, res) => NextAuth(req, res, options)
