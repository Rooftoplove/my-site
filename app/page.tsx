export default function Home() {
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
            <h2 className="mt-10 text-2xl font-bold">おすすめ記事</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-4">
            
            <a href="/blog/recommend-books" className="p-4 border rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold">読書管理アプリおすすめ</h3>
            <p className="text-gray-600">効率よく本を管理する方法</p>
            </a>
            
            </div>
            
            </main>
            )
}
