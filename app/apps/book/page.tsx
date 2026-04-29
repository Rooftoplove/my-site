export default function Page() {
    return (
            <main className="max-w-3xl mx-auto p-6">
            
            <h1 className="text-3xl font-bold">本管理アプリ</h1>
            
            <p className="mt-2 text-gray-600">
            シンプルに使える本管理アプリです
            </p>
            
            {/* CTA①（上に追加） */}
            <a
            href="https://apps.apple.com/jp/app/%E3%82%88%E3%82%93%E3%81%A0/id6760612962"
            className="block bg-blue-500 text-white text-center p-3 rounded-xl mt-4"
            >
            無料でダウンロード
            </a>
            
            <h2 className="mt-8 font-bold">特徴</h2>
            <ul className="list-disc ml-5 mt-2">
            <li>簡単入力で続けやすい</li>
            <li>カテゴリごとに管理できる</li>
            <li>読書記録を視覚化（有料機能）</li>
            </ul>
            
            {/* 使うメリット追加 */}
            <h2 className="mt-8 font-bold">こんな人におすすめ</h2>
            <ul className="list-disc ml-5 mt-2">
            <li>購入した本が多くて管理できていない方</li>
            <li>年間、月間の読了数をカウントしたい方</li>
            <li>１冊の読書期間を視覚化したい方</li>
            </ul>
            
            {/* CTA②（中間） */}
            <a
            href="https://apps.apple.com/jp/app/%E3%82%88%E3%82%93%E3%81%A0/id6760612962"
            className="block bg-blue-500 text-white text-center p-3 rounded-xl mt-4"
            >
            今すぐアプリを使う
            </a>
            
            {/* 信頼感 */}
            <p className="mt-4 text-sm text-gray-500">
            ※無料で使えます（一部機能は課金あり）
            </p>
            
            {/* CTA③（最後） */}
            <a
            href="https://apps.apple.com/jp/app/%E3%82%88%E3%82%93%E3%81%A0/id6760612962"
            className="block bg-blue-500 text-white text-center p-3 rounded-xl mt-4"
            >
            App Storeでダウンロード
            </a>
            
            </main>
            )
}

