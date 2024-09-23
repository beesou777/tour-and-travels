export const useNuxtImage = () => {
    const getImage = (item: string) => {
        return `/img/${item}.webp`  
    };

    const getIcon = (item: string) => {
        return `/icons/${item}.svg`
    };

    return {
        getImage,
        getIcon
    };
};
