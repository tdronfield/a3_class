async function fetchData(datasource) {
    // fetch and then statements
    // get what ever data file that is passed into function  
    let resource = await fetch(datasource).then(response => {
        if (response.status !== 200) {
            throw new Error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);
        }

        return response;
    })

    // if we are successful, return back to our resource
    let dataset = await resource.json();

    return dataset[0];
    debugger;
}

export {fetchData};