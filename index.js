import express from 'express';
import path from 'path';

const porta = 3000;

let lista = [];

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'public')));
function cadastro(req, res){
    const cnpj = req.body.cnpj;
    const razaoSocial = req.body.razaoSocial;
    const nomeFantasia = req.body.nomeFantasia;
    const endereço = req.body.endereço;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const email = req.body.email;
    const telefone = req.body.telefone;

    //verificando se os campos foram preenchidos (não estão vazios)
    if (cnpj && razaoSocial && nomeFantasia && endereço && cidade && uf && cep && email && telefone) 
    {
        lista.push({
            cnpj: cnpj,
            razaoSocial: razaoSocial,
            nomeFantasia: nomeFantasia,
            endereço: endereço,
            cidade: cidade,
            uf: uf,
            cep: cep,
            email: email,
            telefone: telefone
        });
        res.redirect('/lista');
    }
    else
    {
        res.write(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cadastro de emrpesa</title>
            <link rel="stylesheet" href="styleCadastro.css">
        </head>
        <body>
            <div class="container m-5">
                <form method="POST" action='/cadastro' class="border row g-3 needs-validation" novalidate>
                    <h1>Cadastro</h1>
                    <div class="col-md-4">
                        <label for="cnpj" class="form-label">CNPJ:</label>
                        <input type="number" placeholder="Ex: XX. XXX. XXX/0001-XX" class="form-control" id="cnpj" name="cnpj" value="${cnpj}" required>`);
        if (cnpj == ""){
            res.write(`
                        <div m-2 class="alert alert-danger" role="alert">
                            Por favor, informe o cnpj da empresa.
                        </div>
            `);
        }
        res.write(`</div>
                        <br>
                        <div class="col-md-4">
                            <label for="razaoSocial" class="form-label">Razão Social</label>
                            <input p-1 type="text" class="form-control" id="razaoSocial" placeholder="Ex: InovaTech Soluções Inteligentes Ltda." name="razaoSocial" value="${razaoSocial}" required>`);
        if (razaoSocial == ""){
            res.write(`<div m-2 class="alert alert-danger" role="alert">
                                Por favor, informe a razão social da empresa.
                            </div>`);
        }        
        res.write(`
                        <br>
                        </div>
                        <div class="col-md-4">
                            <label for="nomeFantasia" class="form-label">Nome fantasia da empresa</label>
                            <div class="input-group has-validation">
                                <input type="text" class="form-control" placeholder="Ex: NuvemGenius Tecnologia & Inovação" id="nomeFantasia" name="nomeFantasia" value="${nomeFantasia}" aria-describedby="inputGroupPrepend" required>
        `);            
        if (nomeFantasia == ""){
            res.write(`<div class="alert alert-danger" role="alert">
                                Por favor, informe o nome fantasia da empresa.
                            </div>`);
        }
        res.write(`    </div>
                        </div>
                        <hr>
                        <div class="col-md-6">
                            <label for="endereço" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="endereço" placeholder="Ex: Rua Exemplo nº00" name="endereço" value="${endereço}" required>`
        );
        if (endereço == ""){
            res.write(`<div class="alert alert-danger" role="alert">
                                Por favor, informe o endereço da empresa.
                            </div>`);
        }
        res.write(`    </div>

                        <br>
                        <div class="col-md-6">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" class="form-control" placeholder="Ex: São Paulo" id="cidade" name="cidade" value="${cidade}" required>`
        );
        if (cidade == ""){
            res.write(`<div class="alert alert-danger" role="alert">
                                Por favor, informe a cidade da empresa.
                            </div>`);
        }
        res.write(`</div>
                        <br>
                        <div class="col-md-3">
                            <label for="uf" class="form-label">UF</label>
                            <select class="form-select" id="uf" name="uf" required>
                                <option selected disabled value=${uf}>Estado</option>
                                <option value="AC">AC</option>
                                <option value="AL">AL</option>
                                <option value="AP">AP</option>
                                <option value="AM">AM</option>
                                <option value="BA">BA</option>
                                <option value="CE">CE</option>
                                <option value="DF">DF</option>
                                <option value="ES">ES</option>
                                <option value="GO">GO</option>
                                <option value="MA">MA</option>
                                <option value="MT">MT</option>
                                <option value="MS">MS</option>
                                <option value="MG">MG</option>
                                <option value="PA">PA</option>
                                <option value="PB">PB</option>
                                <option value="PR">PR</option>
                                <option value="PE">PE</option>
                                <option value="PI">PI</option>
                                <option value="RJ">RJ</option>
                                <option value="RN">RN</option>
                                <option value="RS">RS</option>
                                <option value="RO">RO</option>
                                <option value="RR">RR</option>
                                <option value="SC">SC</option>
                                <option value="SP">SP</option>
                                <option value="SE">SE</option>
                                <option value="TO">TO</option>
                            </select>`
        );
        if (!uf){
            res.write(`<div class="alert alert-danger" role="alert">
                                Por favor, selecione um estado.
                            </div>`);
        }
        res.write(`</div>
                        <br>
                        <div class="col-md-3">
                            <label for="cep" class="form-label">CEP da empresa</label>
                            <input type="text" class="form-control" placeholder="Ex: XXXXX-XXX" id="cep" name="cep" value="${cep}" required>`);
        if (cep == ""){
            res.write(`<div class="alert alert-danger" role="alert">
                                Por favor, informe o cep.
                            </div>`);
        }
        res.write(`</div>
                        <br>
                        <div class="col-md-3">
                            <label for="email" class="form-label">Email da empresa</label>
                            <input type="email" class="form-control" placeholder="Ex: exemplo@exemplo.com" id="email" name="email" value="${email}" required>`);
        if (email == ""){
            res.write(`<div class="alert alert-danger" role="alert">
                                Por favor, informe o email da empresa.
                            </div>`);
        }
        res.write(`</div>
                        <br>
                        <div class="col-md-3">
                            <label for="telefone" class="form-label">Telefone da empresa</label>
                            <input type="number" placeholder="Ex: 99999-9999" class="form-control" id="telefone" name="telefone" value="${telefone}" required>`);
        if (telefone == ""){
            res.write(`<div  class="alert alert-danger" role="alert">
                                Por favor, informe o telefone da empresa.
                            </div>`);
        }
        res.write(`</div>
                    </div>
                        <br>
                        <div class="col-12 mb-3">
                            <button class="btn btn-primary" type="submit">Cadastrar</button>
                            <a href="/"><button class="btn btn-secondary">Voltar</a></button>                 
                        </div>
                    </form>
                </div>
            </body>
        </html>`);
        res.end(); 
    }

}
app.post('/cadastro', cadastro);

