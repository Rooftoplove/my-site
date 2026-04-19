export default async function Page({
    params,
}: {
    params: { id: string }
}) {
    const res = await fetch(
                            `https://asublog.microcms.io/api/v1/blog/${params.id}`,
                            {
                                headers: {
                                    'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
                                },
                                cache: 'no-store',
                            }
                            )
    
    const post = await res.json()
    
    return (
            <main className="max-w-3xl mx-auto p-6">
            
            <h1 className="text-3xl font-bold">
            {post.title}
            </h1>
            
            <p className="text-gray-500 mt-2">
            {post.publishedAt}
            </p>
            
            <div
            className="mt-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            </main>
            )
}
