# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


#  ʚ♥ɞ Boards

# Japanese Culture
1_anime_and_manga = Board.create(name: "Anime & Manga")
2_memes = Board.create(name: "Memes")
3_all_things_kawaii = Board.create(name: "All Things Kawaii")
4_anime_wallpapers = Board.create(name: "Cosplay")

# Video Games
5_multiplayer = Board.create(name: "Multiplayer")
6_pokemon = Board.create(name: "Pokemon")
7_smash = Board.create(name: "Smash")
8_league_of_legends = Board.create(name: "League of Legends")
9_minecraft = Board.create(name: "Minecraft")
10_v_f_o = Board.create(name: "Valorant/Fortnite/Overwatch")
11_retro_games = Board.create(name: "Retro Games")
12_misc = Board.create(name: "Misc.")

# Interests 
13_tv = Board.create(name: "Binge Watchers")
14_true_crime = Board.create(name: "Everything True Crime")
15_cute_animals = Board.create(name: "Awww, Animals")
16_sports = Board.create(name: "Boxing/MMA ... Any combative sport really")
17_youtube = Board.create(name: "Watched something interesting on Youtube?")
18_asmr = Board.create(name: "The ASMR Club")
19_coding_friends = Board.create(name: "Coding Friends")
20_random = Board.create(name: "Legitimately Anything... Post it")

# Other 
21_business = Board.create(name: "Business")
22_personal_finance = Board.create(name: "Personal Finance Memes")
23_current_news = Board.create(name: "Current News")
24_fitness = Board.create(name: "Fitness")
25_self_care = Board.create(name: "Self Care/Advice")
26_ghosts = Board.create(name: "Paranormal/Ghosts/Aliens")

# Music 
27_hip_hop = Board.create(name: "Hip-Hop")
28_jazz = Board.create(name: "Jazz")
29_underground = Board.create(name: "Underground")
30_hyperpop = Board.create(name: "Hyperpop")
31_top40 = Board.create(name: "Top 40")
32_indie_emo_punk = Board.create(name: "Indie/Emo/Punk")
33_rock_metal = Board.create(name: "Rock/Metal")
34_edm = Board.create(name: "EDM")

# Creative 
35_cooking  = Board.create(name: "Cooking")
36_literature = Board.create(name: "Literature")
37_DIY_music  = Board.create(name: "DIY Music")
38_fashion = Board.create(name: "Depop or Grailed?")
39_tiktok = Board.create(name: "Tiktok")
40_graphic_design = Board.create(name: "Graphic Design")
41_artwork = Board.create(name: "Artwork")
42_misc = Board.create(name: "Misc.")


# ʚ♥ɞ users

user1 = User.create(username: "Jesus", email: "jesus@thepassionofchrist.com", password: "fungames")
user2 = User.create(username: "theGrimREAPER", email: "nsaemployee@nsa.gov", password: "fungames1")
user3 = User.create(username: "kendr1ckl4mar", email: "kanyewest@yeezus.com", password: "fungames2")
user4 = User.create(username: "i-make-sick-beats-HIRE-ME", email: "letsdobizzness@gmail.com", password: "fungames3")
user5 = User.create(username: "daddy", email: "daddydaddydaddy@gmail.com", password: "fungames4")
user6 = User.create(username: "mr_SaladFingers", email: "shiteater@youtube.com", password: "fungames5")

# ʚ♥ɞ posts

post1 = Post.create(title: "I lost my dog", image_url:"https://i.kym-cdn.com/photos/images/facebook/001/357/190/e68.jpg", body:"Help, idk where he went omg!!", board_id: 23, user_id: 1 )
post2 = Post.create(title: "Anyone seeing shadow people?", image_url:"", body:"Anyone?", board_id: 26, user_id:3 )
post3 = Post.create(title: "I Wanna watch this show", image_url:"https://i.ytimg.com/vi/UfiU6b8LZb0/maxresdefault.jpg", body:"Opinions on gabriel drop out?", board_id: 1 , user_id: 2 )
post4 = Post.create(title: "YOOOO!", image_url:"https://www.digitaltrends.com/wp-content/uploads/2022/08/Chainsaw-Man-trailer.jpg?p=1", body:"Chainsaw man!!! Stream links?", board_id: 1 , user_id: 4)
post5 = Post.create(title: "What do you watch when you code?", image_url:"", body:"I sometimes watch bo burnham's depressing comedy shows. they remind me that i'm not a total loser.", board_id: 19, user_id: 6 )
post6 = Post.create(title: "yoo :(", image_url:"https://i.redd.it/x5452hhoq4b11.jpg", body:"no comment", board_id: 19 , user_id: 4)

# ʚ♥ɞ comments

comment1 = Comment.create(body: "Damn...", post_id: 5, user_id: 2 )
comment2 = Comment.create(body: "animixplay.to dawg", post_id: 4 , user_id: 5)
comment3 = Comment.create(body: "Smh.", post_id: 5, user_id: 3 )
comment4 = Comment.create(body: "Lmao.", post_id: 6 , user_id: 3)
comment5 = Comment.create(body: "That's an ugly dog", post_id: 1 , user_id: 3)
comment6 = Comment.create(body: "Bump.", post_id: 1 , user_id: 6 )