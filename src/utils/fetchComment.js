// export const fetchComment = async (postId) => {
//     const result = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
//     );

//     return result.json();
// };
export default async function fetchComment(postId){
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

    return result.json();
}