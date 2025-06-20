const session = db.getMongo().startSession();
const dbSession = session.getDatabase("escenarios");
session.startTransaction();

try {

function disminuirCapacidadEscenario() {
  const resultado = db.escenarios.updateOne(
    { nombre: "Escenario Principal", capacidad: { $gt: 0 } },
    { $inc: { capacidad: -1 } }
    );

    if (resultado.modifiedCount === 1) {
        print(` Capacidad  disminuida en 1.`);
    } else {
        print(` No se pudo disminuir la capacidad.`);
    }
    };
     disminuirCapacidadEscenario();
    print(`transacion existosa.`);
    session.commitTransaction();
} catch (error) {
    session.abortTransaction();
    print("Error:", e);
}finally{
    session.endSession();
    
}