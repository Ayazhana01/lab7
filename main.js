
      
      var heading = document.createElement("h1");
      
      heading.textContent = "Lab7 Assignment";
      
      heading.style.color = "blue";
      document.body.appendChild(heading);

      var line = document.createElement("hr");

      document.body.appendChild(line);

      var subheading = document.createElement("h2");

      subheading.textContent = "Task";
      
      subheading.style.color = "red";
      document.body.appendChild(subheading);


      var paragraph = document.createElement("p");
      // set the text content of the element
      paragraph.textContent = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
      // add the element to the body of the document
      document.body.appendChild(paragraph);
      var list = document.createElement("ul");
      var listItem1 = document.createElement("li");
      listItem1.innerHTML = "find elements in the DOM <strong>(5 points)</strong>;";
      list.appendChild(listItem1);

    listItem1.style.color= "green";

    var listItem2 = document.createElement("li");
    listItem2.innerHTML = "create/add/remove elements <strong>(5 points)</strong>;";
    list.appendChild(listItem2);
    listItem2.style.color= "purple";

        var listItem3 = document.createElement("li");
        listItem3.innerHTML = "change content of the elements <strong>(5 points)</strong>;";
        list.appendChild(listItem3);
        listItem3.style.color= "green";

        var listItem4 = document.createElement("li");
        listItem4.innerHTML = "change styles of the elements <strong>(5 points)</strong>;";
        list.appendChild(listItem4);
        listItem4.style.color= "purple";

        var listItem5 = document.createElement("li");
        listItem5.innerHTML = "change attributes of the elements <strong>(5 points)</strong>;";
        list.appendChild(listItem5);
        listItem5.style.color= "green";

        var listItem6 = document.createElement("li");
        listItem6.innerHTML = "change classes of the elements <strong>(5 points)</strong>.";
        list.appendChild(listItem6);
        listItem6.style.color= "purple";
        paragraph.appendChild(list);

        var secondLine = document.createElement("hr");
        document.body.appendChild(secondLine);

        var subsubheading = document.createElement("h3");
        subsubheading.textContent = "Submission";
        subsubheading.style.color = "red";
        subsubheading.style.fontSize = "1.5em";
        document.body.appendChild(subsubheading);

        var paragraph2 = document.createElement("p");
        paragraph2.textContent = "To submit your work, follow these instructions:";
        document.body.appendChild(paragraph2);

        var list2 = document.createElement("ul");

      
      var listItem4 = document.createElement("li");
      listItem4.innerHTML = "Create a new repository on Github, named <strong> lab7 (1 point) </strong>;";
      list2.appendChild(listItem4);
      listItem4.style.color= "green";

      var listItem5 = document.createElement("li");
      listItem5.innerHTML = "Clone this repository to your local machine and work inside it.";
      list2.appendChild(listItem5);
      listItem5.style.color= "purple";
      


// create the first list item with the "Hello, World!" message
var listItem6 = document.createElement("li");
listItem6.innerHTML = ("Create a new HTML file, called <strong>index.html </strong>, which has only one h1 tag with Hello, World! message <strong>(1 point) </strong>.");
list2.appendChild(listItem6);
listItem6.style.color= "green";




var listItem7 = document.createElement("li");
      listItem7.innerHTML = "Create a new JavaScript file, called <strong> main.js </strong>, which must contain your program (assignment) described above <strong>(1 point)</strong>.";
      list2.appendChild(listItem7);
      listItem7.style.color= "purple";

      var listItem8 = document.createElement("li");
      listItem8.innerHTML = "Link this <strong> main.js </strong> file to your <strong> index.html </strong> file (Note: place your script at the end of the <strong> body </strong> section).";
      list2.appendChild(listItem8);
      listItem8.style.color= "green";

      var listItem9 = document.createElement("li");
      listItem9.innerHTML = "Write a JavaScript program in <strong> main.js </strong> to make your <strong> index.html </strong> look identical to this HTML file <strong>(5 points)</strong>.";
      list2.appendChild(listItem9);
      listItem9.style.color= "purple";

      var listItem10 = document.createElement("li");
      listItem10.innerHTML = "After you finish your work, submit it to the Github <strong>(2 points)</strong>.";
      list2.appendChild(listItem10);
      listItem10.style.color= "green";

      paragraph2.appendChild(list2);

