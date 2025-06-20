const session = db.getMongo().startSession();
const dbSession = session.getDatabase("asistentes");
session.startTransaction();

try {

    function agregarAsistente() {
    const nuevoAsistente = {
        nombre: "Ana Torres",
        edad: 31,
        ciudad: "Cartagena",
        generos_favoritos: ["Cumbia", "Electro Tropical"],
        boletos_comprados:  [
            { escenario: "Tarima Caribe", dia: "2025-06-21" },
            { escenario: "Escenario Alterno", dia: "2025-06-22" }
  ]
    };

  db.asistentes.insertOne(nuevoAsistente);

}

    agregarAsistente();
    print(`Asistente agregado con éxito.`);
    session.commitTransaction();
} catch (error) {
    session.abortTransaction();
    print("Error:", e);
}finally{
    session.endSession();
    
}