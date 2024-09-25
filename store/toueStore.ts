import { defineStore } from 'pinia';

export const useTourStore = defineStore('tour-data', {
    state: () => ({
        tourDestination: [] as TourData[], 
        isFetched: false 
    }),
    actions: {
        async fetchTours() {
            if (this.isFetched) return; 

            const { data, error } = await useFetch<TourData[]>('/api/get-tour', {
                server: true 
            });

            if (data.value) {
                this.tourDestination = data.value; 
                this.isFetched = true; 
            }

            if (error.value) {
                console.error('Error fetching tour data:', error.value);
            }
        }
    },
});
