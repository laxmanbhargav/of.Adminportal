import 'firebase/auth'

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    storageBucket:process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId:process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    measurementId:process.env.NEXT_PUBLIC_MEASUREMENT_ID
}

export default config;
