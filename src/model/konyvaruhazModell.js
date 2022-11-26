class KonyvModel {
    #konyvekTomb = [];
    #responseClone;
    constructor() {}

    adatBe(vegpont, callback) {
        fetch(vegpont, {
            method: "GET",
            headers: {
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
    adatUj(vegpont, adat) {
        fetch(vegpont, {
            method: "POST",
            headers: {
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
        console.log("MÓDOSÍT " + vegpont);
        vegpont += "/" + adat.id;
        fetch(vegpont, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("MÓDOSÍTottam " + data.updatedAt);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    adatTorol(vegpont, id) {
        console.log("TÖRÖLTEM: " + id);
        vegpont += "/" + id;
        console.log(vegpont);
        fetch(vegpont, {
            method: "DELETE",
        })
            .then()
            .then(() => {
                console.log("sikeres törlés");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    konyvVesz(adat) {
        console.log("Vettem: " + adat);
    }
}

export default KonyvModel;
