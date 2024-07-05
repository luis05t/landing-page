// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const pollutingGases = [
    {
      name: 'Dióxido de Carbono',
      description: 'Gas de efecto invernadero primario, producido principalmente por la quema de combustibles fósiles.',
      nomenclature: 'CO2',
    },
    {
      name: 'Metano',
      description: 'Potente gas de efecto invernadero, producido por la descomposición de materia orgánica y la ganadería.',
      nomenclature: 'CH4',
    },
    {
      name: 'Óxido Nitroso',
      description: 'Gas de efecto invernadero producido por actividades agrícolas y procesos industriales.',
      nomenclature: 'N2O',
    },
    {
      name: 'Clorofluorocarbonos',
      description: 'Gases sintéticos que dañan la capa de ozono y contribuyen al efecto invernadero.',
      nomenclature: 'CFCs',
    },
    {
      name: 'Ozono Troposférico',
      description: 'Contaminante secundario formado por reacciones químicas entre óxidos de nitrógeno y compuestos orgánicos volátiles.',
      nomenclature: 'O3',
    },
  ];

  for (const gas of pollutingGases) {
    await prisma.pollutingGases.create({
      data: gas,
    });
  }

  console.log('Seed data for pollutingGases has been inserted');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });