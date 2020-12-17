Description:
PokeGacha is an angular project with MySQL as database.

How to run:
1)Install MySQL. We used the latest version MySQL 8.0
2)After setting up make sure that you know your mysql native password
  2a) If you know your password then put your password into the file C:\Users\***\inf133-final-project\webserver\server.js 
  2b) If an error occurs or you don't know your native password try running this script (ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234')
3)Use CMD and change directory to C:\Users\***\inf133-final-project
4)Use "npm install" on both C:\Users\***\inf133-final-project\webserver and C:\Users\***\inf133-final-project\client folders
5)Use "npm start" in the C:\Users\***\inf133-final-project\webserver folder
6)Use "ng serve" in the C:\Users\***\inf133-final-project\client folder
7)Proceed to http://localhost:4200/ on your web browser

Features:
PokeDex: When you enter the webpage the user can see all the pokemon seperated by pages. User can click on the sprite that they have unlocked to go to
the pokemon entry page.
Slot machine: Is located in the gacha tab. User can click spin to activate the slotmachine. Once all the slots have the same element on display, the user will unlock 
a new pokemon. Once the pokemon is unlocked, the user can click on the sprite in the slot machine to go to that pokemon entry page.
Account: For testing we have created an admin account