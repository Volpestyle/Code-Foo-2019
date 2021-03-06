# Question Time!

## How to build Question 3
I implemented the solution for Question 3 inside a React app. Once downloaded, you can build this app locally with:
```console 
cd armour-set
```
```console
npm install
```
```console
npm start
```

## Questions

### Question 1
Introduce yourself, explain your connection to IGN, and tell us why we should pick you to participate in IGN’s Code Foo program. Show your enthusiasm and passion for IGN in the form of a YouTube/Vimeo video, written document, audio track, or whatever format you feel most comfortable with. 

### Answer
I answered this question with [youtube video.](https://www.youtube.com/watch?v=wVXAjkKyRMc)

### Question 2
Team Rocket is at it again! This time they are looking to terrorize the city of San Francisco, and aim to make the trek through the “crookedest street in the world” ( Lombard Street ) to steal a treasure contained in Coit Tower. Legend has it, the tower is completely filled with Poké Balls, enough Poké Balls for Team Rocket to amass an army of Pokémon! Fortunately, a slumbering Pokémon is known to sleep at the bottom of Lombard St and block the entrance to Coit Tower entirely. If Team Rocket determines how to wake the sleeping giant and successfully steals the cache of Poké Balls that fills Coit Tower, about how many Poké Balls would they walk away with? Describe each step in your thought process.

### Answer
First I need to find the volume of coit tower in cubic feet. According to wikipedia page, Coit Tower is 210 ft tall. Using Google Earth, I was able to estimate the diameter of the tower to be 12.18 meters or 40 ft.
![coit tower diameter](./google-earth-screenshot.png)
This means that the total volume of Coit Tower (using formula for volume of cylinder) is approximately 264,894 ft<sup>3</sup>. Assuming that all the pokeballs are full size (not minified for storage), and the diameter of full size a pokeball is 3.15 inches, the volume of a single pokeball is 16.37 inches<sup>3</sup> or 0.00947 ft<sup>3</sup>. Given that the pokeballs are packed with the [highest average density](https://en.wikipedia.org/wiki/Sphere_packing) that can be achieved by a lattice packing, the pokeballs will only fill 0.74048 * 264,894 = 196,148 ft<sup>3</sup>. We can now divide 196,148 / 0.00947 = 20,712,565 pokeballs. So Team Rocket will walk away with approximately 20,712,565 pokeballs. They're gunna need a really big bag.

### Question 3
After a hard fought battle with a particularly tough Werewolf, renowned Witcher Geralt of Rivia is in need of some new armor. Fortunately, there was a bounty for the recently defeated beast, and for his triumph Geralt has received a good bit of coin ( called Crowns ). Traveling to a nearby armorer, Geralt is faced with more options than he is used to. Given his funds, the Witcher needs to purchase an armor set with the highest possible total armor value.

Create a program that will determine the armor set of the highest value based on Geralt’s available currency ( Crowns ). An armor set requires one piece of armor of each type (Chest, Leggings, Helmet, Boots) as well as an extra piece that can be of any type.

- 300 Crowns Available
- You must be able to afford the total price of your armor set given your available Crowns
- Each piece of armor contains a type, name, price, and armor value
- Remember, an armor set requires one piece of armor of each type (Chest, Leggings, Helmet, Boots) as well as an extra piece that can be of any type
- Inventory in Armorer’s shop provided
- Display the final answer.
- Explain how you implemented the solution. Is your solution successful with other inventories?

### Answer
I assumed that the inventory had unlimited stock of each item, and that the extra peice of armour could be one of the peices already in the set. The main steps to my solution are as follows:
1. Parse table data into array of 'armour' objects. 
2. Remove any items that are strictly lower in value. Item A is strictly lower than Item B when A and B are of the same armour type and equal price, but the value of A is lower than B. There is no reason to consider these items.
3. Divide the total inventory array into separate arrays of each type of armour. One array for each piece we need: Helmet, Chest, Leggings, Boots, and extra (which contains all armour).
4. Use recursion to build every possible set of armour from the arrays. If the given set is under the budget, compare to the current max set. If the given set's value is greater than the current max set's value, set the given set as the new max set. 

My solution has been successful for any other inventorys given. The inventory can be modified inside 'index.js'.

