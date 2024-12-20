
## Flatdango - Movie Theater App
Flatdango is a web-based application that allows users to view movie details and purchase tickets for the Flatiron Movie Theater. The app fetches movie data from a JSON server, dynamically displays the details, and updates the UI to reflect ticket availability.
find the application here https://maurinemutinda72.github.io/json-challange/



### Project Features
1. View Movie Details  
   - On page load, the app displays the first movie's poster, title, runtime, showtime, and the number of available tickets.
2. Dynamic Movie List 
   - All available movies are displayed in a sidebar list.
3. Buy Tickets
   - Users can purchase tickets by clicking the "Buy Ticket" button. The number of available tickets decreases dynamically.
   - If no tickets are available, the movie is marked as "Sold Out," and further purchases are disabled.
4. Movie Navigation
   - Users can click any movie from the sidebar to display its details in the main section.
5. Sold Out Indications
   - Sold-out movies are visually distinguished with a strikethrough style and a "Sold Out" label.


### Technologies Used
- **HTML**: Markup for structuring the app.
- **CSS**: Styling for the app's layout and design.
- **JavaScript**: Dynamic DOM manipulation and interaction.
- **JSON Server**: Simulates a backend API.


### Project Structure
```
Flatdango/
 index.html      # Main HTML file for the app
 index.css       # Stylesheet for the UI
 index.js       # JavaScript logic for fetching data and interaction
db.json         # Data file for the JSON server
```



### Setup Instructions

1. Install JSON Server
   Make sure you have json-server installed globally.  
 
   npm install -g json-server
  
2. Run the JSON Server 
   Start the server on port 3000:
   
   json-server --watch db.json
  
   The server will be available at http://localhost:3000.

3. Open the Project
   - Open the index.html file in a browser.



### How to Use the App
1. View the first movie's details upon page load.
2. Browse the list of movies in the sidebar.
3. Click on a movie to display its details.
4. Click the Buy Ticket button to purchase a ticket:
   - Available tickets decrease by one.
   - If tickets are sold out, the button text changes to "Sold Out," and the movie is visually styled as sold out.



###  Author 
Moureen Mutinda

### **License**
I used MIT License 


