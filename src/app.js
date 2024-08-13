/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generator_sentence(subject, verb, event, time) {
    const random_position = Array => {
      return Math.floor(Math.random() * Array.length);
    };

    let randomsubject = random_position(subject);
    let randomverb = random_position(verb);
    let randomevent = random_position(event);
    let randomtime = random_position(time);

    let sentence =
      ` ${subject[randomsubject]} ` +
      ` ${verb[randomverb]} ` +
      ` ${event[randomevent]} ` +
      ` ${time[randomtime]} `;

    if (randomsubject == 0) {
      document.getElementById("imagen").src =
        "https://capital.es/wp-content/uploads/2019/04/pedrosanchez-110418-1.jpg";
    } else if (randomsubject == 1) {
      document.getElementById("imagen").src =
        "https://prnoticias.com/wp-content/uploads/2015/04/mariano-rajoy1.jpg";
    } else if (randomsubject == 2) {
      document.getElementById("imagen").src =
        "https://www.eldebate.com/files/article_social/files/fp/uploads/2023/04/28/644bef663c1f0.r_d.1076-474-0.jpeg";
    } else if (randomsubject == 3) {
      document.getElementById("imagen").src =
        "https://static.infolibre.es/clip/6f334479-7f25-497f-a39c-0888774d5b24_16-9-discover-aspect-ratio_default_0.jpg";
    } else if (randomsubject == 4) {
      document.getElementById("imagen").src =
        "https://www.elplural.com/uploads/s1/70/39/28/d-at1gzwsaal-w.jpeg";
    }
    return sentence;
  }

  let politician = [
    "Pedro Sánchez",
    "Mariano Rajoy",
    "Pablo Iglesias",
    "Núñez Feijoó",
    "Santiago Abascal"
  ];
  let action = [
    "ha buscado",
    "ha enviado",
    "ha manejado",
    "ha masticado",
    "ha visto"
  ];
  let object = [
    "sus calzoncillos sucios",
    "su coche oficial",
    "sus uñas largas",
    "su dinero negro",
    "su asistente"
  ];
  let detail = [
    "porque piensa que le da suerte",
    "para preparar un regalo a Joe Biden",
    "porque lo ocultará bajo la alfombra",
    "para huir del parlamento y de la gente",
    "para seguir mintiendo a sus votantes"
  ];

  document.getElementById("texto").innerHTML = generator_sentence(
    politician,
    action,
    object,
    detail
  );
};
