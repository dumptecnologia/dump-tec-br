# Dump Tecnologia

###### Criamos soluções impressionantes em tecnologia que ajudarão a sua empresa a se destacar.

---

O repositório das fontes do site da Dump Tecnologia!

> [dump.tec.br](https://dump.tec.br)

## Recursos

- [Jekyll](https://jekyllrb.com/) com sua versão compatível com o Github Pages;
- [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/) com
  compilador [Sass](https://getbootstrap.com/docs/5.0/getting-started/build-tools/#sass);
- [Jekyll Minifier](https://github.com/Mendeo/jekyll-minifier) para compilação de HTML, CSS e JS;
- Efeitos de uma Landing Page com [AOS library](https://michalsnik.github.io/aos/)
- Configurações [globais](./_config.yml) de variáveis, diretórios e arquivos;
- Um [bashscript](./build-and-up.sh) para subir localmente seu projeto via Docker;
- Blog com paginação dinâmica, tags e categorias;
- Contagem de visualizações/curtidas com [CountAPI](https://countapi.xyz/);
- Sistema de comentários com [Disqus](https://disqus.com/);
- Formulario de contato com resposta via email com [Static Forms](https://www.staticforms.xyz/);

## Começando

Faça o clone do projeto e execute o script para subir o servidor. Por padrão o servidor ira subir nas portas
80/4000/35729.

### Pré-requisitos

- Git
- Docker

### Instalação

1 - Clone o repositório

```sh
git clone https://github.com/dumptecnologia/dump.tec.br.git
```

2 - Execute o script bash para subir o servidor local

```sh
./build-and-up.sh
```

3 - O servidor estará disponível no seu ambiente local

> [http://localhost/index.html](http://localhost/index.html)

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.