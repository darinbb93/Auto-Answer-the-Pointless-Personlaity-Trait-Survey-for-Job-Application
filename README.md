# Auto-Answer-the-Pointless-Personlaity-Trait-Survey-for-Job-Application
# Job Application Personality Survey Auto-Selector

While applying for jobs, I kept running into the same personality trait surveys where you're asked to select a list of characteristics that best describe you. Whether they're officially scored or not, many applicants feel these assessments are looking for a particular combination of traits that employers value.

Rather than spending several minutes reading through hundreds of options every time, I used AI to help identify a consistent list of commonly desirable workplace traits and wrote a simple JavaScript browser-console script that automatically selects the matching checkboxes.

I'm sharing this project for anyone who wants to save time when completing repetitive job application personality questionnaires. The script is lightweight, easy to customise, and can be adapted to similar HTML checkbox forms by simply editing the target list.

## Features

* Automatically selects predefined personality traits from an HTML checkbox list
* Case-insensitive text matching with whitespace normalisation
* Simulates real user clicks instead of directly modifying checkbox states
* Prevents already selected items from being toggled
* Easily customisable target trait list

## Feedback Welcome

I'm also interested in improving the default trait list. If you have experience with recruitment, HR, organisational psychology, or you've noticed certain personality traits appearing consistently in hiring assessments, feel free to suggest additions or changes.

**Keywords:** JavaScript, browser console, checkbox automation, HTML form automation, job application helper, personality assessment, personality test, browser script, DOM scripting, automated checkbox selection, recruitment questionnaire.

## Usage

1. Open the personality survey page in your browser.
2. Press **F12** (or **Ctrl + Shift + I**) to open the Developer Tools.
3. Select the **Console** tab.
4. Copy and paste the script into the console.
5. Edit the `targets` array if you want to customise the list of personality traits.
6. Press **Enter** to execute the script.

The script will:

* Search the page for all matching checkbox labels.
* Compare each label against the predefined `targets` list.
* Simulate a normal user click on any matching checkbox that is not already selected.
* Print the selected traits to the console for verification.

### Customising the Target List

Simply edit the `targets` array:

```javascript
const targets = [
    "Accurate",
    "Friendly",
    "Trustworthy",
    "Well disciplined"
];
```

You can add, remove, or reorder traits to suit your own preferences or experiment with different combinations.

### How It Works

The script uses the browser's built-in JavaScript engine to:

* Read the visible text of each label.
* Perform a case-insensitive comparison with the predefined target list.
* Trigger a real click event on matching checkboxes, ensuring compatibility with most modern HTML forms and custom checkbox implementations.

No browser extensions, external libraries, or installation steps are required—just paste the script into the browser console and run it.
