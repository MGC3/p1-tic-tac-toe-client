# P1 Tic Tac Toe

<p align="center">
  <img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/screenshot-p1-mvp2-02-board-play.png" width=300>
</p>

A Tic Tac Toe single page app.

### Technologies used

- Javascript
- SASS
- jQuery
- Bootstrap
- SweetAlert2

### Planning, Development and Problem Solving Strategy

As advised by others, I started out by going over the requirements and the API documentation until I felt I had a good understanding of what was expected. My planning phase consisted of coming up with user stories and defining the MVP based on the requirements given. After this stage of planning I felt comfortable knowing the features I'd need to implement and some things to watch out for, but one thing that wasn't entirely clear to me yet was how interacting with the API fit into this. I also made some simple wireframes to visualize the end goal a little better.

When I started developing, my first goal was to make all the API calls in the doc to get a clearer idea of what role these would play in the project. I quickly built out the bare minimum required to get to that point (eg. you need user auth working in order to create game, you need to create game before you can update, etc.). This was really valuable and helped me see the paths I could take more clearly. From there I worked on creating my game logic and connecting that with the API, so I could play the game by clicking on the gameboard and watching the console for feedback. Lastly, I worked on the UI pieces like rendering the player's symbol, displaying messages, etc. After hitting MVP I worked some items I left for MVP+, such as implementing a more complex stat counter and polishing the overall style.

My problem solving strategy for mostly anything I ran into was on `console.log()`ing anything and everything while troubleshooting. Not the most sophisticated, but still invaluable in so many scenarios - like finding out if `if` or `else if` blocks are running, if a function is even being called, etc. Another strategy that helped when I got stuck on certain problems was writing everything out in psuedocode and walking through each step one by one. Another technique I used at one point was creating a button on the page temporarily, which would spit back what my current game state was whenever it was clicked.

### If I had more time...

I would have really liked to add a twist to make this standout from your average tic tac toe game. One feature I started (but didn't get to complete) was to add a "speed mode", where turns would automatically end after 2 seconds or so, and eventually have this number be speficied by the user. Another feature that would be fun to try implementing would be to play against a CPU.

### Wireframes and User Stories

Initial wireframes for MVP:

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/wireframe-p1-mvp-01-signin.png" width=300>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/wireframe-p1-mvp-02-board.png" width=300>
</p>

Progress towards MVP:

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/screenshot-p1-mvp-02-board.png" width=300>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/screenshot-p1-mvp-03-board-progress.png" width=300>
</p>

Quick wireframe of MVP+ (better stats bar):

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/wireframe-p1-mvp1-01-stats-bar.png" width=300>
</p>

Final screenshots:

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/screenshot-p1-mvp2-01-create-acct.png" width=300>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/screenshot-p1-mvp2-02-board-play.png" width=300>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/MGC3/p1-tic-tac-toe-client/master/documentation/screenshot-p1-mvp2-03-board-win.png" width=300>
</p>

Some examples of user stories:

- As an unregistered user, I want to be able to sign in so I can play
- As a registered user, I want to be able to sign out so I can feel secure.
- As a player, I want to be able to know who's turn it is so that I can easily keep track of the status of the game.
- As a player, I want to be notified when I've won or lost.
- As a player, I want to be see the total amount of games each player has won so that I can see if I'm doing well.
- As a player, I want to see a board on the screen, so that I don't have to play in the terminal.
