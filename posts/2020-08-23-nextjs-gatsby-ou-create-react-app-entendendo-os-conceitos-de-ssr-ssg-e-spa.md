---
title: NextJS, Gatsby ou Create React App? Entendendo os conceitos de SSR, SSG e SPA.
description: Antes de escolher um deles, é importante saber as diferenças e suas
  necessidades.
date: 2020-08-22 09:14:26
thumbnail: assets/img/blog-image.png
category: js
background: "#c5c769"
---
## Introdução

Fala pessoal, o post de hoje é para falar de um assunto bem importante e que causa muitas dúvidas como: "Quando será que eu devo usar Gatsby ou Next ou Create React App?". Mas antes mesmo dessa dúvida, é importante saber as diferenças e também entender as suas necessidades, só assim a gente consegue realmente escolher o que for melhor para nossa aplicação.

Esse post será baseado em um dos vídeos que eu fiz para o meu curso React Avançado, no curso nós utilizamos o NextJS e por isso eu resolvi falar sobre os funcionamentos lá.

## O que é um framework web?

O framework web é um sistema opinativo onde já são definidas as estruturas e ferramentas do projeto. Essas definições podem ir desde somente a estrutura de pastas, até mesmo a ferramenta que irá compilar o projeto.

<!--StartFragment-->

## Por que usar um framework web?

Acho que já sabendo o que é, fica fácil saber o porquê de usar né? É muito mais fácil de seguir padrões já pré-determinados do que criar um completamente do zero. Sem contar que você já sai programando de fato a sua solução, ao invés de ter que pensar na parte ferramental de tudo.

## Mas, cuidado!

É uma maravilha já ter tudo prontinho para já botar a mão na massa, mas isso pode causar uma enorme dor de cabeça a longo prazo se você não souber exatamente o que usar e ir só pelo **hype** de ferramenta X ou Y.

Vou dar um exemplo que vi esses dias de um aluno perguntando:

> Galera que manja do next, eu consigo pegar um projeto já pronto em html, css e js, e passar ele para o nextjs?

E obviamente, eu perguntei, mas por que de usar o Next? E a resposta foi:

> A empresa quer umas mudanças e vai passar os projetos para o react e next para o SEO kkk

Um dos maiores erros de muitas pessoas/empresas é achar que se botar o Gatsby/Next vai ter um SEO melhor. Mas isso não é verdade e sabe por quê? Bem simples, tanto o Gatsby quanto o Next (usando SSG) vão gerar estáticos, que é exatamente "html/css/js" lá do início!

> Ou seja, você vai reescrever tudo e, no fim, trocar o famoso 6 por meia duzia.

É por isso que antes mesmo de escolher uma tecnologia/framework, é importante saber o que você precisa e o que você já tem.

Pense assim, se você já tem uma equipe inteira proficiente em Angular, não tem razão nenhuma para trocar por React, só porque React tem "mais hype".

## Sobre o NextJS

O [NextJS](https://nextjs.org/) é um framework já "velho de guerra", mas que tem ganhado cada vez mais tração graças aos maravilhosos últimos updates deles, que aliás, não param de acontecer.

No momento que escrevo esse post, eles lançaram a [versão 9.5](https://nextjs.org/blog/next-9-5), que está absurdamente interessante, trazendo conceitos cada mais interessantes na parte do que eles chamam de "next-gen static".

E para quem não sabe, o NextJS fica embaixo do guarda-chuva da [Vercel](https://vercel.com/), antiga Zeit, que tem como fundador o [Guillermo Rauch](https://twitter.com/rauchg), que é o criador do [Socket.io](https://socket.io/) e bom, mais outras mil coisas que você usa ou já deve ter ouvido falar.

E quais seriam as características do NextJS? Bom, vou listar apenas algumas delas:

* Renderização no servidor (Server Side Rendering - SSR)
* Geração de estáticos (Static Site Generation - SSG)
* CSS-in-JS (Styled-jsx, Styled Components, Emotion, etc)
* Zero Configuration (rotas, hot reloading, code splitting…)
* Completamente extensível (controle completo do Babel/Webpack, plugins, etc)
* Otimizado para produção

E isso aí, é só a pontinha do iceberg, existem muito mais coisas e eu aconselho fortemente você dar uma olhada no site do [nextjs.org](https://nextjs.org/)

### E quais as diferenças entre Next, Gatsby e Create React App?

Para poder comparar, antes mesmo nós precisamos falar sobre os **diferentes tipos de aplicações**, que são:

* Sites estáticos (HTML/CSS/JS - SSG)
* Client Side Rendering (Single Page Application - SPA)
* Server Side Rendering (SSR)