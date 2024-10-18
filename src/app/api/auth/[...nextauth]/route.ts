import NextAuth, { NextAuthOptions } from "next-auth"

const authOptions:NextAuthOptions ={
    secret: "AGhh0OLwzJ0RkIQ0GhomkbBRy+gJ9oPp29xgrBkfxfs=",
    pages:{
        signIn: "/login"
    },
    session:{
        strategy:"jwt",
        maxAge :24*60*60*30
    },
    providers:[
        
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }