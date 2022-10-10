const quote_list = [
  "If you think reality is just living comfortably and following your own whims, can you seriously dare to call yourself a soldier?",
  "What is the point if those with the means and power do not fight?",
  "I don’t have time to worry if it’s right or wrong, you can’t hope for a horror story with a happy ending.",
  "I want to see and understand the world outside. I don’t want to die inside these walls without knowing what’s out there.",
  "Nothing can suppress a human’s curiosity.",
  "I’ll slaughter you all…and take back what you stole… All of it!",
  "If you win you live. If you lose you die. If you don’t fight, you can’t win.",
  "I don’t have time to worry if it’s right or wrong, you can’t hope for a horror story with a happy ending.",
  "I can do this. No, we can do this! Because we’ve all been special since the day we were born. We’re free!",
  "No matter how messed up things get, you can always figure out the best solution.",
  "I disposed of some dangerous beasts. Mere animals that just happened to resemble humans.",
  "Ever since I joined the survey corps, I’ve had people dying on me everyday. But you understand, don’t you? One day or another, everyone you care about eventually dies. It’s something we simply can’t accept. It’s a realization that could drive you insane.",
  "Even in moments of the deepest despair… I guess we can still find hope, huh?",
  "People are crazy for believing that these walls will protect us forever. Even though the walls have been intact for the past 100 years, there’s nothing that can guarantee they won’t be broken down today.",
  "You’re only resorting to physical abuse because you can’t prove that I’m wrong",
  "I think there are times people have to die… even if I don’t like it.",
  "When people are faced with a situation they don’t understand, it’s easy for fear to take hold.",
  "People who can’t throw something important away, can never hope to change anything.",
  "I’m leaving it all with Eren. My dream, my life, everything. I have nothing else left to lose. I’m sure Eren will be able to reach the ocean. He’ll have to see it for both of us.",
  "To surpass monsters, you must be willing to abandon your humanity.",
  "Willpower alone isn’t enough in battle.",
  "We’re going to explore the outside world someday, right? Far beyond these walls, there’s flaming water land made of ice, and fields of sand spread wide. It’s the world my parents wanted to go to.",
  "I don’t like the terms good person or bad person because it’s impossible to be entirely good to everyone, or entirely bad to everyone. To some, you are a good person, while to others you are a bad person.",
  "The strong feed upon the weak. It’s such an obligingly simple rule. Except in this world, my friends tried to be strong.",
  "Endure it. Don’t let go.",
  "Everyone can make a choice after they have learned what it will result in. It is so easy to say we should have done it this way afterwards. But you can’t know what your choice will result in before actually choosing.",
  "I was, I am, and I remain a soldier, sworn to devote my heart and soul to the restoration of humankind. There is no greater glory than dying for that belief!",
  "I’d rather die than become a burden.",
  "I want to survive…And see her again. As a person, I’m really lower than shit. But she knows that, and she smiles kindly at me anyway.",
  "Do you always want to live hiding behind the mask you put up for the sake of others? You’re you, and there’s nothing wrong with that.",
  "Living this way is my way of getting revenge. I’m going to be living proof that your fate isn’t decided at birth!",
  "I too used to believe that the world would be a better place if I hadn’t been born. I was hated merely for the fact that I existed, and I died for the happiness of many people. But there was one thing I wished for with all my heart… If I’m ever given a second chance in life, I want to live for only myself. That is my sincere wish.",
  "If we only focus on making the best moves, we will never get the better of our opponent. When necessary, we must be willing to take big risks, and be prepared to lose everything. Unless we change how we fight, we cannot win.",
  "If you begin to regret, you’ll dull your future decisions and let others make your choices for you. All that’s left for you then is to die. Nobody can foretell the outcome. Each decision you make holds meaning only by affecting your next decision.",
  "It’s us who gives meaning to our comrades lives.",
  "They want to know what became of the heart they gave. Because the fighitng isn’t over yet.",
  "We need to stop living for others. From now on…Let’s live for ourselves!",
  "Even if you have your reasons and there are things you can’t tell me, no matter what, I’m on your side.",
  "A lot of the time, you’re going into a situation you know nothing about. So what you need is to be quick to act… and make tough decisions in worst-case scenarios.",
  "I don’t know which option you should choose. I could never advise you on that… No matter what kind of wisdom dictates you the option you pick, no one will be able to tell if it’s right or wrong until you arrive to some sort of outcome from your choice.",
  "Some scouts’ lives are more valuable than others, only those dumb enough to acknowledge that join us.",
  "Whether you have the body, dead is dead.",
  "The lesson you need to learn right now can’t be taught with words, only with action.",
  "The only thing we’re allowed to do is believe that we won’t regret the choice we made.",
  "Don’t get me wrong. It’s not like I trust him. If he betrays us or goes berserk, I’ll put him down without hesitation.",
  "I think pain is the best discipline.",
  "It’s good to see that someone has the balls to go. But don’t forget to do your damnedest to stay alive.",
  "If you don’t want to die, think!",
  "The difference between your decision and ours is experience. But you don’t have to rely on that.",
  "No casualties, Don’t you dare Die!",
  "You couldn’t save your mom because you… weren’t strong enough. I didn’t face the Titan… because I wasn’t brave enough.",
  "This world is merciless, and it’s also very beautiful.",
  "I don’t want to lose what little family I have left.",
  "There are only so many lives I can value. And I decided who those people were six years ago. So you shouldn’t try to ask for my pity. Because right now, I don’t have time to spare or room in my heart.",
  "That’s right… This world… is cruel. It hit me that living was like a miracle.",
  "I’m sorry Eren. I won’t give up. I’ll never give up again. So I’ll win, no matter what! I’ll survive no matter what.",
  "The world is crammed with cruelty.",
  "I am strong, real strong. None of you come close.",
  "Only victors are allowed to live. This world is merciless like that.",
  "Believe in your own power.",
  "Asking me for compassion is mistaken. After all I have no heart or time to spare.",
  "My speciality is lacerating flesh. Anyone interested in experiencing my skill firsthand, step right up.",
  "Once I’m dead I won’t be able to remember you. So I’ll win no matter what. I’ll live no matter what.",
  "You don’t stand a single chance to win unless you fight.",
  "Going against the flow… takes a lot of courage. I respect that. Maybe people who can do it are just stupid, but… Well… What I’m sure of is that people like that are rare.",
  "You’re not a strong person, so you can really understand how weak people feel. I mean… Most humans are weak, including me… But if I got an order from someone who saw things like I do, no matter how tough it was, I’d do my damnedest to carry it out.",
  "The future of humanity will be doomed. Having said that, I’m not about to sit around while we all get slaughtered.",
  "Right now we’ve got no choice but to try. We gotta believe there’s a way to beat him!",
  "There are only so many lives I can value. And…I decided who those people were six years ago. So…You shouldn’t try to ask for my pity. Because right now, I don’t have…Time to spare or room in my heart.",
  "I knew… you were more of a hero than anyone else.",
  "One must never prioritize their own gain over humanity's survival.",
  "We’re born free. All of us. Free. Some don’t believe it, some try to take it away. To hell with them!",
  "Eren, aren't you glad you didn't end up getting dissected by her kind?",
  "So choose for yourself, whichever decision you will regret the least.",
  "What's so good about giving up? Is it better to escape from reality to the point where you're throwing away your hope?",
  "I don't have time to worry if it's right or wrong, you can't hope for a horror story with a happy ending!",
  "Sawney isn't very good at expressing himself. He just keeps trying to bite my head off.",
  "If you think it’s natural for people to sacrifice their own lives to save others, surely you understand that sometimes a single death can save many lives.",
  "A good person? Well… I don’t really like that term. Because to me, it just seems to mean someone who’s good for you. And I don’t think there’s any one person who’s good for everyone.",
  "If you win, you live. If you lose, you die. If you don't fight, you can't win!",
  "The difference in judgment between you and me originates from different rules derived from past experience.",
  "But I think...It's time to let him rest.",
  "Ever since I joined the survey corps, I’ve had people dying on me every day. But you understand, don’t you?",
  "It's not just Major Hange. They're all weirdos. It's like a haven for freaks.",
  "So, Just Do The Best You Can And Choose Whichever You’ll Regret The Least.",
  "What You Need Is to Be Quick To Act…And Make Tough Decisions In Worst-Case Scenarios.",
  "The Lesson You Need To Learn Right Now, Can’t Be Taught With Words...Only With Action.",
  "This Is Just My Opinion, But When It Comes To Teaching Somebody Discipline…I Think Pain Is The Most Effective Way.",
  "If You Don’t Want To Die — Think.",
  "live for your own sake",
  "I think the best disciplining is pain.",
  "A person who cannot give up anything, can change nothing.",
];

export const quotes = quote_list.map((quote, index) => {
  return {
    id: index + 1,
    quote,
  };
});
