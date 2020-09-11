# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

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
  いるか
  さめ
  えい
  めんだこ
  くまのみ
  はぜ
  さんご
].each do |name|
  user_tags = tags.sample(rand(1..4))
  users << User.create!(
    name: name,
    profile: "#{user_tags.pluck(:name).join('と')}が好きです。",
    tags: user_tags,
    following: rand(0..999),
    followers: rand(0..999)
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
  bousai_nikujaga.png          肉じゃが     https://img.cpcdn.com/recipes/6438595/840x1461s/c8532818f6761dbd1cda287488115597?u=33853808&p=1599550871
  food_gyudon.png              牛丼         https://img.cpcdn.com/recipes/6249903/840x1461s/0a1d2e6a0663da79fe1daa876998bc1d?u=16344425&p=1590229762
  food_curryrice_white.png     カレー       https://img.cpcdn.com/recipes/4076031/840x1461s/27a908eb6e626816dc1c7071d1698f6c?u=5602703&p=1474191714
  food_omelet.png              オムレツ     https://img.cpcdn.com/recipes/6238148/840x1461s/a39b32cd0a3e5dfa2a53e73d22a5670f?u=7824026&p=1589851011
  food_hamburg.png             ハンバーグ   https://img.cpcdn.com/recipes/4748850/840x1461s/22fc5c03c0c82b6fff7d60b05de53765?u=17209863&p=1542152712
  food_gyouza.png              餃子         https://img.cpcdn.com/recipes/6441699/840x1461s/436a59e56c2321598941d6b402795ff7?u=11693353&p=1599727105
  omatsuri_okonomiyaki.png     お好み焼き   https://img.cpcdn.com/recipes/6399515/840x1461s/9febd30ae444f7473264d43c1d2d45de?u=40723211&p=1597322739
  food_syougayaki.png          生姜焼き     https://img.cpcdn.com/recipes/6434758/840x1461s/3ef02e6a7d88d64f7fe4cafdad171019?u=1427770&p=1599361373
  food_spaghetti_carbonara.png カルボナーラ https://img.cpcdn.com/recipes/6431537/840x1461s/526f1f9aa0d5851659097b787e346264?u=27917447&p=1599166639
].each_slice(3).to_a).sample(40).each do |adjective, (filename, name, url)|
  title = adjective + name
  user = users.sample
  image = Image.create!(
    filename: filename,
    body: URI.open(url).read
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
