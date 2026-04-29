export default async function Page({
    params,
}: {
    params: { id: string }
}) {
    const contentId = params.id;
    
    const res = await fetch(
                            `https://asublog.microcms.io/api/v1/blog/${contentId}`,
                            {
                                headers: {
                                    'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
                                },
                                cache: 'no-store',
                            }
                            );
    
    // 👇 これ追加
    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", res.status, text);
        throw new Error(`Fetch failed: ${res.status}`);
    }
    
    // 👇 ここも安全に
    const text = await res.text();
    
    if (!text) {
        throw new Error("Empty response");
    }
    
    const post = JSON.parse(text);
    
    // 👇 null対策
    if (!post) {
        return <div>データなし</div>;
    }
    
    return (
            <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold">
            {post.title ?? 'タイトルなし'}
            </h1>
            
            <p className="text-gray-500 mt-2">
            {post.slug ?? 'no slug'}
            </p>
            
            <div
            className="mt-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
            />
            </main>
            );
}
