This HTML, CSS, and JavaScript code create a simple web page that includes a button and an h1 heading. When the button is clicked, the background color of the page changes randomly, and the h1 heading displays the corresponding RGB values. Additionally, if the randomly generated color is dark (R, G, and B values less than 100), the text color of the body becomes white; otherwise, it becomes black.

Here's a brief description of each part of the code:

1. **HTML (index.html):**
   - Sets up the basic structure of an HTML document.
   - Includes a meta tag for character set and viewport settings.
   - Links an external CSS file (`app.css`).
   - Contains a div with the class "center" that wraps an h1 heading and a button.
   - Includes a script tag linking an external JavaScript file (`color.js`).
   
2. **JavaScript (color.js):**
   - Selects the button and adds a click event listener to it.
   - On button click, generates random RGB values and sets the background color of the body accordingly.
   - If the generated color is dark, sets the text color of the body to white; otherwise, it sets it to black.
   - Updates the h1 heading with the current RGB values.

3. **CSS (app.css):**
   - Applies a universal reset for margin, padding, and box-sizing.
   - Styles the "center" class to display its content in the center of the page with a flex container.
   - Styles the button with a specific width, height, border, border-radius, and font size.

In summary, the code creates a dynamic and interactive webpage where the user can click a button to change the background color randomly, with corresponding adjustments to text color based on the brightness of the generated color.
