class KonyvModel {
    #konyvekTomb = [];
    #responseClone;
    constructor(token) {
        this.token = token;
       
    }
    getKonyvek() {
        return this.#konyvekTomb;
    }
    adatBe(vegpont, callback) {
        console.log(vegpont);
         fetch(vegpont, {
            method: "GET",
            headers: {
                "X-CSRF-TOKEN": this.token,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                this.#responseClone = response.clone(); // 2
                return response.json();
            })
            .then((data) => {
                this.#konyvekTomb = data;
                callback(data);
            })
            .catch((rejectionReason) => {
                // 3
                console.log(
                    "Error parsing JSON from response:",
                    rejectionReason,
                    this.#responseClone
                ); // 4
                this.#responseClone
                    .text() // 5
                    .then(function (bodyText) {
                        console.log(
                            "Received the following instead of valid JSON:",
                            bodyText
                        ); // 6
                    });
            }); 
    }
    adatUj(vegpont, adat, callback) {
        fetch(vegpont, {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": this.token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Új adat " + data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    adatModosit(vegpont, adat) {
        console.log(adat);
        vegpont += "/" + adat.id;
        console.log("MÓDOSÍT " + vegpont);
        fetch(vegpont, {
            method: "PUT",
            headers: {
                "X-CSRF-TOKEN": this.token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("MÓDOSÍTottam " + data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    /*  adatTorol(vegpont, id) {
        console.log("TÖRÖLTEM: " + id);
        vegpont += "/" + id;
        console.log(vegpont);
        fetch(vegpont, {
            "X-CSRF-TOKEN":this.token,
            method: "DELETE",
        })
            .then()
            .then(() => {
                console.log("sikeres törlés");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    } */
    konyvVesz(adat) {
        console.log("Vettem: " + adat);
    }
}

export default KonyvModel;
