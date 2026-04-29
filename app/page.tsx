import Link from 'next/link';

type Post = {
    id: string;
    title: string;
    content?: string;
};

export default async function Home() {
    const res = await fetch('https://asublog.microcms.io/api/v1/blog', {
        headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
        },
        cache: 'no-store',
    });
    
    if (!res.ok) {
        const text = await res.text();
        console.error("API ERROR:", res.status, text);
        return <div>記事の取得に失敗しました</div>;
    }
    
    const data = await res.json();
    
    return (
            <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold">自作アプリ＆おすすめ紹介</h1>
            
            <p className="mt-2 text-gray-600">
            アプリ・本・節約など役立つ情報を発信しています
            </p>
            
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
            
            <h2 className="text-3xl font-bold mt-10">記事一覧</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
            {data.contents.map((post: Post) => {
                const text = post.content
                ? post.content.replace(/<[^>]*>/g, '').slice(0, 60)
                : '';
                
                return (
                        <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="p-4 border rounded-xl hover:shadow-lg"
                        >
                        <h2 className="font-bold">{post.title}</h2>
                        <p className="text-gray-600 mt-1">{text}...</p>
                        </Link>
                        );
            })}
            </div>
            </main>
            );
}
