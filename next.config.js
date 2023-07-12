/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_GRAFBASE_API_URL: null,
        NEXT_PUBLIC_GRAFBASE_API_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODg3NzY5NjEsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFINFNGNlY1WDg1QjZHVEc0N01OS05KUEgiLCJqdGkiOiIwMUg0U0Y2VjdCUjNQNVpOWUhZM1ZNV1BXMSIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.xPpHTAoWW87Sty-f7a5nLvUV8-WVW1xYohx1_ktreJM',
        GOOGLE_CLIENT_ID: '450725511551-ahegvee4il9bhk887nr2b3p9k5o40ke5.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
        NEXTAUTH_SECRET: 'aqSnLt1BsrdOn3Pw0tae7f+YUrKTs93AW6OfA52/+rQ=',
        NEXTAUTH_URL: 'http://localhost:3000'
    },
    images:{
        domains:['lh3.googleusercontent.com']
    }
}

module.exports = nextConfig
