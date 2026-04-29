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
    
    // 👇 ここ超重要
    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", res.status, text);
        
        return (
                <div>
                エラー発生: {res.status}
                <pre>{text}</pre>
                </div>
                );
    }
    
    const text = await res.text();
    
    if (!text) {
        return <div>レスポンスが空です</div>;
    }
    
    const post = JSON.parse(text);
    
    return (
            <main className="max-w-3xl mx-auto p-6">
            <h1>{post.title ?? 'タイトルなし'}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content ?? '' }} />
            </main>
            );
}
