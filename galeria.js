
document.querySelector(".div1").innerHTML = `<figure class="card">
<img src = "StockCake-Fish in water_1726365851.jpg" alt="tech" width="70">
<figcaption>tech</figcaption>
</figure>   `;

const $lista1 = document.createElement("ul");
let $contenidoLista1 = `
<li>Presentación </li>
<li>Galería </li>
<li>FAQ </li>
<li>Blog </li>
<li>Contacto </li>
`;
$lista1.insertAdjacentHTML("afterbegin",$contenidoLista1);
document.querySelector("#seccion4").insertAdjacentElement("afterbegin",$lista1);


const $tabla1 = document.createElement("table"); 
let $contenidoTabla = `
<tr>
                <th>Propósito</th><th>porcentaje</th>
            </tr>
            <tr>
                <td>Esencial </td><td>70%</td> 
            </tr>
            <tr>
                <td>Inversión </td><td>20%</td>
            </tr>
            <tr>
                <td>Pensión </td><td>10%</td>
            </tr>
`;
$tabla1.insertAdjacentHTML("afterbegin",$contenidoTabla);
const $seccion5 = document.querySelector("#seccion5");
//$seccion5 = document.getElementById("seccion5");
$seccion5.insertAdjacentElement("afterbegin",$tabla1);


$template = document.getElementById("template-card").content;
$fragment = document.createDocumentFragment();
$seccion2 = document.querySelector(".seccion2");
$chuto = document.createElement("div");

const fotos = [{
    title: "tec",
    img: "istockphoto-1757746308-1024x1024.jpg",
},{
    title: "anim",
    img: "StockCake-Fish in water_1726365851.jpg",
}];

fotos.forEach( el => {
    $template.querySelector("img").setAttribute("src",el["img"]);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("img").setAttribute("width","200");
    $template.querySelector("figcaption").textContent = "tec";
    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});
//document.body.appendChild($fragment);
//$chuto.content = $template;
document.body.children[1].children[5].appendChild($fragment);
//console.log(document.body.children[1]);
//document.getElementById("template-card").appendChild($fragment);
//document.body.querySelector(".seccion2").appendChild($fragment);
//document.body.appendChild($chuto);
//$chuto.appendChild($fragment);
//document.body.children[1].appendChild($fragment);