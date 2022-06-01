
export const getPosts = async () => {
    try {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (posts.status !== 200) {
            throw new Error('Error');
        }
        return posts.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}