# Description
PokéGacha is an Angular project hosted on an ExpressJS webserver. Data is stored in a MySQL database. All data is taken from https://pokeapi.co/

# How to run
1. Install MySQL. We used the latest version MySQL 8.0

2. After setting up make sure that you know your MySQL native password
    1. If you know your MySQL user/password, then modify the user/password lines in `inf133-final-project\webserver\server.js`
    2. If an error occurs or you don't know your native password try running this script `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'`, replacing `root` and `password` with your respective user/password
  
3. Open up CMD and start MySQL using `mysql -u root -ppassword`, replace `root` and `password` with your respective user/password.

4. Run the SQL script using `source /../inf133-final-project/pokeDB.sql`, replace the directory with where you downloaded the project. This will create and populate a database named `pokedb` with Pokémon data.

5. Install Angular by running `npm install -g @angular/cli`

6. Navigate to `inf133-final-project\webserver` and run `npm install` and `npm start`, this will start the webserver

7. Navigate to `inf133-final-project\client` and run `npm install` and `ng serve --open`, this will open up the webpage

# Features
- **Pokédex:** displays a grid of Pokémon with their sprites and names.

- **Pokémon page:** clicking on a Pokémon in the Pokédex will display a Pokémon's information on a separate page

- **Slot machine:** located in the gacha tab. A user can click spin to activate the slot machine. Once all the slots have the same element on display, the user will unlock 
  a new pokemon. All unlocked Pokémon will be displayed in the My Pokemon page the same fashion as the Pokédex
  
- **My Pokémon page:** all the user's unlocked Pokémon are displayed here in the same fashion as the Pokédex
