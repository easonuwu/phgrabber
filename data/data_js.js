window.onload = function(){
    console.log("data_js available")
}

async function grabdt(id){
    try {
        // Check ID
        year = id.substring(0, 4);
        document.getElementById("data1").innerText = year
        document.getElementById("data1x").innerText = "Student Year: "
        const response = await fetch('https://ph.projects.epiceason.com/store/2018.json');
        const names = await response.json();
        document.getElementById("data2").innerText = names[id]
        document.getElementById("data2x").innerText = "Student Name: "
    } catch {
        document.getElementById("data2x").innerText = "❌ Data module unavailable"
    }
}