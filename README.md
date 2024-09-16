# Pokémon Memory Game

This is another personal project, continuing to experiment with [PokéApi](https://pokeapi.co/)! And for this project, I used React and Tailwind.css because I want to become better at React and creating a memory game seemed to be quite good project to further develop my skills and understand React better.

If you want to clone this project to try it for yourself, I provided instruction at the end of this readme.

## How the game actually works

This is supposed to be a memory game of one sort. Not your typical one where you match two cards and continue, but you need to click each Pokemon once to win in this game. Sounds easy? _Wellll..._ the catch is, that the cards will be shuffeled after each click. Good luck!
Oh, and here is one picture of how the game looks like.

<img src="https://i.imgur.com/d76dn1y.png" alt="Screenshot of a the Pokemon Memory Game." width="700"/>


## How the game works, under the hood!

Here's a breakdown of how the game functions from start to end. I also try to explain with my own words what I used and learned:

1. **Fetching Pokémon Data**:
   - When the game starts, it fetches data for a predefined list of Pokemons from [PokéApi](https://pokeapi.co/)
   - The data includes each Pokémon's ID, name, and image URL / sprite
   
2. **Loading state**
    - While the data is being fetched, a loading message is displayed. Once it's fetched, the loading message     is replaced with game grid. PHEW!
    
3. **Use state**
    - I used React's `useState` hook to manage various states in this project. I learned that you can use `useState` to re-render page without updating the whole page itself. You can also set an initial value to `useState` like `true` for loops

4. **Rendering the game**
    - The game renders cards in a grid, that display picture and name of pokemon. This one uses data stored in `pokemon` state. Good stuff!

5. **Handling Clicks**
    - Each Pokemon has an unique ID key, and after each click the game checks `clicked` array to see, if the Pokemon has been already clicked / in the array
    - If `true`, the game resets the `clicked` array and sets `score` to 0
    - If `false`, the game continues and adds the next Pokemon with unique ID to the `clicked` array
    - And finally `bestScore` state is updated if the current `score` exceeds it

6. **Shuffling the cards**
    - Cards are shuffled after every click to make memory game more difficult. It is done by creating a new shuffled array of Pokemon data

7. **Help Popup**
    - You can find a help button in the bottom right corner of the page. After clicked, it shows a message to tell you how to play the game. It toggles `help` state that is a boolean

## Thoughts and comments

Past week or almost two, I was reading through Mozilla dev docs about Javascript to understand more how it works, and made some small exercises along the journey. I wanted to do it before jumping into deep waters of React, even though it's somewhat familiar already to me. But this way, I feel more confident and understand the possible bugs or getting around a problem, I know what could work and what to Google. 

And before moving to **React**, I was debating whether I should try Vue instead, but React felt more comfortable to me this time. But at least I am using Vite, which is made by the same guy who created Vue! And not gonna lie, it is indeed faster to start a project than your regular `npx create-react-app`. I am still interested in Vue, but right now I want to focus more on React.

## The development

I really like how this project turned out. I added some of my favorite Pokemons to the list, because when I had a function to choose randomly generated 12 pokemons from the list of 1,025, the site would load _much_ longer for making always new API requests. The first 12 Pokemons would be too easy as well, because of the Pokemon evolutions, so I thought this would be the best solution.

I also added later a "Loading..." paragraph / state everytime you boot up the page, so the user actually knows that something is happening.
This was overall an educational project but now I need to focus more on writing my thesis. I will try to do some side projects as well though. 

And now, the instructions in case you want to run this on your own PC

## Installation

First things first, make sure you have Node.js installed and npm included

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Vaahtopahvi/memory-game.git

2. Navigate to the project dir
   ```sh
   cd pokemon-memory-game

3. Install the dependencies
   ```sh
   npm install

4. Run the project
   ```sh
   npm run dev
   
Thank you and enjoy!
