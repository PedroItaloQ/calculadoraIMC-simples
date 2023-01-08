import styles from './Main.module.css'
import { useState } from 'react'

function Main() {

    const [peso, setPeso] = useState('1')
    const [altura, setAltura] = useState('1')


    const heightChange = event => {
        setAltura(event.target.value)
    }

    const weightChange = event => {
        setPeso(event.target.value)
    }

    const limparClick = () => {
        setAltura('1')
        setPeso('1')
    }

    const calcularClick = () => {
        
        const resultado = (peso / (altura * altura)).toFixed(1);
        if(resultado < 0){
            return alert('Erro! Apenas números positivos.')
        }

        return resultado
    }


    const retorno = () => {
        const resultado = calcularClick()

        return { __html: `Seu IMC: ${resultado.replace('.', ',')}`}
    }
    /*function operationInputs(peso, altura){
        const imc = (peso / (peso * altura)).toFixed(1);
        
        return imc;
    }*/
    

    return(
        <div className={styles.containerPrimary}>
            <div className={styles.containerSecondary}>
                <h2>Calculadora IMC</h2>
                <div >
                    <label>Peso:</label>
                    <input className={styles.weight}
                    type='number'
                    placeholder='ex: 70,5'
                    value={peso}
                    onChange={weightChange}
                    />
                    
                </div>

                <div>
                    <label>Altura:</label>
                    <input className={styles.height}
                    type='number'
                    placeholder='ex: 1,75'
                    value={altura}
                    onChange={heightChange}/>
                </div>

                <div>
                    <button onClick={limparClick}>Limpar</button>
                </div>
            </div>
            <h3><span className={styles.calcImc} dangerouslySetInnerHTML={retorno()}></span></h3>
            <h3>Classificação IMC</h3>
            <div className={styles.containerTertiary}>

                <div className={styles.tabela}>
                <p>Menor que 18,5:</p> <p className={styles.parag}>Magreza</p>
                </div>

                <div className={styles.tabela}>
                <p>Entre 18,5 e 24,9:</p> <p className={styles.parag}>Normal</p>
                </div>

                <div className={styles.tabela}>
                <p>Entre 25,0 e 29,9:</p><p className={styles.parag}>Sobrepeso</p>
                </div>

                <div className={styles.tabela}>
                <p>Entre 30,0 e 39,9:</p><p className={styles.parag}>Obesidade</p>
                </div>

                <div className={styles.tabela}>
                <p>Maior que 40:</p><p className={styles.parag}>Obesidade Grave</p>
                </div>
            </div>
        </div>
    )
}

export default Main;