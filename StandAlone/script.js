
const api_url =
	"http://localhost:3000/books";
async function getapi(url) {
	const response = await fetch(url);
	const data = response.json();
	for(var r in data){
		console.log(r.name);
	}
	
}

getapi(api_url);