app.get('/lista', (req,res)=>{
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Resultado do cadastro</title>');
    res.write('<meta charset="utf-8">');
    res.write('<link rel="stylesheet" href="styleLista.css">')
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Lista de empresas</h1>');
    res.write('<table class="table table-striped">');
    res.write('<tr>');
    res.write('<th>Nome</th>');
    res.write('<th>Razão Social</th>');
    res.write('<th>Nome fantasia</th>');
    res.write('<th>Endereço</th>');
    res.write('<th>Cidade</th>');
    res.write('<th>Estado</th>');
    res.write('<th>CEP</th>');
    res.write('<th>Email</th>');
    res.write('<th>Telefone</th>');
    res.write('</tr>');
    for (let i=0; i<lista.length; i++){
        res.write('<tr>');
        res.write(`<td>${lista[i].cnpj}</td>`);
        res.write(`<td>${lista[i].razaoSocial}</td>`);
        res.write(`<td>${lista[i].nomeFantasia}</td>`);
        res.write(`<td>${lista[i].endereço}</td>`);
        res.write(`<td>${lista[i].cidade}</td>`);
        res.write(`<td>${lista[i].uf}</td>`);
        res.write(`<td>${lista[i].cep}</td>`);
        res.write(`<td>${lista[i].email}</td>`);
        res.write(`<td>${lista[i].telefone}</td>`);
        res.write('</tr>');
    }
    res.write('</table>');
    res.write('<a href="/">Voltar</a>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})