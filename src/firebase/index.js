import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCXBCGPAyco86WemPVB4nTUrhSCI-ap6u0",
    authDomain: "diploma-55d82.firebaseapp.com",
    projectId: "diploma-55d82",
    storageBucket: "diploma-55d82.appspot.com",
    messagingSenderId: "754553903304",
    appId: "1:754553903304:web:507eea45c0b362ab32adfd"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }