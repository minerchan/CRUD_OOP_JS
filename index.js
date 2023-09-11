// static, private, herança e polimofirsmo prototype
class MenuItem {
  constructor(nome, preco, imagem) {
    this.nome = nome;
    this.preco = preco;
    this.imagem = imagem;
  }

  Read() {
    const menu = document.querySelector(".menu");
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("data-nome", this.nome); // Adiciona o atributo data-nome ao elemento
    menuDiv.className = "menu-item";
    const img = document.createElement("img");
    img.src = this.imagem;
    img.alt = this.nome;

    const botoesDiv = document.createElement("div");
    botoesDiv.className = "botoes";

    const editarBtn = document.createElement("button");
    editarBtn.className = "editar";

    editarBtn.addEventListener("click", () => {
      const novoPreco = prompt(`Editar o preço de ${this.nome}:`, this.preco);
      if (novoPreco !== null) {
        this.preco = parseFloat(novoPreco);
        // Atualizar o preço na interface do usuário
        const precoElement = document.querySelector(
          `.menu-item[data-nome="${this.nome}"] .faixa h3`
        );
        precoElement.textContent = `R$ ${this.preco.toFixed(2)}`;
      }
    });

    const excluirBtn = document.createElement("button");

    excluirBtn.className = "excluir";

    excluirBtn.addEventListener("click", () => {
      const elemento = document.querySelector(
        `.menu-item[data-nome="${this.nome}"]`
      );
      if (elemento) {
        elemento.remove();
      }
    });

    botoesDiv.appendChild(editarBtn);
    botoesDiv.appendChild(excluirBtn);

    const faixaDiv = document.createElement("div");
    faixaDiv.className = "faixa";
    const h2 = document.createElement("h2");
    h2.textContent = this.nome;
    const h3 = document.createElement("h3");
    h3.textContent = `R$ ${this.preco.toFixed(2)}`;

    faixaDiv.appendChild(h2);
    faixaDiv.appendChild(h3);

    menuDiv.appendChild(img);
    menuDiv.appendChild(botoesDiv);
    menuDiv.appendChild(faixaDiv);

    menu.appendChild(menuDiv);
  }
}

MenuItem.prototype.excluir = function () {
  const elemento = document.querySelector(
    `.menu-item[data-nome="${this.nome}"]`
  );
  if (elemento) {
    elemento.remove();
  }
};

// Evento de envio do formulário para adicionar um novo item ao menu
document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const preco = parseFloat(document.getElementById("preco").value);
  const imagem = document.getElementById("imagem").value;

  const novoItem = new MenuItem(nome, preco, imagem);
  novoItem.Read();
});

// Adicionando itens iniciais ao menu
const niguiri = new MenuItem("Niguiri Salmão", 18.0, "./Assets/nigiri.jpeg");
const niguiriKani = new MenuItem(
  "Niguiri Kani",
  25.0,
  "./Assets/niguiriKani.jpg"
);
const Temaki = new MenuItem("Temaki", 30.0, "./Assets/temaki.jpg");
const CombinadoKafu = new MenuItem(
  "Combinado Kafú",
  379.0,
  "./Assets/Combinado.jpg"
);

niguiri.Read();
niguiriKani.Read();
Temaki.Read();
CombinadoKafu.Read();
CombinadoKafu.Read();

// Usando prototype
CombinadoKafu.excluir();
