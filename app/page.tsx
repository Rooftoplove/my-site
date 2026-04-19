export default async function Home() {
    const res = await fetch('https://asublog.microcms.io/api/v1/blog', {
        headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
        },
        cache: 'no-store',
    })
    
    const data = await res.json()
    
    return (
            <main className="max-w-5xl mx-auto p-6">
            
            <h1 className="text-3xl font-bold">
            自作アプリ＆おすすめ紹介
            </h1>
            
            <p className="mt-2 text-gray-600">
            アプリ・本・節約など役立つ情報を発信しています
            </p>
            
            {/* アプリ一覧 */}
            <h2 className="mt-10 text-2xl font-bold">アプリ一覧</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
            
            <a href="/apps/kakeibo" className="p-4 border rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold">家計簿アプリ</h3>
            <p className="text-gray-600">シンプルにお金を管理</p>
            </a>
            
            <a href="/apps/book" className="p-4 border rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold">本管理アプリ</h3>
            <p className="text-gray-600">バーコードで簡単登録</p>
            </a>
            
            </div>
            
            {/* 記事 */}
            <h1 className="text-3xl font-bold">記事一覧</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
            
            {data.contents.map((post: any) => (
                                               <a
                                               key={post.id}
                                               href={`/blog/${post.slug}`}
                                               className="p-4 border rounded-xl hover:shadow-lg"
                                               >
                                               <h2 className="font-bold">{post.title}</h2>
                                               <p className="text-gray-600 mt-1">
                                               {(post.content ?? '').replace(/<[^>]*>/g, '').slice(0, 60)}...
                                               </p>
                                               </a>
                                               ))}
            
            </div>
            
            </main>
            )
}
