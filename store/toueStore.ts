import { defineStore } from 'pinia'
import axios from 'axios';
export interface TourData {
    img?: string;
    title?: string;
    price?: number;
    person?: number;
    location?: string;
    days?: number;
    slug?: string;
}

export const useTourStore = defineStore('tour-data', {
    state: () => ({
        tourDestination: [] as TourData[], 
    }),
    actions: {
        async getTours() {
            try {
                const res = await axios.get<TourData[]>('/api/get-tour'); 
                if (res.status === 200) {
                    this.tourDestination = res.data;
                }
            } catch (error: unknown) { 
                if (axios.isAxiosError(error)) {
                    console.error('Error fetching tour data:', error.response?.data || error.message);
                } else {
                    console.error('Unexpected error:', error);
                }
            }
        }
    },
});
