import './formulario-de-evento.estilos.css';
import { CampoDeFormulario } from "../CampoDeFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha os dados do evento:
      </TituloFormulario>
      <div className='campos'>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada 
        type="text" 
        id="nome" 
        placeholder="Summer dev hits"
        />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Qual a data do evento?
        </Label>
        <CampoDeEntrada 
        type="date" 
        id="dataEvento"
        />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Qual o tema do evento?
        </Label>
        <ListaSuspensa />
      </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>
            Criar evento
        </Botao>
      </div>
    </form>
  )
}
