const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function something() {
    console.log("this might take some time....");
    await delay(5000);
    console.log("done!")
}

something();
