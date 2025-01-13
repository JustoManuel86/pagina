COMENTARIOS

#FOOTER Y HEADER

Los creé por separado para usarlos en el resto de las páginas.

#LANDING

He elegido la gama de colores verde, naranja y azul marino, las cuales voy a usar como guía para el resto de las páginas. 
Además, cargué los íconos de Bootstrap para que Telegram e Instagram tengan sus íconos correspondientes. 
Para el login en la página, como es algo que no queremos que cualquier usuario vea y quiera entrar, 
lo he colocado en el footer en la parte de administración.

#PRIVATE LANDING
Menu con las tarjetas de todos los list que tenemos, aunque es un mockup las redirecciones estan funcionando
y puede usarse para ver todos los list sin tener que poner las direcciones a mano.

#LOGIN

Formulario para iniciar sesión como administrador básico, respetando los colores de la guía de estilos.

#CONTACTO

Formulario de contacto básico, respetando los colores de la guía de estilos.

#BUSCADOR

Un buscador sencillo con el ícono de la lupa pulsable para buscar. Los filtros solo con CSS no se pueden hacer que se mantengan pulsados,
así que de momento solo se ilumina uno de color rojo.

#COMERCIO LIST

Con Bootstrap, he añadido los comercios en forma de tarjetas con su dirección y una barra de navegación respetando los colores.

#COMERCIO DETAIL

He añadido un checkbox que oculta la parte pública y muestra la parte privada de la página. 
Esto lo usaré para el resto de las páginas que tengan las dos partes, así me ahorro tener que crear dos HTML distintos.

#ASOCIACION LIST

Parecido a "Comercio List", con su botón para ver cómo se vería la parte de administración en modo edición.

#PROVINCIA LIST, CIUDAD LIST, DISTRITO LIST, CATEGORIA LIST, SUBCATEGORIA LIST

Todas estas páginas siguen un mismo estilo, con un botón para ver cómo se vería con administrador. 
En las que tienen una clave foránea, por así decirlo, en su modo edición he optado por usar un select para las ya disponibles,
en vez de tener que introducirlas a mano como se hace en el nombre o el código.

#FORM

Es el mismo formulario que he usado, por ejemplo, para "Comercio Detail".
Es reutilizable en el sentido de que ya tenemos el formulario hecho, solo tenemos que adaptarlo al tipo de modelo que vayamos a necesitar, 
quitando los campos que no necesitemos. En Django, por ejemplo, no nos haría falta, 
ya que con el propio modelo nos generaría el formulario solo con los campos que necesitamos.

#CONFIRM DELETE

Aquí he puesto un botón de eliminar en el centro de la pantalla, pero es solo para simular cómo se vería. 
Cuando lo pulses, debería salir un menú emergente que te preguntará si de verdad deseas borrar la entrada en cuestión. 
He cambiado todos los rojos que da Bootstrap con el btn-danger por los rojos propios de nuestra guía de estilos. 
Lo mismo con el gris del botón "Cancelar", he puesto el de la guía.

#FUENTES

Las fuentes de la guía de estilos las cargo en el css del HEADER
y como este se va a cargar siempre y lo aplico al body todas nuestras
fuentes estarán correctamente aplicadas.