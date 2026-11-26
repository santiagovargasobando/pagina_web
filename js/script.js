var eventos = [
  { anio: "1814-1815", tema: "viena", texto: "Congreso de Viena: las potencias redibujan el mapa y buscan el equilibrio." },
  { anio: "1815", tema: "viena", texto: "Se forma la Santa Alianza entre las monarquías conservadoras." },
  { anio: "1819", tema: "industria", texto: "Masacre de Peterloo en Manchester: la caballería ataca una protesta que pedía reformas." },
  { anio: "1820", tema: "viena", texto: "Revoluciones liberales en España, Nápoles y Portugal." },
  { anio: "1821", tema: "naciones", texto: "Comienza la guerra de independencia de Grecia." },
  { anio: "1825", tema: "industria", texto: "Robert Owen funda la comunidad de New Harmony en Estados Unidos." },
  { anio: "1830", tema: "naciones", texto: "Revolución de julio en Francia e independencia de Bélgica." },
  { anio: "1831", tema: "naciones", texto: "Mazzini funda la Joven Italia." },
  { anio: "1832", tema: "industria", texto: "Reforma electoral en Gran Bretaña, impulsada por el peso de la burguesía industrial." },
  { anio: "1848", tema: "naciones", texto: "Primavera de los Pueblos: revoluciones liberales y nacionales en toda Europa." }
];

var filtros = [
  { nombre: "Todos", valor: "todos" },
  { nombre: "Orden de Viena", valor: "viena" },
  { nombre: "Industria y utopías", valor: "industria" },
  { nombre: "Romanticismo y nacionalismo", valor: "naciones" }
];

var corrientes = [
  {
    nombre: "Romanticismo",
    responde: "Al racionalismo ilustrado y a la mecanización de la vida.",
    impulsores: "Goethe, Byron, Beethoven, Delacroix.",
    aporte: "Valoró la emoción, la naturaleza, la libertad del individuo y las tradiciones populares."
  },
  {
    nombre: "Nacionalismo",
    responde: "A las fronteras de Viena, que dividían a unos pueblos y sometían a otros.",
    impulsores: "Herder, Mazzini.",
    aporte: "Hizo de la identidad cultural una exigencia política y llevó a las unificaciones de Italia y Alemania."
  },
  {
    nombre: "Utopías sociales",
    responde: "A la desigualdad y las duras condiciones de trabajo de la industrialización.",
    impulsores: "Owen, Saint-Simon, Fourier.",
    aporte: "Pusieron la cuestión social en el debate público y abrieron el camino al cooperativismo y al socialismo."
  }
];

function pintarEventos(tema) {
  var lista = document.getElementById("lista-eventos");
  lista.innerHTML = "";
  for (var i = 0; i < eventos.length; i++) {
    if (tema == "todos" || eventos[i].tema == tema) {
      var li = document.createElement("li");
      li.innerHTML = "<b>" + eventos[i].anio + "</b>" + eventos[i].texto;
      lista.appendChild(li);
    }
  }
}

var contFiltros = document.getElementById("filtros-tiempo");
for (var i = 0; i < filtros.length; i++) {
  var bf = document.createElement("button");
  bf.innerText = filtros[i].nombre;
  bf.onclick = (function (n) {
    return function () {
      var todos = contFiltros.getElementsByTagName("button");
      for (var j = 0; j < todos.length; j++) {
        todos[j].className = (j == n) ? "activo" : "";
      }
      pintarEventos(filtros[n].valor);
    };
  })(i);
  contFiltros.appendChild(bf);
}
contFiltros.getElementsByTagName("button")[0].onclick();

function mostrarCorriente(n) {
  var c = corrientes[n];
  var botones = document.getElementById("botones-corrientes").getElementsByTagName("button");
  for (var j = 0; j < botones.length; j++) {
    botones[j].className = (j == n) ? "activo" : "";
  }
  document.getElementById("datos-corriente").innerHTML =
    "<dt>A qué respondía</dt><dd>" + c.responde + "</dd>" +
    "<dt>Quiénes la impulsaron</dt><dd>" + c.impulsores + "</dd>" +
    "<dt>Su aporte</dt><dd>" + c.aporte + "</dd>";
}

var contCorrientes = document.getElementById("botones-corrientes");
for (var i = 0; i < corrientes.length; i++) {
  var bc = document.createElement("button");
  bc.innerText = corrientes[i].nombre;
  bc.onclick = (function (n) {
    return function () { mostrarCorriente(n); };
  })(i);
  contCorrientes.appendChild(bc);
}
mostrarCorriente(0);

var videos = document.getElementsByTagName("video");
for (var v = 0; v < videos.length; v++) {
  videos[v].onloadedmetadata = function () {
    this.parentNode.querySelector(".aviso").style.display = "none";
  };
}

var columnas = ["Causas", "Actores", "Acontecimientos", "Consecuencias"];

var nodos = [
  { id: "c1", col: 0, fila: 0, linea1: "Caída de Napoleón", linea2: "y miedo a revoluciones", texto: "Tras años de guerra, las potencias querían evitar que se repitiera una revolución como la francesa." },
  { id: "c2", col: 0, fila: 1, linea1: "Ideas liberales", linea2: "de la Rev. Francesa", texto: "Libertad, igualdad y derechos habían calado en la burguesía y en parte del pueblo." },
  { id: "c3", col: 0, fila: 2, linea1: "Industrialización", linea2: "y desigualdad", texto: "Las fábricas crearon riqueza y también pobreza urbana, trabajo infantil y jornadas largas." },
  { id: "a1", col: 1, fila: 0, linea1: "Metternich y", linea2: "las potencias", texto: "Austria, Rusia, Prusia y Gran Bretaña buscaban estabilidad y monarquías fuertes." },
  { id: "a2", col: 1, fila: 1, linea1: "Burguesía", linea2: "y obreros", texto: "La burguesía pedía derechos políticos y los obreros mejores condiciones de vida." },
  { id: "a3", col: 1, fila: 2, linea1: "Románticos", linea2: "y utopistas", texto: "Escritores, artistas y pensadores como Herder, Owen o Fourier propusieron nuevas ideas de pueblo y de sociedad." },
  { id: "e1", col: 2, fila: 0, linea1: "Congreso de Viena", linea2: "(1814-1815)", texto: "Se redibujó el mapa de Europa y nació la Santa Alianza." },
  { id: "e2", col: 2, fila: 1, linea1: "Revoluciones de", linea2: "1820, 1830 y 1848", texto: "Oleadas de revueltas liberales y nacionales sacudieron el sistema de Viena." },
  { id: "e3", col: 2, fila: 2, linea1: "Unificación de", linea2: "Italia y Alemania", texto: "Italia hacia 1861 y Alemania en 1871 mostraron la fuerza del nacionalismo." },
  { id: "s1", col: 3, fila: 0, linea1: "Fin del equilibrio", linea2: "conservador", texto: "El orden de 1815 perdió su capacidad de frenar el cambio." },
  { id: "s2", col: 3, fila: 1, linea1: "Movimiento obrero", linea2: "y socialismo", texto: "La cuestión social llegó al debate político y dio origen a sindicatos y partidos obreros." },
  { id: "s3", col: 3, fila: 2, linea1: "Estados-nación", linea2: "modernos", texto: "La idea de que cada pueblo tiene derecho a su Estado reorganizó el mapa europeo." }
];

var conexiones = [
  ["c1", "a1"], ["c2", "a2"], ["c2", "a3"], ["c3", "a2"], ["c3", "a3"],
  ["a1", "e1"], ["a2", "e2"], ["a3", "e2"], ["a3", "e3"],
  ["e1", "s1"], ["e2", "s1"], ["e2", "s2"], ["e3", "s3"]
];

var svg = document.getElementById("red");
var ns = "http://www.w3.org/2000/svg";
var ancho = 150;
var alto = 54;

function centroX(n) { return 20 + n.col * 180 + ancho / 2; }
function centroY(n) { return 50 + n.fila * 115 + alto / 2; }
function buscar(id) {
  for (var i = 0; i < nodos.length; i++) {
    if (nodos[i].id == id) return nodos[i];
  }
}

for (var i = 0; i < columnas.length; i++) {
  var t = document.createElementNS(ns, "text");
  t.setAttribute("class", "titulo-col");
  t.setAttribute("x", 20 + i * 180 + ancho / 2);
  t.setAttribute("y", 24);
  t.textContent = columnas[i];
  svg.appendChild(t);
}

var lineasSvg = [];
for (var i = 0; i < conexiones.length; i++) {
  var n1 = buscar(conexiones[i][0]);
  var n2 = buscar(conexiones[i][1]);
  var l = document.createElementNS(ns, "line");
  l.setAttribute("x1", centroX(n1) + ancho / 2);
  l.setAttribute("y1", centroY(n1));
  l.setAttribute("x2", centroX(n2) - ancho / 2);
  l.setAttribute("y2", centroY(n2));
  svg.appendChild(l);
  lineasSvg.push(l);
}

var cajas = {};
for (var i = 0; i < nodos.length; i++) {
  var n = nodos[i];
  var g = document.createElementNS(ns, "g");
  g.setAttribute("class", "nodo");

  var r = document.createElementNS(ns, "rect");
  r.setAttribute("x", centroX(n) - ancho / 2);
  r.setAttribute("y", centroY(n) - alto / 2);
  r.setAttribute("width", ancho);
  r.setAttribute("height", alto);
  r.setAttribute("rx", 6);
  g.appendChild(r);

  var t1 = document.createElementNS(ns, "text");
  t1.setAttribute("x", centroX(n));
  t1.setAttribute("y", centroY(n) - 4);
  t1.textContent = n.linea1;
  g.appendChild(t1);

  var t2 = document.createElementNS(ns, "text");
  t2.setAttribute("x", centroX(n));
  t2.setAttribute("y", centroY(n) + 12);
  t2.textContent = n.linea2;
  g.appendChild(t2);

  g.onclick = (function (id) {
    return function () { elegirNodo(id); };
  })(n.id);

  svg.appendChild(g);
  cajas[n.id] = g;
}

function agregarHaciaAdelante(id, lista) {
  for (var i = 0; i < conexiones.length; i++) {
    if (conexiones[i][0] == id && lista.indexOf(conexiones[i][1]) == -1) {
      lista.push(conexiones[i][1]);
      agregarHaciaAdelante(conexiones[i][1], lista);
    }
  }
}

function agregarHaciaAtras(id, lista) {
  for (var i = 0; i < conexiones.length; i++) {
    if (conexiones[i][1] == id && lista.indexOf(conexiones[i][0]) == -1) {
      lista.push(conexiones[i][0]);
      agregarHaciaAtras(conexiones[i][0], lista);
    }
  }
}

function elegirNodo(id) {
  var elegidos = [id];
  agregarHaciaAdelante(id, elegidos);
  agregarHaciaAtras(id, elegidos);

  for (var k in cajas) {
    if (elegidos.indexOf(k) != -1) {
      cajas[k].setAttribute("class", "nodo encendido");
    } else {
      cajas[k].setAttribute("class", "nodo apagado");
    }
  }

  for (var i = 0; i < conexiones.length; i++) {
    var dentro = elegidos.indexOf(conexiones[i][0]) != -1 && elegidos.indexOf(conexiones[i][1]) != -1;
    lineasSvg[i].setAttribute("class", dentro ? "encendida" : "");
  }

  var nodo = buscar(id);
  document.getElementById("red-titulo").innerText = nodo.linea1 + " " + nodo.linea2;
  document.getElementById("red-texto").innerText = nodo.texto;
}

