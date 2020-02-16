# StarNavi Bricks Game

## You can try demo [Here](https://affectionate-pasteur-80d746.netlify.com/).

## Application techs:

- Create React App
- Redux
- Redux-thunk as middleware
- React Hooks
- And Design UI-Framework
- Styled Component
- REST API
- Moment.JS

## Application gameplay:

- User set game difficulty and name
- Press `PLAY`
- At a specified time interval (delay in the difficulty mode) a random square on the field is highlighted in blue
- If the user managed to click on the square during this time - he turns green, the player gets a point and the field changes color to green
- If not, the field turns red and the point goes to the computer (`computer has 30% chance to miss-click`)
- When a player or computer paints >50% of all possible squares in his color - he becomes the winner
- An inscription appears between the control buttons and the playing field that the player (the name he entered) / computer won
- Button `PLAY` changes the caption to `PLAY AGAIN` to restart the game
- The result of the game will be sent to the server
- Results in table are auto updated
