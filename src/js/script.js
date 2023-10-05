// Constantes das principais funçoes
const form = document.querySelector('form');
const order = document.querySelector('#ordenar');

// função principal
form.addEventListener('submit', receiveform)
function receiveform(e) {

    // bloqueia o envio do formulario
    e.preventDefault();


        let table = document.querySelector("table");

        // Inputs
        const nameProduct = document.querySelector('#nomeProduto');
        const valueProduct = document.querySelector('#valorProduto');
        let yes = document.querySelector('#radioS')
        let no = document.querySelector('#radioN')

        // criando nova tr
        let tr = document.createElement('tr');

    // inserindo input em td (nome)
    function getName() {
            let tdProduct = document.createElement('td');
            let product = nameProduct.value;
            tdProduct.textContent = product;
            return tdProduct;
    }

    // inserindo input em td (valor)
    function getValue () {
            let tdValue = document.createElement('td');
            let value = valueProduct.value;
            tdValue.textContent = value;
            return tdValue;

    }

    // inserindo input em td (sim/não)
    function getBoolean () {
            if (form.radiosn.value == 'Não') {
                let tdN = document.createElement('td');
                let N = form.radiosn.value;
                tdN.textContent = N;
                return tdN;
            } else if (form.radiosn.value == 'Sim') {
                let tdS = document.createElement('td');
                let S = form.radiosn.value;
                tdS.textContent = S;
                return tdS;
            }
    }

    // limpar input
    function clearInput () {
            nameProduct.value = '';
            valueProduct.value = '';
            yes.checked = false;
            no.checked = false;
            nameProduct.focus()
    }

    // Inserindo tds em trs
    tdProduct = getName();
    tr.appendChild(tdProduct);

    tdValue = getValue();
    tr.appendChild(tdValue);

    tdBoolean = getBoolean()
    tr.appendChild(tdBoolean);

    // add class a tr
    tr.classList = "Newtr"

    //inrerindo trs na tabela 
    table.appendChild(tr);

    // limpando depois do envio
    clearInput();

    // scrool para as novas trs
    table.scrollIntoView({ behavior: "smooth" });
}

// função ordenar
order.addEventListener('click', function() {
        let table = document.querySelector("table");
        let tr = Array.from(table.getElementsByTagName("tr"));

        // Ordena as linhas com base no valor da segunda célula
        tr.sort(function(a, b) {
            var A = parseInt(a.cells[1].textContent);
            var B = parseInt(b.cells[1].textContent);
            return A - B;
        });

        // Limpa a tabela existente
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        // Adiciona as linhas ordenadas de volta à tabela
        tr.forEach(function(row) {
            table.appendChild(row);
        });
})
