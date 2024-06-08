export interface Clase {
  hora: string;
  lunes: { nombre: string; icono: string; limite: number; inscritos: number };
  martes: { nombre: string; icono: string; limite: number; inscritos: number };
  miercoles: {
    nombre: string;
    icono: string;
    limite: number;
    inscritos: number;
  };
  jueves: { nombre: string; icono: string; limite: number; inscritos: number };
  viernes: { nombre: string; icono: string; limite: number; inscritos: number };
}

export const HORARIO: Clase[] = [
  {
    hora: '7:30',
    lunes: {
      nombre: 'Bodytono',
      icono: 'fas fa-dumbbell',
      limite: 20,
      inscritos: 0,
    },
    martes: {
      nombre: 'Fitball',
      icono: 'fas fa-futbol',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Gap',
      icono: 'fas fa-heartbeat',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Woman eXtrem',
      icono: 'fas fa-female',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '8:30',
    lunes: {
      nombre: 'Gap',
      icono: 'fas fa-heartbeat',
      limite: 20,
      inscritos: 0,
    },
    martes: {
      nombre: 'Stretching',
      icono: 'fas fa-stretch',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Stretching',
      icono: 'fas fa-stretch',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Bodytono',
      icono: 'fas fa-dumbbell',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Fitball',
      icono: 'fas fa-futbol',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '9:30',
    lunes: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
    martes: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Stretching',
      icono: 'fas fa-stretch',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Bodytono',
      icono: 'fas fa-dumbbell',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Woman eXtrem',
      icono: 'fas fa-female',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '10:15',
    lunes: { nombre: 'Zumba', icono: 'fas fa-music', limite: 20, inscritos: 0 },
    martes: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Woman eXtrem',
      icono: 'fas fa-female',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '15:30',
    lunes: { nombre: 'Zumba', icono: 'fas fa-music', limite: 20, inscritos: 0 },
    martes: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '17:00',
    lunes: {
      nombre: 'Woman eXtrem',
      icono: 'fas fa-female',
      limite: 20,
      inscritos: 0,
    },
    martes: {
      nombre: 'Fitball',
      icono: 'fas fa-futbol',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Aerotono',
      icono: 'fas fa-running',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Aerotono',
      icono: 'fas fa-running',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '18:00',
    lunes: { nombre: 'Zumba', icono: 'fas fa-music', limite: 20, inscritos: 0 },
    martes: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Woman eXtrem',
      icono: 'fas fa-female',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '19:00',
    lunes: {
      nombre: 'Fitball',
      icono: 'fas fa-futbol',
      limite: 20,
      inscritos: 0,
    },
    martes: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Pilates',
      icono: 'fas fa-yoga',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'Zumba',
      icono: 'fas fa-music',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Bodytono',
      icono: 'fas fa-dumbbell',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '19:15',
    lunes: {
      nombre: 'HathaYoga',
      icono: 'fas fa-leaf',
      limite: 20,
      inscritos: 0,
    },
    martes: {
      nombre: 'HathaYoga',
      icono: 'fas fa-leaf',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'HathaYoga',
      icono: 'fas fa-leaf',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'HathaYoga',
      icono: 'fas fa-leaf',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'HathaYoga',
      icono: 'fas fa-leaf',
      limite: 20,
      inscritos: 0,
    },
  },
  {
    hora: '20:00',
    lunes: {
      nombre: 'Aerotono',
      icono: 'fas fa-running',
      limite: 20,
      inscritos: 0,
    },
    martes: {
      nombre: 'Gap',
      icono: 'fas fa-heartbeat',
      limite: 20,
      inscritos: 0,
    },
    miercoles: {
      nombre: 'Bodytono',
      icono: 'fas fa-dumbbell',
      limite: 20,
      inscritos: 0,
    },
    jueves: {
      nombre: 'HathaYoga',
      icono: 'fas fa-leaf',
      limite: 20,
      inscritos: 0,
    },
    viernes: {
      nombre: 'Aerotono',
      icono: 'fas fa-running',
      limite: 20,
      inscritos: 0,
    },
  },
];
