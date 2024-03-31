import { useEffect } from "react";
import { selector } from "../scripts/selector";

const Selector = () => {
  useEffect(() => {
    selector();
  }, []);

  return (
    <select name="options" id="options">
      <option value="selecione">Selecione</option>
      <option value="actinidios">Actinidios</option>
      <option value="gasesNobres">Gases Nobres</option>
      <option value="lantanideos">Lantanideos</option>
      <option value="metaisAlcalinos">Metais Alcalinos</option>
      <option value="metaisAlcalinosTerrosos">Metais Alcalinos Terrosos</option>
      <option value="metaisDeTransicao">Metais De Transicao</option>
      <option value="naoMetais">Não Metais</option>
      <option value="posTransicao">Pos Transicao (Outros Metais)</option>
      <option value="propriedadesDesconhecidas">
        Propriedades Desconhecidas
      </option>
      <option value="semimetais">Semimetais</option>
    </select>
  );
};

export default Selector;
