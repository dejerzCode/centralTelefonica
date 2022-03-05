import LlamadaLocal from './entities/LlamadaLocal.js';
import LlamadaInterior from './entities/LlamadaInterior.js';
import CentralTelefonica from './sistema/CentralTelefonica.js';

    const llamadaUno = new LlamadaLocal();
    llamadaUno.setNumeroOrigen(33224455);
    llamadaUno.setNumeroDestino(22556644);
    llamadaUno.setDuracion(120);


    const llamadaDos = new LlamadaLocal();
    llamadaDos.setNumeroOrigen(44332266);
    llamadaDos.setNumeroDestino(22556644);
    llamadaDos.setDuracion(70);


    const llamadaTres = new LlamadaLocal(25252525, 30355545, 65)


    const llamadaInteriorUno = new LlamadaInterior(45456565, 32001545, 45, 1)
    const llamadaInteriorDos = new LlamadaInterior(54545877, 32001545, 83, 2)
    const llamadaInteriorTres = new LlamadaInterior(45454587, 32001545, 22, 3)

    const central = new CentralTelefonica();
    central.registrarLlamada(llamadaUno);
    central.registrarLlamada(llamadaDos);
    central.registrarLlamada(llamadaTres);

    central.registrarLlamada(llamadaInteriorUno);
    central.registrarLlamada(llamadaInteriorDos);
    central.registrarLlamada(llamadaInteriorTres);

    console.log(`Total de llamadas: ${central.getTotalLlamadas()}`)
    console.log(`Total de facturado: ${central.getAcumulador()}`)
