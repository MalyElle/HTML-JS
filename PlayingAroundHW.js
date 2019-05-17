
function showFacts() {
    var facts = document.getElementById('s2');

    // BackGround Color
    var backgroundColor = document.body.style.backgroundColor = "lightcoral";

    // Heading
    var heading1 = document.createElement('h1');
    heading1.innerHTML = 'ALWAYS TRY YOUR BEST';
    heading1.style.textAlign = 'center'
    heading1.style.textDecoration = 'underline'
    heading1.style.fontFamily = 'Georgia'
    heading1.style.fontSize = '3.5rem'
    facts.appendChild(heading1);

    // First Paragraph
    var p1 = document.createElement('p');
    p1.innerHTML = 'At the end of the day, when you know you did your best ALWAYS say ,"I DID MY BEST!"';
    p1.style.fontSize = '1.5rem'
    facts.appendChild(p1);

    //First Image
    var image = document.createElement('img');
    image.src = "pic.jpg";
    image.style.height = "400px";
    image.style.width = "450px";
    image.style.textAlign = "center"
    facts.appendChild(image);

    // Second Heading
    var heading2 = document.createElement('h2');
    heading2.innerHTML = 'List of ways to Stay on Top';
    heading2.style.textAlign = 'center'
    heading2.style.textDecoration = 'underline'
    heading2.style.fontFamily = 'Georgia'
    heading2.style.fontSize = '3.5rem'
    facts.appendChild(heading2);

    // Second Paragraph
    var p2 = document.createElement('p');
    p2.innerHTML = 'Take Care of yourself before you can take care of anyone.  If you are always trying to take care of others, who will take care of you.'
    p2.style.fontSize = '1.5rem'
    facts. appendChild(p2);

    // List
    var lists = document.createElement('li');
    lists.innerHTML = 'Sleep'
    lists.style.fontSize = '2.0rem'
    facts.appendChild(lists);
    
    var lists = document.createElement('li');
    lists.innerHTML = 'Self care'
    lists.style.fontSize = '2.0rem'
    facts.appendChild(lists);
    
    var lists = document.createElement('li');
    lists.innerHTML = 'Ask for help'
    lists.style.fontSize = '2.0rem'
    facts.appendChild(lists);
    
    var lists = document.createElement('li');
    lists.innerHTML = 'Routine'
    lists.style.fontSize = '2.0rem'
    facts.appendChild(lists);
    
    var lists = document.createElement('li');
    lists.innerHTML = 'Set boundaries'
    lists.style.fontSize = '2.0rem'
    facts.appendChild(lists);


   
   
    if (facts.style.display === 'none') {
        // show details
        facts.style.display = 'block';
    } 
    else if (facts.style.display === 'block') {
        // hide details
        facts.style.display = 'none';
    }

    document.getElementById('disappear').style.visibility='hidden';

  
}
