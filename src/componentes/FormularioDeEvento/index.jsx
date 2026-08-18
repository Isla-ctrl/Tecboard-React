import './formulario-de-evento.estilos.css';
import { CampoDeFormulario } from "../CampoDeFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento({ temas }) {

  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }

    console.log(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
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
        <Label htmlFor="capa">
          Qual a capa do evento?
        </Label>
        <CampoDeEntrada 
        type="text" 
        id="capa" 
        placeholder="https://"
        name="capa"
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
        <ListaSuspensa id="tema" name="tema" itens={temas} />
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
