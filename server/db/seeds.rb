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

image = Image.create!(
  filename: 'food_jelly_fry.png',
  body: File.binread(Rails.root.join('test/fixtures/files/food_jelly_fry.png'))
)

%w[
  あったか～い
  つめた～い
  やわらか～い
  あま～い
  すっぱ～い
  から～い
].product(%w[
  肉じゃが
  牛丼
  カレー
  オムレツ
  ハンバーグ
  餃子
  お好み焼き
  生姜焼き
  パスタ
]).sample(20).each do |adjective, name|
  title = adjective + name
  Recipe.create!(
    title: title,
    description: "#{title}を作ったよ",
    user: users.sample,
    image: image
  )
end
