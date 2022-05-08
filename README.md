# :magic_wand: FashionLike :shirt::jeans:

<!-- ![diseñofinal]() -->

## 1. Definición del producto :pencil:

FashionLike es una nueva red social donde se van publicando diferentes estilos de indumentaria y
los usuarios pueden votar si les gusta o no el diseño.

FashionLike está desarrollada en React, en donde los usuarios registrados pueden visualizar las publicaciones realizadas, dónde sólo el rol de administrador puede realizar nuevas publicaciones, editarlas y eliminarlas. El usuario puede dar like o dislike a las publicaciones de acuerdo a sus preferencias así como hacer comentarios.

<!-- Te envitamos a registrarte y probar la funcionalidad de courseShare a traves este [link](). -->

## 2. Historias de usuarios :woman: :man:

|                                                                                    Historias de usuario                                                                                    |                                                        Criterios minimos de aceptación                                                        |                                                                     Definición de terminado                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                          USUARIO                                                                                           |                                                                                                                                               |                                                                                                                                                                  |
|                         **Historia 1:** _Yo como usuario nuevo quiero registrarme en la red social:_ con mi correo electrónico para posteriormente iniciar sesión.                         | Notificar al usuario mediante alertas en caso de cometer un error al registrarse, fallas de internet, correo registrado y/o registro exitoso. |             Cuando el usuario logre crear su cuenta con éxito se le envia un alerta de cuenta creada con éxito y se redirecciona al feed de posteo.              |
|                      **Historia 2:** _Yo como usuario registrado quiero ingresar a la red social:_ mediante mi correo electrónico para loguearme de una manera fácil.                      |                                  Validar las credenciales ingresadas por el usuario para el inico de sesión.                                  |                                         Redireccionar al usuario al feed de posteo en caso de inicio de sesión exitoso.                                          |
| **Historia 3:** _Yo como usuario registrado quiero ver las publicaciones de Fashionlike:_ para conocer e informarme sobre los nuevas publicaciones y leer opiniones de los demás miembros. |      Visualizar las publicaciones desde las más recientes hasta las más antiguas, incluyendo una sección para publicaciones destacadas.       |                                   El usuario logra visualizar las publicaciones en orden ascendente y los post mas populares.                                    |
|                        **Historia 4:** _Yo como usuario registrado quiero cerrar sesión:_ para asegurarme que nadie más pueda manipular mi cuenta sin autorización.                        |                                               Mostrar un botón para cerrar sesión de la cuenta.                                               |                                     El usuario logra salir de su cuenta exitosamente y es redirigido a la página de inicio.                                      |
|            **Historia 5:** _Yo como usuario registrado quiero darle me gusta y no me gusta a las publicaciones:_ para indicar si me gusta el diseño de las prendas publicadas.             |                                       Sumar y restar un like de acuerdo a la interaccion de un usuario.                                       |                                                      Actualizar el contador de likes total en tiempo real.                                                       |
|                               **Historia 6:** _Yo como usuario registrado quiero un buscador:_ para ubicar de forma fácil una categoría de ropa específica.                                |                                 Crear un input de búsqueda para buscar publicaciones por categorías de ropa.                                  |                                                                                                                                                                  |
|                               **Historia 7:** _Yo como usuario registrado quiero comentar publicaciones:_ para poder compartir mi opinión a otros usuarios.                                |                    Mostrar un boton para comentar una publicación en particular y visualizar su comentario en tiempo real.                    |              El usuario puede comentar las publicaciones realizadas por FashionLike y es visualizado satisfactoriamente en la publicación original.              |
|                                                                                       ADMINISTRADOR                                                                                        |                                                                                                                                               |                                                                                                                                                                  |
|                                   **Historia 1:** _Yo como administrador quiero agregar nuevas publicaciones:_ para mostrar los nuevos diseños creados.                                    |                               Mostrar un botón para agregar una nueva publicación y enviarla al feed de posteo.                               | Solo el administrador puede agregar nuevas publicaciones que deben incluir obligatoriamente imagen del nuevo diseño, categoría a la que pertenece y descripción. |
|                            **Historia 2:** _Yo como administrador quiero editar mis publicaciones:_ para guardar la nueva información y visualizar mis cambios.                            |                                  Mostrar un boton para editar cada publicación y enviarla al feed de posteo.                                  |                    Solo el administrador puede editar las publicaciones, logra guardar los cambios realizados y visualizarlos en tiempo real.                    |
|            **Historia 3:** _Yo como administrador quiero eliminar mis publicaciones:_ para quitarlas del feed de posteo previa notificación de confirmación de la eliminación.             |                                  Mostrar un boton para eliminar cada publicación y removerlo en tiempo real.                                  |               Solo el administrador puede eliminar las publicaciones, con una confirmación previa y estas ya no se refejarán en el feed de posteo.               |

## 3. Plan de acción :writing_hand:

El plan de acción lo manejamos desde la plataforma ClickUp, en donde desarrollamos todas las historias de usuario y las actividades necesarias para definirla como terminado.

## 4. Diseño :sparkles:

El diseño fue elaborado en figma y puede ser visualizado en este [link](https://www.figma.com/file/SznFfw3vugAHIXC9Peqtm5/Fashionlike-cambios?node-id=2%3A287). -->

Login
![login]()

Feed de posteo
![feed]()

Comentarios
![comments]()

### Diseño responsive

Fashion tiene un diseño responsive por lo tanto permite que pueda ser visualizado en diferentes dispositivos:

Login
![login]()

Feed de posteo
![feed]()

Comentarios
![comments]()

## 5. Tecnologías empleadas :hammer:
