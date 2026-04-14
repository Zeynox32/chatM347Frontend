export async function post(url: string, body: any, auth: boolean) {

    console.log("****************api.ts****************");
    console.log(body)

    try {
        let response: Response;
        if (auth) {
            console.log("auth true")
            response = await fetch(url, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
        }else{
            console.log("auth false")

            response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
        }

        if (!response.ok) {
            throw new Error(`HTTP-Fehler: ${response.status}`);
        }

        const data = await response.json();
        console.log("Antwort:", data);
    } catch (error) {
        console.error("Fehler beim Senden:", error);
    }
}

export async function get(url: string, auth: boolean) {

    console.log("****************api.ts****************");

    try {
        let response: Response;
        if (auth) {
            console.log("auth true")
            response = await fetch(url, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }else{
            console.log("auth false")

            response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        if (!response.ok) {
            throw new Error(`HTTP-Fehler: ${response.status}`);
        }

        const data = await response.json();
        console.log("Antwort:", data);
    } catch (error) {
        console.error("Fehler beim Senden:", error);
    }
}