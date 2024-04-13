import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimerComponente from './PrimerComponente'

//está importando uma variável função
import {SegundoComponente}  from './SegundoComponente'

import { TercerComponent } from './TercerComponent'

import { Props } from './Props'

// importar o arquivo css
import './styles.css'

import { ContadorApp } from './ContadorApp'
import { ContadorApp2 } from './ContadorApp2'
import { Contador3 } from './Contador3'
import { ListadoApp } from './ListadoApp'
import { ListadoApp2 } from './ListadoApp2'
import { UsersApp } from './UsersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp/>
    <ListadoApp2/>
    <ListadoApp/>
    <Contador3 value={0}/>
    <ContadorApp2/>
    <ContadorApp/>
    <Props titulo='título' subtitulo='react' soma={5}/>
    <PrimerComponente/>
    <SegundoComponente/>
    <TercerComponent/>
  </React.StrictMode>,
)
