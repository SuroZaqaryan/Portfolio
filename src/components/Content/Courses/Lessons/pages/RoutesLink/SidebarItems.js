const SidebarItems = [
    { CourseTopic: "Introduction" },
    "Introduction",
    "Creating Your First Javascript",
    "Comments",
    "Let",
    "Variables",
    "Data Types",
    { CourseTopic: "Objects and Strings" },
    "Objects",
    "Events",
    "Strings",
    "String Methods",
    { CourseTopic: "ECMAScript 6" },
    "Intro to ES6",
    "ES6 Variables and Strings",
    "Loops and Functions in ES6",
    "ES6 Objects",
    "Rest & Spread",
    "ES6 Destructuring",
    "ES6 Classes",
    "ES6 Map & Set",
    { CourseTopic: "DOM & Events" },
    "DOM",
    "Selecting Elements",
    "Changing Elements",
].map((itemName) => {
    if (typeof itemName === "string") {
        return {
            name: itemName,
            CourseTopic: itemName.CourseTopic || "",
            route: `/${itemName}`,
        };
    } else {
        return {
            name: itemName.name,
            CourseTopic: itemName.CourseTopic,
            route: `/${itemName.names}`,
        };
    }
});

export default SidebarItems;