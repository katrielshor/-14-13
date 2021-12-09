//ex1
/*const run1 = async() => {
    let toDolist = await getData()
    console.log(toDolist)
    display(toDolist)
    
}

const getData = () => {
    return new Promise((resolve, reject) =>{
    const ajax = new XMLHttpRequest()

    ajax.onreadystatechange = () => {
        let state = ajax.readyState
        if (state === 4) {
            if (ajax.status === 200) {
                const list = JSON.parse(ajax.responseText)
                resolve(list)
            }
            reject("status is not ok")
        }
    }

  
    ajax.open("GET", "https://jsonplaceholder.typicode.com/users")

    ajax.send()
})
}

const display = (list) => {
    let htmllist = document.getElementById("list")
    let table = ""

    for (let element of list) {
        table += `
       <tr>
           <td>${element.name}</td>
           <td>${element.username}</td>
           <td>${element.email}</td>
           <td>${element.phone}</td>
           <td>${element.address.street}</td>
           <td>${element.address.city}</td>
           <td>${element.address.zipcode}</td>
           <td>${element.company.name}</td>
        </tr>   
       `
    }
    htmllist.innerHTML = table
}*/

//ex2

/*const run2 = async() => {
    let toDolist = await getData2()
    console.log(toDolist)
    display2(toDolist)
    
}

const getData2 = () => {
    return new Promise((resolve, reject) =>{
    const ajax = new XMLHttpRequest()

    ajax.onreadystatechange = () => {
        let state = ajax.readyState
        if (state === 4) {
            if (ajax.status === 200) {
                const list = JSON.parse(ajax.responseText)
                resolve(list)
            }
            reject("status is not ok")
        }
    }

  
    ajax.open("GET", "https://jsonplaceholder.typicode.com/users")

    ajax.send()
})
}

const display2 = (list) => {
    let htmllist = document.getElementById("list2")
    let table = ""
    let input = Number(document.getElementById("input").value)
    for (let element of list) {
        if(element.id === input){
        table += `
       <tr>
           <td>${element.name}</td>
           <td>${element.username}</td>
           <td>${element.email}</td>
           <td>${element.phone}</td>
           <td>${element.address.street}</td>
           <td>${element.address.city}</td>
           <td>${element.address.zipcode}</td>
           <td>${element.company.name}</td>
        </tr>   
       `
        }else if(input > 10){
            alert("missing details")
            break
        }
    }
    htmllist.innerHTML = table
}*/

/*const run3 = async () => {
    let toDolist = await getData3()
    console.log(toDolist)
    display3(toDolist)
    
}

const getData3 = () => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest()

        ajax.onreadystatechange = () => {
            let state = ajax.readyState
            if (state === 4) {
                if (ajax.status === 200) {
                    const list = JSON.parse(ajax.responseText)
                    resolve(list)

                    return(list)
                }
                reject("status is not ok")
            }
        }


        ajax.open("GET", "https://jsonplaceholder.typicode.com/users")

        ajax.send()
    })
    
}

const display3 = (list) => {
    let htmllist = document.getElementById("select")
    let option = ""

    for (let element of list) {
        option += `
        <option >${element.name}</option>
   
       `
    }
    htmllist.innerHTML = option
}
const names =async ()=>{
    let nameFromList = await getData3()
    let x = document.getElementById("select").value
    for(let det of nameFromList){
        if(det.name === x){
            document.getElementById("demo").innerHTML = "You selected: " + "<ul>" + "<li>" + det.email + "<br>"
            + "<li>" + det.phone + "<br>" + "<li>" + det.address.city + "<br>" + "<li>" + det.address.street
        }
    }
}*/

//ex 4

const run4 = async() => {
    let toDolist = await getData4()
    console.log(toDolist)
    display4(toDolist)
    
}

const getData4 = () => {
    return new Promise((resolve, reject) =>{
    const ajax = new XMLHttpRequest()
    ajax.onreadystatechange = () => {
        let state = ajax.readyState
        if (state === 4) {
            if (ajax.status === 200) {
                const list = JSON.parse(ajax.responseText)
                resolve(list)
            }
            reject("status is not ok")
        }
    }

  
    ajax.open("GET", "https://jsonplaceholder.typicode.com/photos")

    ajax.send()
})
}

const display4 = (list) => {

    for(let detail of list){
        if(detail.id <=  100 ){
            document.getElementById("demo2").innerHTML = 
            "You selected: " + "<ul>" + "<li>" + detail.id + "<br>"
            // + "<li>" + detail.title + "<br>" + "<img src="+ detail.thumbnailUrl ">
            
        }
    }
}




/*const display4 = (list) => {
    let htmllist = document.getElementById("list3")
    let table = ""

    for (let element of list) {
        if(element <= 100){
        table += `
       <tr>
           <td>${element.id}</td>
           <td>${element.title}</td>
           <td><img src="${element.thumbnailUrl}" alt="Girl in a jacket" width="500" height="600"></td>
        </tr>   
       `
       console.log(element)
        }
    }
    htmllist.innerHTML = table
}*/
    

    
    


