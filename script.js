const addTodo = () => {
    let title = document.getElementById('title').value;

    let desciption = document.getElementById('description').value;

    let tudo = [];

    let localtodo = localStorage.getItem("tudo");

    if (localtodo != null) {
    tudo = JSON.parse(localtodo);
    }

    let tudoobje = {
        title: title,
        desc: desciption,
        id: Math.trunc(Math.random() * 10000)

    };
    tudo.push(tudoobje);
    localStorage.setItem('tudo',JSON.stringify(tudo));
   // console.log(localStorage.getItem('tudo'))
   show_data();

}

const show_data=()=>{

    let todoString = localStorage.getItem('tudo')

    let content =""

    if(todoString==null)
    {
          content+='<h3 class="text-white">No todo to Show'
    }else{
        let tudus = JSON.parse(todoString)

        for (const item of tudus) {

            content+=`
             
            <div class ='card mt-2'>
              <div class ='card-body'>

              <h3>${item.title}</h3>
              <p>${item.desc}</p>
              </div>


            </div>
          
            `

            
        }

    }

    document.getElementById('main-content').innerHTML = content;

    console.log("hiii");

}
show_data();