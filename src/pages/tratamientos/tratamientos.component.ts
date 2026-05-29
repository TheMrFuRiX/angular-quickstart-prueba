import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type GroupKey = 'general' | 'invasiva';
interface Treatment { id: string; title: string; description: string; image?: string }

@Component({
  selector: 'tratamientos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.css']
})
export class TratamientosComponent implements OnInit {
  groups: Record<GroupKey, Treatment[]> = {
    general: [
      {
        id: 'terapia-manual',
        title: 'Terapia manual',
        image: 'assets/TerapiaManual.jpg',
        description:
          'Conjunto de técnicas manuales (movilización articular, masoterapia y estiramientos) orientadas a disminuir el dolor, relajar la musculatura y recuperar la movilidad. Indicada en contracturas, cervicalgias, lumbalgias y rigidez articular, y se combina con ejercicio terapéutico para consolidar resultados.'
      },
      {
        id: 'osteopatia',
        image: 'assets/Osteopatia.jpg',
        title: 'Osteopatía',
        description:
          'Enfoque manual global que evalúa y trata disfunciones del sistema musculoesquelético, visceral y craneal mediante técnicas para recuperar el equilibrio del cuerpo, mejorar la movilidad y aliviar el dolor. Indicada en cervicalgias, lumbalgias, cefaleas tensionales, disfunción temporomandibular y sobrecargas.'
      },
      {
        id: 'electroterapia',
        title: 'Electroterapia',
        description:
          ' Aplicación controlada de corrientes y otras energías físicas para modular el dolor, reducir la inflamación y facilitar la recuperación del tejido. Útil en fases agudas y subagudas como complemento a la terapia manual y al ejercicio.'
      },
      {
        image: 'assets/Presoterapia.jpg',
        id: 'drenaje-linfatico',
        title: 'Drenaje linfático',
        description:
          'El drenaje linfático manual es una técnica que se utiliza para ayudar a estimular el sistema linfático del cuerpo para eliminar toxinas, reducir la retención de líquidos y mejorar la circulación linfática. Esto puede ser beneficioso para reducir la hinchazón, mejorar la función inmunológica y promover la salud general. Es especialmente útil para tratamientos postquirúrgicos, para personas que experimentan edema, problemas circulatorios o retención de líquidos. Este tratamiento se puede completar con Presoterapia.'
      },
      {
        id: 'atm',
        title: 'ATM',
        description:
          'Tratamiento de la articulación temporomandibular para aliviar dolor mandibular, ruidos articulares y limitación de apertura mediante terapia manual y ejercicios específicos.'
      },
      {
        id: 'ondas-de-choque',
        title: 'Ondas de choque radiales',
        description:
          'Las ondas de choque radiales son una terapia no invasiva que reduce el dolor, mejora la función y estimula la regeneración tisular. Se utilizan con excelentes resultados en casos de fascitis plantar, tendinitis rotuliana, codo de tenista, tendinitis del hombro y sobrecargas musculares.'
      }
    ],
    invasiva: [
      {
        id: 'neuromodulacion-percutanea',
        title: 'Neuromodulación percutánea',
        description:
          'Técnica invasiva ecoguiada que aplica corrientes sobre nervios periféricos para modular el dolor y mejorar el control neuromotor. Indicada en dolor neuropático, síndromes miofasciales y disfunciones del movimiento; se integra con ejercicio y reeducación.'
      },
      {
        id: 'electrolisis',
        title: 'Electrólisis percutánea',
        description:
          'Procedimiento ecoguiado que aplica corriente galvánica a través de una aguja para generar una respuesta inflamatoria controlada y promover la regeneración del tejido tendinoso. Indicada en tendinopatías crónicas y fibrosis; se combina con un programa de carga progresiva.'
      },
      {
        id: 'electropuncion',
        title: 'Electropunción',
        description:
          'Estimulación eléctrica a través de agujas en puntos musculares y miofasciales para reducir el dolor y el espasmo, mejorar la irrigación y la función. Útil en puntos gatillo, dolor crónico y sobrecargas; complementa la terapia manual y el ejercicio.'
      }
    ]
  };

  active: Record<GroupKey, string | null> = {
    general: null,
    invasiva: null,
  };

  select(group: GroupKey, id: string) {
    this.active[group] = this.active[group] === id ? null : id;
  }

  getSelected(group: GroupKey): Treatment | null {
    const id = this.active[group];
    return id ? this.groups[group].find((t: Treatment) => t.id === id) ?? null : null;
  }

  ngOnInit(): void {
    // Añadir imagen al tratamiento de Drenaje linfático
    
    // Añadir imagen al tratamiento de Pilates terapéutico
    
    this.active.general = this.groups.general[0]?.id ?? null;
    this.active.invasiva = this.groups.invasiva[0]?.id ?? null;
  }
}
