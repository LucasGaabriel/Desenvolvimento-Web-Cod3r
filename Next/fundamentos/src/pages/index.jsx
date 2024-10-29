import Navegador from '@/components/Navegador'
import Link from 'next/link'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
            <Navegador texto="Navegação #1" destino="/navegacao/" cor="green" />
            <Navegador texto="Navegação #2" destino="/cliente/sp-2/123" cor="blue" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="#51074a" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="darkgoldenrod" />
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a" />
        </div>
    )
}