var fuentes = [
  { tipo: "libros", texto: "<b>Hobsbawm, E. (2009).</b> <i>La era de la revolución, 1789-1848</i>. Barcelona: Crítica." },
  { tipo: "libros", texto: "<b>Osterhammel, J. (2015).</b> <i>La transformación del mundo: una historia global del siglo XIX</i>. Barcelona: Crítica." },
  { tipo: "libros", texto: "<b>Berlin, I. (2000).</b> <i>Las raíces del romanticismo</i>. Madrid: Taurus." },
  { tipo: "libros", texto: "<b>Engels, F. (1880).</b> <i>Del socialismo utópico al socialismo científico</i>." },
  { tipo: "documentos", texto: "<b>Documentos históricos primarios:</b> <i>Acta Final del Congreso de Viena</i> (9 de junio de 1815) y <i>Manifiesto de la Joven Italia</i>, de Giuseppe Mazzini (1831)." },
  { tipo: "linea", texto: "<b>Historia National Geographic:</b> El Congreso de Viena, la reorganización de Europa tras Napoleón.", url: "https://historia.nationalgeographic.com.es/a/congreso-viena-europa-tras-napoleon_18665" },
  { tipo: "linea", texto: "<b>El Orden Mundial (EOM):</b> El mapa de Europa tras las guerras napoleónicas.", url: "https://elordenmundial.com/mapas-y-graficos/mapa-europa-napoleon/" },
  { tipo: "linea", texto: "<b>Dialnet (Universidad de La Rioja):</b> artículo académico de investigación histórica (código 5885508).", url: "https://dialnet.unirioja.es/servlet/articulo?codigo=5885508" },
  { tipo: "linea", texto: "<b>Concepto.de:</b> Revolución Industrial: etapas, causas y consecuencias.", url: "https://concepto.de/revolucion-industrial/" },
  { tipo: "linea", texto: "<b>National Geographic Latinoamérica (2024):</b> Qué fue y cuándo comenzó la Revolución Industrial.", url: "https://www.nationalgeographicla.com/historia/2024/12/que-fue-y-cuando-comenzo-la-revolucion-industrial" },
  { tipo: "linea", texto: "<b>Encyclopædia Britannica:</b> Industrial Revolution: The first Industrial Revolution.", url: "https://www.britannica.com/event/Industrial-Revolution/The-first-Industrial-Revolution" },
  { tipo: "linea", texto: "<b>Filosofía.net:</b> El socialismo utópico (Henri de Saint-Simon, Charles Fourier y Robert Owen).", url: "https://www.filosofia.net/materiales/sofiafilia/hf/soff_u12_1.html" },
  { tipo: "linea", texto: "<b>History Crunch (2026):</b> Millar, B., Utopian Socialism: A Detailed Summary.", url: "https://historycrunch.com/utopian-socialism/" },
  { tipo: "linea", texto: "<b>Repositorio Institucional UNAM:</b> Juárez Vargas, J. M., El socialismo utópico: desde la exposición de Friedrich Engels en Del socialismo utópico al socialismo científico.", url: "https://ru.dgb.unam.mx/server/api/core/bitstreams/aa020f5c-3c3b-40d7-bad0-d33a390d3c03/content" },
  { tipo: "linea", texto: "<b>Scribd:</b> Tema 3: El siglo XIX. Liberalismo, Nacionalismo y Romanticismo.", url: "https://es.scribd.com/document/828664805/TEMA-3-HISTORIA" },
  { tipo: "linea", texto: "<b>Nueva Escuela Mexicana (SEP):</b> Nacionalismo y Romanticismo en el siglo XIX.", url: "https://nuevaescuelamexicana.sep.gob.mx/contenido/coleccion/nacionalismo-y-romanticismo-2/" },
  { tipo: "linea", texto: "<b>Fundación Juan March:</b> El Romanticismo y el rescate de la música y cultura popular.", url: "https://www2.march.es/musica/jovenes/raiz-popular-html/romanticismo.html" },
  { tipo: "linea", texto: "<b>Historia y Biografías:</b> Concepto de nación y el surgimiento del nacionalismo en Europa.", url: "https://historiaybiografias.com/nacion/" }
];

var tiposFuentes = [
  { nombre: "Todas", valor: "todas" },
  { nombre: "Libros", valor: "libros" },
  { nombre: "Documentos históricos", valor: "documentos" },
  { nombre: "Recursos en línea", valor: "linea" }
];

var tipoActual = "todas";

function pintarFuentes() {
  var lista = document.getElementById("lista-fuentes");
  var texto = document.getElementById("buscador").value.toLowerCase();
  var contador = 0;
  lista.innerHTML = "";

  for (var i = 0; i < fuentes.length; i++) {
    var f = fuentes[i];
    var coincideTipo = (tipoActual == "todas" || f.tipo == tipoActual);
    var coincideTexto = f.texto.toLowerCase().indexOf(texto) != -1;
    if (coincideTipo && coincideTexto) {
      var li = document.createElement("li");
      li.innerHTML = f.texto;
      if (f.url) {
        li.innerHTML += ' Disponible en: <a href="' + f.url + '" target="_blank" rel="noopener">' + f.url + '</a>';
      }
      lista.appendChild(li);
      contador++;
    }
  }
  document.getElementById("contador-fuentes").innerText = "Mostrando " + contador + " de " + fuentes.length + " fuentes";
}

