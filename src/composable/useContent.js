import { getDocs, addDoc, doc, collection, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { ref } from 'vue'
import { createId } from '@/services/methods'

import { useUser } from './useUser'
// import { yandexMap, ymapMarker } from 'vue-yandex-maps'

// export default {
//   components: { yandexMap, ymapMarker }
//   // other options
// }




export const useContent = () => {
  const content = ref()
  const contentList = ref([])
  const newContent = ref({
    id: createId(),
    // title: '',
    // maxCount: '',
    // currentCount: '',
    // city: '',
    // startDate: '',
    // endDate: '',
    // members: [
    //   {
      
    //   },
    //   {

    //   },
    // ],
    // meta: {
    //   couches: '',
    //   clubs: '',
    //   country: '',
    // },
    author: '',
  })

  const loading = ref({
    content: false,
    contentList: false,
    newContent: false
  })

  async function getAllContent() {
    loading.value.contentList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      contentList.value = querySnapshot.docs.map((doc) => doc.data())
      loading.value.contentList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id) {
    loading.value.content = true
    try {
      const querySnapshot = await getDocs(collection(db, 'contents'))
      content.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item) => item.id === id)
      loading.value.content = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { userRemake } = useUser()
    loading.value.newContent = true
    try {
      if (newContent.value && userRemake.value) {
        // console.log('раб')
        newContent.value.author = userRemake.value
        await addDoc(collection(db, 'contents'), newContent.value)
        loading.value.newContent = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteContent(id) {
    try {
      if (content.value) {
        await deleteDoc(doc(db, 'contents', id))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    content,
    contentList,
    loading,
    newContent,
    getAllContent,
    getContentById,
    addContent,
    deleteContent
  }
}

// Content
// Users
// Managers



// newContent это ниже

// firebase - Content
// Collection
// {
// id
//   title
//   maxCount
//   currentCount
//   city
//   startDate
//   endDate
//   members: [
    // {
      
    // },
    // {

    // },
// ]
//   meta {
//     couches
//     clubs
//     country
//   }
//  author
// }



// чтобы рядом toolbar - slot start slot end


// у тебя 2 разные регистрации 
// 

