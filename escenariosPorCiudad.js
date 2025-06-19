db.system.js.insertOne({_id: "escenariosPorCiudad", value:new Code ("function (valor) {var a = db.escenarios.find({ ciudad: valor },{nombre:1});  return a;}" )});

const f1 = db.system.js.findOne({_id:"escenariosPorCiudad"})

const escenarios = new Function("return "+f1.value.code)();

escenarios("Cali")