var contTipos = document.getElementById("filtros-fuentes");
for (var i = 0; i < tiposFuentes.length; i++) {
  var bt = document.createElement("button");
  bt.innerText = tiposFuentes[i].nombre;
  bt.onclick = (function (n) {
    return function () {
      var todos = contTipos.getElementsByTagName("button");
      for (var j = 0; j < todos.length; j++) {
        todos[j].className = (j == n) ? "activo" : "";
      }
      tipoActual = tiposFuentes[n].valor;
      pintarFuentes();
    };
  })(i);
  contTipos.appendChild(bt);
}
contTipos.getElementsByTagName("button")[0].className = "activo";
document.getElementById("buscador").oninput = pintarFuentes;
pintarFuentes();

var botonSubir = document.getElementById("subir");
botonSubir.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };

var seccionesMenu = ["inicio", "contexto", "red-seccion", "video", "explorador", "conclusion", "fuentes"];
var enlacesMenu = document.querySelectorAll(".menu nav a");

window.onscroll = function () {
  botonSubir.style.display = (window.scrollY > 600) ? "block" : "none";

  var actual = "inicio";
  for (var i = 0; i < seccionesMenu.length; i++) {
    var el = document.getElementById(seccionesMenu[i]);
    if (el && el.getBoundingClientRect().top < 120) {
      actual = seccionesMenu[i];
    }
  }
  for (var j = 0; j < enlacesMenu.length; j++) {
    var activo = enlacesMenu[j].getAttribute("href") == "#" + actual;
    enlacesMenu[j].className = activo ? "actual" : "";
  }
};

