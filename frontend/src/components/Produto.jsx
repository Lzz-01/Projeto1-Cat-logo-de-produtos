function Produto({ produto }) {
  return (
    <article className="card">
      <div className="card">
        <span className="codigo-produto"> Item #{produto.id}</span>
        <span className="Disponível">Disponível</span>
      </div>

      <h2>{produto.nome}</h2>

      <p>{produto.descricao || "Produto sem descrição cadastrada."}</p>

      <div className="preco-produto">
        <span>Preço</span>
        <strong>R$ {Number(produto.preco).toFixed(2).replace(".", ",")}</strong>
      </div>
    </article>
  );
}

export default Produto;
