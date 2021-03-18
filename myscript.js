
var repo = [
                {title:"sample-project",lang:"JavaScript",updated:"Updated 3 days ago"},
                {title:"redux-biolerplate",lang:"JavaScript",updated:"Updated 6 days ago"},
                {title:"ckeditor-task",lang:"TypeScript",updated:"Updated 6 days ago"},
                {title:"task-hack",lang:"CSS",updated:"Updated 6 days ago"},
                {title:"sample-project",lang:"JavaScript",updated:"Updated 3 days ago"},
                {title:"redux-biolerplate",lang:"JavaScript",updated:"Updated 6 days ago"},
                {title:"ckeditor-task",lang:"TypeScript",updated:"Updated 6 days ago"},
                {title:"task-hack",lang:"CSS",updated:"Updated 6 days ago"},
                {title:"sample-project",lang:"JavaScript",updated:"Updated 3 days ago"},
                {title:"redux-biolerplate",lang:"JavaScript",updated:"Updated 6 days ago"},
                {title:"ckeditor-task",lang:"TypeScript",updated:"Updated 6 days ago"},
                {title:"task-hack",lang:"CSS",updated:"Updated 6 days ago"}
            ]

var filtermain = [...repo]
console.log(filtermain)
function onLoad()
{
    document.getElementById("repocount").innerHTML = repo.length;
    var repocontent = ``
    repo.map((value) => {
        repocontent += `<div class="repo">
        <p>${value.title}</p>
        <div class="repocontent">
            <label><i class="fas fa-circle ${value.lang}"></i>${value.lang}</label>
            <label><i class="far fa-star"></i>1</label>
            <label>${value.updated}</label>
        </div>
        <hr/>
    </div>`
    })

    document.getElementById("Repositories").innerHTML = repocontent;
}
function onFilter(filterrepo)
{
    var repocontent = ``
    filterrepo.map((value) => {
            repocontent += `<div class="repo">
        <p>${value.title}</p>
        <div class="repocontent">
            <label><i class="fas fa-circle ${value.lang}"></i>${value.lang}</label>
            <label><i class="far fa-star"></i>1</label>
            <label>${value.updated}</label>
        </div>
        <hr/>
    </div>`
    })

    document.getElementById("Repositories").innerHTML = repocontent;
}
function filter()
{
    var filterrepo = []
    var filter = document.getElementById("filter").value
    filterrepo = filtermain.filter((value,i) => {
        if(value.title.includes(filter))
            return value
    })
    onFilter(filterrepo);
}
function filterbylang()
{
    var filterrepo = []
    var filter = document.getElementById("lang").value
    filterrepo = repo.filter((value,i) => {
        if(value.lang.includes(filter))
            return value
    })
    filtermain = filterrepo;
    onFilter(filtermain)
}

function openCity(evt, cityName) 
{
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
