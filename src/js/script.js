const form = document.querySelector('form');

let vendaSim = document.querySelector('#radioS');
let vendaNao = document.querySelector('#radioN');

const ordenar = document.querySelector('#ordenar');

form.addEventListener('submit', recebeform)
function recebeform(e) {
        e.preventDefault();

        let table = document.querySelector("table");
        const nomeProduto = document.querySelector('#nomeProduto');
        const valorProduto = document.querySelector('#valorProduto');
        let tr = document.createElement('tr');

        function pegaNome() {
            let tdProduto = document.createElement('td');
            let produto = nomeProduto.value;
            tdProduto.textContent = produto;
            return tdProduto;
        }

        function pegaValor () {
            let tdValor = document.createElement('td');
            let valor = valorProduto.value;
            tdValor.textContent = valor;
            return tdValor;

        }

        function pegaSim () {
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

        function limpaInput () {
            nomeProduto.value = '';
            valorProduto.value = '';
            vendaNao.checked = false;
            vendaSim.checked = false;
            nomeProduto.focus()
        }

        tdProduto = pegaNome();
        tr.appendChild(tdProduto);

        tdValor = pegaValor();
        tr.appendChild(tdValor);

        tdSim = pegaSim()
        tr.appendChild(tdSim);

        tr.classList = "Newtr"
        table.appendChild(tr);

        limpaInput()
        table.scrollIntoView({ behavior: "smooth" });

}

ordenar.addEventListener('click', function() {
        let table = document.querySelector("table");
        let linhas = Array.from(table.getElementsByTagName("tr"));

        // Ordena as linhas com base no valor da segunda célula
        linhas.sort(function(a, b) {
            var A = parseInt(a.cells[1].textContent);
            var B = parseInt(b.cells[1].textContent);
            return A - B;
        });

        // Limpa a tabela existente
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        // Adiciona as linhas ordenadas de volta à tabela
        linhas.forEach(function(row) {
            table.appendChild(row);
        });
})
