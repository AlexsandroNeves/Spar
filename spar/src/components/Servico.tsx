const Servico = () =>{
    return(
        <>
         <section id="servico">
            <h3>O que oferecemos</h3>
            <h4>Uma ampla diversidade de serviços com alto padrão de qualidade</h4>
            <div className="cards">
                <div className="card">
                    <div className="img-container">
                        {/*  
                       <img src="imagens/beleza.jpeg" alt="">
                       */} 
                    </div>
                    <h5>Bem-estar</h5>
                    <p>Estar bem com nós mesmos faz toda a diferença. Aproveite nossos tratamentos para ter um momento
                        de auto-cuidado e aumentar a sua auto-estima</p>
                </div>
                <div className="card">
                    <div className="img-container">
                         {/* 
                        <img src="imagens/bem-estar.jpeg" alt="">
                    */} 
                    </div>
                    <h5>Renovação</h5>
                    <p>Você merece relaxar. Confira as nossas opções de massagens que vão fazer você renovar as energias
                        e esquecer do estresse do dia-a-dia</p>
                </div>
                <div className="card">
                    <div className="img-container">
 {/* 
                        <img src="imagens/descanso.jpeg" alt="">
                        */} 
                    </div>
                    <h5>Massagem</h5>
                    <p>Se você precisa de um dia especial para cuidar de você, preparamos opções que promovem uma
                        renovação completa. Confira nossos dias especiais, banhos e tratamentos holísticos. </p>
                </div>
            </div>
        </section>
        </>
    );
}
export default Servico;