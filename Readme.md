## DPG Gurugram, BBA-DM-II - Notes
### Unit - 1 : Introduction to website planning & development
[Unit-1_Notes-Link](https://docs.google.com/document/d/1j5yj4vjmUWX_t_YF2GUacqk9RJtvA2StznZo8TTqnHU/edit?tab=t.0)

---
### Unit - 2 : HTLM and CSS for digital marketers

### HTML / CSS 
**HTML :** HTML stands for **Hypertext Markup Language**. It's the standard markup language for creating web pages and web applications. HTML provides the structure and content of a webpage by using a system of tags and attributes.

These tags define the various elements of a webpage such as headings, paragraphs, links, images, forms, and more. Web browsers interpret HTML documents and render them into visual web pages for users to view and interact with on the internet.

### What is Tag, Attributes, Elements, and content?
1. **Tag :** Imagine tags like little instruction manuals for the web browser. They come in pairs, a start tag < and an end tag >  with the element name in between. For example, 
< h1> is a start tag for a heading element, and </ h1> is its closing tag.
   - **Ex -** img tag for image, p tag for paragraph, h1 to h6 for heading.

2. **Attributes :** Attributes provide additional information about HTML elements and are always specified in the opening tag of an element. Attributes are made up of a name and a value, separated by an equal sign (=) and enclosed in double or single quotes. Attributes modify the behavior or appearance of an element.
   - **Ex :** the href attribute in an < a> tag specifies the URL of the link, and the src attribute in an < img> tag specifies the source (URL) of an image.

3. **Content :** This is the information that goes between the start and end tags of an element. It can be text, images, videos, or even other HTML elements (elements can be nested within each other). The content determines what the user sees or interacts with on the webpage.
   - **Ex :** `<p>This is Paragraph Content</p>`

4. **Elements :** An element is a complete set of tags and their content, including the opening tag, closing tag, and any content nested within them. Together, they define a particular component or piece of content on a webpage.
   - **Ex :**`<p>This is a Paragraph.</p>`

### Type of Tag and Elements in HTML
### Type of Tag

1. **Semantic tag** - A semantic element clearly describes its meaning to both the browser and the developer.
Ex: < img>, < header>, < footer>, < article>, < table>
2. **Non-Semantic Tag** - div - block level elements, span - inline elements

1. **Self-Closing Tag**
   - **Definition:** Self-closing tags in HTML do not require a separate closing tag. They self-terminate with a slash at the end of the tag.
   - **Example:** input, br, hr, img, meta
2. **Seperate Closing Tag**
   - **Definition:** Separate closing tags are used for HTML elements that enclose content and require both an opening and a closing tag to define the content's boundaries.
   - **Example:** paragraph tag, ancher tag, heading tag

### Type of Elements
2. **Block level tag** - In HTML, block-level elements are elements that start a new line on a web page and take up the full width of their parent element.
Ex:  < div>, < p>, < h1> to < h6>, and < ul>, etc.
1. **inline tag** -  Inline elements are used within block-level elements to style or format specific parts of the content. They don’t start on a new line and only take up as much width as necessary.
Ex: < span>, < a>, < strong>, and < em>.

| Feature     | Block-Level Elements                          | Inline Elements                                       |
| ----------- | --------------------------------------------- | ----------------------------------------------------- |
| Line Breaks | Force line breaks before and after by default | Don't inherently create line breaks                   |
| Width       | Occupy full available width (by default)      | Only occupy space needed for their content            |
| Stacking    | Can stack vertically on top of each other     | Can flow horizontally alongside other inline elements |

### Image and Multimedia
**1. Image:** Used to embed images into a web page.
- **tag:** < img /> tag
- **Attributes:** 
  - **src:** (Required) Specifies the path to the image file.
  - **alt:** (Highly recommended) Provides alternative text for the image, essential for accessibility and SEO.
  - width: Sets the width of the image in pixels.
  - height: Sets the height of the image in pixels.

**2. Video:** Used to embed videos into a web page. 
- tag: video tag (Parent tag), source tag
- Attributes: 
  - src: (Required) Specifies the path to the video file.
  - controls: Adds playback controls (play, pause, volume, etc.).
  - autoplay: Starts playback automatically (use with caution for accessibility).
  - loop: Plays the video in a loop.
  - muted: Mutes the video by default.
  - type: Specifies the MIME type of the video file (optional, browser usually infers).
  - poster:  Sets an image to display before the video plays.
  - width: Sets the width of the video player in pixels.
  - height:  Sets the height of the video player in pixels.

**3. iframe:** Used to embed content from another website (like a YouTube video) directly into your web page.
- tag: iframe 
- attributes: 
  - src: (Required) Specifies the URL of the content to embed.
  - frameborder: Controls the display of a border around the iframe (0 for no border).
  - scrolling: Controls whether scrollbars appear in the iframe (e.g., "auto", "yes", or "no").
  - allowfullscreen: Enables fullscreen mode for the embedded content (if applicable).
  - width: Sets the width of the iframe in pixels.
  - height: Sets the height of the iframe in pixels.

**4. Audio:** Used to embed audio files into a web page.
- tag: audio tag < audio> & source tag < source/>.
- Attributes:
  - src: (Required) Specifies the path to the audio file.
  - controls: Adds playback controls (play, pause, volume, etc.).
  - autoplay: Starts playback automatically (use with caution for accessibility).
  - loop: Plays the audio in a loop.
  - muted: Mutes the audio by default.
  - type: Specifies the MIME type of the audio file (optional, browser usually infers).

## Heading in HTML
   - Six Heading Tag
   - h1 to h6

## Lecture 3
## Fonts tag in HTML
1. **b tag:** The < b> tag is used to make text bold. However, it doesn't carry any semantic meaning and is purely presentational.
2. **strong tag:** Similar to < b>, the < strong> tag also makes text bold, but it carries semantic weight, indicating that the enclosed text is of strong importance.
3. **i tag:** The < i> tag is used to italicize text. Like < b>, it doesn't carry any semantic meaning and is purely presentational.
4. **em tag:** Similar to < i>, the < em> tag italicizes text, but it carries semantic weight, indicating emphasis.
5. **u tag:** The < u> tag underlines text.
6. **s tag:** The < s> tag is used for strikethrough text, indicating that the content is no longer accurate or relevant.
7. **del tag:** Similar to < s>, the < del> tag also represents strikethrough text, but it carries semantic weight, indicating deleted text.
8. **mark tag:** The < mark> tag highlights text with a background color, typically yellow.
9. **sup:** The < sup> tag is used for superscript text, often used for mathematical expressions.
10. **sub:** The < sub> tag is used for subscript text, typically used for footnotes or chemical formulas.



### HTML List

- **Definition :** In HTML, a list is a way to organize and display related pieces of content in a structured format. Lists are useful for presenting information in a clear and organized manner, making it easier for users to understand the relationships between different items.

**Type of HTML List**

**1. Ordered List** An ordered list is defined using the < ol> tag in HTML. Each item within the list is defined using the < li> tag. By default, ordered lists display numbers (1, 2, 3...) to indicate the order of the items.
- Tag: ol tag (ordered list), li tag (list item)
- Attributes:
  - type: This attribute specifies the numbering or lettering style used for the list items. Here are the common options:
    - type="1" (default): Numbers the list items (1, 2, 3...)
    - type="a": Lowercase alphabetical lettering (a, b, c...)
    - type="A": Uppercase alphabetical lettering (A, B, C...)
    - type="i": Lowercase Roman numerals (i, ii, iii...)
    - type="I": Uppercase Roman numerals (I, II, III...)
  - start: This attribute allows you to define a starting number or letter for the list. For example, start="4" would begin the list with "4" instead of "1".
  - reversed: This attribute reverses the order of the numbering or lettering in the list.

**2. Unordered List:** An unordered list in HTML is used to represent a collection of items where the order doesn't necessarily matter. These lists are typically displayed with bullet points to visually group the items.
- An unordered list is defined using the < ul> tag in HTML.
- Each item within the list is defined using the < li> tag.
- By default, unordered lists display bullet points (●, ◦, etc.) for each list item.
- Tag: ul tag (unordered list), 
- Attribute: 
  - type="disc" (default): The standard disc bullet (●)
  - type="circle": A circle bullet (○)
  - type="square": A square bullet (■)
    
**3. Definition List:** Definition lists in HTML provide a structured way to define terms and their corresponding meanings. They are essentially like mini-glossaries embedded within your web page.
- Tag:
  - < dl>: This tag marks the beginning of the definition list.
  - < dt>: This tag defines the term being explained.
  - < dd>: This tag defines the description or definition of the term.
- Attribute: 
  - Definition lists are simple and don't have any specific attributes associated with their tags.
  - The structure relies on the proper nesting of tags:
  - The < dl> tag acts as a container for the entire definition list.
  - Within < dl>, each term being defined is wrapped in a < dt> tag.
  - The corresponding definition or description for the term goes inside a < dd> tag, always following the < dt> tag for the corresponding term.

# HTML Table - 24th Feb
**Table:** Tables are a fundamental way to structure and present data in a two-dimensional format (rows and columns) on web pages. They are ideal for displaying information that has clear relationships between different categories.
- Tag: < table>< /table>
- Attributes: 
  - **border:** Sets the width of the table's border (in pixels).
  - **cellpadding:** Defines the space between the cell content and its border (in pixels).
  - **cellspacing:** Defines the space between adjacent cells (in pixels).
  - **collapse:** Specifies how adjacent table borders should be rendered (e.g., collapse for merging borders).
  - **width:** Sets the width of the table (can be a percentage or pixel value).
  - **align:** Aligns the table within its container (e.g., left, center, right).

**Table Structure**
- **< table>:** Defines the beginning and end of the table.
- **< tr>:** Defines a table row. Each row contains cells.
- **< td>:** Defines a table data cell. Used for regular table content.
- **< th>:** Defines a table header cell. Typically used for column labels and styled differently (often bold and centered).

### Pratices Set - Table
   1. Table 1 -
      ![Table1](https://github.com/ErShubham2908/SushantUIUX-2025/blob/master/Assets/Table%201.png?raw=true)

   2. Table 2
    ![alt text](image-1.png) 

# HTML Form

**Form:** HTML forms are used to collect user input. They are defined using the < form> tag.

-   **Tag:**
    -   **Form tag:** Forms are created using the < form> element, which acts as a container for various form elements.
    -   **Label tag:** The **```<label>``` tag** defines a label for an ```<input>```, ```<select>```, ```<textarea>```, or ```<button>``` element. It improves accessibility by providing a clickable area that focuses its associated form element when clicked.
    -   **Attribute for label:**
        -   **for:** Specifies which form element a label is bound to. It should match the id attribute of the associated form element.
    -   **Input tag:** The ```<input>``` tag is used to create input fields within a form.
    -   **Attribute for input:**
        -   **type:** Specifies the type of input field. Common values include "text", "password", "checkbox", "radio", "submit", etc.
        -   **name:** Specifies the name of the input field. This is used to identify the field in the form submission.
        -   **value:** Specifies the initial value of the input field.
        -   **placeholder:** Specifies a short hint that describes the expected value of the input field (displayed when the field is empty).
        -   **required:** Specifies that the input field must be filled out before submitting the form.
        -   **disabled:** Specifies that the input field is disabled and cannot be edited.
        -   **readonly:** Specifies that the input field is read-only (cannot be edited by the user).
        -   **maxlength:** Specifies the maximum number of characters allowed in the input field.
        -   **size:** Specifies the width of the input field, in characters.
        -   **autocomplete:** Specifies whether the browser should automatically complete the input value based on the user's input history.
        -   **autofocus:** Specifies that the input field should automatically get focus when the page loads.

**Type Attribute in input tag:**

-   **text:** A single-line text input field.
-   **password:** A text field where the input is obscured (usually as asterisks) for security purposes.
-   **checkbox:** A checkbox that allows users to select multiple options.
-   **radio:** A radio button that allows users to select only one option from a group of options.
-   **submit:** A button that submits the form data to the server.
-   **button:** A button that can trigger custom JavaScript functions.
-   **file:** A file upload field that allows users to select files from their device.
-   **email:** A text field intended for entering an email address.
-   **number:** A text field intended for entering a numerical value.

### Question Set - 4
1. login Form - 1 ![form1](https://i.ytimg.com/vi/O4uDlYZpKa0/maxresdefault.jpg)
2. Registration From - 2 (Only Create Structure) ![Form2](https://miro.medium.com/v2/resize:fit:720/format:webp/1*-pSxnW8a_Jrgkq3T39AEzg.jpeg)
3. Please connect Both form, if user already register, they can move to login page, and vice versa and in both the form when user click on button login/signup, data with display in URL with proper key and value.
4. What is difference between Radio Button and Checkbox button.
5. create a profile using HTML, profile contain student Name, Education, DOB, Address and P-size Photo. detail about your education in detail, address in detail, hobby, interesst, skill, technology you know, project you completed in school and college.

## CSS - Cascading style sheet 
**CSS:** Which stands for Cascading Style Sheets, is a crucial language for web development. It defines how HTML elements are presented on a screen, in print, or on other media.

**1. inline CSS:** Inline CSS involves embedding styles directly within the HTML element tags using the style attribute. While convenient for quick modifications, it can clutter your HTML code and make it difficult to maintain for larger projects.

**2. internal CSS:** Internal CSS styles are defined within the < head> section of your HTML document using the < style> tag. This approach offers more organization than inline CSS and keeps your styles within the HTML file.

**3. external CSS:** External CSS is the preferred method for larger websites. Styles are written in a separate CSS file (.css extension) and linked to your HTML documents using the < link> tag within the < head> section. This promotes code reusability and easier maintenance, as you can update the styles in one central location and have them reflected across all linked webpages.

```
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

Prority - Inline > Internal > External

## CSS Selector

**1. Universal Selector (*):**

-   **Definition:** The universal selector matches any element type and is often used as a base style for all elements in a document.
-   **Syntax:** Simply use an asterisk (*) as the selector.
-   **Points:**
    -   The universal selector applies styles to all elements in the document unless overridden by more specific selectors.
    -   It's commonly used to reset default browser styles or to set consistent default styles across all elements.
-   **Example:**
    ```
    .class_name {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ```
    **2. group Selector:**
-   **Definition:** Group selectors allow you to apply the same styles to multiple selectors in a single declaration.
-   **Syntax:** Simply separate the selectors with commas.
-   **Points:**
    -   Group selectors help reduce redundancy in CSS code by combining multiple selectors that share the same styles.
    -   They improve code readability and maintainability by grouping related selectors together.
-   **Example:**
    ```
      h1, h2, h3{
        font-family: Arial, sans-serif;
      }
    ```

**3. Tag selector:**

-   **Definition:** Tag selectors target HTML elements based on their tag names.
-   **Syntax:** Simply use the tag name as the selector.
-   **Points:**
    -   Tag selectors apply styles to all elements of a particular tag type throughout the document.
    -   They are less specific than class or ID selectors and can be useful for applying broad styles to elements like paragraphs, headings, etc.
    -   Tag selectors can be combined with other selectors to make them more specific.
-   **Example:**
    ```
      p{
        font-size: 3em;
        border: 1px solid black;
      }
    ```
    **4. ID Selector: (#id_Name)**
-   **Definition:** ID selectors target HTML elements based on their unique ID attribute. IDs should be unique within a document, and each element should have only one ID.
-   **Syntax:** To select elements by ID, use a hash (#) followed by the ID name: #idname.
-   **Points:**
    -   IDs have higher specificity compared to classes, meaning they override class styles.
    -   IDs should be unique within a document, as using the same ID for multiple elements can lead to unexpected behavior.
    -   Unlike classes, IDs should generally be used sparingly, typically for elements that are unique and not repeated.
-   **Example:**
    ```
      #header{
        font-size: 24px;
      }
    ```
    **5. Class Selector: (.class_Name)**
-   **Definition:** Class selectors target HTML elements based on their class attribute. The class attribute can be applied to multiple elements, allowing you to style multiple elements with a single class.
-   **Syntax:** To select elements by class, use a period **(.)** followed by the class name: **.classname**.
-   **Points:**
    -   Classes are reusable and can be applied to multiple elements throughout a document.
    -   You can apply multiple classes to a single element by separating them with spaces in the HTML attribute.
    -   Class selectors have lower specificity compared to ID selectors, meaning they are overridden by IDs.
-   **Example:**
    -   ```
        .button{
          color: blue;
          font-size: 2em;
        }
        ```
## Font Properties

## Box-Model

The CSS box model is a fundamental concept in web design that defines how elements are structured and positioned on a web page. It's essentially a mental model that browsers use to render HTML elements on the screen. Understanding this model is crucial for building well-structured and visually appealing websites.

1. **Content:** This is the core area where your element's actual content resides. It can be text, images, videos, or any other web content. You can control the size of this area using the width and height properties in CSS.
2. **Padding:** Padding creates a transparent inner layer around the content. It adds space between the content and the border of the element. Padding is defined using the padding property, which accepts values for all four sides (top, right, bottom, left) or horizontally and vertically.
    - Padding can be set using properties like **padding-top,** **padding-right,** **padding-bottom,** and **padding-left**.
3. **Border:** The border surrounds the content and padding, providing a visual separation from other elements on the page. You can control the style (solid, dashed, dotted), color, and thickness of the border using properties like border-style, border-color, and border-width.
    - You can set border properties using **border-width**, **border-style**, and **border-color**.
4. **Margin:** Margin creates a transparent outer layer around the entire box (content, padding, and border). It adds space between the element and its neighboring elements. Margins are defined using the margin property, similar to padding.
    - Margin properties include **margin-top**, **margin-right**, **margin-bottom**, and **margin-left**.

**Benefits of the Box Model:**

-   **Precise control over element layout:** The box model allows you to define clear separations between elements using margins and padding.
-   **Responsive design:** By understanding how box model properties interact, you can create layouts that adapt to different screen sizes.
-   **Consistent visual appearance:** The box model ensures a consistent way for browsers to render elements across different platforms.

**Q. calculate height and width of card, in box-sizing border box, height is 300px, width is 350px, border, margin and padding is 20px each.**

## CSS Font Properties

In CSS, font properties are used to control the appearance of text on web pages. They allow you to specify various aspects of the font used, such as size, style, weight, and more. Here’s a breakdown of the main font properties:

**font-family:** Specifies the font family or list of fonts for an element. If the specified font is not available, the browser will use the next font in the list.

Syntax:
font-family: font1, font2, ...;
Example: font-family: Arial, Helvetica, sans-serif;

**font-size:** Sets the size of the font.
Syntax: font-size: value;
Example: font-size: 16px;

**font-style:** Specifies the style of the font, such as normal, italic, or oblique.
Syntax: font-style: normal | italic | oblique;
Example: font-style: italic;

**font-weight:** Sets the thickness or boldness of the font.
Syntax:
  font-weight: normal | bold | bolder | lighter | 100-900;
  Example: font-weight: bold;

**line-height:** Sets the height of each line of text.
Syntax:
  line-height: value;
  Example: line-height: 1.5;

**font:** Shorthand property that allows you to set all the font properties in one declaration.
Syntax:
  font: ```[font-style] [font-variant] [font-weight] [font-size]/[line-height] [font-family];```
  Example: font: italic small-caps bold 16px/1.5 Arial, sans-serif;


# CSS Position

The **position** property in CSS governs how an HTML element is positioned within a document's layout. It offers five distinct values that control the element's placement relative to its usual flow in the document or the viewport (the visible area of the browser window).
**1. Static - (Default):**
-   Elements with **position: static** (the default) occupy their standard position in the document's flow, meaning they're laid out one after another in the order they appear in the HTML code.
-   The **top**, **right**, **bottom**, and **left** properties have no effect on statically positioned elements.
-   ```
.absolute-element {
  position: absolute;
  top: 50px;
  right: 0;
}```

**2. Absolute**
    - Elements with position: absolute are removed from the document's flow and positioned relative to their nearest containing block (often the parent element or a block-level element like a < div>).
    - The top, right, bottom, and left properties are used to specify the absolute position of the element within its containing block.
    - Absolutely positioned elements create gaps in the document's flow where they would have been without absolute positioning.
  - ```
    .absolute-element {
      position: absolute;
      top: 50px;
      right: 0;
    } ```

**3. Relative**
   - Elements with position: relative remain in the document's flow but can be shifted relative to their original position using the top, right, bottom, and left properties.
   - These offset values are applied relative to the element's original position, not the viewport or any containing element.
   - Elements retain their place in the normal flow but can be offset using top, bottom, left, and right properties.
   - Offsets are relative to the element's original position in the flow.
   ```
   .relative-element {
        position: relative;
        top: 50px; 
        left: 20px;  
} 
```
**4. Sticky**
    - Combines aspects of relative and fixed.
    - Behaves like relative until it reaches a specific scroll position.
    - Then "sticks" to the viewport like fixed.
    - Useful for headers that stay visible until a certain point.
```
    .sticky-element {
        position: sticky;
        top: 5px; 
        left: 0;  
} 
```

**5. Fixed**
    - The element is removed from the normal document flow and positioned relative to the viewport. It stays in the same position even if the page is scrolled.
    - Positioned relative to the viewport and remains fixed even when scrolling.
    - Useful for navigation bars or sidebars that stay visible.
    - Uses top, right, bottom, and left properties for positioning.
    ```
    .fixed-element {
        position: fixed;
        top: 0;   
        left: 0;
}

# Box-Shadow and Text-Shadow in CSS

**1. Text Shadow:** The text-shadow property adds shadow to the text of an element. It creates a shadow effect behind the text to make it stand out or give it a more visually appealing appearance.

-   **CSS Property:**

`text-shadow: [horizontal offset] [vertical offset] [blur radius] [color];`
`box-shadow: [horizontal offset] [vertical offset] [blur radius] [color];`

-   **Horizontal Offset:** It specifies the horizontal distance of the shadow from the text. A positive value moves the shadow to the right, while a negative value moves it to the left.
-   **Vertical Offset:** It specifies the vertical distance of the shadow from the text. A positive value moves the shadow downwards, while a negative value moves it upwards.
-   **Extra :**
    -   **Offset:** Defines how far the shadow is positioned horizontally (x-axis) and vertically (y-axis) from the text. Values can be positive, negative lengths (px, em, rem), or percentages.
-   **Blur Radius:** It specifies the amount of blur applied to the shadow. A higher value creates a more blurred shadow effect.
-   **Color:** It specifies the color of the shadow. You can use color names, hexadecimal, RGB, RGBA, HSL, or HSLA values to define the color.
-   **Example:**

```
h1 {
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
}
```

**2. Box-Shadow:** The box-shadow property adds shadow effects to an element's box (such as a < div>). It creates a shadow behind the box, giving it depth and dimensionality.

**CSS Property:**

```
box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color] [inset];
```

-   **Horizontal Offset:** It specifies the horizontal distance of the shadow from the box. Positive values move the shadow to the right, and negative values move it to the left.
-   **Vertical Offset:** It specifies the vertical distance of the shadow from the box. Positive values move the shadow downwards, and negative values move it upwards.
-   **Blur Radius:** It specifies the amount of blur applied to the shadow. Higher values create a more blurred shadow effect.
-   **Spread Radius:** It specifies the spread of the shadow. Positive values expand the shadow, while negative values shrink it. This property is optional.
-   **Color:** It specifies the color of the shadow, using the same color value formats as text-shadow.

``` box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.5); ```   

# Display in CSS
**1. Display:block**
-  
- Definition: Block-level elements take up the full width available, starting a new line before and after the element.
- Key Benefits: They allow for easy manipulation of layout, such as setting width, height, margins, and padding.

```
.block-element {
    display: block;
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 5px;
    background-color: #f0f0f0;
}
```

**2. display: inline**  
-
- Definition: Inline elements only take up as much width as necessary and do not start on a new line.
- Key Benefits: They flow within the content and are ideal for elements that need to sit next to each other horizontally.

```
.inline-element {
    display: inline;
    margin-right: 10px;
    padding: 5px;
    background-color: #e0e0e0;
}
```

**3. display: inline-block**
-
- **Definition:** Inline-block elements are similar to inline elements in that they do not start on a new line, but they can have width, height, margins, and padding applied.
- **Key Benefits:** They combine the benefits of block and inline elements, allowing for block-level styling while flowing inline.

```
.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 75px;
    margin: 5px;
    padding: 3px;
    background-color: #d0d0d0;
}

```

**What is difference between Block, Inline-block and inline**
---

| Feature            | Block                      | Inline-Block                 | Inline                      |
|--------------------|----------------------------|------------------------------|-----------------------------|
| **Starts on a new line?** | ✅ Yes              | ❌ No                       | ❌ No                       |
| **Takes full width?** | ✅ Yes (by default)         | ❌ No (only as much as needed) | ❌ No (only as much as content) |
| **Can set width & height?** | ✅ Yes                        | ✅ Yes                        | ❌ No                         |
| **Respects margin & padding?** | ✅ Yes (all sides)         | ✅ Yes (all sides)         | ⚠️ Only horizontal (left & right) |
| **Stacks on top of each other?** | ✅ Yes                        | ❌ No (placed inline)      | ❌ No (placed inline)       |
| **Common elements** | `<div>`, `<p>`, `<section>`   | `<button>`, `<img>`, `<input>` | `<span>`, `<a>`, `<strong>`  |
| **Best use case** | Structure/layout (e.g., sections, containers) | Inline elements that need size control (e.g., buttons, menus) | Small text elements that flow naturally |
---


# Display : Flex

**1. Flex & inline-flex**  
-
-  **display: flex;** → Makes an element a block-level flex container. 
  ```
  .container{
      display: flex;
  }
  ```
-  **display: inline-flex;** → Makes an element an inline-level flex container.  
  ```
  .container{
      display: inline-flex;
  }
  ```

**2. flex-direction  (Defines the Direction of Items)**
-
- Determines the main axis along which items are placed.   
|Value|Effect|
  |---|---|
  |**row (default)**| Items align horizontally (left to right)|
  |**row-reverse** | Items align horizontally (right to left)|
  |**column** | Items align vertically (top to bottom)|
  |**column-reverse** | Items align vertically (bottom to top) |

```
.container {
    display: flex;
    flex-direction: column;
}
```

**3. justify-content (Aligns Items Horizontally)**
-
- Determines the main axis along which items are placed.  

|Value|Effect| 
|---|---|
|**flex-start (default)**|	Items align to the start (left in row, top in column)|
|**flex-end**|	Items align to the end (right in row, bottom in column)|
|**center**|	Items center along the main axis.|
|**space-between**|	Items are evenly spaced, first and last touching edges|
|**space-around**|	Items are evenly spaced, with gaps on both sides|
|**space-evenly**|	Items are evenly distributed, with equal spacing everywhere|
---

```
.container {
    display: flex;
    justify-content: space-between;
}
```

**4. align-items (Aligns Items Vertically)**
-
- Controls how items are aligned along the cross-axis.  

|Value | Effect | 
|--- | --- |
|**stretch (default)**|	Items stretch to fill container height|
|**flex-start**| Items align at the top (or left in column)|
|**flex-end**|	Items align at the bottom (or right in column)|
|**center**|	Items center vertically|
|**baseline**|	Items align based on their text baseline|
---

```
.container {
    display: flex;
    align-items: center;
}
```

**5. flex-wrap (Handles Item Wrapping)**  
-
- Determines whether items should wrap to the next line if they don’t fit.

|Value |	Effect|
|--- | --- | 
|**nowrap (default)**|	Items do not wrap and may overflow|
|**wrap**|	Items wrap to a new row/column if needed|
|**wrap-reverse**|	Items wrap in reverse order|
---
```
.container {
    display: flex;
    flex-wrap: wrap;
}
```

**6. gap (Adds Space Between Items)**
-
- Sets spacing between flex items.  
```
.container {
    display: flex;
    gap: 20px;
}
```

# Media Query in CSS

A media query in CSS is used to apply different styles based on the device's screen size, resolution, or other properties. It helps create responsive designs that adjust to different screen sizes.   

**Syntax:**
```
@media (max-width: 768px) {
    .parent {
        background-color: lightblue;
    }
}

```
- **@media (max-width: 768px):** This media query applies styles only when the screen width is 768 pixels or smaller.
- The .parent element will have a lightblue background when viewed on devices with a width of 768px or less.

**📌 Common Breakpoints for Different Screen Sizes**
-

|Device Type|	Screen Width (px)|
|---|---|
|**Extra Small (Phones)**|	max-width: 480px |
|**Small (Tablets - Portrait)**| max-width: 768px |
|**Medium (Tablets - Landscape, Small Laptops)**|	max-width: 1024px|
|**Large (Desktops, Laptops)**|	max-width: 1200px|
|**Extra Large (Large Screens, TVs)**|	min-width: 1201px|
---

```
/* Extra Small Devices (Phones) */
@media (max-width: 480px) {
    body {
        font-size: 14px;
    }
}

/* Small Devices (Tablets in Portrait Mode) */
@media (max-width: 768px) {
    body {
        font-size: 16px;
    }
}

/* Medium Devices (Tablets in Landscape, Small Laptops) */
@media (max-width: 1024px) {
    body {
        font-size: 18px;
    }
}

/* Large Devices (Laptops, Desktops) */
@media (max-width: 1200px) {
    body {
        font-size: 20px;
    }
}

/* Extra Large Screens (TVs, Large Monitors) */
@media (min-width: 1201px) {
    body {
        font-size: 22px;
    }
}
```





