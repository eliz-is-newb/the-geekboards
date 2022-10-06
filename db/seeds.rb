# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


#  ʚ♥ɞ Boards

# Japanese Culture
anime_and_manga = Board.create(name: "Anime & Manga")
memes = Board.create(name: "Memes")
all_things_kawaii = Board.create(name: "All Things Kawaii")
anime_wallpapers = Board.create(name: "Cosplay")

# Video Games
multiplayer = Board.create(name: "Multiplayer")
pokemon = Board.create(name: "Pokemon")
smash = Board.create(name: "Smash")
league_of_legends = Board.create(name: "League of Legends")
minecraft = Board.create(name: "Minecraft")
v_f_o = Board.create(name: "Valorant/Fortnite/Overwatch")
retro_games = Board.create(name: "Retro Games")
misc = Board.create(name: "Misc.")

# Interests 
tv = Board.create(name: "Binge Watchers")
true_crime = Board.create(name: "Everything True Crime")
cute_animals = Board.create(name: "Awww, Animals")
sports = Board.create(name: "Boxing/MMA ... Any combative sport really")
youtube = Board.create(name: "Watched something interesting on Youtube?")
asmr = Board.create(name: "The ASMR Club")
coding_friends = Board.create(name: "Coding Friends")
random = Board.create(name: "Legitimately Anything... Post it")

# Other 
business = Board.create(name: "Business")
personal_finance = Board.create(name: "Personal Finance Memes")
current_news = Board.create(name: "Current News")
fitness = Board.create(name: "Fitness")
self_care = Board.create(name: "Self Care/Advice")
ghosts = Board.create(name: "Paranormal/Ghosts/Aliens")

# Music 
hip_hop = Board.create(name: "Hip-Hop")
jazz = Board.create(name: "Jazz")
underground = Board.create(name: "Underground")
hyperpop = Board.create(name: "Hyperpop")
top40 = Board.create(name: "Top 40")
indie_emo_punk = Board.create(name: "Indie/Emo/Punk")
rock_metal = Board.create(name: "Rock/Metal")
edm = Board.create(name: "EDM")

# Creative 
cooking  = Board.create(name: "Cooking")
literature = Board.create(name: "Literature")
DIY_music  = Board.create(name: "DIY Music")
fashion = Board.create(name: "Depop or Grailed?")
tiktok = Board.create(name: "Tiktok")
graphic_design = Board.create(name: "Graphic Design")
artwork = Board.create(name: "Artwork")
misc = Board.create(name: "Misc.")


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