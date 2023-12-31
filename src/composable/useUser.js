import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { ref, computed } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const user = ref()
const userList = ref([])

const loading = ref({
  user: false,
  userList: false
})

const userRemake = computed(() => {
 
  if (user.value) {
    return {
      displayName: user.value.displayName,
      email: user.value.email,
      photoURL: user.value.photoURL,
      uid: user.value.uid,
      // status: 'user'
    }
  }
  return null
})

export const useUser = () => {
  const auth = getAuth()

  function googleRegister() {
    const provider = new GoogleAuthProvider()
    
    signInWithPopup(auth, provider)
      .then(async (userCredential) => {
        user.value = userCredential.user
        await addUserToMainDatabase()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async function addUserToMainDatabase() {
    loading.value.user = true
    try {
      if (userRemake.value) {
        await getAllUsers()
        if (!checkUserInDatabase()) {
          await addDoc(collection(db, 'users'), userRemake.value)
        } else {
          console.error('User already in database')
        }
      }
      loading.value.user = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getAllUsers() {
    loading.value.userList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'users'))
      querySnapshot.forEach((doc) => {
        userList.value.push(doc.data())
      })
      loading.value.userList = false
    } catch (error) {
      console.error(error)
    }
  }

  function checkUserInDatabase() {
    return userList.value.some((item) => item.uid === userRemake.value?.uid)
  }

  function googleLogout() {
    auth.signOut()
    user.value = null
  }

  return {
    user,
    loading,
    googleRegister,
    googleLogout,
    getAllUsers,
    userRemake,
    userList
  }
}