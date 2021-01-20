'use strict';


// clear comments from local storage 
//store comments in an array

// add all the books  one array to one local storage and if that key exists take it from that key so you don't lose the comments ..p.s same as buss mall guys.......

// only make  new boooks if the local storage key that you are using doesn't have the books that you made  ...
var books = JSON.parse(localStorage.getItem("books"));
var currentBookIndex=localStorage.getItem("currentBookIndex");
renderBookDetails(currentBookIndex);//the selected book index 
function renderBookDetails(index) {
    var pageImage = document.getElementById("img1");
    pageImage.src = books[index].img;

    var title = document.getElementById("title");
    title.textContent = "Book Title :" + books[index].title;

    var author = document.getElementById("Author");
    author.textContent = "Book's Author :" + books[index].author;

    var publisher = document.getElementById("Publisher");
    publisher.textContent = " Publisher :" + books[index].publisher;

    var topic = document.getElementById("topics");
    topic.textContent = " Topic :" + books[index].section;


    var description = document.getElementById("description");
    description.textContent = "Book Description: " + books[index].description;

    var downLoad = document.getElementById("down");//a
    console.log("bk link" + books[index].downLoadLink);
    downLoad.href = books[index].downLoadLink;


}
/** Comment Constructor*/
var commentsArray = [];
/** Comment Constructor*/
function Comment(name, comment,index) {
    this.name = name;
    this.comment = comment;
    this.index=(index);
    commentsArray.push(this);
}
if(localStorage.getItem("comments")!==null){
    if (localStorage.getItem("comments").length !== 0) {
        commentsArray = getComments();
        renderComment();
        console.log(commentsArray);
    }
}
//renderComment();
function getComments(){
     commentsArray=JSON.parse(localStorage.getItem("comments"))  
}
var bookComment = document.getElementById("bookComment");
bookComment.addEventListener("submit", function(event) {
     event.preventDefault();
    var commentText = event.target.comment.value;
    var name=event.target.name.value;
    var index=currentBookIndex;
    new Comment(name,commentText,currentBookIndex);
    saveComments(commentsArray);
    renderComment();});
function renderComment() {
    var commentDiv = document.getElementById("comments");
    clearComments();
    for (var i = 0; i < commentsArray.length; i++) {
        if(commentsArray[i].index==currentBookIndex){
        var p = document.createElement("p");
        var line = document.createElement("hr");
        p.textContent = commentsArray[i].name + " : " + commentsArray[i].comment;
        commentDiv.appendChild(p);
        commentDiv.appendChild(line);
    }
    }
    console.log(commentsArray);
}

function clearComments(commentDiv) {
    var commentDiv = document.getElementById("comments");
    commentDiv.textContent = "";
}

