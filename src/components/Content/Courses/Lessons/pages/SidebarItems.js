const SidebarItems = [
    { CourseTopic: "Introduction" },
    "Introduction",
    "Creating Your First JavaScript",
    "Comments",
    "Module 1 Quiz",
    "Variables",
    "Data Types",
    { CourseTopic: "Objects" },
    "Introducing Objects",
    "Creating Your Own Objects",
    "Object Initialization",
    "Adding Methods",
    { CourseTopic: "ECMAScript 6" },
    "Intro to ES6",
    "ES6 Variables and Strings",
    "Loops and Functions in ES6",
    "ES6 Objects",
    "Rest & Spread",
    "ES6 Destructuring",
    "ES6 Classes",
    "ES6 Map & Set",
    "More on ES6",
    { CourseTopic: "DOM & Events" },
    "What is DOM?",
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