var capitulos = [
  {
    tiempo: 0,
    titulo: "Apertura",
    pregunta: "¿Por qué Europa no pudo volver al pasado en 1815?",
    respuesta: "Porque mientras las potencias intentaban restaurar el orden anterior, la economía, las ideas y la identidad de los pueblos ya estaban cambiando.",
    contexto: "Napoleón fue derrotado definitivamente en 1815. Las potencias vencedoras querían evitar que la Revolución Francesa se repitiera.",
    fuentes: ["Hobsbawm, E. (2009). La era de la revolución, 1789-1848."]
  },
  {
    tiempo: 45,
    titulo: "El orden de Viena",
    pregunta: "¿Qué buscaban las potencias en el Congreso de Viena?",
    respuesta: "Estabilidad: devolver el trono a las dinastías, contener a Francia y evitar nuevas revoluciones. Metternich fue la figura central y la Santa Alianza unió a las monarquías conservadoras.",
    contexto: "El Congreso se celebró entre 1814 y 1815. Las revoluciones de 1820, 1830 y 1848 mostraron lo frágil que era su sistema.",
    fuentes: ["Acta Final del Congreso de Viena (1815).", "Historia National Geographic: El Congreso de Viena."]
  },
  {
    tiempo: 135,
    titulo: "La Revolución Industrial",
    pregunta: "¿Qué cambió con la industrialización y a qué costo?",
    respuesta: "Cambió la forma de producir y de vivir: nacieron las fábricas, las ciudades industriales y la clase obrera, pero con jornadas largas, trabajo infantil y hacinamiento.",
    contexto: "Gran Bretaña fue el primer país industrializado. Esa presión social no se resolvía con diplomacia.",
    fuentes: ["Encyclopædia Britannica: Industrial Revolution.", "Hobsbawm, E. (2009). La era de la revolución, 1789-1848."]
  },
  {
    tiempo: 225,
    titulo: "Utopías sociales",
    pregunta: "¿Qué sociedades imaginaron quienes querían algo distinto?",
    respuesta: "Owen, Saint-Simon y Fourier propusieron comunidades y sistemas más justos. Marx y Engels los llamaron utópicos, pero pusieron la cuestión social en el debate público.",
    contexto: "Owen reformó la fábrica de New Lanark; Fourier imaginó los falansterios; Saint-Simon confiaba en la ciencia y la industria.",
    fuentes: ["Engels, F. (1880). Del socialismo utópico al socialismo científico.", "Filosofía.net: El socialismo utópico."]
  },
  {
    tiempo: 300,
    titulo: "Romanticismo y nacionalismo",
    pregunta: "¿Cómo nacieron las naciones modernas?",
    respuesta: "El Romanticismo valoró la lengua, el folclore y la historia de cada pueblo. De ahí surgió la idea de que cada pueblo debía tener su propio Estado, lo que desafió al orden de Viena.",
    contexto: "Ejemplos: la independencia de Grecia, la de Bélgica y las unificaciones de Italia (1861) y Alemania (1871).",
    fuentes: ["Berlin, I. (2000). Las raíces del romanticismo.", "Nueva Escuela Mexicana: Nacionalismo y Romanticismo en el siglo XIX."]
  },
  {
    tiempo: 390,
    titulo: "Cierre",
    pregunta: "¿Cómo se conectan estas fuerzas?",
    respuesta: "El mundo posnapoleónico no volvió al pasado: entre fábricas, ideas y naciones, Europa entró en una era de cambio permanente.",
    contexto: "Las revoluciones de 1848 fueron reprimidas, pero dejaron instalados los derechos laborales, la participación ciudadana y el Estado-nación.",
    fuentes: ["Osterhammel, J. (2015). La transformación del mundo."]
  },
  {
    tiempo: 420,
    titulo: "Mirada desde América",
    pregunta: "¿Qué relación tuvo todo esto con América Latina?",
    respuesta: "Las independencias de 1810 a 1825, incluida la del Perú en 1821, ocurrieron en el mismo mundo de ideas liberales y de crisis de las monarquías. La historia no se queda en un solo continente.",
    contexto: "La Santa Alianza miró con preocupación esos procesos. En 1823 Estados Unidos formuló la Doctrina Monroe, y Gran Bretaña, ya industrializada, vio en las nuevas repúblicas un mercado.",
    fuentes: ["Osterhammel, J. (2015). La transformación del mundo.", "Hobsbawm, E. (2009). La era de la revolución, 1789-1848."]
  }
];

var videoPrincipal = document.getElementById("video-principal");
var capituloActual = -1;

function mostrarCapitulo(n) {
  var c = capitulos[n];
  capituloActual = n;

  var botones = document.getElementById("botones-capitulos").getElementsByTagName("button");
  for (var j = 0; j < botones.length; j++) {
    botones[j].className = (j == n) ? "activo" : "";
  }

  document.getElementById("cap-titulo").innerText = c.titulo;
  document.getElementById("cap-pregunta").innerHTML = "<b>" + c.pregunta + "</b>";
  document.getElementById("cap-respuesta").innerText = c.respuesta;
  document.getElementById("cap-contexto").innerText = c.contexto;

  var lista = document.getElementById("cap-fuentes");
  lista.innerHTML = "";
  for (var i = 0; i < c.fuentes.length; i++) {
    var li = document.createElement("li");
    li.innerText = c.fuentes[i];
    lista.appendChild(li);
  }
}

var contCapitulos = document.getElementById("botones-capitulos");
for (var i = 0; i < capitulos.length; i++) {
  var bcap = document.createElement("button");
  bcap.innerText = capitulos[i].titulo;
  bcap.onclick = (function (n) {
    return function () {
      mostrarCapitulo(n);
      if (videoPrincipal.readyState > 0) {
        videoPrincipal.currentTime = capitulos[n].tiempo;
        videoPrincipal.play();
      }
    };
  })(i);
  contCapitulos.appendChild(bcap);
}
mostrarCapitulo(0);

videoPrincipal.ontimeupdate = function () {
  var nuevo = 0;
  for (var i = 0; i < capitulos.length; i++) {
    if (videoPrincipal.currentTime >= capitulos[i].tiempo) {
      nuevo = i;
    }
  }
  if (nuevo != capituloActual) {
    mostrarCapitulo(nuevo);
  }
};