function saveComments(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function getComments() {
    return JSON.parse(localStorage.getItem("comments"));
}
// var books = [];

// function Book(section, title, author, publisher, description, img, downLoadLink) {
//     this.section = section;
//     this.title = title;
//     this.description = description;
//     this.author = author;
//     this.publisher = publisher;
//     this.img = img;
//     this.url = downLoadLink;
//     this.bookComments = []; 
//     books.push(this);

// }
// // if (key exist)
// // parse local storage
// //else
// //{

// if (localStorage.objects){
//     console.log('we  have books')
//     var books = JSON.parse(localStorage.getItem('objects'));
//     console.log(books)
// }else {


// new Book(
//     "programming",
//     "Beginning Python",
//     "Peter C. Norton, Alex Samuel, Dave Aitel",
//     "Wiley Pub",
//     "This tutorial offers readers a thorough introduction to programming in Python 2.4, the portable, interpreted, object-oriented programming language that combines power with clear syntax Beginning programmers will quickly learn to develop robust, reliable, and reusable Python applications for Web development, scientific applications, and system tasks for users or administrators Discusses the basics of installing Python as well as the new features of Python release 2.4, which make it easier for users to create scientific and Web applications Features examples of various operating systems throughout the book, including Linux, Mac OS X/BSD, and Windows XP",
//     "../books/programming/Beginning Python.jpg",
//     "http://libgen.gs/ads.php?md5=8b7f9439ff75aeac89b8748bdbc1e1d3");
// new Book("programming",
//     "Exploring Python",
//     "Markus Nix",
//     "Entwickler",
//     "Tipps von Profis für Profis erwarten Sie in diesem Buch. Leidenschaftliche Python-Liebhaber und -Experten öffnen ihre Schatzkisten und sorgen dafür, dass erfahrene Programmierer und Entwickler noch effektiver mit Python programmieren. Schließlich wurde Python mit dem Ziel entworfen, das Programmieren schnell, einfach und übersichtlich zu machen. Wolfgang Weitz beleuchtet, wie sich Python und die Java-Welt verbinden. Michael Weigend zeigt, wie man OO-Konzepte in Python umsetzt. Torsten Marek illustriert, wie man mit Generatoren arbeitet. Martin Grimme führt in die Welt von gDesklets ein und Christian Tismer öffnet die Türen zu seinem PyPy-Projekt.",
//     "../books/programming/Exploring Python.jpg",
//     "http://libgen.gs/ads.php?md5=aee7239ffcf7871e1d6687ced1215e22");

// new Book("programming",
//     "Making use of Python",
//     "Rashi Gupta",
//     "John Wiley & Sons",
//     "Python is a multipurpose development language that can be used on virtually every platform. It offers built-in support for critical development steps including data structures, dynamic typing, and dynamic building. It can be used in lieu of Java or C++, and Python scripts can be developed in a fraction of the time it takes to program and debug higher-level languages. * Covers language basics and how to use Python for CGI scripting, GUI development, network programming, and much more * Demonstrates why Python is arguably the most sophisticated of the popular scripting languages and why its popularity continues to grow.",
//     "../books/programming/Making use of Python.jpg",
//     "http://libgen.gs/ads.php?md5=31debc732ae60d265ba551a112fbe6bd");

// new Book("programming",
//     "Python and XML",
//     "Christopher A. Jones, Fred L. Drake Jr",
//     "O'Reilly",
//     "Python is an ideal language for manipulating XML, and this new volume gives you a solid foundation for using these two languages together. Complete with practical examples that highlight common application tasks, the book starts with the basics then quickly progresses to complex topics like transforming XML with XSLT and querying XML with XPath. It also explores more advanced subjects, such as SOAP and distributed web services.",
//     "../books/programming/Python and XML.jpg",
//     "http://libgen.gs/ads.php?md5=3875bcb342df8e247f975ac990821ac5")

// new Book("programming",
//     "C Programming Language",
//     "Brian W. Kernighan, Dennis M. Ritchie",
//     "Prentice Hall",
//     "This second editon describes C as defined by the ANSI standard. This book is meant to help the reader learn how to program in C. The book assumes some familiarity with basic programming concepts like variables, assignment statements, loops, and functions. A novice programmer should be able to read along and pick up the language.",
//     "../books/programming/C Programming Language.jpg",
//     "http://libgen.gs/ads.php?md5=c684be9c0147b68596683222502675fb");

// new Book("programming",
//     "How debuggers work",
//     "Jonathan B. Rosenberg",
//     "Wiley",
//     "A total guide to debuggers: what they do, how they work, and how to use them to produce better programs Debuggers are the magnifying glass, the microscope, the logic analyzer, the profiler, and the browser with which a program can be examined.-Jonathan B. RosenbergDebuggers are an indispensable tool in the development process. In fact, during the course of the average software project, more hours are spent debugging software than in compiling code. Yet, not many programmers really know how to constructively interpret the results they get back from debuggers. And even fewer know what makes these complex suites of algorithms and data structures tick. Now in this extremely accessible guide, Jonathan B. Rosenberg demystifies debuggers for programmers and shows them how to make better use of debuggers in their next projects.Taking a hands-on, problem-solving approach to a complex subject, Rosenberg explains how debuggers work and why programmers use them. Most importantly, he provides practical discussions of debugger algorithms and procedures for their use, accompanied by many practical examples. The author also discusses a wide variety of systems applications, from Microsoft s Win32 debug API to a large parallel architecture.",
//     "../books/programming/How debuggers work.jpg",
//     "http://libgen.gs/ads.php?md5=3f4e8960ce45f23da38e3eba0628f146");


// //litreture
// new Book("litreture",
//     "The Zombie Survival Guide: Complete Protection from the Living Dead",
//     "Max Brooks",
//     "Three Rivers Press",
//     "The Zombie Survival Guide is your key to survival against the hordes of undead who may be stalking you right now. Fully illustrated and exhaustively comprehensive, this book covers everything you need to know, including how to understand zombie physiology and behavior, the most effective defense tactics and weaponry, ways to outfit your home for a long siege, and how to survive and adapt in any territory or terrain. Top 10 Lessons for Surviving a Zombie Attack 1. Organize before they rise! 2. They feel no fear, why should you? 3. Use your head: cut off theirs. 4. Blades donвЂ™t need reloading. 5. Ideal protection = tight clothes, short hair. 6. Get up the staircase, then destroy it. 7. Get out of the car, get onto the bike. 8. Keep moving, keep low, keep quiet, keep alert! 9. No place is safe, only safer. 10. The zombie may be gone, but the threat lives on. DonвЂ™t be carefree and foolish with your most precious assetвЂ”life. This book is your key to survival against the hordes of undead who may be stalking you right now without your even knowing it. The Zombie Survival Guide offers complete protection through trusted, proven tips for safeguarding yourself and your loved ones against the living dead. It is a book that can save your life.",
//     "../books/litreture/The Zombie Survival Guide.jpg",
//     "http://libgen.gs/ads.php?md5=dfe847a9123b272914195c7428dff846");



// new Book("litreture",
//     "The Big Book of the 70's",
//     "Jonathan Vankin",
//     "DC Comics",
//     "Back when irony was just a literary device and people wore bell-bottomsfor their own sake, Western civilization reached its zenith and nadirsimultaneously. Jonathan Vankin's Big Book of the '70s looks insurprising depth at the trends and the notable figures of that decade, usingillustrations from dozens of excellent comics artists like Shary Flenniken andTerry Laban. Richard Nixon, Jane Fonda, Burt Reynolds, and Jimmy Carter all getthe Big Book treatment in a delicious combination of behind-the-scenespeeks and easily digested history lessons. Fads and phenomena like disco,running, and the rise of the women's movement are also explained and, in somecases, followed up through modern times. The writing is clear and snappy, theillustration is consistently well-done, and the topics chosen are a thorough,comprehensive mix of lightweight (pet rocks) and serious (Vietnam). --RobLightner",
//     "../books/litreture/The Big Book of the 70.jpg",
//     "http://libgen.gs/ads.php?md5=032d77b9a93e2c83f88a1148179af424");



// new Book("litreture",
//     "Flight 714 (The Adventures of Tintin 22)",
//     "Herge",
//     "casterman",
//     "The Adventures of TinTin - Comic book formatA Qantas Boeing 707 touches down at Kemajoran ariport, Djakarta. Fight 714 from London arrives in Java, last stop before Sydney, Australia...",
//     "../books/litreture/Flight 714.jpg",
//     "http://libgen.gs/ads.php?md5=aff374494ebee92b9e95ee8e026d0f93");



// new Book("litreture",
//     "Amphigorey (Perigee)",
//     "Edward Gorey",
//     "Perigee Trade",
//     "A collection of the Edward Gorey`s haunting and surreal graphic stories and verses: The Unstrung Harp, The Listing Attic, The Doubtful Guest, The Object-Lesson, The Bug Book, The Fatal Lozenge, The Hapless Shild, The Curious Sofa, The Willowdale Handcar, The Gashlycrumb Tinies, The Insect God, The West Wing, The Wuggly Ump, The Sinking Spell, The remembered Visit.",
//     "../books/litreture/Amphigorey.jpg",
//     "http://libgen.gs/ads.php?md5=2428f245e2fa6ece44af8966aeed5139");

// new Book("litreture",
//     "Day",
//     "Elie Wiesel",
//     "Hill and Wang",
//     "The publication of Day restores Elie Wiesel's original title to the novel initially published in English as The Accident and clearly establishes it as the powerful conclusion to the author's classic trilogy of Holocaust literature, which includes his memoir Night and novel Dawn. In Night it is the I who speaks, writes Wiesel. In the other two, it is the I who listens and questions.",
//     "../books/litreture/Amphigorey.jpg",
//     "http://libgen.gs/ads.php?md5=2f51ab0bbeac6fad23d256489235cfba");


// new Book("litreture",
//     "The Routledge Companion to Comics",
//     "Frank Bramlett, Roy T Cook, Aaron Meskin",
//     "Routledge",
//     "the history of the temporal, geographical, and formal development of comics, including topics like art comics, manga, comix, and the comics code; ... new perspectives on comics genres, from funny animal comics to war comics to romance comics and beyond.",
//     "../books/litreture/The Routledge Companion to Comics.jpg",
//     "http://libgen.gs/ads.php?md5=f02f148c6ffcf0536a59f36ae8cae847");





// //business
// new Book("business",
//     "Writing your doctoral dissertation: invisible rules for success",
//     "Rita S. Brause",
//     "Routledge",
//     "A practical guide for students with help on planning, writing and defending a dissertation*Provides samples of accepted proposals and dissertationsIncreasing numbers of adults are enrolling in doctoral programs, but their earlier college lives often do not prepare them for the rules of academic game. Many have no idea what a dissertation proposal or an accepted dissertation looks like, how it gets that way, or what options are available to them. There is a real need for explicit information on what this highly complex and interactive, social and political process involves.The book is a practical guide for students who need help in progressing from the decision to write a dissertation to the planning, writing and defending of it. It includes samples of proposals and dissertations that have been accepted and data drawn from a number of source, including focus groups with doctoral students and graduates and responses to an open-ended questionnaire from doctoral students across the United States.",
//     "../books/business/Writing your doctoral dissertation.jpg",
//     "http://libgen.gs/ads.php?md5=13b2cf453770c38040ae78df586bb65a"
// );

// new Book("business",
//     "Logistics: An Introduction to Supply Chain Management",
//     "Donald Waters",
//     "Palgrave Macmillan",
//     "Logistics is an essential introduction for any business student studying logistics or supply chain management. It takes a broad view of logistics, exploring all the main concepts within a wide business context, with a strong focus on application and practical situations. This clear and well-written text gives a very up-to-date perspective on this fast moving field. It explores the management of logistics and its strategic role within an organization, while examining new developments in the field and providing an international dimension to the subject.", "../books/business/An Introduction to Supply Chain Management.jpg",
//     "http://libgen.gs/ads.php?md5=06fd645a591ccc33fae3207e57b73fc3");
// new Book("business",
//     "Building an Import/Export Business",
//     "Kenneth D. Weiss",
//     "Wiley",
//     "The fourth edition of Building an Import/Export Business is dedi-cated to the managers and staff of the United States Departmentof Homeland Security. They have the very difficult task of allow-ing legitimate trade to flow while blocking imports and exportsthat might bring harm to the United States.This huge and relatively new government agency includes theTransportation Security Administration (TSA), which protectsthe nation’s transportation systems to ensure freedom of move-ment for people and commerce. It also includes United StatesCustoms and Border Protection (CBP), which is responsible forprotecting the nation’s borders against terrorists and terrorismwhile facilitating the flow of legitimate trade and travel. In addi-tion, it includes the United States Immigration and CustomsEnforcement (ICE), which is charged with finding and eliminatingvulnerabilities in the nation’s border, economic, transportationand infrastructure security.Imagine 30,000 sealed shipping containers entering the UnitedStates every day through ports on all borders, and the enormoustask of deciding which ones to detain and inspect. It boggles themind, yet it is being done to the best of the DHS’s ability, guidedby ever-changing legislation and its interpretation. I congratulateeveryone who is involved in this difficult but vital endeavor.",
//     "../books/business/Building an ImportExport Business.jpg",
//     "http://libgen.gs/ads.php?md5=16cc10b4886bebb96c4d1ba76b312020");
// new Book("business",
//     "ERP: The Dynamics of Supply Chain and Process Management",
//     "Avraham Shtub, Reuven Karni (auth.)",
//     "Springer US",
//     "ERP: The Dynamics of Supply Chain and Process Management is a complete updating and expansion of Avraham Shtub’s award-winning 1999 text Enterprise Resource Planning (ERP): The Dynamics of Operations Management. New chapters, written together with his co-author Reuven Karni, cover enterprise process modeling; design of business processes; a complete revision of the original chapter on the integrated order-fulfillment process using ERP; business process management; business process improvement; and a new appendix on simulating process life cycles: using serious games as teaching aids.",
//     "../books/business/The Dynamics of Supply Chain and Process Management.jpg",
//     "http://libgen.gs/ads.php?md5=ec814dc0b27019a42e66b0ba2f59f1c2 ");
// new Book("business",
//     "Compliance in Today's Global Supply Chain",
//     "Thomas A. Cook",
//     "CRC Press",
//     "One of the newest and fastest growing corporate positions is that of global trade compliance manager. This position used to be an insignificant factor in most corporations, but the events surrounding 9/11 changed that forever. Compliance became a household word in businesses involved in importing and exporting. Unfortunately, when corporations begin setting up initiatives to become compliant, they often have to seek the support of outside counsel, consultants, and specialists, because there is no single resource that allows them to accomplish this work independently.Rising above the myriad diverse resources for the compliance manager, Compliance in Today's Global Supply Chain is the definitive compilation and one-step \"go to\" resource for the executive engaged in global supply chains seeking compliance with government regulations. It provides a step-by-step blueprint for developing a compliance program and making it cost-effective within a corporation’s supply chain operation. Offering the perspective of one the nation’s most respected and informed experts on global supply chains, it defines emerging regulations that impact global trade. Emphasizing the importance of training programs and continuing education, it also shows how to educate senior management to ensure and maintain success and includes a list of resources to keep up with the changing import/export landscape.Providing the company and the manager responsible for supply chain compliance with the necessary tools to initiate all the steps to secure a corporate compliance program in their global supply chain, Compliance in Today's Global Supply Chain is destined to be the \"resident bible\" for current and future managers of global supply chains",
//     "../books/business/Compliance in Today's Global Supply Chain.jpg",
//     "http://libgen.gs/ads.php?md5=d990004c4f5c12ade9d01407e41cd7a8 ");

// new Book("business",
//     "E-Commerce Security: Advice from Experts",
//     "Mehdi Khosrow-Pour, Lawrence Oliva",
//     "Cybertech Publishing",
//     "Essays by and interviews with academics and consultants address issues of security in e-commerce-a realm where the cost of misuse and criminal activities is now estimated to exceed $10 billion a year. The experts in question discuss security risks and the management of e-commerce practices and solutions which can be adopted by organizations of all types and sizes that rely on e-commerce for their day-to-day business. The CyberTech imprint is a subsidiary of Idea Group Publishing",
//     "../books/business/E-Commerce Security Advice from Experts.jpg",
//     "http://libgen.gs/ads.php?md5=80b2023922628200b6dc8590b3143f0b");
// } 
// //}

// console.log(books[0]);


// var bookName = JSON.parse(localStorage.getItem('bookname'));
// console.log(bookName + "dfgbastb");

// // if(bookName in books){
// //     console.log(books[bookName]);
// // }



// var pageImage = document.getElementById("img1");
// var downLoad = document.getElementById("download");


// for (var i = 0; i < books.length; i++) {
//  if (books[i].title===bookName){
//     renderpics(i);
//     renderpage(i);
//     console.log(books[i].bookComments[0]);
//    if(books[i].bookComments[0]){
//     localStorage.setItem("comments", JSON.stringify(books[i].bookComments));
//    }
//     // enter the object and get the comment property and add it to the local storage
//  }

//     // downloadButton(i); 

// }



// function renderpics(ImageOne) {

//     pageImage.src = books[ImageOne].img;
// }


// function renderpage(name) {

//     var title = document.getElementById("title");
//     title.textContent = "Book Title :" + books[name].title;

//     var Author = document.getElementById("Author");
//     Author.textContent = "Book's Author :" + books[name].author;

//     var Publisher = document.getElementById("Publisher");
//     Publisher.textContent = " Publisher :" + books[name].publisher;

//     var Topic = document.getElementById("topics");
//     Topic.textContent = " Topic :" + books[name].section;

//     var rate = document.getElementById("rate");
//     rate.textContent = "rate:";


//     var description = document.getElementById("description");
//     description.textContent = "Book Description: " + books[name].description;

//     var downLoad = document.getElementById("down");
//     downLoad.setAttribute("href", books[name].url);
//     // downLoad.href = books[name].url; 


// }


// // function downloadButton(link){
// //  var download = document.getElementById("myButton").onclick; 
// //  download.href = books[link].url; }; 







// //     var  = document.getElementById("myButton").onclick; 
// //     newLink.href = books[link].url;
// //  };





// v





