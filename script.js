let result_container=document.getElementById("result_container");

let search=document.getElementById("search");
search.addEventListener("click",()=>{
    let movie = document.getElementById("name").value; // Example movie name
    if(movie===""||movie==null) {
        alert("Enter movie name");
        result_container.style.visibility="visible";
        return;
    }
    let url = `https://omdbapi.com/?t=${movie}&apikey=94589c10`;
    result_container.innerHTML="";
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{

        if(data==null||data=="undefined"||data.Response=="False"){
            result_container.innerHTML=
            `<h1> Sorry, movie doesn't exist. </h1>`
            return;
        }

        let div1=document.createElement("div");
        let div2=document.createElement("div");
        div1.innerHTML=
        `<img src="${data.Poster}" alt="${data.Title}" width="300px" height ="300px" />`;
        div1.classList.add("design1");
        div2.innerHTML=
        `<h1>${data.Title}</h1>
          <div><strong> Released : </strong> ${data.Released}</div>
           <div> <strong> Director : </strong> ${data.Director}</div>
           <div> <strong> Description : </strong> ${data.Plot}</div>
            <div>  <strong> Genre : </strong> ${data.Genre}</div>` ;
            div2.classList.add("design2")

        result_container.appendChild(div1);
        result_container.appendChild(div2);
result_container.style.visibility="visible";
        console.log(data)
    }).catch((e)=>{
        console.log("Error",e)
    });

    
});




