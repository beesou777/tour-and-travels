/**
 * Composable for setting the page title.
 * Used in layouts. Title can be changed in pages through the `useHead` composable.
 */
export const usePageTitle = () => {
  const defaultName = "travellers himalaya";  // More specific for SEO
  useHead({
    titleTemplate: (title) => {
      return title ? `${title} | ${defaultName}` : defaultName;
    },
    meta: [
      {
        name: 'description',
        content: 'Explore top travel destinations and adventure tours in Nepal. Discover personalized travel packages for Kathmandu, Pokhara, Lumbini, and more.' 
      },
      {
        name: 'keywords',
        content: 'Nepal travels, adventure tours, trekking, Kathmandu sightseeing, Pokhara tours, Lumbini spiritual tours, Nepal vacation packages'
      }
    ]
  });
};
