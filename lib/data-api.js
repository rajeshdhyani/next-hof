export async function getAllContent(path) {
    // const path = 'divisions'
    const requestURL = `${process.env.STRAPI_API_URL}/${path}`;
    const response = await fetch(requestURL)
    const data = await response.json();

    const posts = [];

    for (const key in data) {
        posts.push({
            id: key,
            ...data[key]
        });
    }

    return posts;
}

// export async function getDivisions(){

// }

// export async function getFeaturedEvents() {
//     const allEvents = await getAllEvents();
//     return allEvents.filter((event) => event.isFeatured);
//   }

  export async function getPostById(id) {
    const allPosts = await getAllContent('articles');
    return allPosts.find((post) => post.id === parseInt(id));
    // return allPosts;
  }

  export async function getAwardeeById(id) {
    const allAwardees = await getAllContent('star-awardees');
    return allAwardees.find((awardee) => awardee.id === parseInt(id));
    // return allPosts;
  }

//   export function getFilteredEvents(dateFilter) {
//   const { year, month } = dateFilter;

//   let filteredEvents = DUMMY_EVENTS.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
//   });

//   return filteredEvents;
// }