import { ref } from "vue";
import axios from "axios";

export interface WeatherData {
    city: string;
    region: string;
    country: string;
    localtime: string;
    condition: string;
    icon: string;
    temp_c: number;
    feelslike_c: number;
    temp_f: number;
    feelslike_f: number;
    humidity: number;
    forecast: Array
  }

const BASE_URL = 'http://localhost:8080/weather';

export function useApi<T> () {

    const data = ref<T | null>(null);
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
            await new Promise(resolve => setTimeout(resolve, 2000));
            loading.value = false;
        }
    }

    return { data, errorRequest, loading, fetchRequest};
}