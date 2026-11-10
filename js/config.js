// =============================================
//   CONFIGURACIÓN DE TU PÁGINA
// =============================================

const CONFIG = {
  // Tus iniciales (se muestran si no pones imagen)
  iniciales: "P-S",

  // URL de tu logo
  logoUrl: "img/logo.jpg",

  // Nombre de tu tienda
  nombre: "PRADO STORE",

  // Descripción corta
  descripcion: "Somos 'PRADO STORE' vendemos zapatillas de baloncesto a los mejores precios Somos de Puno - Juliaca · Envíos a todo el Perú",

  // WhatsApp GRUPAL
  whatsappGrupoUrl: "https://chat.whatsapp.com/ErrEVGPxUq8DmkT03vtexM?s=cl&p=a&iam=2",

  // WhatsApp PERSONAL (51 + número, sin + ni espacios)
  whatsappPersonalNumero: "51913716006",
  whatsappPersonalMensaje: "Hola PRADO STORE, vengo de tu página web y quiero más información.",

  // URL de tu catálogo web
  catalogoUrl: "https://pradostore.github.io/catalogo-digital-pradostore/",

  // Redes sociales (deja "" para ocultar)
  tiktok: "https://www.tiktok.com/@prado_store_0?_r=1&_t=ZS-9BHysw7C6i4",
  instagram: ""
};

// =============================================
//   NO TOCAR DE AQUÍ PARA ABAJO
// =============================================
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  // Iniciales o logo
  if (CONFIG.logoUrl) {
    $("iniciales").outerHTML = `<img src="${CONFIG.logoUrl}" alt="Logo">`;
  } else {
    $("iniciales").textContent = CONFIG.iniciales;
  }

  // Textos
  $("nombre").textContent = CONFIG.nombre;
  $("descripcion").textContent = CONFIG.descripcion;

  // Botón WhatsApp Grupo
  $("btnWhatsapp").href = CONFIG.whatsappGrupoUrl;

  // Botón WhatsApp Personal (arma el enlace con el mensaje automático)
  const msjPersonal = encodeURIComponent(CONFIG.whatsappPersonalMensaje);
  $("btnWhatsappPersonal").href = `https://wa.me/${CONFIG.whatsappPersonalNumero}?text=${msjPersonal}`;

  // Botón Catálogo
  $("btnCatalogo").href = CONFIG.catalogoUrl;

  // Redes (ocultar si está vacío)
  const footer = document.querySelector(".footer");
  const enlaces = [];
  if (CONFIG.tiktok)    enlaces.push(`<a href="${CONFIG.tiktok}" target="_blank" rel="noopener">TikTok</a>`);
  if (CONFIG.instagram) enlaces.push(`<a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a>`);
  footer.innerHTML = enlaces.join("");
});