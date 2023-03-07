# Módulo HTTP

- Podemos criar um **servidor HTTP** com esse módulo.

- Ou seja, receber uma requisição e **enviar um código HTML** como resposta ao usuário.

- O método **createServer** tem a função de criar o servidor.

- O método **listen** para determinar a porta a ser executada o servidor.

# Retornar HTML

- Podemos adicionar um **status code** no retorno, com a propriedade statusCode.
- Mudar os headers para **text/html**.
- E retornar o HTML pelo **método end** do http.