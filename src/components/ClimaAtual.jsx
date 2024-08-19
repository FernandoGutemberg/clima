import React from "react";

const ClimaAtual = ({ clima }) => {
    // Verifique se `clima` existe e se as propriedades `weather` e `main` são válidas
    if (!clima || !clima.weather || !clima.main) {
        return <p>Aguardando busca para acessar dados do clima...</p>; // ou qualquer outra mensagem de carregamento
    }

    return (
        <div>
            <h3>Clima Atual</h3>
            <img
                src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
                alt={clima.weather[0].description}
            />
            <p>{clima.main.temp}°C</p>
            <p>{clima.weather[0].description}</p>
        </div>
    );
};

export default ClimaAtual;
