export interface job_info {
  date: string
  company_name: string
  job_position: string
  job_description: string
}
const ExperienceInfo: job_info[] = [
  {
    date: '2023',
    company_name: 'meetkai',
    job_position: '',
    job_description: '',
  },
  {
    date: '2019',
    company_name: 'Universum',
    job_position: 'Soporte Tecnico',
    job_description:
      'Se otorgo ayuda y atencion a problemas tecnicos de los distintos trabajadores de la empresa, aplicando conocimeintos en configuracion de redes, mantenimiento de equipos de computo tanto preventivo como correctivo. A demas de redaccion de informes.',
  },
]
const Experience = () => {
  return (
    <section>
      <h2>Experience</h2>
      <div></div>
    </section>
  )
}

export default Experience

// ! probablemente no incluya esta seccion
