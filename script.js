// Replace 'YOUR_API_GATEWAY_URL' with your actual URL later
const apiURL = "https://o96acobxqd.execute-api.ap-south-1.amazonaws.com/prod/visit";

async function getVisitorCount() {
    try {
        let response = await fetch(apiURL);
        let data = await response.json();
        document.getElementById('visitor-count').innerText = data.count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        document.getElementById('visitor-count').innerText = "1"; // Fallback
    }
}
getVisitorCount();