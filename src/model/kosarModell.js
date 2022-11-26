class KosarModel {
    #kosar = [];
    #osszar;
    #osszdb;
    constructor(kosaram) {
        this.#kosar = kosaram;
        this.#osszar = 0;
        this.#osszdb = 0;
    }
    kosarba(adat) {
        let azonosElem = this.#kosar.findIndex((elem) => {
            return elem.id == adat.id;
        });

        if (azonosElem >= 0) {
            console.log(azonosElem);
            this.#kosar[azonosElem].db++;
        } else {
            this.#kosar.push(adat);
            this.#kosar[this.#kosar.length - 1].db = 1;
        }
    }
    getKosar() {
        return this.#kosar;
    }
    kosarbolTorol(adat) {
        console.log(adat);
        let index = this.#kosar.findIndex((elem) => {
            return elem.id == adat.id;
        });
        this.#kosar = this.#kosar
            .slice(0, index)
            .concat(this.#kosar.slice(index + 1, this.#kosar.length));
        console.log(this.#kosar);
    }
    dbCsokkent(adat) {
        console.log(adat);
        let index = this.#kosar.findIndex((elem) => {
            return elem.id == adat.id;
        });
        this.#kosar[index].db--;
        if (this.#kosar[index].db == 0) {
            this.kosarbolTorol(adat);
        }
    }
    dbNovel(adat) {
        console.log(adat);
        let index = this.#kosar.findIndex((elem) => {
            return elem.id == adat.id;
        });
        this.#kosar[index].db++;
    }
    getOsszAr() {
        this.#kosar.forEach((element) => {
            this.#osszar += element.ar * element.db;
        });
        return this.#osszar;
    }
    getOsszDb() {
        this.#kosar.forEach((element) => {
            this.#osszdb += element.db;
        });
        return this.#osszdb;
    }
}

export default KosarModel;
