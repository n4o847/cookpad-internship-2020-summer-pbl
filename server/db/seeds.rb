# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Recipe.destroy_all
Tag.destroy_all
Image.destroy_all

tags = []

%w[
  プログラミング
  フットサル
  筋トレ
  漫画家
  ボルダリング
  eスポーツ
  登山
  キャンプ
  釣り
  サーフィン
  コスプレ
  サイクリング
  ヨガ
  ドライブ
  バスケ
].each do |name|
  tags << Tag.create!(
    name: name
  )
end

users = []

%w[
  くらげ
  うに
  いか
  まぐろ
  えび
  ひとで
  くりおね
].each do |name|
  users << User.create!(
    name: name,
    tags: tags.sample(rand(1..4))
  )
end

%w[
  あったか～い
  つめた～い
  やわらか～い
  あま～い
  すっぱ～い
  から～い
  すぐにつくれる
  絶対に失敗しない
  片手で食べられる
  移動中に食べられる
  栄養たっぷり
].product(%w[
  bousai_nikujaga.png          肉じゃが
  food_gyudon.png              牛丼
  food_curryrice_white.png     カレー
  food_omelet.png              オムレツ
  food_hamburg.png             ハンバーグ
  food_gyouza.png              餃子
  omatsuri_okonomiyaki.png     お好み焼き
  food_syougayaki.png          生姜焼き
  food_spaghetti_carbonara.png カルボナーラ
].each_slice(2).to_a).sample(20).each do |adjective, (filename, name)|
  title = adjective + name
  user = users.sample
  image = Image.create!(
    filename: filename,
    body: File.binread(Rails.root.join("test/fixtures/files/#{filename}"))
  )
  tags = user.tags.sample(1)
  Recipe.create!(
    title: title,
    description: "#{tags.first.name}にぴったりな、#{title}を作ったよ",
    user: user,
    image: image,
    tags: tags
  )
end
