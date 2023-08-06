import { ref, Ref } from 'vue'
import axios from 'axios'

export const dogAppStore = () => {
    const dogs: Ref<any[]> = ref([])

    async function update(c: number = 10) {
        const url = `https://dog.ceo/api/breeds/image/random/${c}`
        const message = await axios.get(url);
        dogs.value = message.data.message
    }

    // update(1)
    return {
        dogs,
        update,
    }
}