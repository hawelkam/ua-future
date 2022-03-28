export interface IPost {
  content: string;
  excerpt: string;
  title: string;
  slug: string;
}

export async function getAllPostsForHome(lang: string): Promise<IPost[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetPosts($lang: LanguageCodeFilterEnum!) {
          posts(where: { language: $lang }) {
            nodes {
              title
            }
          }
        }
      `,
      variables: {
        lang,
      },
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data.posts.nodes;
}
