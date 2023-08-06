import { ref, Ref } from 'vue'
import axios from 'axios'

export const dogAppStore = () => {
    const dogs: Ref<any[]> = ref([])

    async function update(c: number = 10) {
        const config = {
            url:`https://dog.ceo/api/breeds/image/random/${c}`,  
            method:'get',
            // withCredentials: true,
            // data:formData,
        };  
        const message = await axios.request(config);  
        dogs.value = message.data.message
    }

    // update(1)
    return {
        dogs,
        update,
    }
}