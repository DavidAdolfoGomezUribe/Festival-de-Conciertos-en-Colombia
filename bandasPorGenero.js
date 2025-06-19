db.system.js.insertOne({_id: "bandasPorGenero", value:new Code ("function (genero) {const a = db.bandas.find({ genero: genero },{nombre:1});  return a;}" )});

const f2 = db.system.js.findOne({_id:"bandasPorGenero"});

const generos = new Function("return "+f2.value.code)();

generos("Rock")