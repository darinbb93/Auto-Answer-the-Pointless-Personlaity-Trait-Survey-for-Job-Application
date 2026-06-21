// === LIST OF LABEL TEXTS YOU WANT SELECTED ===
const targets = [
    "Able to take care of myself",
    "Accepts advice readily",
    "Accurate",
    "Amiable",
    "Appreciative",
    "Agreeable",
    "Businesslike",
    "Can be frank and honest",
    "Careful",
    "Controlled",
    "Cooperative",
    "Conscientious",
    "Diplomatic",
    "Direct",
    "Encouraging to others",
    "Enthusiastic",
    "Even tempered",
    "Firm but just and fair",
    "Friendly",
    "Gentle",
    "Good natured",
    "Grateful person",
    "Helpful",
    "Honest",
    "Independent",
    "Kind and reassuring",
    "Likes responsibility",
    "Logical",
    "Makes a good impression",
    "Modest",
    "Outgoing",
    "Respected by others",
    "Reserved",
    "Self-confident",
    "Self-reliant and assertive",
    "Self-respecting",
    "Sociable and neighbourly",
    "Straightforward and direct",
    "Strong willed",
    "Sympathetic",
    "Tactful",
    "Thorough",
    "Trustworthy",
    "Well disciplined",
    "Well thought of",
    "Warm"
];

// normalise text for reliable matching
const normalise = str =>
    str.trim().toLowerCase().replace(/\s+/g, " ");

// find all labels
const labels = document.querySelectorAll("label.drawCheckboxLabels");

labels.forEach(label => {
    const labelText = normalise(label.textContent);

    const match = targets.some(
        t => normalise(t) === labelText
    );

    if (match) {
        const checkboxId = label.getAttribute("for");
        const checkbox = document.getElementById(checkboxId);

        if (checkbox && !checkbox.checked) {
            // simulate real user click
            label.click();

            console.log("Selected:", label.textContent.trim());
        }
    }
});