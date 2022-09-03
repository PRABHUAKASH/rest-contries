var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json()) .then((data1) => foo(data1));


function foo(data1){
    for(var i=0;i<=data1.length;i++){
        console.log(data1[i]);
        var div= document.createElement("div");
        div.style.backgroundColor="grey";
        div.innerHTML=
        ` <div class="container">
        <div class="row">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="card-group">
                <div class="card">
                    <div ><img src="${data1[i].flags.svg}" alt="......."></div>
                    <div class="card-body">
                        <h5 class="card-title">${data1[i].name.common}</h5>
                        <h6 class="region">region:${data1[i].region}</h6>
                        <p class="card-text">capital:${data1[i].capital}</p>
                        <p class="card-text">latitude:${data1[i].latlng}</p>
                        <p class="card-text">longtude:${data1[i].latlng}</p>
                        <p class="card-text">contry code:${data1[i].cca3}</p>
                        <button type="submit">Click for Weather</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
     </div>`
     document.body.append(div);
    }
};
