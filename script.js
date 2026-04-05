const counterElement = document.getElementById('count');

async function getVisitorCount() {
    try {
        // KEEP YOUR EXISTING API GATEWAY URL HERE
        const response = await fetch('https://o96acobxqd.execute-api.ap-south-1.amazonaws.com/prod/visit');
        const data = await response.json();
        counterElement.innerText = data.count;
    } catch (error) {
        console.error("Error:", error);
        counterElement.innerText = "Error";
    }
}

getVisitorCount();