# 💱 Conversor de Moeda no Terminal (Node.js)

Este é um pequeno projeto de terminal feito com **Node.js** que converte valores de uma moeda para outra usando a [Frankfurter API](https://www.frankfurter.app/), sem necessidade de chave de API.

---

## 🚀 Funcionalidades

- Entrada interativa via terminal
- Conversão de moedas em tempo real
- Suporte a diversas moedas (USD, BRL, EUR, GBP, etc.)
- Tratamento básico de erros

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) instalado (versão 14+)
- Terminal ou prompt de comando

---

## 🛠️ Instalação

1. Clone o repositório ou baixe os arquivos:

```bash
git clone https://github.com/FelipeFelema/conversor-moeda-terminal.git
cd conversor-moeda-terminal
```

2. Instale a dependência necessária:

```bash
npm install node-fetch
```

---

## ▶️ Como usar

Execute o programa com:

```bash
node index.js
```

Digite as informações solicitadas:

```
Digite o valor que deseja converter: 100
Digite a moeda de origem (ex: USD): usd
Digite a moeda de destino (ex: BRL): brl
```

Saída esperada:

```
Convertendo 100 USD para BRL...

100 USD equivalem a 547.01 BRL
```

---

## 🌐 Moedas suportadas

Você pode usar códigos de moeda internacionais (padrão ISO 4217), como:

- USD (Dólar americano)
- BRL (Real brasileiro)
- EUR (Euro)
- GBP (Libra esterlina)
- JPY (Iene japonês)
- ...e muitos outros!

Veja a [lista completa de moedas aqui](https://www.frankfurter.app/docs/#available-currencies).

## 🧑‍💻 Autor

Feito por Felipe Felema — em aprendizado constante rumo à carreira back-end! 🚀
