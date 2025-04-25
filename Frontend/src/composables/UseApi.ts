import { ref } from "vue";
import axios from "axios";

const BASE_URL = 'http://localhost:8080/weather';

const data = ref<any>(null);
const errorRequest = ref<any>(null);
let loading = ref<boolean>(false);

async function fetchRequest(endpoint: string) {

    loading.value = true;
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        data.value = response.data;
    } catch (error) {
        errorRequest.value = error;
    } finally {
        loading.value = false;
    }
}

export function useApi () {
    return { data, errorRequest, loading, fetchRequest, teste: '2'};
}