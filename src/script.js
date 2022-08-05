

 (async function() {
    //const [{ context }] = await( await fetch(`/api/users-get`)).json();
    //
    //document.querySelector('#name').innerHTML = result;
    //
    /* let response = await fetch(`/api/users-get`);
    let data = await response.json();
    console.log(data[0].firstName);
    document.querySelector('#name').innerHTML = data[0].firstName; */
    fetch(`/api/users-get`)
    .then(res => {
        console.log("First user in the array:");
        console.log(res[0]);
        
})
}())


